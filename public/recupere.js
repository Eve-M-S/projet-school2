function validateForm() {
    let name = document.getElementById("name").value;
    console.log(name);
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    // Regular Expression For Email
    // Conditions
    if (name != '' && email != '' && contact != '') {
        console.log("All type of validation has done on OnSubmit event.");
        console.log("bonjour")
        return true;
    } else {
    console.log("The Contact No. must be at least 10 digit long!");
    return false;
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="form"]');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    })
        
});

// function test(){
//     alert('helllooooo');
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Hey');
//     // const form = document.querySelector('form[name="form"]');
//     // form.addEventListener('submit', function(event) {
//     //     event.preventDefault(); // Evitar el envío del formulario
//     //     test(); // Llamar a la función test()
//     // });
// });

// // x.preventDefault()
//     // console.log('coucou', document.forms.item)
// }
// //module.exports= validateForm
// // // Storing Field Values In Variables
// //         let name = document.getElementsByName("name").value;
// //         console.log(name)
// //         let email = document.getElementsByName("email").value;
// //         let contact = document.getElementsByName("contact").value;
// //         s.preventDefault();
// //         // Regular Expression For Email
// //         // Conditions
// //         if (name != '' && email != '' && contact != '') {
// //         alert("All type of validation has done on OnSubmit event.");
   
// //         console.log("bonjour")
// //         return true;
// //         } else {
// //         alert("The Contact No. must be at least 10 digit long!");
// //         return false;

// //         }  


