import { newSpecPage } from '@stencil/core/testing';
import { MyntSellAsset } from '../mynt-sell-asset';

describe('mynt-sell-asset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSellAsset],
      html: `<mynt-sell-asset></mynt-sell-asset>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-sell-asset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-sell-asset>
    `);
  });
});
