import { newSpecPage } from '@stencil/core/testing';
import { MyntSideList } from '../mynt-side-list';

describe('mynt-side-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSideList],
      html: `<mynt-side-list></mynt-side-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-side-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-side-list>
    `);
  });
});
