function addThumbnail(id, src){
    thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', src);
    thumbnail.setAttribute('id', id)
    document.body.appendChild(thumbnail)
}
