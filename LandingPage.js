let bookbtn = document.getElementById('bookbtn');
let closebutton = document.getElementById('closebutton');
let formbox = document.getElementById('formbox');

bookbtn.addEventListener("click", function (){
  formbox.classList.remove("hidden");
  formbox.classList.add("flex");
});

closebutton.addEventListener("click", function () {
  formbox.classList.remove("flex");
  formbox.classList.add("hidden");
});
