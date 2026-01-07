           const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    
    
    
    
     const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        const imageData = [
            { default: 'assets/livingroomwithplant.jpg', hover: 'https://picsum.photos/600/500?random=2' },
            { default: 'https://picsum.photos/600/500?random=3', hover: 'https://picsum.photos/600/500?random=4' },
            { default: 'https://picsum.photos/600/500?random=5', hover: 'https://picsum.photos/600/500?random=6' },
            { default: 'https://picsum.photos/600/500?random=7', hover: 'https://picsum.photos/600/500?random=8' },
            { default: 'https://picsum.photos/600/500?random=9', hover: 'https://picsum.photos/600/500?random=10' }
        ];

        let currentIndex = 0;
        const totalItems = imageData.length;

        function createItem(data) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.style.backgroundImage = `url(${data.default})`;
            
            item.addEventListener('mouseenter', function() {
                this.style.backgroundImage = `url(${data.hover})`;
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundImage = `url(${data.default})`;
            });
            
            return item;
        }

        function initializeCarousel() {
            track.innerHTML = '';
            for (let i = 0; i < totalItems * 3; i++) {
                const data = imageData[i % totalItems];
                track.appendChild(createItem(data));
            }
            currentIndex = totalItems;
            updateCarousel(false);
        }

        function updateCarousel(animate = true) {
            if (!animate) {
                track.style.transition = 'none';
            } else {
                track.style.transition = 'transform 0.4s ease';
            }
            
            const offset = currentIndex * 620;
            track.style.transform = `translateX(-${offset}px)`;
            
            if (!animate) {
                track.offsetHeight;
            }
        }

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel(true);
            
            if (currentIndex === 0) {
                setTimeout(() => {
                    currentIndex = totalItems;
                    updateCarousel(false);
                }, 400);
            }
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel(true);
            
            if (currentIndex === totalItems * 2) {
                setTimeout(() => {
                    currentIndex = totalItems;
                    updateCarousel(false);
                }, 400);
            }
        });

        initializeCarousel();
        
        
        
        
document.addEventListener('DOMContentLoaded', function() {
  const serviceBoxes = document.querySelectorAll('.service-box');
  
  serviceBoxes.forEach(box => {
    const arrowIcon = box.querySelector('.arrow-icon');
    const closeIcon = box.querySelector('.close-icon');
    const paragraph = box.querySelector('p');
    
    // Make both icons clickable
    arrowIcon.style.cursor = 'pointer';
    closeIcon.style.cursor = 'pointer';
    
    // Arrow icon click - show content
    arrowIcon.addEventListener('click', function() {
      paragraph.style.display = 'block';
      arrowIcon.style.display = 'none';
      closeIcon.style.display = 'inline-block';
    });
    
    // Close icon click - hide content
    closeIcon.addEventListener('click', function() {
      paragraph.style.display = 'none';
      closeIcon.style.display = 'none';
      arrowIcon.style.display = 'inline-block';
    });
  });
});


    
