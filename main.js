document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var dropdownToggle = document.querySelector('.nav-dropdown > a');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  }

  var ajaxForms = document.querySelectorAll('.contact-form, .newsletter-form');
  ajaxForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.parentElement.querySelector('.form-success');
      var data = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          if (msg) {
            msg.style.display = 'block';
          }
          form.reset();
        } else {
          alert('Something went wrong submitting the form. Please email us directly at alex@amcollegeconsulting.com.');
        }
      }).catch(function () {
        alert('Something went wrong submitting the form. Please email us directly at alex@amcollegeconsulting.com.');
      });
    });
  });

  initEmailPopup();
});

function initEmailPopup() {
  var STORAGE_KEY = 'amPopupDismissedAt';
  var SUBSCRIBED_KEY = 'amPopupSubscribed';
  var COOLDOWN_DAYS = 30;
  var DELAY_MS = 4000;

  function getStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function setStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (err) {
      /* localStorage unavailable (e.g. private browsing) — fail silently */
    }
  }

  if (getStorage(SUBSCRIBED_KEY)) return;

  var dismissedAt = getStorage(STORAGE_KEY);
  if (dismissedAt) {
    var elapsedDays = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
    if (elapsedDays < COOLDOWN_DAYS) return;
  }

  var markup =
    '<div class="email-popup-overlay" id="email-popup-overlay">' +
      '<div class="email-popup" role="dialog" aria-modal="true" aria-labelledby="email-popup-heading">' +
        '<button type="button" class="email-popup-close" aria-label="Close">&times;</button>' +
        '<div class="icon">&#127891;</div>' +
        '<h3 id="email-popup-heading">Get Free College Search Resources</h3>' +
        '<p>Sign up to receive admissions tips, event alerts, and guidance on how I can help with your college search.</p>' +
        '<form class="email-popup-form" action="https://formspree.io/f/mgognybo" method="POST">' +
          '<input type="hidden" name="form_type" value="Popup lead capture">' +
          '<label for="email-popup-input" class="sr-only">Email address</label>' +
          '<input type="email" id="email-popup-input" name="email" placeholder="you@example.com" required>' +
          '<button type="submit" class="btn btn-primary">Send Me Resources</button>' +
        '</form>' +
        '<p class="email-popup-success" role="status">Thanks! Check your inbox &mdash; more information is on its way.</p>' +
        '<p class="email-popup-note">No spam, unsubscribe anytime.</p>' +
      '</div>' +
    '</div>';

  var wrapper = document.createElement('div');
  wrapper.innerHTML = markup;
  document.body.appendChild(wrapper.firstChild);

  var overlay = document.getElementById('email-popup-overlay');
  var closeBtn = overlay.querySelector('.email-popup-close');
  var form = overlay.querySelector('.email-popup-form');
  var success = overlay.querySelector('.email-popup-success');

  function showPopup() {
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    var input = overlay.querySelector('input[type="email"]');
    if (input) {
      setTimeout(function () { input.focus(); }, 300);
    }
  }

  function hidePopup(remember) {
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    if (remember) {
      setStorage(STORAGE_KEY, Date.now().toString());
    }
  }

  closeBtn.addEventListener('click', function () { hidePopup(true); });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) { hidePopup(true); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
      hidePopup(true);
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
        setStorage(SUBSCRIBED_KEY, '1');
        setTimeout(function () { hidePopup(false); }, 2500);
      } else {
        alert('Something went wrong submitting the form. Please email us directly at alex@amcollegeconsulting.com.');
      }
    }).catch(function () {
      alert('Something went wrong submitting the form. Please email us directly at alex@amcollegeconsulting.com.');
    });
  });

  setTimeout(showPopup, DELAY_MS);
}
