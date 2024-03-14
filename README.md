# Aplicação

Consiste em uma extensão na qual, estando logado, o usuário pode adicionar e visualizar itens.  
## Tecnologias empregadas

- Vite: O front end foi desenvolvido em vite devido a maior velocidade de em compilação de código, e maior praticidade para usar variáveis de ambiente.

- Styled component: foi empregado permite maior precisão na estilização, sem a necessidade de ficar atribuindo nomes de classes para cada elemento.

- Axios: foi escolhido para reaizar as requisições por sua simplicidade de uso.

- Bcrypt: foi utilizado para criptografia de senhas, por ser seguro e praticado de ser usado.

- Jwt: foi utilizado para geração de tokens de autenticação, possui vantagens pois os tokens são gerados através, também de dados específicos (como o id de um usuário). E após a autenticação ocorrer na api esses dados podem ser aproveitados para implementar alguma lógica e/ou regra de negócio.

- As demais tecnologias (React.js, Typescript) eram requisitos mandatórios.

## Rodando a aplicação

1. será necessário rodar a API deste projeto em sua máquina e/ou ter acesso há um servidor no qual ele esteja no ar. Você pode conseguir baixar o repositório deste projeto em: https://github.com/JorgeMalaquias/itens-extension-back. Neste link você encontrará instruções de como rodar a API.
2. baixe este repositório;
3. uma vez que a API estiver no ar, crie no diretório raiz deste projeto em sua máquina, um arquivo .env com a seguinte variável: VITE_BASE_URL. O valor desta variável deve ser o endereço onde a API está sendo executada (ex: http://localhost:5000).
4. execute na raíz do projeto o comando "npm run build". Ele irá gerar o bundle da aplicação que será usado para criar a extensão.
5. no Google Chrome acesse "chrome://extensions/", clique na opção "carregar sem compactação / load unpacked", e selecione a pasta dist que está dentro da pasta raíz da aplicação na sua máquina.
6. Pronto, agora a aplicação pode ser usada como extensão do Google Chrome. Para usar, basta clicar no ícone de extensões (peça de quebra-cabeça) e selecionar a Items Extension.
