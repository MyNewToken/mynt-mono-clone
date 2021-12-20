import { newE2EPage } from '@stencil/core/testing';

describe('mynt-sell-asset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-sell-asset></mynt-sell-asset>');

    const element = await page.find('mynt-sell-asset');
    expect(element).toHaveClass('hydrated');
  });
});
