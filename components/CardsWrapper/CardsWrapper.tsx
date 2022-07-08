import styles from "./CardsWrapper.module.css";

import UserCard from "../UserCard/UserCard";

import { UsersResponse } from "../../interfaces/usersResponse";

interface Props {
  usersData: UsersResponse;
  isLoading: boolean;
  error: Error | null;
  onNext: () => void;
  onPrevious: () => void;
}

const CardsWrapper: React.FC<Props> = ({
  usersData,
  isLoading,
  error,
  onNext,
  onPrevious,
}) => {
  return (
    <div>
      <div className={styles.cardsWrapper}>
        {isLoading && <span>Loading...</span>}
        {!isLoading &&
          usersData.data.map((a) => (
            <UserCard
              key={a.email}
              avatar={a.avatar}
              firstName={a.first_name}
              lastName={a.last_name}
              email={a.email}
            />
          ))}
        {error && <h3>{`${error.message}`}</h3>}
      </div>
      <div className={styles.buttonWrapper}>
        {usersData.page > 1 && (
          <button disabled={isLoading} onClick={onPrevious}>
            Previous
          </button>
        )}
        {usersData.page + 1 <= usersData.total_pages && (
          <button disabled={isLoading} onClick={onNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CardsWrapper;