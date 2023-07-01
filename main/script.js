$(function () {
  // Traverse DOM once, create variables for later
  var map = $(".js-map-container"),
    mapToggler = $(".js-map-toggle");

  // Bind an event handler to toggle button
  mapToggler.click(function (e) {
    // Check if the button `is-active`, change text to `Disable map. If not, change text to `Enable map`
    var state = mapToggler.hasClass("is-active");
    mapToggler.html(state ? "Enable map" : "Disable map");

    // Add `is-active` to map container and toggle button
    map.toggleClass("is-active");
    mapToggler.toggleClass("is-active");

    // Stop the default action of our button to submit
    e.preventDefault();
  });
});
