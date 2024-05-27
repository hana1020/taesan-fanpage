document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('register-modal');
    var openModal = document.querySelector('.register a');
    var closeModal = document.querySelector('.close-button');

    openModal.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scroll to section
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            // Add active class to target section
            targetSection.classList.add('active');
        });
    });

    // Add active class to the first section by default
    sections[0].classList.add('active');

    // Preloader
    window.addEventListener('load', function() {
        var preloader = document.getElementById('preloader');
        preloader.style.transition = 'opacity 1s';
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
            document.body.classList.add('loaded');
        }, 1000);
    });
});