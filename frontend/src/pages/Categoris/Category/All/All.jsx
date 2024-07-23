import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";

export const All = () => {
  return (
    <section>
      <div className="container">
        <div className="category__cart">
          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://avatars.mds.yandex.net/i?id=59bfc52129d04341c782939c00acee1d5d102f5f-3697110-images-thumbs&n=13"
                alt=""
              />
              <div className="category__info">
                <h3>Burger</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://i.pinimg.com/originals/3c/92/3c/3c923c69a10afa5bcb2a309239978391.jpg"
                alt=""
              />
              <div className="category__info">
                <h3>Drinks</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://avatars.mds.yandex.net/i?id=79b241ea254ff7e01cf7d42373d866446b32a605-5906237-images-thumbs&n=13"
                alt=""
              />
              <div className="category__info">
                <h3>Salad</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://avatars.mds.yandex.net/i?id=4c17ed0c5fc5948de441ba827894251d5a468348ba95952f-12720093-images-thumbs&n=13"
                alt=""
              />
              <div className="category__info">
                <h3>National</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://yesofcorsa.com/wp-content/uploads/2018/12/Home-Shawarma-Wallpaper-Download-Free.jpg"
                alt=""
              />
              <div className="category__info">
                <h3>Shawarma</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://sun9-87.userapi.com/impg/S-U9qYjTkFeAu-91IsnR56shVs8aGhHTH-M75g/wUD45EUC2Ic.jpg?size=604x402&quality=96&sign=798befc8febe1300a4e7b26513d25d07&type=album"
                alt=""
              />
              <div className="category__info">
                <h3>Pizza</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>

          <CardActionArea className="category__wrapper-animation">
            <div className="category__wrapper">
              <img
                src="https://www.finnewsnetwork.com.au/newssystem/Headlines01_360_200630.jpg"
                alt=""
              />
              <div className="category__info">
                <h3>Food</h3>
                <p>Pleasant appetite</p>
              </div>
              <RiArrowRightSLine className="category__icon" />
            </div>
          </CardActionArea>
        </div>
      </div>
    </section>
  );
};
