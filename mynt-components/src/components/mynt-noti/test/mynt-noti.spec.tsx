import { newSpecPage } from '@stencil/core/testing';
import { MyntNoti } from '../mynt-noti';

describe('mynt-noti', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntNoti],
      html: `<mynt-noti></mynt-noti>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-noti>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-noti>
    `);
  });
});
