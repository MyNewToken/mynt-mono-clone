import { newE2EPage } from '@stencil/core/testing';

describe('mynt-watch-thumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-watch-thumb></mynt-watch-thumb>');

    const element = await page.find('mynt-watch-thumb');
    expect(element).toHaveClass('hydrated');
  });
});
