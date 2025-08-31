import { PrismaClient } from '@prisma/client'


export class UserService
{
    private prisma: PrismaClient
    private static instance : UserService;


    constructor() {
        this.prisma = new PrismaClient()
    }
    
    async selectAll() {
        return await this.prisma.utilisateur.findMany({
            select: {nom: true, prenom: true, email: true, profil:{select: {nomP: true}}},
        });
    }

    async insert(user: any){
        return await this.prisma.utilisateur.create({data: user});
    }

    async update(id: number, user: any){
        return await this.prisma.utilisateur.update({
            where: {id},
            data: user
        })
    }

    async delete(id: number){
        return await this.prisma.utilisateur.delete({
            where: {id}
        })
    }

        static getInstance(){
        if(!UserService.instance){
            UserService.instance = new UserService;
        }
        return UserService.instance;
    }
}