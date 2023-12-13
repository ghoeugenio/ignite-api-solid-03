# App

GymPass style app

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil do usuário logado
- [ ] Deve ser possível obter o número de check-ins do usuário logado
- [ ] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível buscar academias próximas
- [ ] Deve ser possível o usuário buscar por uma academia específica
- [ ] Deve ser possível o usuário realizar check-in em uma academia
- [ ] Deve ser possível validar o check-in do usuário
- [ ] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio)

- [x] Não deve ser possível se cadastrar com um e-mail já existente
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário deve ser armazenada criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] Todas as listas precisam ser paginadas com 20 itens por página
- [ ] O usuário deve ser identificado pelo token JWT;
