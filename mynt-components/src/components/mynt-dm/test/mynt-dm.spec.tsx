import { newSpecPage } from '@stencil/core/testing';
import { MyntDm } from '../mynt-dm';

describe('mynt-dm', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntDm],
      html: `<mynt-dm></mynt-dm>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-dm>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-dm>
    `);
  });
});
