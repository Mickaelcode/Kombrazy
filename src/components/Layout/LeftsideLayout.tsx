import React from "react";

type MenuOption = {
  label: string;
  value: string;
};

type LeftsideLayoutProps = {
  options: MenuOption[];
  onMenuSelect: (option: string) => void;
};

export const LeftsideLayout: React.FC<LeftsideLayoutProps> = ({
  options,
  onMenuSelect,
}) => {
  return (
    <div>
      <ul>
        {options.map((option) => (
          <li key={option.value} onClick={() => onMenuSelect(option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
