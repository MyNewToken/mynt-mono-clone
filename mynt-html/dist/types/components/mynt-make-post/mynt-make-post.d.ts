export declare class MyntMakePost {
  createACoin: boolean;
  viewRestrictions: boolean;
  sellAsset: boolean;
  sendAsset: boolean;
  markNSFW: boolean;
  /**
    async newToggleController(changed) {
      if (this.createACoin) {
        this.presentCreateCoin();
      } else if (this.viewRestrictions) {
        this.presentViewingRestrictions();
      } else if (this.sellAsset) {
        this.presentSellAsset();
      } else if (this.sendAsset) {
        this.presentSendAsset();
      } else if (this.markNSFW) {
        this.presentMarkNSFW();
      }
    }
  **/
  presentCreateCoin(ev: any): Promise<void>;
  presentViewingRestrictions(ev: any): Promise<void>;
  presentSellAsset(ev: any): Promise<void>;
  presentSendAsset(ev: any): Promise<void>;
  presentMarkNSFW(ev: any): Promise<void>;
  render(): any;
}
