import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.wrapper}>
        <input
          required
          className={styles.search}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;
