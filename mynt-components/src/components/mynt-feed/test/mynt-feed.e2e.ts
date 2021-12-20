import { newE2EPage } from '@stencil/core/testing';

describe('mynt-feed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-feed></mynt-feed>');

    const element = await page.find('mynt-feed');
    expect(element).toHaveClass('hydrated');
  });
});
