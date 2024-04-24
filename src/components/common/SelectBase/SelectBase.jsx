import Select from "react-select";

import { selectStyles } from "./SelectBase.styled";

export const SelectBase = ({
  name,
  placeholder,
  options,
  controlWidth,
  menuHeight,
  onChange,
}) => {
  return (
    <Select
      name={name}
      styles={{
        ...selectStyles,
        control: (baseStyles, state) => ({
          ...selectStyles.control(baseStyles, state),
          width: controlWidth,
        }),
        menu: (baseStyles, state) => ({
          ...selectStyles.menu(baseStyles, state),
          height: menuHeight,
        }),
      }}
      options={options}
      isClearable={true}
      placeholder={placeholder}
      onChange={(selected) => onChange(selected?.value || "")}
    />
  );
};
