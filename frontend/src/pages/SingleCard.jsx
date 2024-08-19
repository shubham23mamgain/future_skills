import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNotification } from "../hooks";
import { getSingleCard } from "../api/cards";

const SingleCard = () => {
  const [ready, setReady] = useState(false);
  const [card, setCard] = useState({});

  const { cardId } = useParams();
  const { updateNotification } = useNotification();

  const fetchCard = async () => {
    const { error, card } = await getSingleCard(cardId);
    if (error) return updateNotification("error", error);

    setReady(true);
    setCard(card);
  };

  useEffect(() => {
    if (cardId) fetchCard();
  }, [cardId]);

  if (!ready)
    return (
      <div className="h-screen flex justify-center items-center  bg-white">
        <p className="text-light-subtle dark:text-dark-subtle animate-pulse">
          Please wait
        </p>
      </div>
    );

  const { id, title, description } = card;
  return (
    <div data-aos="fade-up" key={id} className="space-y-3 mt-12 mb-6 py-4 px-4">
      <div className="h-[150px] w-[450px] bg-gray-100 rounded-lg">
        <div className="grid grid-cols-1 divide-gray-300 divide-y">
          <div>
            <h3 className="font-bold text-black  text-xl px-8 py-1 ">
              {title}
            </h3>
          </div>

          <div>
            <p className=" text-gray text-gray-700 text-xl px-8 py-1">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
