import { isValidObjectId } from "mongoose";
import * as yup from "yup";

const validId = {
    id: yup.string().test({
        name: "valid-id",
        message: "Invalid MONGODB id",
        test: (value) => {
            return isValidObjectId(value);
        },
    }),
};



export const newCardSchema = yup.object({
    title: yup.string().required("Title is missing!"),
    description: yup.string().required("Description is missing!"),
});