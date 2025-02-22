import React, { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from "reactstrap";
import LogoSVG from "./images/iteration-1-images/logo.svg";


// kullanicidan alinacak veriler objesi tanimlandi
const initialData = {
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    miktar: ""
};