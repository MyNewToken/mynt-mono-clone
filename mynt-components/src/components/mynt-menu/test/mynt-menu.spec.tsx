import { newSpecPage } from '@stencil/core/testing';
import { MyntMenu } from '../mynt-menu';

describe('mynt-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMenu],
      html: `<mynt-menu></mynt-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-menu>
    `);
  });
});
