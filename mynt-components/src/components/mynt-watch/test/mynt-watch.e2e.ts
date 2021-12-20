import { newE2EPage } from '@stencil/core/testing';

describe('mynt-watch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-watch></mynt-watch>');

    const element = await page.find('mynt-watch');
    expect(element).toHaveClass('hydrated');
  });
});
