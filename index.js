// Note - to see rotating image uncomment "rotating img trial" code

// to make navbar size change on scroll

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
    ) {
        document.getElementById("navbar").style.height = "3.4vw";
        document.getElementById("logo1").style.height = "3.8vw";
    } else {
        document.getElementById("navbar").style.height = "4vw";
        document.getElementById("logo1").style.height = "4.5vw";
    }
}

// to make ham menu responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// js to change content of types of ambulance detail box

// making an array of objects that contain all ambulance data

let ambulancesList = [
    // formate of writing ambulance data

    //  {
    //     id: id of ambulance,
    //     name: name of ambulance that is used in image,
    //     fullName: full name of ambulance,
    //     detail:detail of ambulance,
    //     features:[
    //         ["feature1 name", "feature1 deatil1","feature1 deatil2",...],
    //         ["feature2 name", "feature2 deatil1","feature2 deatil2",...],
    //         ["feature3 name", "feature3 deatil1","feature3 deatil2",...],
    //         ["feature4 name", "feature4 deatil1","feature4 deatil2",...],
    //         .
    //         .
    //         .
    //     ],
    // }
    {
        id: 1,
        name: "ALS",
        fullName: "Advance Life Support",
        detail: `Large vehicle <br>
        Advance Life Support is used for critical
        patients`,
        features: [
            ["Defibrillator", "adhh", "asdhas", "asdghasud"],
            ["Medicines", "adhh", "asdhas", "asdghasud"],
            ["Stretcher", "adhh", "asdhas", "asdghasud"],
            ["Nurse", "adhh", "asdhas", "asdghasud"],
            ["Bandages", "adhh", "asdhas", "asdghasud"],
            ["Oxygen Supply", "adhh", "asdhas", "asdghasud"],
        ],
    },
    {
        id: 2,

        name: "BLS",
        fullName: "Basic Life Support",
        detail: `Basic vehicle <br>
        Basic Life Support is used to provide Basic support`,
        features: [
            ["Medicines", "adhh", "asdhas", "asdghasud"],
            ["Stretcher", "adhh", "asdhas", "asdghasud"],
            ["Nurse", "adhh", "asdhas", "asdghasud"],
            ["Bandages", "adhh", "asdhas", "asdghasud"],
            ["Oxygen Supply", "adhh", "asdhas", "asdghasud"],
            ["Defibrillator", "adhh", "asdhas", "asdghasud"],
        ],
    },
    {
        id: 3,
        name: "PTS",
        fullName: "Patient Transport Service",
        detail: `Medium vehicle <br>
        Patient Transport Service is used for transporting patients`,
        features: [
            ["Stretcher", "adhh", "asdhas", "asdghasud"],
            ["Nurse", "adhh", "asdhas", "asdghasud"],
            ["Bandages", "adhh", "asdhas", "asdghasud"],
            ["Oxygen Supply", "adhh", "asdhas", "asdghasud"],
            ["Defibrillator", "adhh", "asdhas", "asdghasud"],
            ["Medicines", "adhh", "asdhas", "asdghasud"],
        ],
    },
    {
        id: 4,
        name: "MA",
        fullName: "Medium vehicle",
        detail: `Medium vehicle <br>
        MA is used for transporting patients`,
        features: [
            ["Nurse", "adhh", "asdhas", "asdghasud"],
            ["Bandages", "adhh", "asdhas", "asdghasud"],
            ["Oxygen Supply", "adhh", "asdhas", "asdghasud"],
            ["Defibrillator", "adhh", "asdhas", "asdghasud"],
            ["Medicines", "adhh", "asdhas", "asdghasud"],
            ["Stretcher", "adhh", "asdhas", "asdghasud"],
        ],
    },
];

// converting data to html and adding it to js-ambulance-list class element

let ambulanceHTML = "";

// to convert it to html

ambulancesList.forEach((ambulance) => {
    ambulanceHTML += `<figure class="ambulances-img js-ambulance" data-name="${ambulance.name}" >
  <abbr title="${ambulance.name}">
    <img src="images/ambulance/${ambulance.name}.png" alt="${ambulance.name} Ambulance image" class="ambulance-img ${ambulance.name}-ambulance-img">
  </abbr>
  <abbr title="${ambulance.name}">
    <figcaption class="ambulance-img-figcaption">${ambulance.name}</figcaption>
  </abbr>
  </figure>
  `;
});

// to display in on webpage
document.querySelector(".js-ambulance-list").innerHTML = ambulanceHTML;

document.querySelector(".ALS-ambulance-img").style.background =
    "linear-gradient(135deg, #0092ee 0%, #203381 100%)";

// adding click functionality to all ambulance

let previousSelectedElementH = 1; // previous selected element for creating html
let currentSelectedElementH = 1; // current selected element for creating html

document.querySelectorAll(".js-ambulance").forEach((ambulance) => {
    ambulance.addEventListener("click", () => {
        // js that change background color of selected ambulance by setting bgc of selected ambulance and removing from other
        ambulancesList.forEach((ambulance) => {
            // creating a name variable that store class name from which we need to remove bgc
            const name = "." + ambulance.name + "-ambulance-img";
            document.querySelector(name).style.background = "none";

            // rotating img trial

            const image = "." + ambulance.name + "-ambulance-img";
            document.querySelector(
                image
            ).src = `images/ambulance/${ambulance.name}.png`;
        });

        // creating a name variable that store class name from which we need to add bgc
        const name = "." + `${ambulance.dataset.name}` + "-ambulance-img";
        document.querySelector(name).style.background =
            "linear-gradient(135deg, #0092ee 0%, #203381 100%)";

        // rotating img trial

        const image = "." + `${ambulance.dataset.name}` + "-ambulance-img";
        document.querySelector(
            image
        ).src = `images/ambulance/${ambulance.dataset.name}.gif`;

        ambulancesList.forEach((ambulances) => {
            // checking which ambulance is selected
            if (ambulances.name === ambulance.dataset.name) {
                // creating html of selected ambulance

                // creating html of features of selected ambulance

                let featuresHTML = "";

                ambulances.features.forEach((feature) => {
                    let featuresBackHTML = "";
                    featuresBackHTML += `<h3>${feature[0]} </h3><br>`;
                    for (let i = 1; i < feature.length; i++) {
                        featuresBackHTML += `<p>${feature[i]}</p>`;
                    }

                    featuresHTML += `<abbr title="Ambulance Features">

                    <div class="flip-card selected-ambulance-features">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img src="images/ambulance/features/${ambulances.name
                        }/FEATURES ${ambulances.features.indexOf(feature) + 1
                        }.png" alt=""
                            class="selected-ambulance-feature-img">
                          <p class=".selected-ambulance-feature-p">${feature[0]
                        }</p>
    
                        </div>
                        <div class="flip-card-back">
                          ${featuresBackHTML}
                        </div>
                      </div>
                    </div>
    
                  </abbr>`;
                });

                // adding ambulance detail to ambulance-detail class

                //making ambulance-detail to empty so that animation can work
                document.querySelector(".ambulance-detail").innerHTML = ``;

                ambulancesList.forEach((ambu) => {
                    if (ambulance.dataset.name === ambu.name) {
                        currentSelectedElementH = ambu.id;
                    }
                });
                let time = 0;

                if (currentSelectedElementH !== previousSelectedElementH) {
                    time = 1000;
                }

                ambulancesList.forEach((ambu) => {
                    if (ambulance.dataset.name === ambu.name) {
                        previousSelectedElementH = ambu.id;
                    }
                });

                //using setTimeout after the flipping animation is over to fill ambulance-detail

                setTimeout(() => {
                    document.querySelector(".ambulance-detail").innerHTML = `
                <article>
        <!-- full name of ambulance -->
        <h1 class="ambulance-detail-h1">${ambulances.fullName}</h1>
        <!-- inner and outer images -->
        <div class="selected-ambulance-img">
          <figure class="selected-ambulance-outer-figure">
            <img src="images/ambulance/${ambulances.name}.png" alt="" class="selected-ambulance-outer-img">
          </figure>
          <figure class="selected-ambulance-inner-figure">
            <img src="images/ambulance/inner-${ambulances.name}.png" alt="" class="selected-ambulance-inner-img">
          </figure>
        </div>
        <!-- ambulance detail paragraph -->
        <div class="selected-ambulance-detail">
          <p class="selected-ambulance-detail-p">${ambulances.detail} </p>
        </div>
        
        
        <!-- ambulance features -->
        
        <!-- ambulance feature 1 -->
        <div class="selected-ambulance-features-div">
          
        ${featuresHTML}
        
        </div>
        </article>
                `;
                }, time);
            }
        });
    });
});

// flipping animation js

let previousSelectedElementA = 1; // previous selected element for animation
let currentSelectedElementA = 1; // current selected element for animation

document.querySelectorAll(".js-ambulance").forEach((ambulance) => {
    ambulance.addEventListener("click", () => {
        ambulancesList.forEach((ambu) => {
            if (ambulance.dataset.name === ambu.name) {
                currentSelectedElementA = ambu.id;
            }
        });

        if (currentSelectedElementA > previousSelectedElementA) {
            document
                .querySelector(".ambulance-detail")
                .classList.add("rightFlip");
        }
        if (currentSelectedElementA < previousSelectedElementA) {
            document
                .querySelector(".ambulance-detail")
                .classList.add("leftFlip");
        }

        ambulancesList.forEach((ambu) => {
            if (ambulance.dataset.name === ambu.name) {
                previousSelectedElementA = ambu.id;
            }
        });

        setTimeout(() => {
            document
                .querySelector(".ambulance-detail")
                .classList.remove("leftFlip");

            document
                .querySelector(".ambulance-detail")
                .classList.remove("rightFlip");
        }, 1000);
    });
});

let quotes = [
    `"Future holds transformative services and technologies that will reshape the world."`,
    `"At Ambuvians, the healthcare is not just a service, but a promise of well-being."`,
    `"Caring today for a healthier tomorrow, Ambuvians redefines healthcare."`,
];

let quotesNo = 0;

setInterval(() => {
    document.querySelector(".text-box-h").innerText = quotes[quotesNo];

    quotesNo = quotesNo < quotes.length - 1 ? quotesNo + 1 : 0;
}, 5000);

document.querySelector(".contact-us-form").addEventListener("click", () => {
    document.querySelector(".form").style.display = "block";
});

document.querySelector(".submit").addEventListener("click", () => {
    document
        .querySelectorAll(".form-input")
        .forEach((input) => (input.value = ""));

    document.querySelector(".form").innerHTML = `
    <div class="form-item" data-animation="fadeOff">
      <div>
        <figure><img src="/images/ambu logo.png" alt="ambu logo" class="form-logo"></figure>
      </div>

      <div>
        <h1>Thank You</h1>
      </div>

      <div>
        <p class="form-para-1">Our team will get back
          to you shortly !
        </p>
      </div>



      <p class="form-para-2">Stay Tuned</p>

    </div>`;
    // document.querySelector(".form-dropdown").option.value = "Select";

    document.querySelector(".form").classList.add("fade1");
    document.querySelector(".form").classList.add("fadeOff");

    setInterval(() => {
        document.querySelector(".form").style.display = "none";
    }, 8000);
});

// for Fade animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const animation = entry.target.getAttribute("data-animation");

        if (entry.isIntersecting) {
            entry.target.classList.add("animated", `${animation}`);
        } else {
            entry.target.classList.remove("animated", `${animation}`);
        }
    });
});

const animatedEls = document.querySelectorAll("[data-animation]");
animatedEls.forEach((el) => observer.observe(el));

// for sliding div animations

// I have tried this scrolling effect code but it cause some problem in responsiveness in smaller screens thats why i comment it out both in css and js. if you want to see it your self uncomment effect one by one in both css and js file

// starting Code for scrolling effect

// const observer1 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         } else {
//             entry.target.classList.remove("show");
//         }
//     });
// });

// const hiddenElement = document.querySelectorAll(".hidden");

// hiddenElement.forEach((el) => {
//     observer1.observe(el);
// });

// ending Code for scrolling effect
