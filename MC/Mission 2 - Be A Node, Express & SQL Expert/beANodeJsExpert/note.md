# Software Design Pattern

1. MVC - models | views | controllers + routes + interfaces
2. Modular: (Best Practice)

- Rules/Principles:
  1. DRY - Don't Repeat Yourself
  2. Fat Model & Thin Controller

- JavaScript: Schema < Model < DB Query
- Typescript: Interface < Schema < Model < DB Query

- Modular Pattern
  - Student:
    - student.interface.ts : Types & Interface
    - student.route.ts : Handle All Routes
    - student.model.ts : Schema for Database
    - student.controller.ts : Handle Request & Response
    - student.service.ts : Business Logic & Database Query

- Request & Response Flow Of Modular Pattern
  - Client (req) -> route.ts (req) -> controller.ts (res: {success, message,
    data}) to Client
  - controller.ts (req, res) <-> service.ts (req, res) <-> DB
