import Head from "next/head";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";


export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>
        ボタンです
      </button>

      <Main pagePath="index" />
    </>
  );
}

