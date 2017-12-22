/**
 * checkUserName.js
 * author: jessie-zly
 * 2017/12/21
 * description: 用户名判断 汉字/字母/数字/下划线/-
 */


checkUserName = (str) => {
  // 正则表达式
  const reg = /^[a-zA-Z0-9_\-(\u2E80-\u9FFF)+]{4,20}$/;
  if (new RegExp(reg).test(str)) {
    return true;
  } else {
    return false;
  }
};
