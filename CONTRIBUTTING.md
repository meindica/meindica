# Guia de contribuição
Oi, antes de tudo gostaríamos de agradecer pelo seu interesse em contribuir para o MeIndica!,
ficamos bem felizes com você aqui.

Também é importante ressaltar que você não precisa dominar o React para contribuir, nós
estamos aqui para ajudar e aprender juntos, então se você quer contribuir seja com documentação,
ideias, sugestões ou reportar algum bug, sinta-se bem vindo.

## Conteúdo

- Stack.
- Como iniciar o projeto.
- Abrindo um pull request.

### Stack
A stack desse projeto é toda construída com o ecossistema do React, como framework estamos
usando o [Gatsby](https://gatsbyjs.com) e para os componentes e estilos básicos estamos
usando o [Chakra-ui](https://chakra-ui.com) e é basicamente isso.

Nossa base de dados é construída através de uma planilha do [Google Sheets](https://www.google.com/sheets/about/).

Nossa hospedagem fica no [Netlify](https://www.netlify.com/) e automaticamente _deployada_
através de uma integração com o [Github](https://github.com).

### Como iniciar o projeto
Bem tendo conhecimento da nossa stack vamos ao passo a passo de como iniciar o projeto em si,
o primeiro passo é você realizar um fork deste repositório, feito isso você pode clonar ser 
fork no seu computador e a partir branch `main` criar uma nova branch:

```bash
git clone git@github.com:<seu usuário>/meindica.git # aqui estamos assumindo que você já configurou o ssh para acessar o github.
cd meindica
git checkout -b add-sua-funcionalidade
```

A partir daqui você vai iniciar a configuração pra conseguir consumir os dados de uma planilha,
então o primeiro passo é criar uma planilha no [google spreadsheets](https://www.google.com/sheets/about/)
o formato dessa planilha precisa ser **exatamente igual** ao que usamos no MeIndica!
incluindo o nome da aba, pra facilitar você pode [baixar este mock](docs/mock.xlsx).

**verifica se o nome da aba na tabela deve estar como: Respostas ao formulário 1**

Agora vamos a parte de configurar as chaves de API do Google.

1. Vá até o [console do Google Apis](https://console.developers.google.com/) e clique em `Criar Projeto`.
2. Informe o nome do projeto e crie.
3. Com o projeto selecionado vá até credenciais e clique em `Criar credenciais` e selecione `Conta de serviço`.
4. Clique em `adicionar chave` selecione json e baixe o arquivo.
5. Na sua planilhe vá em `compartilhar` e adicione o `client_email` informado no arquivo json que você baixou.
6. Agora no projeto, copie o .env.example para um arquivo .env você pode usar `cp .env.example .env`
7. Adicione as configurações: `private_key`, `client_email` neste arquivo.
8. O valor de `SPREADSHEET_ID` pode ser encontrado na url da sua planilha. Exemplo: `https://docs.google.com/spreadsheets/d/<id-da-sua-planilha>/edit#gid=0`
9. O valor de WORKSHEET você deve colocar o nome que está como titulo da aba da sua tabela.

Após feito isso você pode iniciar o projeto com: `yarn develop` se tudo correr como esperado você poderá acessar a aplicação em [http://localhost:8000](http://localhost:8000)

### Abrindo um pull-request

Ao abrir o pull-request informe o que está sendo feito e se possível faça uma referência para a issue.

Teremos o prazer de ler o seu código e agradecemos pela sua contribuição! :)
