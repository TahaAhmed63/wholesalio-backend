import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function POST(req,res){
    if (req.method === 'POST') {

        const { value, attributeId } = req.body;

try {

const attributeValue  = await prisma.attributeValue.create({
    data:{
        value,
        attributeId:parseInt(attributeId)
    }
})
res.status(201).json(attributeValue);
}catch(error){
    res.status(400).json({error:error.message});

}}else{
    res.setHeader('Allow', ['POST']);

    res.status(405).end(`Method ${req.method} Not Allowed`);    
}

}