import { Request, Response } from "express";
import connection from '../../db/configDB';

export const getAll = async (req: Request, res: Response) => {
    try {
        const [products] = await connection.promise().query("SELECT * FROM products");
        return res.status(200).json({
            message: "Lista de productos",
            data: products
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};