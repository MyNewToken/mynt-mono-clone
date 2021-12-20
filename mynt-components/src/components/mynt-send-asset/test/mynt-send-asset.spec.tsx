import { newSpecPage } from '@stencil/core/testing';
import { MyntSendAsset } from '../mynt-send-asset';

describe('mynt-send-asset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSendAsset],
      html: `<mynt-send-asset></mynt-send-asset>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-send-asset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-send-asset>
    `);
  });
});
