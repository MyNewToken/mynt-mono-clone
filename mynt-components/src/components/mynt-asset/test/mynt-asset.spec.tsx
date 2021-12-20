import { newSpecPage } from '@stencil/core/testing';
import { MyntAsset } from '../mynt-asset';

describe('mynt-asset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntAsset],
      html: `<mynt-asset></mynt-asset>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-asset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-asset>
    `);
  });
});
