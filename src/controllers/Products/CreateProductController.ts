import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

export class CreateProductController{
    async handle(req: Request, res:Response){
        const { name, price, description, category_id } = req.body;

        if (!req.file) {
            throw new Error("Upload inválido")
        } else {
            const createProductService = new CreateProductService();

            const { filename: image } = req.file;

    
            const product = await createProductService.execute({
                name,
                price,
                description,
                image,
                category_id
            });
    
            return res.json(product)
        }

    }
}