const offcanvasWithBothOptions = document.querySelector("#offcanvasWithBothOptions");
const canvasBtn = document.querySelector("#canvas-btn");
const btnClose = document.querySelector("#btn-close");
const canvasHeader = document.querySelector("#canvas-header");
const offcanvasFooterNavbar = document.querySelector("#offcanvas-footer-navbar");
const modal = new bootstrap.Modal(document.querySelector("#exampleModal"))



const contactMeButton = document.querySelector("#button-sub");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
//Mail dönüşü modal kalktı

//İletşim gönder butonu yeniden güncellenecek







eventListener();

function eventListener() {
    addEventListener("DOMContentLoaded", renderNavbar);
    addEventListener("resize", renderNavbar);
    addEventListener("submit", contactMe)
}

function contactMe(e) {

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const message = messageInput.value;


    if (name && phone && email && message) {

        const data = {
            name: name,
            telno: phone,
            email: email,
            content: message
        }

        postData(data)
            .then(
                data => {
                    modal.show();
                    inputClear();

                },
                err => console.log(err)
            )


    }



    e.preventDefault();
}

async function postData(data) {
    const url = "https://efehukuk.herokuapp.com/publicreq";
    /* const url = "http://localhost:6660/publicreq" */
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        },
    })

    return await response.json();
}

function renderNavbar() {
    const width = Number(window.innerWidth);

    if (width <= 768) {
        offcanvasWithBothOptions.classList = ("offcanvas offcanvas-start bg-dark-blue");
        canvasBtn.style.display = "block"
        btnClose.style.display = "block"
        canvasHeader.style.display = "block"
        offcanvasFooterNavbar.style.display = "block"
    }
    else {
        offcanvasWithBothOptions.classList = ("");
        canvasBtn.style.display = "none"
        btnClose.style.display = "none"
        canvasHeader.style.display = "none"
        offcanvasFooterNavbar.style.display = "none"
    }

}

function inputClear() {
    nameInput.value=""
    phoneInput.value=""
    emailInput.value="" 
    messageInput.value=""

}






