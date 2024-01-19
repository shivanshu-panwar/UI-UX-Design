// index.js

function fetchAndDisplayImages() {
    fetch('https://picsum.photos/v2/list?page=1&limit=1000') // Adjust the page and limit as needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const imageSection = document.getElementById('sec2div');

            // Loop through the array of images
            data.forEach(image => {
                const imageUrl = image.download_url;

                // Create an image element for each image
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'API Image';
                imgElement.classList.add('gallery-image');

                // Append the image to the section
                imageSection.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchAndDisplayImages();