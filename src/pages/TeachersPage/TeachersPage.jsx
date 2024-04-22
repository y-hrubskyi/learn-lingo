import { useEffect, useRef, useState } from "react";

import { getTeachers } from "@/services/firebase";

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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const listIsEmpty = teachers.length === 0;
  const showList = !error && !listIsEmpty;
  const showLoadMore = !isLoading && !error && loadMore;
  const showNoData = !isLoading && !error && listIsEmpty;
  const showError = !isLoading && error;

  return (
    <SC.PageWrapper>
      {showList && <TeacherList teachers={teachers} />}
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
