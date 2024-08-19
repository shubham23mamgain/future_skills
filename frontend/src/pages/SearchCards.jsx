import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNotification } from "../hooks";
import Container from "./Container";
import NotFoundText from "./NotFoundText";
import CardList from "./CardList";
import { getCardsByTitle } from "../api/cards";

export default function SearchMovies() {
  const [cards, setCards] = useState([]);
  const [resultNotFound, setResultNotFound] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("title");

  const { updateNotification } = useNotification();

  const searchCards = async (val) => {
    const { error, results } = await getCardsByTitle(val);
    if (error) return updateNotification("error", error);

    if (!results.length) {
      setResultNotFound(true);
      return setCards([]);
    }

    setResultNotFound(false);
    setCards([...results]);
  };

  useEffect(() => {
    if (query.trim()) searchCards(query);
  }, [query]);

  return (
    <div className="dark:bg-primary bg-white min-h-screen py-8">
      <Container className="px-2 xl:p-0">
        <NotFoundText text="Record not found!" visible={resultNotFound} />
        <CardList cards={cards} />
      </Container>
    </div>
  );
}
