import { newSpecPage } from '@stencil/core/testing';
import { MyntDmButton } from '../mynt-dm-button';

describe('mynt-dm-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntDmButton],
      html: `<mynt-dm-button></mynt-dm-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-dm-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-dm-button>
    `);
  });
});
