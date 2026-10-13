const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Small DOM harness runs the actual browser scripts and tab click handlers.
function renderPage() {
  class Element {
    constructor(tag) { this.tag = tag; this.childNodes = []; this.attributes = {}; this.listeners = {}; this.textContent = ''; }
    append(...nodes) { this.childNodes.push(...nodes); }
    classList = { add() {} };
    set innerHTML(value) { this.childNodes = []; this.textContent = value; }
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener(name, handler) { this.listeners[name] = handler; }
    querySelectorAll() { return this.childNodes.filter((node) => node.attributes.role === 'tab'); }
  }
  const roots = Object.fromEntries(['hero', 'overview-grid', 'reminders', 'day-tabs', 'day-panel', 'footer'].map((id) => [id, new Element('div')]));
  const context = vm.createContext({
    document: { getElementById: (id) => roots[id], createElement: (tag) => new Element(tag), documentElement: { style: { setProperty() {} } } },
    Image: class extends Element { constructor() { super('img'); } },
  });
  for (const file of ['tripData.js', 'app.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
  }
  const content = (node) => [node.textContent, ...node.childNodes.map(content)].join(' ');
  return { roots, context, content };
}

test('Korea page renders both hotels, entry reminder, and dated overnight return flight', () => {
  const { roots, content } = renderPage();
  assert.match(content(roots.hero), /2026\.10\.16 — 10\.19/);
  const overview = content(roots['overview-grid']);
  assert.match(overview, /LJ734/);
  assert.match(overview, /2026-10-17 01:25 TPE T1/);
  assert.match(overview, /LJ733/);
  assert.match(overview, /2026-10-18 22:40/);
  assert.match(overview, /2026-10-19 00:10/);
  assert.match(overview, /LOTTE CITY HOTEL/);
  assert.match(overview, /MFelice/);
  assert.equal(roots['overview-grid'].childNodes.length, 4);
  assert.equal(roots.reminders.hidden, false);
  const link = roots.reminders.childNodes[0].childNodes[2].childNodes[0];
  assert.equal(link.href, 'https://www.e-arrivalcard.go.kr/portal/main/index.do');
  assert.equal(link.rel, 'noopener noreferrer');
});

test('all four day tabs switch to their own itinerary including concert and arrival', () => {
  const { roots, content } = renderPage();
  const tabs = roots['day-tabs'].childNodes;
  assert.equal(tabs.length, 4);
  const expected = [
    ['2026.10.16', '銀赫見面會'],
    ['2026.10.17', 'KBS ARENA'],
    ['2026.10.18', '22:40'],
    ['2026.10.19', '3 人、3 件行李'],
  ];
  tabs.forEach((tab, index) => {
    tab.listeners.click();
    for (const text of expected[index]) assert.ok(content(roots['day-panel']).includes(text));
    assert.equal(tabs.filter((item) => item.attributes['aria-selected'] === 'true').length, 1);
    assert.equal(tab.attributes['aria-selected'], 'true');
  });
});

test('existing single-hotel data and a page without reminders still render', () => {
  const { roots, context, content } = renderPage();
  vm.runInContext("init({hotel: {name: 'Original hotel'}, days: []})", context);
  assert.equal(roots['overview-grid'].childNodes.length, 1);
  assert.match(content(roots['overview-grid']), /Original hotel/);
  assert.equal(roots.reminders.hidden, true);
  assert.equal(roots.reminders.childNodes.length, 0);
  assert.match(content(roots['day-panel']), /目前還沒有安排每日行程/);
});
