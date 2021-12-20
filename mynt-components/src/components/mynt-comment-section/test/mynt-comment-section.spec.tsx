import { newSpecPage } from '@stencil/core/testing';
import { MyntCommentSection } from '../mynt-comment-section';

describe('mynt-comment-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntCommentSection],
      html: `<mynt-comment-section></mynt-comment-section>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-comment-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-comment-section>
    `);
  });
});
