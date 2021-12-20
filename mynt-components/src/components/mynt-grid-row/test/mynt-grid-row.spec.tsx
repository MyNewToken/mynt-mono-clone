import { newSpecPage } from '@stencil/core/testing';
import { MyntGridRow } from '../mynt-grid-row';

describe('mynt-grid-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntGridRow],
      html: `<mynt-grid-row></mynt-grid-row>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-grid-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-grid-row>
    `);
  });
});
