import { newSpecPage } from '@stencil/core/testing';
import { MyntSideListing } from '../mynt-side-listing';

describe('mynt-side-listing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSideListing],
      html: `<mynt-side-listing></mynt-side-listing>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-side-listing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-side-listing>
    `);
  });
});
