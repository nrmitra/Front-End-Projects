const playImage = document.getElementById("pujaBell");
const audioPlayer = document.getElementById("audioPlayer");

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

