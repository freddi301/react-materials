type Liferay = {
  Language: {
    get(key: string): string;
  };
  getSiteGroupId(): string;
  authToken: string;
};

export const Liferay: Liferay = (window as any).Liferay ?? {
  Language: {
    get(key) {
      return key;
    },
  },
  getSiteGroupId() {
    return "20121";
  },
  authToken: "SMbzHdiW",
};
