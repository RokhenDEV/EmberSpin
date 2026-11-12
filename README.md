# 🔥 Ember Spin

**Ember Spin** é um jogo de navegador inspirado em máquinas de caça-níqueis, com ambientação de fantasia, uma Fênix provocadora e visual que mistura elementos retrô e modernos.

O jogo é gratuito e utiliza exclusivamente **créditos virtuais fictícios**. Não há pagamentos, prêmios em dinheiro ou transações reais. Ember Spin não é uma plataforma de apostas e não deve ser utilizado como treinamento para apostas.

## ✨ Funcionalidades

- **Quatro níveis de desafio:** Nível 1, Nível 2, Nível 3 e Nível Fênix, cada um com saldo inicial, meta e tabela de pagamentos próprios.
- **Rolos e símbolos:** Trevo, Morango, Diamante, Fênix e símbolo vazio.
- **Eventos aleatórios:** desafios de perguntas, evento de fogo, escolha de cartas, giros automáticos da Fênix e apostas forçadas fictícias.
- **Loja de melhorias:** compre aprimoramentos para os multiplicadores dos símbolos e para o limite de aposta.
- **Progresso:** alcance as metas para concluir níveis e desbloquear os próximos.
- **Salvamento por código:** gere um código de resgate de oito caracteres e use-o para carregar o progresso posteriormente no mesmo navegador.
- **Personalização:** controle a música e o volume e alterne o visual Pixel 8-bit.
- **Interface adaptável:** experiência ajustada para computadores e dispositivos móveis, com suporte a tela cheia.

## 🚀 Como executar

O Ember Spin não precisa de instalação de dependências, compilação ou servidor de backend. É feito com HTML, CSS e JavaScript e pode ser executado em um navegador moderno.

### 1. Organize os arquivos

Deixe os arquivos do projeto na mesma pasta:

```text
Ember-Spin/
├── index.html
├── ember-patch.js
├── rokhendev-logo.png
├── README.md
└── LICENSE
```

> **Importante:** o `index.html` incluído neste projeto carrega o `ember-patch.js`. Esse complemento utiliza a imagem `rokhendev-logo.png`; mantenha os três arquivos na mesma pasta e use exatamente esse nome para a imagem.

### 2. Inicie um servidor local

Na pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois, abra no navegador:

```text
http://localhost:8000
```

Também é possível abrir a pasta no Visual Studio Code e iniciar o projeto com a extensão **Live Server**.

## 💾 Sobre os dados salvos

O progresso é armazenado no `localStorage` do navegador. O código de resgate não é uma conta online nem salva os dados em um servidor: ele permite recuperar os dados armazenados no mesmo navegador e na mesma origem do site.

Por isso, limpar os dados do site ou utilizar outro navegador/dispositivo pode impedir a recuperação do progresso. Guarde o código e evite apagar os dados locais do navegador enquanto quiser manter os saves.

## 🌐 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Web Audio API para áudio gerado no navegador
- `localStorage` para armazenamento local do progresso
- Google Fonts para as famílias tipográficas utilizadas na interface

Não há framework JavaScript ou processo de build obrigatório. As fontes do Google Fonts são carregadas pela internet; sem conexão, o navegador utilizará fontes alternativas disponíveis no sistema.

## 📁 Arquivos do projeto

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Estrutura, estilos e lógica principal do jogo. |
| `ember-patch.js` | Complemento visual e ajustes de interface, responsividade e integração da marca RokhenDEV. |
| `rokhendev-logo.png` | Logotipo utilizado pelo complemento visual. |
| `README.md` | Documentação do projeto. |
| `LICENSE` | Termos da licença MIT. |

## ⚠️ Aviso

Ember Spin é uma experiência recreativa com dinheiro fictício. Os valores exibidos no jogo são apenas parte da mecânica e não podem ser comprados, vendidos, sacados ou convertidos em dinheiro real. O jogo não oferece serviços de apostas.

O aviso exibido no próprio jogo indica **+12 anos**, considerando elementos de fantasia e sustos leves.

## 👨‍💻 Desenvolvedor e contato

**RokhenDEV**

- GitHub: [github.com/RokhenDEV](https://github.com/RokhenDEV)
- E-mail: [rokhendev@gmail.com](mailto:rokhendev@gmail.com)
- Portfólio: [rokhendev.github.io/portfolio-rokhen](https://rokhendev.github.io/portfolio-rokhen/)

O código original também mantém o crédito exibido na tela interna do jogo: **João Samuel (UFVJM)**.

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Consulte o arquivo [`LICENSE`](LICENSE) para ver os termos completos.
