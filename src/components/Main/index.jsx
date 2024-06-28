import { Inter } from "next/font/google";
import styles from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {

  // 各ページのMainコンポーネントがマウントされた時に実行される
  useEffect(()=>{
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理
    return ()=>{
      document.body.style.backgroundColor = "";
    }
  },[])

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline
          pagePath={props.pagePath}
          code={<code className={styles.code}>pages/{props.pagePath}.js</code>}
          onClick={() =>
            alert(props.pagePath, ".jsのボタンがクリックされました!")
          }
        />
        <Links />
      </main>
    </>
  );
}
