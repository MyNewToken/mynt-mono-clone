import { newE2EPage } from '@stencil/core/testing';

describe('mynt-stories', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-stories></mynt-stories>');

    const element = await page.find('mynt-stories');
    expect(element).toHaveClass('hydrated');
  });
});
