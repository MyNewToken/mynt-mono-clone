import { newE2EPage } from '@stencil/core/testing';

describe('mynt-dm', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-dm></mynt-dm>');

    const element = await page.find('mynt-dm');
    expect(element).toHaveClass('hydrated');
  });
});
