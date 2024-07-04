import { renderBustaiTable } from "../js/bustai.js";
import { namaiData } from "./data/namai.js";
import { butaiData } from "./data/butai.js";

const appDOM = document.getElementById('app');
appDOM.innerHTML = renderBustaiTable(namaiData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = renderBustaiTable(butaiData);
