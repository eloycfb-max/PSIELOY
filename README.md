# PSIELOY

# Site institucional — Eloy Bezerra, Psicólogo Clínico

Site estático multi-página (HTML + CSS + JS, sem build) construído a partir do PRD v1.0 — Outubro de 2026.

- **CTA principal:** [Agendar atendimento pelo WhatsApp](https://wa.me/5521987540264)
- **Identidade visual:** marfim e areia, verde-sálvia nos detalhes, terracota nos botões, tipografia editorial (Fraunces nos títulos, Inter no corpo).
- **Fotografia:** `assets/images/eloy-bezerra.jpg` (usada no hero e em “Sobre”) e `assets/images/apple-touch-icon.png` (ícone 180×180 gerado da mesma foto).

---

## ⚠️ Antes de publicar: substituir o domínio

O site foi entregue com o placeholder **`seudominio.com.br`**, exatamente como definido na conversa.
Faça uma busca e substitua por `seudominio.com.br` → `seudominio.com.br` (ou pelo domínio final) em **todos**:

- `robots.txt` (linha do `Sitemap:`)
- `llms.txt` (todos os links)
- `sitemap.xml` (todas as `<loc>`)
- Todos os `<link rel="canonical">`, `og:url`, `og:image` e blocos JSON-LD dos `.html`

Atalho no PowerShell (rodar na pasta do projeto):

```powershell
$dominio = "seudominio.com.br"   # troque pelo domínio final
Get-ChildItem -Recurse -Include *.html,*.txt,*.xml |
  ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'seudominio\.com\.br', $dominio |
    Set-Content $_.FullName -NoNewline -Encoding UTF8 }
```

---

## Estrutura

```
index.html                  Página inicial
tcc.html                    Terapia Cognitivo-Comportamental
psicoterapia.html           Psicoterapia para adultos e idosos
reabilitacao-cognitiva.html Estimulação e reabilitação cognitiva
sobre.html                  Sobre Eloy Bezerra
contato.html                Contato, localização, mapa e modalidades
faq.html                    Perguntas frequentes
blog.html                   Índice do blog
privacidade.html            Política de privacidade (LGPD)
404.html                    Página não encontrada (noindex)
posts/                      Artigos do blog (8)
assets/css/styles.css       Design system completo
assets/js/main.js           Menu responsivo e ano do rodapé (sem dependências)
assets/images/              Fotografia e favicon
robots.txt · llms.txt · sitemap.xml
```

Todas as páginas incluem: título SEO único, meta description, canonical, Open Graph, um único `<h1>`, navegação com `aria-current`, link “pular para o conteúdo”, JSON-LD (Person, BreadcrumbList, FAQPage/Article) e CTAs de WhatsApp no cabeçalho, no corpo e no rodapé + botão flutuante.

## Como visualizar

Abra `index.html` direto no navegador, ou sirva a pasta:

```powershell
npx serve .
# ou
python -m http.server 8000
```

## Checklist do PRD (lançamento)

- [x] Fotografia real de Eloy aplicada no hero e em “Sobre”
- [x] Identidade visual consistente e responsiva (marfim/areia + sálvia + terracota)
- [x] Páginas de serviço com perguntas nos subtítulos e resposta direta logo após o H1/H2
- [x] Todos os CTAs apontam para `https://wa.me/5521987540264` com mensagem pré-preenchida neutra
- [x] Endereço (Av. das Américas, 1155 — Barra da Tijuca) e registro (CRP 05/70122) conferidos
- [x] `robots.txt` publicado com `OAI-SearchBot` e `GPTBot` permitidos
- [x] `llms.txt` publicado com URLs reais
- [x] `sitemap.xml` com todas as páginas e datas
- [x] Metadados, títulos e links internos revisados (validação automática de links/JSON-LD/H1)
- [x] Dados estruturados JSON-LD (validar em https://search.google.com/test/rich-results)
- [x] Acessibilidade: contraste, foco visível, navegação por teclado, `alt` descritivo, `prefers-reduced-motion`
- [x] Política de privacidade publicada; sem formulários (nenhum dado clínico coletado)

### Pendências externas (não dependem do código)

- [ ] Trocar `seudominio.com.br` pelo domínio definitivo (acima)
- [ ] Confirmar **horários de atendimento** e incluir em `contato.html` + JSON-LD `openingHours`
- [ ] Enviar `sitemap.xml` ao Google Search Console e conectar o domínio
- [ ] Verificar CDN/firewall/hospedagem para não bloquear `OAI-SearchBot`/`GPTBot` (sem 403)
- [ ] Configurar medição de cliques no CTA (analytics conforme LGPD) — ainda não incluído
- [ ] Publicar Perfil da Empresa no Google (se elegível) com nome, endereço e categoria consistentes
- [ ] Validar responsividade em celular/tablet reais (a verificação feita foi em viewport de 912 px)

## Ética e privacidade

O conteúdo segue o Código de Ética do CFP: identificação profissional completa, apenas qualificações efetivamente obtidas, sem promessas de cura ou prazos, sem depoimentos, sem coleta de dados clínicos por formulário.
