const banner = document.getElementById("under-construction");
const closeBtn = document.getElementById("close-banner");


function shouldShowBanner() {
  const bannerClosedTime = localStorage.getItem("bannerClosedTime");
  
  if (!bannerClosedTime) {
    return true;
  }
  
  const closedTime = new Date(parseInt(bannerClosedTime));
  const currentTime = new Date();
  const timeDifference = currentTime - closedTime;
  const twentyFourHours = 246060000;

  if (timeDifference >= twentyFourHours) {
    localStorage.removeItem("bannerClosedTime");
    return true;
  }
  
  return false;
}

if (shouldShowBanner()) {
  banner.classList.remove("hidden");
  setTimeout(() => {
    banner.classList.add("show");
    requestAnimationFrame(() => {
      banner.classList.add("show");
    });
  }, 1000);
} else {
}

closeBtn.addEventListener("click", () => {
  banner.classList.remove("show");
  localStorage.setItem("bannerClosedTime", Date.now().toString());
  setTimeout(() => {
    banner.classList.add("hidden");
  }, 1500);
});
