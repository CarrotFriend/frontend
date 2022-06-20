const enterSpace = ({ e, tags, setTags }) => {
  // backspace
  if (e.keyCode === 8 && e.target.value === '') {
    if (tags.length === 0) return;

    const newTags = tags.filter((_, idx) => idx < tags.length - 2);
    newTags.push('');
    setTags(newTags);
    const parent = e.target.parentNode.childNodes;
    if (parent.length >= 2) parent[parent.length - 2].value = '';
  }
  // space
  if (e.key === ' ') {
    const val = e.target.value;
    if (val.trim() === '' || val.trim() === '#') return;
    setTags([...tags, '']);
  }
};

export default enterSpace;
