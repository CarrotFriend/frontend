const selectFile = ({ e, setImage }) => {
  const imageContent = document.querySelector('.image-content');
  const url = URL.createObjectURL(e.target.files[0]);
  // 이미 올라온 사진이 있으면 삭제
  if (imageContent.hasChildNodes()) {
    imageContent.childNodes[0].remove();
  }
  // blob 포함한 url을 set
  setImage(url);
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', 'default');
  img.setAttribute('width', '100%');
  img.setAttribute('height', '100%');
  imageContent.appendChild(img);
};

export default selectFile;
