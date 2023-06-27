import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { DataLoad } from "./DataLoad";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("DataLoad", async () => {
  // render componente, add necessary context providers
  const queryClient = new QueryClient({});
  render(
    <QueryClientProvider client={queryClient}>
      <DataLoad />
    </QueryClientProvider>
  );
  // find relevant ui pieces
  const status = screen.getByText(/Status:/i);
  const data = screen.getByText(/Data:/i);
  // test starting state
  expect(status).toHaveTextContent("Status: loading");
  expect(data).toHaveTextContent("Data:");
  // setup mock data
  const mockData = { foo: "bar" + Math.random() };
  server.use(
    rest.get("/api/some-entity", (req, res, ctx) => res(ctx.json(mockData)))
  );
  // wait for data to load
  await waitFor(() => {
    expect(status).toHaveTextContent("Status: loaded");
  });
  // verify data is correct
  expect(data).toHaveTextContent("Data: " + JSON.stringify(mockData));
});
