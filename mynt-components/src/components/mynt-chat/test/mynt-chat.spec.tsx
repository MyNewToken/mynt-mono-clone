import { newSpecPage } from '@stencil/core/testing';
import { MyntChat } from '../mynt-chat';

describe('mynt-chat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntChat],
      html: `<mynt-chat></mynt-chat>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-chat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-chat>
    `);
  });
});
