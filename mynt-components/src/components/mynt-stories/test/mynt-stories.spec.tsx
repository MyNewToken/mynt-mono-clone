import { newSpecPage } from '@stencil/core/testing';
import { MyntStories } from '../mynt-stories';

describe('mynt-stories', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntStories],
      html: `<mynt-stories></mynt-stories>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-stories>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-stories>
    `);
  });
});
