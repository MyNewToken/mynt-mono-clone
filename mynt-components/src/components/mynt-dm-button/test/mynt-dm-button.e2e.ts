import { newE2EPage } from '@stencil/core/testing';

describe('mynt-dm-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-dm-button></mynt-dm-button>');

    const element = await page.find('mynt-dm-button');
    expect(element).toHaveClass('hydrated');
  });
});
