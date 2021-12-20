import { newE2EPage } from '@stencil/core/testing';

describe('mynt-create-coin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-create-coin></mynt-create-coin>');

    const element = await page.find('mynt-create-coin');
    expect(element).toHaveClass('hydrated');
  });
});
