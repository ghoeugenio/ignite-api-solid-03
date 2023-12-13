import { User, Prisma } from "@prisma/client";
import { UsersRepository } from "../usersRepository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async findByEmail(email: string) {
    const user = this.items.find((user) => user.email === email);

    return user || null;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: String(this.items.length + 1),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
    };
    this.items.push(user);
    return user;
  }
}
