import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert("ボタンがクリックされました");
  }, []);

  // useCallbackを使うと、関数の再生成を抑えることができる

  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />

      <Link href="/about" onClick={handleClick}>
        ボタンです
      </Link>

      <Main pagePath="index" />
    </>
  );
}
