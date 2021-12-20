import { newSpecPage } from '@stencil/core/testing';
import { MyntTradeModule } from '../mynt-trade-module';

describe('mynt-trade-module', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntTradeModule],
      html: `<mynt-trade-module></mynt-trade-module>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-trade-module>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-trade-module>
    `);
  });
});
