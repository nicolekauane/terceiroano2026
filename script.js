// Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Scroll reveal for project cards
  const cards = document.querySelectorAll('.project-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('reveal'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  cards.forEach(c => observer.observe(c));

  // Project filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const tags = card.dataset.tags;
        const show = filter === 'all' || tags.includes(filter);
        card.style.display = show ? 'flex' : 'none';
        if(show) card.classList.add('reveal');
      });
    });
  });
