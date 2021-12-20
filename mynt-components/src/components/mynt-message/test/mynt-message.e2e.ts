import { newE2EPage } from '@stencil/core/testing';

describe('mynt-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-message></mynt-message>');

    const element = await page.find('mynt-message');
    expect(element).toHaveClass('hydrated');
  });
});
