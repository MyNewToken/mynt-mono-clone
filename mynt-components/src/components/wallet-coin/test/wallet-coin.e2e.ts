import { newE2EPage } from '@stencil/core/testing';

describe('wallet-coin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wallet-coin></wallet-coin>');

    const element = await page.find('wallet-coin');
    expect(element).toHaveClass('hydrated');
  });
});
