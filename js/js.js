let activeInput = document.querySelector("#active-input");
activeInput.addEventListener("click", change);

function change() {
  document.documentElement.style.setProperty("--backgroundImg", "none");
  document.documentElement.style.setProperty("--showcase-bg-color", "#fff");
  document.documentElement.style.setProperty("--showcase-color", "#000");
  document.documentElement.style.setProperty("--input-inner-color", "#000");
  document.documentElement.style.setProperty("--stat-color", "#F7F7F7");
  document.documentElement.style.setProperty("--input-color", "rgba(247,247,247)");
  document.documentElement.style.setProperty("--linear-gradient", "none");
} 

