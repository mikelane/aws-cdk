import '@aws-cdk/assert/jest';
import {} from '../lib';
import { App, Stack } from '@aws-cdk/core';

let app: App;
let stack: Stack;

beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'Stack', {
        env: { account: '999999999999', region: 'us-test-1' }
    })
})

test('No tests are specified for this package', () => {
  expect(true).toBe(true);
});
