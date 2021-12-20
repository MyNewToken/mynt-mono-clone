import { newE2EPage } from '@stencil/core/testing';

describe('mynt-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-login></mynt-login>');

    const element = await page.find('mynt-login');
    expect(element).toHaveClass('hydrated');
  });
});
