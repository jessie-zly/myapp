/**
 * 功能: 不足位数时前置补0
 * @param num 待补位的数
 * @param length 指定的位数
 * @returns {string}
 */
function addPrefixZero(num, length) {
  // 隐式类型转换
  let str = "" + num;
  // 判断num的长度和length的关系
  if (str.length < length) {
    // num的长度不足指定位数时,进行前置补0
    return (Array(length).join("0") + num).slice(-length);
  } else if (str.length = length) {
    return str;
  } else {
    // 如果num的长度比指定位数还大,则提示输入有误
    return num + "不足" + length + "位";
  }
}
