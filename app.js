const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('.home');
    const homeLeftImg = document.querySelector('.home_left_img');
    const homeIcons = document.querySelectorAll('.home_left_img_icons img');
    const homeRightText = document.querySelectorAll('.home_right h1, .home_right h2, .home_right p');

    // Add hover effect to home section
    homeSection.addEventListener('mouseover', () => {
        homeSection.style.transform = 'scale(1.02)';
    });

    homeSection.addEventListener('mouseout', () => {
        homeSection.style.transform = 'scale(1)';
    });

    // Add hover effect to home left image
    homeLeftImg.addEventListener('mouseover', () => {
        homeLeftImg.style.transform = 'rotate(5deg)';
    });

    homeLeftImg.addEventListener('mouseout', () => {
        homeLeftImg.style.transform = 'rotate(0)';
    });

    // Add hover effect to icons
    homeIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Add fade-in effect to text
    homeRightText.forEach((text, index) => {
        text.style.opacity = 0;
        setTimeout(() => {
            text.style.transition = 'opacity 1s ease-in-out';
            text.style.opacity = 1;
        }, index * 500);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.main_card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const icons = document.querySelectorAll('.iconBox');

    // Add hover effect to cards
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add hover effect to icons
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.backgroundColor = '#e5533d';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.backgroundColor = '#ff6347';
        });
    });

    // Add click effect to icons
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Icon clicked!');
        });
    });

    // Add animation to cards on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    const aboutImg = document.querySelector('.about_left img');
    const aboutText = document.querySelectorAll('.about_right h1, .about_right p');

    // Add hover effect to about section
    aboutSection.addEventListener('mouseover', () => {
        aboutSection.style.transform = 'scale(1.02)';
    });

    aboutSection.addEventListener('mouseout', () => {
        aboutSection.style.transform = 'scale(1)';
    });

    // Add hover effect to about image
    aboutImg.addEventListener('mouseover', () => {
        aboutImg.style.transform = 'rotate(5deg)';
    });

    aboutImg.addEventListener('mouseout', () => {
        aboutImg.style.transform = 'rotate(0)';
    });

    // Add fade-in effect to text
    aboutText.forEach((text, index) => {
        text.style.opacity = 0;
        setTimeout(() => {
            text.style.transition = 'opacity 1s ease-in-out';
            text.style.opacity = 1;
        }, index * 500);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio_1_div_1, .portfolio_1_div_2, .portfolio_1_div_3, .portfolio_2_div_1, .portfolio_2_div_2, .portfolio_2_div_3, .portfolio_3_div_1, .portfolio_3_div_2, .portfolio_3_div_3');

    // Add hover effect to portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Add animation to portfolio items on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    portfolioItems.forEach(item => {
        observer.observe(item);
    });
});
