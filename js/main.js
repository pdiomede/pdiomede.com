let expandTimeout = null;
function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = html.getAttribute('data-theme');

  if (themeToggleBtn) {
    if (expandTimeout) {
      clearTimeout(expandTimeout);
    }
    themeToggleBtn.classList.add('expanded');
    expandTimeout = setTimeout(() => {
      themeToggleBtn.classList.remove('expanded');
      expandTimeout = null;
    }, 2000);
  }

  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'dark');
  }
}

let designSelectorInitialized = false;
function initDesignSelector() {
  if (designSelectorInitialized) return;

  const selector = document.getElementById('design-selector');
  const button = document.getElementById('design-selector-button');
  if (!selector || !button) return;

  designSelectorInitialized = true;

  const options = selector.querySelectorAll('.design-selector-option');
  const currentThemeSpan = button.querySelector('.current-theme');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const themeNames = {
    'index.html': 'Elegant Frame',
    'index-material.html': 'Material Design',
    'index-popart.html': 'Pop Art',
    'index-cyberpunk.html': 'Cyberpunk Neon',
    'index-terminal.html': 'Terminal'
  };

  if (currentThemeSpan && themeNames[currentPage]) {
    currentThemeSpan.textContent = themeNames[currentPage];
  }

  if (options && options.length > 0) {
    options.forEach(option => {
      const themeFile = option.getAttribute('data-theme');
      const icon = option.querySelector('i');
      if (themeFile === currentPage) {
        option.classList.add('active');
        if (icon) icon.className = 'fas fa-check';
      } else {
        option.classList.remove('active');
        if (icon) icon.className = '';
      }
    });
  }

  button.addEventListener('click', function(e) {
    e.stopPropagation();
    selector.classList.toggle('expanded');
    button.setAttribute('aria-expanded', selector.classList.contains('expanded'));
  });

  if (options && options.length > 0) {
    options.forEach(option => {
      if (!option.hasAttribute('tabindex')) {
        option.setAttribute('tabindex', '0');
      }

      const handleOptionSelect = function() {
        const themeFile = this.getAttribute('data-theme');
        if (themeFile && themeFile !== currentPage) {
          window.location.href = themeFile;
        } else {
          selector.classList.remove('expanded');
          button.setAttribute('aria-expanded', 'false');
        }
      };

      option.addEventListener('click', function(e) {
        e.stopPropagation();
        handleOptionSelect.call(this);
      });

      option.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          handleOptionSelect.call(this);
        }
      });
    });
  }

  document.addEventListener('click', function(e) {
    if (!selector.contains(e.target)) {
      selector.classList.remove('expanded');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && selector.classList.contains('expanded')) {
      selector.classList.remove('expanded');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
}

function markLoaded() {
  document.body.classList.add('loaded');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', markLoaded);
} else {
  markLoaded();
}

document.addEventListener('DOMContentLoaded', function() {
  initDesignSelector();

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);

    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('aria-pressed', 'false');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('aria-pressed', 'true');
    }
  }
});
