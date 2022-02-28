// These functions open and close contact form.
function openForm()
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads.
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when left or right arrows are clicked.
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// This function changes the slide when dots are clicked.
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var slides = document.getElementsByClassName("mySlides"); // This takes elements with class name "mySlides" and stores them in variable array "slides".
    var dots = document.getElementsByClassName("dot"); // This takes elements with class name "dot" and stores them in variable array "dots".
    if (n > slides.length)// If n (the number passed into the function) is greater than length of the array "slides", slideIndex is set to 1.
    {
        slideIndex = 1;
    }
    if (n < 1) // If n (the number passed into the function) is less than 1, slideIndex is set to length of array "slides".
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) // This for loop takes each item in array "slides" and sets display to none.
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) // This for loop takes each item in array "dots" and removes "active" which removes active styling.
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; // This displays image in the slideshow.
    dots[slideIndex - 1].className += " active"; // This adds active styling to the dot associated with the image.
}

// This code will create close the contact form when user clicks off it.
// First step is to add event listener for any clicks on website.
document.addEventListener("click", function(event)
{
    // If click happens on cancel button OR anywhere that isn't contact form AND click doesn't happen on any element with contact class, call closeForm().
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact"))
    {
        closeForm()
    }
}, false)