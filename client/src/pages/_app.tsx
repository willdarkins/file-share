import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <div className="grid h-screen font-serif bg-gray-900 text-white place-items-center">
    <Component {...pageProps} />;
  </div>
}

export default MyApp;
