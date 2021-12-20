import { newSpecPage } from '@stencil/core/testing';
import { MyntWatchRow } from '../mynt-watch-row';

describe('mynt-watch-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntWatchRow],
      html: `<mynt-watch-row></mynt-watch-row>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-watch-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-watch-row>
    `);
  });
});
