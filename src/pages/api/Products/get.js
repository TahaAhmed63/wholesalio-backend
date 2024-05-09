import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function get(req, res) {
    if (req.method === 'GET') {
      try {
        const products = await prisma.product.findMany({
          include: {
            gallery: true,
            categories: {
                include: {
                    subcategories: true, // Recursively include subcategories
                },
            },
            attributes: {
              include: {
                value: true
              }
            }
          }
        });
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  