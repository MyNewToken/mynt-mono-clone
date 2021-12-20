import { newSpecPage } from '@stencil/core/testing';
import { MyntWallet } from '../mynt-wallet';

describe('mynt-wallet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntWallet],
      html: `<mynt-wallet></mynt-wallet>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-wallet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-wallet>
    `);
  });
});
