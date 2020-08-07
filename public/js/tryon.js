/* App frontend script */
window.onload = (e) => {
  var ifrm = document.createElement("iframe");
  ifrm.width = "100%";
  ifrm.height = window.innerHeight;
  ifrm.frameBorder = "border:1px solid black;";
  ifrm.setAttribute("src", "https://fashionkart.github.io/");

  var after = document.getElementById("tempStore");
  document.body.appendChild(ifrm); // to place at end of document
  after.parentNode.insertBefore(ifrm,after);
};
