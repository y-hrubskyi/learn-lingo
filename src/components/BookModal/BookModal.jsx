import { bookSchema } from '@/constants/validation/bookSchema';
import { reasons } from '@/constants/reasons';

import { ModalBase } from '@/components/common/ModalBase/ModalBase';
import { BaseModalTitle } from '@/components/common/ModalBase/ModalBase.styled';
import { FormBase } from '@/components/common/FormBase/FormBase';
import { FieldsWrapper } from '@/components/common/FormBase/FormBase.styled';
import { FormField } from '@/components/common/FormField/FormField';
import { SubmitBtn } from '@/components/common/SubmitBtn/SubmitBtn';

import * as SC from './BookModal.styled.js';

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  reason: reasons[0].value
};

export const BookModal = ({
  isOpen,
  onClose,
  teacherName,
  teacherSurname,
  teacherAvatar
}) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} width="600px">
      <BaseModalTitle>Book trial lesson</BaseModalTitle>
      <SC.BookModalDescription>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </SC.BookModalDescription>
      <SC.TeacherInfo>
        <SC.TeacherAvatar
          src={teacherAvatar}
          alt={`${teacherName} ${teacherSurname} avatar`}
        />
        <SC.TeacherAvatarLegend>
          <SC.Label>Your teacher</SC.Label>
          <SC.TeacherFullName>
            {teacherName} {teacherSurname}
          </SC.TeacherFullName>
        </SC.TeacherAvatarLegend>
      </SC.TeacherInfo>
      <FormBase
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={bookSchema}
      >
        <FieldsWrapper>
          <SC.ReasonRadioLegend id="reason-group">
            What is your main reason for learning English?
          </SC.ReasonRadioLegend>
          <SC.ReasonRadioGroup role="group" aria-labelledby="reason-group">
            {reasons.map(reason => (
              <SC.ReasonRadioLabel key={reason.value}>
                <SC.ReasonRadioField
                  type="radio"
                  name="reason"
                  value={reason.value}
                />
                <SC.CustomRadioBtn />
                <SC.ReasonRadioSpan>{reason.label}</SC.ReasonRadioSpan>
              </SC.ReasonRadioLabel>
            ))}
          </SC.ReasonRadioGroup>
          <FormField placeholder="Full name" type="text" name="fullname" />
          <FormField placeholder="Email" type="email" name="email" />
          <FormField placeholder="Phone number" type="tel" name="phone" />
        </FieldsWrapper>
        <SubmitBtn>Book</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
