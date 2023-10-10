# RocketSeat - Discover
Projeto e desafios do programa Discover da RocketSeat.


## Atividades
- Projeto DevLinks


## Anotações
- Não precisa sempre definir a altura, às vezes basta definir a largura.
- O `display: block` dá toda a largura de tela disponível para o elemento.
- Em elementos inline como img não se pode aplicar `margin: auto` sem usar `display: inline-block` ou `display: block`. 
Pode-se aplicar `text-align: center` no elemento pai.
- Coloque o reset de css ` * {margin: 0; padding: 0; box-sizing: border-box;}` no inicio do arquivo.
- Para usar `justify-content: center;` deve-se ter `display: flex;`.
- Para `margin` (ou `padding`):
  * se definir quatro valores, a ordem equivale a (`left`), (`right`), (`top`), (`bottom`).
  * se definir dois valores, a ordem equivale a (`top` e `bottom`); e  (`left` e `right`).
  * se definir três valores, a ordem equivale a (`top`), (`left` e `right`), (`bottom`).
- Use `box-sizing: border-box;` para manter o tamanho informado e depois tentar os preenchimentos.
- Em um link na tag <a> usar `target="_blank"` para abre o link em outra aba.
- Para adicionar ícones de mídias sociais: use https://ionic.io/ionicons, adicione 2 imports de js antes de fechar o body, e adicione cada link.
- Para fazer o light mode: aplicar um classe "light" ao html ou ao body, definir variáveis no css para as cores .
- Para usar variáveis no CSS, declare-as em `:root{}` com prefixo `--` e depois chamá-las com `var()`;
- Para criar botão de switch: criar div > buttom | colocar uma imagem na classe light e outra imagem em outra classe ou no root.
- Quando usar `backdrop-filter` deve-se colocar também o `-webkit-backdrop-filter`.
- A tag `<span></span>` tem display inline como padrão.
- Posicionamento: `display: block` para um elemento abaixo do outro, se for `display: inline` para um do lado do outro. 
- Para sobrepor elementos,utilizar `position: absolute;` e `z-index: 1;`, e pode usar `left, right, bottom, up`.
- Para verificar a área ocupada por um elemento, adicione uma borda vermelha. 
- Em Javascript, use `const body = document.body` para selecionar o body e `const html = document.documentElement` para o html.
- Em Javascript, a função toggle() de classList adiciona ma classe caso ela não esteja na lista, e remove caso ela já estivesse.
- O `@media` no CSS só funciona se no html tiver `<meta name="viewport" content="width=device-width, initial-scale=1"/>`.
- Para animações, no arquivo CSS use `@keyframes <nome>{}`  e defina o comportamento `from{} to{}`, e coloque `animation: <nome> <tempo>;` no bloco desejado.
- Para fazer Deploy pelo Github, vá em https://github.com/<nome_usuario>/<nome_projeto> > Settings > Pages e a selecione o branch mas e outras opções e coloque "Save".
Após uns 5 minutos, o endereço da página será https://<nome_usuario>.github.io/<nome_projeto>.


## Links úteis
- https://www.fronteditor.dev/
- https://css-tricks.com/
- https://fonts.google.com/
- https://caniuse.com/
- https://ionic.io/ionicons
- https://codepen.io/
- https://unsplash.com/pt-br
- https://www.pexels.com/pt-br/
- https://pixabay.com/pt/

## Referências
RocketSeat - Discover: https://www.rocketseat.com.br/discover , acessado em 15/09/2023.