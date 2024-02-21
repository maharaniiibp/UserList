import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <style>
        {`
            body {
              background-color: #171823;
              margin: 0;
              padding: 0;
            }
          `}
      </style>
      <Component {...pageProps} />;
    </div>
  );
}
