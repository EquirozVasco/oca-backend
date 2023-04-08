import { Router } from "express";
import {
    create,
    search,
    update,
    deleteQuestion,
    verifyAnswer,
    getById
} from "../controllers/question.controllers";

const router = Router();

router.post('/questions', create);
router.get('/questions', search);
router.get('/questions/:id', getById);
router.patch('/questions/:id', update);
router.delete('/questions/:id', deleteQuestion);
router.post('/questions/:id/verifyAnswer', verifyAnswer);

export default router;