/**
 * 时间 & 日期
 *
 */

interface FormatOptions {
  utc?: boolean;
  locale?: 'zh' | 'en';
}
class SuperDate {
  private dateNameMap = {
    en: {
      dayNames: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      monthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },

    zh: {
      dayNames: [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
      monthNames: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
    },
  };
  /**
   * 时间格式化
   * @param  {Date} timestemp 待格式化的时间
   * @param  {string} rule 格式化规则
   * @param  {Object} options 高级选项，可以指定locale，utc
   * @return {string} 格式化后的字符串
   *
   * 使用方法：
   * superDate.format(timestemp, 'yyyy年mm月dd日 HH:MM:ss') => 2019年07月16日 15:22:06
   * superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss') => 2019-07-16 15:22:06
   * superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss ddd') => 2019-07-16 15:22:06 周二
   * superDate.format(1563256029342, 'yyyy-mm-dd HH:MM:ss TT dddd', { locale: 'en' }) => 2019-07-16 13:47:09 PM Tuesday
   *
   * rule 支持的格式化选项包括:
   * 年：yy(97), yyyy(1997)
   * 月：m(1), mm(01), mmm(1月), mmmm(一月)
   * 日：d(5), dd(05),
   * 小时：h(2), hh(02), H(14), HH(14)，小写是12小时制，大写是24小时制
   * 分：M(3), MM(03),
   * 秒：s(8), ss(08)
   * 毫秒：l(056), L(56), l三位，L两位
   * 星期：ddd(周五)，dddd(星期五)
   * 时区：Z或z (UTC, CST等)
   * 时区offset：O或o (+0800等)
   *
   * options 高级选项:
   * {
   *  utc:boolean (是否取utc时间，默认false)
   *  locale:'zh'|'en' (用于显示中文还是英文, 默认为false)
   * }
   */
  format = (timestemp: number, rule?: string, options?: FormatOptions) => {
    if (!timestemp || isNaN(timestemp)) {
      throw new SyntaxError('invalid date');
    }

    const date: CObject = timestemp ? new Date(timestemp) : new Date();
    options = options || {};
    rule = rule || 'yyyy-mm-dd HH:MM:ss';
    const utc = options.utc || false;
    const locale = options.locale || 'zh';
    const token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloZ]|"[^"]*"|'[^']*'/g;
    const timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
    const timezoneClip = /[^-+\dA-Z]/g;

    const fillUp = (val: number, len?: number) => {
      let strVal = String(val);
      len = len || 2;
      while (strVal.length < len) strVal = `0${val}`;
      return strVal;
    };

    const _ = utc ? 'getUTC' : 'get';
    const d = date[`${_}Date`]();
    const D = date[`${_}Day`]();
    const m = date[`${_}Month`]();
    const y = date[`${_}FullYear`]();
    const H = date[`${_}Hours`]();
    const M = date[`${_}Minutes`]();
    const s = date[`${_}Seconds`]();
    const L = date[`${_}Milliseconds`]();
    const o = utc ? 0 : date.getTimezoneOffset();
    const zParam = (String(date).match(timezone) || ['']).pop() || '';
    const flags: CObject = {
      d: d,
      dd: fillUp(d),
      ddd: this.dateNameMap[locale].dayNames[D],
      dddd: this.dateNameMap[locale].dayNames[D + 7],
      m: m + 1,
      mm: fillUp(m + 1),
      mmm: this.dateNameMap[locale].monthNames[m],
      mmmm: this.dateNameMap[locale].monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: y,
      h: H % 12 || 12,
      hh: fillUp(H % 12 || 12),
      H: H,
      HH: fillUp(H),
      M: M,
      MM: fillUp(M),
      s: s,
      ss: fillUp(s),
      l: fillUp(L, 3),
      L: fillUp(L > 99 ? Math.round(L / 10) : L),
      t: H < 12 ? 'a' : 'p',
      tt: H < 12 ? 'am' : 'pm',
      T: H < 12 ? 'A' : 'P',
      TT: H < 12 ? 'AM' : 'PM',
      Z: utc ? 'UTC' : zParam.replace(timezoneClip, ''),
      z: utc ? 'UTC' : zParam.replace(timezoneClip, ''),
      o:
        (o > 0 ? '-' : '+') +
        fillUp(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
      O:
        (o > 0 ? '-' : '+') +
        fillUp(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
    };

    return rule.replace(token, function($0) {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
}

const date = new SuperDate();

export default date;
