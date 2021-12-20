import { newSpecPage } from '@stencil/core/testing';
import { MyntAssets } from '../mynt-assets';

describe('mynt-assets', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntAssets],
      html: `<mynt-assets></mynt-assets>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-assets>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-assets>
    `);
  });
});
