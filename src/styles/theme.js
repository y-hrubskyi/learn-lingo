const baseTheme = Object.freeze({
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
  },
  transition: (prop = "") => `${prop} 250ms linear`,
  spacing: (value) => `${value * 4}px`,
});

export const yellowTheme = {
  ...baseTheme,
  name: "yellow",
  colors: {
    ...baseTheme.colors,
    accent: "#f4c550",
    hover: "#fbe9ba",
  },
};

export const greenTheme = {
  ...baseTheme,
  name: "green",
  colors: {
    ...baseTheme.colors,
    accent: "#9fbaae",
    hover: "#cbded3",
  },
};

export const blueTheme = {
  ...baseTheme,
  name: "blue",
  colors: {
    ...baseTheme.colors,
    accent: "#9fb7ce",
    hover: "#bfd6ea",
  },
};

export const coralTheme = {
  ...baseTheme,
  name: "coral",
  colors: {
    ...baseTheme.colors,
    accent: "#e0a39a",
    hover: "#f2c0bd",
  },
};

export const peachTheme = {
  ...baseTheme,
  name: "peach",
  colors: {
    ...baseTheme.colors,
    accent: "#f0aa8d",
    hover: "#f4c8ba",
  },
};
