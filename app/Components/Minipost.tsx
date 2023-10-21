import Image from "next/image";
import avatar from "@/public/images/avatar.jpg";
import pic04 from "@/public/images/pic04.jpg";
import pic05 from "@/public/images/pic05.jpg";
import pic06 from "@/public/images/pic06.jpg";
import pic07 from "@/public/images/pic07.jpg";

const Minipost = () => {
  return (
    <section>
      <div className="mini-posts">
        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Vitae sed condimentum</a>
            </h3>
            <time className="published" dateTime="2015-10-20">
              October 20, 2015
            </time>
            <a href="#" className="author">
              <Image src={avatar} alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <Image src={pic04} alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Rutrum neque accumsan</a>
            </h3>
            <time className="published" dateTime="2015-10-19">
              October 19, 2015
            </time>
            <a href="#" className="author">
              <Image src={avatar} alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <Image src={pic05} alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Odio congue mattis</a>
            </h3>
            <time className="published" dateTime="2015-10-18">
              October 18, 2015
            </time>
            <a href="#" className="author">
              <Image src={avatar} alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <Image src={pic06} alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Enim nisl veroeros</a>
            </h3>
            <time className="published" dateTime="2015-10-17">
              October 17, 2015
            </time>
            <a href="#" className="author">
              <Image src={avatar} alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <Image src={pic07} alt="" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Minipost;
