
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;

    setTimeout(() => {
      const header = document.getElementById("site-header");
      const spacer = document.getElementById("header-spacer");

      if(header && spacer){
        spacer.style.height = header.offsetHeight + "px";
      }
    }, 100);
  });

window.addEventListener("resize", () => {
  const header = document.getElementById("site-header");
  const spacer = document.getElementById("header-spacer");
  if(header && spacer){
    spacer.style.height = header.offsetHeight + "px";
  }
});



const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hide-loader");
  setTimeout(()=> preloader.style.display="none",500);
});
