const enterSpace = ({ e, tags, setTags }) => {
  // backspace
  if (e.keyCode === 8 && e.target.value === '') {
    if (tags.length === 0) return;

    const newTags = tags.filter((_, idx) => idx < tags.length - 2);
    newTags.push('');
    setTags(newTags);
    const parent = e.target.parentNode.childNodes;
    parent[parent.length - 2].value = '';
  }
  // space
  if (e.key === ' ') {
    if (e.target.value.trim() === '') return;
    setTags([...tags, '']);
  }
};

export default enterSpace;
