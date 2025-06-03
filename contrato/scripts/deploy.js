const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployando com a conta:", deployer.address);

  const RealEstate = await ethers.getContractFactory("RealEstateToken");
  const contract = await RealEstate.deploy();
  await contract.waitForDeployment();

  console.log("Contrato implantado em:", await contract.getAddress());

  const properties = JSON.parse(
    fs.readFileSync("data/properties.json", "utf8")
  );

  for (const prop of properties) {
    const tx = await contract.addProperty(
      prop.name,
      prop.totalFractions,
      ethers.parseEther(prop.pricePerFraction),
      prop.image,
      prop.description
    );
    await tx.wait();
    console.log(`✅ Imóvel adicionado: ${prop.name}`);
  }

  console.log("🎉 Todos os imóveis foram adicionados com sucesso!");
}

main().catch((error) => {
  console.error("❌ Erro no deploy:", error);
  process.exitCode = 1;
});
