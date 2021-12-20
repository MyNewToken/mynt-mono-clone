import { newSpecPage } from '@stencil/core/testing';
import { MyntMessage } from '../mynt-message';

describe('mynt-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntMessage],
      html: `<mynt-message></mynt-message>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-message>
    `);
  });
});
