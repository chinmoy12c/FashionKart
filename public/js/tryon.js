/* App frontend script */
var ifrm;
window.onload = (e) => {
  ifrm = document.createElement("iframe");
  ifrm.width = "100%";
  ifrm.height = window.innerHeight - window.innerHeight * 0.095;
  ifrm.frameBorder = "border:1px solid black;";
  ifrm.setAttribute("src", "https://fashionkart.github.io/");

  var after = document.getElementById("tempStore");
  document.body.appendChild(ifrm); // to place at end of document
  after.parentNode.insertBefore(ifrm,after);
};

window.addEventListener('resize', function(){
  ifrm.width = window.innerWidth;
  ifrm.height = window.innerHeight - window.innerHeight * 0.095;
},true);
