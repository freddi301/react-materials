declare global {
  interface Window {
    Liferay: {
      authToken: string;
    };
    themeDisplay: {
      getUserId(): string;
      getSiteGroupId(): string;
    };
  }
}

export const Liferay: typeof window.Liferay = window.Liferay ?? {
  authToken: "0fsHed5t",
};

export const themeDisplay: typeof window.themeDisplay = window.themeDisplay ?? {
  getUserId() {
    return "20125";
  },
  getSiteGroupId() {
    return "20121";
  },
};
