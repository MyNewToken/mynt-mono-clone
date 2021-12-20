import { newE2EPage } from '@stencil/core/testing';

describe('mynt-side-listing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-side-listing></mynt-side-listing>');

    const element = await page.find('mynt-side-listing');
    expect(element).toHaveClass('hydrated');
  });
});
