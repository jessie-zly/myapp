/**
 * 功能: 6位随机验证码(数字、字母)
 * @returns {string}
 */


export default function identityCodeForSix() {
  let arr = [];
  for (let i = 0; i <= 5; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr.join("");
}
