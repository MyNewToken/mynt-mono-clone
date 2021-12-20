import { newSpecPage } from '@stencil/core/testing';
import { MyntLogo } from '../mynt-logo';

describe('mynt-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntLogo],
      html: `<mynt-logo></mynt-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-logo>
    `);
  });
});
