import { newE2EPage } from '@stencil/core/testing';

describe('mynt-viewing-restrictions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-viewing-restrictions></mynt-viewing-restrictions>');

    const element = await page.find('mynt-viewing-restrictions');
    expect(element).toHaveClass('hydrated');
  });
});
