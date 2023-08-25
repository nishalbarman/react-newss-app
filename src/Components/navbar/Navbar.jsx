import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileInputValue, setMobileInputValue] = useState("");
  const [sideMenuShow, setSideMenuShow] = useState(false);

  const navigate = useNavigate();

  const handleMobileSearchClick = () => {};

  const handleMobileSearchChange = (e) => {
    console.log(e.target.value);
    setMobileInputValue(e.target.value);
  };

  const handleMobileMenu = () => {
    setSideMenuShow(true);
  };

  const handleNavClose = () => {
    setSideMenuShow(false);
  };

  return (
    <div id="navbar" className={styles.navbar}>
      {!sideMenuShow || (
        <div
          onClick={() => {
            setSideMenuShow(false);
          }}
          className={styles.black_screen_cover}></div>
      )}
      <div className={styles.menu_mobile}>
        <i
          onClick={handleMobileMenu}
          id={styles.side_menu}
          className="fa-solid fa-bars fa-xl"
          style={{ color: "#000000" }}></i>
        <div
          id="displayMenu"
          className={`${styles.menu_items_outer}`}
          style={{
            display: sideMenuShow ? "block" : "none",
            left: sideMenuShow ? "0" : "-80%",
          }}>
          <div className={styles.logo_new}>
            <img
              src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
              alt="logo"
              className={sideMenuShow ? styles.fadeIn : styles.fadeOut}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            />
            <i
              id={styles.close}
              className="fa-solid fa-xmark fa-xl"
              style={{ color: "#000000" }}
              onClick={handleNavClose}></i>
          </div>
          <div className={`${styles.links} ${styles.menu_links}`} id="link">
            <div className={styles.horizontal_line}></div>
            <div className={styles.mobile_menu_search}>
              <input
                type="text"
                placeholder="Search for news ..."
                onChange={handleMobileSearchChange}
              />
              <button onClick={handleMobileSearchClick}>Search</button>
            </div>
            <div className={styles.horizontal_line}></div>
            <Link to="/axom" className={styles.active}>
              অসম
            </Link>
            <div className={styles.horizontal_line}></div>
            <Link to="/country">দেশ</Link>
            <div className={styles.horizontal_line}></div>
            <Link to="/crime">অপৰাধনামা</Link>
            <div className={styles.horizontal_line}></div>
            <Link to="/entertainment">মনোৰঞ্জন</Link>
            <div className={styles.horizontal_line}></div>
            <Link to="/bussiness">ব্যৱসায়</Link>
            <div className={styles.horizontal_line}></div>
            <Link to="/sports">ক্ৰীড়া</Link>
            <div className={styles.horizontal_line}></div>
            {/* <Link to="#">জীৱনশৈলী</Link> */}
            {/* <div className={styles.horizontal_line}></div> */}
            <Link to="/technology">প্ৰযুক্তি</Link>
            <div className={styles.horizontal_line}></div>
          </div>
          <div className={`${styles.follow_icons} ${styles.follow_menu}`}>
            <Link href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className={styles.social_icon}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className={styles.social_icon}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.news_logo} ${
          !sideMenuShow ? styles.fadeIn : styles.fadeOut
        }`}>
        <img
          src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
          alt="website-logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className={styles.second_half}>
        <div className={styles.search_box}>
          <div className={styles.search_box_outer}>
            <input
              type="text"
              placeholder="Search"
              id="search"
              className={styles.search}
              autoComplete="off"
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(0, 0, 0, 0.6)" }}></i>
          </div>
          <div className={styles.follow_icons}>
            <Link href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className={styles.social_icon}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className={styles.social_icon}
              />
            </Link>
          </div>
        </div>
        <div className={styles.links} id="link">
          <Link to="/axom">অসম</Link>
          <Link to="/country">দেশ</Link>
          <Link to="/crime">অপৰাধনামা</Link>
          <Link to="/entertainment">মনোৰঞ্জন</Link>
          <Link to="/bussiness">ব্যৱসায়</Link>
          <Link to="/sports">ক্ৰীড়া</Link>
          {/* <Link to="/">জীৱনশৈলী</Link> */}
          <Link to="/technology">প্ৰযুক্তি</Link>
        </div>
      </div>
    </div>
  );
}
