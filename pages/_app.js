import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";

//https://www.npmjs.com/package/@badrap/bar-of-progress
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 3,
  color: "#fd5b61",
  className: "z-99",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
