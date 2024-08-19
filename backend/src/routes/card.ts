import { Router } from "express";
import { addCard, deleteCard, getAllCards, getSingleCard, searchCards, updateCard } from "src/controllers/card";
import validate from "src/middlewares/validator";
import { newCardSchema } from "src/utils/validationSchema";

const cardRouter = Router();

cardRouter.post(
    "/",
    validate(newCardSchema),
    addCard
);

cardRouter.patch(
    "/:id",
    updateCard
);


cardRouter.get("/search", searchCards);
cardRouter.get('/', getAllCards);

cardRouter.get("/:id", getSingleCard);
cardRouter.delete("/:id", deleteCard);


export default cardRouter;