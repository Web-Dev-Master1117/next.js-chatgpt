import "highlight.js/styles/github-dark.css";
import type { Metadata } from "next";

import Root from "@/components/Root";
import Provider from "@/components/provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chat APP",
  description: "Simple Chat App integrated with OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Root>
      <Provider>
        <>{children}</>
      </Provider>
    </Root>
  );
}
