import styled from "styled-components";

const borderSVG = ({ theme }) => {
  return `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' rx='${theme.radii.modal}' ry='${theme.radii.modal}' style='fill: none; stroke: ${theme.colors.accent}; stroke-width: 1.5; stroke-dasharray: 15 15'/></svg>`;
};

export const FeaturesSection = styled.section`
  padding-top: ${(p) => p.theme.spacing(5)};
  padding-bottom: ${(p) => p.theme.spacing(8)};
`;

export const FeatureList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(25)};
  height: 116px;

  border-radius: ${(p) => p.theme.radii.modal};
  background-image: ${(p) =>
    `url("data:image/svg+xml;utf8,${encodeURIComponent(borderSVG(p))}")`};
`;

export const FeatureItem = styled.li`
  display: flex;
  gap: ${(p) => p.theme.spacing(4)};
`;

export const FeatureQty = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};
`;

export const FeatureProp = styled.p`
  min-width: 74px;
  max-width: 92px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary(0.7)};
`;
