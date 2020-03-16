// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    //var newDevour = $(this).data("newdevour");

    var newDevour = {
      devour: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        console.log("changed devour to yes");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devour:0 

    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  
});
