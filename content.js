// this should honestly be a listener for when storage.js sends a message when pressing button
document.getElementsByTagName("button")[2].click();

//retrieves account information from localStorage and autofills it
chrome.runtime.sendMessage({method: "getTotal", key: "total"}, function(response) {
  var total = response.data;
  var splitTotal = total.split("|||");

  var accountContent = splitTotal[0];
  var passwordContent = splitTotal[1];

  var emailField = document.getElementsByTagName("input")[1];
  var passwordField = document.getElementsByTagName("input")[2];
  

  emailField.value = accountContent;
  passwordField.value = passwordContent;

  //click Sign in 
  setTimeout(() => { document.getElementsByTagName("input")[5].click(); }, (Math.floor(Math.random() * 9000) + 3000));
  
});


//need a listener for a message sent my profile.js 
/*document.getElementsByTagName("meta")[17].content //this is the product ID for prefill
prefill = link + "?size=" + somesize + "&" + productID */

