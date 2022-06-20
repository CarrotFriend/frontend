const changeTag = ({ e, tags, setTags }) => {
  // 태그 변경 시 tags 실시간으로 set해주기
  const newTags = tags.filter((_, idx) => idx <= tags.length - 2);
  if (e.target.value.trim() === '' || e.target.value.trim() === '#') {
    e.target.value = '';
    e.target.style.width = 8 + 'ch';
    return;
  }

  if (e.target.value[0] !== '#') {
    e.target.value = '#';
  }

  const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
  const isKor = checkKor.test(e.target.value);
  // 한글은 받침 등을 고려하지 않아 len 더 크게주기
  const len = isKor ? e.target.value.length * 1.5 : e.target.value.length * 1.1;
  e.target.style.width = len + 'ch';
  setTags([...newTags, e.target.value.substr(1)]);
};

export default changeTag;
