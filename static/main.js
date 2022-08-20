$(function(){
});

function leftScroll() {
    const left = document.querySelector('.mediaGallery');
    left.scrollBy(-200, 0);
}

function rightScroll() {
    const right = document.querySelector('.mediaGallery');
    right.scrollBy(200, 0);
}

function displayPopup() {
    // var displayFrame = document.querySelector(".displayFrame");
    // var width = displayFrame.width;
    // var height = displayFrame.height;
    // displayFrame.replaceChildren(this);

    var popupDiv = document.querySelector(".popup");

    var im = document.createElement("img");
    var btn = document.createElement("button");

    btn.textContent = 'X';
    btn.addEventListener('click', function(){
        var popupDiv = document.querySelector(".popup");
        popupDiv.replaceChildren();
        popupDiv.style.display = "none";

    })

    im.src = this.src;
    popupDiv.replaceChildren(im);
    popupDiv.appendChild(btn);
    popupDiv.style.display= "block";

}

function loadMainVideo()
{
    var displayFrame = document.querySelector(".displayFrame");
    var video = document.createElement("video");
    var src = "static/video.mp4";

    video.src = src;

    displayFrame.appendChild(video);
    video.loop = true;
    video.play();

}


function main()
{
    loadMainVideo();

    var mediaGallery = document.querySelector(".mediaGallery");

    for (var i = 0; i < 10; i++) {


        var video = document.createElement("img");

        var src = "static/im.jpg";

        video.setAttribute("src", src)
        video.setAttribute("value", i + 1)

        video.addEventListener("click", displayPopup);


        mediaGallery.appendChild(video);

    }


}

main()

$.confetti.start();