document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const form = document.querySelector("form")
  const closeBtn = document.querySelector("#closePopupBtn")
  const name = document.querySelector("#fname")
  const surname = document.querySelector("#sname")
  const phoneNumber = document.querySelector("#phoneNumber")
  const email = document.querySelector("#email")
  const Message = document.querySelector("#Message")
  const input = document.querySelectorAll("form input, #Message")
  // regex for inputs
  const nameValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneValidation = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/

  form.onsubmit = (e) => {
    e.preventDefault()
    form.setAttribute("novalidate", true)

    let validate = true
    if (!nameValidation.test(name.value)) validate = false

    if (!nameValidation.test(surname.value)) validate = false

    if (phoneNumber.value != "") {
      if (!phoneValidation.test(phoneNumber.value)) validate = false
    }
    if (!emailValidation.test(email.value)) validate = false

    if (Message.value == "") validate = false

    if (validate) {
      document.getElementById("popup-modal").style.display = "flex"
      console.log("First name: " + name.value)
      console.log("Last name: " + surname.value)
      console.log("Phone number: " + phoneNumber.value)
      console.log("Email: " + email.value)
      console.log("Message: " + Message.value)
      // reset form
      input.forEach((element) => {
        element.value = ""
      })
    }
  }

  closeBtn.addEventListener("click", () => {
    document.getElementById("popup-modal").style.display = "none"
  })
})
