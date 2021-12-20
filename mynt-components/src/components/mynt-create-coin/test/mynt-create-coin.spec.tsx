import { newSpecPage } from '@stencil/core/testing';
import { MyntCreateCoin } from '../mynt-create-coin';

describe('mynt-create-coin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntCreateCoin],
      html: `<mynt-create-coin></mynt-create-coin>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-create-coin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-create-coin>
    `);
  });
});
