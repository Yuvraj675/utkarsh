const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const shareButton = document.getElementById("share");

// Add an event listener for the click event
likeButton.addEventListener("click", () => {

    likeButton.classList.toggle("fa-regular");
    likeButton.classList.toggle("fa-solid");
    likeButton.classList.toggle("text-blue-500")
    likeButton.classList.toggle("text-black/60")
    if (likeButton.classList.contains("animate-shake")) {
        likeButton.classList.toggle("animate-shake")

    }
    if (dislikeButton.classList.contains("animate-rotate-x")) {
        dislikeButton.classList.toggle("animate-rotate-x")
    }

});


// Add an event listener for the click event
dislikeButton.addEventListener("click", () => {
    dislikeButton.classList.toggle("animate-rotate-x")
    likeButton.classList.toggle("animate-shake")

    if (likeButton.classList.contains("fa-regular")) {
        likeButton.classList.toggle("fa-regular");
        likeButton.classList.toggle("fa-solid");
        likeButton.classList.toggle("text-blue-500")
        likeButton.classList.toggle("text-black/60")

    }

})

const shareData = {
    title: "Utkarsh Mathur | Portfolio",
    text: "Check Out My Portfolio",
    url: "https://utkarshmathur.netlify.app",
};

shareButton.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
        console.log("shared");
    } catch (err) {
        console.log('error');
    }
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");



let videoIndex = 0;
const video = document.getElementById("video");
const videos = [
    "https://www.youtube-nocookie.com/embed/kipZaOXt3M0?autoplay=1&loop=1&modestbranding=1&iv_load_policy=3&color=white&playlist=kipZaOXt3M0",
    "https://www.youtube-nocookie.com/embed/3-1b5qUOt4A?autoplay=1&loop=1&modestbranding=1&iv_load_policy=3&color=white&playlist=3-1b5qUOt4A",
    "https://www.youtube-nocookie.com/embed/-ljgu4GW2is?autoplay=1&loop=1&modestbranding=1&iv_load_policy=3&color=white&playlist=-ljgu4GW2is"
];

const thumbnails = document.querySelectorAll(".thumb");

function changeThumbnail() {
    thumbnails.forEach((thumbnail, index) => {
        if (index === videoIndex) {
            thumbnail.classList.add("opacity-100");
            thumbnail.classList.remove("opacity-45");
        } else {
            thumbnail.classList.remove("opacity-100")
            if (!(thumbnail.classList.contains("opacity-45"))) {
                thumbnail.classList.add("opacity-45");
            }
        }
    })
}

function setVideo(videoIndex) {
    video.src = videos[videoIndex];
    changeThumbnail();

}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        videoIndex = index;
        setVideo(videoIndex);
    })
})





setVideo(videoIndex);

prevButton.addEventListener("click", () => {
    videoIndex--;
    if (videoIndex < 0) {
        videoIndex = videos.length - 1;
    }
    setVideo(videoIndex);
})

nextButton.addEventListener("click", () => {
    videoIndex++;
    if (videoIndex >= videos.length) {
        videoIndex = 0;
    }
    setVideo(videoIndex);
})

// Video Gallery
// Get all the videos
// const videos = document.querySelectorAll('video');

// // Get the previous and next video buttons
// const prevVideoBtn = document.getElementById('prev-video-btn');
// const nextVideoBtn = document.getElementById('next-video-btn');

// // Set the current video index
// let currentVideoIndex = 0;

// // Function to play the next video
// function nextVideo() {
//     // Increment the current video index
//     currentVideoIndex++;

//     // If the current video index is greater than the total number of videos, reset it to 0
//     if (currentVideoIndex >= videos.length) {
//         currentVideoIndex = 0;
//     }

//     // Pause the current video
//     videos[currentVideoIndex - 1].pause();

//     // Play the next video
//     videos[currentVideoIndex].play();
// }

// // Function to play the previous video
// function prevVideo() {
//     // Decrement the current video index
//     currentVideoIndex--;

//     // If the current video index is less than 0, set it to the last video index
//     if (currentVideoIndex < 0) {
//         currentVideoIndex = videos.length - 1;
//     }

//     // Pause the current video
//     videos[currentVideoIndex + 1].pause();

//     // Play the previous video
//     videos[currentVideoIndex].play();
// }