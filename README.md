# Url-Shortener-Api.


![GitHub repo size](https://img.shields.io/github/repo-size/jumaelmartins/Url-Shortener-Api?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jumaelmartins/Url-Shortener-Api?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/jumaelmartins/Url-Shortener-Api?style=for-the-badge)

API desenvolvida em node para encurtamento de links..

<!-- ##### Previa Desktop
![Screenshot Desktop](/public/desktop-preview.png) -->
<!-- ##### Previa Mobile
![Screenshot Mobile](./mobile-preview.png) -->


#### Principais funcionalidades

- [X] Encurtar URLs e Salvar no banco de dados;
- [X] Redirecionar para a url original.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `<node JS / gitbash / Insomnia ou Postman>`
* Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Instalando <Url-Shortener-Api>

Para instalar o <Url-Shortener-Api>, siga estas etapas:

Abra o terminal no diretorio que voce deseja instalar o app
```
<git clone https://github.com/jumaelmartins/Url-Shortener-Api.git>
```

## ☕ Usando <Url-Shortener-Api>

Para usar <Url-Shortener-Api>, siga estas etapas:

Com o terminal aberto na pasta raiz do projeto insira os comandos abaixo:
```
instalar dependencias
<npm i>
```

```
iniciar o servidor em ambiente de densevolvimento
<npm run dev>
```

Para encurtar uma URL abra o Insomnia ou Postman e faça conforme a imagen abaixo.

![Screenshot Desktop](/insomnia-test.png)

- 1 Selecione o Metodo Post
- 2 Passa a a url http://localhost:9000/shorten
- 3 No corpo da requisição envie um json com a chave "originUrl" e o valor será a urls que vc deseja encurtar: ex: {"originUrl": "https://www.youtube.com/"}
- 4 Clique no botão Send, para enviar a requisição:
- No canto direito do insomnia ira aparecer o resultado da requisição. se for sucesso, o status code 200 e receberar o json contendo:  originUrl, shortUrl, hash.

## 🚧 Ferramentas Utilizadas no desenvolvimentoo:

- TypeScript
- Node / Express
- Nodemon

## 💥O que aprendi ao desenvolver esse projeto:

- Iniciar um servidor Node utilizando o framework express;
- Criar rotas post e get no servidor node;
- Integrar a aplicação com um Banco de Dados NoSql o Mongo DB.

## 📫 Contribuindo para Url-Shortener-Api

Para contribuir com Url-Shortener-Api, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin Url-Shortener-Api / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

