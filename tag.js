document.getElementById('imageInput').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            document.getElementById('selectedImage').src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function captionImage() {
    // In a real application, this is where you would make a server request
    // to get the image caption using a machine learning model.
    // For simplicity, let's just display a static caption here.
    var resultElement = document.getElementById('captionResult');
    resultElement.textContent = 'Image Generated Successfully';
    resultElement.textContent = 'A Login Page of a WebPage Detected!';
}