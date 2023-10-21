import Image from "next/image";
import Avatar from "@/public/images/avatar.jpg";
import pic03 from "@/public/images/pic03.jpg";

const Thirdpage = () => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <a href="single.html">Euismod et accumsan</a>
          </h2>
          <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
        </div>
        <div className="meta">
          <time className="published" dateTime="2015-10-22">
            October 22, 2015
          </time>
          <a href="#" className="author">
            <span className="name">Jane Doe</span>
            <Image src={Avatar} alt="" />
          </a>
        </div>
      </header>
      <a href="single.html" className="image featured">
        <Image src={pic03} alt="" />
      </a>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
        accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
        corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
        condimentum, porta lectus vitae, ultricies congue gravida diam non
        fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis
        suscipit. Quisque vestibulum rhoncus ligula.
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

export default Thirdpage;
