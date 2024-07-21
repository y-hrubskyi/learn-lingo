import styled from 'styled-components';

const borderSVG = ({ theme }) => {
  return `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' rx='${theme.radii.modal}' ry='${theme.radii.modal}' style='fill: none; stroke: ${theme.colors.accent}; stroke-width: 1.5; stroke-dasharray: 15 15'/></svg>`;
};

export const FeaturesSection = styled.section`
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(8)};
`;

export const FeatureList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(10)};

  border-radius: ${p => p.theme.radii.modal};
  background-image: ${p =>
    `url("data:image/svg+xml;utf8,${encodeURIComponent(borderSVG(p))}")`};

  @media screen and (min-width: 768px) {
    row-gap: ${p => p.theme.spacing(10)};
    justify-content: space-evenly;
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(20)};
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: ${p => p.theme.spacing(25)};
    justify-content: space-between;
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(30)};
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`;

export const FeatureQty = styled.p`
  flex-shrink: 0;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primary()};
`;

export const FeatureProp = styled.p`
  min-width: 74px;
  max-width: 92px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primary(0.7)};
`;
