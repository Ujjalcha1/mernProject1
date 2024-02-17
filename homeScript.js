const cartItems = [];

// Function to update modal content
function updateModalContent() {
  document.getElementById("modalContent").innerText = "Updated modal content!";
}

function clearAllModalContents() {
  const modalBodies = document.querySelectorAll(".menus");
  modalBodies.forEach((modalBody) => {
    modalBody.innerHTML = ""; // Clear the modal body content
  });
}

// var divs = document.querySelectorAll(".category");
// var modalContent = document.querySelector(".menus");
// var modalDiv = document.querySelector(".modal-title");

// divs.forEach(function (div, index) {
//   div.addEventListener("click", function () {
//     modalDiv.innerHTML = categories[index].categoryName;
//     categories[index].menuList.forEach((element, ind) => {
//       const icon = element.icon;
//       modalContent.innerHTML += `<div class="col">
//           <div class="custom-card">
//             <img
//               src=${element.image}
//               class="img-fluid rounded object-fit-cover"
//             />
//             <div class="overlay">
//               <div>
//                 <h4>${element.menuName}</h4>
//                 <h6>₹ ${element.price}</h6>
//               </div>

//               <div class="qty">
//                 <span class="minus bg-dark" onclick="updateQuantity(${element.id},${index}, -1)">-</span>
//                 <span class="count" element.id="menu${element.id}-quantity">${element.qty}</span>
//                 <span class="plus bg-dark" onclick="updateQuantity(${element.id}, ${index}, 1)">+</span>
//               </div>

//               <div class="addBag rounded-circle" onclick="onAdd(${element.id}, ${index})">
//               <i id="product${element.id}-icon" class="bi ${icon} icon"></i>

//               </div>
//             </div>
//           </div>
//         </div>`;
//     });

//     $("#exampleModal").modal("show");
//   });
// });

function onAdd(productId, mainIndex) {
  let cart = document.querySelector(".cartNo");
  const productIcon = document.getElementById(`product${productId}-icon`);

  let getProductIndex = categories[mainIndex].menuList.findIndex(
    (it) => it.id === productId
  );

  let isAlreadyAdded = cartItems.findIndex((it) => it.id === productId);

  if (isAlreadyAdded === -1) {
    const getItem = categories[mainIndex].menuList[getProductIndex];
    cartItems.push(getItem);
    productIcon.classList.remove("bi-bag-plus-fill");
    productIcon.classList.add("bi-cart-check-fill");
  } else if (isAlreadyAdded > -1) {
    const getItem = cartItems.findIndex((it) => it.id === productId);
    cartItems.splice(getItem.id, 1);
    productIcon.classList.add("bi-bag-plus-fill");
    productIcon.classList.remove("bi-cart-check-fill");
  }

  cart.innerHTML = cartItems.length;
}

function updateQuantity(productId, mainIndex, change) {
  const quantityElement = document.getElementById(`menu${productId}-quantity`);
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity += change;
  currentQuantity = Math.max(currentQuantity, 0);
  quantityElement.innerText = currentQuantity;
  categories[mainIndex].menuList[productId].qty = currentQuantity;
}

document.getElementById("menuClose").addEventListener("click", function () {
  clearAllModalContents();
  $("#exampleModal").modal("hide");
});

document
  .getElementById("cart-icon-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    $("#cartModal").modal("show");
  });

///////////////////////////////////////////////////////////////

function callApiOnPageLoad() {
  fetch("http://192.168.0.109:3001/allcategories")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var container = document.getElementById("categoryBox");
      data.forEach((element, i) => {
        container.innerHTML += `
        <div class="col-md-4 mb-3 category" onclick="onClickCategory('${element._id}')">
          <div class="category-card text-center">
            <img src=${element.image} class="img-fluid mb-4" alt="Italian Food" />
            <h2 class="category-title">${element.name}</h4>
              <p class="category-description">${element.description}</p>
          </div>
        </div>`;
      });
      var container = document.getElementById("container");
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function onClickCategory(id) {
  fetch(`http://192.168.0.109:3001/categories/${id}/menus`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var modalContent = document.querySelector(".menus");
      data.forEach((element, ind) => {
        modalContent.innerHTML += `<div class="col">
                <div class="custom-card">
                  <img
                    src=${element.image}
                    class="img-fluid rounded object-fit-cover"
                  />
                  <div class="overlay">
                    <div>
                      <h4>${element.name}</h4>
                      <h6>₹ ${element.price}</h6>
                    </div>

                    <div class="qty">
                      <span class="minus bg-dark" onclick="onDecrese('${element._id}', '${element.quantity}')" >-</span>
                      <span class="count">${element.quantity}</span>
                      <span class="plus bg-dark" onclick="onIncrease('${element._id}', '${element.quantity}')">+</span>
                    </div>

                    <div class="addBag rounded-circle">
                    <i class="fas fa-shopping-cart- fa-lg icon"></i>
                    </div>
                  </div>
                </div>
              </div>`;
      });
      $("#exampleModal").modal("show");
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function onIncrease(id, qty) {
  fetch(`http://192.168.0.109:3001/menus/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({ quantity: Number(qty) + 1 }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      clearAllModalContents();
      onClickCategory(data.categoryId);
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function onDecrese(id, qty) {
  fetch(`http://192.168.0.109:3001/menus/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({ quantity: Number(qty) - 1 }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      clearAllModalContents();
      onClickCategory(data.categoryId);
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

if (window.location.pathname === "/home.html") {
  callApiOnPageLoad();
}
