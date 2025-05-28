import { BrowserProvider, Contract } from "ethers";
import abi from "./abi.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask não encontrado");
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(contractAddress, abi, signer);
}
