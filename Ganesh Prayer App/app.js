const playImage = document.getElementById("pujaBell");
const audioPlayer = document.getElementById("audioPlayer");
const flowerImage = document.getElementById("pujaFlowers");

playImage.addEventListener("click", () => {
    audioPlayer.play();
})

const pujaLampImage = document.getElementById("artiLamp");
let clonedImage = null; // Track the cloned image
let followCursor = null; // Track the follow function


pujaLampImage.addEventListener("click", () => {

    // If a cloned image already exists, remove it
    if (clonedImage) {
        document.removeEventListener("mousemove", followCursor);
        clonedImage.remove();
        clonedImage = null;
        return; // Exit the function after removing the cloned image
    }
    else{

        //clone the original image
        clonedImage = pujaLampImage.cloneNode(true);
        clonedImage.classList.add("clonedImage");
        clonedImage.width = "200";
        clonedImage.height = "200";

        //Append the cloned image to the body
        document.body.appendChild(clonedImage);

    }

    

    //Function to update cloned image position to follow the cursor
    followCursor = (e) => {
        clonedImage.style.left = e.pageX + 'px';
        clonedImage.style.top = e.pageY + 'px';
    };

    // Add mousemove event listener to update cloned image position
    document.addEventListener("mousemove", followCursor);

    
})


flowerImage.addEventListener("click",() => {

    document.getElementById("arti-flower-group").style.display="inline-block";
    document.getElementById("sub-title").style.position="relative";
    document.getElementById("sub-title").style.bottom ="18%";
    
    gsap.from('.arti-flower-group',{duration: 2,y:'-400%'});

})