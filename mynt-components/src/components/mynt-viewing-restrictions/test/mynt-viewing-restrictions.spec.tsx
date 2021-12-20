import { newSpecPage } from '@stencil/core/testing';
import { MyntViewingRestrictions } from '../mynt-viewing-restrictions';

describe('mynt-viewing-restrictions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntViewingRestrictions],
      html: `<mynt-viewing-restrictions></mynt-viewing-restrictions>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-viewing-restrictions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-viewing-restrictions>
    `);
  });
});
