import { newE2EPage } from '@stencil/core/testing';

describe('mynt-asset-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-asset-page></mynt-asset-page>');

    const element = await page.find('mynt-asset-page');
    expect(element).toHaveClass('hydrated');
  });
});
