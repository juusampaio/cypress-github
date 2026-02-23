# Projeto de Automação Web com Cypress

Projeto de testes automatizados End-to-End utilizando Cypress.

A proposta aqui é automatizar fluxos principais da aplicação web, garantir cobertura de cenários críticos e manter a execução integrada com pipeline de CI no GitHub Actions.

---

## Tecnologias utilizadas

- Cypress
- Node.js
- GitHub Actions
- Mochawesome (relatórios)
- Geração automática de screenshots e vídeos

---

## O que o projeto cobre

- Testes E2E dos principais fluxos da aplicação
- Uso de fixtures para dados de teste
- Comandos customizados para reaproveitamento
- Execução headless via pipeline
- Geração de relatórios após execução

---

## Integração Contínua

O projeto possui workflow configurado no GitHub Actions.

A cada push ou pull request:

1. As dependências são instaladas
2. Os testes são executados em modo headless
3. O relatório é gerado
4. Os artefatos (relatório, screenshots e vídeos) ficam disponíveis na execução

Isso ajuda a identificar falhas rapidamente e evitar regressões.

---

## Estrutura do Projeto


cypress/
├── e2e/
├── fixtures/
├── support/
.github/
└── workflows/
cypress.config.js
package.json

- `e2e/` -> Casos de teste automatizados
- `fixtures/` -> Massa de dados para testes
- `support/` -> Configurações e comandos customizados
- `.github/workflows/` -> Pipeline de CI com GitHub Actions

---

## Observações

O projeto está estruturado para ser expandido facilmente com:
- Novos cenários
- Page Objects (caso necessário)
- Testes de API
- Execução paralela

--- 

## Autora

Julia Sampaio Cavalcanti Silva

LinkedIn: https://linkedin.com/in/julia-sampaio-oficial/