import NodeEnvironment from 'jest-environment-node';
import jsdom from 'jsdom';

export class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.navigator = new jsdom.JSDOM('', { userAgent: 'iPhone; CPU iPhone OS 11_0 like Mac OS X' });
  }

  async teardown() {
    this.global.navigator = undefined;
    await super.teardown();
  }

  runScript(script) {
    return super.runScript<any>(script);
  }
}
