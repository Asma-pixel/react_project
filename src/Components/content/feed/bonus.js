import React from "react";
function Bonus({ bon }) {
  return (
    <div className="box-bigger">
      <div className="second-wrap-of-box">
        <div className="first-content">
          <div className="profiletitle">
            <div className="image-circle"></div>
            <span className="title-name">Monica Bellucci</span>
          </div>
          <form className="parent-of-options-and-conditions">
            <h2 className="condition">just now</h2>
            <img className="option" src="img/opt.svg" />
          </form>
        </div>
        <div className="wrap-first-text">
          <div className="first-block-text">
            <span className="first-block-text first-block-text-1st">
              +5
              <span className="first-block-text first-block-text-1st-normal">
                to{" "}
              </span>
              <a
                className="first-block-text first-block-text first-block-text-1st first-block-text first-block-text-1st-link"
                href=""
              >
                alex.woods
              </a>
            </span>
            <p class="first-block-text first-block-text-2nd">
              Thank you for the help with coffee machine
            </p>
            <img className="man-image" src="" />
            <span className="first-block-text first-block-text-3rd">
              <a
                className="firs-block-text first-block-text first-block-text-3rd first-block-text first-block-text-3rd-link"
                href=""
              >
                Add comment
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bonus;