import { newSpecPage } from '@stencil/core/testing';
import { MyntMarkNsfw } from '../mynt-mark-nsfw';

describe('mynt-mark-nsfw', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMarkNsfw],
      html: `<mynt-mark-nsfw></mynt-mark-nsfw>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-mark-nsfw>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-mark-nsfw>
    `);
  });
});
