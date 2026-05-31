import { User } from "@/src/domain/entities/user.entity";
import { UserRepository } from "@/src/domain/repositories/user.repository";
import bcrypt from "bcryptjs";

// giả lập DB
const hashedPassword = "$2b$10$xkb20dT6wujZDT3Jrm0RRebLSu5vb3xR8UPK/Yqx6pCfrRBQvVx8q"; // hash của "admin@123"
const admin = new User(
    "1",
    "admin@gmail.com",
    hashedPassword,
    "admin"
);
const fakeDb: User[] = [
    admin,
];
export class UserRepositoryImpl implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = fakeDb.find(u => u.email === email);
    return user || null;
  }
  async save(user: User): Promise<void> {
    fakeDb.push(user);
  }

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}