lucide.createIcons();
        
        const mobileBtn = document.getElementById('mobileBtn');
        const navLinks = document.getElementById('navLinks');
        const menuIcon = document.getElementById('menuIcon');
        let menuAberto = false;
        
        function toggleMenu() {
            if (menuAberto) {
                navLinks.classList.remove('active');
                menuIcon.setAttribute('data-lucide', 'menu');
                menuAberto = false;
            } else {
                navLinks.classList.add('active');
                menuIcon.setAttribute('data-lucide', 'x');
                menuAberto = true;
            }
            lucide.createIcons();
        }
        
        if (mobileBtn) {
            mobileBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                toggleMenu();
            });
        }
        
        const allLinks = document.querySelectorAll('.nav-links a');
        allLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (menuAberto && window.innerWidth <= 1150) {
                    navLinks.classList.remove('active');
                    menuIcon.setAttribute('data-lucide', 'menu');
                    menuAberto = false;
                    lucide.createIcons();
                }
            });
        });
        
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('.star-navbar');
            if (!isClickInsideNav && menuAberto && window.innerWidth <= 1150) {
                navLinks.classList.remove('active');
                menuIcon.setAttribute('data-lucide', 'menu');
                menuAberto = false;
                lucide.createIcons();
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1150 && menuAberto) {
                navLinks.classList.remove('active');
                menuIcon.setAttribute('data-lucide', 'menu');
                menuAberto = false;
                lucide.createIcons();
            }
        });