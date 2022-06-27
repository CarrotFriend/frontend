export default (tag) => {
  return !tag
    ? tag
    : tag.reduce((acc, curr) => {
        acc += '#' + curr.text + ' ';
        return acc;
      }, '');
};
