import { newSpecPage } from '@stencil/core/testing';
import { MyntMakePost } from '../mynt-make-post';

describe('mynt-make-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMakePost],
      html: `<mynt-make-post></mynt-make-post>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-make-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-make-post>
    `);
  });
});
