import { useEffect, useState } from 'react';

import { useAuth } from '~/hooks/useAuth';
import { subscribeFavoriteKeys } from '~/services/firebase';

import { TeacherItem } from '~/components/TeacherItem/TeacherItem';
import * as SC from './TeacherList.styled';

export const TeacherList = ({ teachers, level }) => {
  const [favoriteKeys, setFavoriteKeys] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = subscribeFavoriteKeys(currentUser.uid, setFavoriteKeys);

    return unsubscribe;
  }, [currentUser]);

  return (
    <SC.TeacherList>
      {teachers.map(teacher => (
        <TeacherItem
          key={teacher.id}
          teacher={teacher}
          isFavorite={currentUser && favoriteKeys?.includes(teacher.id)}
          userId={currentUser?.uid}
          level={level}
        />
      ))}
    </SC.TeacherList>
  );
};
