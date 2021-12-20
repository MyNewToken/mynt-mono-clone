import { newE2EPage } from '@stencil/core/testing';

describe('profile-pic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<profile-pic></profile-pic>');

    const element = await page.find('profile-pic');
    expect(element).toHaveClass('hydrated');
  });
});
