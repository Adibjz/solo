function changeImage() {
  var img = document.getElementById("flowerImage");
  var images = [
    "/images/fleur-orchidee-phalaenopsis_1373-275.avif",
    "/images/rose11.avif",
    "/images/jas2.jpg",
    "/images/téléchargement.jpg",
    "/images/XVM64330e8c-fc47-11ec-ac25-d6fb1b2d2226.webp",
    "/images/istockphoto-1393708668-612x612.jpg"
  ];

  var random = Math.floor(Math.random() * images.length);
  img.src = images[random];
}

$("#showHideButton").click(function() {
  $("#flowerImage").toggle();
});

var generateID = (function() {
  var count = 0;
  return function() {
    return count++;
  };
})();

function makeSomething(name, images, price) {
  return {
    price: price,
    name: name,
    images: images,
    id: generateID(),
  };
}

// Additional jQuery functionality
$(document).ready(function() {
  // Example of handling form submission
  $("#flowerForm").submit(function(event) {
    event.preventDefault();

    // Extract form data
    var flowerName = $("input[name='Fname']").val();
    var flowerDescription = $("textarea").val();
    var emailAddress = $("input[name='Email']").val();
    var phoneNumber = $("input[name='Phone']").val();
    var pictureLink = $("input[name='picture']").val();

    // Display the information (you can modify this based on your needs)
    var displayInfo = `
      <h2>Flower Information:</h2>
      <p><strong>Name:</strong> ${flowerName}</p>
      <p><strong>Description:</strong> ${flowerDescription}</p>
      <p><strong>Email:</strong> ${emailAddress}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Picture Link:</strong> ${pictureLink}</p>
    `;

    $("#displayInfo").html(displayInfo);
  });

  // Add more jQuery functionality as needed
});

$(document).ready(function() {
  // Existing jQuery functionality...

  // New functionality to display orders with images
  $("#showOrdersButton").click(function() {
    // Dummy data for demonstration, replace with actual order data
    var orders = [
      makeSomething("Order 1", "image1.jpg", 30, "Description 1", "email1@example.com", "123456789"),
      makeSomething("Order 2", "image2.jpg", 25, "Description 2", "email2@example.com", "987654321"),
      // Add more orders as needed
    ];

    // Display orders
    var orderList = "<h2>Order List:</h2>";
    orders.forEach(function(order) {
      orderList += `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${order.images}" alt="${order.name}" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${order.name}</h5>
                <p class="card-text"><strong>Price:</strong> $${order.price}</p>
                <p class="card-text"><strong>Description:</strong> ${order.description}</p>
                <p class="card-text"><strong>Email:</strong> ${order.email}</p>
                <p class="card-text"><strong>Phone:</strong> ${order.phone}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    $("#orderList").html(orderList);
  });

  // Example of handling form submission
  $("#flowerForm").submit(function(event) {
    event.preventDefault();

    // Extract form data
    var flowerName = $("input[name='Fname']").val();
    var flowerDescription = $("textarea").val();
    var emailAddress = $("input[name='Email']").val();
    var phoneNumber = $("input[name='Phone']").val();
    var pictureLink = $("input[name='picture']").val();

    // Display the information (including the image)
    var displayInfo = `
      <h2>Flower Information:</h2>
      <p><strong>Name:</strong> ${flowerName}</p>
      <p><strong>Description:</strong> ${flowerDescription}</p>
      <p><strong>Email:</strong> ${emailAddress}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Picture:</strong> <img src="${pictureLink}" alt="${flowerName}" class="img-fluid"></p>
    `;

    $("#displayInfo").html(displayInfo);
  });
});


















  


  



