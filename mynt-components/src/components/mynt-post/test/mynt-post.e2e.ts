import { newE2EPage } from '@stencil/core/testing';

describe('mynt-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-post></mynt-post>');

    const element = await page.find('mynt-post');
    expect(element).toHaveClass('hydrated');
  });
});
