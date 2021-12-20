import { newE2EPage } from '@stencil/core/testing';

describe('mynt-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-logo></mynt-logo>');

    const element = await page.find('mynt-logo');
    expect(element).toHaveClass('hydrated');
  });
});
