import { newSpecPage } from '@stencil/core/testing';
import { WalletCoin } from '../wallet-coin';

describe('wallet-coin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WalletCoin],
      html: `<wallet-coin></wallet-coin>`,
    });
    expect(page.root).toEqualHtml(`
      <wallet-coin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wallet-coin>
    `);
  });
});
