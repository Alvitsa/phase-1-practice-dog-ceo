document.addEventListener("DOMContentLoaded", function() {
    // Fetching and displaying dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
     // Challenge 2: Fetching and displaying dog breeds
     const breedUrl = "https://dog.ceo/api/breeds/list/all";

     fetch(breedUrl)
         .then(response => response.json())
         .then(data => {
             const dogBreedsList = document.getElementById("dog-breeds");
             for (const breed in data.message) {
                 const listItem = document.createElement("li");
                 listItem.textContent = breed;
                 dogBreedsList.appendChild(listItem);
             }
         })
         .catch(error => console.error("Error fetching breeds:", error));
 
     // Challenge 3: Changing font color on click
     const dogBreedsList = document.getElementById("dog-breeds");
     dogBreedsList.addEventListener("click", function(event) {
         if (event.target.tagName === "LI") {
             event.target.style.color = "blue"; // Change color as per your choice
         }
     });
 
     // Challenge 4: Filtering breeds by selected letter
     const breedDropdown = document.getElementById("breed-dropdown");
     breedDropdown.addEventListener("change", function() {
         const selectedLetter = breedDropdown.value;
         const breedItems = document.querySelectorAll("#dog-breeds li");
         breedItems.forEach(item => {
             if (!item.textContent.startsWith(selectedLetter)) {
                 item.style.display = "none";
             } else {
                 item.style.display = "list-item";
             }
         });
     });
 }); 
