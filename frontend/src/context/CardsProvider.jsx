/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { useNotification } from "../hooks";
import { getAllCards } from "../api/cards";

export const CardContext = createContext();

const limit = 6;
let currentPageNo = 0;

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);

  const { updateNotification } = useNotification();

  const fetchCards = async (pageNo = currentPageNo) => {
    const { error, cards } = await getAllCards(pageNo, limit);
    if (error) updateNotification("error", error);

    if (!cards.length) {
      currentPageNo = pageNo - 1;
      return setReachedToEnd(true);
    }

    setCards([...cards]);
  };

  const fetchNextPage = () => {
    if (reachedToEnd) return;
    currentPageNo += 1;
    fetchCards(currentPageNo);
  };

  const fetchPrevPage = () => {
    if (currentPageNo <= 0) return;
    if (reachedToEnd) setReachedToEnd(false);

    currentPageNo -= 1;
    fetchCards(currentPageNo);
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        fetchCards,
        fetchNextPage,
        fetchPrevPage,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardsProvider;
