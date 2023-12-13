import { hash } from "bcryptjs";
import { UsersRepository } from "../repositories/usersRepository";
import { UserAlreadyExists } from "./errors/userAlreadyExists";
import { User } from "@prisma/client";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: User;
}

// SOLID: Dependency Inversion Principle

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const passwordHash = await hash(password, 6);

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new UserAlreadyExists();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return {
      user,
    };
  }
}
