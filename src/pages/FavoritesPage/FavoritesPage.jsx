import { useEffect, useState } from 'react';

import { useAuth } from '~/hooks/useAuth';
import { subscribeFavoriteItems } from '~/services/firebase';

import { TeacherList } from '~/components/TeacherList/TeacherList';
import { Loader } from '~/components/common/Loader/Loader.styled';
import { Placeholder } from '~/components/common/Placeholder/Placeholder';
import * as SC from './FavoritesPage.styled';

const FavoritesPage = () => {
  const { currentUser } = useAuth();
  const [favoriteItems, setFavoriteItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeFavoriteItems(
      currentUser.uid,
      setFavoriteItems,
      setIsLoading,
      setError
    );

    return unsubscribe;
  }, [currentUser]);

  const showList = !isLoading && !error && favoriteItems;
  const showEmptyFavorites = !isLoading && !error && !favoriteItems;
  const showError = !isLoading && error;

  return (
    <SC.PageWrapper>
      {showList && <TeacherList teachers={favoriteItems} />}
      {isLoading && <Loader />}
      {showEmptyFavorites && (
        <Placeholder type="empty-favorites">
          Click the heart icon on the relevant piece of content, and you&apos;ll
          see it here next time you visit
        </Placeholder>
      )}
      {showError && (
        <Placeholder type="error">
          Sorry, we&apos;re having some technical issues (as you can see) try to
          refresh the page, sometime works :)
        </Placeholder>
      )}
    </SC.PageWrapper>
  );
};

export default FavoritesPage;
