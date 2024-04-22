import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { addToFavorites, removeFromFavorites } from "@/services/firebase";

import { BookModal } from "@/components/BookModal/BookModal";
import { ToastMessage } from "@/components/common/ToastMessage/ToastMessage.styled";
import * as SC from "./TeacherItem.styled";

const mapListWithSeparator = (arr, separator) =>
  arr.map((item, index, array) =>
    index === array.length - 1 ? item : item + separator
  );

export const TeacherItem = ({ teacher, teacherId, isFavorite, userId }) => {
  const [readMore, setReadMore] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isFavoriteActionLoading, setIsFavoriteActionLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBookOpen ? "hidden" : "unset";
  }, [isBookOpen]);

  const handleFavoriteClick = async () => {
    try {
      if (!userId) return;

      setIsFavoriteActionLoading(true);

      let favoriteActionPromise, loadingMessage, resultMessage;
      if (isFavorite) {
        favoriteActionPromise = removeFromFavorites(userId, teacherId);
        loadingMessage = "Removing...";
        resultMessage = "Removed from favorites";
      } else {
        favoriteActionPromise = addToFavorites(userId, teacherId);
        loadingMessage = "Adding...";
        resultMessage = "Added to favorites";
      }

      await toast.promise(favoriteActionPromise, {
        loading: <ToastMessage>{loadingMessage}</ToastMessage>,
        success: <ToastMessage>{resultMessage}</ToastMessage>,
        error: <ToastMessage>Oops.. Something went wrong</ToastMessage>,
      });
    } catch (error) {
      // handled in toast.promise
    } finally {
      setIsFavoriteActionLoading(false);
    }
  };

  const handleReadMore = () => {
    setReadMore(true);
  };

  const toggleBookModal = () => {
    setIsBookOpen((prevState) => !prevState);
  };

  return (
    <SC.TeacherCard>
      <SC.TeacherAvatarWrapper>
        <SC.TeacherAvatar
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname} avatar`}
        />
        <SC.TeacherStatus />
      </SC.TeacherAvatarWrapper>
      <SC.TeacherInfoWrapper>
        <SC.HeaderContent>
          <SC.LeftHeaderBlock>
            <SC.Label>Languages</SC.Label>
            <SC.TeacherFullName>
              {teacher.name} {teacher.surname}
            </SC.TeacherFullName>
          </SC.LeftHeaderBlock>
          <SC.RightHeaderBlock>
            <SC.AboutTeacher>
              <SC.TeacherInfo>
                <SC.BookIcon />
                <SC.Info>Lessons online</SC.Info>
              </SC.TeacherInfo>
              <SC.TeacherInfo>
                <SC.Info>Lessons done: {teacher.lessons_done}</SC.Info>
              </SC.TeacherInfo>
              <SC.TeacherInfo>
                <SC.StarIcon />
                <SC.Info>Rating: {teacher.rating}</SC.Info>
              </SC.TeacherInfo>
              <SC.TeacherInfo>
                <SC.Info>
                  Price / 1 hour: <SC.Price>{teacher.price_per_hour}$</SC.Price>
                </SC.Info>
              </SC.TeacherInfo>
            </SC.AboutTeacher>
            <SC.HeartBtn
              type="button"
              onClick={handleFavoriteClick}
              disabled={isFavoriteActionLoading}
            >
              <SC.HeartIcon data-is-favorite={isFavorite} />
            </SC.HeartBtn>
          </SC.RightHeaderBlock>
        </SC.HeaderContent>
        <div>
          <SC.InfoWrapper>
            <SC.Info>
              <SC.Label>Speaks: </SC.Label>
              <SC.LanguageList>
                {mapListWithSeparator(teacher.languages, ", ")}
              </SC.LanguageList>
            </SC.Info>
            <SC.Info>
              <SC.Label>Lesson Info: </SC.Label>
              {teacher.lesson_info}
            </SC.Info>
            <SC.Info>
              <SC.Label>Conditions: </SC.Label>
              {mapListWithSeparator(teacher.conditions, " ")}
            </SC.Info>
          </SC.InfoWrapper>
          {readMore ? (
            <div>
              <SC.Experience>{teacher.experience}</SC.Experience>
              <SC.ReviewList>
                {teacher.reviews.map((review, index) => (
                  <li key={index}>
                    <SC.ReviewerInfo>
                      <SC.ReviewerAvatar>
                        {review.reviewer_name[0]}
                      </SC.ReviewerAvatar>
                      <div>
                        <SC.Label>{review.reviewer_name}</SC.Label>
                        <SC.ReviewerRating>
                          <SC.StarIcon />
                          {review.reviewer_rating.toFixed(1)}
                        </SC.ReviewerRating>
                      </div>
                    </SC.ReviewerInfo>
                    <SC.Info>{review.comment}</SC.Info>
                  </li>
                ))}
              </SC.ReviewList>
            </div>
          ) : (
            <SC.ReadMoreBtn type="button" onClick={handleReadMore}>
              Read more
            </SC.ReadMoreBtn>
          )}
        </div>
        <SC.LevelList>
          {teacher.levels.map((level) => (
            <SC.LevelItem
              key={level}
              data-is-filtered={"A1 Beginner" === level}
            >
              #{level}
            </SC.LevelItem>
          ))}
        </SC.LevelList>
        {readMore && (
          <SC.ActionBtn type="button" onClick={toggleBookModal}>
            Book trial lesson
          </SC.ActionBtn>
        )}
      </SC.TeacherInfoWrapper>
      {isBookOpen && (
        <BookModal
          onClose={toggleBookModal}
          teacherName={teacher.name}
          teacherSurname={teacher.surname}
          teacherAvatar={teacher.avatar_url}
        />
      )}
    </SC.TeacherCard>
  );
};
