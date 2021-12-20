import { newSpecPage } from '@stencil/core/testing';
import { ProfilePic } from '../profile-pic';

describe('profile-pic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProfilePic],
      html: `<profile-pic></profile-pic>`,
    });
    expect(page.root).toEqualHtml(`
      <profile-pic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </profile-pic>
    `);
  });
});
