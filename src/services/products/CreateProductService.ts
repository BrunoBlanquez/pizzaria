import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    image: string;
    category_id: string;
}

export class CreateProductService{
    async execute({name, price, description, image, category_id}: ProductRequest){

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                image: image,
                category_id: category_id
            }
        })
        return product;
    }

    
}