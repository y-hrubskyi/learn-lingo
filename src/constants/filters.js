const languages = [
  'English',
  'French',
  'German',
  'Italian',
  'Korean',
  'Mandarin Chinese',
  'Polish',
  'Spanish',
  'Ukrainian',
  'Vietnamese'
];

const levels = [
  'A1 Beginner',
  'A2 Elementary',
  'B1 Intermediate',
  'B2 Upper-Intermediate',
  'C1 Advanced',
  'C2 Proficient'
];

const maxPrice = 50;

export const languageOptions = languages.map(language => ({
  value: language,
  label: language
}));

export const levelOptions = levels.map(level => ({
  value: level,
  label: level
}));

export const priceOptions = Array.from(
  { length: maxPrice / 10 },
  (_, index) => ({
    value: (index + 1) * 10,
    label: (index + 1) * 10
  })
);
