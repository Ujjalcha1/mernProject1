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
      },
      {
        menuName: "Panzenella",
        price: 200,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/panzenella_600x300_71506417795.jpg",
      },
      {
        menuName: "Bruschetta",
        price: 300,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/bruschetta_625x350_71506417841.jpg",
      },
      {
        menuName: "Focaccia Bread",
        price: 400,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/frocaccia_600x300_41506417893.jpg",
      },
      {
        menuName: "Pasta Carbonara",
        price: 500,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/pasta-carbonara_600x300_41506417953.jpg",
      },
      {
        menuName: "Margherita Pizza",
        price: 600,
        qty: 1,
        image:
          "https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg",
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
      },
      {
        menuName: "Udon",
        price: 200,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-udon/Blog-page-156-udon?$poi$&w=556&h=391&sm=c&fmt=auto",
      },
      {
        menuName: "Tofu",
        price: 300,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-tofu/Blog-page-156-tofu?$poi$&w=556&h=391&sm=c&fmt=auto",
      },
      {
        menuName: "Tempura",
        price: 400,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-156-tempura/Blog-156-tempura?$poi$&w=556&h=391&sm=c&fmt=auto",
      },
      {
        menuName: "Yakitori",
        price: 500,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Yakitori-Grilled-Skewers/Blog-page-156-Yakitori-Grilled-Skewers?$poi$&w=556&h=391&sm=c&fmt=auto",
      },
      {
        menuName: "Sashimi",
        price: 600,
        qty: 1,
        image:
          "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sashimi/Blog-page-156-sashimi?$poi$&w=556&h=391&sm=c&fmt=auto",
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
        menuName: "pizza",
        price: 100,
        qty: 1,
        image:
          "https://media.istockphoto.com/id/1295973545/photo/paella.webp?b=1&s=170667a&w=0&k=20&c=TzKOIkOLEDakLaWGBX2I29LEtnz66xCVedyvO28f30M=",
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
        menuName: "pizza",
        price: 100,
        qty: 1,
        image:
          "https://media.istockphoto.com/id/1295973545/photo/paella.webp?b=1&s=170667a&w=0&k=20&c=TzKOIkOLEDakLaWGBX2I29LEtnz66xCVedyvO28f30M=",
      },
    ],
  },
  {
    categoryName: "Turkey",
    image:
      "https://t3.ftcdn.net/jpg/02/55/53/44/360_F_255534476_n8JzjZtzOFW5g3TXTLMd6QGVnToi6hqj.jpg",
    desc: "Experience the flavors of Italy with our delicious Italian dishes",
    menuList: [
      {
        menuName: "pizza",
        price: 100,
        qty: 1,
        image:
          "https://media.istockphoto.com/id/1295973545/photo/paella.webp?b=1&s=170667a&w=0&k=20&c=TzKOIkOLEDakLaWGBX2I29LEtnz66xCVedyvO28f30M=",
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
        menuName: "pizza",
        price: 100,
        qty: 1,
        image:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTlfYV9pbmRpYW5fbWVhbF90cmF5X19oaW50X29mX2ZsYXRsYXlfb2JqZWN0X191c18wY2U2NGE5YS04YzVjLTRkMDctYTE0MS01MTBlODlhZGU0ODEucG5n.png",
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
  // container.classList.add("clickable-div");
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
    categories[index].menuList.forEach((element, index) => {
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
                      <span class="minus bg-dark">-</span>
                      <input type="number" class="count" name="qty" value=${element.qty} />
                      <span class="plus bg-dark">+</span>
                    </div>

                    <div class="addBag rounded-circle">
                      <span class="bi bi-bag-plus-fill icon"></span>
                    </div>
                  </div>
                </div>
              </div>`;
    });

    $("#exampleModal").modal("show");
  });
});

document.getElementById("menuClose").addEventListener("click", function () {
  clearAllModalContents();
  $("#exampleModal").modal("hide");
});
