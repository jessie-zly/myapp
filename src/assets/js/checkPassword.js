/**
 * 功能: 密码判断 字母/数字/下划线/-
 * @param str
 * @returns {boolean}
 */

function checkPassword(str) {
  let reg = /^[a-z0-9_-]{6,18}$/;
  if (new RegExp(reg).test(str)) {
    return true;
  } else {
    return false;
  }
}
