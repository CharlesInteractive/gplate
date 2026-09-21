console.log("Running custom scripts.");

// "a" or "an" depending on the word that follows, e.g. {{article occupation}}
Handlebars.registerHelper("article", function (word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
});

// Join a list as "A", "A and B" or "A, B, and C", e.g. {{listJoin skills}}
Handlebars.registerHelper("listJoin", function (items) {
  var escaped = items.map(Handlebars.escapeExpression);
  if (escaped.length < 3) {
    return new Handlebars.SafeString(escaped.join(" and "));
  }
  var last = escaped.pop();
  return new Handlebars.SafeString(escaped.join(", ") + ", and " + last);
});

function getJSON(url) {
  return fetch(url).then((resp) => {
    if (!resp.ok) {
      throw new Error(url + " responded with " + resp.status);
    }
    return resp.json();
  });
}

function handlesRun() {
  getJSON("./data/testdata.json")
    .then((json) => {
      var data = { persons: json.persons };
      document.getElementById("render-first").innerHTML =
        custom.templates.template(data);
      document.getElementById("render-second").innerHTML =
        custom.templates.template_secondary(data);
    })
    .catch((err) => console.error("Could not render persons:", err));
}
handlesRun();

function handlesFaicons() {
  getJSON("./data/faicons.json")
    .then((json) => {
      $("#render-icons").html(custom.templates.faicons(json));
    })
    .catch((err) => console.error("Could not render icons:", err));
}
handlesFaicons();

$(document).ready(function () {
  // initialize popout
  var pops = $("#pops");
  pops.popup({
    escape: true,
    blur: true,
    scrolllock: true,
    transition: "all 0.3s",
    pagecontainer: "body",
  });

  // popout open button
  var pops_open = $("#pops-open");
  pops_open.on("click", function () {
    pops.popup("show");
  });

  // popout close button
  var pops_close = $("#pops-close");
  pops_close.on("click", function () {
    pops.popup("hide");
  });

  //slider
  var slider = $("#slider");
  slider.slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true,
    dots: true,
    speed: 300,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
        },
      },
    ],
  });

  // get lozad to lazy load our images
  // runs after slick so the slides it clones get lazy loaded too
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  // mobile navigation mobi-nav
  //initialize popout
  var mobinav = $("#mobinav");
  mobinav.popup({
    escape: true,
    blur: true,
    scrolllock: true,
    transition: "all 0.3s",
    pagecontainer: "body",
    color: "rgb(0,0,0)",
    opacity: ".8",
  });
  // popout open button
  var mobinav_open = $("#mobinav-open");
  mobinav_open.on("click", function () {
    mobinav.popup("show");
  });
  // mobinav close button
  var mobinav_close = $("#mobinav-close");
  mobinav_close.on("click", function () {
    mobinav.popup("hide");
  });
});
