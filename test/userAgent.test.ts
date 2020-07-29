import { isMobile } from './../src/isMobile';
import { isWechat } from './../src/isWechat';
import { UserAgentSetter } from './utils/user-agent-setter';
import { isIos } from '../src/isIos';
import { userAgentMap } from './constants.ts/user-agent';

describe('isIos|isWechat', () => {
  const userAgentSetter = new UserAgentSetter();
  afterAll(() => {
    userAgentSetter.reset();
  });
  it('In ios wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInIos);
    expect(isIos()).toBeTruthy();
    expect(isWechat()).toBeTruthy();
    expect(isMobile()).toBeTruthy();
  });
  it('In ios mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.mobileInIos);
    expect(isIos()).toBeTruthy();
    expect(isWechat()).toBeFalsy();
    expect(isMobile()).toBeTruthy();
  });
  it('In Android wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInAndroid);
    expect(isIos()).toBeFalsy();
    expect(isWechat()).toBeTruthy();
    expect(isMobile()).toBeTruthy();
  });
  it('In Android mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.mobileInAndroid);
    expect(isIos()).toBeFalsy();
    expect(isWechat()).toBeFalsy();
    expect(isMobile()).toBeTruthy();
  });
  it('In Mac wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInMac);
    expect(isIos()).toBeFalsy();
    expect(isWechat()).toBeTruthy();
    expect(isMobile()).toBeFalsy();
  });
  it('In Mac mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.chromeInMac);
    expect(isIos()).toBeFalsy();
    expect(isWechat()).toBeFalsy();
    expect(isMobile()).toBeFalsy();
  });
  it('In window wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInWindows);
    expect(isIos()).toBeFalsy();
    expect(isWechat()).toBeTruthy();
    expect(isMobile()).toBeFalsy();
  });
});