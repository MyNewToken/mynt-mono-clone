import { newE2EPage } from '@stencil/core/testing';

describe('mynt-page-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-page-menu></mynt-page-menu>');

    const element = await page.find('mynt-page-menu');
    expect(element).toHaveClass('hydrated');
  });
});
