# 🍔 Burggo

**Burggo** é uma aplicação web de **cardápio digital para hamburguerias**, construída com **Next.js (App Router)**, **Prisma** e **PostgreSQL**, focada em performance, SEO e experiência mobile.

Cada hamburgueria possui uma página pública acessada por **slug**, ideal para uso via **QR Code** em mesas, balcões ou embalagens.

O banco de dados é hospedado no **Neon DB**, garantindo escalabilidade, performance e simplicidade de deploy.

---

## 🚀 Funcionalidades

- 📄 Página pública por hamburgueria (`/[slug]`)
- 🍔 Cardápio digital com categorias e produtos
- ⚡ Renderização server-side (Server Components)
- 🔍 SEO-friendly
- 📱 Mobile-first
- 🧱 Arquitetura escalável (multi-restaurante)
- 🎨 Interface estilizada com Tailwind CSS

---

## 🛠️ Tecnologias

- **Next.js 14+** (App Router)
- **React**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Neon DB** (PostgreSQL serverless)
- **Tailwind CSS**

---

## 📂 Estrutura do Projeto

```txt
src/
 ├─ app/
 │   └─ [slug]/
 │       ├─ page.tsx        # Página pública do cardápio
 │       └─ loading.tsx     # Loading state
 │
 ├─ data/
 │   └─ restaurants/
 │       └─ get-by-slug.ts  # Acesso direto ao banco
 │
 ├─ services/
 │   └─ restaurants/
 │       └─ get-public-menu.ts # Regras de negócio
 │
 ├─ components/
 │   ├─ Menu/
 │   ├─ CategorySection/
 │   └─ ProductCard/
 │
 └─ lib/
     └─ prisma.ts
```
## 🔑 Padrões adotados

```txt
-Uso de Server Components para páginas públicas
-Prisma executado apenas no servidor
-Banco de dados PostgreSQL no Neon DB
-Estilização com Tailwind CSS
-Separação clara entre:
-UI (components)
-Dados (data)
-Regras de negócio (services)
-Funções de acesso a dados utilizam export default para evitar erros de import
```
## 📜 Licença

Este projeto é **proprietário**.

Todos os direitos são reservados.  
Nenhuma parte deste código pode ser usada, copiada, modificada ou distribuída sem autorização prévia do autor.

© Burggo. Todos os direitos reservados.
