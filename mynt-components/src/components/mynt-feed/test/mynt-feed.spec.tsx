import { newSpecPage } from '@stencil/core/testing';
import { MyntFeed } from '../mynt-feed';

describe('mynt-feed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntFeed],
      html: `<mynt-feed></mynt-feed>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-feed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-feed>
    `);
  });
});
