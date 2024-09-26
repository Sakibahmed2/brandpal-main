"use client";

import { persistor, store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider attribute="class">
          {children}

          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
