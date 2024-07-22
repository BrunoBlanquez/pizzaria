import prismaClient from "../../prisma";

interface CategoryInterface {
    name: string;
}

export class CreateCategoryService {
    async execute({ name }: CategoryInterface) {
        if (name == '' || name == null) throw new Error('Name invalid');

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category;
    }
}