import { PrismaClient } from '@prisma/client'


export class ProfilSortiService
{
    private prisma: PrismaClient
    private static instance : ProfilSortiService;


    constructor() {
        this.prisma = new PrismaClient()
    }
    
    async selectAll() {
        return await this.prisma.profilSorti.findMany({
            select: {nom: true}
        });
    }

    async insert(profilSortie: any){
        return await this.prisma.profilSorti.create({data: profilSortie});
    }

    async update(id: number, profilSortie: any){
        return await this.prisma.profilSorti.update({
            where: {id},
            data: profilSortie
        })
    }

    async delete(id: number){
        return await this.prisma.profilSorti.delete({
            where: {id}
        })
    }

        static getInstance(){
        if(!ProfilSortiService.instance){
            ProfilSortiService.instance = new ProfilSortiService;
        }
        return ProfilSortiService.instance;
    }
}