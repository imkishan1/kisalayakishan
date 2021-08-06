// const data = {
//     labels: [
//       'SQL',
//       'Bootstrap',
//       'Java Script',
//       'HTML'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [30, 50,66,85],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)',
//         'rgb(255, 165, 0)'
//       ],
//       hoverOffset: 4
//     }]
//   }

// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
// });
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
AOS.init({
    anchorPlacement: 'top-left',
    duration: 500
  });

var currage = document.getElementById('currage');
var date = new Date();
var year = parseInt(date.getFullYear());
var month= date.getMonth();
console.log(month);
if(month>=4)
{
    var age = (year-2000).toString();
}
else{
    var age = ((year-1)-2000).toString();
}
currage.innerText = age;


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




