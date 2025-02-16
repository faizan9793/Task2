// Toggle Mobile Menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    // Hover effect to change shadow on mouse enter/leave
    features.forEach(feature => {
        feature.addEventListener("mouseenter", () => {
            feature.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        });

        feature.addEventListener("mouseleave", () => {
            feature.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Scroll Reveal Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".feature").forEach(feature => {
        feature.style.opacity = "0";
        feature.style.transform = "translateY(50px)";
        feature.style.transition = "all 0.6s ease-in-out";
        observer.observe(feature);
    });
});



// Adding hover effects for blog cards
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});

document.getElementById('year').textContent = new Date().getFullYear();














