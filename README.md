# RealToken

Este projeto é uma DApp (Aplicação Descentralizada) para **tokenização de imóveis**, permitindo que propriedades sejam fracionadas e adquiridas por meio da blockchain Ethereum (testnet Sepolia).

## 🚀 Funcionalidades

- Cadastro de propriedades (com imagem e descrição).
- Venda de frações de imóveis com pagamento em ETH.
- Consulta pública das propriedades disponíveis e frações adquiridas.

---

## 🧱 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- Conta na [Infura](https://infura.io/) (para acessar a rede Sepolia)
- Uma carteira Ethereum (ex: [MetaMask](https://metamask.io/)) com saldo em Sepolia ETH

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/souvictorcassio/projeto-token-blockchain.git

# Acesse o diretório
cd projeto-token-blockchain/contrato

# Instale as dependências
npm install
```

## 🔐 Configuração de Ambiente

Crie um arquivo .env na raiz do diretório contrato/ com o seguinte conteúdo:

```bash
PRIVATE_KEY=seu_private_key_aqui
INFURA_API_KEY=sua_infura_api_key_aqui
```

⚠️ Nunca compartilhe sua chave privada publicamente!

## ⚙️ Compilação do Contrato

```bash
npx hardhat compile

npx hardhat node
```

## 📤 Deploy para a rede Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## 🌐 Frontend

```bash
# Acesse o diretório
cd projeto-token-blockchain/frontend

# Instale as dependências
npm install

# Start
npm start
```

[⬆️ Voltar ao topo](#RealToken)

## 🔧 Melhorias Futuras

Embora a aplicação já entregue a funcionalidade principal de compra de frações de imóveis via blockchain, algumas funcionalidades planejadas ainda não foram implementadas. Entre as evoluções pensadas destacam-se:

- Minha carteira: permitir que o usuário visualize todos os imóveis e frações que possui.

- Histórico de transações: registrar e exibir compras realizadas.

- Revenda de frações: permitir que usuários negociem suas frações.

- Armazenamento descentralizado de imagens: integrar IPFS para garantir a imutabilidade e descentralização dos dados visuais.

- Responsividade completa: adaptar a experiência para dispositivos móveis e tablets.

Essas melhorias visam tornar a aplicação mais robusta, acessível e alinhada com as melhores práticas de descentralização e usabilidade.

## Desenvolvedores

- André Carneiro Ribeiro
- Danton Filipe
- Elton Silva Cavalcante
- Liliana Barbosa Alencar
- Mateus Pereira de Lima
- Renan Argôlo Carvalho Miranda
- Samuel Alexandre Barbosa da Silva
- Thiago Henrique Monteiro da Silva
- Victor Cássio de Sousa

## Agradecimentos

Em nome do Squad 39 (Uninassau) - Banco do Brasil, agradeço ao Porto Digital e à Prefeitura do Recife por nos proporcionar esta oportunidade de aprendizado e desenvolvimento de habilidades técnicas e de trabalho em equipe. Também agradeço aos colegas de equipe, mentor e cliente que foram peças chave para a construção e finalização do projeto.

[⬆️ Voltar ao topo](#RealToken)
