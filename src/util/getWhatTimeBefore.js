export default (regDate) => {
  const now = new Date();
  const regTime = new Date(regDate);

  const minuteDist = Math.floor(
    (now.getTime() - regTime.getTime()) / 1000 / 60
  );
  if (minuteDist < 1) return '방금 전';
  if (minuteDist < 60) return `${minuteDist}분 전`;

  const hourDist = Math.floor(minuteDist / 60);
  if (hourDist < 24) return `${hourDist}시간 전`;

  const dayDist = Math.floor(minuteDist / 60 / 24);
  if (dayDist < 365) return `${dayDist}일 전`;

  return `${Math.floor(dayDist / 365)}년 전`;
};
