import { newSpecPage } from '@stencil/core/testing';
import { MyntProfileHeader } from '../mynt-profile-header';

describe('mynt-profile-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntProfileHeader],
      html: `<mynt-profile-header></mynt-profile-header>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-profile-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-profile-header>
    `);
  });
});
