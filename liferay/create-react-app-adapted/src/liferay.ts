declare global {
    interface Window {
      Liferay: {
          authToken: string;
      };
      themeDisplay: {
          getUserId(): string;
      };
    }
  }
  

export const Liferay = window.Liferay ?? {
    authToken: '',
}

export const themeDisplay = window.themeDisplay ?? {
    getUserId: () => '',
}