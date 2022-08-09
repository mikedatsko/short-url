export function random(len: number) {
  const resultArr = [];
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < len; i++) {
    resultArr.push(charset.charAt(Math.floor(Math.random() * charset.length)));
  }

  return resultArr.join('');
}
