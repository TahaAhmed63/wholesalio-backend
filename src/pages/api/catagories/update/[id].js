import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function PUT(req,res){
    if (req.method === 'PUT') {
    const {id}=req.query;
    const {name,parentId}=req.body;
    try {
    const catagories=    await  prisma.Category.update({
            where:{id:parseInt(id)},
            data:{name,
                parentId: parentId ? parseInt(parentId) : null,},
        })
        res.status(200 ).json(catagories)
    } catch (error) {
        res.status(400).json({ error:error.error});
    }}else{
        res.setHeader('Allow', ['PUT']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}