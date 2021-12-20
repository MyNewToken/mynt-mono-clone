import { newE2EPage } from '@stencil/core/testing';

describe('mynt-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-settings></mynt-settings>');

    const element = await page.find('mynt-settings');
    expect(element).toHaveClass('hydrated');
  });
});
