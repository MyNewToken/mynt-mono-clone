import { r as registerInstance, f as createEvent } from './index-beea9e3c.js';

let RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() { return {
    "from": ["propDidChange"],
    "to": ["propDidChange"]
  }; }
};

export { RouteRedirect as ion_route_redirect };
