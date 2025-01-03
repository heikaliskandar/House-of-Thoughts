document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.getElementById("research-pillars");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropdownToggle.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdownToggle.addEventListener("mouseleave", function () {
        setTimeout(function() {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.style.display = "none";
            }
        }, 200);
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });
    

    function toggleContent() {
        const hiddenText = document.getElementById('hidden-text');
        const readMoreLink = document.getElementById('read-more-link');

        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            // Show the hidden content and change the link to "Read Less"
            hiddenText.style.display = "inline";
            readMoreLink.textContent = "Read Less";
        } else {
            // Hide the content and change the link back to "Read More"
            hiddenText.style.display = "none";
            readMoreLink.textContent = "Read More";
        }
    }

    // Ensure hidden content is hidden initially on page load
    document.addEventListener("DOMContentLoaded", () => {
        const hiddenText = document.getElementById('hidden-text');
        hiddenText.style.display = "none";
    });
});
