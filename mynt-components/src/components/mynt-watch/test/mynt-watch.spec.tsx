import { newSpecPage } from '@stencil/core/testing';
import { MyntWatch } from '../mynt-watch';

describe('mynt-watch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntWatch],
      html: `<mynt-watch></mynt-watch>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-watch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-watch>
    `);
  });
});
