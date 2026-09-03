// Simple vanilla-JS photo slideshow for blog article galleries.
// Usage: <div class="gallery-slideshow" data-gallery> ... </div>
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-gallery]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.gallery-slide'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('.gallery-dot'));
    var caption = root.querySelector('.gallery-caption');
    var prevBtn = root.querySelector('.gallery-prev');
    var nextBtn = root.querySelector('.gallery-next');
    var current = 0;

    if (!slides.length) return;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
      if (caption) {
        caption.textContent = slides[current].getAttribute('data-caption') || '';
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); });
    });

    show(0);
  });
});
