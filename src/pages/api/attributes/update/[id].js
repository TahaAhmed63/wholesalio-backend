import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function PUT(req,res){
    if (req.method === 'PUT') {
    const {id}=req.query;
    const {name}=req.body;
    try {
    const catagories=    await  prisma.Attribute.update({
            where:{id:parseInt(id)},
            data:{name},
        })
        res.status(200 ).json(catagories)
    } catch (error) {
        res.status(400).json({ error:error.error});
    }}else{
        res.setHeader('Allow', ['PUT']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}