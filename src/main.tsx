import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // body: "Mena Grotesk Medium",
    fontfamily:
      "Autography,'Mena Grotesk Regular', 'Mena Grotesk Bold' 'Mena Grotesk Book', 'Mena Grotesk Medium', 'Mena Grotesk Blk', 'Mena Grotesk SemiBold', sans-serif",
  },
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
