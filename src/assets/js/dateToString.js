/**
 * 功能: 将时间对象转换成字符串
 * @param date 需要转换的时间对象
 * @param devideSign 分隔符
 * @param num 指定补0位数
 * @returns {string}
 */
function dateToString(date, devideSign, num) {
  //判断参数是否传入
  if (devideSign === undefined) {
    //如果没有传入分隔符参数,则默认给予":"
    devideSign = ":";
  }
  //调用前置位0,进行字符串拼接
  return date.getFullYear() + devideSign + addPrefixZero((date.getMonth() + 1), num) + devideSign + addPrefixZero(date.getDate(), num) + " " + addPrefixZero(date.getHours(), num) + ":" + addPrefixZero(date.getMinutes(), num) + ":" + addPrefixZero(date.getSeconds(), num);
}
