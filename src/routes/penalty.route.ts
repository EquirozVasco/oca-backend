import { Router } from "express";
import {
    create,
    search,
    update,
    deletePenalty,
    getById
} from "../controllers/penalty.controllers";

const router = Router();

router.post('/penalties', create);
router.get('/penalties', search);
router.get('/penalties/:id', getById);
router.patch('/penalties/:id', update);
router.delete('/penalties/:id', deletePenalty);

export default router;