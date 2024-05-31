var SiteNameInput = document.getElementById("SiteName")

var SiteUrlInput = document.getElementById("SiteUrl")

var submitBtn = document.getElementById("submitBtn")
var deleteBtn = document.getElementById("deleteBtn")
var popup = document.getElementById("popup")
// submitBtn.addEventListener('click', function () {
//     addBookmark()
//     submitBtn.classList.add("submitBtn-click")
//     /*         submitBtn.classList.remove("btn-bg")
//         submitBtn.classList.add("btn-outline-dark")
//         submitBtn.classList.remove(" text-white")
//         submitBtn.classList.add(" text-dark")

//         submitBtn.classList.add("btn-bg")
//         submitBtn.classList.remove("btn-outline-dark")
//         submitBtn.classList.add(" text-white")
//      */
// })
//  closeBtn.addEventListener('click', function (e) {
//     closeOverlay()

// })


// SiteNameInput.addEventListener('input', function () {
//     validationName()
// })
// SiteUrlInput.addEventListener('input', function () {
//     validationUrl()
// })

var bookmarklist = []

if (localStorage.getItem("kksk") !== null) {

    bookmarklist = JSON.parse(localStorage.getItem("kksk"))

    displayData();
}


function addBookmark() {

    /*     var modal = document.getElementById("staticBackdrop"); */
    if (validationName() == true && validationUrl() == true) {
        bookmark = {
            name: SiteNameInput.value,
            url: SiteUrlInput.value
        }
        bookmarklist.push(bookmark)
        localStorage.setItem("kksk", JSON.stringify(bookmarklist))

        /*        modal.classList.add("d-none") */

        displayData()

        clearForm()


    }
    else {
        console.log("doesnt match")

        /*  modal.classList.remove("d-none") */

        openOverlay()

    }


}

function openOverlay() {

    popup.classList.add("open-overlay")

}
function closeOverlay() {

    popup.classList.remove("open-overlay")


}
/* var closeOverlay = function () {
    e.preventDefault()
}; */

function clearForm() {
    SiteNameInput.value = null
    SiteNameInput.classList.remove("is-valid");
    SiteNameInput.classList.remove("is-invalid");
    SiteUrlInput.value = null;
    SiteUrlInput.classList.remove("is-valid");
    SiteUrlInput.classList.remove("is-invalid");

}
function displayData() {
    var tableBody = ""
    for (var i = 0; i < bookmarklist.length; i++) {

        tableBody += `<tr>
           <td>${[i + 1]}</td>
           <td>${bookmarklist[i].name}</td>
           <td><a class="btn btn-bg text-white  py-2 visit-btn" href="${bookmarklist[i].url}" target="_blank" role="button"><i
           class="fa-solid fa-eye pe-1"></i> Visit</a> </td>
<td> <button  class="btn btn-bg text-white  py-2 btn-delete" id="deleteBtn" onclick="deleteBookmark(${i})" ><i
           class="fa-solid fa-trash pe-1" ></i> Delete</button></td>
            </tr>`


        /*  console.log(bookmarklist.length)
  */
    }
    document.getElementById("table-body").innerHTML = tableBody
}



function deleteBookmark(item) {

    bookmarklist.splice(item, 1)

    localStorage.setItem("kksk", JSON.stringify(bookmarklist))
    displayData()


}

function validationName() {
    var regex = /^[A-Za-z]{3,}$/
    var bookName = SiteNameInput.value;

    if (regex.test(bookName)) {
        SiteNameInput.classList.add("is-valid");
        SiteNameInput.classList.remove("is-invalid");
        console.log("match")
        return true;
    }

    else {
        SiteNameInput.classList.add("is-invalid");
        SiteNameInput.classList.remove("is-valid");
        /*      console.log("notmatch") */
        return false;

    }
}
function validationUrl() {
    var regexUrl = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})/

    var bookUrl = SiteUrlInput.value;
    if (regexUrl.test(bookUrl)) {
        console.log("urlmatch")
        SiteUrlInput.classList.add("is-valid")
        SiteUrlInput.classList.remove("is-invalid")
        return true;
    }
    else {
        console.log("urldoesntmatch")
        SiteUrlInput.classList.add("is-invalid")
        SiteUrlInput.classList.remove("is-valid")
        return false;
    }
}
