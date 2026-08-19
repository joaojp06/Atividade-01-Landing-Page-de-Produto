👟 VANTA ONE
<p align="center"> <strong>Built for every move.</strong> </p> <p align="center"> Landing page de um tênis urbano desenvolvido para uma atividade acadêmica. </p>
👥 Integrantes
Davidson Ferreira
João Pedro

📦 Sobre o produto

O VANTA ONE é um projeto desenvolvido para uma atividade acadêmica. A ideia foi criar uma marca fictícia de tênis urbanos com uma proposta simples: desenvolver um modelo que pudesse ser usado em diferentes momentos do dia.

A partir disso, criamos a VANTA, uma marca voltada para um público jovem e urbano, principalmente universitários e jovens profissionais que possuem uma rotina bastante dinâmica.

O primeiro produto da marca é o VANTA ONE, um sneaker de visual minimalista, leve e versátil. O tênis possui amortecimento responsivo, cabedal respirável e solado pensado para o uso urbano.

👟 Características
	
Modelo	VANTA ONE
Peso	280g
Amortecimento	VANTA Foam
Cores	Black · Cloud · Volt
Preço	R$ 499,90
🧭 Jornada de construção
💡 Ideia inicial

O briefing da atividade já apresentava a ideia principal da marca: criar um tênis que pudesse acompanhar diferentes momentos do dia, sem a necessidade de trocar de calçado dependendo da ocasião.

A partir dessa proposta, começamos a pensar em como transformar a ideia em uma identidade visual e em uma página que transmitisse essa sensação de praticidade e versatilidade.

Uma das primeiras decisões foi trabalhar com uma estética mais minimalista. Optamos por utilizar principalmente preto, branco e tons de cinza, com o verde Volt (#D7FF3F) como cor de destaque.

Também decidimos não utilizar fotografias de tênis de marcas existentes. Em vez disso, criamos uma ilustração própria do VANTA ONE em SVG, mantendo um estilo mais simples e coerente com a identidade visual escolhida.

🔎 Pesquisa e referências

Durante o desenvolvimento, utilizamos como uma das referências a página da Taste Labs no Land-book, indicada no briefing da atividade.

A referência ajudou principalmente na definição da estética da página, especialmente na utilização de bastante espaço livre, textos grandes e uma quantidade reduzida de cores.

Também pesquisamos algumas referências relacionadas a campanhas de tênis e produtos esportivos para entender melhor como apresentar o produto e destacar suas características.

As referências serviram apenas como inspiração visual. O conteúdo, a identidade da VANTA e a organização da página foram desenvolvidos para este projeto.

🛠️ Ferramentas utilizadas
Ferramenta	Uso no projeto
⚛️ React 19	Desenvolvimento da aplicação
⚡ Vite	Configuração e execução
🎞️ Framer Motion	Animações e transições
🎨 CSS	Estilização da interface
🖼️ SVG	Ilustração do produto
🧪 Playwright	Testes durante o desenvolvimento
🔤 Google Fonts	Tipografia
💻 VS Code	Desenvolvimento

O projeto foi desenvolvido utilizando CSS sem um framework de componentes. As principais cores, fontes e medidas foram organizadas em variáveis para facilitar alterações durante o desenvolvimento.

As fontes utilizadas foram:

Archivo — títulos e elementos de destaque;
Inter — textos;
JetBrains Mono — informações menores e etiquetas.

Para as animações, utilizamos principalmente o Framer Motion nos efeitos de entrada dos elementos durante a rolagem da página.

Também utilizamos o Playwright durante o desenvolvimento para testar algumas interações e verificar o comportamento da página em diferentes tamanhos de tela.

🤖 Uso de IA

A inteligência artificial foi utilizada durante boa parte do desenvolvimento do projeto, principalmente como apoio na programação e na construção da interface.

Modelo utilizado

Claude — Anthropic

O Claude foi utilizado para auxiliar na criação dos componentes React, organização do código, desenvolvimento da identidade visual e implementação de algumas das interações da página.

A IA também ajudou na criação inicial da ilustração do tênis em SVG. Durante esse processo, foi necessário fazer algumas alterações até chegar a um desenho que representasse melhor o produto.

Onde a IA ajudou
🧩 Estruturação dos componentes da aplicação;
💻 Organização do código;
🎨 Desenvolvimento da interface;
✨ Implementação de animações;
🖱️ Criação das interações;
👟 Criação e ajustes da ilustração em SVG;
📱 Melhorias de responsividade;
🔧 Identificação de problemas durante o desenvolvimento.

Entre as funcionalidades desenvolvidas com esse auxílio estão:

troca de cores do tênis;
seleção de tamanho;
FAQ expansível;
modal de compra;
menu para dispositivos móveis;
navegação entre as seções;
animações durante o scroll;
interação com as camadas do tênis na seção de tecnologia.
O que precisou ser alterado

Nem todas as primeiras sugestões ou resultados foram utilizados diretamente.

A ilustração do tênis foi um dos principais exemplos. A primeira versão não apresentava muito bem o formato de um sneaker e acabou ficando com proporções pouco realistas. Por isso, fizemos alterações no desenho, principalmente no formato do calcanhar, cadarços, proporções e alguns detalhes do produto.

Também foram feitos ajustes na organização de algumas seções e nas interações da página para que o resultado final ficasse mais próximo da ideia que tínhamos para o projeto.

Apesar do auxílio da IA, algumas decisões foram tomadas e ajustadas pela dupla, principalmente em relação às cores, organização das seções, aparência do tênis e funcionamento das interações.

🔄 Evolução da solução

Durante o desenvolvimento, algumas partes do projeto foram modificadas até chegarmos à versão final.

👟 Ilustração do produto

A ilustração foi uma das principais partes que precisaram de ajustes. A primeira versão não apresentava muito bem o formato de um sneaker, então fizemos alterações nas proporções, no calcanhar, nos cadarços e em alguns detalhes do desenho.

A versão final manteve o estilo de ilustração em SVG, mas passou a representar melhor o produto e ficou mais alinhada com a identidade visual da VANTA.

🧪 Seção de tecnologia

A seção de tecnologia também passou por algumas mudanças.

A ideia inicial era apresentar as diferentes camadas do tênis de uma forma mais visual. Para evitar a criação de várias imagens diferentes, optamos por utilizar a própria ilustração do produto e destacar cada camada conforme o usuário interage com ela.

Dessa forma, conseguimos criar uma interação sem precisar duplicar os elementos visuais do produto.

📂 Organização do conteúdo

Durante o desenvolvimento, também tivemos a preocupação de manter as informações do produto organizadas.

Dados como preço, cores, tamanhos e características foram concentrados no arquivo:

src/data/product.js


Isso facilita alterações futuras sem precisar modificar o conteúdo diretamente em vários componentes.

Também foram criados componentes reutilizáveis para elementos como:

Button
Modal
FAQItem
ColorSwitcher
SizeSelector

A ilustração do tênis também foi criada como um componente separado, permitindo alterar sua cor de acordo com a opção escolhida pelo usuário.

📱 Responsividade

Foram realizados testes em diferentes tamanhos de tela para ajustar a versão mobile e garantir que os principais elementos continuassem funcionando corretamente.

Alguns elementos precisaram ser reorganizados para telas menores, principalmente o menu, textos e apresentação do produto.

🏁 Resultado final

O resultado final é uma landing page responsiva para a marca VANTA, desenvolvida em React.

A página apresenta o produto, suas características, opções de cores e tamanhos, além de algumas interações para tornar a navegação mais dinâmica.

✨ Principais funcionalidades
🎨 Troca de cor do produto;
📏 Seleção de tamanho;
❓ FAQ interativo;
🛒 Modal de compra;
📱 Menu mobile;
✨ Animações durante a navegação;
🔍 Interação com as camadas do produto;
🔗 Navegação suave entre as seções;
📐 Layout responsivo;
🛍️ CTAs para compra.

O projeto foi testado em versões desktop e mobile para verificar a responsividade e o funcionamento das principais interações.

📌 Avaliação

O desenvolvimento do VANTA ONE permitiu trabalhar tanto a parte visual de uma página de produto quanto a implementação de uma aplicação utilizando React.

Um dos principais desafios foi criar uma apresentação de produto interessante sem utilizar fotografias de tênis de marcas existentes. A criação da ilustração em SVG foi uma alternativa que acabou se encaixando bem na identidade escolhida.

Se tivéssemos mais tempo, algumas partes poderiam ser aprimoradas, principalmente os detalhes da ilustração, as animações da página e a criação de outras visualizações do tênis.

De forma geral, o projeto conseguiu transformar a ideia inicial do briefing em uma página funcional, responsiva e com uma identidade visual própria.
