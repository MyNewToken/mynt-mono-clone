import { newE2EPage } from '@stencil/core/testing';

describe('mynt-wallet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-wallet></mynt-wallet>');

    const element = await page.find('mynt-wallet');
    expect(element).toHaveClass('hydrated');
  });
});
