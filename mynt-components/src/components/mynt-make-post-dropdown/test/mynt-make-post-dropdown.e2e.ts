import { newE2EPage } from '@stencil/core/testing';

describe('mynt-make-post-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-make-post-dropdown></mynt-make-post-dropdown>');

    const element = await page.find('mynt-make-post-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
