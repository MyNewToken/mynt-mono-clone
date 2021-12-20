import { newE2EPage } from '@stencil/core/testing';

describe('mynt-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-menu></mynt-menu>');

    const element = await page.find('mynt-menu');
    expect(element).toHaveClass('hydrated');
  });
});
