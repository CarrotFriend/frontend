const selectFile = (e) => {
  const imageContent = document.querySelector('.image-content');
  const url = URL.createObjectURL(e.target.files[0]);
  if (imageContent.hasChildNodes()) {
    imageContent.childNodes[0].src = url;
    return;
  }
  console.log(e.target.files[0]);
  // blob 포함한 url을 서버로 전송
  console.log(url);
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', 'default');
  img.setAttribute('width', '100%');
  img.setAttribute('height', '100%');
  imageContent.appendChild(img);
};

export default selectFile;
