import { useEffect, useMemo, useRef, useState } from "react";

import { getTeachers } from "@/services/firebase";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TeacherList } from "@/components/TeacherList/TeacherList";
import { Loader } from "@/components/common/Loader/Loader.styled";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";
import * as SC from "./TeachersPage.styled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastKey = useRef();
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getTeachers(lastKey.current);

        const keys = Object.keys(data);
        const loadMore = keys.length >= 4;
        lastKey.current = keys[keys.length - 1];

        setTeachers((prevState) => [...prevState, ...Object.entries(data)]);
        setLoadMore(loadMore);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const updateFilter = (setFilter) => {
    return (value) => {
      setFilter(value);
    };
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const filteredTeachers = useMemo(() => {
    return teachers.filter(([, teacher]) => {
      let result;
      let hasFilter = false;

      if (language) {
        hasFilter = true;
        result = teacher.languages.includes(language);
        if (!result) return;
      }

      if (level) {
        hasFilter = true;
        result = teacher.levels.includes(level);
        if (!result) return;
      }

      if (price) {
        hasFilter = true;
        result = teacher.price_per_hour <= Number(price);
        if (!result) return;
      }

      return hasFilter ? result : true;
    });
  }, [language, level, price, teachers]);

  const listIsEmpty = filteredTeachers.length === 0;
  const showList = !error && !listIsEmpty;
  const showLoadMore = !isLoading && !error && loadMore;
  const showNoData = !isLoading && !error && !loadMore && listIsEmpty;
  const showError = !isLoading && error;

  return (
    <SC.PageWrapper>
      <SearchBar
        setLanguage={(value) => updateFilter(setLanguage)(value)}
        setLevel={(value) => updateFilter(setLevel)(value)}
        setPrice={(value) => updateFilter(setPrice)(value)}
      />
      {showList && <TeacherList teachers={filteredTeachers} level={level} />}
      {showLoadMore && (
        <SC.LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </SC.LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {showNoData && <Placeholder type="no-data">No data</Placeholder>}
      {showError && (
        <Placeholder type="error">
          Sorry, we&apos;re having some technical issues (as you can see) try to
          refresh the page, sometime works :)
        </Placeholder>
      )}
    </SC.PageWrapper>
  );
};

export default TeachersPage;
