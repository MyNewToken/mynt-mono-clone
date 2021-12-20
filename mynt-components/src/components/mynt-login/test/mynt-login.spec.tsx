import { newSpecPage } from '@stencil/core/testing';
import { MyntLogin } from '../mynt-login';

describe('mynt-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntLogin],
      html: `<mynt-login></mynt-login>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-login>
    `);
  });
});
