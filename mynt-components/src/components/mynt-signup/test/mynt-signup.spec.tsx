import { newSpecPage } from '@stencil/core/testing';
import { MyntSignup } from '../mynt-signup';

describe('mynt-signup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSignup],
      html: `<mynt-signup></mynt-signup>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-signup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-signup>
    `);
  });
});
