import { TeacherItem } from "@/components/TeacherItem/TeacherItem";
import * as SC from "./TeacherList.styled";

export const TeacherList = ({ teachers }) => {
  return (
    <SC.TeacherList>
      {teachers.map((teacher) => (
        <TeacherItem key={teacher.id} teacher={teacher} />
      ))}
    </SC.TeacherList>
  );
};
