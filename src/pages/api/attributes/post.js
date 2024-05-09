import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function POST(req,res){
    if (req.method === 'POST') {

const {name} =req.body;
try {

const category  = await prisma.Attribute.create({
    data:{
        name
    }
})
res.status(201).json(category);
}catch(error){
    res.status(400).json({error:error.message});

}}else{
    res.setHeader('Allow', ['POST']);

    res.status(405).end(`Method ${req.method} Not Allowed`);    
}

}