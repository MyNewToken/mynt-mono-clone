import { newSpecPage } from '@stencil/core/testing';
import { MyntListing } from '../mynt-listing';

describe('mynt-listing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntListing],
      html: `<mynt-listing></mynt-listing>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-listing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-listing>
    `);
  });
});
