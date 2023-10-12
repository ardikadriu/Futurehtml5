import Image from "next/image";
import logo from "@/public/images/logo.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <a href="#" className="logo">
        <Image src={logo} alt="" />
      </a>
      <header>
        <h2>Future Imperfect</h2>
        <p>
          Another fine responsive site template by{" "}
          <a href="http://html5up.net">HTML5 UP</a>
        </p>
      </header>
    </section>
  );
};

export default Intro;
