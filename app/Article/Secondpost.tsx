import Image from "next/image";
import Pic02 from "@/public/images/pic03.jpg";
import avatar from "@/public/images/avatar.jpg";

const Secondpost = () => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <a href="single.html">
              Ultricies sed magna euismod enim vitae gravida
            </a>
          </h2>
          <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
        </div>
        <div className="meta">
          <time className="published" dateTime="2015-10-25">
            October 25, 2015
          </time>
          <a href="#" className="author">
            <span className="name">Jane Doe</span>
            <Image src={avatar} alt="" />
          </a>
        </div>
      </header>
      <a href="single.html" className="image featured">
        <Image src={Pic02} alt="" />
      </a>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
        accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
        corper.
      </p>
      <footer>
        <ul className="actions">
          <li>
            <a href="single.html" className="button large">
              Continue Reading
            </a>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a href="#" className="icon solid fa-heart">
              28
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-comment">
              128
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default Secondpost;
