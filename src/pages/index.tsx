import { Inter } from "next/font/google";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import { BrowserWallet } from "@meshsdk/core";
import { useState } from "react";
import { toADA } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { wallet, connected, name, connecting, connect, disconnect, error } = useWallet();
  const [balance, setBalance] = useState(0);

  const afterConnectedWallet = async () => {
    const wallet = await BrowserWallet.enable("yoroi");
    const balance = await wallet.getBalance();
    const lovelace: string = await wallet.getLovelace();
    const ada = toADA(lovelace);

    console.log(balance);
    console.log(lovelace);
    console.log(ada);

    setBalance(ada);
  };

  return (
    <div className="w-full  text-center ">
      <nav className="flex justify-between items-center p-4 bg-blue-500">
        <a href="" className="text-xl text-white">
          Cardano DApp | Next.js + MeshJS
        </a>
        <CardanoWallet onConnected={afterConnectedWallet} />
      </nav>

      <div className="mt-8">
        {connected ? (
          <h2 className="text-5xl">Conectado: {balance} ADA </h2>
        ) : (
          <h2 className="text-5xl">Desconectado</h2>
        )}
      </div>
    </div>
  );
}
