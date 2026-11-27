# Ajuste do espacamento inicial do Hero

**Estado:** implementado  
**Modo:** execucao

## Descoberta atual

- O cabecalho e fixo e possui um container de 80 px em `src/components/layout/Navbar.tsx`.
- O `main` reserva 80 px no topo em `src/app/layout.tsx`.
- O Hero aplica `-mt-20` em `src/components/home/HeroSection.tsx`, compensando essa reserva.
- A secao do Hero tinha `pt-[74px]` e `sm:pt-[78px]` antes do globo. Esse padding nao era o vazio principal.
- O componente `HeroGlobe` nao adiciona margem ou padding superior ao seu elemento raiz.
- A causa principal do vazio era o `TechCircuit`: o componente forçava `relative`, que vencia o `absolute` passado pelo Hero. O SVG permanecia no fluxo e ocupava cerca de 570 px antes do globo, empurrando o Hero e o restante da pagina inicial para baixo.

## Mudanca solicitada

Reduzir o espaco vertical entre o menu fixo e o globo na pagina inicial, mantendo um respiro visual de **24 px** abaixo do menu. O globo e o restante do conteudo do Hero devem subir juntos.

## Implementacao

- `TechCircuit` deixou de forcar `position: relative`, permitindo que o fundo fique absoluto e fora do fluxo.
- O padding superior do Hero foi calibrado para um respiro visual de 24 px entre a base do menu (89 px) e o limbo opaco do globo, descontando a transparencia interna da imagem.

## Validacao

Medido no navegador, com a flutuacao pausada na posicao neutra: 24 px em 390, 700, 768, 1024 e 1440 px de largura. O circuito nao ocupa mais altura no fluxo.
