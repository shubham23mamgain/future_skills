/* eslint-disable react/prop-types */
// const cardsData = [
//   {
//     id: 1,
//     title: "Branches",
//     description:
//       "Abstract branches lets you manage, version, and document your designs in one place.",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     title: "Manage Your Account",
//     description:
//       "Configure your account settings, such as your email, profile details and password.",

//     aosDelay: "200",
//   },
//   {
//     id: 3,

//     title: "Branches",
//     description:
//       "Abstract branches lets you manage, manage version, and document your designs in one place.",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     title: "Branches",
//     description:
//       "Abstract branches lets you manage, manage version, and document your designs in one place.",
//     aosDelay: "600",
//   },
//   {
//     id: 5,

//     title: "Branches",
//     description:
//       "Abstract branches lets you manage, manage version, and document your designs in one place.",
//     aosDelay: "800",
//   },
//   {
//     id: 6,

//     title: "Branches",
//     description:
//       "Abstract branches lets you manage, manage version, and document your designs in one place.",
//     aosDelay: "1000",
//   },
// ];

import { useEffect, useState } from "react";
import client from "../api/client";
import { catchError } from "../utils/helper";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCards = async () => {
    try {
      setLoading(true);
      const { data } = await client.get("/cards");

      setCards(data.cards);
      console.log(cards);

      setLoading(false);
    } catch (error) {
      catchError(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <div className="mt-14 mb-12 bg-white">
      <div className="container">
        <div>
          {loading ? (
            <h1>Loading ...</h1>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
              {cards.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <div className="h-[200px] w-[450px] bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 divide-gray-300 divide-y">
                      <div>
                        <h3 className="font-bold text-black  text-xl px-8 py-1 ">
                          {data.title}
                        </h3>
                      </div>

                      <div>
                        <p className=" text-gray text-gray-700 text-xl px-8 py-1">
                          {data.descrition}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
