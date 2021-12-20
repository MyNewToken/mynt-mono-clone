import { newE2EPage } from '@stencil/core/testing';

describe('mynt-assets', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-assets></mynt-assets>');

    const element = await page.find('mynt-assets');
    expect(element).toHaveClass('hydrated');
  });
});
