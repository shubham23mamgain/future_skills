import { Document, Schema, model } from "mongoose";


export interface CardDocument extends Document {

    title: string;
    description: string;
}

const schema = new Schema<CardDocument>(
    {

        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const CardModel = model("Card", schema);

export default CardModel;