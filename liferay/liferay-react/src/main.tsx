import React from "react";
import ReactDOM from "react-dom";

import "./Liferay";
import { App } from "./App";

type Params = {
  portletNamespace: string;
  contextPath: string;
  portletElementId: string;
  configuration: {
    system: Record<string, string>;
    portletInstance: Record<string, string>;
  };
};

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main(params: Params) {
  ReactDOM.render(
    <App
      portletNamespace={params.portletNamespace}
      contextPath={params.contextPath}
      portletElementId={params.portletElementId}
      configuration={params.configuration}
    />,
    document.getElementById(params.portletElementId)
  );
}

if (process.env.NODE_ENV === "development") {
  require("./css/styles.scss");
  ReactDOM.render(
    <App
      portletNamespace={"my-portlet-namespace"}
      contextPath={"my-portletcontext-path"}
      portletElementId={"my-portlet-element-id"}
      configuration={{ system: {}, portletInstance: {} }}
    />,
    document.getElementById("root")
  );
}
