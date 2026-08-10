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
});
