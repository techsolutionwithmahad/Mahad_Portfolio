// ─────────────────────────────────────────────
// script.js — Rendering engine for The Quiet Journal
// Reads data from data.js globals, builds the UI, handles interactions.
// ─────────────────────────────────────────────

(function () {
  // ── DOM refs ──
  const headerTitle   = document.getElementById('site-title');
  const headerTagline = document.getElementById('site-tagline');
  const filterBar     = document.getElementById('filter-bar');
  const postsGrid     = document.getElementById('posts-grid');
  const footerYear    = document.getElementById('footer-year');
  const footerAuthor  = document.getElementById('footer-author');

  // ── Populate site meta ──
  headerTitle.textContent   = SITE_META.title;
  headerTagline.textContent = SITE_META.tagline;
  footerYear.textContent    = SITE_META.year;
  footerAuthor.textContent  = SITE_META.author;
  document.title            = SITE_META.title;

  // ── Helpers ──
  function formatDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  }

  function getCategories() {
    var cats = [];
    BLOG_POSTS.forEach(function (p) {
      if (cats.indexOf(p.category) === -1) cats.push(p.category);
    });
    cats.sort();
    return ['All'].concat(cats);
  }

  // ── Render filter buttons ──
  function renderFilters() {
    var categories = getCategories();
    filterBar.innerHTML = categories
      .map(function (cat) {
        return '<button class="filter-btn' + (cat === 'All' ? ' active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
      })
      .join('');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-category');
      renderPosts(cat === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(function (p) { return p.category === cat; }));
    });
  }

  // ── Render post cards ──
  function renderPosts(posts) {
    if (!posts.length) {
      postsGrid.innerHTML =
        '<div class="empty-state">' +
          '<div class="icon">📝</div>' +
          '<p>No posts found in this category.</p>' +
        '</div>';
      return;
    }

    postsGrid.innerHTML = posts.map(function (post) {
      return '<article class="post-card" data-id="' + post.id + '">' +
        '<div class="post-meta">' +
          '<span class="post-category">' + post.category + '</span>' +
          '<time>' + formatDate(post.date) + '</time>' +
        '</div>' +
        '<h2 class="post-title">' + post.title + '</h2>' +
        '<p class="post-excerpt">' + post.excerpt + '</p>' +
        '<button class="read-more" data-id="' + post.id + '">' +
          'Read more <span class="arrow">→</span>' +
        '</button>' +
      '</article>';
    }).join('');
  }

  // ── Open full post modal ──
  function openPost(postId) {
    var post = null;
    for (var i = 0; i < BLOG_POSTS.length; i++) {
      if (BLOG_POSTS[i].id === postId) { post = BLOG_POSTS[i]; break; }
    }
    if (!post) return;

    var overlay = document.createElement('div');
    overlay.className = 'post-overlay';
    overlay.innerHTML =
      '<article class="post-full">' +
        '<button class="close-btn" aria-label="Close">✕</button>' +
        '<div class="post-full-meta">' +
          '<span class="post-category">' + post.category + '</span>' +
          '<time>' + formatDate(post.date) + '</time>' +
        '</div>' +
        '<h1 class="post-full-title">' + post.title + '</h1>' +
        '<div class="post-full-body">' + post.content + '</div>' +
      '</article>';

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Close handlers
    function close() {
      overlay.classList.add('closing');
      setTimeout(function () {
        overlay.remove();
        document.body.style.overflow = '';
      }, 250);
    }

    overlay.querySelector('.close-btn').addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', handler);
      }
    });
  }

  // ── Event delegation for "Read more" ──
  postsGrid.addEventListener('click', function (e) {
    var btn = e.target.closest('.read-more');
    if (btn) openPost(btn.getAttribute('data-id'));
  });

  // ── Init ──
  renderFilters();
  renderPosts(BLOG_POSTS);
})();
