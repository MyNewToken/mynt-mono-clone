import { newE2EPage } from '@stencil/core/testing';

describe('mynt-dms', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-dms></mynt-dms>');

    const element = await page.find('mynt-dms');
    expect(element).toHaveClass('hydrated');
  });
});
