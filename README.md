
## Pub/Sub Architecture com Redis

Este projeto demonstra uma arquitetura simples de **Publicador/Assinante (Pub/Sub)** utilizando **Node.js** e **Redis**. A aplicação simula um sistema de mensagens onde publishers enviam mensagens a canais Redis e subscribers escutam e consomem essas mensagens em tempo real.

### 📂 Estrutura do Projeto

```
PubSubArchitecture-main/
├── publisher.js      # Publica mensagens em um canal Redis
├── subscriber.js     # Escuta mensagens de um canal Redis
├── queue.js          # Abstração opcional da fila/canal
├── package.json      # Dependências e scripts do projeto
├── .gitignore
```

### 🧪 Tecnologias Utilizadas

- **Node.js** (JavaScript runtime)
- **Redis** (armazenamento em memória com suporte nativo a Pub/Sub)
- Biblioteca **ioredis** ou **redis** do npm para comunicação com o Redis

### ▶️ Como Executar

1. **Certifique-se de ter o Redis instalado e em execução**
   - Localmente: `redis-server`
   - Ou via Docker:
     ```bash
     docker run --name redis -p 6379:6379 -d redis
     ```

2. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/PubSubArchitecture.git
   cd PubSubArchitecture
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o subscriber**
   ```bash
   node subscriber.js
   ```

5. **Execute o publisher (pode repetir para simular múltiplos envios)**
   ```bash
   node publisher.js
   ```

> As mensagens publicadas serão instantaneamente recebidas pelos subscribers conectados ao mesmo canal Redis.

### 💡 Funcionamento

- O `publisher.js` utiliza Redis para publicar mensagens em um canal nomeado.
- O `subscriber.js` escuta esse canal e reage sempre que uma nova mensagem é publicada.
- Redis gerencia a entrega das mensagens em tempo real, garantindo baixa latência.

