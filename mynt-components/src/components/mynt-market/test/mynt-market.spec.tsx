import { newSpecPage } from '@stencil/core/testing';
import { MyntMarket } from '../mynt-market';

describe('mynt-market', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMarket],
      html: `<mynt-market></mynt-market>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-market>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-market>
    `);
  });
});
