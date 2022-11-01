import Head from "next/head";
import Image from "next/image";
import { VictoryBar, VictoryPie, VictoryChart, VictoryTheme } from "victory";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Head>
        <title>Voice.Me</title>
        <meta name="description" content="VoiceMe Admin" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Link href="/playground/coins">Coins playground</Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
}
