import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.anchor} href="/" >
        Index
      </Link>
      <Link className={styles.anchor} href="/about" >
        About
      </Link>
    </header>
  );
}
// Linkコンポートを使うと、prefetchが有効になる。
// これにより、リンク先のページが表示される前に、リンク先のページのデータを事前に取得しておくことができる。
