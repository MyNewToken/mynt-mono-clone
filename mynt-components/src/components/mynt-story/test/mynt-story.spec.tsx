import { newSpecPage } from '@stencil/core/testing';
import { MyntStory } from '../mynt-story';

describe('mynt-story', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntStory],
      html: `<mynt-story></mynt-story>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-story>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-story>
    `);
  });
});
