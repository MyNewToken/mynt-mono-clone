import { newE2EPage } from '@stencil/core/testing';

describe('mynt-listing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-listing></mynt-listing>');

    const element = await page.find('mynt-listing');
    expect(element).toHaveClass('hydrated');
  });
});
