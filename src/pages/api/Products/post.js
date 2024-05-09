import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST(req, res) {
    if (req.method === 'POST') {
      const { name, description, archiveText, price, quantity, archiveImage, mainImage, gallery, categories } = req.body;
      try {
        const product = await prisma.product.create({
          data: {
            name,
            description,
            archiveText,
            price,
            quantity,
            archiveImage,
            mainImage,
            gallery: {
              create: gallery.map(img => ({ url: img.url }))
            },
            categories: {
              connect: categories
            }
          }
        });
  
        // Connect attributes after product creation
        const connectedAttributes = await Promise.all(
          req.body.attributes.map(async attribute => {
            return await prisma.productAttribute.create({
              data: {
                productId: product.id,
                valueId: attribute.id // Assuming `attribute` has an `id` property
              }
            });
          })
        );
  
        res.status(201).json({ product, connectedAttributes });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
