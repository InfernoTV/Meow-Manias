// script.js

// Function to fetch cat images from the API
function fetchCatImages() {
  $.ajax({
    url: 'https://api.thecatapi.com/v1/images/search?limit=10', // API endpoint for fetching cat images
    success: function (data) {
      displayCatImages(data); // Call function to display fetched cat images
    },
    error: function () {
      console.error('Error fetching cat images from API'); // Display error message if fetching fails
    }
  });
}

// Function to display fetched cat images
function displayCatImages(catImages) {
  var catContainer = $('#cat-container'); // Get the cat container element
  catImages.forEach(function (catImage) {
    // Create a new cat card element
    var catCard = $('<div>').addClass('cat-card');
    var catImg = $('<img>').attr('src', catImage.url).attr('alt', 'Cat Image');
    catCard.append(catImg);
    catContainer.append(catCard);
  });
}

// Call the fetchCatImages function to initially fetch and display cat images
fetchCatImages();

// Implement infinite scrolling
$(window).on('scroll', function () {
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
    // Fetch and display more cat images when scrolled to the bottom of the page
    fetchCatImages();
  }
});
