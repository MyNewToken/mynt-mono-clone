/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyntAsset {
        "cost": any;
    }
    interface MyntAssetItem {
    }
    interface MyntAssetPage {
    }
    interface MyntAssets {
    }
    interface MyntChat {
        "name": string;
    }
    interface MyntCommentSection {
    }
    interface MyntCreateCoin {
    }
    interface MyntDm {
        "name": string;
        "profImg": string;
    }
    interface MyntDmButton {
    }
    interface MyntDmNotiButton {
    }
    interface MyntDms {
        "data": any[];
    }
    interface MyntFeed {
    }
    interface MyntGridRow {
        "numCols": number;
    }
    interface MyntListing {
    }
    interface MyntLogin {
        "create_account": boolean;
    }
    interface MyntLogo {
        "image": string;
    }
    interface MyntMakePost {
    }
    interface MyntMakePostDropdown {
    }
    interface MyntMarkNsfw {
    }
    interface MyntMarket {
    }
    interface MyntMenu {
    }
    interface MyntMessage {
        "msg": string;
        "sent": boolean;
        "timestamp": string;
    }
    interface MyntNoti {
        "assImg": string;
        "ttle": string;
        "txt": string;
    }
    interface MyntNotifications {
    }
    interface MyntPage {
    }
    interface MyntPageMenu {
    }
    interface MyntPost {
        "mediaPicSrc": string;
        "name": string;
        "profPicSrc": string;
        "text": string;
        "user": string;
    }
    interface MyntProfile {
    }
    interface MyntProfileHeader {
    }
    interface MyntRoot {
    }
    interface MyntSellAsset {
    }
    interface MyntSendAsset {
    }
    interface MyntSettings {
    }
    interface MyntSideList {
        "ttle": string;
    }
    interface MyntSideListing {
        "image": string;
        "text": string;
    }
    interface MyntSignup {
    }
    interface MyntStories {
    }
    interface MyntStory {
    }
    interface MyntTradeModule {
    }
    interface MyntViewingRestrictions {
    }
    interface MyntWallet {
    }
    interface MyntWatch {
    }
    interface MyntWatchRow {
        "numCols": number;
    }
    interface MyntWatchThumb {
    }
    interface ProfilePic {
        "source": string;
    }
    interface WalletCoin {
        "coinImg": string;
        "coinTitle": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyntAssetElement extends Components.MyntAsset, HTMLStencilElement {
    }
    var HTMLMyntAssetElement: {
        prototype: HTMLMyntAssetElement;
        new (): HTMLMyntAssetElement;
    };
    interface HTMLMyntAssetItemElement extends Components.MyntAssetItem, HTMLStencilElement {
    }
    var HTMLMyntAssetItemElement: {
        prototype: HTMLMyntAssetItemElement;
        new (): HTMLMyntAssetItemElement;
    };
    interface HTMLMyntAssetPageElement extends Components.MyntAssetPage, HTMLStencilElement {
    }
    var HTMLMyntAssetPageElement: {
        prototype: HTMLMyntAssetPageElement;
        new (): HTMLMyntAssetPageElement;
    };
    interface HTMLMyntAssetsElement extends Components.MyntAssets, HTMLStencilElement {
    }
    var HTMLMyntAssetsElement: {
        prototype: HTMLMyntAssetsElement;
        new (): HTMLMyntAssetsElement;
    };
    interface HTMLMyntChatElement extends Components.MyntChat, HTMLStencilElement {
    }
    var HTMLMyntChatElement: {
        prototype: HTMLMyntChatElement;
        new (): HTMLMyntChatElement;
    };
    interface HTMLMyntCommentSectionElement extends Components.MyntCommentSection, HTMLStencilElement {
    }
    var HTMLMyntCommentSectionElement: {
        prototype: HTMLMyntCommentSectionElement;
        new (): HTMLMyntCommentSectionElement;
    };
    interface HTMLMyntCreateCoinElement extends Components.MyntCreateCoin, HTMLStencilElement {
    }
    var HTMLMyntCreateCoinElement: {
        prototype: HTMLMyntCreateCoinElement;
        new (): HTMLMyntCreateCoinElement;
    };
    interface HTMLMyntDmElement extends Components.MyntDm, HTMLStencilElement {
    }
    var HTMLMyntDmElement: {
        prototype: HTMLMyntDmElement;
        new (): HTMLMyntDmElement;
    };
    interface HTMLMyntDmButtonElement extends Components.MyntDmButton, HTMLStencilElement {
    }
    var HTMLMyntDmButtonElement: {
        prototype: HTMLMyntDmButtonElement;
        new (): HTMLMyntDmButtonElement;
    };
    interface HTMLMyntDmNotiButtonElement extends Components.MyntDmNotiButton, HTMLStencilElement {
    }
    var HTMLMyntDmNotiButtonElement: {
        prototype: HTMLMyntDmNotiButtonElement;
        new (): HTMLMyntDmNotiButtonElement;
    };
    interface HTMLMyntDmsElement extends Components.MyntDms, HTMLStencilElement {
    }
    var HTMLMyntDmsElement: {
        prototype: HTMLMyntDmsElement;
        new (): HTMLMyntDmsElement;
    };
    interface HTMLMyntFeedElement extends Components.MyntFeed, HTMLStencilElement {
    }
    var HTMLMyntFeedElement: {
        prototype: HTMLMyntFeedElement;
        new (): HTMLMyntFeedElement;
    };
    interface HTMLMyntGridRowElement extends Components.MyntGridRow, HTMLStencilElement {
    }
    var HTMLMyntGridRowElement: {
        prototype: HTMLMyntGridRowElement;
        new (): HTMLMyntGridRowElement;
    };
    interface HTMLMyntListingElement extends Components.MyntListing, HTMLStencilElement {
    }
    var HTMLMyntListingElement: {
        prototype: HTMLMyntListingElement;
        new (): HTMLMyntListingElement;
    };
    interface HTMLMyntLoginElement extends Components.MyntLogin, HTMLStencilElement {
    }
    var HTMLMyntLoginElement: {
        prototype: HTMLMyntLoginElement;
        new (): HTMLMyntLoginElement;
    };
    interface HTMLMyntLogoElement extends Components.MyntLogo, HTMLStencilElement {
    }
    var HTMLMyntLogoElement: {
        prototype: HTMLMyntLogoElement;
        new (): HTMLMyntLogoElement;
    };
    interface HTMLMyntMakePostElement extends Components.MyntMakePost, HTMLStencilElement {
    }
    var HTMLMyntMakePostElement: {
        prototype: HTMLMyntMakePostElement;
        new (): HTMLMyntMakePostElement;
    };
    interface HTMLMyntMakePostDropdownElement extends Components.MyntMakePostDropdown, HTMLStencilElement {
    }
    var HTMLMyntMakePostDropdownElement: {
        prototype: HTMLMyntMakePostDropdownElement;
        new (): HTMLMyntMakePostDropdownElement;
    };
    interface HTMLMyntMarkNsfwElement extends Components.MyntMarkNsfw, HTMLStencilElement {
    }
    var HTMLMyntMarkNsfwElement: {
        prototype: HTMLMyntMarkNsfwElement;
        new (): HTMLMyntMarkNsfwElement;
    };
    interface HTMLMyntMarketElement extends Components.MyntMarket, HTMLStencilElement {
    }
    var HTMLMyntMarketElement: {
        prototype: HTMLMyntMarketElement;
        new (): HTMLMyntMarketElement;
    };
    interface HTMLMyntMenuElement extends Components.MyntMenu, HTMLStencilElement {
    }
    var HTMLMyntMenuElement: {
        prototype: HTMLMyntMenuElement;
        new (): HTMLMyntMenuElement;
    };
    interface HTMLMyntMessageElement extends Components.MyntMessage, HTMLStencilElement {
    }
    var HTMLMyntMessageElement: {
        prototype: HTMLMyntMessageElement;
        new (): HTMLMyntMessageElement;
    };
    interface HTMLMyntNotiElement extends Components.MyntNoti, HTMLStencilElement {
    }
    var HTMLMyntNotiElement: {
        prototype: HTMLMyntNotiElement;
        new (): HTMLMyntNotiElement;
    };
    interface HTMLMyntNotificationsElement extends Components.MyntNotifications, HTMLStencilElement {
    }
    var HTMLMyntNotificationsElement: {
        prototype: HTMLMyntNotificationsElement;
        new (): HTMLMyntNotificationsElement;
    };
    interface HTMLMyntPageElement extends Components.MyntPage, HTMLStencilElement {
    }
    var HTMLMyntPageElement: {
        prototype: HTMLMyntPageElement;
        new (): HTMLMyntPageElement;
    };
    interface HTMLMyntPageMenuElement extends Components.MyntPageMenu, HTMLStencilElement {
    }
    var HTMLMyntPageMenuElement: {
        prototype: HTMLMyntPageMenuElement;
        new (): HTMLMyntPageMenuElement;
    };
    interface HTMLMyntPostElement extends Components.MyntPost, HTMLStencilElement {
    }
    var HTMLMyntPostElement: {
        prototype: HTMLMyntPostElement;
        new (): HTMLMyntPostElement;
    };
    interface HTMLMyntProfileElement extends Components.MyntProfile, HTMLStencilElement {
    }
    var HTMLMyntProfileElement: {
        prototype: HTMLMyntProfileElement;
        new (): HTMLMyntProfileElement;
    };
    interface HTMLMyntProfileHeaderElement extends Components.MyntProfileHeader, HTMLStencilElement {
    }
    var HTMLMyntProfileHeaderElement: {
        prototype: HTMLMyntProfileHeaderElement;
        new (): HTMLMyntProfileHeaderElement;
    };
    interface HTMLMyntRootElement extends Components.MyntRoot, HTMLStencilElement {
    }
    var HTMLMyntRootElement: {
        prototype: HTMLMyntRootElement;
        new (): HTMLMyntRootElement;
    };
    interface HTMLMyntSellAssetElement extends Components.MyntSellAsset, HTMLStencilElement {
    }
    var HTMLMyntSellAssetElement: {
        prototype: HTMLMyntSellAssetElement;
        new (): HTMLMyntSellAssetElement;
    };
    interface HTMLMyntSendAssetElement extends Components.MyntSendAsset, HTMLStencilElement {
    }
    var HTMLMyntSendAssetElement: {
        prototype: HTMLMyntSendAssetElement;
        new (): HTMLMyntSendAssetElement;
    };
    interface HTMLMyntSettingsElement extends Components.MyntSettings, HTMLStencilElement {
    }
    var HTMLMyntSettingsElement: {
        prototype: HTMLMyntSettingsElement;
        new (): HTMLMyntSettingsElement;
    };
    interface HTMLMyntSideListElement extends Components.MyntSideList, HTMLStencilElement {
    }
    var HTMLMyntSideListElement: {
        prototype: HTMLMyntSideListElement;
        new (): HTMLMyntSideListElement;
    };
    interface HTMLMyntSideListingElement extends Components.MyntSideListing, HTMLStencilElement {
    }
    var HTMLMyntSideListingElement: {
        prototype: HTMLMyntSideListingElement;
        new (): HTMLMyntSideListingElement;
    };
    interface HTMLMyntSignupElement extends Components.MyntSignup, HTMLStencilElement {
    }
    var HTMLMyntSignupElement: {
        prototype: HTMLMyntSignupElement;
        new (): HTMLMyntSignupElement;
    };
    interface HTMLMyntStoriesElement extends Components.MyntStories, HTMLStencilElement {
    }
    var HTMLMyntStoriesElement: {
        prototype: HTMLMyntStoriesElement;
        new (): HTMLMyntStoriesElement;
    };
    interface HTMLMyntStoryElement extends Components.MyntStory, HTMLStencilElement {
    }
    var HTMLMyntStoryElement: {
        prototype: HTMLMyntStoryElement;
        new (): HTMLMyntStoryElement;
    };
    interface HTMLMyntTradeModuleElement extends Components.MyntTradeModule, HTMLStencilElement {
    }
    var HTMLMyntTradeModuleElement: {
        prototype: HTMLMyntTradeModuleElement;
        new (): HTMLMyntTradeModuleElement;
    };
    interface HTMLMyntViewingRestrictionsElement extends Components.MyntViewingRestrictions, HTMLStencilElement {
    }
    var HTMLMyntViewingRestrictionsElement: {
        prototype: HTMLMyntViewingRestrictionsElement;
        new (): HTMLMyntViewingRestrictionsElement;
    };
    interface HTMLMyntWalletElement extends Components.MyntWallet, HTMLStencilElement {
    }
    var HTMLMyntWalletElement: {
        prototype: HTMLMyntWalletElement;
        new (): HTMLMyntWalletElement;
    };
    interface HTMLMyntWatchElement extends Components.MyntWatch, HTMLStencilElement {
    }
    var HTMLMyntWatchElement: {
        prototype: HTMLMyntWatchElement;
        new (): HTMLMyntWatchElement;
    };
    interface HTMLMyntWatchRowElement extends Components.MyntWatchRow, HTMLStencilElement {
    }
    var HTMLMyntWatchRowElement: {
        prototype: HTMLMyntWatchRowElement;
        new (): HTMLMyntWatchRowElement;
    };
    interface HTMLMyntWatchThumbElement extends Components.MyntWatchThumb, HTMLStencilElement {
    }
    var HTMLMyntWatchThumbElement: {
        prototype: HTMLMyntWatchThumbElement;
        new (): HTMLMyntWatchThumbElement;
    };
    interface HTMLProfilePicElement extends Components.ProfilePic, HTMLStencilElement {
    }
    var HTMLProfilePicElement: {
        prototype: HTMLProfilePicElement;
        new (): HTMLProfilePicElement;
    };
    interface HTMLWalletCoinElement extends Components.WalletCoin, HTMLStencilElement {
    }
    var HTMLWalletCoinElement: {
        prototype: HTMLWalletCoinElement;
        new (): HTMLWalletCoinElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "mynt-asset": HTMLMyntAssetElement;
        "mynt-asset-item": HTMLMyntAssetItemElement;
        "mynt-asset-page": HTMLMyntAssetPageElement;
        "mynt-assets": HTMLMyntAssetsElement;
        "mynt-chat": HTMLMyntChatElement;
        "mynt-comment-section": HTMLMyntCommentSectionElement;
        "mynt-create-coin": HTMLMyntCreateCoinElement;
        "mynt-dm": HTMLMyntDmElement;
        "mynt-dm-button": HTMLMyntDmButtonElement;
        "mynt-dm-noti-button": HTMLMyntDmNotiButtonElement;
        "mynt-dms": HTMLMyntDmsElement;
        "mynt-feed": HTMLMyntFeedElement;
        "mynt-grid-row": HTMLMyntGridRowElement;
        "mynt-listing": HTMLMyntListingElement;
        "mynt-login": HTMLMyntLoginElement;
        "mynt-logo": HTMLMyntLogoElement;
        "mynt-make-post": HTMLMyntMakePostElement;
        "mynt-make-post-dropdown": HTMLMyntMakePostDropdownElement;
        "mynt-mark-nsfw": HTMLMyntMarkNsfwElement;
        "mynt-market": HTMLMyntMarketElement;
        "mynt-menu": HTMLMyntMenuElement;
        "mynt-message": HTMLMyntMessageElement;
        "mynt-noti": HTMLMyntNotiElement;
        "mynt-notifications": HTMLMyntNotificationsElement;
        "mynt-page": HTMLMyntPageElement;
        "mynt-page-menu": HTMLMyntPageMenuElement;
        "mynt-post": HTMLMyntPostElement;
        "mynt-profile": HTMLMyntProfileElement;
        "mynt-profile-header": HTMLMyntProfileHeaderElement;
        "mynt-root": HTMLMyntRootElement;
        "mynt-sell-asset": HTMLMyntSellAssetElement;
        "mynt-send-asset": HTMLMyntSendAssetElement;
        "mynt-settings": HTMLMyntSettingsElement;
        "mynt-side-list": HTMLMyntSideListElement;
        "mynt-side-listing": HTMLMyntSideListingElement;
        "mynt-signup": HTMLMyntSignupElement;
        "mynt-stories": HTMLMyntStoriesElement;
        "mynt-story": HTMLMyntStoryElement;
        "mynt-trade-module": HTMLMyntTradeModuleElement;
        "mynt-viewing-restrictions": HTMLMyntViewingRestrictionsElement;
        "mynt-wallet": HTMLMyntWalletElement;
        "mynt-watch": HTMLMyntWatchElement;
        "mynt-watch-row": HTMLMyntWatchRowElement;
        "mynt-watch-thumb": HTMLMyntWatchThumbElement;
        "profile-pic": HTMLProfilePicElement;
        "wallet-coin": HTMLWalletCoinElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyntAsset {
        "cost"?: any;
    }
    interface MyntAssetItem {
    }
    interface MyntAssetPage {
    }
    interface MyntAssets {
    }
    interface MyntChat {
        "name"?: string;
    }
    interface MyntCommentSection {
    }
    interface MyntCreateCoin {
    }
    interface MyntDm {
        "name"?: string;
        "profImg"?: string;
    }
    interface MyntDmButton {
    }
    interface MyntDmNotiButton {
    }
    interface MyntDms {
        "data"?: any[];
    }
    interface MyntFeed {
    }
    interface MyntGridRow {
        "numCols"?: number;
    }
    interface MyntListing {
    }
    interface MyntLogin {
        "create_account"?: boolean;
    }
    interface MyntLogo {
        "image"?: string;
    }
    interface MyntMakePost {
    }
    interface MyntMakePostDropdown {
    }
    interface MyntMarkNsfw {
    }
    interface MyntMarket {
    }
    interface MyntMenu {
    }
    interface MyntMessage {
        "msg"?: string;
        "sent"?: boolean;
        "timestamp"?: string;
    }
    interface MyntNoti {
        "assImg"?: string;
        "ttle"?: string;
        "txt"?: string;
    }
    interface MyntNotifications {
    }
    interface MyntPage {
    }
    interface MyntPageMenu {
    }
    interface MyntPost {
        "mediaPicSrc"?: string;
        "name"?: string;
        "profPicSrc"?: string;
        "text"?: string;
        "user"?: string;
    }
    interface MyntProfile {
    }
    interface MyntProfileHeader {
    }
    interface MyntRoot {
    }
    interface MyntSellAsset {
    }
    interface MyntSendAsset {
    }
    interface MyntSettings {
    }
    interface MyntSideList {
        "ttle"?: string;
    }
    interface MyntSideListing {
        "image"?: string;
        "text"?: string;
    }
    interface MyntSignup {
    }
    interface MyntStories {
    }
    interface MyntStory {
    }
    interface MyntTradeModule {
    }
    interface MyntViewingRestrictions {
    }
    interface MyntWallet {
    }
    interface MyntWatch {
    }
    interface MyntWatchRow {
        "numCols"?: number;
    }
    interface MyntWatchThumb {
    }
    interface ProfilePic {
        "source"?: string;
    }
    interface WalletCoin {
        "coinImg"?: string;
        "coinTitle"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "mynt-asset": MyntAsset;
        "mynt-asset-item": MyntAssetItem;
        "mynt-asset-page": MyntAssetPage;
        "mynt-assets": MyntAssets;
        "mynt-chat": MyntChat;
        "mynt-comment-section": MyntCommentSection;
        "mynt-create-coin": MyntCreateCoin;
        "mynt-dm": MyntDm;
        "mynt-dm-button": MyntDmButton;
        "mynt-dm-noti-button": MyntDmNotiButton;
        "mynt-dms": MyntDms;
        "mynt-feed": MyntFeed;
        "mynt-grid-row": MyntGridRow;
        "mynt-listing": MyntListing;
        "mynt-login": MyntLogin;
        "mynt-logo": MyntLogo;
        "mynt-make-post": MyntMakePost;
        "mynt-make-post-dropdown": MyntMakePostDropdown;
        "mynt-mark-nsfw": MyntMarkNsfw;
        "mynt-market": MyntMarket;
        "mynt-menu": MyntMenu;
        "mynt-message": MyntMessage;
        "mynt-noti": MyntNoti;
        "mynt-notifications": MyntNotifications;
        "mynt-page": MyntPage;
        "mynt-page-menu": MyntPageMenu;
        "mynt-post": MyntPost;
        "mynt-profile": MyntProfile;
        "mynt-profile-header": MyntProfileHeader;
        "mynt-root": MyntRoot;
        "mynt-sell-asset": MyntSellAsset;
        "mynt-send-asset": MyntSendAsset;
        "mynt-settings": MyntSettings;
        "mynt-side-list": MyntSideList;
        "mynt-side-listing": MyntSideListing;
        "mynt-signup": MyntSignup;
        "mynt-stories": MyntStories;
        "mynt-story": MyntStory;
        "mynt-trade-module": MyntTradeModule;
        "mynt-viewing-restrictions": MyntViewingRestrictions;
        "mynt-wallet": MyntWallet;
        "mynt-watch": MyntWatch;
        "mynt-watch-row": MyntWatchRow;
        "mynt-watch-thumb": MyntWatchThumb;
        "profile-pic": ProfilePic;
        "wallet-coin": WalletCoin;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "mynt-asset": LocalJSX.MyntAsset & JSXBase.HTMLAttributes<HTMLMyntAssetElement>;
            "mynt-asset-item": LocalJSX.MyntAssetItem & JSXBase.HTMLAttributes<HTMLMyntAssetItemElement>;
            "mynt-asset-page": LocalJSX.MyntAssetPage & JSXBase.HTMLAttributes<HTMLMyntAssetPageElement>;
            "mynt-assets": LocalJSX.MyntAssets & JSXBase.HTMLAttributes<HTMLMyntAssetsElement>;
            "mynt-chat": LocalJSX.MyntChat & JSXBase.HTMLAttributes<HTMLMyntChatElement>;
            "mynt-comment-section": LocalJSX.MyntCommentSection & JSXBase.HTMLAttributes<HTMLMyntCommentSectionElement>;
            "mynt-create-coin": LocalJSX.MyntCreateCoin & JSXBase.HTMLAttributes<HTMLMyntCreateCoinElement>;
            "mynt-dm": LocalJSX.MyntDm & JSXBase.HTMLAttributes<HTMLMyntDmElement>;
            "mynt-dm-button": LocalJSX.MyntDmButton & JSXBase.HTMLAttributes<HTMLMyntDmButtonElement>;
            "mynt-dm-noti-button": LocalJSX.MyntDmNotiButton & JSXBase.HTMLAttributes<HTMLMyntDmNotiButtonElement>;
            "mynt-dms": LocalJSX.MyntDms & JSXBase.HTMLAttributes<HTMLMyntDmsElement>;
            "mynt-feed": LocalJSX.MyntFeed & JSXBase.HTMLAttributes<HTMLMyntFeedElement>;
            "mynt-grid-row": LocalJSX.MyntGridRow & JSXBase.HTMLAttributes<HTMLMyntGridRowElement>;
            "mynt-listing": LocalJSX.MyntListing & JSXBase.HTMLAttributes<HTMLMyntListingElement>;
            "mynt-login": LocalJSX.MyntLogin & JSXBase.HTMLAttributes<HTMLMyntLoginElement>;
            "mynt-logo": LocalJSX.MyntLogo & JSXBase.HTMLAttributes<HTMLMyntLogoElement>;
            "mynt-make-post": LocalJSX.MyntMakePost & JSXBase.HTMLAttributes<HTMLMyntMakePostElement>;
            "mynt-make-post-dropdown": LocalJSX.MyntMakePostDropdown & JSXBase.HTMLAttributes<HTMLMyntMakePostDropdownElement>;
            "mynt-mark-nsfw": LocalJSX.MyntMarkNsfw & JSXBase.HTMLAttributes<HTMLMyntMarkNsfwElement>;
            "mynt-market": LocalJSX.MyntMarket & JSXBase.HTMLAttributes<HTMLMyntMarketElement>;
            "mynt-menu": LocalJSX.MyntMenu & JSXBase.HTMLAttributes<HTMLMyntMenuElement>;
            "mynt-message": LocalJSX.MyntMessage & JSXBase.HTMLAttributes<HTMLMyntMessageElement>;
            "mynt-noti": LocalJSX.MyntNoti & JSXBase.HTMLAttributes<HTMLMyntNotiElement>;
            "mynt-notifications": LocalJSX.MyntNotifications & JSXBase.HTMLAttributes<HTMLMyntNotificationsElement>;
            "mynt-page": LocalJSX.MyntPage & JSXBase.HTMLAttributes<HTMLMyntPageElement>;
            "mynt-page-menu": LocalJSX.MyntPageMenu & JSXBase.HTMLAttributes<HTMLMyntPageMenuElement>;
            "mynt-post": LocalJSX.MyntPost & JSXBase.HTMLAttributes<HTMLMyntPostElement>;
            "mynt-profile": LocalJSX.MyntProfile & JSXBase.HTMLAttributes<HTMLMyntProfileElement>;
            "mynt-profile-header": LocalJSX.MyntProfileHeader & JSXBase.HTMLAttributes<HTMLMyntProfileHeaderElement>;
            "mynt-root": LocalJSX.MyntRoot & JSXBase.HTMLAttributes<HTMLMyntRootElement>;
            "mynt-sell-asset": LocalJSX.MyntSellAsset & JSXBase.HTMLAttributes<HTMLMyntSellAssetElement>;
            "mynt-send-asset": LocalJSX.MyntSendAsset & JSXBase.HTMLAttributes<HTMLMyntSendAssetElement>;
            "mynt-settings": LocalJSX.MyntSettings & JSXBase.HTMLAttributes<HTMLMyntSettingsElement>;
            "mynt-side-list": LocalJSX.MyntSideList & JSXBase.HTMLAttributes<HTMLMyntSideListElement>;
            "mynt-side-listing": LocalJSX.MyntSideListing & JSXBase.HTMLAttributes<HTMLMyntSideListingElement>;
            "mynt-signup": LocalJSX.MyntSignup & JSXBase.HTMLAttributes<HTMLMyntSignupElement>;
            "mynt-stories": LocalJSX.MyntStories & JSXBase.HTMLAttributes<HTMLMyntStoriesElement>;
            "mynt-story": LocalJSX.MyntStory & JSXBase.HTMLAttributes<HTMLMyntStoryElement>;
            "mynt-trade-module": LocalJSX.MyntTradeModule & JSXBase.HTMLAttributes<HTMLMyntTradeModuleElement>;
            "mynt-viewing-restrictions": LocalJSX.MyntViewingRestrictions & JSXBase.HTMLAttributes<HTMLMyntViewingRestrictionsElement>;
            "mynt-wallet": LocalJSX.MyntWallet & JSXBase.HTMLAttributes<HTMLMyntWalletElement>;
            "mynt-watch": LocalJSX.MyntWatch & JSXBase.HTMLAttributes<HTMLMyntWatchElement>;
            "mynt-watch-row": LocalJSX.MyntWatchRow & JSXBase.HTMLAttributes<HTMLMyntWatchRowElement>;
            "mynt-watch-thumb": LocalJSX.MyntWatchThumb & JSXBase.HTMLAttributes<HTMLMyntWatchThumbElement>;
            "profile-pic": LocalJSX.ProfilePic & JSXBase.HTMLAttributes<HTMLProfilePicElement>;
            "wallet-coin": LocalJSX.WalletCoin & JSXBase.HTMLAttributes<HTMLWalletCoinElement>;
        }
    }
}
