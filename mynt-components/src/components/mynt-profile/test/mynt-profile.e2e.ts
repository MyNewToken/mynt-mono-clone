import { newE2EPage } from '@stencil/core/testing';

describe('mynt-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-profile></mynt-profile>');

    const element = await page.find('mynt-profile');
    expect(element).toHaveClass('hydrated');
  });
});
