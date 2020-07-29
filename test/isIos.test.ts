import { UserAgentSetter } from './utils/user-agent-setter';
import { isIos } from '../src/isIos';
import { userAgentMap } from './constants.ts/user-agent';

describe('isIos', () => {
  const userAgentSetter = new UserAgentSetter();
  afterAll(() => {
    userAgentSetter.reset();
  });
  it('In ios wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInIos);
    expect(isIos()).toBeTruthy();
  });
  it('In ios mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.mobileInIos);
    expect(isIos()).toBeTruthy();
  });
  it('In Android wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInAndroid);
    expect(isIos()).toBeFalsy();
  });
  it('In Android mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.mobileInAndroid);
    expect(isIos()).toBeFalsy();
  });
  it('In Mac wechat', () => {
    userAgentSetter.setUserAgent(userAgentMap.wechatInMac);
    expect(isIos()).toBeFalsy();
  });
  it('In Mac mobile', () => {
    userAgentSetter.setUserAgent(userAgentMap.chromeInMac);
    expect(isIos()).toBeFalsy();
  });
});