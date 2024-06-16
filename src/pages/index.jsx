import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <Main pagePath="index" />
    </>
  );
}
