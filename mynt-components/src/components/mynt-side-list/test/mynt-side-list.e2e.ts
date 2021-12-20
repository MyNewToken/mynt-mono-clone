import { newE2EPage } from '@stencil/core/testing';

describe('mynt-side-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-side-list></mynt-side-list>');

    const element = await page.find('mynt-side-list');
    expect(element).toHaveClass('hydrated');
  });
});
