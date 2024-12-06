Segue uma documentação detalhada para o projeto **Network Visualizer**:

---

# **Network Visualizer**

## **Descrição**
O **Network Visualizer** é uma aplicação web interativa para criar, visualizar e manipular topologias de rede em tempo real. A ferramenta utiliza **Go** no backend para gerenciamento de conexões WebSocket e **React.js** no frontend com suporte à biblioteca **Cytoscape.js** para renderização de grafos.

---

## **Estrutura do Projeto**

```plaintext
network-visualizer/
├── backend/                # Backend implementado em Go
│   ├── main.go             # Servidor principal e WebSocket
│   └── go.mod              # Configuração e dependências do módulo Go
└── frontend/               # Frontend implementado em React.js
    ├── public/             # Arquivos públicos
    │   └── index.html      # Página HTML base
    ├── src/                # Código fonte do frontend
    │   ├── App.js          # Componente principal da aplicação
    │   ├── index.js        # Ponto de entrada da aplicação React
    │   └── cytoscape.css   # Estilos para visualização do grafo
    ├── package.json        # Dependências e scripts do projeto React
    └── README.md           # (Opcional) Documentação específica do frontend
```

---

## **Requisitos**

### **Backend**
- **Go** (versão 1.19 ou superior)
- Dependências:
  - [Gorilla WebSocket](https://github.com/gorilla/websocket)

### **Frontend**
- **Node.js** (versão 16.x ou 18.x recomendada)
- **npm** ou **Yarn**
- Bibliotecas:
  - React.js
  - Cytoscape.js
  - React-Cytoscape.js

---

## **Instalação**

### **1. Clone o Repositório**
```bash
git clone https://github.com/seu-usuario/network-visualizer.git
cd network-visualizer
```

---

### **2. Configuração do Backend**
1. Navegue para o diretório do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   go mod tidy
   ```
3. Execute o servidor:
   ```bash
   go run main.go
   ```

O backend estará disponível em `http://localhost:8080`.

---

### **3. Configuração do Frontend**
1. Navegue para o diretório do frontend:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

O frontend estará disponível em `http://localhost:3000`.

---

## **Funcionalidades**

### **Backend**
- Suporte a comunicação bidirecional em tempo real via WebSocket.
- Aceitação e transmissão de mensagens JSON para interações dinâmicas.

### **Frontend**
- Visualização interativa de topologias de rede com suporte para:
  - Nós e conexões.
  - Layout automático baseado em **Cytoscape.js**.
- Integração em tempo real com o backend via WebSocket.

---

## **Exemplo de Uso**

### 1. **Iniciar o Backend**
Execute o comando `go run main.go` no diretório `backend`. O servidor WebSocket estará ouvindo em `ws://localhost:8080/ws`.

### 2. **Iniciar o Frontend**
Após iniciar o servidor React com `npm start`, o frontend exibirá um grafo interativo com dois nós conectados.

---

## **Scripts Disponíveis**

### **Frontend**
- **`npm start`**: Inicia o servidor de desenvolvimento.
- **`npm build`**: Gera a versão de produção.
- **`npm test`**: Roda os testes (se configurados).

### **Backend**
Nenhum script adicional é necessário além do comando padrão:
```bash
go run main.go
```

---

## **Tecnologias Utilizadas**

### **Backend**
- **Go**: Linguagem de programação eficiente para servidores de alto desempenho.
- **Gorilla WebSocket**: Biblioteca para comunicação em tempo real via WebSocket.

### **Frontend**
- **React.js**: Biblioteca JavaScript para interfaces de usuário.
- **Cytoscape.js**: Ferramenta para visualização de grafos e redes.
- **React-Cytoscape.js**: Integração do Cytoscape com React.

---

## **Personalizações Futuras**

- **Persistência de dados**: Adicionar suporte para salvar e carregar topologias de rede.
- **Drag-and-drop**: Habilitar manipulação mais intuitiva dos nós.
- **Estilização**: Personalizar a aparência do grafo com temas.
- **Monitoramento em tempo real**: Exibir logs ou métricas de uso.

---

## **Contribuição**
1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas mudanças:
   ```bash
   git commit -m "Adicionei nova funcionalidade"
   ```
4. Envie suas mudanças:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## **Licença**
Este projeto é distribuído sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para usá-lo e modificá-lo.

---

