import { useEffect, useState } from "react";

import { getTeachers } from "@/services/firebase";

import { TeacherList } from "@/components/TeacherList/TeacherList";
import * as SC from "./TeachersPage.styled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTeachers();
      setTeachers(Object.entries(data));
    })();
  }, []);

  return (
    <SC.PageWrapper>
      {teachers && <TeacherList teachers={teachers} />}
    </SC.PageWrapper>
  );
};

export default TeachersPage;
