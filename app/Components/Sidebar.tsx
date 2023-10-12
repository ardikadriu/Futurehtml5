import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import Minipost from "./Minipost";
import Postlists from "./Postlists";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Intro />
      <Minipost />
      <Postlists />
      <About />
      <Footer />
    </div>
  );
};

export default Sidebar;
