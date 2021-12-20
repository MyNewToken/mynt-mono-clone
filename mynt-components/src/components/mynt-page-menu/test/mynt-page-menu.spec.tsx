import { newSpecPage } from '@stencil/core/testing';
import { MyntPageMenu } from '../mynt-page-menu';

describe('mynt-page-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntPageMenu],
      html: `<mynt-page-menu></mynt-page-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-page-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-page-menu>
    `);
  });
});
