import { TeacherItem } from "@/components/TeacherItem/TeacherItem";
import * as SC from "./TeacherList.styled";

export const TeacherList = ({ teachers }) => {
  return (
    <SC.TeacherList>
      {teachers.map(([key, teacher]) => (
        <TeacherItem key={key} teacher={teacher} />
      ))}
    </SC.TeacherList>
  );
};
