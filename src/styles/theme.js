export const theme = {
  colors: {
    primaryBg: "#fff",
    secondaryBg: "#f8f8f8",
    primary: (alpha = 1) => `rgba(18, 20, 23, ${alpha})`,
    label: "#8a8a89",
    green: "#38cd3e",
    star: "#ffc531",
    accent: "#f4c550",
    hover: "#fbe9ba",
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
};
