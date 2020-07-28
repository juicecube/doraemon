import { isIos } from '../src/isIos';
// import { CustomEnvironment } from './env';

describe('isIos', () => {
  // const env = new CustomEnvironment({});
  beforeEach(() => {
    // env.setup();
    global.navigator = {
      userAgent: 'iPhone; CPU iPhone OS 11_0 like Mac OS X',
    } as any;
  });
  it('ios内', () => {
    expect(isIos()).toBeTruthy();
  });
  afterEach(() => {
    // env.teardown();
  });
}); 