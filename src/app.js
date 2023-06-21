"use strict";

let list = document.querySelector(".slides"),
  images = document.querySelectorAll(".slides img"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next");

let count = 0;

function slider() {
  if (count > images.length - 1) {
    count = 0;
    list.style.transition = "all 1s ease";
  }
  if (count < 0) {
    count = images.length - 1;
  }
  list.style.transform = `translateX(-${count * 1320}px)`;
}

next.addEventListener("click", () => {
  count++;
  slider();
});

prev.addEventListener("click", () => {
  count--;
  slider();
});

let new_arrivals_wrapper = document.querySelector("#new_arrivals_wrapper");
let new_arrivals_wrapper_second = document.querySelector(
  "#new_arrivals_wrapper_second"
);
let new_arrivals_wrapper_third = document.querySelector(
  "#new_arrivals_wrapper_third"
);
let new_arrivals_wrapper_fourth = document.querySelector(
  "#new_arrivals_wrapper_fourth"
);
let traditional_wrapper = document.querySelector("#traditional_wrapper");
let deserts_wrapper = document.querySelector("#deserts_wrapper");
let zefir_wrapper = document.querySelector("#zefir_wrapper");

function toHtml(data, place) {
  let result = "";
  data.map((el) => {
    const { title, price, weight, amount, liked, img, isLiked } = el;
    result += `
      <div class="card h-[420px] w-[300px] p-[10px]  rounded-2xl">
        <img src=${img} alt="" />
        <h4 class="text-[20px] mt-[10px]">${title}</h4>
        <div class="flex items-center justify-between mt-1 mb-[10px]">
          <p class="text-[16px] text-[#BABABA]">${amount}</p>
          <div class="flex items-center">
            <p class="text-[16px] text-[#BABABA] mr-[2px]">${liked}</p>
            <img src="./assets/icons/favourite.svg" alt="" />
          </div>
        </div>
        <div class="flex items-center">
          <a class="text-[24px] font-[Book] font-extrabold mr-[10px]" href="#">
            ${price}
          </a>
          <p class="text-[#BABABA] text-[14px] font-[Light]">${weight}</p>
        </div>
      </div>
    `;
  });
  place.innerHTML = result;
}

toHtml(data, new_arrivals_wrapper);
toHtml(data, traditional_wrapper);
toHtml(data, deserts_wrapper);
toHtml(data, new_arrivals_wrapper_second);
toHtml(data, new_arrivals_wrapper_third);
toHtml(data, new_arrivals_wrapper_fourth);

function forNewCards(data, place) {
  let result = "";
  data.map((el) => {
    const { title, date, views, img } = el;
    result += `
      <div class="card h-[435px] w-[400px] p-[10px]  rounded-2xl">
        <img src=${img} alt="" />
        <h4 class="text-[22px] mt-[10px] max-w-[380px]">${title}</h4>
        <div class="flex items-center justify-between mt-[30px]">
          <p class="text-[#BABABA] text-[16px] font-[Light]">${date}</p>
          <div class="flex gap-x-[5px]">
            <p class="text-[#BABABA] text-[16px] font-[Light]">${views}</p>
            <img src="./assets/icons/view.svg" alt="" />
          </div>
        </div>
      </div>
    `;
  });
  place.innerHTML = result;
}
forNewCards(obj, zefir_wrapper);
