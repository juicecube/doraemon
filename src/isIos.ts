export const isIos = () => {
  const ua = navigator.userAgent;
  // console.log(ua)
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
