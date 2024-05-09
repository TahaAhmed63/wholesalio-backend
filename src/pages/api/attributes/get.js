import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function GET(req,res){
    if (req.method === 'GET') {

    try {
        const attribute = await prisma.attribute.findMany({   include: {
            values: true, // Recursively include subcategories
        },});
        res.status(200).json({attribute});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }}else{
        res.setHeader('Allow', ['GET']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}