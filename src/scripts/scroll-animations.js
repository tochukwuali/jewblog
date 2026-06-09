export function initScrollAnimations() {
  // Define animation variants
  const animationClasses = {
    'fade-in': 'scroll-fade-in',
    'scale-in': 'scroll-scale-in',
    'slide-up': 'scroll-slide-up',
  };

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get animation type from data attribute
        const animationType = entry.target.dataset.scrollAnimate || 'fade-in';
        const className = animationClasses[animationType];
        
        if (className) {
          entry.target.classList.add(className);
        }
        
        // Stop observing after animation triggers
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-scroll-animate attribute
  document.querySelectorAll('[data-scroll-animate]').forEach((element) => {
    observer.observe(element);
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
