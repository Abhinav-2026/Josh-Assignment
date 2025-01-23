// Function to fetch and render menu items
// Function to fetch and render menu items
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    fetch("dishes.json")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = data.map(item => `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}" class="food-image">
                    <h3>${item.name}</h3>
                    <div class="price">₹${item.price}</div>
                    <div class="details">
                        <img src="JTG - FE Home Assignment - Set 1/ant-design_star-filled.svg" alt="Rating" class="rating-icon"> 
                        <span class="delivery-time">${item.min_time}</span>
                    </div>
                    <img src="JTG - FE Home Assignment - Set 1/iconoir_add-to-cart-2.svg" alt="Add to Cart" class="add-to-cart">
                </div>
            `).join("");
        })
        .catch(error => console.error("Error fetching items:", error));
});

// Function to fetch and render popular items
// Function to fetch and render popular items
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".popular-items");

    fetch("popularDishes.json")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = data.map(item => `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}" class="food-image">
                    <h3>${item.name}</h3>
                    <div class="price">₹${item.price}</div>
                    <div class="details">
                        <img src="JTG - FE Home Assignment - Set 1/ant-design_star-filled.svg" alt="Rating" class="rating-icon"> 
                        <span class="delivery-time">${item.min_time}</span>
                    </div>
                    <img src="JTG - FE Home Assignment - Set 1/iconoir_add-to-cart-2.svg" alt="Add to Cart" class="add-to-cart">
                </div>
            `).join("");

            // Initialize Slick Slider after items are rendered
            $(".popular-items").slick({
                slidesToShow: 3, // Show 3 slides at a time
                slidesToScroll: 1, // Scroll one slide at a time
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><img src="JTG - FE Home Assignment - Set 1/Arrow-1.svg" alt="Previous"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="JTG - FE Home Assignment - Set 1/Arrow.svg" alt="Next"></button>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        })
        .catch(error => console.error("Error fetching items:", error));
});

// Other functions remain the same...
// Function to handle the request modal
document.addEventListener("DOMContentLoaded", function () {
    const requestButton = document.getElementById("request");
    const modal = document.querySelector(".request-modal");
    const overlay = document.querySelector(".request-overlay");
    const cancelButton = document.querySelector(".cancel-btn");

    // Show Modal
    requestButton.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    // Hide Modal on Cancel or Clicking Outside
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});

// Function to handle the cart modal
document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector('.cart');

    // Create modal container
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.style.display = 'none'; // Initially hidden
    cartModal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="JTG - FE Home Assignment - Set 1/akar-icons_shopping-bag.svg" alt="cart-icon">
            <p>Cart is Empty</p>
            <p style="color:#AAA7A7">Add some items to the cart to checkout</p>
            <button type="submit" class="back-to-menu" style="background-color:#1AC073 ;color:white">Back to Menu</button>
        </div>
    `;
    
    // Append modal to body
    document.body.appendChild(cartModal);
    
    // Open modal on cart click
    cart.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });
    
    // Close modal when clicking the close button
    cartModal.querySelector('.close-btn').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    cartModal.querySelector('.back-to-menu').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
});

// Function to handle video controls
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    });

    pauseBtn.addEventListener('click', () => {
        video.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    });
});

// Initialize Slick Carousel
$(document).ready(function () {
    $(".popular-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});