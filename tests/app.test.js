const test = require('node:test');
const assert = require('node:assert/strict');

const { formatDateRange, validLinks, getDay, safeText, scheduleDetailLines } = require('../app.js');

test('formatDateRange renders a compact range for the trip dates', () => {
  assert.equal(
    formatDateRange({ startDate: '2026-10-16', endDate: '2026-10-18' }),
    '2026.10.16 — 10.18'
  );
});

test('validLinks keeps only links with both label and URL', () => {
  assert.deepEqual(
    validLinks([
      { label: 'Google Maps', url: 'https://maps.google.com/' },
      { label: 'Missing URL', url: '' },
      { label: '', url: 'https://example.com/' },
      null
    ]),
    [{ label: 'Google Maps', url: 'https://maps.google.com/' }]
  );
});

test('getDay falls back to the first day when index is invalid', () => {
  const days = [{ day: 1 }, { day: 2 }, { day: 3 }];
  assert.deepEqual(getDay(days, 99), { day: 1 });
});

test('safeText turns nullish values into an empty string and trims text', () => {
  assert.equal(safeText(null), '');
  assert.equal(safeText(undefined), '');
  assert.equal(safeText('  Hakata  '), 'Hakata');
});

test('scheduleDetailLines includes openingHours between location and note', () => {
  assert.deepEqual(
    scheduleDetailLines({
      location: 'いもんね博多店',
      openingHours: '10:00-21:00',
      note: '冰淇淋麻吉店'
    }),
    [
      { className: 'schedule-location', text: '📍 いもんね博多店' },
      { className: 'schedule-hours', text: '營業時間 10:00-21:00' },
      { className: 'schedule-note', text: '冰淇淋麻吉店' }
    ]
  );
});

const fs = require('node:fs');
const path = require('node:path');

test('browser rendering includes secure external links and accessible day tabs', () => {
  const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  const htmlSource = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(appSource, /noopener noreferrer/);
  assert.match(appSource, /aria-selected/);
  assert.match(htmlSource, /role="tablist"/);
});

test('stylesheet includes mobile safety, focus styling, and timeline/card presentation', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
  assert.match(css, /max-width:\s*100%/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /\.timeline-item/);
  assert.match(css, /\.schedule-card/);
  assert.match(css, /@media\s*\(min-width:\s*720px\)/);
});

test('README explains how to edit trip data, hero imagery, and preview locally', () => {
  const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');
  assert.match(readme, /tripData\.js/);
  assert.match(readme, /heroImage/);
  assert.match(readme, /python -m http\.server/);
});
