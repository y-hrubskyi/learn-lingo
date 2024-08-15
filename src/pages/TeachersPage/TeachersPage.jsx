import { useEffect, useRef, useState } from 'react';

import { getTeachers } from '~/services/firebase';

import { SearchBar } from '~/components/SearchBar/SearchBar';
import { TeacherList } from '~/components/TeacherList/TeacherList';
import { Loader } from '~/components/common/Loader/Loader.styled';
import { Placeholder } from '~/components/common/Placeholder/Placeholder';
import * as SC from './TeachersPage.styled';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastVisible = useRef();
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const filters = { language, level, price };
        const data = await getTeachers(lastVisible.current, filters);

        const teachers = data.map(doc => ({ ...doc.data(), id: doc.id }));
        const loadMore = teachers.length >= 4;

        if (data.length) {
          lastVisible.current = data[data.length - 1];
        }

        setTeachers(prevState => [...prevState, ...teachers]);
        setLoadMore(loadMore);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, language, level, price]);

  const updateFilter = setFilter => {
    return value => {
      setFilter(value);
      setTeachers([]);
      setPage(1);
      setLoadMore(false);
      lastVisible.current = null;
    };
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const listIsEmpty = teachers.length === 0;
  const showList = !error && !listIsEmpty;
  const showLoadMore = !isLoading && !error && loadMore;
  const showNoData = !isLoading && !error && !loadMore && listIsEmpty;
  const showError = !isLoading && error;

  return (
    <SC.PageWrapper>
      <SearchBar
        setLanguage={value => updateFilter(setLanguage)(value)}
        setLevel={value => updateFilter(setLevel)(value)}
        setPrice={value => updateFilter(setPrice)(value)}
      />
      {showList && <TeacherList teachers={teachers} level={level} />}
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
