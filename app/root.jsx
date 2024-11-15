import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalStateProvider } from '~/context/GolobalStateProvider';
import styles from "~/styles/scss/style.css";

export const LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles, loader: "sass" }
];

export default function App() {

  // const error = useRouteError();
  // console.error(error);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jampack | Modern SaaS App Template Built on Remix</title>
        <meta name="description" content="Remix based admin dashboard template by hencework" />
        <meta name="keywords" content="Remix, React Remix, RemixJs, Remix.run, React template,react admin,react node,react bootstrap,responsive web application,react webapp,multi app demos" />
        <meta name="author" content="Hencework" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hencework.com/" />
        <meta property="og:title" content="Jampack | Modern SaaS App Template Built on Remix" />
        <meta
          property="og:description"
          content="Explore the powerful Remix-based admin dashboard template created by Hencework. Simplify your project management and streamline workflows effortlessly."
        />
        <meta property="og:image" content="https://remix-jampack-compact.vercel.app/og-img.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStateProvider>
          <Outlet />
        </GlobalStateProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

