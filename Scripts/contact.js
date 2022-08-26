import { navbarfun, footerfun } from "../component/navbar.js";
let c = document.getElementById("nav_container");
c.innerHTML = navbarfun();
console.log(navbarfun);
console.log(footerfun);
let f = document.getElementById("footer");
f.innerHTML = footerfun();
