import { newSpecPage } from '@stencil/core/testing';
import { MyntSettings } from '../mynt-settings';

describe('mynt-settings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSettings],
      html: `<mynt-settings></mynt-settings>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-settings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-settings>
    `);
  });
});
