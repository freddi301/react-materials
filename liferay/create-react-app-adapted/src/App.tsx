import React from "react";
import "./App.css";
import { LIFERAY_PARAMS } from "./configuration";
import { useQuery as useApolloQuery, gql } from "@apollo/client";
import { useQuery as useReactQuery } from "@tanstack/react-query";
import ClayButton from "@clayui/button";

export const customFetch: typeof fetch = (input, init) => {
  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      // qui includere o autorization basic o token
    },
  });
};

function App() {
  const siteId = themeDisplay.getSiteGroupId();
  const sitePagesQuery = useReactQuery(["site-pages", { siteId }], async () => {
    const response = await customFetch(
      `/o/headless-delivery/v1.0/sites/${siteId}/site-pages?p_auth=${Liferay.authToken}`
    );
    const data = await response.json();
    return data;
  });
  const sitesQuery = useApolloQuery(gql`
    query OtherQuery {
      sitePages(siteKey: "20121") {
        items {
          uuid
          title
        }
      }
    }
  `);
  return (
    <div>
      <div>user id: {themeDisplay.getUserId()}</div>
      <div>authToken: {Liferay.authToken}</div>
      <pre className="configuration-debug">
        {JSON.stringify(LIFERAY_PARAMS, null, 2)}
      </pre>
      <pre>{JSON.stringify(sitePagesQuery.data, null, 2)}</pre>
      <pre>{JSON.stringify(sitesQuery.data, null, 2)}</pre>
      <button className="btn btn-primary" type="button">
        Example Primary Button (html + css)
      </button>
      <ClayButton displayType="primary">
        Example Button Primary (clatui react component)
      </ClayButton>
    </div>
  );
}

export default App;
