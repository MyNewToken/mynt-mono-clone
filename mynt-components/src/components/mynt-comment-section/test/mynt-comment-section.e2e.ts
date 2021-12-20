import { newE2EPage } from '@stencil/core/testing';

describe('mynt-comment-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-comment-section></mynt-comment-section>');

    const element = await page.find('mynt-comment-section');
    expect(element).toHaveClass('hydrated');
  });
});
