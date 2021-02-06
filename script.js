// Global variables

// Creating elements
let diaryDiv = document.createElement("div");
let diaryForm = document.createElement("form");
let diaryDate = document.createElement("input");
let diaryHeadline = document.createElement("input");
let diaryText = document.createElement("textarea");
let button = document.createElement("button");
let diaryUL = document.createElement("ul");


// Creating notes-array
// const notes = [];

// Setting values and styling elements
diaryDate.type = "date";
diaryDate.valueAsDate = new Date();
diaryHeadline.placeholder = "Rubrik";
diaryText.style.resize = "none";
diaryText.placeholder = "Din dagboksanteckning";
button.textContent = "Spara";

// Appending elements to DOM
document.body.appendChild(diaryDiv);
diaryDiv.appendChild(diaryForm);
diaryForm.appendChild(diaryDate);
diaryForm.appendChild(diaryHeadline);
diaryForm.appendChild(diaryText);
diaryForm.appendChild(button);
document.body.appendChild(diaryUL);

// diaryUL.textContent = "Testar";

let getNotes = JSON.parse(localStorage.getItem("notes"));
if (getNotes == null) {
    diaryUL.innerHTML = "";
} else {
    for (let i = 0; i < getNotes.length; i++) {
        diaryUL.insertAdjacentHTML("beforeend", `<li><strong>${getNotes[i].date}</strong></br>${getNotes[i].header}</br>${getNotes[i].text}</li>`);
    }
}

// console.log(getNotes);

// Button event listener
button.addEventListener("click", function (e) {
    // Prevents form to load page again
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("notes")) != null) {
        let getNotes = JSON.parse(localStorage.getItem("notes"));
       console.log(getNotes);
        // getNotesArray.push(getNotes);

        // Saving input values to variables
        let diaryDateInput = diaryDate.value;
        let diaryHeadlineInput = diaryHeadline.value;
        let diaryTextInput = diaryText.value;

        // Saving the inputs to the object inputs
        let diary = {
            date: diaryDateInput,
            header: diaryHeadlineInput,
            text: diaryTextInput
        };

        // Pushing the new inputs to the notes array
        getNotes.push(diary);

        // Saving the changed array to localstorage
        localStorage.setItem("notes", JSON.stringify(getNotes));

        // Emptying the input fields
        diaryHeadline.value = "";
        diaryText.value = "";

        diaryUL.insertAdjacentHTML("beforeend", `<li><strong>${diary.date}</strong></br>${diary.header}</br>${diary.text}</li>`);

    } else {
        let diaryDateInput = diaryDate.value;
        let diaryHeadlineInput = diaryHeadline.value;
        let diaryTextInput = diaryText.value;
        let notesArray = [];
        let diary = {
            date: diaryDateInput,
            header: diaryHeadlineInput,
            text: diaryTextInput
        };
        notesArray.push(diary);
        localStorage.setItem("notes", JSON.stringify(notesArray));
        // Emptying the input fields
        diaryHeadline.value = "";
        diaryText.value = "";
        diaryUL.insertAdjacentHTML("beforeend", `<li><strong>${diary.date}</strong></br>${diary.header}</br>${diary.text}</li>`);
    }
})