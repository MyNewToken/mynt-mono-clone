import { newE2EPage } from '@stencil/core/testing';

describe('mynt-trade-module', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-trade-module></mynt-trade-module>');

    const element = await page.find('mynt-trade-module');
    expect(element).toHaveClass('hydrated');
  });
});
