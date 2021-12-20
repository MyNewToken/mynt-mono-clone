import { newSpecPage } from '@stencil/core/testing';
import { MyntRoot } from '../mynt-root';

describe('mynt-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntRoot],
      html: `<mynt-root></mynt-root>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-root>
    `);
  });
});
