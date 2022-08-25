import { navbarfun, footerfun } from "../component/navbar.js";
let c = document.getElementById("nav_container");
c.innerHTML = navbarfun();
console.log(navbarfun);
console.log(footerfun);

let post_data = new Array(
  {
    image: "https://blog.fathomhealth.com/hubfs/future.jpg",
    post_type: "INDUSTRY NEWS",
    post_type_url:
      "https://blog.fathomhealth.com/top-10-revenue-cycle-trends-for-2020",
    headline: "Our top 10 revenue cycle management trends",
    headline_url:
      "https://blog.fathomhealth.com/top-10-revenue-cycle-trends-for-2020",
    description:
      "Our CEO provides a look for what we can expect to see happen in the RCM landscape in the year ahead.",
    description_url:
      "https://blog.fathomhealth.com/top-10-revenue-cycle-trends-for-2020",
  },
  {
    image:
      "https://blog.fathomhealth.com/hubfs/andy-kelly-0E_vhMVqL9g-unsplash.jpg",
    post_type: "ARTIFICIAL INTELLLIGENCE",
    post_type_url:
      "https://blog.fathomhealth.com/artificial-intelligence-vs-robotic-process-automation",
    headline: "Artificial intelligence vs. robotic process automation",
    headline_url:
      "https://blog.fathomhealth.com/artificial-intelligence-vs-robotic-process-automation",
    description:
      "A brief rundown of the differences between between these two technologies and their applications.",
    description_url:
      "https://blog.fathomhealth.com/artificial-intelligence-vs-robotic-process-automation",
  },
  {
    image:
      "https://blog.fathomhealth.com/hubfs/derek-thomson-NqJYQ3m_rVA-unsplash.jpg",
    post_type: "ARTIFICIAL INTELLIGENCE",
    post_type_url:
      "https://blog.fathomhealth.com/six-ways-ai-can-maximize-your-revenue-cycle",
    headline: "6 ways that AI can maximize your revenue cycle",
    headline_url:
      "https://blog.fathomhealth.com/six-ways-ai-can-maximize-your-revenue-cycle",
    description:
      "With the advent of artificial intelligence technology and its application in solving some of the most complex challenges...",
    description_url:
      "https://blog.fathomhealth.com/six-ways-ai-can-maximize-your-revenue-cycle",
  }
);
console.log(post_data);
let container = document.querySelector("#blogcontainer");
post_data.forEach(function (el) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = el.image;
  let h6 = document.createElement("h6");
  h6.innerText = el.post_type;
  let h1 = document.createElement("h1");
  h1.innerText = el.headline;
  let p = document.createElement("p");
  p.innerText = el.description;
  div.append(image, h6, h1, p);
  document.querySelector("#blogcontainer").append(div);
});
let f = document.getElementById("footer");
f.innerHTML = footerfun();
//extra
