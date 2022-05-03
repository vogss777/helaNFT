/**
 * 设置cookie
 * @param {key}} name
 * @param {存储值} value
 * @param {过期时间} times
 */
 export function setCookie(name, value, times) {
  times = times || 36500;
  let exp = new Date();
  exp.setTime(exp.getTime() + times * 24 * 60 * 60 * 1000);
  let domain = `.${location.host.split(".")[1]}.${location.host.split(".")[2]}`;
  if (location.host.split(".")[2]) {
    if (process.client) {
      document.cookie = `${name}=${escape(
        value
      )};expires=${exp.toGMTString()};domain=${domain};path=/`;
    }
  } else {
    if (process.client) {
      document.cookie = `${name}=${escape(
        value
      )};expires=${exp.toGMTString()};path=/`;
    }
  }
}
/**
 * 根据key获取cookie数据
 * @param {key} name
 */
export function getCookie(name) {
  let arrd = null;
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (process.client) {
    if (document.cookie.match(reg)) {
      arrd = document.cookie.match(reg);
      return unescape(arrd[2]);
    } else {
      return null;
    }
  }
  return null;
}
