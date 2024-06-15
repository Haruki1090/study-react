import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  console.log(props);
  return (
    <>
      <div className={styles.description}>
        <h1 className={styles.title}>{props.pagePath} page</h1>
        <p>Get started by editing&nbsp;{props.children}</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        {/* 親からonClickを渡す */}
        <button onClick={props.onClick}>ボタン</button>
      </div>
    </>
  );
}
