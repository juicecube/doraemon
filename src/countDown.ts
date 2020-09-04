type OnChange = (current:number) => void;

export class CountDown {
  private START_COUNT:number = 0;
  private timer:NodeJS.Timeout = null
  currentCount:number = 0;
  needReset:boolean = true;
  onChange?:OnChange;
  /**
   * @param startCount 默认60
   * @param onChange 每次倒计时需要执行的函数，比如react的setState()
   * @param needReset 倒计时结束后是否重置默认true
   */
  constructor(startCount:number = 60, onChange?:OnChange, needReset:boolean = true) {
    this.reset();
    this.START_COUNT = startCount;
    this.currentCount = startCount
    this.onChange = onChange;
    this.needReset = needReset;
  }
  start = () => {
    this.timer = setInterval(() => {
      if (this.currentCount > 0) {
        this.currentCount -= 1;
        this.onChange && this.onChange(this.currentCount);
      } else {
        this.needReset && this.reset();
      }
    }, 1000);
  }
  pause = () => {
    clearInterval(this.timer);
    this.timer = null;
  }
  reset = () => {
    this.pause();
    this.currentCount = this.START_COUNT;
    this.onChange && this.onChange(this.START_COUNT);
  }
}

export default CountDown;
