import React from "react";
import "../MyWork/MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { motion } from "framer-motion";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/1photo.png";
import p3 from "../../assets/po1.png";
import p4 from "../../assets/fd_1.png";
import p5 from "../../assets/expensetracker.png";

const MyWork = () => {
  return (
    <div>
      <div id="work" className="mywork">
        <div className="mywork-title">
          <h1>My Latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          

<div class="container">
  
  <a className="nav-link" href="https://food-delivery-eight-phi.vercel.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={p4}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Foodie Fix | food delivery web</h1>
            <p>
            An online food ordering platform with diverse menu options and
                seamless home delivery. Features: Cart management, address
                updates, real-time order tracking. Payments: Cash on delivery,
                Razorpay. Google login for quick access. Admin dashboard for
                users, orders, income overview, order status management, and
                data insights. Tech Stack: Redux Toolkit, secure authentication,
                responsive design.
            </p>
            
          </div>
        </div>
      </div>
  </a>

  <a className="nav-link" href="https://github.com/Dhairya061202/Expense-Tracker-Asp.net-Core" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={p5}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Expense Tracker Website</h1>
            <p>
            The Expense Tracker is a web application built using ASP.NET Core MVC, HTML, CSS, and SQL Server to help users manage their finances efficiently. It features a dashboard displaying total income, total expenses, balance amount, and recent transactions, with interactive charts for data visualization. Users can add, edit, and delete categories for tracking income and expenses, and manage transactions by creating, updating, or removing them. The app supports up to 20 categories and 500 transactions, offering a responsive and intuitive user experience.
            </p>
            
          </div>
        </div>
      </div>
  </a>


  <a className="nav-link" href="https://clothify-commerce.netlify.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={p1}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Clothify | fashion e-commerce</h1>
            <p>
            Clothify is a responsive e-commerce website for fashion clothes,
                built using the MERN stack. Features include secure user
                authentication, a shopping cart, detailed product listings,
                customer reviews, and sections for men, women, and kids. Explore
                popular items and stay updated with new collections. Check out
                Clothify and share your feedback!
            </p>
            
          </div>
        </div>
      </div>
  </a>

  <a className="nav-link" href="https://mobile-dekho.netlify.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={p2}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Mobile-Dekho | Mobile Store</h1>
            <p>
            📱Explore our online mobile shop with a range of top-brand
                phones, TVs, laptops, audio devices, and more. 🖥️ Built with
                HTML, CSS, JavaScript, and React.js for a seamless experience.
                Our responsive design ensures easy access on all devices. 🛒
                Check out Mobile-Dekho and find your next electronic companion
                today!
            </p>
            
          </div>
        </div>
      </div>
  </a>

  <a className="nav-link" href="https://cinemomovies.netlify.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={p3}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Cinemo 🎬 | movies IMDb ratings</h1>
            <p>
            I'm excited to introduce my React project: Cinemo 🎬 | An online
                movies IMDb ratings web app that I developed using ReactJS and
                the TMDB API (MovieDB API). This app provides an easy and
                efficient way to dive in and discover the IMDb ratings of your
                favorite movies, all in one place! 🌟
            </p>
            
          </div>
        </div>
      </div>
  </a>



</div>


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.1 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p5} alt="" />
              <h2>Expense Tracker Website</h2>
              <p>
              The Expense Tracker is a web application built using ASP.NET Core MVC, HTML, CSS, and SQL Server to help users manage their finances efficiently. It features a dashboard displaying total income, total expenses, balance amount, and recent transactions, with interactive charts for data visualization. Users can add, edit, and delete categories for tracking income and expenses, and manage transactions by creating, updating, or removing them. The app supports up to 20 categories and 500 transactions, offering a responsive and intuitive user experience.
              </p>
              <a
                href="https://github.com/Dhairya061202/Expense-Tracker-Asp.net-Core"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.1 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p1} alt="" />
              <h2>Clothify | fashion e-commerce</h2>
              <p>
                Clothify is a responsive e-commerce website for fashion clothes,
                built using the MERN stack. Features include secure user
                authentication, a shopping cart, detailed product listings,
                customer reviews, and sections for men, women, and kids. Explore
                popular items and stay updated with new collections. Check out
                Clothify and share your feedback!
              </p>
              <a
                href="https://clothify-commerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.15 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p2} alt="" />
              <h2>Mobile-Dekho | Mobile Store</h2>
              <p>
                📱Explore our online mobile shop with a range of top-brand
                phones, TVs, laptops, audio devices, and more. 🖥️ Built with
                HTML, CSS, JavaScript, and React.js for a seamless experience.
                Our responsive design ensures easy access on all devices. 🛒
                Check out Mobile-Dekho and find your next electronic companion
                today!
              </p>
              <a
                href="https://mobile-dekho.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.2 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p3} alt="" />
              <h2>Cinemo 🎬 | movies IMDb ratings </h2>
              <p>
                I'm excited to introduce my React project: Cinemo 🎬 | An online
                movies IMDb ratings web app that I developed using ReactJS and
                the TMDB API (MovieDB API). This app provides an easy and
                efficient way to dive in and discover the IMDb ratings of your
                favorite movies, all in one place! 🌟
              </p>
              <a
                href="https://cinemomovies.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
