const categories = [
  {
    categoryName: "Italian",
    image:
      "https://t3.ftcdn.net/jpg/02/55/53/44/360_F_255534476_n8JzjZtzOFW5g3TXTLMd6QGVnToi6hqj.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Caprese Salad with Pesto Sauce",
        price: 100,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Panzenella",
        price: 200,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/panzenella_600x300_71506417795.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Bruschetta",
        price: 300,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/bruschetta_625x350_71506417841.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Focaccia Bread",
        price: 400,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/frocaccia_600x300_41506417893.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Pasta Carbonara",
        price: 500,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/pasta-carbonara_600x300_41506417953.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Margherita Pizza",
        price: 600,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
  {
    categoryName: "Japanese",
    image:
      "http://sattvameditationresort.com/wp-content/uploads/2022/09/Japanese-Cuisine-300x200.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Sushi",
        price: 100,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sushi/Blog-page-156-sushi?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Udon",
        price: 200,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-udon/Blog-page-156-udon?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Tofu",
        price: 300,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-tofu/Blog-page-156-tofu?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Tempura",
        price: 400,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-156-tempura/Blog-156-tempura?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Yakitori",
        price: 500,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Yakitori-Grilled-Skewers/Blog-page-156-Yakitori-Grilled-Skewers?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Sashimi",
        price: 600,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sashimi/Blog-page-156-sashimi?$poi$&w=556&h=391&sm=c&fmt=auto",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
  {
    categoryName: "Greek",
    image:
      "http://sattvameditationresort.com/wp-content/uploads/2022/09/Greek-Cuisine-300x200.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Keftedes",
        price: 100,
        qty: 1,
        image:
          "https://www.greekality.com/wp-content/uploads/2022/11/Traditionalgreekfood1.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Souvlaki",
        price: 500,
        qty: 1,
        image:
          "https://www.greekality.com/wp-content/uploads/2022/01/souvlaki-skewer.jpeg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Melitzanosalata",
        price: 800,
        qty: 1,
        image:
          "https://www.greekality.com/wp-content/uploads/2022/11/Traditionalgreekfood2.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
  {
    categoryName: "Spanish",
    image:
      "http://sattvameditationresort.com/wp-content/uploads/2022/09/Spanish-Cuisine-300x199.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Gazpacho",
        price: 100,
        qty: 1,
        image:
          "https://media.istockphoto.com/id/1295973545/photo/paella.webp?b=1&s=170667a&w=0&k=20&c=TzKOIkOLEDakLaWGBX2I29LEtnz66xCVedyvO28f30M=",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Paella",
        price: 420,
        qty: 1,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Next-level-paella-f11ee26.jpg?quality=90&webp=true&fit=1100,733",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Tortilla Española",
        price: 100,
        qty: 1,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Spanish-omelette-7805ee9.jpg?quality=90&webp=true&fit=1100,733",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Gambas al ajillo",
        price: 100,
        qty: 1,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Prawns-with-romesco-sauce-a89bc0f.jpg?quality=90&webp=true&fit=888,592",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
  {
    categoryName: "Turkey",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/Lahmacun.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Mini Ravioli",
        price: 650,
        qty: 1,
        image:
          "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/Manti.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Turk’s Meatballs",
        price: 250,
        qty: 1,
        image:
          "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/Kofte.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Turkish Style Pizza",
        price: 555,
        qty: 1,
        image:
          "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/Lahmacun.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
  {
    categoryName: "Indian",
    image:
      "https://t3.ftcdn.net/jpg/02/55/53/44/360_F_255534476_n8JzjZtzOFW5g3TXTLMd6QGVnToi6hqj.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "Chicken Makhani",
        price: 256,
        qty: 1,
        image:
          "https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Aloo Gobi",
        price: 100,
        qty: 1,
        image:
          "https://www.blueosa.com/wp-content/uploads/2020/07/Indian-Cauliflower-Potatoe.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
      {
        menuName: "Matar Paneer",
        price: 240,
        qty: 1,
        image:
          "https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg",
        isCart: false,
        icon: `bi bi-bag-plus-fill icon`,
      },
    ],
  },
];

var container = document.getElementById("categoryBox");
categories.forEach((element, i) => {
  container.innerHTML += `<div class="col-md-4 mb-3 category">
          <div class="category-card text-center">
            <img src=${element.image} class="img-fluid mb-4" alt="Italian Food" />
            <h2 class="category-title">${element.categoryName}</h4>
              <p class="category-description">${element.desc}</p></div></div>`;
});
var container = document.getElementById("container");

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

var divs = document.querySelectorAll(".category");
var modalContent = document.querySelector(".menus");
var modalDiv = document.querySelector(".modal-title");
divs.forEach(function (div, index) {
  div.addEventListener("click", function () {
    modalDiv.innerHTML = categories[index].categoryName;
    categories[index].menuList.forEach((element, ind) => {
      const icon = element.icon;
      modalContent.innerHTML += `<div class="col">
                <div class="custom-card">
                  <img
                    src=${element.image}
                    class="img-fluid rounded object-fit-cover"
                  />
                  <div class="overlay">
                    <div>
                      <h4>${element.menuName}</h4>
                      <h6>₹ ${element.price}</h6>
                    </div>

                    <div class="qty">
                      <span class="minus bg-dark" onclick="updateQuantity(${ind},${index}, -1)">-</span>
                      <span class="count" id="menu${ind}-quantity">${element.qty}</span>
                      <span class="plus bg-dark" onclick="updateQuantity(${ind}, ${index}, 1)">+</span>
                    </div>

                    <div class="addBag rounded-circle" onclick="onAdd(${ind}, ${index})">
                    <i id="product${ind}-icon" class="bi ${icon} icon"></i>
                     
                    </div>
                  </div>
                </div>
              </div>`;
    });

    $("#exampleModal").modal("show");
  });
});

function onAdd(productId, mainIndex) {
  var cart = document.querySelector(".cartNo");
  const productIcon = document.getElementById(`product${productId}-icon`);
  productIcon.classList.remove("bi-bag-plus-fill");
  productIcon.classList.add("bi-cart-check-fill");

  let totalCart = 0;

  categories[mainIndex].menuList[productId].isCart =
    !categories[mainIndex].menuList[productId].isCart;

  categories.forEach(function (category) {
    totalCart += category.menuList.filter((item) => item.isCart).length;
  });
  cart.innerHTML = totalCart;
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
