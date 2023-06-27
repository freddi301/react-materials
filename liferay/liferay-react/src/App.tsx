import React from "react";
import { Liferay } from "./Liferay";

type AppComponentProps = {
  portletNamespace: string;
  contextPath: string;
  portletElementId: string;
  configuration: {
    system: Record<string, string>;
    portletInstance: Record<string, string>;
  };
};
export function App(props: AppComponentProps) {
  return (
    <div>
      <div>
        <span className="tag">
          {Liferay.Language.get("portlet-namespace")}:
        </span>
        <span className="value">{props.portletNamespace}</span>
      </div>
      <div>
        <span className="tag">{Liferay.Language.get("context-path")}:</span>
        <span className="value">{props.contextPath}</span>
      </div>
      <div>
        <span className="tag">
          {Liferay.Language.get("portlet-element-id")}:
        </span>
        <span className="value">{props.portletElementId}</span>
      </div>
      <div>
        <span className="tag">{Liferay.Language.get("configuration")}:</span>
        <span className="value pre">
          {JSON.stringify(props.configuration, null, 2)}
        </span>
      </div>
    </div>
  );
}

// example fetch for proxy configuration
async function proxyTest() {
  const response = await fetch(
    `/o/headless-delivery/v1.0/sites/${Liferay.getSiteGroupId()}/site-pages?p_auth=${
      Liferay.authToken
    }`
  );
  const data = await response.json();
  console.log(data);
}
proxyTest();
