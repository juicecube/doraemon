import isIos from './isIos';

/** 复制字符串至粘贴板并返回复制是否成功 */
export const copyTextToClipboard = (value:string):Promise<boolean> => new Promise((resolve) => {
  try {
    const oInput = document.createElement('input');
    oInput.value = value;
    document.body.appendChild(oInput);
    if (isIos()) {
      // 防止低ios系统版本（ios 11）出现弹出小键盘
      oInput.disabled = true;
      oInput.setSelectionRange(0, value.length);
    } else {
      oInput.select();
    }
    document.execCommand('Copy');
    oInput.style.display = 'none';
    document.body.removeChild(oInput);
    resolve(true);
  } catch (error) {
    resolve(false);
  }
});

export default copyTextToClipboard;