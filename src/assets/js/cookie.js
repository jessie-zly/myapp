/**
* cookie.js
* author: jessie-zly
* 2017/12/21
* description: cookie 封装
*/

/**
 * 功能: 封装cookie,用于设置cookie键值,通常与getCookie()和removeCookie()同时调用
 * @param userName cookie的键
 * @param value cookie的值
 * @param expires 要求cookie的过期时间
 */
// function setCookie(userName, value, expires) {
//     //获取cookie创建时间
//      const date = new Date();
//     //设置过期时间
//     date.setDate(date.getDate() + expires)
//     //信息输出
//     document.cookie = userName + "=" + value + ";expires=" + date;
// }

/**
 * 功能: 封装cookie,用于设置cookie键值,通常与getCookie()和removeCookie()同时调用
 * @param userName cookie的键
 * @param value cookie的值
 * @param expires 要求cookie的过期时间
 */
setCookie = (userName, value, expires) => {
    //获取cookie创建时间
    const date = new Date();
    //设置过期时间
    date.setDate(date.getDate() + expires);
    //信息输出
    document.cookie = userName + "=" + value + ";expires=" + date;
};

/**
 * 功能: 封装cookie,用于获取cookie的键值,通常与setCookie()和removeCookie()同时调用
 * @param userName 想要获取cookie值对应的键
 * @returns {string}
 */
function getCookie(userName) {
    //获取cookie
    const cookie = document.cookie;
    //将cookie字符串转换成数组
  const arrCookie = cookie.split("; ");//注意空格
    //遍历
    for (const i in arrCookie) {
        //再次分隔数组中的字符串
      const newArrCookie = arrCookie[i].split("=");
        //判断第二次分割后数组的第一个值是否与userName相同
        if (newArrCookie[0] == userName) {
            //相同则返回第二个值
            return newArrCookie[1];//即userName对应的值
        }
    }
}

/**
 * 功能: 封装cookie,用于删除cookie的键值,通常与setCookie()和removeCookie()同时调用
 * @param userName 想要删除的cookie的键
 * @param value 想要删除的cookie的值
 */
function removeCookie(userName, value) {
    //调用setCookie,提前过期时间,来实现删除功能
    setCookie(userName, value, -1);
}




