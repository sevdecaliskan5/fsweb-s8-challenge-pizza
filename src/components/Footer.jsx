import React from "react";
import LogoFooterSVG from "../../images/iteration-2-images/footer/logo-footer.svg";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-sutun">
          <img src={LogoFooterSVG} alt="Logofooter" />
          <ul>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt="icon1"
              />{" "}
              341 Londonderry Road, Istanbul Türkiye
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt="icon2"
              />{" "}
              aciktim@teknolojikyemekler.com
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt="icon3"
              />{" "}
              +90 216 123 45 67
            </li>
          </ul>
        </div>
        <div className="footer-sutun">
          <h3>Hot Menu</h3>
          <ul>Terminal Pizza</ul>
          <ul>5 Kişilik Hackathlon Pizza</ul>
          <ul>useEffect Tavuklu Pizza</ul>
          <ul>Beyaz Console Frosty</ul>
          <ul>Testler Geçti Mutlu Burger</ul>
          <ul>Position Absolute Acı Burger</ul>
        </div>
        <div className="footer-sutun">
          <h3>Instagram</h3>
          <ul>
            <img
              src="/images/iteration-2-images/footer/insta/li-0.png"
              alt=""
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-1.png"
              alt=""
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-2.png"
              alt=""
            />
          </ul>
          <ul>
            <img
              src="/images/iteration-2-images/footer/insta/li-3.png"
              alt=""
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-4.png"
              alt=""
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-5.png"
              alt=""
            />
          </ul>
        </div>
      </footer>
      <footer className="secondary-footer">
        <p>© 2025 Teknolojik Yemekler.</p>
      </footer>
    </>
  );
}
