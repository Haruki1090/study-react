import Head from "next/head";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleInputChange, handleAdd } = useInputArray();
  useBgColor();
 
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
