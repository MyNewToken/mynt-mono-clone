import { newE2EPage } from '@stencil/core/testing';

describe('mynt-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-page></mynt-page>');

    const element = await page.find('mynt-page');
    expect(element).toHaveClass('hydrated');
  });
});
