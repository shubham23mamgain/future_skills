import { RequestHandler } from "express";
import { FilterQuery, isValidObjectId } from "mongoose";
import CardModel, { CardDocument } from "src/models/card";

import { sendErrorRes } from "src/utils/helper";

export const addCard: RequestHandler = async (req, res) => {
    const { title, description } = req.body;
    const newCard = new CardModel({
        title,
        description
    });

    await newCard.save();

    res.status(201).json({ message: "Added new Card", success: true });
};

export const updateCard: RequestHandler = async (req, res) => {

    const { title, description, } =
        req.body;
    const cardId = req.params.id;
    if (!isValidObjectId(cardId))
        return sendErrorRes(res, "Invalid Card ID!", 422);

    const card = await CardModel.findOneAndUpdate(
        { _id: cardId },
        {
            title,
            description
        },
        {
            new: true,
        }
    );
    if (!card) return sendErrorRes(res, "Card not found!", 404);

    await card.save();

    res.status(201).json({ message: "Card updated successfully." });
};

export const deleteCard: RequestHandler = async (req, res) => {

    const cardId = req.params.id;
    if (!isValidObjectId(cardId))
        return sendErrorRes(res, "Invalid Card id!", 422);

    const card = await CardModel.findOneAndDelete({
        _id: cardId,
    });

    if (!card) return sendErrorRes(res, "Card not found!", 404);

    res.json({ message: "Card removed successfully." });
};

export const getSingleCard: RequestHandler = async (req, res) => {

    const { id } = req.params;
    if (!isValidObjectId(id))
        return sendErrorRes(res, "Invalid card id!", 422);

    const card = await CardModel.findById(id);
    if (!card) return sendErrorRes(res, "Card not found!", 404);

    res.json({
        card: {
            id: card._id,
            title: card.title,
            description: card.description,
        },
    });
};

export const getAllCards: RequestHandler = async (req, res) => {

    const { pageNo = "1", limit = "6" } = req.query as {
        pageNo: string;
        limit: string;
    };

    const cards = await CardModel.find().sort("createdAt").skip((+pageNo - 1) * +limit)
        .limit(+limit);


    if (cards.length == 0) {
        return res.status(404).json({ message: "No Cards Found", success: false })
    }

    let count = 0;
    const listings = cards.map((p) => {
        count += 1;
        return {
            id: p._id,
            title: p.title,
            descrition: p.description
        };
    });

    res.json({ page: pageNo, total: count, cards: listings });
};

export const searchCards: RequestHandler = async (req, res) => {
    const { title = "name", pageNo = "1", limit = "4" } = req.query as {
        pageNo: string;
        limit: string;
        title: string;
    };

    const filter: FilterQuery<CardDocument> = {};

    if (typeof title === "string") filter.title = { $regex: new RegExp(title, "i") };

    const cards = await CardModel.find(filter).skip((+pageNo - 1) * +limit)
        .limit(+limit);

    let count = 0;

    const results = cards.map((card) => {
        count += 1;
        return {
            id: card._id,
            title: card.title,
            description: card.description,
        }

    })

    res.json({
        displaying: count,
        results
    });
};