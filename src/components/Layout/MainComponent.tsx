import React, { useState } from "react";
import { Layout } from "./Layout";
import { LeftsideLayout } from "./LeftsideLayout";
import { RightsideLayout } from "./RightSideLayout";
import ItemCard from "../ItemCard";

const MainComponent = () => {
  const [middleContent, setMiddleContent] = useState<React.ReactNode>(<></>);

  const menuOptions = [
    { label: "Cards", value: "Cards" },
    { label: "Reports", value: "reports" },
    { label: "Settings", value: "settings" },
  ];

  const navigationOptions = [
    { label: "Documentation", value: "documentation" },
    { label: "Code", value: "code" },
    { label: "Exemple", value: "exemple" },
  ];

  const handleMenuSelect = (option: string) => {
    switch (option) {
      case "Cards":
        setMiddleContent(
          <ItemCard
            title="My title"
            subtitle="This is my subtitle"
            status="Accepted"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum eius dicta. Ab est quasi eius sed consequatur laborum, is"
          />,
        );
        break;
      case "reports":
        setMiddleContent(<div>Reports Content</div>);
        break;
      case "settings":
        setMiddleContent(<div>Settings Content</div>);
        break;
      default:
        setMiddleContent(<div>Select an option from the menu</div>);
    }
  };

  return (
    <Layout
      leftContent={
        <LeftsideLayout options={menuOptions} onMenuSelect={handleMenuSelect} />
      }
      middleContent={middleContent}
      rightContent={<RightsideLayout options={navigationOptions} />}
    />
  );
};

export default MainComponent;
