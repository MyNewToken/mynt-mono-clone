import { newE2EPage } from '@stencil/core/testing';

describe('mynt-watch-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-watch-row></mynt-watch-row>');

    const element = await page.find('mynt-watch-row');
    expect(element).toHaveClass('hydrated');
  });
});
