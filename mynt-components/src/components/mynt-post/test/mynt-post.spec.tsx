import { newSpecPage } from '@stencil/core/testing';
import { MyntPost } from '../mynt-post';

describe('mynt-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntPost],
      html: `<mynt-post></mynt-post>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-post>
    `);
  });
});
