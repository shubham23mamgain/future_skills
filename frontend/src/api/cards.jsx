import { catchError } from "../utils/helper";
import client from "./client";

export const getAllCards = async (pageNo, limit) => {
  try {
    const { data } = await client(`/cards?pageNo=${pageNo + 1}&limit=${limit}`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getCardsByTitle = async (title) => {
  try {
    const { data } = await client("/cards/search?title=" + title);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getSingleCard = async (id) => {
  try {
    const { data } = await client("/cards/" + id);
    return data;
  } catch (error) {
    return catchError(error);
  }
};
