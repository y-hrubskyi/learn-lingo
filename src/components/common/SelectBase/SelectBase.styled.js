import { baseTheme } from "@/styles/theme";

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    padding: `${baseTheme.spacing(3.5)} ${baseTheme.spacing(4.5)}`,
    borderRadius: baseTheme.radii.input,
    cursor: "pointer",
    border: "none",
    boxShadow: "none",
    backgroundColor: baseTheme.colors.primaryBg,
    "& .css-tj5bde-Svg": {
      transform: state.menuIsOpen && "rotate(180deg)",
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.11111,
    color: baseTheme.colors.primary(),
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: "inherit",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: "inherit",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    color: baseTheme.colors.primary(0.25),
    transition: baseTheme.transition("color"),
    "&:hover": {
      color: baseTheme.colors.primary(),
    },
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    color: baseTheme.colors.primary(),
    "&:hover": {
      color: baseTheme.colors.primary(),
    },
    "& .css-tj5bde-Svg": {
      transition: baseTheme.transition("transform"),
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: baseTheme.spacing(1),
    marginBottom: 0,
    paddingTop: baseTheme.spacing(2.5),
    paddingRight: baseTheme.spacing(2),
    paddingBottom: baseTheme.spacing(2.5),
    zIndex: 10,
    backgroundColor: baseTheme.colors.primaryBg,
    borderRadius: baseTheme.radii.select,
    boxShadow: "none",
    border: `1px solid ${baseTheme.colors.primary(0.05)}`,
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    height: "100%",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      background: baseTheme.colors.primary(0.05),
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: baseTheme.spacing(1),
    paddingBottom: baseTheme.spacing(1),
    paddingLeft: baseTheme.spacing(4.5),
    paddingRight: baseTheme.spacing(4.5),
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.1111,
    color: baseTheme.colors.primary(state.isSelected ? 1 : 0.2),
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: baseTheme.transition("color"),
    "&:hover": {
      color: baseTheme.colors.primary(),
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  }),
};
