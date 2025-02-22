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
  isimSoyisim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  siparisNotu: "",
  miktar: "",
};

const errorMessages = {
    boyut: "* Lütfen bir boyut seçin.",
    hamur: "* Lütfen hamur kalınlığı seçin.",
    malzemeler: "* En fazla 10 malzeme seçebilirsiniz!",
  };

  const malzemeler = [
    { name: "Pepperoni", label: "Pepperoni" },
    { name: "Sosis", label: "Sosis" },
    { name: "Kanada Jambonu", label: "Kanada Jambonu" },
    { name: "Tavuk Izgara", label: "Tavuk Izgara" },
    { name: "Soğan", label: "Soğan" },
    { name: "Ananas", label: "Ananas" },
    { name: "Domates", label: "Domates" },
    { name: "Kabak", label: "Kabak" },
    { name: "Mısır", label: "Mısır" },
    { name: "Sucuk", label: "Sucuk" },
    { name: "Jalepeno", label: "Jalepeno" },
    { name: "Sarımsak", label: "Sarımsak" },
    { name: "Biber", label: "Biber" },
  ];

  export default function OrderPizza({ onSubmit }) {
    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validateForm();
      }, [form]);
    

      const validateForm = () => {
        let newErrors = {};
    

  newErrors.boyut = !form.boyut ? errorMessages.boyut : "";
  
  newErrors.hamur = !form.hamur ? errorMessages.hamur : "";

  newErrors.malzemeler = form.malzemeler.length > 10
  ? errorMessages.malzemeler
  : "";

  newErrors.isimSoyisim =
  !form.isimSoyisim || form.isimSoyisim.length < 3
    ? errorMessages.isimSoyisim
    : "";

  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedMalzemeler = checked
        ? [...form.malzemeler, name]
        : form.malzemeler.filter((item) => item !== name);
      setForm({ ...form, malzemeler: updatedMalzemeler });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  }


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

    <Form className="order-pizza-form" onSubmit={handleSubmit}>
        <section className="boyut">
          <FormGroup>
            <Label>Boyut Seç*</Label>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="S"
                onChange={handleChange}
              />
              <Label check>S</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="M"
                onChange={handleChange}
              />
              <Label check>M</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="L"
                onChange={handleChange}
              />
              <Label check>L</Label>
            </FormGroup>
            {errors.boyut && <FormFeedback>{errorMessages.boyut}</FormFeedback>}
          </FormGroup>

          <FormGroup>
            <Label for="hamurKalinligi">Hamur Seç*</Label>
            <Input
              id="hamurKalinligi"
              name="hamur"
              type="select"
              onChange={handleChange}
            >
              <option value="">- Hamur Kalınlığı Seç -</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </Input>
            {errors.hamur && <FormFeedback>{errorMessages.hamur}</FormFeedback>}
          </FormGroup>
          </section>

          <section className="ekMalzemeler">
          <FormGroup check>
            <Label for="ekMalzemeler">Ek Malzemeler</Label>
            <FormText htmlFor="ekMalzemeler">
              En fazla 10 malzeme seçebilirsiniz. ₺5 
            </FormText>
            <div className="material-columns">
              {malzemeler.map((malzeme) => (
                <div className="material-item" key={malzeme.name}>
                  <Input
                    type="checkbox"
                    onChange={handleChange}
                    name={malzeme.name}
                  />
                  <Label check>{malzeme.label}</Label>
                </div>
              ))}
            </div>
            <FormFeedback>{errors.malzemeler}</FormFeedback>
          </FormGroup>
        </section>

        <section>
          <FormGroup className="form-text-area">
            <Label for="isimSoyisim">İsim-Soyisim*</Label>
            <Input
              id="isimSoyisim"
              name="isimSoyisim"
              placeholder="Lütfen isminizi girin."
              type="text"
              value={form.isimSoyisim}
              onChange={handleChange}
              invalid={errors.isimSoyisim !== ""}
            />
            <FormFeedback>{errors.isimSoyisim}</FormFeedback>
          </FormGroup>
        </section>

        <section>
          <FormGroup className="form-text-area">
            <Label for="siparisNotu">Sipariş Notu</Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişinize özel bir not ekleyin."
              type="text"
              value={form.siparisNotu}
              onChange={handleChange}
            />
          </FormGroup>
        </section>
        
  </>
);
