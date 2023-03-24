import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-700">
      <Head>
        <title>Kobo Toolbox Support Bot</title>
        <link
          rel="icon"

        />
      </Head>
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Welcome />
        <Chat />

      </main>
      <Footer />
    </div>
  );
};

export default Home;
