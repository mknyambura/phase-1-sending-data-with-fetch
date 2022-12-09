// Add your code here
function submitData(userName, userEmail){
  
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userName,
      userEmail,
    })
    .then(function (respone){
      return Response.json();
    })
    .then(function (object){
      console.log(object);
    })
    .catch( function(error) {
      alert('ERROR!');
      console.log(error.message);
    })
  });
}

