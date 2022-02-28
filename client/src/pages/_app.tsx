import axios from "axios";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = 'http://localhost:8000/'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid h-screen font-serif bg-gray-900 text-white place-items-center">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )

}

export default MyApp;
