import { newSpecPage } from '@stencil/core/testing';
import { MyntPage } from '../mynt-page';

describe('mynt-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntPage],
      html: `<mynt-page></mynt-page>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-page>
    `);
  });
});
