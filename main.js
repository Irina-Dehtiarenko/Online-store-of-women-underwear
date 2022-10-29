const allDotsDelivery = [...document.querySelectorAll(".delivery .dot")];

const allDeliveryRules = [
  ...document.querySelectorAll(".delivery-rules div.rules"),
];

const allDotsOrder = [...document.querySelectorAll(".how-to-order .dot")];

const allOrderSteps = [...document.querySelectorAll(".order-steps div.step")];

const allImg = [...document.querySelectorAll(".slide-img img.img")];

console.log(allImg);
const changeDescription = (e) => {
  //   console.log(e.target);
  allDotsDelivery.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  const dotActive = e.target;
  dotActive.classList.add("active-dot");

  console.log(dotActive);
  allDeliveryRules.forEach((rules) => {
    rules.classList.add("hidden");
  });
  if (e.target === allDotsDelivery[1]) {
    allDeliveryRules[1].classList.remove("hidden");
  } else if (e.target === allDotsDelivery[2]) {
    allDeliveryRules[2].classList.remove("hidden");
  } else if (e.target === allDotsDelivery[0]) {
    allDeliveryRules[0].classList.remove("hidden");
  }
  //   e.target === allDotsDelivery[1]
};
allDotsDelivery.forEach((dot) => {
  dot.addEventListener("click", changeDescription);
});

const changeDescriptionOrder = (e) => {
  allDotsOrder.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  const dotActive = e.target;
  dotActive.classList.add("active-dot");

  allOrderSteps.forEach((rules) => {
    rules.classList.add("hidden");
  });
  if (e.target === allDotsOrder[1]) {
    allOrderSteps[1].classList.remove("hidden");
  } else if (e.target === allDotsOrder[2]) {
    allOrderSteps[2].classList.remove("hidden");
  } else if (e.target === allDotsOrder[0]) {
    allOrderSteps[0].classList.remove("hidden");
  }
  //   e.target === allDotsDelivery[1]
};
allDotsOrder.forEach((dot) => {
  dot.addEventListener("click", changeDescriptionOrder);
});

let number = 0;
const changeSlide = () => {
  number++;
  allImg.forEach((img) => {
    img.classList.add("hidden");
  });

  if (number < 0) {
    number = 2;
    allImg[number].classList.remove("hidden");
  } else if (number > 2) {
    number = 0;
    allImg[number].classList.remove("hidden");
  } else {
    allImg[number].classList.remove("hidden");
  }
};

let intervalIndex = setInterval(changeSlide, 3000);
