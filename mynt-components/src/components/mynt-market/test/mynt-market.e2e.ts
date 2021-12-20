import { newE2EPage } from '@stencil/core/testing';

describe('mynt-market', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-market></mynt-market>');

    const element = await page.find('mynt-market');
    expect(element).toHaveClass('hydrated');
  });
});
