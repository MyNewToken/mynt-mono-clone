import { newE2EPage } from '@stencil/core/testing';

describe('mynt-profile-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-profile-header></mynt-profile-header>');

    const element = await page.find('mynt-profile-header');
    expect(element).toHaveClass('hydrated');
  });
});
