export const LayoutProps = {
  middleContent: () => {},
  RightContent: () => {},
};
export const Layout = ({ middleContent }) => {
  return (
    <div className="flex">
      <div>Left</div>
      <div>{middleContent}</div>
      <div> Right </div>
    </div>
  );
};
