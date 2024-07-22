import * as SC from './FeaturesSection.styled';

const featuresList = [
  { prop: 'Experienced tutors', qty: 32000 },
  { prop: '5-star tutor reviews', qty: 300000 },
  { prop: 'Subjects taught', qty: 120 },
  { prop: 'Tutor nationalities', qty: 200 }
];

export const FeaturesSection = () => {
  return (
    <SC.FeaturesSection>
      <SC.FeatureList>
        {featuresList.map(feature => (
          <SC.FeatureItem key={feature.prop}>
            <SC.FeatureQty>
              {feature.qty.toLocaleString('en-US')} +
            </SC.FeatureQty>
            <SC.FeatureProp>{feature.prop}</SC.FeatureProp>
          </SC.FeatureItem>
        ))}
      </SC.FeatureList>
    </SC.FeaturesSection>
  );
};
