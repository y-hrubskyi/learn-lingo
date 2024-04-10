import * as SC from "./Hero.styled";

export const Hero = () => {
  return (
    <SC.HeroSection>
      <SC.LeftWrapper>
        <SC.HeroTitle>
          Unlock your potential with the best{" "}
          <SC.AccentText>language</SC.AccentText> tutors
        </SC.HeroTitle>
        <SC.HeroDescription>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </SC.HeroDescription>
        <SC.GetStartedLink to="/teachers">Get started</SC.GetStartedLink>
      </SC.LeftWrapper>
      <SC.RightWrapper />
    </SC.HeroSection>
  );
};
