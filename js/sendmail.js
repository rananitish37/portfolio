function sendMail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rananitish129@gmail.com",
        Password : "Nitish@1234",
        To : 'belle76348@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementsById("subject").value,
        Body : document.getElementById("msg").value,
    }).then(
      message => alert(message)
    ); 
}