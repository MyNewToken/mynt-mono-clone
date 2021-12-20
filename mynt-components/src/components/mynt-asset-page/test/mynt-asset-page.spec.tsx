import { newSpecPage } from '@stencil/core/testing';
import { MyntAssetPage } from '../mynt-asset-page';

describe('mynt-asset-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntAssetPage],
      html: `<mynt-asset-page></mynt-asset-page>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-asset-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-asset-page>
    `);
  });
});
