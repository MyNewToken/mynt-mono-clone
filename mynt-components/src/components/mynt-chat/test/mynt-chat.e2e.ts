import { newE2EPage } from '@stencil/core/testing';

describe('mynt-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-chat></mynt-chat>');

    const element = await page.find('mynt-chat');
    expect(element).toHaveClass('hydrated');
  });
});
