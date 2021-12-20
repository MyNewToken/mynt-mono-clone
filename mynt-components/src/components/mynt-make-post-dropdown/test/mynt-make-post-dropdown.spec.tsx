import { newSpecPage } from '@stencil/core/testing';
import { MyntMakePostDropdown } from '../mynt-make-post-dropdown';

describe('mynt-make-post-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMakePostDropdown],
      html: `<mynt-make-post-dropdown></mynt-make-post-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-make-post-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-make-post-dropdown>
    `);
  });
});
