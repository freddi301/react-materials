import React from "react";
import { useQuery } from "@tanstack/react-query";

export function DataLoad() {
  const dataQuery = useQuery(["data"], async () => {
    const response = await fetch("/api/some-entity");
    return response.json();
  });
  return (
    <div>
      <p>Status: {dataQuery.data ? "loaded" : "loading"}</p>
      <p>Data: {JSON.stringify(dataQuery.data)}</p>
    </div>
  );
}
