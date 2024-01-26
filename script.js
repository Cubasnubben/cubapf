var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");
var barsIcon = document.querySelector(".fa-bars");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
  barsIcon.style.display = "none";
}

function closemenu() {
  sidemenu.style.right = "-200px";
  barsIcon.style.display = "block";
}

//popup

function openModal(event, modalId) {
  event.preventDefault();
  document.getElementById(modalId).classList.add("active");
  //   document.addEventListener("click", closeModalOutside);
}

function closeModal(event, modalId) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById(modalId).classList.remove("active");
  //   document.removeEventListener("click", closeModalOutside);
}

// function closeModalOutside(event) {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     if (!modal.contains(event.target)) {
//       modal.classList.remove("active");
//     }
//   });
// }
//Kontakt

function sendEmail(event) {
  event.preventDefault();

  var message = document.getElementsByName("Message")[0].value;

  var yourEmailAddress = "trill007@hotmail.com";
  var subject = "En första kontakt";
  var mailtoLink =
    "mailto:" +
    yourEmailAddress +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(message);

  window.location.href = mailtoLink;
}
