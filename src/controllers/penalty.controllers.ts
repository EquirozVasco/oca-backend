import { Request, Response } from "express"
import { Penalty } from "../entities/penalty"

export const create = async (req: Request, res: Response) => {
    try {
        const penalty = new Penalty;
        penalty.code = req.body.code;
        penalty.description = req.body.description;
        penalty.assignedDifficulty = req.body.assignedDifficulty;

        if (
            !penalty.code ||
            !penalty.description ||
            !penalty.assignedDifficulty
        ) {
            throw new Error ('All penalty fields must be filled');
        }

        await penalty.save();

        return res.status(201).json(penalty);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const search = async (req: Request, res: Response) => {
    try {
        const penalties = await Penalty.find();
        return res.json(penalties);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const penalty = await Penalty.findOneBy({ id: parseInt(id) });

        if (!penalty) {
            return res.status(404).json({ message: 'penalty does not exists' });
        }
        await Penalty.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const penalty = await Penalty.findOneBy({ id: parseInt(id) });

        if (!penalty) {
            return res.status(404).json({ message: 'penalty with given id was nor found' });
        }
        
        return penalty;

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const deletePenalty = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Penalty.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: 'Penalty not found' });
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}