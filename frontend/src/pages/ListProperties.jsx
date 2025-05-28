import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract";

export default function ListProperties() {
  const [properties, setProperties] = useState([]);
  const [userFractions, setUserFractions] = useState({});

  useEffect(() => {
    async function loadData() {
      const contract = await getContract();
      const countBN = await contract.getPropertiesCount();
      const count = Number(countBN.toString());

      // propriedades
      const props = [];
      for (let i = 0; i < count; i++) {
        const p = await contract.getProperty(i);
        props.push({
          id: i,
          name: p[0],
          totalFractions: p[1].toString(),
          sold: p[2].toString(),
          price: p[3].toString(),
          owner: p[4],
        });
      }
      setProperties(props);

      // frações do usuário
      const fracMap = {};
      for (let i = 0; i < count; i++) {
        const qtyBN = await contract.getMyFractions(i);
        fracMap[i] = Number(qtyBN.toString());
      }
      setUserFractions(fracMap);
    }

    loadData();
  }, []);

  const buy = async (propertyId, pricePerFraction) => {
    const quantity = parseInt(prompt("Quantas frações deseja comprar?"), 10);
    if (!quantity || quantity <= 0) return alert("Quantidade inválida");

    const totalCost = BigInt(pricePerFraction) * BigInt(quantity);
    const contract = await getContract();
    await (
      await contract.buyFraction(propertyId, quantity, { value: totalCost })
    ).wait();
    alert("Compra realizada com sucesso!");
    window.location.reload();
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Imóveis Disponíveis</h1>
      {properties.map((prop) => (
        <div
          key={prop.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{prop.name}</h3>
          <p>
            <strong>Total de Frações:</strong> {prop.totalFractions}
          </p>
          <p>
            <strong>Vendidas:</strong> {prop.sold}
          </p>
          <p>
            <strong>Preço por fração:</strong> {ethers.formatEther(prop.price)}{" "}
            ETH
          </p>
          <p>
            <strong>Suas frações:</strong> {userFractions[prop.id] || 0}
          </p>
          <button onClick={() => buy(prop.id, prop.price)}>
            Comprar Frações
          </button>
        </div>
      ))}
    </div>
  );
}
