document.getElementById('fetchBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    fetchThumbnails(url);
});

function fetchThumbnails(url) {
    // Dummy function to simulate fetching thumbnails
    var thumbnailsDiv = document.getElementById('thumbnails');
    thumbnailsDiv.innerHTML = ''; // Clear previous thumbnails

    var thumbnails = [
        'https://via.placeholder.com/200x150',
        'https://via.placeholder.com/200x150',
        'https://via.placeholder.com/200x150',
        'https://via.placeholder.com/200x150',
        'https://via.placeholder.com/200x150'
    ];

    thumbnails.forEach(function(thumbnailUrl) {
        var thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        var img = document.createElement('img');
        img.src = thumbnailUrl;

        thumbnailDiv.appendChild(img);
        thumbnailsDiv.appendChild(thumbnailDiv);
    });
}
