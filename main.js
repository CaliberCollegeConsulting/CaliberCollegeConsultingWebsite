document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('.form-success');
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
          alert('Something went wrong submitting the form. Please email us directly at alex@calibercollegeconsulting.com.');
        }
      }).catch(function () {
        alert('Something went wrong submitting the form. Please email us directly at alex@calibercollegeconsulting.com.');
      });
    });
  }
});
