import { useGlobalContext } from "../context";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsMoonFill className="toggle-icon" /> : <BsFillSunFill className="toggle-icon" />}
      </button>
    </section>
  );
};

export default ThemeToggle;
