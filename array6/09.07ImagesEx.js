// Create an array with file names of images
    let images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

        function addImages() {
            // Loop through the array of images
            for (let i = 0; i < images.length; i++) {
                
                document.write(`<img src="${images[i]}" alt="Funny shape">`);
            }
}