import Image from "next/image";
import pic08 from "@/public/images/pic08.jpg";
import pic09 from "@/public/images/pic09.jpg";
import pic10 from "@/public/images/pic10.jpg";
import pic11 from "@/public/images/pic11.jpg";
import pic12 from "@/public/images/pic12.jpg";

const Postlists = () => {
  return (
    <section>
      <ul className="posts">
        <li>
          <article>
            <header>
              <h3>
                <a href="single.html">Lorem ipsum fermentum ut nisl vitae</a>
              </h3>
              <time className="published" dateTime="2015-10-20">
                October 20, 2015
              </time>
            </header>
            <a href="single.html" className="image">
              <Image src={pic08} alt="" />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="single.html">
                  Convallis maximus nisl mattis nunc id lorem
                </a>
              </h3>
              <time className="published" dateTime="2015-10-15">
                October 15, 2015
              </time>
            </header>
            <a href="single.html" className="image">
              <Image src={pic09} alt="" />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="single.html">
                  Euismod amet placerat vivamus porttitor
                </a>
              </h3>
              <time className="published" dateTime="2015-10-10">
                October 10, 2015
              </time>
            </header>
            <a href="single.html" className="image">
              <Image src={pic10} alt="" />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="single.html">
                  Magna enim accumsan tortor cursus ultricies
                </a>
              </h3>
              <time className="published" dateTime="2015-10-08">
                October 8, 2015
              </time>
            </header>
            <a href="single.html" className="image">
              <Image src={pic11} alt="" />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="single.html">Congue ullam corper lorem ipsum dolor</a>
              </h3>
              <time className="published" dateTime="2015-10-06">
                October 7, 2015
              </time>
            </header>
            <a href="single.html" className="image">
              <Image src={pic12} alt="" />
            </a>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Postlists;
