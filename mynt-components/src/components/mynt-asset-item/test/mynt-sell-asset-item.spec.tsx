import { newSpecPage } from '@stencil/core/testing';
import { MyntAssetItem } from '../mynt-asset-item';

describe('mynt-asset-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntAssetItem],
      html: `<mynt-asset-item></mynt-asset-item>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-asset-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-asset-item>
    `);
  });
});
