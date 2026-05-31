import { UserRepository } from "../../domain/repositories/user.repository";

export class LoginUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await this.userRepo.comparePassword(
      password,
      user.password
    );

    if (!isValid) {
      throw new Error("Invalid password");
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }
  async getHashPassword(password: string) {
    return this.userRepo.hashPassword(password);
  }
}