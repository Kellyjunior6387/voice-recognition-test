// script.js

// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US'; // Set the language

    // Select elements
    const startBtn = document.getElementById('start-recording');
    const transcriptElem = document.getElementById('transcript');

    // Handle the result event
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        transcriptElem.textContent = `You said: ${transcript}`;
        console.log(transcript) // Send the transcript to the API
    };

    // Handle any errors
    recognition.onerror = function (event) {
        console.error(event.error);
        alert('An error occurred during the recognition process.');
    };

    // Start recognition when the button is clicked
    startBtn.addEventListener('click', () => {
        recognition.start();
    });
    // Function to send the transcript to the API
    /*
    function sendToApi(transcript) {
        fetch('https://your-api-endpoint.com/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: transcript }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
        })
        .catch(error => {
            console.error('Error sending to API:', error);
        });
    
    }*/
} else {
    alert('Your browser does not support the Web Speech API.');
}
