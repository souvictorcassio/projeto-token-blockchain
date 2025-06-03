import { BrowserProvider, Contract } from "ethers";
import abi from "./abi.json";

const contractAddress = "0x17f84F361d532E81A14193130427f867EA24b26D";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask não encontrado");
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(contractAddress, abi, signer);
}
