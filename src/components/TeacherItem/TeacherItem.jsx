import { useState } from "react";

import * as SC from "./TeacherItem.styled";

const mapListWithSeparator = (arr, separator) =>
  arr.map((item, index, array) =>
    index === array.length - 1 ? item : item + separator
  );

export const TeacherItem = ({ teacher }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true);
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
            <SC.HeartBtn type="button" onClick={() => {}}>
              <SC.HeartIcon />
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
          <SC.ActionBtn type="button" onClick={() => {}}>
            Book trial lesson
          </SC.ActionBtn>
        )}
      </SC.TeacherInfoWrapper>
    </SC.TeacherCard>
  );
};
