import type { AppProps } from "next/app";
import "@/styles/globals.css"; // Импорт глобальных стилей

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}