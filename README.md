# Bastos & Associados

Site institucional estático. Arquivos em `dist/`. Publicação automática pela Vercel a partir da branch `main`.

- `/`: home institucional com áreas de atuação, apresentação do escritório e contato.
- `/busca`: página dedicada a busca e apreensão e revisão de financiamentos, preservada a partir da home original.

As páginas compartilham `styles.css`, `script.js` e os arquivos de `assets/`. Os estilos exclusivos da home usam a classe `institutional`.

Prévia local: `python3 -m http.server 8765 --directory dist`.

A Vercel serve `/busca` a partir de `dist/financiamentos.html` e redireciona permanentemente o endereço antigo.
