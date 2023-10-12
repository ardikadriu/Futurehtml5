const Minipost = () => {
  return (
    <section>
      <div className="mini-posts">
        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Vitae sed condimentum</a>
            </h3>
            <time className="published" datetime="2015-10-20">
              October 20, 2015
            </time>
            <a href="#" className="author">
              <img src="images/avatar.jpg" alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <img src="images/pic04.jpg" alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Rutrum neque accumsan</a>
            </h3>
            <time className="published" datetime="2015-10-19">
              October 19, 2015
            </time>
            <a href="#" className="author">
              <img src="images/avatar.jpg" alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <img src="images/pic05.jpg" alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Odio congue mattis</a>
            </h3>
            <time className="published" datetime="2015-10-18">
              October 18, 2015
            </time>
            <a href="#" className="author">
              <img src="images/avatar.jpg" alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <img src="images/pic06.jpg" alt="" />
          </a>
        </article>

        <article className="mini-post">
          <header>
            <h3>
              <a href="single.html">Enim nisl veroeros</a>
            </h3>
            <time className="published" datetime="2015-10-17">
              October 17, 2015
            </time>
            <a href="#" className="author">
              <img src="images/avatar.jpg" alt="" />
            </a>
          </header>
          <a href="single.html" className="image">
            <img src="images/pic07.jpg" alt="" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Minipost;
