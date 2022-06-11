import InfoHeader from "./info";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <header className="bg-secondary">
      <InfoHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
