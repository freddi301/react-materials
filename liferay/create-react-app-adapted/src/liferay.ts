export type Liferay = {
  authToken: string;
};

export type ThemeDisplay = {
  getUserId(): string;
  getSiteGroupId(): string;
};

declare global {
  var Liferay: Liferay;
  var themeDisplay: ThemeDisplay;
  interface Window {
    Liferay: Liferay;
    themeDisplay: ThemeDisplay;
  }
}

if (typeof Liferay === "undefined") {
  window.Liferay = {
    authToken: "0fsHed5t",
  };
}

if (typeof themeDisplay === "undefined") {
  window.themeDisplay = {
    getUserId() {
      return "20125";
    },
    getSiteGroupId() {
      return "20121";
    },
  };
}
