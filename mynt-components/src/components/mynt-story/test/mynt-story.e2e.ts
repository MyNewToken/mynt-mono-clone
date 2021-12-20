import { newE2EPage } from '@stencil/core/testing';

describe('mynt-story', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-story></mynt-story>');

    const element = await page.find('mynt-story');
    expect(element).toHaveClass('hydrated');
  });
});
