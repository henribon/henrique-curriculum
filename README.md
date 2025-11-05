# Currículo Industrial - Henrique Bon Oliveira

Um currículo web moderno e estático com design industrial, criado para desenvolvedores de software.

## 🎨 Design

O design foi inspirado em elementos industriais:
- **Paleta de cores**: Tons de metal escuro, laranja ferrugem e amarelo de alerta
- **Texturas**: Metal escovado, concreto e grades industriais
- **Tipografia**: Roboto Mono e Oswald para uma aparência robusta e moderna
- **Elementos**: Rebites, faixas de alerta e bordas metálicas

## 🚀 Recursos

- ✅ Design responsivo para todos os dispositivos
- ✅ **Apenas HTML e CSS puro** - sem JavaScript!
- ✅ Seções expansíveis usando técnica CSS (checkbox + label)
- ✅ Animações suaves e transições
- ✅ Tema escuro industrial
- ✅ Fácil de customizar
- ✅ Pronto para deploy imediato

## 📦 Tecnologias

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Transitions)
- Font Awesome Icons (CDN)
- Google Fonts (CDN)

**Sem dependências** - Sem build tools, sem Node.js, sem frameworks!

## 🔧 Como usar

### Opção 1: Abrir diretamente no navegador

Simplesmente clique duas vezes no arquivo `index.html` para abrir no seu navegador padrão.

### Opção 2: Usar um servidor local (opcional)

```bash
# Python 3
python -m http.server 8000

# Node.js (se tiver npx)
npx serve

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 🌐 Deploy

Você pode fazer deploy deste currículo em várias plataformas gratuitas:

### GitHub Pages (RECOMENDADO)

1. Vá em **Settings** > **Pages** no seu repositório
2. Selecione a branch como source
3. Sua página estará disponível em: `https://[seu-usuario].github.io/[nome-repo]/`

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Arraste e solte a pasta no Netlify Drop
2. Ou conecte seu repositório GitHub ao Netlify
3. Deploy automático!

### Vercel

1. Importe o repositório no Vercel
2. Deploy automático - nenhuma configuração necessária

### Hostinger / Hospedagem Tradicional

Simplesmente faça upload dos arquivos via FTP para a pasta `public_html`.

## 📝 Personalização

### Informações Pessoais

Edite o arquivo `index.html` e procure por:
- Nome, título, localização no header
- Contatos (telefone, email, LinkedIn, GitHub)
- Experiências profissionais
- Repositórios e projetos

### Cores e Estilo

Modifique as variáveis CSS no `:root` do arquivo `styles.css`:

```css
:root {
    --metal-dark: #1a1a1a;
    --metal-medium: #2d2d2d;
    --rust-orange: #ff6b35;
    --warning-yellow: #ffa500;
    /* ... outras variáveis */
}
```

### Adicionar/Remover Seções

Para adicionar uma nova experiência, copie o bloco `.expandable-card` e cole:

```html
<div class="expandable-card">
    <input type="checkbox" id="seu-id-unico" class="card-toggle">
    <label for="seu-id-unico" class="card-header">
        <!-- Seu conteúdo do header -->
        <i class="fas fa-chevron-down expand-icon"></i>
    </label>
    <div class="card-content">
        <!-- Seu conteúdo expansível -->
    </div>
</div>
```

## 📱 Responsividade

O currículo é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px - Layout completo em grid
- **Tablet**: 480px - 768px - Layout adaptado
- **Mobile**: < 480px - Layout em coluna única

## ⚙️ Seções Expansíveis (Accordion)

As seções são expansíveis usando **apenas CSS**! Nenhum JavaScript necessário.

**Como funciona:**
- Usa um checkbox escondido
- O label funciona como botão clicável
- CSS controla a altura do conteúdo baseado no estado do checkbox
- Ícone rotaciona quando expandido

**Vantagens:**
- Performance superior (sem JS)
- Funciona mesmo com JavaScript desabilitado
- Mais leve e rápido
- Fácil de manter

## 🎯 Estrutura de Arquivos

```
henrique-curriculum/
├── index.html          # Página principal
├── styles.css          # Todos os estilos
└── README.md           # Este arquivo
```

Simples assim! Apenas 2 arquivos principais.

## 🎨 Seções Incluídas

1. **Header** - Nome, título profissional com design industrial
2. **Contatos** - Telefone, email, LinkedIn, GitHub
3. **Experiência Profissional** - 3 posições expansíveis com detalhes
4. **Repositórios & Projetos** - Seção para seus projetos
5. **Contribuições Open Source** - Destaque para Spring Framework
6. **Footer** - Direitos autorais e design industrial

## 💡 Dicas

- Para definir qual seção inicia aberta, adicione `checked` ao checkbox:
  ```html
  <input type="checkbox" id="exp-americanas" class="card-toggle" checked>
  ```

- Para mudar as cores das tags de tecnologia, edite `.tech-tag` em `styles.css`

- Os ícones são do Font Awesome 6.4.0. Veja todos em: [fontawesome.com/icons](https://fontawesome.com/icons)

## 📄 Licença

MIT License - sinta-se livre para usar e modificar!

## 👤 Autor

**Henrique Bon Oliveira**
- GitHub: [@henribon](https://github.com/henribon)
- LinkedIn: [henrique-bon](https://www.linkedin.com/in/henrique-bon-249073157/)
- Email: henribonrec@gmail.com

---

Feito com ⚙️ e ☕ por Henrique Bon

**100% HTML & CSS • 0% JavaScript • 0 Dependências**
