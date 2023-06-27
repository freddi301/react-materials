export type Liferay = {
  Language: {
    get(key: string): string;
  };
  authToken: string;
};

export type ThemeDisplay = {
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
    Language: {
      get(key) {
        return key;
      },
    },

    authToken: "SMbzHdiW",
  };
}

if (typeof themeDisplay === "undefined") {
  window.themeDisplay = {
    getSiteGroupId() {
      return "20121";
    },
  };
}
