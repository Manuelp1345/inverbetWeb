import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, CircularProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { UserContext } from "./MainApp";
import { useNavigate } from "react-router-dom";

const countries = [
  {
    nombre: "Afganistán",
    name: "Afghanistan",
    nom: "Afghanistan",
    iso2: "AF",
    iso3: "AFG",
    phone_code: "93",
  },
  {
    nombre: "Albania",
    name: "Albania",
    nom: "Albanie",
    iso2: "AL",
    iso3: "ALB",
    phone_code: "355",
  },
  {
    nombre: "Alemania",
    name: "Germany",
    nom: "Allemagne",
    iso2: "DE",
    iso3: "DEU",
    phone_code: "49",
  },
  {
    nombre: "Algeria",
    name: "Algeria",
    nom: "Algérie",
    iso2: "DZ",
    iso3: "DZA",
    phone_code: "213",
  },
  {
    nombre: "Andorra",
    name: "Andorra",
    nom: "Andorra",
    iso2: "AD",
    iso3: "AND",
    phone_code: "376",
  },
  {
    nombre: "Angola",
    name: "Angola",
    nom: "Angola",
    iso2: "AO",
    iso3: "AGO",
    phone_code: "244",
  },
  {
    nombre: "Anguila",
    name: "Anguilla",
    nom: "Anguilla",
    iso2: "AI",
    iso3: "AIA",
    phone_code: "1 264",
  },
  {
    nombre: "Antártida",
    name: "Antarctica",
    nom: "L'Antarctique",
    iso2: "AQ",
    iso3: "ATA",
    phone_code: "672",
  },
  {
    nombre: "Antigua y Barbuda",
    name: "Antigua and Barbuda",
    nom: "Antigua et Barbuda",
    iso2: "AG",
    iso3: "ATG",
    phone_code: "1 268",
  },
  {
    nombre: "Antillas Neerlandesas",
    name: "Netherlands Antilles",
    nom: "Antilles Néerlandaises",
    iso2: "AN",
    iso3: "ANT",
    phone_code: "599",
  },
  {
    nombre: "Arabia Saudita",
    name: "Saudi Arabia",
    nom: "Arabie Saoudite",
    iso2: "SA",
    iso3: "SAU",
    phone_code: "966",
  },
  {
    nombre: "Argentina",
    name: "Argentina",
    nom: "Argentine",
    iso2: "AR",
    iso3: "ARG",
    phone_code: "54",
  },
  {
    nombre: "Armenia",
    name: "Armenia",
    nom: "L'Arménie",
    iso2: "AM",
    iso3: "ARM",
    phone_code: "374",
  },
  {
    nombre: "Aruba",
    name: "Aruba",
    nom: "Aruba",
    iso2: "AW",
    iso3: "ABW",
    phone_code: "297",
  },
  {
    nombre: "Australia",
    name: "Australia",
    nom: "Australie",
    iso2: "AU",
    iso3: "AUS",
    phone_code: "61",
  },
  {
    nombre: "Austria",
    name: "Austria",
    nom: "Autriche",
    iso2: "AT",
    iso3: "AUT",
    phone_code: "43",
  },
  {
    nombre: "Azerbayán",
    name: "Azerbaijan",
    nom: "L'Azerbaïdjan",
    iso2: "AZ",
    iso3: "AZE",
    phone_code: "994",
  },
  {
    nombre: "Bélgica",
    name: "Belgium",
    nom: "Belgique",
    iso2: "BE",
    iso3: "BEL",
    phone_code: "32",
  },
  {
    nombre: "Bahamas",
    name: "Bahamas",
    nom: "Bahamas",
    iso2: "BS",
    iso3: "BHS",
    phone_code: "1 242",
  },
  {
    nombre: "Bahrein",
    name: "Bahrain",
    nom: "Bahreïn",
    iso2: "BH",
    iso3: "BHR",
    phone_code: "973",
  },
  {
    nombre: "Bangladesh",
    name: "Bangladesh",
    nom: "Bangladesh",
    iso2: "BD",
    iso3: "BGD",
    phone_code: "880",
  },
  {
    nombre: "Barbados",
    name: "Barbados",
    nom: "Barbade",
    iso2: "BB",
    iso3: "BRB",
    phone_code: "1 246",
  },
  {
    nombre: "Belice",
    name: "Belize",
    nom: "Belize",
    iso2: "BZ",
    iso3: "BLZ",
    phone_code: "501",
  },
  {
    nombre: "Benín",
    name: "Benin",
    nom: "Bénin",
    iso2: "BJ",
    iso3: "BEN",
    phone_code: "229",
  },
  {
    nombre: "Bhután",
    name: "Bhutan",
    nom: "Le Bhoutan",
    iso2: "BT",
    iso3: "BTN",
    phone_code: "975",
  },
  {
    nombre: "Bielorrusia",
    name: "Belarus",
    nom: "Biélorussie",
    iso2: "BY",
    iso3: "BLR",
    phone_code: "375",
  },
  {
    nombre: "Birmania",
    name: "Myanmar",
    nom: "Myanmar",
    iso2: "MM",
    iso3: "MMR",
    phone_code: "95",
  },
  {
    nombre: "Bolivia",
    name: "Bolivia",
    nom: "Bolivie",
    iso2: "BO",
    iso3: "BOL",
    phone_code: "591",
  },
  {
    nombre: "Bosnia y Herzegovina",
    name: "Bosnia and Herzegovina",
    nom: "Bosnie-Herzégovine",
    iso2: "BA",
    iso3: "BIH",
    phone_code: "387",
  },
  {
    nombre: "Botsuana",
    name: "Botswana",
    nom: "Botswana",
    iso2: "BW",
    iso3: "BWA",
    phone_code: "267",
  },
  {
    nombre: "Brasil",
    name: "Brazil",
    nom: "Brésil",
    iso2: "BR",
    iso3: "BRA",
    phone_code: "55",
  },
  {
    nombre: "Brunéi",
    name: "Brunei",
    nom: "Brunei",
    iso2: "BN",
    iso3: "BRN",
    phone_code: "673",
  },
  {
    nombre: "Bulgaria",
    name: "Bulgaria",
    nom: "Bulgarie",
    iso2: "BG",
    iso3: "BGR",
    phone_code: "359",
  },
  {
    nombre: "Burkina Faso",
    name: "Burkina Faso",
    nom: "Burkina Faso",
    iso2: "BF",
    iso3: "BFA",
    phone_code: "226",
  },
  {
    nombre: "Burundi",
    name: "Burundi",
    nom: "Burundi",
    iso2: "BI",
    iso3: "BDI",
    phone_code: "257",
  },
  {
    nombre: "Cabo Verde",
    name: "Cape Verde",
    nom: "Cap-Vert",
    iso2: "CV",
    iso3: "CPV",
    phone_code: "238",
  },
  {
    nombre: "Camboya",
    name: "Cambodia",
    nom: "Cambodge",
    iso2: "KH",
    iso3: "KHM",
    phone_code: "855",
  },
  {
    nombre: "Camerún",
    name: "Cameroon",
    nom: "Cameroun",
    iso2: "CM",
    iso3: "CMR",
    phone_code: "237",
  },
  {
    nombre: "Canadá",
    name: "Canada",
    nom: "Canada",
    iso2: "CA",
    iso3: "CAN",
    phone_code: "1",
  },
  {
    nombre: "Chad",
    name: "Chad",
    nom: "Tchad",
    iso2: "TD",
    iso3: "TCD",
    phone_code: "235",
  },
  {
    nombre: "Chile",
    name: "Chile",
    nom: "Chili",
    iso2: "CL",
    iso3: "CHL",
    phone_code: "56",
  },
  {
    nombre: "China",
    name: "China",
    nom: "Chine",
    iso2: "CN",
    iso3: "CHN",
    phone_code: "86",
  },
  {
    nombre: "Chipre",
    name: "Cyprus",
    nom: "Chypre",
    iso2: "CY",
    iso3: "CYP",
    phone_code: "357",
  },
  {
    nombre: "Ciudad del Vaticano",
    name: "Vatican City State",
    nom: "Cité du Vatican",
    iso2: "VA",
    iso3: "VAT",
    phone_code: "39",
  },
  {
    nombre: "Colombia",
    name: "Colombia",
    nom: "Colombie",
    iso2: "CO",
    iso3: "COL",
    phone_code: "57",
  },
  {
    nombre: "Comoras",
    name: "Comoros",
    nom: "Comores",
    iso2: "KM",
    iso3: "COM",
    phone_code: "269",
  },
  {
    nombre: "Congo",
    name: "Congo",
    nom: "Congo",
    iso2: "CG",
    iso3: "COG",
    phone_code: "242",
  },
  {
    nombre: "Congo",
    name: "Congo",
    nom: "Congo",
    iso2: "CD",
    iso3: "COD",
    phone_code: "243",
  },
  {
    nombre: "Corea del Norte",
    name: "North Korea",
    nom: "Corée du Nord",
    iso2: "KP",
    iso3: "PRK",
    phone_code: "850",
  },
  {
    nombre: "Corea del Sur",
    name: "South Korea",
    nom: "Corée du Sud",
    iso2: "KR",
    iso3: "KOR",
    phone_code: "82",
  },
  {
    nombre: "Costa de Marfil",
    name: "Ivory Coast",
    nom: "Côte-d'Ivoire",
    iso2: "CI",
    iso3: "CIV",
    phone_code: "225",
  },
  {
    nombre: "Costa Rica",
    name: "Costa Rica",
    nom: "Costa Rica",
    iso2: "CR",
    iso3: "CRI",
    phone_code: "506",
  },
  {
    nombre: "Croacia",
    name: "Croatia",
    nom: "Croatie",
    iso2: "HR",
    iso3: "HRV",
    phone_code: "385",
  },
  {
    nombre: "Cuba",
    name: "Cuba",
    nom: "Cuba",
    iso2: "CU",
    iso3: "CUB",
    phone_code: "53",
  },
  {
    nombre: "Dinamarca",
    name: "Denmark",
    nom: "Danemark",
    iso2: "DK",
    iso3: "DNK",
    phone_code: "45",
  },
  {
    nombre: "Dominica",
    name: "Dominica",
    nom: "Dominique",
    iso2: "DM",
    iso3: "DMA",
    phone_code: "1 767",
  },
  {
    nombre: "Ecuador",
    name: "Ecuador",
    nom: "Equateur",
    iso2: "EC",
    iso3: "ECU",
    phone_code: "593",
  },
  {
    nombre: "Egipto",
    name: "Egypt",
    nom: "Egypte",
    iso2: "EG",
    iso3: "EGY",
    phone_code: "20",
  },
  {
    nombre: "El Salvador",
    name: "El Salvador",
    nom: "El Salvador",
    iso2: "SV",
    iso3: "SLV",
    phone_code: "503",
  },
  {
    nombre: "Emiratos Árabes Unidos",
    name: "United Arab Emirates",
    nom: "Emirats Arabes Unis",
    iso2: "AE",
    iso3: "ARE",
    phone_code: "971",
  },
  {
    nombre: "Eritrea",
    name: "Eritrea",
    nom: "Erythrée",
    iso2: "ER",
    iso3: "ERI",
    phone_code: "291",
  },
  {
    nombre: "Eslovaquia",
    name: "Slovakia",
    nom: "Slovaquie",
    iso2: "SK",
    iso3: "SVK",
    phone_code: "421",
  },
  {
    nombre: "Eslovenia",
    name: "Slovenia",
    nom: "Slovénie",
    iso2: "SI",
    iso3: "SVN",
    phone_code: "386",
  },
  {
    nombre: "España",
    name: "Spain",
    nom: "Espagne",
    iso2: "ES",
    iso3: "ESP",
    phone_code: "34",
  },
  {
    nombre: "Estados Unidos de América",
    name: "United States of America",
    nom: "États-Unis d'Amérique",
    iso2: "US",
    iso3: "USA",
    phone_code: "1",
  },
  {
    nombre: "Estonia",
    name: "Estonia",
    nom: "L'Estonie",
    iso2: "EE",
    iso3: "EST",
    phone_code: "372",
  },
  {
    nombre: "Etiopía",
    name: "Ethiopia",
    nom: "Ethiopie",
    iso2: "ET",
    iso3: "ETH",
    phone_code: "251",
  },
  {
    nombre: "Filipinas",
    name: "Philippines",
    nom: "Philippines",
    iso2: "PH",
    iso3: "PHL",
    phone_code: "63",
  },
  {
    nombre: "Finlandia",
    name: "Finland",
    nom: "Finlande",
    iso2: "FI",
    iso3: "FIN",
    phone_code: "358",
  },
  {
    nombre: "Fiyi",
    name: "Fiji",
    nom: "Fidji",
    iso2: "FJ",
    iso3: "FJI",
    phone_code: "679",
  },
  {
    nombre: "Francia",
    name: "France",
    nom: "France",
    iso2: "FR",
    iso3: "FRA",
    phone_code: "33",
  },
  {
    nombre: "Gabón",
    name: "Gabon",
    nom: "Gabon",
    iso2: "GA",
    iso3: "GAB",
    phone_code: "241",
  },
  {
    nombre: "Gambia",
    name: "Gambia",
    nom: "Gambie",
    iso2: "GM",
    iso3: "GMB",
    phone_code: "220",
  },
  {
    nombre: "Georgia",
    name: "Georgia",
    nom: "Géorgie",
    iso2: "GE",
    iso3: "GEO",
    phone_code: "995",
  },
  {
    nombre: "Ghana",
    name: "Ghana",
    nom: "Ghana",
    iso2: "GH",
    iso3: "GHA",
    phone_code: "233",
  },
  {
    nombre: "Gibraltar",
    name: "Gibraltar",
    nom: "Gibraltar",
    iso2: "GI",
    iso3: "GIB",
    phone_code: "350",
  },
  {
    nombre: "Granada",
    name: "Grenada",
    nom: "Grenade",
    iso2: "GD",
    iso3: "GRD",
    phone_code: "1 473",
  },
  {
    nombre: "Grecia",
    name: "Greece",
    nom: "Grèce",
    iso2: "GR",
    iso3: "GRC",
    phone_code: "30",
  },
  {
    nombre: "Groenlandia",
    name: "Greenland",
    nom: "Groenland",
    iso2: "GL",
    iso3: "GRL",
    phone_code: "299",
  },
  {
    nombre: "Guadalupe",
    name: "Guadeloupe",
    nom: "Guadeloupe",
    iso2: "GP",
    iso3: "GLP",
    phone_code: "",
  },
  {
    nombre: "Guam",
    name: "Guam",
    nom: "Guam",
    iso2: "GU",
    iso3: "GUM",
    phone_code: "1 671",
  },
  {
    nombre: "Guatemala",
    name: "Guatemala",
    nom: "Guatemala",
    iso2: "GT",
    iso3: "GTM",
    phone_code: "502",
  },
  {
    nombre: "Guayana Francesa",
    name: "French Guiana",
    nom: "Guyane française",
    iso2: "GF",
    iso3: "GUF",
    phone_code: "",
  },
  {
    nombre: "Guernsey",
    name: "Guernsey",
    nom: "Guernesey",
    iso2: "GG",
    iso3: "GGY",
    phone_code: "",
  },
  {
    nombre: "Guinea",
    name: "Guinea",
    nom: "Guinée",
    iso2: "GN",
    iso3: "GIN",
    phone_code: "224",
  },
  {
    nombre: "Guinea Ecuatorial",
    name: "Equatorial Guinea",
    nom: "Guinée Equatoriale",
    iso2: "GQ",
    iso3: "GNQ",
    phone_code: "240",
  },
  {
    nombre: "Guinea-Bissau",
    name: "Guinea-Bissau",
    nom: "Guinée-Bissau",
    iso2: "GW",
    iso3: "GNB",
    phone_code: "245",
  },
  {
    nombre: "Guyana",
    name: "Guyana",
    nom: "Guyane",
    iso2: "GY",
    iso3: "GUY",
    phone_code: "592",
  },
  {
    nombre: "Haití",
    name: "Haiti",
    nom: "Haïti",
    iso2: "HT",
    iso3: "HTI",
    phone_code: "509",
  },
  {
    nombre: "Honduras",
    name: "Honduras",
    nom: "Honduras",
    iso2: "HN",
    iso3: "HND",
    phone_code: "504",
  },
  {
    nombre: "Hong kong",
    name: "Hong Kong",
    nom: "Hong Kong",
    iso2: "HK",
    iso3: "HKG",
    phone_code: "852",
  },
  {
    nombre: "Hungría",
    name: "Hungary",
    nom: "Hongrie",
    iso2: "HU",
    iso3: "HUN",
    phone_code: "36",
  },
  {
    nombre: "India",
    name: "India",
    nom: "Inde",
    iso2: "IN",
    iso3: "IND",
    phone_code: "91",
  },
  {
    nombre: "Indonesia",
    name: "Indonesia",
    nom: "Indonésie",
    iso2: "ID",
    iso3: "IDN",
    phone_code: "62",
  },
  {
    nombre: "Irán",
    name: "Iran",
    nom: "Iran",
    iso2: "IR",
    iso3: "IRN",
    phone_code: "98",
  },
  {
    nombre: "Irak",
    name: "Iraq",
    nom: "Irak",
    iso2: "IQ",
    iso3: "IRQ",
    phone_code: "964",
  },
  {
    nombre: "Irlanda",
    name: "Ireland",
    nom: "Irlande",
    iso2: "IE",
    iso3: "IRL",
    phone_code: "353",
  },
  {
    nombre: "Isla Bouvet",
    name: "Bouvet Island",
    nom: "Bouvet Island",
    iso2: "BV",
    iso3: "BVT",
    phone_code: "",
  },
  {
    nombre: "Isla de Man",
    name: "Isle of Man",
    nom: "Ile de Man",
    iso2: "IM",
    iso3: "IMN",
    phone_code: "44",
  },
  {
    nombre: "Isla de Navidad",
    name: "Christmas Island",
    nom: "Christmas Island",
    iso2: "CX",
    iso3: "CXR",
    phone_code: "61",
  },
  {
    nombre: "Isla Norfolk",
    name: "Norfolk Island",
    nom: "Île de Norfolk",
    iso2: "NF",
    iso3: "NFK",
    phone_code: "",
  },
  {
    nombre: "Islandia",
    name: "Iceland",
    nom: "Islande",
    iso2: "IS",
    iso3: "ISL",
    phone_code: "354",
  },
  {
    nombre: "Islas Bermudas",
    name: "Bermuda Islands",
    nom: "Bermudes",
    iso2: "BM",
    iso3: "BMU",
    phone_code: "1 441",
  },
  {
    nombre: "Islas Caimán",
    name: "Cayman Islands",
    nom: "Iles Caïmans",
    iso2: "KY",
    iso3: "CYM",
    phone_code: "1 345",
  },
  {
    nombre: "Islas Cocos (Keeling)",
    name: "Cocos (Keeling) Islands",
    nom: "Cocos (Keeling",
    iso2: "CC",
    iso3: "CCK",
    phone_code: "61",
  },
  {
    nombre: "Islas Cook",
    name: "Cook Islands",
    nom: "Iles Cook",
    iso2: "CK",
    iso3: "COK",
    phone_code: "682",
  },
  {
    nombre: "Islas de Åland",
    name: "Åland Islands",
    nom: "Îles Åland",
    iso2: "AX",
    iso3: "ALA",
    phone_code: "",
  },
  {
    nombre: "Islas Feroe",
    name: "Faroe Islands",
    nom: "Iles Féro",
    iso2: "FO",
    iso3: "FRO",
    phone_code: "298",
  },
  {
    nombre: "Islas Georgias del Sur y Sandwich del Sur",
    name: "South Georgia and the South Sandwich Islands",
    nom: "Géorgie du Sud et les Îles Sandwich du Sud",
    iso2: "GS",
    iso3: "SGS",
    phone_code: "",
  },
  {
    nombre: "Islas Heard y McDonald",
    name: "Heard Island and McDonald Islands",
    nom: "Les îles Heard et McDonald",
    iso2: "HM",
    iso3: "HMD",
    phone_code: "",
  },
  {
    nombre: "Islas Maldivas",
    name: "Maldives",
    nom: "Maldives",
    iso2: "MV",
    iso3: "MDV",
    phone_code: "960",
  },
  {
    nombre: "Islas Malvinas",
    name: "Falkland Islands (Malvinas)",
    nom: "Iles Falkland (Malvinas",
    iso2: "FK",
    iso3: "FLK",
    phone_code: "500",
  },
  {
    nombre: "Islas Marianas del Norte",
    name: "Northern Mariana Islands",
    nom: "Iles Mariannes du Nord",
    iso2: "MP",
    iso3: "MNP",
    phone_code: "1 670",
  },
  {
    nombre: "Islas Marshall",
    name: "Marshall Islands",
    nom: "Iles Marshall",
    iso2: "MH",
    iso3: "MHL",
    phone_code: "692",
  },
  {
    nombre: "Islas Pitcairn",
    name: "Pitcairn Islands",
    nom: "Iles Pitcairn",
    iso2: "PN",
    iso3: "PCN",
    phone_code: "870",
  },
  {
    nombre: "Islas Salomón",
    name: "Solomon Islands",
    nom: "Iles Salomon",
    iso2: "SB",
    iso3: "SLB",
    phone_code: "677",
  },
  {
    nombre: "Islas Turcas y Caicos",
    name: "Turks and Caicos Islands",
    nom: "Iles Turques et Caïques",
    iso2: "TC",
    iso3: "TCA",
    phone_code: "1 649",
  },
  {
    nombre: "Islas Ultramarinas Menores de Estados Unidos",
    name: "United States Minor Outlying Islands",
    nom: "États-Unis Îles mineures éloignées",
    iso2: "UM",
    iso3: "UMI",
    phone_code: "",
  },
  {
    nombre: "Islas Vírgenes Británicas",
    name: "Virgin Islands",
    nom: "Iles Vierges",
    iso2: "VG",
    iso3: "VG",
    phone_code: "1 284",
  },
  {
    nombre: "Islas Vírgenes de los Estados Unidos",
    name: "United States Virgin Islands",
    nom: "Îles Vierges américaines",
    iso2: "VI",
    iso3: "VIR",
    phone_code: "1 340",
  },
  {
    nombre: "Israel",
    name: "Israel",
    nom: "Israël",
    iso2: "IL",
    iso3: "ISR",
    phone_code: "972",
  },
  {
    nombre: "Italia",
    name: "Italy",
    nom: "Italie",
    iso2: "IT",
    iso3: "ITA",
    phone_code: "39",
  },
  {
    nombre: "Jamaica",
    name: "Jamaica",
    nom: "Jamaïque",
    iso2: "JM",
    iso3: "JAM",
    phone_code: "1 876",
  },
  {
    nombre: "Japón",
    name: "Japan",
    nom: "Japon",
    iso2: "JP",
    iso3: "JPN",
    phone_code: "81",
  },
  {
    nombre: "Jersey",
    name: "Jersey",
    nom: "Maillot",
    iso2: "JE",
    iso3: "JEY",
    phone_code: "",
  },
  {
    nombre: "Jordania",
    name: "Jordan",
    nom: "Jordan",
    iso2: "JO",
    iso3: "JOR",
    phone_code: "962",
  },
  {
    nombre: "Kazajistán",
    name: "Kazakhstan",
    nom: "Le Kazakhstan",
    iso2: "KZ",
    iso3: "KAZ",
    phone_code: "7",
  },
  {
    nombre: "Kenia",
    name: "Kenya",
    nom: "Kenya",
    iso2: "KE",
    iso3: "KEN",
    phone_code: "254",
  },
  {
    nombre: "Kirgizstán",
    name: "Kyrgyzstan",
    nom: "Kirghizstan",
    iso2: "KG",
    iso3: "KGZ",
    phone_code: "996",
  },
  {
    nombre: "Kiribati",
    name: "Kiribati",
    nom: "Kiribati",
    iso2: "KI",
    iso3: "KIR",
    phone_code: "686",
  },
  {
    nombre: "Kuwait",
    name: "Kuwait",
    nom: "Koweït",
    iso2: "KW",
    iso3: "KWT",
    phone_code: "965",
  },
  {
    nombre: "Líbano",
    name: "Lebanon",
    nom: "Liban",
    iso2: "LB",
    iso3: "LBN",
    phone_code: "961",
  },
  {
    nombre: "Laos",
    name: "Laos",
    nom: "Laos",
    iso2: "LA",
    iso3: "LAO",
    phone_code: "856",
  },
  {
    nombre: "Lesoto",
    name: "Lesotho",
    nom: "Lesotho",
    iso2: "LS",
    iso3: "LSO",
    phone_code: "266",
  },
  {
    nombre: "Letonia",
    name: "Latvia",
    nom: "La Lettonie",
    iso2: "LV",
    iso3: "LVA",
    phone_code: "371",
  },
  {
    nombre: "Liberia",
    name: "Liberia",
    nom: "Liberia",
    iso2: "LR",
    iso3: "LBR",
    phone_code: "231",
  },
  {
    nombre: "Libia",
    name: "Libya",
    nom: "Libye",
    iso2: "LY",
    iso3: "LBY",
    phone_code: "218",
  },
  {
    nombre: "Liechtenstein",
    name: "Liechtenstein",
    nom: "Liechtenstein",
    iso2: "LI",
    iso3: "LIE",
    phone_code: "423",
  },
  {
    nombre: "Lituania",
    name: "Lithuania",
    nom: "La Lituanie",
    iso2: "LT",
    iso3: "LTU",
    phone_code: "370",
  },
  {
    nombre: "Luxemburgo",
    name: "Luxembourg",
    nom: "Luxembourg",
    iso2: "LU",
    iso3: "LUX",
    phone_code: "352",
  },
  {
    nombre: "México",
    name: "Mexico",
    nom: "Mexique",
    iso2: "MX",
    iso3: "MEX",
    phone_code: "52",
  },
  {
    nombre: "Mónaco",
    name: "Monaco",
    nom: "Monaco",
    iso2: "MC",
    iso3: "MCO",
    phone_code: "377",
  },
  {
    nombre: "Macao",
    name: "Macao",
    nom: "Macao",
    iso2: "MO",
    iso3: "MAC",
    phone_code: "853",
  },
  {
    nombre: "Macedônia",
    name: "Macedonia",
    nom: "Macédoine",
    iso2: "MK",
    iso3: "MKD",
    phone_code: "389",
  },
  {
    nombre: "Madagascar",
    name: "Madagascar",
    nom: "Madagascar",
    iso2: "MG",
    iso3: "MDG",
    phone_code: "261",
  },
  {
    nombre: "Malasia",
    name: "Malaysia",
    nom: "Malaisie",
    iso2: "MY",
    iso3: "MYS",
    phone_code: "60",
  },
  {
    nombre: "Malawi",
    name: "Malawi",
    nom: "Malawi",
    iso2: "MW",
    iso3: "MWI",
    phone_code: "265",
  },
  {
    nombre: "Mali",
    name: "Mali",
    nom: "Mali",
    iso2: "ML",
    iso3: "MLI",
    phone_code: "223",
  },
  {
    nombre: "Malta",
    name: "Malta",
    nom: "Malte",
    iso2: "MT",
    iso3: "MLT",
    phone_code: "356",
  },
  {
    nombre: "Marruecos",
    name: "Morocco",
    nom: "Maroc",
    iso2: "MA",
    iso3: "MAR",
    phone_code: "212",
  },
  {
    nombre: "Martinica",
    name: "Martinique",
    nom: "Martinique",
    iso2: "MQ",
    iso3: "MTQ",
    phone_code: "",
  },
  {
    nombre: "Mauricio",
    name: "Mauritius",
    nom: "Iles Maurice",
    iso2: "MU",
    iso3: "MUS",
    phone_code: "230",
  },
  {
    nombre: "Mauritania",
    name: "Mauritania",
    nom: "Mauritanie",
    iso2: "MR",
    iso3: "MRT",
    phone_code: "222",
  },
  {
    nombre: "Mayotte",
    name: "Mayotte",
    nom: "Mayotte",
    iso2: "YT",
    iso3: "MYT",
    phone_code: "262",
  },
  {
    nombre: "Micronesia",
    name: "Estados Federados de",
    nom: "Federados Estados de",
    iso2: "FM",
    iso3: "FSM",
    phone_code: "691",
  },
  {
    nombre: "Moldavia",
    name: "Moldova",
    nom: "Moldavie",
    iso2: "MD",
    iso3: "MDA",
    phone_code: "373",
  },
  {
    nombre: "Mongolia",
    name: "Mongolia",
    nom: "Mongolie",
    iso2: "MN",
    iso3: "MNG",
    phone_code: "976",
  },
  {
    nombre: "Montenegro",
    name: "Montenegro",
    nom: "Monténégro",
    iso2: "ME",
    iso3: "MNE",
    phone_code: "382",
  },
  {
    nombre: "Montserrat",
    name: "Montserrat",
    nom: "Montserrat",
    iso2: "MS",
    iso3: "MSR",
    phone_code: "1 664",
  },
  {
    nombre: "Mozambique",
    name: "Mozambique",
    nom: "Mozambique",
    iso2: "MZ",
    iso3: "MOZ",
    phone_code: "258",
  },
  {
    nombre: "Namibia",
    name: "Namibia",
    nom: "Namibie",
    iso2: "NA",
    iso3: "NAM",
    phone_code: "264",
  },
  {
    nombre: "Nauru",
    name: "Nauru",
    nom: "Nauru",
    iso2: "NR",
    iso3: "NRU",
    phone_code: "674",
  },
  {
    nombre: "Nepal",
    name: "Nepal",
    nom: "Népal",
    iso2: "NP",
    iso3: "NPL",
    phone_code: "977",
  },
  {
    nombre: "Nicaragua",
    name: "Nicaragua",
    nom: "Nicaragua",
    iso2: "NI",
    iso3: "NIC",
    phone_code: "505",
  },
  {
    nombre: "Niger",
    name: "Niger",
    nom: "Niger",
    iso2: "NE",
    iso3: "NER",
    phone_code: "227",
  },
  {
    nombre: "Nigeria",
    name: "Nigeria",
    nom: "Nigeria",
    iso2: "NG",
    iso3: "NGA",
    phone_code: "234",
  },
  {
    nombre: "Niue",
    name: "Niue",
    nom: "Niou",
    iso2: "NU",
    iso3: "NIU",
    phone_code: "683",
  },
  {
    nombre: "Noruega",
    name: "Norway",
    nom: "Norvège",
    iso2: "NO",
    iso3: "NOR",
    phone_code: "47",
  },
  {
    nombre: "Nueva Caledonia",
    name: "New Caledonia",
    nom: "Nouvelle-Calédonie",
    iso2: "NC",
    iso3: "NCL",
    phone_code: "687",
  },
  {
    nombre: "Nueva Zelanda",
    name: "New Zealand",
    nom: "Nouvelle-Zélande",
    iso2: "NZ",
    iso3: "NZL",
    phone_code: "64",
  },
  {
    nombre: "Omán",
    name: "Oman",
    nom: "Oman",
    iso2: "OM",
    iso3: "OMN",
    phone_code: "968",
  },
  {
    nombre: "Países Bajos",
    name: "Netherlands",
    nom: "Pays-Bas",
    iso2: "NL",
    iso3: "NLD",
    phone_code: "31",
  },
  {
    nombre: "Pakistán",
    name: "Pakistan",
    nom: "Pakistan",
    iso2: "PK",
    iso3: "PAK",
    phone_code: "92",
  },
  {
    nombre: "Palau",
    name: "Palau",
    nom: "Palau",
    iso2: "PW",
    iso3: "PLW",
    phone_code: "680",
  },
  {
    nombre: "Palestina",
    name: "Palestine",
    nom: "La Palestine",
    iso2: "PS",
    iso3: "PSE",
    phone_code: "",
  },
  {
    nombre: "Panamá",
    name: "Panama",
    nom: "Panama",
    iso2: "PA",
    iso3: "PAN",
    phone_code: "507",
  },
  {
    nombre: "Papúa Nueva Guinea",
    name: "Papua New Guinea",
    nom: "Papouasie-Nouvelle-Guinée",
    iso2: "PG",
    iso3: "PNG",
    phone_code: "675",
  },
  {
    nombre: "Paraguay",
    name: "Paraguay",
    nom: "Paraguay",
    iso2: "PY",
    iso3: "PRY",
    phone_code: "595",
  },
  {
    nombre: "Perú",
    name: "Peru",
    nom: "Pérou",
    iso2: "PE",
    iso3: "PER",
    phone_code: "51",
  },
  {
    nombre: "Polinesia Francesa",
    name: "French Polynesia",
    nom: "Polynésie française",
    iso2: "PF",
    iso3: "PYF",
    phone_code: "689",
  },
  {
    nombre: "Polonia",
    name: "Poland",
    nom: "Pologne",
    iso2: "PL",
    iso3: "POL",
    phone_code: "48",
  },
  {
    nombre: "Portugal",
    name: "Portugal",
    nom: "Portugal",
    iso2: "PT",
    iso3: "PRT",
    phone_code: "351",
  },
  {
    nombre: "Puerto Rico",
    name: "Puerto Rico",
    nom: "Porto Rico",
    iso2: "PR",
    iso3: "PRI",
    phone_code: "1",
  },
  {
    nombre: "Qatar",
    name: "Qatar",
    nom: "Qatar",
    iso2: "QA",
    iso3: "QAT",
    phone_code: "974",
  },
  {
    nombre: "Reino Unido",
    name: "United Kingdom",
    nom: "Royaume-Uni",
    iso2: "GB",
    iso3: "GBR",
    phone_code: "44",
  },
  {
    nombre: "República Centroafricana",
    name: "Central African Republic",
    nom: "République Centrafricaine",
    iso2: "CF",
    iso3: "CAF",
    phone_code: "236",
  },
  {
    nombre: "República Checa",
    name: "Czech Republic",
    nom: "République Tchèque",
    iso2: "CZ",
    iso3: "CZE",
    phone_code: "420",
  },
  {
    nombre: "República Dominicana",
    name: "Dominican Republic",
    nom: "République Dominicaine",
    iso2: "DO",
    iso3: "DOM",
    phone_code: "1 809",
  },
  {
    nombre: "Reunión",
    name: "Réunion",
    nom: "Réunion",
    iso2: "RE",
    iso3: "REU",
    phone_code: "",
  },
  {
    nombre: "Ruanda",
    name: "Rwanda",
    nom: "Rwanda",
    iso2: "RW",
    iso3: "RWA",
    phone_code: "250",
  },
  {
    nombre: "Rumanía",
    name: "Romania",
    nom: "Roumanie",
    iso2: "RO",
    iso3: "ROU",
    phone_code: "40",
  },
  {
    nombre: "Rusia",
    name: "Russia",
    nom: "La Russie",
    iso2: "RU",
    iso3: "RUS",
    phone_code: "7",
  },
  {
    nombre: "Sahara Occidental",
    name: "Western Sahara",
    nom: "Sahara Occidental",
    iso2: "EH",
    iso3: "ESH",
    phone_code: "",
  },
  {
    nombre: "Samoa",
    name: "Samoa",
    nom: "Samoa",
    iso2: "WS",
    iso3: "WSM",
    phone_code: "685",
  },
  {
    nombre: "Samoa Americana",
    name: "American Samoa",
    nom: "Les Samoa américaines",
    iso2: "AS",
    iso3: "ASM",
    phone_code: "1 684",
  },
  {
    nombre: "San Bartolomé",
    name: "Saint Barthélemy",
    nom: "Saint-Barthélemy",
    iso2: "BL",
    iso3: "BLM",
    phone_code: "590",
  },
  {
    nombre: "San Cristóbal y Nieves",
    name: "Saint Kitts and Nevis",
    nom: "Saint Kitts et Nevis",
    iso2: "KN",
    iso3: "KNA",
    phone_code: "1 869",
  },
  {
    nombre: "San Marino",
    name: "San Marino",
    nom: "San Marino",
    iso2: "SM",
    iso3: "SMR",
    phone_code: "378",
  },
  {
    nombre: "San Martín (Francia)",
    name: "Saint Martin (French part)",
    nom: "Saint-Martin (partie française)",
    iso2: "MF",
    iso3: "MAF",
    phone_code: "1 599",
  },
  {
    nombre: "San Pedro y Miquelón",
    name: "Saint Pierre and Miquelon",
    nom: "Saint-Pierre-et-Miquelon",
    iso2: "PM",
    iso3: "SPM",
    phone_code: "508",
  },
  {
    nombre: "San Vicente y las Granadinas",
    name: "Saint Vincent and the Grenadines",
    nom: "Saint-Vincent et Grenadines",
    iso2: "VC",
    iso3: "VCT",
    phone_code: "1 784",
  },
  {
    nombre: "Santa Elena",
    name: "Ascensión y Tristán de Acuña",
    nom: "Ascensión y Tristan de Acuña",
    iso2: "SH",
    iso3: "SHN",
    phone_code: "290",
  },
  {
    nombre: "Santa Lucía",
    name: "Saint Lucia",
    nom: "Sainte-Lucie",
    iso2: "LC",
    iso3: "LCA",
    phone_code: "1 758",
  },
  {
    nombre: "Santo Tomé y Príncipe",
    name: "Sao Tome and Principe",
    nom: "Sao Tomé et Principe",
    iso2: "ST",
    iso3: "STP",
    phone_code: "239",
  },
  {
    nombre: "Senegal",
    name: "Senegal",
    nom: "Sénégal",
    iso2: "SN",
    iso3: "SEN",
    phone_code: "221",
  },
  {
    nombre: "Serbia",
    name: "Serbia",
    nom: "Serbie",
    iso2: "RS",
    iso3: "SRB",
    phone_code: "381",
  },
  {
    nombre: "Seychelles",
    name: "Seychelles",
    nom: "Les Seychelles",
    iso2: "SC",
    iso3: "SYC",
    phone_code: "248",
  },
  {
    nombre: "Sierra Leona",
    name: "Sierra Leone",
    nom: "Sierra Leone",
    iso2: "SL",
    iso3: "SLE",
    phone_code: "232",
  },
  {
    nombre: "Singapur",
    name: "Singapore",
    nom: "Singapour",
    iso2: "SG",
    iso3: "SGP",
    phone_code: "65",
  },
  {
    nombre: "Siria",
    name: "Syria",
    nom: "Syrie",
    iso2: "SY",
    iso3: "SYR",
    phone_code: "963",
  },
  {
    nombre: "Somalia",
    name: "Somalia",
    nom: "Somalie",
    iso2: "SO",
    iso3: "SOM",
    phone_code: "252",
  },
  {
    nombre: "Sri lanka",
    name: "Sri Lanka",
    nom: "Sri Lanka",
    iso2: "LK",
    iso3: "LKA",
    phone_code: "94",
  },
  {
    nombre: "Sudáfrica",
    name: "South Africa",
    nom: "Afrique du Sud",
    iso2: "ZA",
    iso3: "ZAF",
    phone_code: "27",
  },
  {
    nombre: "Sudán",
    name: "Sudan",
    nom: "Soudan",
    iso2: "SD",
    iso3: "SDN",
    phone_code: "249",
  },
  {
    nombre: "Suecia",
    name: "Sweden",
    nom: "Suède",
    iso2: "SE",
    iso3: "SWE",
    phone_code: "46",
  },
  {
    nombre: "Suiza",
    name: "Switzerland",
    nom: "Suisse",
    iso2: "CH",
    iso3: "CHE",
    phone_code: "41",
  },
  {
    nombre: "Surinám",
    name: "Suriname",
    nom: "Surinam",
    iso2: "SR",
    iso3: "SUR",
    phone_code: "597",
  },
  {
    nombre: "Svalbard y Jan Mayen",
    name: "Svalbard and Jan Mayen",
    nom: "Svalbard et Jan Mayen",
    iso2: "SJ",
    iso3: "SJM",
    phone_code: "",
  },
  {
    nombre: "Swazilandia",
    name: "Swaziland",
    nom: "Swaziland",
    iso2: "SZ",
    iso3: "SWZ",
    phone_code: "268",
  },
  {
    nombre: "Tadjikistán",
    name: "Tajikistan",
    nom: "Le Tadjikistan",
    iso2: "TJ",
    iso3: "TJK",
    phone_code: "992",
  },
  {
    nombre: "Tailandia",
    name: "Thailand",
    nom: "Thaïlande",
    iso2: "TH",
    iso3: "THA",
    phone_code: "66",
  },
  {
    nombre: "Taiwán",
    name: "Taiwan",
    nom: "Taiwan",
    iso2: "TW",
    iso3: "TWN",
    phone_code: "886",
  },
  {
    nombre: "Tanzania",
    name: "Tanzania",
    nom: "Tanzanie",
    iso2: "TZ",
    iso3: "TZA",
    phone_code: "255",
  },
  {
    nombre: "Territorio Británico del Océano Índico",
    name: "British Indian Ocean Territory",
    nom: "Territoire britannique de l'océan Indien",
    iso2: "IO",
    iso3: "IOT",
    phone_code: "",
  },
  {
    nombre: "Territorios Australes y Antárticas Franceses",
    name: "French Southern Territories",
    nom: "Terres australes françaises",
    iso2: "TF",
    iso3: "ATF",
    phone_code: "",
  },
  {
    nombre: "Timor Oriental",
    name: "East Timor",
    nom: "Timor-Oriental",
    iso2: "TL",
    iso3: "TLS",
    phone_code: "670",
  },
  {
    nombre: "Togo",
    name: "Togo",
    nom: "Togo",
    iso2: "TG",
    iso3: "TGO",
    phone_code: "228",
  },
  {
    nombre: "Tokelau",
    name: "Tokelau",
    nom: "Tokélaou",
    iso2: "TK",
    iso3: "TKL",
    phone_code: "690",
  },
  {
    nombre: "Tonga",
    name: "Tonga",
    nom: "Tonga",
    iso2: "TO",
    iso3: "TON",
    phone_code: "676",
  },
  {
    nombre: "Trinidad y Tobago",
    name: "Trinidad and Tobago",
    nom: "Trinidad et Tobago",
    iso2: "TT",
    iso3: "TTO",
    phone_code: "1 868",
  },
  {
    nombre: "Tunez",
    name: "Tunisia",
    nom: "Tunisie",
    iso2: "TN",
    iso3: "TUN",
    phone_code: "216",
  },
  {
    nombre: "Turkmenistán",
    name: "Turkmenistan",
    nom: "Le Turkménistan",
    iso2: "TM",
    iso3: "TKM",
    phone_code: "993",
  },
  {
    nombre: "Turquía",
    name: "Turkey",
    nom: "Turquie",
    iso2: "TR",
    iso3: "TUR",
    phone_code: "90",
  },
  {
    nombre: "Tuvalu",
    name: "Tuvalu",
    nom: "Tuvalu",
    iso2: "TV",
    iso3: "TUV",
    phone_code: "688",
  },
  {
    nombre: "Ucrania",
    name: "Ukraine",
    nom: "L'Ukraine",
    iso2: "UA",
    iso3: "UKR",
    phone_code: "380",
  },
  {
    nombre: "Uganda",
    name: "Uganda",
    nom: "Ouganda",
    iso2: "UG",
    iso3: "UGA",
    phone_code: "256",
  },
  {
    nombre: "Uruguay",
    name: "Uruguay",
    nom: "Uruguay",
    iso2: "UY",
    iso3: "URY",
    phone_code: "598",
  },
  {
    nombre: "Uzbekistán",
    name: "Uzbekistan",
    nom: "L'Ouzbékistan",
    iso2: "UZ",
    iso3: "UZB",
    phone_code: "998",
  },
  {
    nombre: "Vanuatu",
    name: "Vanuatu",
    nom: "Vanuatu",
    iso2: "VU",
    iso3: "VUT",
    phone_code: "678",
  },
  {
    nombre: "Venezuela",
    name: "Venezuela",
    nom: "Venezuela",
    iso2: "VE",
    iso3: "VEN",
    phone_code: "58",
  },
  {
    nombre: "Vietnam",
    name: "Vietnam",
    nom: "Vietnam",
    iso2: "VN",
    iso3: "VNM",
    phone_code: "84",
  },
  {
    nombre: "Wallis y Futuna",
    name: "Wallis and Futuna",
    nom: "Wallis et Futuna",
    iso2: "WF",
    iso3: "WLF",
    phone_code: "681",
  },
  {
    nombre: "Yemen",
    name: "Yemen",
    nom: "Yémen",
    iso2: "YE",
    iso3: "YEM",
    phone_code: "967",
  },
  {
    nombre: "Yibuti",
    name: "Djibouti",
    nom: "Djibouti",
    iso2: "DJ",
    iso3: "DJI",
    phone_code: "253",
  },
  {
    nombre: "Zambia",
    name: "Zambia",
    nom: "Zambie",
    iso2: "ZM",
    iso3: "ZMB",
    phone_code: "260",
  },
  {
    nombre: "Zimbabue",
    name: "Zimbabwe",
    nom: "Zimbabwe",
    iso2: "ZW",
    iso3: "ZWE",
    phone_code: "263",
  },
];

interface userRegister {
  name: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
  phone: string;
  phone_code: string;
  country: string;
}

export const ContainerApp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  //@ts-ignore
  const { setUser, user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleCloseLogin = () => setOpenLogin(false);
  const handleCloseRegister = () => setOpenRegister(false);

  const getLogin = async (email: string, password: string) => {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const response = await fetch("http://localhost/server/login.php", {
      method: "POST",
      body: form,
    });
    const data = await response.json();
    console.log(data);

    setUser(data);

    return data;
  };

  const getRegister = async (values: userRegister) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("lastname", values.lastname);
    form.append("email", values.email);
    form.append("password", values.password);
    form.append("phone", values.phone);
    form.append("phone_code", values.phone_code);

    const response = await fetch("http://localhost/server/register.php", {
      method: "POST",
      body: form,
    });
    const data = await response.json();
    setUser(data);
    console.log(data);
    return data;
  };

  const handleNext = () => {
    if (currentPage === 5) return;

    setCurrentPage(currentPage + 1);
    if (currentPage === 1) {
      if (document.querySelector("#box-two")) {
        // @ts-ignore
        document
          .querySelector("#box-two")
          .classList.remove("animate__fadeInLeft");
        // @ts-ignore

        document
          .querySelector("#box-two")
          .classList.add("animate__fadeOutLeft");
      }
    }
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      if (document.querySelector("#box-two")) {
        // @ts-ignore
        document
          .querySelector("#box-two")
          .classList.remove("animate__fadeInLeft");
        // @ts-ignore

        document
          .querySelector("#box-two")
          .classList.add("animate__fadeOutLeft");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100wh",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        component="video"
        src="IMG/BACKGROUND_PLEXUS_INVERBET.mp4"
        autoPlay={true}
        loop
        muted
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          padding: "0",
          margin: "0",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="img"
            src="IMG/ISOTIPO INVERBET_01.png"
            sx={{
              width: "6rem",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "bold",
              fontFamily: "rexlia",
              letterSpacing: "0.5rem",
            }}
          >
            MENÚ
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "rexlia",
              letterSpacing: "0.5rem",
              color: "white",
              paddingTop: "1rem",
              fontSize: "1rem",
            }}
          >
            SÍGUENOS EN:
          </Typography>
          <Box
            component="img"
            src="IMG/INSTAGRAM.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/FACEBOOK.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/TIKTOK.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/YOUTUBE.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/WHATSAPP.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            sx={{
              height: "2.5rem",
              marginTop: "0.5rem",
              border: "1px solid white",
            }}
          />

          <Box sx={{ margin: "0 1rem" }}>
            {!user.id ? (
              <>
                <Button
                  onClick={() => setOpenRegister(true)}
                  sx={{
                    marginTop: "0.5rem",

                    color: "white",
                    fontFamily: "rexlia",
                    letterSpacing: "0.3rem",
                    border: "2px solid white",
                    borderRadius: "1rem 0 0 1rem",
                  }}
                >
                  registrate
                </Button>
                <Button
                  onClick={() => setOpenLogin(true)}
                  sx={{
                    marginTop: "0.5rem",
                    color: "white",
                    fontFamily: "rexlia",
                    letterSpacing: "0.3rem",
                    border: "2px solid white",
                    borderRadius: "0 1rem 1rem 0",
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/Dashboard")}
                  sx={{
                    marginTop: "0.5rem",

                    color: "white",
                    fontFamily: "rexlia",
                    letterSpacing: "0.3rem",
                    border: "2px solid white",
                    borderRadius: "1rem 0 0 1rem",
                  }}
                >
                  DashBoard
                </Button>
                <Button
                  onClick={() => localStorage.removeItem("user")}
                  sx={{
                    marginTop: "0.5rem",
                    color: "white",
                    fontFamily: "rexlia",
                    letterSpacing: "0.3rem",
                    border: "2px solid white",
                    borderRadius: "0 1rem 1rem 0",
                  }}
                >
                  Salir
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={handleBack}>
          <KeyboardArrowLeft
            sx={{
              display: currentPage === 0 ? "none" : "block",
              color: "white",
              fontSize: "5rem",
            }}
          />
        </Button>
        {currentPage === 0 && (
          <Box
            id="box-one"
            className="animate__animated animate__fadeInLeft"
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Typography sx={{ fontFamily: "rexlia", fontSize: "1.5rem" }}>
              LA REVOLUCIÓN DEL TRADING DEPORTIVO
            </Typography>
            <Box
              component="img"
              src="IMG/BRAND INVERBET_07.png"
              sx={{ width: "70%" }}
            />
          </Box>
        )}
        {currentPage === 1 && (
          <Box
            id="box-two"
            className={
              currentPage === 1
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/I.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                TRADING <br /> DEPORTIVO
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Una manera inteligente de rentabilizar tu dinero.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 2 && (
          <Box
            id="box-three"
            className={
              currentPage === 2
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/N.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                INVERBET <br /> PREMIUM
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Todo lo necesario para operar de manera segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 3 && (
          <Box
            id="box-three"
            className={
              currentPage === 3
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/V.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                COWORKING <br /> INVERBET
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                El espacio perfecto para operar de manera guíada y segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 4 && (
          <Box
            id="box-three"
            className={
              currentPage === 4
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/E.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                INVERBET <br /> ACADEMY
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Metodos,estrategias,modelos y recomendaciones.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 5 && (
          <Box
            id="box-three"
            className={
              currentPage === 5
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/R.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                CASAS DE <br /> APUESTAS
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Nuestros aliados para una operacion segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        <Button onClick={handleNext}>
          <KeyboardArrowRight
            sx={{
              color: "white",
              display: currentPage === 5 ? "none" : "block",
              fontSize: "5rem",
              cursor: "pointer",
            }}
          />
        </Button>
      </Box>

      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            borderRadius: 2.5,
            boxShadow: 1,
            p: 1.5,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              border: "2px solid white ",
              boxShadow: "inset 0 0 5px red,0 0 5px red",
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="IMG/ISOTIPO INVERBET_01.png"
              sx={{
                width: "6rem",
                filter: "drop-shadow(0px 0px 5px black)",
              }}
            />
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  // @ts-ignore

                  errors.email = "Correo requerido";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  // @ts-ignore

                  errors.email = "Correo invalido";
                }
                if (!values.password) {
                  // @ts-ignore

                  errors.password = "Contraseña requerida";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                console.log("values", values);
                let response;
                try {
                  response = await getLogin(values.email, values.password);
                } catch (error) {
                  response = "Ha ocurrido un error, intente nuevamente";
                }
                setSubmitting(false);
                if (typeof response === "string")
                  setErrors({ password: response });
                else localStorage.setItem("user", JSON.stringify(response));
                handleCloseLogin();
              }}
            >
              {({ isSubmitting }) =>
                (isSubmitting === false && (
                  <Form
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Field
                      style={{
                        width: "100%",
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "0.5rem",
                        fontFamily: "rexlia",
                        border: "1px solid #686868",
                        borderRadius: " 1rem",
                      }}
                      placeholder="Correo"
                      type="email"
                      name="email"
                    />

                    <ErrorMessage
                      //@ts-ignore
                      style={{
                        color: "red",
                        fontFamily: "rexlia",
                        fontSize: "0.8rem",
                        marginBottom: "0.5rem",
                      }}
                      name="email"
                      component="div"
                    />
                    <Field
                      style={{
                        width: "100%",

                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "0.5rem",
                        fontFamily: "rexlia",
                        border: "1px solid #686868",
                        borderRadius: " 1rem",
                      }}
                      placeholder="Contraseña"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage
                      //@ts-ignore
                      style={{
                        color: "red",
                        fontFamily: "rexlia",
                        fontSize: "0.8rem",
                        marginBottom: "0.5rem",
                      }}
                      name="password"
                      component="div"
                    />
                    <Button
                      sx={{
                        fontFamily: "rexlia",
                        fontSize: "0.7rem",
                        color: "gray",
                        marginBottom: "1rem",
                      }}
                    >
                      olvide mi contraseña
                    </Button>
                    <Button
                      sx={{
                        fontFamily: "rexlia",
                        fontSize: "0.7rem",
                        color: "white",
                        textShadow: "0 0 5px red,0 0 5px red",
                        borderRadius: 2.5,
                        border: "2px solid white ",
                        boxShadow: "inset 0 0 5px red,0 0 5px red",
                        marginBottom: "1rem",
                        width: "100%",
                      }}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Ingresar
                    </Button>
                  </Form>
                )) ||
                (isSubmitting === true && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress
                      sx={{ color: "red", margin: 5, padding: 4 }}
                    />
                  </Box>
                ))
              }
            </Formik>
          </Box>
        </Box>
      </Modal>
      <Modal open={openRegister} onClose={handleCloseRegister}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            borderRadius: 2.5,
            boxShadow: 1,
            p: 1.5,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              border: "2px solid white ",
              boxShadow: "inset 0 0 5px red,0 0 5px red",
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="IMG/ISOTIPO INVERBET_01.png"
              sx={{
                width: "6rem",
                filter: "drop-shadow(0px 0px 5px black)",
              }}
            />
            <Formik
              initialValues={{
                email: "",
                password: "",
                name: "",
                lastname: "",
                password2: "",
                phone: "",
                phone_code: "",
                country: "",
              }}
              validate={(values) => {
                const errors = {};
                var strongRegex = new RegExp(
                  "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
                  "g"
                );
                var mediumRegex = new RegExp(
                  "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
                  "g"
                );
                var enoughRegex = new RegExp("(?=.{6,}).*", "g");
                if (!values.email) {
                  // @ts-ignore
                  errors.email = "Correo requerido";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  // @ts-ignore
                  errors.email = "Correo invalido";
                }

                if (false === enoughRegex.test(values.password)) {
                  // @ts-ignore
                  errors.password = "Contraseña muy debil";
                } else if (strongRegex.test(values.password)) {
                  // @ts-ignore
                  delete errors.password;
                } else if (mediumRegex.test(values.password)) {
                  // @ts-ignore
                  errors.password = "Contraseña Media";
                } else {
                  // @ts-ignore
                  errors.password = "Contraseña debil";
                }

                if (!values.password) {
                  // @ts-ignore
                  errors.password = "Contraseña requerida";
                }

                if (!values.name) {
                  // @ts-ignore
                  errors.name = "Nombre requerido";
                }
                if (!values.lastname) {
                  // @ts-ignore
                  errors.lastname = "Apellido requerido";
                }
                if (!values.password2) {
                  // @ts-ignore
                  errors.password2 = "Contraseña requerida";
                }
                if (!values.phone) {
                  // @ts-ignore
                  errors.phone = "Telefono requerido";
                }
                if (values.password !== values.password2) {
                  // @ts-ignore
                  errors.password2 = "Contraseñas no coinciden";
                }
                if (!values.country) {
                  // @ts-ignore
                  errors.country = "Pais requerido";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                console.log("values", values);
                let response;
                try {
                  response = await getRegister(values);
                } catch (error) {
                  response = "Ha ocurrido un error, intente nuevamente";
                }
                setSubmitting(false);
                if (typeof response === "string")
                  setErrors({ password: response });
              }}
            >
              {({ isSubmitting, setFieldValue }) =>
                (isSubmitting === false && (
                  <Form
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <Box>
                        <Field
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            padding: "0.5rem",
                            fontFamily: "rexlia",
                            border: "1px solid #686868",
                            borderRadius: " 1rem",
                          }}
                          placeholder="Nombres"
                          type="text"
                          name="name"
                        />
                        <ErrorMessage
                          //@ts-ignore
                          style={{
                            color: "red",
                            fontFamily: "rexlia",
                            fontSize: "0.8rem",
                            marginBottom: "0.5rem",
                          }}
                          name="name"
                          component="div"
                        />
                      </Box>
                      <Box>
                        <Field
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            padding: "0.5rem",
                            fontFamily: "rexlia",
                            border: "1px solid #686868",
                            borderRadius: " 1rem",
                          }}
                          placeholder="Apellidos"
                          type="text"
                          name="lastname"
                        />
                        <ErrorMessage
                          //@ts-ignore
                          style={{
                            color: "red",
                            fontFamily: "rexlia",
                            fontSize: "0.8rem",
                            marginBottom: "0.5rem",
                          }}
                          name="lastname"
                          component="div"
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Field
                        style={{
                          width: "100%",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          padding: "0.5rem",
                          fontFamily: "rexlia",
                          border: "1px solid #686868",
                          borderRadius: " 1rem",
                        }}
                        placeholder="Correo"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage
                        //@ts-ignore
                        style={{
                          color: "red",
                          fontFamily: "rexlia",
                          fontSize: "0.8rem",
                          marginBottom: "0.5rem",
                        }}
                        name="email"
                        component="div"
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Field
                        style={{
                          width: "100%",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          padding: "0.5rem",
                          fontFamily: "rexlia",
                          border: "1px solid #686868",
                          borderRadius: " 1rem",
                        }}
                        placeholder="Contraseña"
                        type="password"
                        name="password"
                      />
                      <ErrorMessage
                        //@ts-ignore
                        style={{
                          color: "red",
                          fontFamily: "rexlia",
                          fontSize: "0.8rem",
                          marginBottom: "0.5rem",
                        }}
                        name="password"
                        component="div"
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Field
                        style={{
                          width: "100%",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          padding: "0.5rem",
                          fontFamily: "rexlia",
                          border: "1px solid #686868",
                          borderRadius: " 1rem",
                        }}
                        placeholder="Confirmar contraseña"
                        type="password"
                        name="password2"
                      />
                      <ErrorMessage
                        //@ts-ignore
                        style={{
                          color: "red",
                          fontFamily: "rexlia",
                          fontSize: "0.8rem",
                          marginBottom: "0.5rem",
                        }}
                        name="password2"
                        component="div"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        marginBottom: "1rem",
                      }}
                    >
                      <Box width="45%">
                        <Field
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            padding: "0.5rem",
                            fontFamily: "rexlia",
                            border: "1px solid #686868",
                            borderRadius: " 1rem",
                          }}
                          placeholder="Pais"
                          as="select"
                          name="country"
                          //@ts-ignore
                          onChange={(e) => {
                            setFieldValue("phone_code", `+${e.target.value}`);
                            setFieldValue("country", e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            Pais
                          </option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.phone_code}>
                              {`${country.nombre}`}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          //@ts-ignore
                          style={{
                            color: "red",
                            fontFamily: "rexlia",
                            fontSize: "0.8rem",
                            marginBottom: "0.5rem",
                          }}
                          name="country"
                          component="div"
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "15%",
                        }}
                      >
                        <Field
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            marginLeft: "-0.4rem",
                            padding: "0.5rem",
                            fontFamily: "rexlia",
                            border: "1px solid #686868",
                            borderRadius: " 1rem",
                          }}
                          type="text"
                          name="phone_code"
                          disabled
                        />
                      </Box>
                      <Box width="50%">
                        <Field
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            padding: "0.5rem",
                            fontFamily: "rexlia",
                            border: "1px solid #686868",
                            borderRadius: " 1rem",
                          }}
                          placeholder="Telefono"
                          type="text"
                          name="phone"
                        />
                        <ErrorMessage
                          //@ts-ignore
                          style={{
                            color: "red",
                            fontFamily: "rexlia",
                            fontSize: "0.8rem",
                            marginBottom: "0.5rem",
                          }}
                          name="phone"
                          component="div"
                        />
                      </Box>
                    </Box>

                    <Button
                      sx={{
                        fontFamily: "rexlia",
                        fontSize: "0.7rem",
                        color: "white",
                        textShadow: "0 0 5px red,0 0 5px red",
                        borderRadius: 2.5,
                        border: "2px solid white ",
                        boxShadow: "inset 0 0 5px red,0 0 5px red",
                        marginBottom: "1rem",
                        width: "100%",
                      }}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Registrarse
                    </Button>
                  </Form>
                )) ||
                (isSubmitting === true && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress
                      sx={{ color: "red", margin: 5, padding: 4 }}
                    />
                  </Box>
                ))
              }
            </Formik>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
