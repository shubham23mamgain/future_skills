/* eslint-disable react/prop-types */
import CardsProvider from "./CardsProvider";
import NotificationProvider from "./NotificationsProvider";
import SearchProvider from "./SearchProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <SearchProvider>
        <CardsProvider>{children}</CardsProvider>
      </SearchProvider>
    </NotificationProvider>
  );
}
