# Currículo Moderno - Henrique Bon Oliveira

Um currículo web moderno e minimalista com design limpo e tons de roxo, criado para desenvolvedores de software.

## 🎨 Design

Design moderno e minimalista inspirado nas melhores práticas de UI/UX:
- **Paleta de cores**: Tons de roxo vibrantes (#8B5CF6, #A78BFA, #C4B5FD) com neutros suaves
- **Tipografia**: Inter - uma das fontes mais modernas e legíveis
- **Layout**: Clean com muito espaço em branco (whitespace)
- **Cards**: Bordas arredondadas e sombras suaves
- **Elementos**: Avatar circular, badges modernos, gradientes sutis

## 🚀 Recursos

- ✅ Design moderno e minimalista
- ✅ **Apenas HTML e CSS puro** - zero JavaScript!
- ✅ Seções expansíveis usando técnica CSS pura (checkbox + label)
- ✅ Paleta de cores roxa profissional
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves e microinterações
- ✅ Otimizado para impressão (print-friendly)
- ✅ Fácil de customizar com CSS Variables
- ✅ Pronto para deploy imediato

## 📦 Tecnologias

- HTML5 Semântico
- CSS3 Moderno (Custom Properties, Grid, Flexbox, Animations)
- Font Awesome Icons 6.4.0 (CDN)
- Google Fonts - Inter (CDN)

**Zero dependências** - Sem build tools, sem Node.js, sem frameworks, sem JavaScript!

## 🔧 Como usar

### Opção 1: Abrir diretamente no navegador

Simplesmente clique duas vezes no arquivo `index.html`.

### Opção 2: Servidor local (opcional)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 🌐 Deploy Gratuito

### GitHub Pages (RECOMENDADO) 🌟

1. Vá em **Settings** > **Pages**
2. Selecione a branch como source
3. Pronto! URL: `https://[usuario].github.io/[repo]/`

### Netlify

1. Arraste e solte a pasta no [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte via GitHub para deploy automático

### Vercel

1. Importe o repositório
2. Deploy automático - zero configuração

### Outras opções

- **Surge.sh**: `surge .`
- **GitHub Codespaces**: Preview direto
- **Qualquer hospedagem**: Upload via FTP

## 📝 Personalização

### Alterar Cores

Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    /* Mude os tons de roxo */
    --purple-600: #8B5CF6; /* Cor principal */
    --purple-700: #7C3AED; /* Gradiente */
    --purple-50: #F5F3FF;  /* Background claro */

    /* Ou troque por outra cor */
    --primary-color: #3B82F6; /* Azul */
    --primary-color: #10B981; /* Verde */
    --primary-color: #EF4444; /* Vermelho */
}
```

### Alterar Conteúdo

Edite `index.html`:
- **Header**: Nome, título, localização (linhas 17-23)
- **Contatos**: Email, telefone, links (linhas 31-47)
- **Experiências**: Empresas, datas, conquistas (linhas 63+)
- **Projetos**: Repositórios e links (linhas 181+)

### Adicionar Experiência

Copie um bloco `.card` existente:

```html
<div class="card">
    <input type="checkbox" id="exp-nova" class="card-toggle">
    <label for="exp-nova" class="card-header">
        <!-- Conteúdo do header -->
        <i class="fas fa-chevron-down expand-icon"></i>
    </label>
    <div class="card-content">
        <!-- Seu conteúdo aqui -->
    </div>
</div>
```

## 📱 Responsividade

Totalmente responsivo com breakpoints otimizados:

- **Desktop** (> 768px): Layout completo com avatar grande
- **Tablet** (480-768px): Layout adaptado
- **Mobile** (< 480px): Layout vertical otimizado

## ⚙️ Funcionalidades CSS Puras

### Accordion sem JavaScript

As seções expansíveis usam apenas CSS:

```html
<input type="checkbox" id="id-unico" class="card-toggle" checked>
<label for="id-unico">Clique aqui</label>
<div class="card-content">Conteúdo colapsável</div>
```

**Como funciona:**
- Checkbox invisível controla o estado
- `:checked` pseudo-class aplica estilos quando marcado
- Transições CSS para animação suave

**Vantagens:**
- Funciona sem JavaScript
- Performance superior
- Mais leve
- SEO-friendly

## 🎯 Estrutura

```
henrique-curriculum/
├── index.html    # Página principal (8KB)
├── styles.css    # Estilos modernos (12KB)
└── README.md     # Este arquivo
```

**Total: 20KB de código limpo!**

## 🎨 Paleta de Cores

```
Roxos:
- #8B5CF6 (purple-600) - Principal
- #7C3AED (purple-700) - Secundário
- #A78BFA (purple-500) - Médio
- #C4B5FD (purple-400) - Claro
- #F5F3FF (purple-50)  - Background

Neutros:
- #111827 (gray-900) - Texto principal
- #4B5563 (gray-600) - Texto secundário
- #E5E7EB (gray-200) - Bordas
- #F9FAFB (gray-50)  - Background
```

## 💡 Dicas

1. **Iniciar seção aberta**: Adicione `checked` ao checkbox
   ```html
   <input type="checkbox" id="exp" class="card-toggle" checked>
   ```

2. **Imprimir currículo**: Use Ctrl+P - o CSS tem estilos otimizados para impressão

3. **Mudar fonte**: Troque na importação do Google Fonts e na variável `font-family`

4. **Avatar customizado**: Troque "HB" pelas suas iniciais (linha 18)

## 🌟 Destaques

- ✨ Design inspirado em plataformas modernas (Linear, Stripe, Vercel)
- 🎯 Foco em legibilidade e hierarquia visual
- 🚀 Carregamento instantâneo (< 100KB total)
- ♿ Acessível e semântico
- 📱 Mobile-first approach
- 🖨️ Print-friendly

## 📄 Licença

MIT License - Use livremente!

## 👤 Autor

**Henrique Bon Oliveira**
- GitHub: [@henribon](https://github.com/henribon)
- LinkedIn: [henrique-bon](https://www.linkedin.com/in/henrique-bon-249073157/)
- Email: henribonrec@gmail.com

---

Feito com 💜 e CSS por Henrique Bon

**100% HTML & CSS • 0% JavaScript • 0 Dependências • 100% Moderno**
