import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import { subscribeFavoriteItems } from "@/services/firebase";

import { TeacherList } from "@/components/TeacherList/TeacherList";

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const unsubscribe = subscribeFavoriteItems(
      currentUser.uid,
      setFavoriteItems
    );

    return unsubscribe;
  }, [currentUser]);

  return favoriteItems && <TeacherList teachers={favoriteItems} />;
};

export default FavoritesPage;
