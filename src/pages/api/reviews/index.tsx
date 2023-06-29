import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
{
	if (req.method === 'GET')
	{
		const reviews = await prisma.review.findMany();
		res.status(200).json(reviews);
	}
	else if(req.method === 'POST')
	{
		const newReview = await prisma.review.create({ data: req.body });
		res.status(200).json(newReview);
	}
}

export default handler;