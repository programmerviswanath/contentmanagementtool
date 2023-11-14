function insertContent() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var imageInput = document.getElementById('image');
    var videoInput = document.getElementById('video');

    var image = imageInput.files[0];
    var video = videoInput.files[0];

    var blogPreview = document.getElementById('blog-preview');
    var blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    var imageUrl = image ? URL.createObjectURL(image) : '';
    var videoUrl = video ? URL.createObjectURL(video) : '';
    
    // Template literals
    blogPost.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        ${image ? `<img src="${imageUrl}" alt="Image">` : ''}
        ${video ? `<video width="100%" height="400px" controls><source src="${videoUrl}" type="video/mp4"></video>` : ''}
        <hr>
    `;

    blogPreview.appendChild(blogPost);

    // Clear file inputs after adding content
    imageInput.value = '';
    videoInput.value = '';
}