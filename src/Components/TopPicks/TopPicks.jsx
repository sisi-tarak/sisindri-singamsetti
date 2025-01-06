import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Fade from "../Animations/Fade";

const TopPicks = () => {
  return (
    <Container maxWidth="lg" className="mb-20">
      <h2 className="text-headColor font-Montserrat text-3xl mt-5 mb-8 font-semibold tracking-wide">
        Top Picks on Amazon & Flipkart
      </h2>
      <div className="mt-3 mb-5 py-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-x-4 xs:gap-y-5 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-7">
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/404LeMr">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/71ALJrxmmDL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                HP 15, 13th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1334U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg),
                Anti-glare, 15.6-inch(39.6cm) FHD Laptop, Intel Iris Xe
                Graphics, 1080p FHD camera, Backlit KB, fd0316TU
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/4h5UkzB">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/71mFAMHkWyL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Dell Inspiron, 13th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1334U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                16GB, 512GB SSD, 15.6"(39.62cm) FHD 120Hz 250 nits, Backlit KB,
                Windows 11 + Mso'21 & 15 Month McAfee, Silver, Thin & Light-
                1.62kg
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/3PplKo1">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/51QGlg5iRdL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Dell Inspiron, 12th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1235U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                8GB, 512GB SSD, 15.6" (39.62Cms) FHD Display- 3 Side Narrow
                Border, Win 11 + MSO'21, 2 Tuned Speakers, Black, Thin &
                Light-1.65Kg
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/4gYURmG">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/71r8h9mLzHL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                HP 15, 13th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1334U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid
                Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard,
                1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://www.amazon.in/Apple-iPad-10th-generation-cellular/dp/B0BJM15HHH?_encoding=UTF8&content-id=amzn1.sym.d8376102-5264-464e-a3b1-4b902e45e118&crid=CFMT7LQN0SU5&dib=eyJ2IjoiMSJ9.UFKuA84f7wJdCVPIdz0iSxD8Fb5CpXEivj4uRufe6tTheRCKDr2kFzX1vrK-SZBUPlNNBwZGMZsTvVcVc704EP_fDNPyx6ubFngdOVa37EQKEkDU7sSa6W1q1D3cWt2Y3TTrjXvFqH04cDTrViCcnpqdCA3sSZjWX-RXU4VDjEE26bU218S-PJur7lyeLnRjI3e7_VZZBq1M3r9TxtV-LX9gMlQqebNtU5D71f1BTYjMiY_kzpyaOK5xKPuDZ3kmBmSpv1evX1ibNqUn_fYb3qvLulQfjxqeeYR9ZYVe-jYxh-ixe6FYnLr4W13ktV-cC-0tuOuihLlxtc5BM9XxU2hLIJ_jgCZPDv9izxS5h3--t8f2pqhRB346sI-EDZiOyS57ncqfEja9KoSrziZowHdC0EEQ3wAPM7du1EPMGhPNNppCBxcRY-2bYSisDxlA._44-pLZ6YBxXR7NSzQ--sbTZXMg_h7K63YNbAhdnB1c&dib_tag=se&pd_rd_r=1055e7fe-7bfa-4297-906e-4573888db487&pd_rd_w=dcI6D&pd_rd_wg=UP5mz&pf_rd_p=d8376102-5264-464e-a3b1-4b902e45e118&pf_rd_r=FAGQ6H2NR686ACEWRA9Z&qid=1736178009&sprefix=b09g9cvml5%2Bb09g9qfdvk%2Bb09g9hgl5f%2Bb09g99dr3t%2Bb09g97gz8q%2Bb09g9cxkcq%2Bb09g9f65mg%2Bb09g942p11%2Bb0bjmsfmhh%2Bb0bjmgxlyz%2Bb0bjm3nbmt%2Bb0bjldvx2s%2Bb0bjmn3wxm%2Bb0bjldfnvl%2Bb0bjlf8k57%2Bb0bjlhp48c%2Bb0bjmqd4wb%2Bb0bjm15hhh%2Bb0bjlxqjb5%2Bb0bjljxpm3%2Bb0bjm1756s%2Bb0bjmc644t%2Bb0bjmfbv6x%2Bb0bjmk7ct2%2Bb09v471196%2Bb09v48635g%2Bb09v4bx76b%2Bb09v4fnfhn%2Bb09v4q2wd6%2Bb09v4d952h%2Bb09v4s643n%2Bb09v4k1s59%2Bb09v45f5mf%2Bb09v4s5vw1%2Bb09v4jw485%2Bb09v4qzn7t%2Bb09v4tsxwx%2Bb09v4tpqzv%2Bb09v4dbcf9%2Bb09v4mktv4%2Bb09v4h3nz5%2Bb09v4h7ywg%2Bb09v47ysfc%2Bb09v4qlb1p%2Bb09g93k5d5%2Bb09g9bx757%2Bb09g99fvlv%2Bb09g9g58kq%2Bb09g95jt9x%2Bb09g95j6qd%2Bb09g93ls13%2Bb09g9hn533%2Bb09g999sm2%2Bb09g9cjm37%2Bb09g95svwb%2Bb09g982gfs%2Bb09g9dxg76%2Bb09g9j9bw2%2Bb09g9g88gd%2Bb09g9cklrv%2Bb0bjlfbyv1%2Bb0bjmckycy%2Bb0bjmn52cs%2Bb0bjmn69wf%2Bb0bjm3n9n5%2Bb0bjldv263%2Bb0bjmgztq8%2Bb0bjmch7w9%2Bb0bjmcj7kl%2Bb0bjmc8mh8%2Bb0bjlgzjkh%2Bb0bjmcmczh%2Bb0bjlhdt5k%2Bb0bjlzv5c3%2Bb0bjmvhvj4%2Bb0bjlxm3yr%2Bb0bjm9yqx3%2Bb0bjlkv244%2Bb0bjlhhq3j%2Bb0bjlg3nb8%2Bb0bjmmhsgm%2Bb0bjmvhrn9%2Bb0bjlhfzlf%2Bb0bjljwyhd%2Bb0bjlf5z2x%2Bb0bjm3k67t%2Bb0bjm7t9vr%2Bb0bjlcy91r%2Bb0bjlgfvx1%2Bb0bjmq9xhg%2Bb0bjmn32y2%2Bb0bjmgg19r%2Bb0bjldzk7n%2Bb0bjm63df8%2Bb0bjmd4x36%2Bb0bjlgk18n%2Bb0bjm15q5x%2Bb0bjldrx6q%2Bb0bjlh667t%2Bb0bjmjc2m4%2Caps%2C532&sr=8-14&th=1&linkCode=sl1&tag=sisitarakk90b-21&linkId=98c290249a278808a3eb07379bf6b3bb&language=en_IN&ref_=as_li_ss_tl">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/61ToKShnQvL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Apple iPad (10th Generation)
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Liquid Retina Display, 64GB
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                A14 Bionic chip, 27.69 cm (10.9″), Wi-Fi 6 + 5G Cellular, 12MP
                front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/4j6UOXK">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/7131GFmmnCL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Apple iPad Pro 13″ (M4)
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Ultra Retina XDR Display, 256GB
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner,
                Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space
                Black
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default TopPicks;
