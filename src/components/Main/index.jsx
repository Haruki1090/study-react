import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
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
