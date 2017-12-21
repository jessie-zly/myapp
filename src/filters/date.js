/**
 * date.js
 * author: jessie-zly
 * 2017/12/17
 * description: date 过滤器
 */


/**
 * 功能: 将时间戳处理成 xxxx/xx/xx 形式日期
 * @param timestamp 时间戳
 * @returns {string}
 */
export const date = (timestamp) => {
  let date = new Date(timestamp);
  return `${date.getMonth()+1}月${date.getDate()}日`;
};
