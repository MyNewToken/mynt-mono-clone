import { newSpecPage } from '@stencil/core/testing';
import { MyntNotifications } from '../mynt-notifications';

describe('mynt-notifications', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntNotifications],
      html: `<mynt-notifications></mynt-notifications>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-notifications>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-notifications>
    `);
  });
});
