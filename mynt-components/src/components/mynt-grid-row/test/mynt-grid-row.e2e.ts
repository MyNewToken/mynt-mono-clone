import { newE2EPage } from '@stencil/core/testing';

describe('mynt-grid-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-grid-row></mynt-grid-row>');

    const element = await page.find('mynt-grid-row');
    expect(element).toHaveClass('hydrated');
  });
});
