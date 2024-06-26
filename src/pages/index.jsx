import Head from "next/head";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";


export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

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
  }, []);

  const handleDisplay = useCallback(() => { setIsShow((prevIsShow) => !prevIsShow) }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタンです</button>
      <button onClick={handleDisplay} >{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleAdd}>追加</button>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main pagePath="index" />
    </>
  );
}

