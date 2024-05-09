import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function DELETE(req,res){
    if (req.method === 'DELETE') {

    const {id}=req.query;
    try {
       const deleteitem=  await   prisma.Attribute.delete({
            where:{id:parseInt(id)}
        })
        res.status(204 ).json(deleteitem)
    } catch (error) {
        res.status(400).json({ error:"failed to delete the product catagory"});
    }}else{
        res.setHeader('Allow', ['DELETE']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}