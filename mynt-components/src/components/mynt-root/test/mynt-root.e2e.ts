import { newE2EPage } from '@stencil/core/testing';

describe('mynt-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-root></mynt-root>');

    const element = await page.find('mynt-root');
    expect(element).toHaveClass('hydrated');
  });
});
