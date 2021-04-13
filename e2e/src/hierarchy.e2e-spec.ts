import { $, browser, by, element } from 'protractor';

import { checkConsole } from '../../../../../libs/e2e-kit/e2e-kit';

const emailLink = $('[href="#/email"]');
const helpLink = $('[href="#/help"]');
const emailMarker = element(
  by.cssContainingText('.component-marker', 'EmailContainerComponent')
);
const helpTitle = $('.card-title');

describe('Application', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(true);
    await browser.get('/');
  });

  it('should load without error', async () => {
    expect(await checkConsole()).toEqual('');
  });

  describe('application navigation', () => {
    it('should start on email screen', async () => {
      expect(await emailMarker.isPresent()).toBeTruthy();
    });

    it('should navigate to the help screen', async () => {
      await helpLink.click();
      expect(await helpTitle.getText()).toBe('Help Page');
    });
  });

  describe('email screen', () => {
    beforeAll(async () => {
      await emailLink.click();
    });
    // Nothing to test yet...
  });

  describe('help screen', () => {
    beforeAll(async () => {
      await helpLink.click();
    });
    // Nothing to test yet...
  });
});
