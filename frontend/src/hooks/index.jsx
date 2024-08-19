import { useContext } from "react";
import { NotificationContext } from "../context/NotificationsProvider";
import { SearchContext } from "../context/SearchProvider";
import { CardContext } from "../context/CardsProvider";

export const useNotification = () => useContext(NotificationContext);
export const useSearch = () => useContext(SearchContext);
export const useCards = () => useContext(CardContext);
