// const displayFormValues = (event) => {
//     event.preventDefault(); //

//     const form = document.getElementById("myForm");
//     const formData = new FormData(form);

//     console.log(formData)

//     const displayDiv = document.getElementById("display");
//     displayDiv.innerHTML = "";

//     for (const [name, value] of formData) {
//         const pElement = document.createElement("p");
//         pElement.textContent = `${name}: ${value}`;
//         displayDiv.appendChild(pElement);
//     }
// }
// const form = document.getElementById('form')
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const mobileno = document.getElementById("mobileno");
// const password = document.getElementById("password");
// //const form = document.querySelector("form");
// const errorMessage = document.getElementById("errorMessage");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     Validate();
//     const errors = [];
//     if (name.value.trim() === "") {
//         errors.push("Name required")
//     }
//     if (email.value.trim() === "") {
//         errors.push("Email required")
//     }
//     if (mobileno.value.length == 10) {
//         errors.push("Mobileno must be 10 characters")
//     }
//     if (password.value.length > 10) {
//         errors.push("Password must be less than 10 characters")
//     }


//     if (errors.length > 0) {
//         e.preventDefault();
//         errorMessage.toggleAttribute('hidden');
//         errorMessage.innerHTML = errorsjoin(',');
//     }
// })







const displayFormValues = (event) => {
    event.preventDefault();
    let nameInHtml = event.target.name.value

    let emailInHtml = event.target.email.value
    let mobilenoInHtml = event.target.mobileno.value
    let passInHtml = event.target.password.value

    document.getElementById('nm').innerHTML = nameInHtml

    document.getElementById('ema').innerHTML = emailInHtml
    document.getElementById('mb').innerHTML = mobilenoInHtml
    document.getElementById('pass').innerHTML = passInHtml

}


function displayFormValues() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    var number = document.myform.number.value;
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");

    if (name == null || name == "") {

        document.getElementById("form_name").innerHTML = "Name can not be blank";

        return false;

    } else if (password.length < 6) {


        document.getElementById("form_password").innerHTML = "always must be at least 6 characters long.";

        return false;

    } else if (isNaN(number)) {

        document.getElementById("form_mobileno").innerHTML = "Enter Numeric value only";

        return false;

    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {



        document.getElementById("form_email").innerHTML = "Please enter a valid e-mail address";

        return false;

    }




}