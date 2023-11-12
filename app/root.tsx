import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import "./tailwind.css";
import { Menu } from "./components/Menu";
import { Github, Linkedin, Twitter } from "lucide-react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
];

function Document({
  children,
  theme = "light"
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
  env?: Record<string, string>;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document theme="light">
      <div className="container">
        <header className="pb-6">
          <Menu />
        </header>
        <Outlet />

        <footer className="flex justify-between items-center py-6 w-full">
          <div className="flex gap-3 justify-center w-full sm:w-auto">
            <a
              className="hover:text-gray-500"
              href="https://twitter.com/swalker326"
            >
              <Twitter />
            </a>
            <a
              className="hover:text-gray-500"
              href="https://github.com/swalker326"
            >
              <Github />
            </a>
            <a
              className="hover:text-gray-500"
              href="https://linkedin.com/in/shane-walker-326"
            >
              <Linkedin />
            </a>
          </div>
          <p className="text-sm hidden sm:block">
            © {new Date().getFullYear()} Shane Walker. All rights reserved.
          </p>
        </footer>
      </div>
    </Document>
  );
}
