import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function GET(req,res){
    if (req.method === 'GET') {

    try {
        const categories = await prisma.category.findMany({
            include: {
                subcategories: true, // Recursively include subcategories
            },
        });
        const indicesToRemove = [];
        categories.forEach((category, index) => {
            if (category.parentId !== null && category.subcategories.length === 0) {
                indicesToRemove.push(index);
            }
        });
        
        // Remove the elements from the array starting from the last index to avoid shifting indices
        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
            categories.splice(indicesToRemove[i], 1);
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }}else{
        res.setHeader('Allow', ['GET']);

        res.status(405).end(`Method ${req.method} Not Allowed`);    
    }
}