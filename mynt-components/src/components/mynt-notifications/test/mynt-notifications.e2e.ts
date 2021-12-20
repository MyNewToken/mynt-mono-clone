import { newE2EPage } from '@stencil/core/testing';

describe('mynt-notifications', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-notifications></mynt-notifications>');

    const element = await page.find('mynt-notifications');
    expect(element).toHaveClass('hydrated');
  });
});
