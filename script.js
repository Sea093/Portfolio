const skills = [
  ["01","Python","Programming"],
  ["02","SQL","Data & Databases"],
  ["03","MongoDB","NoSQL Database"],
  ["04","Machine Learning","Predictive Models"],
  ["05","Artificial Intelligence","Intelligent Systems"],
  ["06","HTML & CSS","Web Foundations"],
  ["07","JavaScript","Interactive Web"],
  ["08","React","Front-end Development"],
  ["09","Git & GitHub","Version Control"],
  ["10","Data Science","Analytics & Insights"]
];

const projects = [
  ["01","Flight Price Prediction","ML model that predicts flight ticket prices using travel and flight details.","Python • Pandas • ML"],
  ["02","House Price Prediction","ML model that predicts house prices based on property features and market factors.","Python • Regression • EDA"],
  ["03","Rice Leaf Disease","Classifies rice leaf diseases using image-based ML.","Python • AI • Computer Vision"],
  ["04","Heart Disease Prediction","Classifies patients based on heart disease risk.","Python • ML • Classification"],
  ["05","Portfolio Website","Responsive website showcasing my skills, projects, and professional profile.","HTML • CSS • JavaScript • Responsive UI"]
];

document.getElementById("skillsGrid").innerHTML = skills.map(s =>
  `<article class="skill reveal"><div class="skill-number">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></article>`
).join("");

document.getElementById("projectGrid").innerHTML = projects.map(p =>
  `<article class="project reveal"><span class="project-index">${p[0]} / PROJECT</span><h3>${p[1]}</h3><p>${p[2]}</p><div class="tech">${p[3]}</div></article>`
).join("");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("show", window.scrollY > 500);
  const sections = [...document.querySelectorAll("section")];
  const current = sections.find(s => window.scrollY >= s.offsetTop - 160 && window.scrollY < s.offsetTop + s.offsetHeight);
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  if (current) {
    const link = document.querySelector(`nav a[href="#${current.id}"]`);
    if (link) link.classList.add("active");
  }
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  navbar.classList.toggle("open");
});
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => navbar.classList.remove("open")));
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.getElementById("year").textContent = new Date().getFullYear();
