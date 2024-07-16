import { header } from "../js/header.js";
header();
import { renderTransportasTable } from "../js/transportas.js";
import { autoData } from "./data/auto.js";
import { motoData } from "./data/moto.js";

header();
const appDOM = document.getElementById('app');
appDOM.innerHTML = renderTransportasTable(autoData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = renderTransportasTable(motoData);