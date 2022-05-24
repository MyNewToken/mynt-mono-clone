import { newSpecPage } from '@stencil/core/testing';
import { MyntProfile } from '../mynt-profile';

describe('mynt-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntProfile],
      html: `<mynt-profile></mynt-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-profile>
    `);
  });
});
