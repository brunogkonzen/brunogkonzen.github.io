---
version: alpha
name: Bruno Konzen
description: Site pessoal de Bruno Konzen (brunogkonzen.github.io). Página branca com um quadro de distribuição azul de disjuntores interativos; uma fonte só, Archivo, usando a largura como expressão.
colors:
  primary: "#1F5BD6" # o mesmo valor de azul; nome que as ferramentas procuram
  azul: "#1F5BD6"
  azul-escuro: "#1749B3"
  azul-claro: "#8DB3FF"
  plaqueta: "#0B2A6F"
  texto: "#22314F"
  apoio: "#5B6782"
  linha: "#DCE3EF"
  borda: "#C9D3E6"
  fundo: "#FFFFFF"
  nevoa: "#F3F7FE"
  energia: "#22A55A"
  espera: "#E3A008"
  sem-energia: "#A7B2C6"
typography:
  display:
    fontFamily: Archivo
    fontSize: 7.25rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.01em
    fontVariation: '"wdth" 68'
  headline:
    fontFamily: Archivo
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: '"wdth" 70'
  title-circuito:
    fontFamily: Archivo
    fontSize: 1.625rem
    fontWeight: 750
    lineHeight: 1.05
    fontVariation: '"wdth" 78'
  title:
    fontFamily: Archivo
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: '"wdth" 85'
  valor:
    fontFamily: Archivo
    fontSize: 1.625rem
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: '"wdth" 80'
  chamada:
    fontFamily: Archivo
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: Archivo
    fontSize: 1.1875rem
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Archivo
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: Archivo
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
  nota:
    fontFamily: Archivo
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
  plaqueta:
    fontFamily: Archivo
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.01em
    fontVariation: '"wdth" 85'
  credito:
    fontFamily: Archivo
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  fio: 3px
  controle: 8px
  cartao: 10px
  quadro: 14px
spacing:
  base: 4px
  caixa: 1120px
  margem: 20px
  texto: 34rem
  secao: 72px
  secao-lg: 96px
  toque: 44px
components:
  botao-cheio:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.fundo}"
    typography: "{typography.body}"
    rounded: "{rounded.controle}"
    padding: 12px 22px
    height: 48px
  botao-cheio-hover:
    backgroundColor: "{colors.azul-escuro}"
    textColor: "{colors.fundo}"
  botao-linha:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.plaqueta}"
    typography: "{typography.body}"
    rounded: "{rounded.controle}"
    padding: 12px 22px
    height: 48px
  botao-linha-hover:
    backgroundColor: "{colors.nevoa}"
    textColor: "{colors.plaqueta}"
  link:
    textColor: "{colors.azul}"
    typography: "{typography.body}"
  quadro:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.quadro}"
    padding: 24px
  trilho:
    backgroundColor: "{colors.azul-escuro}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.controle}"
  plaqueta:
    backgroundColor: "{colors.plaqueta}"
    textColor: "{colors.fundo}"
    typography: "{typography.plaqueta}"
    rounded: "{rounded.fio}"
    padding: 3px 9px
  led-energia:
    backgroundColor: "{colors.energia}"
    size: 10px
  led-espera:
    backgroundColor: "{colors.espera}"
    size: 10px
  led-apagado:
    backgroundColor: "{colors.sem-energia}"
    size: 10px
  canal-contato:
    backgroundColor: "{colors.nevoa}"
    textColor: "{colors.plaqueta}"
    typography: "{typography.valor}"
    rounded: "{rounded.cartao}"
    padding: 18px 20px
  texto-apoio:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.apoio}"
    typography: "{typography.body}"
  texto-corrido:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.texto}"
    typography: "{typography.body}"
  divisoria:
    backgroundColor: "{colors.linha}"
    height: 1px
  cabo-circuito:
    backgroundColor: "{colors.azul-claro}"
    width: 5px
    rounded: "{rounded.fio}"
---

# Design System: Bruno Konzen

Este arquivo descreve o visual do site pessoal (brunogkonzen.github.io). Os valores do bloco YAML do topo são a regra; o texto explica onde e por que usar cada um. As mesmas cores estão como variáveis no `:root` do `style.css`: os valores ficam nas variáveis base, e as de papel (`--painel`, `--cabo-dados` e outras) apontam para elas. Se mudar uma cor, mude a variável base e este arquivo.

## Overview

**Ideia central: "O quadro de distribuição"**

Bruno começou como técnico em eletromecânica e hoje trabalha com TI, dados e automação. O site junta as duas coisas: a peça principal é um quadro elétrico azul com disjuntores de verdade, que ligam e desligam. O disjuntor geral alimenta tudo, o de infraestrutura alimenta dados e automação, e as luzes mostram o que está com energia. Cada área de trabalho é um "circuito", com o seu cabo colorido.

O resto da página é calmo de propósito: fundo branco, texto azul-marinho, muito espaço e uma fonte só. A ousadia fica no quadro e nos títulos condensados; o resto fica quieto.

**Características principais:**
- Azul e branco como base, a pedido do Bruno.
- Archivo, fonte variável, condensada nos títulos e normal no texto.
- Uma peça interativa só (o quadro), com uma animação de abertura.
- Plaquetas azul-marinho, como as etiquetas de um quadro real, para nomes e rótulos.

## Colors

Azul de chapa de quadro, azul-marinho de plaqueta e branco. Verde e amarelo existem só nas luzes.

### Primary
- **Azul do quadro** (`azul`, também declarado como `primary`): chapa do quadro, botão cheio, links, foco do teclado e o cabo do circuito de dados.
- **Azul fundo de trilho** (`azul-escuro`): trilho dos disjuntores, borda do quadro, hover do botão cheio.
- **Azul de detalhe** (`azul-claro`): detalhes sobre o azul e o cabo do circuito de automação. Nunca como cor de texto: no azul do quadro ele não tem contraste para leitura.

### Neutral
- **Azul-marinho de plaqueta** (`plaqueta`): títulos, plaquetas, texto do botão de linha, cabo do circuito de infraestrutura.
- **Texto** (`texto`): parágrafos.
- **Apoio** (`apoio`): textos secundários, estados, legendas. Passa AA no branco e na névoa.
- **Linha** (`linha`): divisões entre seções e itens.
- **Borda** (`borda`): contorno de botões de linha e dos cartões de contato.
- **Fundo** (`fundo`): a página, branca.
- **Névoa** (`nevoa`): branco azulado dos cartões de contato, do hover do botão de linha e do fundo das fotos.

### Luzes
- **Energia** (`energia`): LED verde, circuito com energia.
- **Espera** (`espera`): LED amarelo, disjuntor ligado mas sem energia chegando.
- **Apagado** (`sem-energia`): LED desligado.

### Regras
**A regra do azul e branco.** O site é azul e branco. Uma cor nova só entra se for luz do quadro.

**A regra das luzes.** Verde e amarelo só existem nos LEDs. Não usar em botões, textos ou destaques.

**A regra dos três cabos.** Os circuitos usam três tons do mesmo azul: infraestrutura em azul-marinho (`plaqueta`), dados em `azul`, automação em `azul-claro`. Um circuito novo usa um desses três.

## Typography

**Fonte:** Archivo, variável, servida pelo próprio site (`fonts/archivo-wdth.woff2`, licença OFL), com eixo de largura de 62% a 125% e pesos de 100 a 900.

**Caráter:** grotesca de ar técnico, como letra de painel e de etiqueta. A largura é a expressão: títulos condensados (68% a 85%), texto na largura normal.

### Hierarquia
- **Display** (`display`): só o nome "Bruno Konzen" na abertura. Tamanho fluido entre 3,5rem e 7,25rem (`clamp(3.5rem, 11vw, 7.25rem)`), largura 68%.
- **Título de seção** (`headline`): "Perfil", "O que eu faço", "Formação", "Vamos conversar". Fluido entre 2,25rem e 3,5rem, largura 70%.
- **Título de circuito** (`title-circuito`): o nome de cada área em "O que eu faço".
- **Título** (`title`): itens da linha do tempo, ano ("quando") e marca do topo (1,125rem).
- **Valor** (`valor`): o contato em si (número, e-mail, perfil), fluido entre 1,25rem e 1,625rem.
- **Chamada** (`chamada`): a frase abaixo do nome, fluida entre 1,25rem e 1,5rem, em azul-marinho.
- **Abertura** (`lead`): a introdução de cada seção e o primeiro parágrafo do perfil.
- **Texto** (`body`): parágrafos e botões.
- **Pequeno** (`small`): menu, listas de itens, rodapé.
- **Nota** (`nota`): estado do circuito, leitura do quadro, nome do canal de contato.
- **Plaqueta** (`plaqueta`): etiquetas azul-marinho. Nos disjuntores, 0,75rem.
- **Crédito** (`credito`): crédito de foto.

### Regras
**A regra da largura.** Quanto maior o título, mais condensado. Texto corrido nunca é condensado.

**A regra dos números alinhados.** Anos, contagem de circuitos e leituras do quadro usam `tabular-nums`.

## Layout

- **Caixa:** largura máxima de 1120px, com 20px de margem de cada lado no celular (`.caixa`).
- **Texto:** frases de abertura com até 34rem; introduções com até 40rem.
- **Abertura:** uma coluna no celular (nome, depois o quadro); a partir de 960px, duas colunas (nome à esquerda, quadro à direita).
- **Seções:** 72px de espaço vertical, 96px a partir de 960px, separadas por uma linha fina no topo.
- **"O que eu faço":** os três circuitos empilhados no celular, três colunas a partir de 960px.
- **Formação:** linha do tempo, uma coluna no celular; ano, texto e foto lado a lado em telas largas.
- **Contato:** cartões de canal em uma coluna no celular, duas a partir de 760px.
- **Alinhamento:** tudo à esquerda.
- **Toque:** botões com 48px de altura e alvos com pelo menos 44px.
- **Âncoras:** cabeçalho fixo de 64px; `scroll-padding-top` de 5rem.

## Elevation & Depth

A página é plana: profundidade por cor e linhas finas. A exceção é o quadro, que é um objeto físico. Ele tem um brilho interno no topo e uma sombra azul longa embaixo (`0 24px 50px -28px rgba(11,42,111,.6)`), e os disjuntores têm relevo de plástico (base de 2px e uma sombra curta). Nenhum outro elemento ganha sombra.

**A regra do único objeto.** Só o quadro e o que está dentro dele têm volume. Cartões, fotos e botões ficam planos.

## Shapes

- **Fio** (3px): plaquetas, cabos dos circuitos, alavanca do disjuntor.
- **Controle** (8px): botões, botão do menu, trilho dos disjuntores.
- **Cartão** (10px): cartões de contato, retrato e fotos de formatura.
- **Quadro** (14px): o quadro de distribuição.
- **Círculo:** só os LEDs.

O canto cresce com o tamanho da peça. O corpo do disjuntor (6px) é material do quadro e não serve de modelo para outros elementos.

## Components

### Botões
- **Cheio:** fundo azul, texto branco, 48px de altura, 8px de canto. Hover em azul-escuro; ao pressionar, encolhe um pouco.
- **De linha:** fundo branco, borda `borda`, texto azul-marinho; hover em névoa.
- Texto com verbo e destino claros: "Falar no WhatsApp", "Ver o que eu faço".

### Links
Azul, sublinhado fino que engrossa no hover. No menu, o hover é um sublinhado azul de 3px.

### Quadro de distribuição (assinatura)
Chapa azul com borda azul-escuro, 14px de canto. No topo, a plaqueta "Quadro de serviços" e a leitura "n de 3 circuitos com energia" com um LED. Embaixo, o trilho azul-escuro com quatro disjuntores brancos: o geral, mais largo, e infraestrutura, dados e automação. Cada disjuntor é um interruptor de verdade (`role="switch"`, `aria-checked`), com plaqueta e janela de estado que fica verde com energia, amarela em espera e cinza desligada. A alavanca anda com uma mola curta (200ms). Na abertura, os disjuntores ligam um a um; com movimento reduzido, o quadro já aparece ligado. O foco dentro do quadro é branco.

### Plaqueta
Etiqueta azul-marinho com texto branco, 3px de canto, levemente condensada. Usada para nomes no quadro e na legenda do retrato.

### Circuitos ("O que eu faço")
Cada área tem um cabo vertical de 5px à esquerda, na cor do seu circuito, um título condensado, uma linha de estado com LED (ligada ao quadro) e uma lista curta do que é feito.

### Linha do tempo (Formação)
Ano em destaque condensado, título do curso, instituição e período, e a foto de formatura com 10px de canto e crédito do fotógrafo quando houver.

### Cartões de contato
Fundo névoa, borda `borda`, 10px de canto. Nome do canal pequeno em cor de apoio, valor grande em azul-marinho. Hover deixa o fundo branco.

### Cabeçalho
Branco translúcido com desfoque, fixo, linha fina embaixo. À esquerda, o ícone BK (plaqueta azul com LED verde) e o nome "Bruno Konzen"; menu à direita, que no celular vira um botão "Menu" com lista.

## Do's and Don'ts

### Faça
- **Faça** do quadro a única peça interativa e ousada da página.
- **Faça** todo texto com contraste AA (4,5:1). Branco no azul do quadro tem 6,0:1; azul-claro não é para texto.
- **Faça** foco visível: contorno azul de 3px, afastado 3px, e branco dentro do quadro.
- **Faça** a animação de abertura respeitar o movimento reduzido e poder ser interrompida.
- **Faça** as atualizações de CSS e JS com `?v=N` novo no `index.html`, para o GitHub Pages não servir a versão antiga do cache.
- **Faça** os textos em português com acentos, em primeira pessoa, dizendo o que o Bruno faz.

### Não faça
- **Não coloque** "Projetos" de volta: o site diz o que o Bruno faz, não lista trabalhos.
- **Não cite** o empregador atual nem projetos internos de empresas.
- **Não publique** dados pessoais além do contato profissional (nada de data de nascimento, documentos ou CNH).
- **Não use** uma segunda fonte, cor nova fora do azul e branco, gradiente decorativo ou sombra em cartões.
- **Não use** MAIÚSCULAS em rótulos nem seta "→" no fim de botões.
- **Não mude** o título da aba: é só "Bruno Konzen".

## Como pedir mudanças

Ao pedir uma alteração para uma IA, cole este arquivo junto e descreva em termos dele, por exemplo:
- "Novo circuito em 'O que eu faço' com cabo azul-claro, título de circuito e três itens."
- "Novo item na linha do tempo com ano, título e foto com canto de cartão."
- "Novo cartão de contato em névoa com nome do canal e valor."

Depois, confira com `npx @google/design.md lint DESIGN.md` se o arquivo continua válido.
