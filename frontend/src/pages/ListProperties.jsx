import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract";
import "./ListProperties.css";

export default function ListProperties() {
  const [properties, setProperties] = useState([]);
  const [userFractions, setUserFractions] = useState({});

  useEffect(() => {
    async function loadData() {
      const contract = await getContract();
      const count = Number((await contract.getPropertiesCount()).toString());

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
    try {
      const quantity = parseInt(prompt("Quantas frações deseja comprar?"), 10);
      if (isNaN(quantity) || quantity <= 0) {
        return alert("Quantidade inválida");
      }

      const totalCost = BigInt(pricePerFraction) * BigInt(quantity);
      const contract = await getContract();
      const tx = await contract.buyFraction(propertyId, quantity, {
        value: totalCost,
      });
      await tx.wait();
      alert("Compra realizada com sucesso!");
      window.location.reload();
    } catch (err) {
      console.error("Erro na compra:", err);
      if (err.code === 4001) {
        alert("Transação cancelada pelo usuário.");
      } else {
        alert("Falha ao comprar frações.");
      }
    }
  };

  return (
    <div className="property-list-container">
      <h1>Imóveis Disponíveis</h1>
      <div className="property-grid">
        {properties.map((prop) => (
          <div className="property-card" key={prop.id}>
            <h3>{prop.name}</h3>
            <p>
              <strong>Total de Frações:</strong> {prop.totalFractions}
            </p>
            <p>
              <strong>Vendidas:</strong> {prop.sold}
            </p>
            <p>
              <strong>Preço por fração:</strong>{" "}
              {ethers.formatEther(prop.price)} ETH
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
    </div>
  );
}
