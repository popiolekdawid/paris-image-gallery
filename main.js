const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

/* Looping through images */
for(const image of fileNames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + image);
    newImage.setAttribute('alt', image);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (event) => {displayedImage.src = newImage.src;
                                                   displayedImage.alt = newImage.alt});
}
/* Wiring up the Darken/Lighten button */
function changeColor() {
    if(btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Brighten";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
    }
}
btn.addEventListener("click", changeColor);