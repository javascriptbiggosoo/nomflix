import React from "react";
import { createRoot } from "react-dom/client";

import { RecoilRoot } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { theme } from "./theme";
import GlobalStyle from "./GlobalStyle";

const container = document.getElementById("root");

const client = new QueryClient();
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
