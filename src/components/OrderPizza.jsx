import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback,
} from "reactstrap";
import LogoSVG from "./images/iteration-1-images/logo.svg";

// kullanicidan alinacak veriler objesi tanimlandi
const initialData = {
  boyut: "",
  hamur: "",
  malzemeler: [],
  siparisNotu: "",
  miktar: "",
};

return (
  <>
    <header className="form-header">
      <img src={LogoSVG} />
    </header>

    <section className="bej-part">
      <div className="bej-part-icerik">
        <img src="./images/iteration-2-images/form-banner.png" />
        <nav className="nav-menu">
          <a href="/">Anasayfa </a>
          <p> - </p>
          <a href="/siparis-olustur"> Sipariş Oluştur</a>
        </nav>
        <h2>Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <h1>85.5 ₺</h1>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <p style={{ color: "#5F5F5F" }}>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </section>

    
  </>
);
