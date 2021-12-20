import { newSpecPage } from '@stencil/core/testing';
import { MyntDms } from '../mynt-dms';

describe('mynt-dms', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntDms],
      html: `<mynt-dms></mynt-dms>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-dms>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-dms>
    `);
  });
});
