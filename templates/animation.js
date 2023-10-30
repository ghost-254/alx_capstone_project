// JavaScript for handling animations when elements with the class "tech-skill" come into the viewport 

        // Getting all elements with the class "tech-skill"
        const elements = document.querySelectorAll('.tech-skill');

        // Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to add animation class to elements in the viewport
        function handleScroll() {
            elements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }

        // Adding event listener for scroll events
        window.addEventListener('scroll', handleScroll);

        // Initial check on page load
         handleScroll();
