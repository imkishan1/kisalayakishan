
AOS.init({
  anchorPlacement: 'top-left',
  duration: 500
});
document.getElementById('email').addEventListener('blur',validateEmail)
function validateEmail(){
    const email = document.getElementById('email');
    const re =/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/
 
    if(!re.test(email.value)){
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    }
    else{
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
}


var currage = document.getElementById('currage');
var date = new Date();
var year = parseInt(date.getFullYear());
var month= date.getMonth();
console.log(date)

if((month+1)>3)
{
  var age = (year-2000).toString();
  console.log(age)
}
else{
    var age = ((year-1)-2000).toString();
    console.log("age in here: ",age)
}
currage.innerText = age;

// function calculateDob(mydob)
// {
//   var diff = Date.now() - mydob.getTime();
//   var age_dt = new Date(diff); 
//   console.log(age_dt);
//   console.log(mydob.getTime())
//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// console.log(calculateDob(new Date(2000, 1, 1)))
// currage.innerText = calculateDob(new Date(2000, 1, 1));

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

const handleSubmit = (event) => {
  event.preventDefault()
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name
    })
  }).then(() => navigate("/thank-you/")).catch(error => alert(error))
}


// document.querySelector("form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = document.getElementById("");
//   let formData = new FormData(myForm);
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };



