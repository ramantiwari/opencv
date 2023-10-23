        document.addEventListener("DOMContentLoaded", function () {
        // Reusable function to handle form submissions
        const handleSubmit = function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            const formData = new FormData(event.target);
            const name = formData.get("name");
            const email = formData.get("email");
            const tel1 = formData.get("tel1");
            const tel2 = formData.get("tel2");
            const tel3 = formData.get("tel3");
            const tel4 = formData.get("tel4");
            const tel5 = formData.get("tel5");
            const tel6 = formData.get("tel6");
            const tel7 = formData.get("tel7");
            const tel8 = formData.get("tel8");
            const tel9 = formData.get("tel9");
            const tel10 = formData.get("tel10");
            const city = formData.get("city");
            const message = formData.get("message");
            const page = formData.get("page");
            const enquery_no=formData.get("enquery_no");
            // Do something with the form data (e.g., send it to the server)
            console.log("Name:", name);
            console.log("Email:", email);
            

            Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ppc5g.com@gmail.com",
            Password: "4741001B4A22D427EFED694E7F6FCF361D90",
            To: "web5gtechnology@gmail.com", // Replace with your own email address
            From: "ppc5g.com@gmail.com" , // Use the user's entered email address as the "From" address
           
            Subject: "New Lead From PPC5G.com",
            Body: `<div style=" background-color: #2e9a9f; padding: 10px; border-radius: 10px; width: 350px; border: 5px solid #bf3d7d; color: #fff;">
                   <p><b>Enquery Page: </b>${page}<br><b>Enquery No: </b>${enquery_no}</p><hr style="background-color: #fff;"><br><b>Name: </b>${name}<br><b>Email: </b>${email}<br><b>Mob Number: 
                   </b>${tel1}${tel2}${tel3}${tel4}${tel5}${tel6}${tel7}${tel8}${tel9}${tel10}
                   <br><b>City: </b>${city}<br><b>Enquery Message: </b>${message}
                  </div>`,
        }).then(
          (message) =>  {message ? (window.location.href = "lp1-thank-you.html") : alert(message);}).catch((error)=>console.log(error));

            // Reset the form fields (optional)
            event.target.reset();
        };

        // Get all forms with class "my-form"
        const forms = document.querySelectorAll(".my-form");

        // Attach event listener to each form
        forms.forEach((form) => {
            form.addEventListener("submit", handleSubmit);
        });
    });