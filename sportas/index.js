import { renderSportTable } from "../js/sporto.js";
import { basketballData } from "./data/basketball.js";
import { footballData } from "./data/football.js";

const appDOM = document.getElementById('app');
appDOM.innerHTML = renderSportTable(basketballData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = renderSportTable(footballData);