export default (tag) => {
  return tag.reduce((acc, curr) => {
    acc += '#' + curr.text + ' ';
    return acc;
  }, '');
};
