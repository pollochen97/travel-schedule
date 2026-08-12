function safeText(value) { return value == null ? '' : String(value).trim(); }
function formatDateRange(trip = {}) {
  const start = safeText(trip.startDate), end = safeText(trip.endDate);
  if (!start && !end) return '';
  if (!start) return end.replaceAll('-', '.');
  if (!end) return start.replaceAll('-', '.');
  const [sy, sm, sd] = start.split('-'), [ey, em, ed] = end.split('-');
  if (!sy || !sm || !sd || !ey || !em || !ed) return `${start} — ${end}`;
  return sy === ey ? `${sy}.${sm}.${sd} — ${em}.${ed}` : `${sy}.${sm}.${sd} — ${ey}.${em}.${ed}`;
}
function validLinks(links) { return Array.isArray(links) ? links.filter((l) => l && safeText(l.label) && safeText(l.url)) : []; }
function getDay(days, index) { return Array.isArray(days) && days.length ? (days[index] || days[0]) : null; }
function scheduleDetailLines(item = {}) {
  const lines = [];
  if (safeText(item.location)) lines.push({ className: 'schedule-location', text: `📍 ${item.location}` });
  if (safeText(item.openingHours)) lines.push({ className: 'schedule-hours', text: `營業時間 ${item.openingHours}` });
  if (safeText(item.note)) lines.push({ className: 'schedule-note', text: item.note });
  return lines;
}
function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; }
function externalLink(label, url) { const a = el('a', 'link-button', label); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; }
function renderHero(data) {
  const root = document.getElementById('hero'); const trip = data.trip || {}; const theme = data.theme || {};
  document.documentElement.style.setProperty('--primary', theme.primary || '#D96846');
  document.documentElement.style.setProperty('--secondary', theme.secondary || '#F3C58F');
  document.documentElement.style.setProperty('--background', theme.background || '#FFF9F2');
  root.innerHTML = '';
  const copy = el('div', 'hero-copy'); copy.append(el('p','eyebrow', safeText(trip.location) || 'Travel journal'));
  const h1 = el('h1','', safeText(trip.title) || 'My Trip'); h1.id='trip-title'; copy.append(h1);
  if (safeText(trip.subtitle)) copy.append(el('p','hero-subtitle',trip.subtitle));
  if (formatDateRange(trip)) copy.append(el('p','hero-date',formatDateRange(trip)));
  const visual = el('div','hero-visual');
  if (safeText(theme.heroImage)) { const img = new Image(); img.src=theme.heroImage; img.alt=`${safeText(trip.title) || '旅行'}主視覺`; img.addEventListener('error',()=>{ img.remove(); visual.textContent = safeText(theme.heroEmoji) || '✈️'; visual.classList.add('emoji-fallback'); }); visual.append(img); }
  else { visual.textContent = safeText(theme.heroEmoji) || '✈️'; visual.classList.add('emoji-fallback'); }
  root.append(copy, visual);
}
function renderFlight(title, flight) {
  if (!flight || !Object.values(flight).some((v)=>safeText(v))) return null;
  const card=el('article','info-card'); card.append(el('p','card-kicker',title));
  const airline=[safeText(flight.airline),safeText(flight.flightNo)].filter(Boolean).join(' · '); if (airline) card.append(el('h3','',airline));
  const route=el('div','flight-route');
  route.append(el('div','flight-stop',`${safeText(flight.departureTime)} ${safeText(flight.departureAirport)}`));
  route.append(el('span','route-arrow','→'));
  route.append(el('div','flight-stop',`${safeText(flight.arrivalTime)} ${safeText(flight.arrivalAirport)}`)); card.append(route); return card;
}
function renderOverview(data) {
  const root=document.getElementById('overview-grid'); root.innerHTML=''; const flights=data.flights||{};
  [renderFlight('去程航班',flights.outbound),renderFlight('回程航班',flights.inbound)].filter(Boolean).forEach((c)=>root.append(c));
  const h=data.hotel||{}; if (Object.values(h).some((v)=>safeText(v))) { const card=el('article','info-card'); card.append(el('p','card-kicker','住宿')); if(safeText(h.name))card.append(el('h3','',h.name)); if(safeText(h.address))card.append(el('p','muted',h.address)); const actions=el('div','card-actions'); if(safeText(h.mapUrl))actions.append(externalLink('Google Maps',h.mapUrl)); if(safeText(h.websiteUrl))actions.append(externalLink('住宿官網',h.websiteUrl)); if(actions.childNodes.length)card.append(actions); root.append(card); }
}
function renderDayPanel(day) {
  const panel=document.getElementById('day-panel'); panel.innerHTML='';
  if(!day){ panel.append(el('p','empty-state','目前還沒有安排每日行程。')); return; }
  const head=el('div','day-heading'); head.append(el('div','day-icon',safeText(day.icon)||'📍')); const text=el('div'); text.append(el('p','day-date',safeText(day.date).replaceAll('-','.'))); text.append(el('h3','',safeText(day.title)||`Day ${day.day}`)); head.append(text); panel.append(head);
  const timeline=el('div','timeline'); const items=Array.isArray(day.schedule)?day.schedule:[];
  if(!items.length){ timeline.append(el('p','empty-state','這一天還沒有安排內容。')); }
  items.forEach((item)=>{ const row=el('article','timeline-item'); row.append(el('time','timeline-time',safeText(item.time)||'--:--')); const dot=el('div','timeline-dot'); row.append(dot); const card=el('div','schedule-card'); const meta=el('div','schedule-meta'); if(safeText(item.category))meta.append(el('span','category-chip',item.category)); card.append(meta); card.append(el('h4','',safeText(item.title)||'未命名行程')); scheduleDetailLines(item).forEach((line)=>card.append(el('p',line.className,line.text))); if(safeText(item.image)){ const img=new Image(); img.src=item.image; img.alt=`${safeText(item.title)||'行程'}圖片`; img.className='schedule-image'; img.addEventListener('error',()=>img.remove()); card.append(img); } const links=validLinks(item.links); if(links.length){ const actions=el('div','card-actions'); links.forEach((l)=>actions.append(externalLink(l.label,l.url))); card.append(actions);} row.append(card); timeline.append(row); }); panel.append(timeline);
}
function renderTabs(days) {
  const root=document.getElementById('day-tabs'); root.innerHTML=''; if(!Array.isArray(days)||!days.length){ renderDayPanel(null); return; }
  days.forEach((day,index)=>{ const b=el('button','day-tab'); b.type='button'; b.setAttribute('role','tab'); b.setAttribute('aria-selected',index===0?'true':'false'); b.textContent=`Day ${day.day || index+1}`; b.addEventListener('click',()=>{ root.querySelectorAll('[role="tab"]').forEach((t)=>t.setAttribute('aria-selected','false')); b.setAttribute('aria-selected','true'); renderDayPanel(day); }); root.append(b); }); renderDayPanel(getDay(days,0));
}
function renderFooter(data){ const f=data.footer||{}; const root=document.getElementById('footer'); root.textContent=[safeText(f.message),safeText(f.updatedAt)?`最後更新 ${f.updatedAt}`:''].filter(Boolean).join(' · '); }
function init(data){ renderHero(data); renderOverview(data); renderTabs(data.days||[]); renderFooter(data); }
if (typeof module !== 'undefined' && module.exports) module.exports={formatDateRange,validLinks,getDay,safeText,scheduleDetailLines};
if (typeof document !== 'undefined' && typeof tripData !== 'undefined') init(tripData);
