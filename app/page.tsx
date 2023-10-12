import Menu from "./Sections/Menu";
import Main from "./Article/Main";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <main id="wrapper">
      <Menu />
      <Main />
      <Sidebar />
    </main>
  );
}
