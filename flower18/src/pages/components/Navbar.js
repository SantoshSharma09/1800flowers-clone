import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import useAuth from "./../useAuth";
import Link from "next/link";

export default function Navbar() {
  const currentUser = useAuth();

  // console.log(currentUser);

  return (
    <div className="navbar">
      <div style={{ width: "100%" }} className="navbar1">
        <a>Corporate Gifts</a>
        <a>
          Store Locator
          {/* <ImLocation /> */}
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
          <Image src={"/me.png"} alt="Logo" width={60} height={60} />
        </div>
        <div className="inputbtn">
          <input type="text" placeholder="Enter Keyword or Product Number" />
          <button>SEARCH</button>
        </div>
        <div className="logoname">
          <div className="child">
            <Link href={"/login"}>
              <BiLogOut className="nth" />
            </Link>
            <Link href={"/login"}>Login/Logout</Link>
          </div>
          <div className="child">
            <Link href="/signup">
              <CgProfile className="nth" />
            </Link>
            <Link href="/signup">
              {currentUser ? currentUser?.displayName : "Profile/Signup"}
            </Link>
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
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va2.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Birthday</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">All Birthday Gifts</a>
                        </li>
                        <li>
                          <a href="#">Birthday Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Flower Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Birthday Gift Guide</a>
                        </li>
                        <li>
                          <a href="#">Birthday Cakes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop by Gourmet Food</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Chocolate Covered Strawberries</a>
                        </li>
                        <li>
                          <a href="#">Tribute | Free Group Video</a>
                        </li>
                        <li>
                          <a href="#">Gifts for Mom</a>
                        </li>
                        <li>
                          <a href="#">Smile Farms BIRTHYAY!</a>
                        </li>
                        <li>
                          <a href="#">Birthday Teddy Bears & More</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Gifts & More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Birthday Day Flowers & Gift</a>
                        </li>
                        <li>
                          <a href="#">Birthday Gift for Him</a>
                        </li>
                        <li>
                          <a href="#">Birthday Gifts for Her</a>
                        </li>
                        <li>
                          <a href="#">Birthday Day Chocolate</a>
                        </li>
                        <li>
                          <a href="#">Flowers and Chocolate</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">SYMPATHY</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va3.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Sympathy</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">All Sympathy Gifts</a>
                        </li>
                        <li>
                          <a href="#">Sympathy Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Flower Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Sympathy Gift Guide</a>
                        </li>
                        <li>
                          <a href="#">Sympathy Cakes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop by Gourmet Food</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Chocolate Covered Strawberries</a>
                        </li>
                        <li>
                          <a href="#">Tribute</a>
                        </li>
                        <li>
                          <a href="#">Gifts</a>
                        </li>
                        <li>
                          <a href="#">Smile Farms Sympathy!</a>
                        </li>
                        <li>
                          <a href="#">Sympathy Teddy Bears & More</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Gifts & More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Sympathy Flowers & Gift</a>
                        </li>
                        <li>
                          <a href="#">Gift for Him</a>
                        </li>
                        <li>
                          <a href="#">Gifts for Her</a>
                        </li>
                        <li>
                          <a href="#">Chocolate</a>
                        </li>
                        <li>
                          <a href="#">Flowers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">OCCASION</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va4.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Ocassion</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">All Ocassion Gifts</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Flower Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Gift Guide</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Cakes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop by Gourmet Food</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Chocolate Covered Strawberries</a>
                        </li>
                        <li>
                          <a href="#">Tribute | Free Group Video</a>
                        </li>
                        <li>
                          <a href="#">Gifts for Mom</a>
                        </li>
                        <li>
                          <a href="#">Smile Farms OCASSION!</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Teddy Bears & More</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Gifts & More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Ocassion Day Flowers & Gift</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Day Gift for Him</a>
                        </li>
                        <li>
                          <a href="#">Ocassion Gifts for Her</a>
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
                <a href="#">FLOWERS</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va5.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Flower</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">All Flower Gifts</a>
                        </li>
                        <li>
                          <a href="#">Flower Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Flower Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Flower Gift Guide</a>
                        </li>
                        <li>
                          <a href="#">Flower Cakes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop by Gourmet Food</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Chocolate Flower Strawberries</a>
                        </li>
                        <li>
                          <a href="#">Flower Customised</a>
                        </li>
                        <li>
                          <a href="#">Gifts for Mom</a>
                        </li>
                        <li>
                          <a href="#">Smile Farms FLOWER!</a>
                        </li>
                        <li>
                          <a href="#">Flower Teddy Bears & More</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Gifts & More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Flower Day Flowers & Gift</a>
                        </li>
                        <li>
                          <a href="#">Flower Day Gift for Him</a>
                        </li>
                        <li>
                          <a href="#">Flower Gifts for Her</a>
                        </li>
                        <li>
                          <a href="#">Valentine’s Day Flower</a>
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
                <a href="#">GIFTS & MORE</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <Image
                        src={"/va6.webp"}
                        alt="Logo"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="row">
                      <header>Gifts and More</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">All Birthday Gifts</a>
                        </li>
                        <li>
                          <a href="#">Birthday Best Seller</a>
                        </li>
                        <li>
                          <a href="#">Gifts Subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Birthday Gift Guide</a>
                        </li>
                        <li>
                          <a href="#">Birthday Gifts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Shop by Gifts Food</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Gifts Covered Strawberries</a>
                        </li>
                        <li>
                          <a href="#">Tribute</a>
                        </li>
                        <li>
                          <a href="#">Gifts for Mom</a>
                        </li>
                        <li>
                          <a href="#">Smile Farms</a>
                        </li>
                        <li>
                          <a href="#">Birthday Teddy Bears & More</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Gifts & More</header>
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
                          <a href="#">Flowers and Chocolate Gifts Covered</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
