const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
     memeImage.setAttribute("src", url);
     memeTitle.innerHTML = title;
     memeAuthor.innerHTML = `Meme by: ${author}`;
};

const getImages = (url, image, title, author) => {
     memeImage.setAttribute("src", url);
     memeImage.innerHTML = image;
     memeTitle.innerHTML = title;
     memeAuthor.innerText = `Author: ${author}`;
};

const generateMeme = () => {
     const apiUrl = "https://meme-api.com/gimme/wholesomememes";
     fetch(apiUrl)
          .then((response) => {
               response.json().then((data) => {
                    console.log(data.title);
                    getImages(data.url, data.preview[1], data.title, data.author);
               });
          })
          .catch("not found");
     memeImage.src = getImage.src;
};

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
