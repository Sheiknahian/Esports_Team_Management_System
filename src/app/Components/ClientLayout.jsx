"use client";

import { useState } from "react";
import LoadingScreen from "./Loading";
import { ThemeProvider } from "../Providers/ThemeProvider";
import Navbar from "./Navbar";
import ClickEffect from "./ClickEffect";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <header className="fixed z-30 w-full bg-black bottom-0 lg:bg-transparent">
            <Navbar />
          </header>

          <main>
            <ClickEffect />
            {children}
          </main>

          <footer />
        </>
      )}
    </ThemeProvider>
  );
}
