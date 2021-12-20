import { newE2EPage } from '@stencil/core/testing';

describe('mynt-dm-noti-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-dm-noti-button></mynt-dm-noti-button>');

    const element = await page.find('mynt-dm-noti-button');
    expect(element).toHaveClass('hydrated');
  });
});
