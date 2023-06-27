import React from "react";
import ReactDOM from "react-dom";

import AppComponent from "./AppComponent";

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
    <AppComponent
      portletNamespace={params.portletNamespace}
      contextPath={params.contextPath}
      portletElementId={params.portletElementId}
      configuration={params.configuration}
    />,
    document.getElementById(params.portletElementId)
  );
}


type Params = {
  portletNamespace: string;
  contextPath: string;
  portletElementId: string;
  configuration: {
    system: Record<string, string>;
    portletInstance: Record<string, string>;
  }
}