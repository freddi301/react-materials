declare var _LIFERAY_PARAMS_: {
    configuration: {
      portletInstance: Record<string, string>;
      system: Record<string, string>;
    };
    contextPath: string;
    portletElementId: string;
    portletNamespace: string;
  };

export const LIFERAY_PARAMS = typeof _LIFERAY_PARAMS_ !== 'undefined' ? _LIFERAY_PARAMS_ : {
    configuration: {
        portletInstance: {},
        system: {},
    },
    contextPath: '',
    portletElementId: '',
    portletNamespace: '',
};