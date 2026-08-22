import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: {
            name: string;
            email: string;
            id: string;
            createdAt: Date;
        };
    }>;
}
