src/
│
├── app/                          # Next.js App Router (UI layer)
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│
├── presentation/                 # UI logic tách khỏi Next.js routing
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── providers/
│
├── application/                 # Use cases (business flow)
│   ├── use-cases/
│   │   ├── user/
│   │   │   ├── create-user.usecase.ts
│   │   │   ├── get-user.usecase.ts
│   │   └── auth/
│   ├── dto/
│
├── domain/                      # Core business logic
│   ├── entities/
│   │   ├── user.entity.ts
│   ├── repositories/
│   │   ├── user.repository.ts   # interface
│   ├── services/
│   ├── value-objects/
│
├── infrastructure/             # External systems
│   ├── database/
│   │   ├── prisma/
│   │   ├── repositories/
│   ├── http/
│   │   ├── axios-client.ts
│   ├── api/
│   ├── config/
│
├── shared/                     # dùng chung
│   ├── constants/
│   ├── utils/
│   ├── types/
│   ├── errors/
│
├── lib/                        # helper init (singleton, config)
├── middlewares/
├── styles/
├── env.ts