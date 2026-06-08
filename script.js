const main = document.querySelector(".container");

fetch("jsondata/colors.json")
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    result.forEach((single) => {
      let cards = `
        <div class="cards" style="background-color: ${single.hex}">
          <h5 class="colorname">${single.name}</h5>
          <h5 class="colorcode">${single.hex}</h5>
        </div>`;
      main.insertAdjacentHTML("beforeend", cards);
    });

    const allcards = document.querySelectorAll(".cards");
    allcards.forEach((singlecard) => {
      singlecard.addEventListener("click", () => {
        let copyCard = singlecard.querySelector(".colorcode").innerHTML;
        navigator.clipboard.writeText(copyCard);

        const popup = document.querySelector(".copied");
        popup.classList.add("on");

        setTimeout(() => {
          popup.classList.remove("on");
        }, 2000);
      });
    });
  });
