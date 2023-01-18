import React from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar1">
        <a>Corporate Gifts</a>
        <a>
          Store Locator
          <ImLocation />
        </a>
        <a>international Delivery</a>
      </div>
      <div className="navbar2">
        <Image
          className="nav2img"
          src={"/logo1.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo2.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo3.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo4.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo5.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo6.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo7.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo8.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo9.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo10.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo11.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <Image
          className="nav2img"
          src={"/logo4.svg"}
          alt="logo"
          width={80}
          height={80}
        />
      </div>
      <div className="navbar3">
        <div className="img">
          <Image src={"/me.png"} alt="Logo" width={80} height={80} />
        </div>
        <div className="inputbtn">
          <input type="text" placeholder="Enter Keyword or Product Number" />
          <button>SEARCH</button>
        </div>
        <div className="logoname">
          <div className="child">
            <div>
              <CgProfile className="nth" />
            </div>
            <p>Profile</p>
          </div>
          <div className="child">
            <div>
              <MdOutlineLocalShipping className="nth" />
            </div>
            <p>My Order</p>
          </div>
          <div className="child">
            <div>
              <CgShoppingCart className="nth" />
            </div>
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="navbar4">
        <nav>
          <div className="wrapper">
            <div className="logo">
              <a href="#">Blossom</a>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">VALENTINE</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Valentine’s</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Valentine’s Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Valentine’s Day Flowers</a>
                        </li>
                        <li>
                          <a href="#">Flower Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Farm Fresh Flower</a>
                        </li>
                        <li>
                          <a href="#">Luxury Flower Arrangements</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop By Gift and More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Custom Valentine’s Day Gifts</a>
                        </li>
                        <li>
                          <a href="#">Valentines Day Gift Sets</a>
                        </li>
                        <li>
                          <a href="#">Wine Gift Baskets & Wine Accessories</a>
                        </li>
                        <li>
                          <a href="#">Candle Gifts & Lanterns</a>
                        </li>
                        <li>
                          <a href="#">Valentine’s Day Necklaces & Jewelry</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Signature Collection</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Galentine’s Day Flowers & Gift</a>
                        </li>
                        <li>
                          <a href="#">Valentines Day Gift for Him</a>
                        </li>
                        <li>
                          <a href="#">Valentine’s Gifts for Her</a>
                        </li>
                        <li>
                          <a href="#">Valentine’s Day Chocolate</a>
                        </li>
                        <li>
                          <a href="#">
                            Flowers and Chocolate Covered Strawberries
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">BIRTHDAY</a>
              </li>
              <li>
                <a href="#">SYMPATHY</a>
              </li>
              <li>
                <a href="#">OCCASION</a>
              </li>
              <li>
                <a href="#">FLOWERS</a>
              </li>
              <li>
                <a href="#">GIFTS & MORE</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}