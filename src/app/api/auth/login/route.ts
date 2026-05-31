import { LoginUseCase } from "@/src/application/auth/login.usecase";
import { UserRepositoryImpl } from "@/src/infrastructure/repositories/user.repository.impl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("🚀 ~ POST ~ request:", request)
  const { email, password } = await request.json();

  const repo = new UserRepositoryImpl();
  const useCase = new LoginUseCase(repo);

  try {
    const result = await useCase.execute(email, password);

    return NextResponse.json({
      success: true,
      user: result,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 401 }
    );
  }
}
//get Hash password: $2a$10$w1Q8p9vZxK9h2m8yQ0fZ7e9Qp0cV1nQm6r2u5s8d9aBcDeFgHiJk
export async function GET() {
 const repo = new UserRepositoryImpl();
  const useCase = new LoginUseCase(repo);
  try {
    const result = await useCase.getHashPassword("admin@123");
    return NextResponse.json({
      success: true,
      hash: result,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}