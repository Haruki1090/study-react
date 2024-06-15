import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header} >
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
// Linkコンポートを使うと、prefetchが有効になる。
// これにより、リンク先のページが表示される前に、リンク先のページのデータを事前に取得しておくことができる。