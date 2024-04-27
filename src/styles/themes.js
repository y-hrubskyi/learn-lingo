export const baseTheme = Object.freeze({
  colors: {
    primaryBg: "#fff",
    secondaryBg: "#f8f8f8",
    primary: (alpha = 1) => `rgba(18, 20, 23, ${alpha})`,
    label: "#8a8a89",
    green: "#38cd3e",
    star: "#ffc531",
  },
  radii: {
    btn: "12px",
    input: "12px",
    select: "14px",
    card: "24px",
    modal: "30px",
    avatar: "100px",
  },
  transition: (prop = "") => `${prop} 250ms linear`,
  spacing: (value) => `${value * 4}px`,
});

export const Themes = Object.freeze({
  YELLOW: {
    name: "yellow",
    accent: "#f4c550",
    hover: "#fbe9ba",
  },
  GREEN: {
    name: "green",
    accent: "#9fbaae",
    hover: "#cbded3",
  },
  BLUE: {
    name: "blue",
    accent: "#9fb7ce",
    hover: "#bfd6ea",
  },
  CORAL: {
    name: "coral",
    accent: "#e0a39a",
    hover: "#f2c0bd",
  },
  PEACH: {
    name: "peach",
    accent: "#f0aa8d",
    hover: "#f4c8ba",
  },
});

const yellowTheme = {
  ...baseTheme,
  name: Themes.YELLOW.name,
  colors: {
    ...baseTheme.colors,
    accent: Themes.YELLOW.accent,
    hover: Themes.YELLOW.hover,
  },
};

const greenTheme = {
  ...baseTheme,
  name: Themes.GREEN.name,
  colors: {
    ...baseTheme.colors,
    accent: Themes.GREEN.accent,
    hover: Themes.GREEN.hover,
  },
};

const blueTheme = {
  ...baseTheme,
  name: Themes.BLUE.name,
  colors: {
    ...baseTheme.colors,
    accent: Themes.BLUE.accent,
    hover: Themes.BLUE.hover,
  },
};

const coralTheme = {
  ...baseTheme,
  name: Themes.CORAL.name,
  colors: {
    ...baseTheme.colors,
    accent: Themes.CORAL.accent,
    hover: Themes.CORAL.hover,
  },
};

const peachTheme = {
  ...baseTheme,
  name: Themes.PEACH.name,
  colors: {
    ...baseTheme.colors,
    accent: Themes.PEACH.accent,
    hover: Themes.PEACH.hover,
  },
};

export const getTheme = (themeName) => {
  switch (themeName) {
    case Themes.YELLOW.name:
      return yellowTheme;
    case Themes.GREEN.name:
      return greenTheme;
    case Themes.BLUE.name:
      return blueTheme;
    case Themes.CORAL.name:
      return coralTheme;
    case Themes.PEACH.name:
      return peachTheme;
    default:
      return yellowTheme;
  }
};
