import { newE2EPage } from '@stencil/core/testing';

describe('mynt-mark-nsfw', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-mark-nsfw></mynt-mark-nsfw>');

    const element = await page.find('mynt-mark-nsfw');
    expect(element).toHaveClass('hydrated');
  });
});
