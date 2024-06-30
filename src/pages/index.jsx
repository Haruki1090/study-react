import Head from "next/head";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";


export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

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

  const handleClick = (e) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleInputChange = useCallback((e) => {
    if (e.target.value.length > 10) {
      alert("10文字以内で入力してください")
      return;
    }
    setText(e.target.value)
  }, [])

  const handleDisplay = useCallback(() => { setIsShow((isShow) => !isShow) } , []);


  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタンです</button>
      <button onClick={handleDisplay} >{isShow ? "非表示" : "表示"}</button>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />

      <Main pagePath="index" />
    </>
  );
}

