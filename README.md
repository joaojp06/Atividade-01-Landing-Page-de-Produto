# VANTA ONE

Built for every move.

## Integrantes

- [Seu nome aqui]
- [Nome da dupla aqui]

## Sobre o produto

**VANTA** é uma marca fictícia de tênis urbanos premium, criada para esta atividade acadêmica.
A proposta é simples: **um único tênis que acompanha o dia inteiro** — da faculdade ao trabalho,
da academia ao rolê à noite — em vez de uma pessoa precisar trocar de calçado para cada
compromisso.

O produto de lançamento é o **VANTA ONE**: um sneaker minimalista, leve (280g), com
amortecimento responsivo (VANTA Foam), cabedal respirável e solado urbano durável, vendido em
três variações de cor (Black, Cloud e Volt) por R$ 499,90.

O público-alvo é o mesmo perfil da geração universitária/jovem profissional urbano: pessoas que
vivem em movimento e querem um único produto versátil, em vez de um guarda-roupa de tênis para
cada ocasião.

## Jornada de construção

### Ideia inicial

O ponto de partida do briefing já veio bastante definido: uma marca de tênis chamada VANTA, com
o conceito central "um tênis para todos os momentos do dia" e uma referência visual explícita
(Taste Labs, via Land-book). A partir daí, o papel da IA foi transformar esse conceito em um
sistema de design completo — paleta, tipografia, composição de seções — e depois em código React
funcional.

Duas decisões de enquadramento foram tomadas logo no início:

1. **Não usar fotografia real de tênis.** Como o briefing pedia "protagonismo do produto" mas ao
   mesmo tempo proibia usar imagens de marcas existentes (Nike, Adidas etc.) e não copiar
   estruturas de outros sites, optamos por criar uma **ilustração vetorial autoral** do VANTA ONE
   (SVG desenhado à mão, em estilo line-art) em vez de tentar usar fotos de banco de imagens —
   que quase sempre trazem logos ou acabam parecendo genéricas.
2. **Cor de destaque = "Volt".** Como o próprio produto já tem uma variante chamada "VANTA VOLT",
   fazia sentido que a cor de destaque de toda a marca fosse um verde-limão elétrico (`#D7FF3F`)
   — em vez de escolher uma cor à parte, a paleta nasceu do próprio nome do produto.

### Pesquisa e referências

A referência oficial indicada no briefing foi a página da **Taste Labs no Land-book**
(land-book.com/websites/98186) e o site institucional da Taste Labs. Usamos essas referências
apenas para estudar:

- como grandes blocos de tipografia + espaço negativo criam hierarquia sem precisar de muita cor;
- como uma página consegue parecer "premium" com poucos elementos, bem executados;
- a lógica de seções alternando texto denso e blocos quase vazios.

Não foi copiado nenhum texto, estrutura de seção 1-para-1, nem elementos de marca da Taste Labs.
A transposição foi conceitual: pegamos a "sensação" (tipografia forte, muito respiro, poucas
cores) e aplicamos a um contexto completamente diferente — sneakers e lifestyle urbano — usando
layout, copy e paleta próprios da VANTA.

Complementarmente, pesquisamos referências de campanhas de sneakers premium (estúdio escuro, luz
dramática, tênis como "herói" da composição) para guiar a ilustração do produto e a estrutura da
seção "Tecnologia" (camadas exploded-view), que é o elemento de assinatura visual deste projeto.

### Ferramentas utilizadas

- **React 19 + Vite** — base do projeto (`npm create vite@latest -- --template react`).
- **Framer Motion** — animações de entrada (`whileInView`), respeitando `prefers-reduced-motion`.
- **CSS puro** (variáveis/tokens em `styles/tokens.css`) — sem framework de UI, para manter
  controle total do sistema tipográfico e da paleta.
- **Google Fonts** — Archivo (display), Inter (corpo), JetBrains Mono (dados/labels).
- **Claude (Anthropic)** — pair-programming completo: definição do sistema de design,
  implementação de todos os componentes/seções, criação da ilustração SVG do tênis, testes
  visuais automatizados e revisão de responsividade.
- **Playwright + cairosvg** — usados durante o desenvolvimento (não fazem parte do produto
  final) para gerar screenshots automáticos do protótipo em desktop e mobile e validar
  visualmente cada seção antes de fechar o layout.
- **VS Code / terminal** — edição e execução do projeto.

### Uso de IA

O desenvolvimento foi feito majoritariamente em conjunto com **Claude**, usado como par de
desenvolvimento (pair programmer) e diretor de arte, não apenas como gerador de trechos de
código isolados. Como o briefing já vinha extremamente detalhado (cores, copy, estrutura de
seções, comportamento de cada interação), a IA seguiu o brief quase à risca, mas precisou tomar
decisões autorais nos pontos que o briefing deixou em aberto — principalmente estilo tipográfico
exato, composição da Hero e desenho da ilustração do produto.

**Onde a IA ajudou bem:**

- Estruturação do projeto em componentes reutilizáveis (`Button`, `Modal`, `FAQItem`,
  `ColorSwitcher`, `SizeSelector`) que são usados em várias seções sem duplicação de código.
- Criação de um design system consistente (tokens de cor/tipografia/espaçamento em CSS) antes de
  escrever qualquer seção — isso evitou inconsistências visuais entre seções.
- Implementação de interações que exigiam estado (troca de cor do tênis, seleção de tamanho,
  FAQ expansível, modal de checkout) — tudo com React puro (`useState`), sem bibliotecas extras.

**Onde o resultado não foi satisfatório de primeira e precisou de iteração:**

- A primeira versão da ilustração SVG do tênis (gerada manualmente, sem visualizar antes) ficou
  parecendo "um pão de forma" em vez de um tênis — as proporções entre bico, gáspea e calcanhar
  estavam erradas. Isso só foi percebido porque a IA renderizou o SVG para PNG (via `cairosvg`)
  e revisou a imagem antes de integrar ao React. A partir dessa checagem visual, o desenho foi
  refeito com um contraforte de calcanhar separado, cadarços e ilhoses mais definidos e uma
  faixa de destaque na cor volt — chegando a um resultado que lê claramente como sneaker em
  estilo line-art minimalista.
- O servidor de preview (`vite preview`) caía entre chamadas de terminal porque cada execução de
  comando roda em uma sessão nova — isso exigiu ajustar o fluxo de testes para sempre subir o
  servidor e rodar o Playwright dentro do mesmo comando.

**Decisões da IA que foram mantidas:** paleta preto/grafite/branco + volt; tipografia Archivo +
Inter + JetBrains Mono; ilustração vetorial autoral em vez de fotografia; camadas interativas na
seção de Tecnologia como elemento de assinatura.

**Decisões que ficam abertas para a dupla personalizar:** nomes dos integrantes neste README,
eventuais ajustes finos de copy, e qualquer preferência estética adicional (ex.: trocar a cor de
destaque, ajustar o desenho do tênis) — o código foi estruturado (tokens centralizados,
`ShoeIllustration` como componente único parametrizado por cor) exatamente para que esse tipo de
ajuste seja rápido de fazer depois.

### Evolução da solução

- **Ilustração do produto:** v1 (proporções erradas, lida como blob) → v2 (contraforte,
  cadarços, faixa volt — versão usada no projeto final).
- **Estrutura de dados:** todo o conteúdo textual/numérico (specs, camadas, cores, tamanhos,
  reviews, FAQ) foi centralizado em `src/data/product.js` desde o início, em vez de ficar
  espalhado pelos componentes — isso facilita trocar preço, textos ou adicionar uma cor nova sem
  mexer em JSX.
- **Seção de Tecnologia:** o briefing pedia apenas "usuário passa o mouse ou clica" — optamos por
  reaproveitar a mesma ilustração do tênis (em vez de criar uma imagem "explodida" separada) e
  simplesmente destacar/apagar a opacidade da camada correspondente ao passar o mouse. Isso
  evitou duplicar assets e manteve a identidade visual consistente entre seções.
- **CTA da Navbar vs. CTA da Oferta:** durante os testes automatizados de interação, o botão
  "Comprar agora" da navbar (que só rola a página) foi confundido com o da seção de oferta (que
  abre o modal) — o comportamento estava correto, mas evidenciou a importância de seletores
  específicos para cada botão ao testar, o que já estava implementado, só precisou de testes mais
  cuidadosos.

### Resultado final

O resultado é uma landing page de página única, 100% client-side, com interações reais (troca de
cor, seleção de tamanho, FAQ expansível, modal de checkout simulado, camadas de tecnologia em
hover/clique, navegação suave, menu mobile, scroll reveals e os dois CTAs da Hero), responsiva de
mobile a desktop, testada visualmente em ambas as resoluções antes da entrega.

**O que funcionou bem:** o sistema de design centralizado em tokens tornou fácil manter
consistência visual em doze seções diferentes; a ilustração vetorial resolveu o problema de não
ter fotos de produto sem comprometer a sensação "premium" pedida no briefing.

**Maior desafio:** desenhar uma ilustração de tênis reconhecível usando apenas paths SVG
manuais, sem uma ferramenta de geração de imagem — exigiu iteração e checagem visual constante.

**O que seria melhorado com mais tempo:** refinar ainda mais os detalhes da ilustração (textura
do solado, sombra mais realista), adicionar um efeito de parallax mais elaborado na Hero, e
eventualmente oferecer uma segunda pose/ângulo do tênis para a seção de cores.
