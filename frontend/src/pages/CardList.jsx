/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GridContainer from "./GridContainer";

export default function CardList({ title, cards = [] }) {
  if (!cards.length) return null;

  return (
    <div className="mt-4">
      {title ? (
        <h1 className="text-2xl dark:text-white text-secondary font-semibold mb-5">
          {title}
        </h1>
      ) : null}
      <GridContainer>
        {cards.map((card) => {
          return <ListItem key={card.id} card={card} />;
        })}
      </GridContainer>
    </div>
  );
}

const ListItem = ({ card }) => {
  const { id, title, description } = card;
  return (
    <div data-aos="fade-up" key={id} className="space-y-3">
      <div className="h-[200px] w-[450px] bg-gray-100 rounded-lg">
        <div className="grid grid-cols-1 divide-gray-300 divide-y">
          <div>
            <Link to={`/cards/` + id}>
              <h3 className="font-bold text-black  text-xl px-8 py-1 hover:cursor-pointer hover:text-primary ">
                {title}
              </h3>
            </Link>
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
