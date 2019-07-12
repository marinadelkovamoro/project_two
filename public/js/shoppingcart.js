var myCart = JSON.parse(localStorage.getItem("mycart"));
if (!myCart) {
  myCart = [];
}

$("#cart-btn-checkout").on("click", function(event) {
  // save to database. then display confirmation page.
});

$("#cart-btn-continue").on("click", function(event) {
  window.location.replace("/");
});

function getCart() {
  if (!document.getElementById("cart-page")) {
    return;
  }

  console.log(myCart);
  var newRow;
  var pName, pImg, pPrice, pUnits, pDelete;
  var btnDelete, imgElem;

  var total = 0;
  var cartPage = $("#cart-page");
  for (var i = 0; i < myCart.length; i++) {
    total += myCart[i].price * myCart[i].numItems;
    newRow = $("<div>").addClass("row").attr("item-id", myCart[i].id);
    pName = $("<div>").addClass("col cart-item-name").text(myCart[i].name);

    imgElem = $("<img>").addClass("cart-item-image img-fluid").attr("src", myCart[i].image);
    pImg = $("<div>").addClass("col").append(imgElem);

    pPrice = $("<div>").addClass("col");
    pPrice.append($("<p>").text("$" + myCart[i].price.toLocaleString()));
    // pPrice.append($("<p>").text("₿" + myCart[i].price.calculateBitcoin()));

    pUnits = $("<div>").addClass("col").text(myCart[i].numItems);

    btnDelete = $("<button>").addClass("btn-cart-delete").text("delete");
    pDelete = $("<div>").addClass("col").append(btnDelete);

    newRow.append(pName, pImg, pPrice, pUnits, pDelete);
    cartPage.append(newRow, $("<hr>"));
  }
  $(".cart-total").text("Total $" + total.toLocaleString() + " / bitcoin?");
}
