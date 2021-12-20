import { newSpecPage } from '@stencil/core/testing';
import { MyntDmNotiButton } from '../mynt-dm-noti-button';

describe('mynt-dm-noti-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntDmNotiButton],
      html: `<mynt-dm-noti-button></mynt-dm-noti-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-dm-noti-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-dm-noti-button>
    `);
  });
});
