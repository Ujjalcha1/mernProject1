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

function clearCartModal() {
  const modalBodies = document.querySelectorAll("#cartBody");
  modalBodies.forEach((modalBody) => {
    modalBody.innerHTML = ""; // Clear the modal body content
  });
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

document.getElementById("cartClose").addEventListener("click", function () {
  clearCartModal();
  $("#cartModal").modal("hide");
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
      clearAllModalContents();
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
                      <span class="minus bg-dark" onclick="onDecrese('${
                        element._id
                      }', '${element.quantity}')" >-</span>
                      <span class="count">${element.quantity}</span>
                      <span class="plus bg-dark" onclick="onIncrease('${
                        element._id
                      }', '${element.quantity}')">+</span>
                    </div>

                    <div class="addBag rounded-circle" onclick="onAdd('${
                      element._id
                    }', '${element.quantity}')">
                    <i class="${
                      !element.isCart
                        ? "fas fa-shopping-cart fa-lg icon"
                        : "fas fa-address-book fa-lg icon"
                    }"></i>

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
      onClickCategory(data.categoryId);
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function onAdd(menuId, quantity) {
  let token = localStorage.getItem("token");
  fetch(`http://192.168.0.109:3001/cart/add`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    method: "POST",
    body: JSON.stringify({
      menuId,
      quantity: Number(quantity),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      callCart();
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function callCart() {
  let token = localStorage.getItem("token");
  fetch(`http://192.168.0.109:3001/allcart`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let count = 0;
      data.map((item, index) => {
        count = index + 1;
      });

      document.getElementById("cart-item-count").innerHTML = count;

      var container = document.getElementById("cartBody");

      if (data.length > 0) {
        data.forEach((element, i) => {
          container.innerHTML += `
                <tr>
                  <td>
                    <img src=${
                      element.menu.image
                    } alt="Item 1" class="item-image" />
                  </td>
                  <td>${element.menu.name}</td>
                  <td>${element.menu.quantity}</td>
                  <td>${element.menu.price}</td>
                  <td>${element.menu.quantity * element.menu.price}</td>
                  <td>
                  <a class="nav-link" href="#" id="cart-icon-link" onclick="removeItem('${
                    element._id
                  }')" >
                  <i class="fas fa-trash fa-lg"></i>
                  </a>
                  </td>
                </tr>
                
              `;
        });
      } else {
        container.innerHTML = "<p>No item found!</p>";
      }
      var container = document.getElementById("container");
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

function removeItem(id) {
  let token = localStorage.getItem("token");
  fetch(`http://192.168.0.109:3001/cart/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      clearCartModal();
      callCart();
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}

if (window.location.pathname === "/home.html") {
  callApiOnPageLoad();
  callCart();
}
