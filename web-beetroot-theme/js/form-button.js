const url = "http://localhost:63342/";
let user = {
    name: text.innerHTML,
    age: 23,
}
const addParam = {
    header: {
        "content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user),
    method: "POST",
}

$(".contact-form").submit((e) => {
    e.preventDefault();

    $(".contact-form").post(url, user)
    // fetch(url, addParam)
    //     .then((data) => data.json())
    //     .then(response =>  console.log(response))

    $(".contact-form__name, .contact-form__email, .contact-form__text-area").val(
        ""
    );
});