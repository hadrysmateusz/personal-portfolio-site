import type { LinksFunction, MetaFunction } from "remix"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import normalize from "~/normalize.css"
import GlobalStyles from "~/components/GlobalStyles"
import { ThemeProvider } from "~/components/ThemeProvider"
import { ScrollPositionProvider } from "~/components/ScrollPositionProvider/ScrollPositionProvider"

export const meta: MetaFunction = () => {
  return { title: "Mateusz Hadryś - Portfolio" }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: normalize,
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,800;0,900;1,400;1,700&display=swap",
    },
  ]
}

export default function App() {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          <GlobalStyles />
          {typeof document === "undefined" ? "__STYLES__" : null}
        </head>
        <body>
          <ScrollPositionProvider>
            <Outlet />
          </ScrollPositionProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  )
}
