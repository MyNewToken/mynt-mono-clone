import { newSpecPage } from '@stencil/core/testing';
import { MyntWatchThumb } from '../mynt-watch-thumb';

describe('mynt-watch-thumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntWatchThumb],
      html: `<mynt-watch-thumb></mynt-watch-thumb>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-watch-thumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-watch-thumb>
    `);
  });
});
