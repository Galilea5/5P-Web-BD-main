import React from 'react';
import './style.css'; // Importar el archivo CSS

const Mymovielist: React.FC = () => {
  return (
    <>
      <header id="mainHeader" className="clearfix">
        <div className="wrapper">
          <h1 className="logo">Flix <span>Stream</span></h1>
          <a href="#" className="menu"><i className="fa fa-bars"></i></a>
          <nav id="mainNav">
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Guide</a>
            <a href="#">News</a>
          </nav>
        </div>
      </header>

      <section id="banner" className="clearfix">
        <div id="contentWrapper">
          <div id="mainPoster">
            <img src="http://static.rogerebert.com/uploads/movie/movie_poster/the-legend-of-tarzan-2016/large_6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg" alt="Tarzan movie poster" className="playMovie" />
          </div>
          <div id="content">
            <h2 className="title">Tarzan</h2>
            <div className="reviews">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star inactive"></i>
            </div>
            <p className="description">Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.</p>
            <p className="info">PG-13 <span>|</span> 1h 50min <span>|</span> Action, Adventure, Drama <span>|</span> 1 July 2016 (USA)</p>
          </div>
        </div>
      </section>

      <section id="topMovies" className="clearfix">
        <div className="wrapper">
          <header className="clearfix">
            <h2>Popular Movies</h2>
            <p className="viewMore">View All Movies</p>
          </header>

          <div className="row">
            <div className="poster">
              <img src="http://images.redbox.com/Images/EPC/Kiosk/6738.jpg" alt="The Wolf of Wall Street" />
              <h3 className="title">The Wolf of Wall Street</h3>
              <a className="posterInfo">R | 3h | Biography, Comedy, Crime</a>
            </div>

            <div className="poster">
              <img src="http://img.cinemablend.com/cb/c/3/3/9/8/6/c3398667f2175155aafa3cda77866bccbe21796adb96771f3643e99c01064919.jpg" alt="Xmen Apocalypse" />
              <h3 className="title">Xmen Apocalypse</h3>
              <a className="posterInfo">PG-13  |  144 min  |  Action, Adventure, Sci-Fi</a>
            </div>

            <div className="poster">
              <img src="http://cdn.collider.com/wp-content/uploads/2015/12/zootopia-movie-poster.jpg" alt="Zootopia" />
              <h3 className="title">Zootopia</h3>
              <a className="posterInfo">PG  |  108 min  |  Animation, Action, Adventure</a>
            </div>

            <div className="poster">
              <img src="https://popcornjunkie.files.wordpress.com/2016/03/poster.jpg" alt="Batman Vs Superman" />
              <h3 className="title">Batman Vs Superman</h3>
              <a className="posterInfo">PG-13  |  151 min  |  Action, Adventure, Sci-Fi</a>
            </div>

            <div className="poster">
              <img src="http://akns-images.eonline.com/eol_images/Entire_Site/201627/rs_634x940-160307074539-634.captain-america-civil-war-poster-chris-evans-robert-downey-jr.3716.jpg" alt="Captain America Civil War" />
              <h3 className="title">Captain America Civil War</h3>
              <a className="posterInfo">G-13  |  147 min  |  Action, Adventure, Sci-Fi</a>
            </div>

            <div className="poster">
              <img src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2014/11/interstellar-poster-21.jpg" alt="Interstellar" />
              <h3 className="title">Interstellar</h3>
              <a className="posterInfo">PG-13 | 2h 49min | Adventure, Drama, Sci-Fi</a>
            </div>
          </div>

        </div>
      </section>

      <section id="topShows" className="clearfix">
        <div className="wrapper">
          <header className="clearfix">
            <h2>Popular TV Shows</h2>
            <p className="viewMore">View All TV Shows</p>
          </header>

          <div className="row">
            <div className="poster">
              <img src="http://www.impawards.com/tv/posters/night_of.jpg" alt="The Night of" />
              <h3 className="title">The Night of</h3>
              <a className="posterInfo">TV-MA | 1h | Crime, Drama</a>
            </div>

            <div className="poster">
              <img src="https://s-media-cache-ak0.pinimg.com/564x/28/d0/b5/28d0b5e908e5eb981ed35ee1c4758bec.jpg" alt="The Flash" />
              <h3 className="title">The Flash</h3>
              <a className="posterInfo">TV-PG | 43min | Action, Adventure, Drama</a>
            </div>

            <div className="poster">
              <img src="http://www.flickeringmyth.com/wp-content/uploads/2016/06/Stranger-Things-Poster.jpg" alt="Stranger Things " />
              <h3 className="title">Stranger Things</h3>
              <a className="posterInfo">TV-14 | 55min | Drama, Horror, Mystery</a>
            </div>

            <div className="poster">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/93/76/8a/93768a0b766a5c8f2309e6c2811ef6b7.jpg" alt="Game of Thrones" />
              <h3 className="title">Game of Thrones</h3>
              <a className="posterInfo">TV-MA | 56min | Adventure, Drama, Fantasy</a>
            </div>

            <div className="poster">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/a5/09/53/a5095362f8dab0add0adb1715611765b.jpg" alt="Vikings" />
              <h3 className="title">Vikings</h3>
              <a className="posterInfo">TV-14 | 44min | Action, Drama, History</a>
            </div>

            <div className="poster">
              <img src="http://static.tvtropes.org/pmwiki/pub/images/teaser_poster_for_black_sails_4328.jpg" alt="Black Sails" />
              <h3 className="title">Black Sails</h3>
              <a className="posterInfo">TV-MA | 56min | Adventure, Drama</a>
            </div>
          </div>
        </div>
      </section>

      <section id="notification">
        <div className="notify">
          <h2>Want more movies and TV shows?<br />Sign up for an Email notification</h2>
        </div>
        <div className="yourInfo">
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email Address" />
          <button className="btn">Subscribe</button>
        </div>
      </section>

      <footer>
        <p className="logo">FLIX <span>STREAM</span></p>
        <p className="copyright">&copy; 2016 Flix Stream. All Rights Reserved.</p>
        <div className="links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Mymovielist;