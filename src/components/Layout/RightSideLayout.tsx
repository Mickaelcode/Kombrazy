import React from "react";

type NavigationOption = {
  label: string;
  value: string;
};

type RightsideLayoutProps = {
  options: NavigationOption[];
};

export const RightsideLayout: React.FC<RightsideLayoutProps> = ({
  options,
}) => {
  return (
    <div>
      <h3>Navigation</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};
