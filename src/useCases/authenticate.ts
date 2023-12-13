import { hash } from "bcryptjs";
import { UsersRepository } from "../repositories/usersRepository";
import { UserAlreadyExists } from "./errors/userAlreadyExists";
import { User } from "@prisma/client";
import { InvalidCredentials } from "./errors/invalidCredentials";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User;
}

// SOLID: Dependency Inversion Principle

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentials();
    }

    const passwordMatch = await hash(password, user.password);

    if (!passwordMatch) {
      throw new InvalidCredentials();
    }

    return {
      user,
    };
  }
}
