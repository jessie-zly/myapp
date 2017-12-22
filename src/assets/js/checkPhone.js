/**
 * 功能: 手机号码验证
 * @param str
 * @returns {boolean}
 */
function checkPhone(str) {
  let reg = /^[1](3|4|5|7|8)[0-9]{9}$/;
  if (new RegExp(reg).test(str)) {
    return true;
  } else {
    return false;
  }
}
