const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const RealEstate = await hre.ethers.getContractFactory("RealEstateToken");
  const contract = await RealEstate.deploy();
  await contract.waitForDeployment();

  console.log("Contrato implantado em:", await contract.getAddress());

  // Carregar dados do JSON
  const properties = JSON.parse(
    fs.readFileSync("data/properties.json", "utf8")
  );

  // Adicionar imóveis ao contrato
  for (const prop of properties) {
    const tx = await contract.addProperty(
      prop.name,
      prop.totalFractions,
      hre.ethers.parseEther(prop.pricePerFraction)
    );
    await tx.wait();
    console.log(`Imóvel adicionado: ${prop.name}`);
  }

  console.log("Todos os imóveis foram adicionados!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
