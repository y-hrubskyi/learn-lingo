import { useEffect, useRef, useState } from "react";

import { getTeachers } from "@/services/firebase";

import { TeacherList } from "@/components/TeacherList/TeacherList";
import * as SC from "./TeachersPage.styled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const lastKey = useRef();

  useEffect(() => {
    (async () => {
      try {
        const data = await getTeachers(lastKey.current);

        const keys = Object.keys(data);
        const loadMore = keys.length >= 4;
        lastKey.current = keys[keys.length - 1];

        setTeachers((prevState) => [...prevState, ...Object.entries(data)]);
        setLoadMore(loadMore);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <SC.PageWrapper>
      {teachers && <TeacherList teachers={teachers} />}
      {loadMore && (
        <SC.LoadMoreBtn type="button" onClick={handleLoadMore}>
          Loading
        </SC.LoadMoreBtn>
      )}
    </SC.PageWrapper>
  );
};

export default TeachersPage;
