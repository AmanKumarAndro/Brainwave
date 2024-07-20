$(document).ready(function () {
    // Filter blog posts by category
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide("1000");
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });

    // Get the modals
    var signupModal = document.getElementById("signup-modal");
    var loginModal = document.getElementById("login-modal");

    // Get the buttons that open the modals
    var signupBtn = document.querySelector(".signup-btn");
    var loginBtn = document.querySelector(".login-btn");

    // Get the <span> elements that close the modals
    var signupSpan = signupModal.querySelector(".close");
    var loginSpan = loginModal.querySelector(".close");

    // When the user clicks the button, open the modal 
    signupBtn.onclick = function () {
        signupModal.style.display = "block";
    }
    loginBtn.onclick = function () {
        loginModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    signupSpan.onclick = function () {
        signupModal.style.display = "none";
    }
    loginSpan.onclick = function () {
        loginModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }





    // Add active class to the selected filter item
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

    // Header background changes while scrolling down
    let header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });

    // Add new blog post via form submission
    $("#blog-form").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        const title = $("#title").val();
        const category = $("#category").val();
        const image = $("#image").val();
        const date = $("#date").val();
        const description = $("#description").val();

        // Create a new post box element
        const newPost = `
            <div class="post-box ${category}">
                <img src="${image}" class="post-image">
                <h2 class="category">${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <a href="post-page.html" class="post-title">
                    ${title}
                </a>
                <span class="post-date">${date}</span>
                <p class="post-description">${description}</p>
                <!-- profile -->
                <div class="profile">
                    <img src="images/profile-1.jpeg" class="profile-img">
                    <span class="profile-name">Aman Kumar</span>
                </div>
            </div>
        `;

        // Append the new post to the posts section
        $(".post.container").append(newPost);

        // Clear the form fields
        $("#blog-form")[0].reset();
    });
});
