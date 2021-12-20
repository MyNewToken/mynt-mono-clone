import { newE2EPage } from '@stencil/core/testing';

describe('mynt-asset-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-asset-item></mynt-asset-item>');

    const element = await page.find('mynt-asset-item');
    expect(element).toHaveClass('hydrated');
  });
});
