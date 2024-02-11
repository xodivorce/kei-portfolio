const scriptURL = 'https://script.google.com/macros/s/AKfycbwVP9OrM3lx5KLnW076tva3vWgtnuzIV2De9H_-q-dTy9sA9qw4P0SQHtuMMaaDkgK8/exec'
const form = document.forms['student-info-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('submit-btn').innerText = "Submitting..."
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Student Information Added Successfully! 🎉"))
    .then(() => {
        document.getElementById('submit-btn').innerText = "Submit"
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
let docTitle = document.title;
window.addEventListener("blur", () =>{
  document.title = "Thanks for visitings us";
})
window.addEventListener("focus", () =>{
  document.title = docTitle;
})
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector(".preloader").style.display = "none";
  }, 1500);
});
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "assets/images/sun.png";
    }else{
      icon.src = "assets/images/moon.png";
    }
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}
