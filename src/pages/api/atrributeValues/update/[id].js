import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function PUT(req,res){
    if (req.method === 'PUT') {
    const {id}=req.query;
    const {value,
        attributeId}=req.body;
    try {
    const attributeValue=    await  prisma.attributeValue.update({
            where:{id:parseInt(id)},
            data:{value,
                attributeId},
        })
        res.status(200 ).json(attributeValue)
    } catch (error) {
        res.status(400).json({ error:error.error});
    }}else{
        res.setHeader('Allow', ['PUT']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}