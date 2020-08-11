import React from "react";

// Assets
import logo from "../../assets/img/Logo Feature.png";
import facebook from "../../assets/svg/facebook2.svg";
import instagram from "../../assets/svg/instagram.svg";
import youtube from "../../assets/svg/youtube.svg";

// Components
import YouTubePlayer from "../../components/YouTubePlayer/index";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      {/* logo */}
      <div className="logo-box">
        <img className="logo-box__img" src={logo} alt="" />
      </div>

      <YouTubePlayer />

      {/* heading */}
      <h1 className="heading">website coming soon</h1>

      <p className="lead-text">Follow us</p>

      {/* icon-links */}
      <div className="icon">
        {/* facebook */}
        <div className="icon__btn">
          <a
            href="https://www.facebook.com/permalink.php?id=113405490231248&story_fbid=173160854255711"
            className="icon__link"
          >
            <img className="icon__link" src={facebook} alt="" />
          </a>
        </div>
        {/* instagram */}
        <div className="icon__btn">
          <a
            href="https://www.instagram.com/1lifecycle/?hl=en"
            className="icon__link"
          >
            <img className="icon__link" src={instagram} alt="" />
          </a>
        </div>
        {/* youtube */}
        <div className="icon__btn">
          <a
            href="https://www.youtube.com/channel/UCJ8RECOGT587v4hGXeiNRmg"
            className="icon__link"
          >
            <img className="icon__link youtube" src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
