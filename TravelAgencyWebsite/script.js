// BOOKING FORM MESSAGE

let bookingForm = document.getElementById("bookingForm");


if(bookingForm){

    bookingForm.addEventListener("submit", function(event){

        // FORM SUBMIT STOP TEMPORARILY
        event.preventDefault();

        // SUCCESS MESSAGE
        alert("Your booking has been submitted successfully!");

    });

}