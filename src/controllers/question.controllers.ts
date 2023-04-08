import { Request, Response } from "express"
import { Question } from "../entities/questions"

export const create = async (req: Request, res: Response) => {
    try {        
        const question = new Question;
        question.statement = req.body.statement;
        question.answerOption1 = req.body.answerOption1;
        question.answerOption2 = req.body.answerOption2;
        question.answerOption3 = req.body.answerOption3;
        question.correctAnswer = req.body.correctAnswer;
        question.topic = req.body.topic;
        question.subject = req.body.subject;
        question.difficulty = req.body.difficulty;

        if (
            !question.statement ||
            !question.answerOption1 ||
            !question.answerOption2 ||
            !question.answerOption3 ||
            !question.correctAnswer ||
            !question.topic ||
            !question.subject ||
            !question.difficulty
        ) {
            throw new Error ('All question fields must be filled');
        }

        await question.save();

        return res.status(201).json(question);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const search = async (req: Request, res: Response) => {
    try {
        const questions = await Question.find();
        return res.json(questions);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const question = await Question.findOneBy({ id: parseInt(id) });

        if (!question) {
            return res.status(404).json({ message: 'Question does not exists' });
        }
       await Question.update({ id: parseInt(id) }, req.body);
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

        const question = await Question.findOneBy({ id: parseInt(id) });

        if (!question) {
            return res.status(404).json({ message: 'Question with given id was nor found' });
        }        
        return res.status(200).json(question);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const deleteQuestion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Question.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: 'Question not found' });
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const verifyAnswer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const question = await Question.findOneBy({ id: parseInt(id) });
        if (!question) {
            return res.status(404).json({ message: 'Question does not exists' });
        }
        if (req.body.answer !== question.correctAnswer) {
            return res.json({ message: 'Incorrect!' });
        } else {
            return res.json({ message: 'Correct!' });
        }

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}