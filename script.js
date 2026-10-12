(() => {
  const dateEl = document.getElementById('today-date');
  const clockEl = document.getElementById('india-clock');
  const yearEl = document.getElementById('footer-year');
  const searchEl = document.getElementById('schedule-search');
  const filterEl = document.getElementById('time-filter');
  const rows = Array.from(document.querySelectorAll('#schedule-body tr'));
  const noResults = document.getElementById('no-results');

  function updateIndiaTime() {
    const now = new Date();
    dateEl.textContent = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', weekday: 'long', day: 'numeric',
      month: 'short', year: 'numeric'
    }).format(now);
    clockEl.textContent = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit',
      second: '2-digit', hour12: true
    }).format(now) + ' IST';
    yearEl.textContent = new Intl.DateTimeFormat('en', {
      timeZone: 'Asia/Kolkata', year: 'numeric'
    }).format(now);
  }

  function filterRows() {
    const query = searchEl.value.trim().toLowerCase();
    const period = filterEl.value;
    let visible = 0;
    rows.forEach(row => {
      const matchesText = row.textContent.toLowerCase().includes(query);
      const matchesPeriod = period === 'all' || row.dataset.period === period;
      const show = matchesText && matchesPeriod;
      row.hidden = !show;
      if (show) visible++;
    });
    noResults.hidden = visible !== 0;
  }

  searchEl.addEventListener('input', filterRows);
  filterEl.addEventListener('change', filterRows);
  updateIndiaTime();
  window.setInterval(updateIndiaTime, 1000);
})();