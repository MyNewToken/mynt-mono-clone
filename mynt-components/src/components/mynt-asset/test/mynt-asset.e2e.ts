import { newE2EPage } from '@stencil/core/testing';

describe('mynt-asset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-asset></mynt-asset>');

    const element = await page.find('mynt-asset');
    expect(element).toHaveClass('hydrated');
  });
});
