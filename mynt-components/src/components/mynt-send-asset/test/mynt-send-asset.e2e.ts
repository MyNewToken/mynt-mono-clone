import { newE2EPage } from '@stencil/core/testing';

describe('mynt-send-asset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-send-asset></mynt-send-asset>');

    const element = await page.find('mynt-send-asset');
    expect(element).toHaveClass('hydrated');
  });
});
