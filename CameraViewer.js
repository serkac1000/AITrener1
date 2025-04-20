function handleStartButtonClick() {
    console.log("Start button clicked"); // Debugging log
    startCameraViewer(); // Call the function to start the camera viewer
}

// Assuming you have a button element with an ID of 'startButton'
document.getElementById('startButton').addEventListener('click', handleStartButtonClick);

// Updated link to your Teachable Machine model
const teachableMachineModelLink = "https://teachablemachine.withgoogle.com/models/YOUR_NEW_MODEL_ID/"; // Update this with your new model link

function openTeachableMachine() {
    console.log("Opening Teachable Machine model..."); // Debugging log
    console.log("Model link:", teachableMachineModelLink); // Log the model link
    window.open(teachableMachineModelLink, "_blank"); // Try opening in a new tab
}

// Assuming you have a button element with an ID of 'openModelButton'
document.getElementById('openModelButton').addEventListener('click', openTeachableMachine);

function startCameraViewer() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const videoElement = document.getElementById('videoElement'); // Ensure you have a video element in your HTML
            videoElement.srcObject = stream;
            videoElement.play();
        })
        .catch(function(err) {
            console.error("Error accessing camera: ", err);
        });
}

<video id="videoElement" autoplay></video>

function ComparisonScreen(onNavigateBack, modelUrl, currentPoseUri) {
    // Assuming you have a way to check for camera permission
    if (hasCameraPermission) {
        // Load WebView only when permission is granted
        const webView = document.createElement('iframe');
        webView.src = modelUrl;  // Load the Teachable Machine URL HERE
        document.body.appendChild(webView);
    } else {
        console.log("Camera permission is required for this feature.");
    }
} 