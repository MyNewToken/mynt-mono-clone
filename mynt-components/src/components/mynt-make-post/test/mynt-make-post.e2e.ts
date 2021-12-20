import { newE2EPage } from '@stencil/core/testing';

describe('mynt-make-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-make-post></mynt-make-post>');

    const element = await page.find('mynt-make-post');
    expect(element).toHaveClass('hydrated');
  });
});
