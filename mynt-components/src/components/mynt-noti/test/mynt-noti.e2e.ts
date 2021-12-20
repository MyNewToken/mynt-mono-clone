import { newE2EPage } from '@stencil/core/testing';

describe('mynt-noti', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-noti></mynt-noti>');

    const element = await page.find('mynt-noti');
    expect(element).toHaveClass('hydrated');
  });
});
