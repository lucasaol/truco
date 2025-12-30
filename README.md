# Marcador de Tentos - Truco Mineiro 🃏

Aplicação web para marcação de pontos (tentos) do jogo de cartas Truco.
Desenvolvida como um projeto de estudos em **React**  
Nada de overengineering.
A proposta é resolver um problema real com o **mínimo necessário**, de forma clara e eficiente.

### 🔗 Demo
👉 https://lucasaol.github.io/truco/

![Nível](https://img.shields.io/badge/nível-Básico-green?style=for-the-badge)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


## 🎯 Descrição
Este projeto é uma SPA desenvolvida para resolver um problema simples e real:
marcar os pontos do truco sem confusão e principalmente sem depender de memória.

A ideia é substituir a marcação manual (papel e caneta, risquinho na mesa, feijões, etc.)
por uma interface simples, rápida e responsiva, pensada em ser acessível pelo celular durante o jogo, bem rápido.

O visual faz referência à mesa de baralho, utilizando tons de verde escuro com detalhes em dourado.
O contador de pontos das duplas foi inspirado nos naipes de um baralho tradicional, reforçando a identidade do jogo.


## ⚙️ Funcionalidades
- Marcação de pontos em tempo real.
- Controle de partidas e identificação das duplas.
- Histórico local das partidas (*localStorage* do navegador).
- Interface responsiva (desktop e mobile).

***

## 🚀 Deploy
O deploy é feito automaticamente via GitHub Actions, a cada push na branch `main`.

### Pipeline:
1.  Build do projeto
2. Upload do artefato (dist)
3. Publicação no GitHub Pages
 
A aplicação é publicada em: https://lucasaol.github.io/truco/

## ▶️ Ambiente Local
```
npm install
npm run dev
```
A aplicação roda localmente em `http://localhost:5173/` sem qualquer ajuste adicional.
