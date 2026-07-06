const notes = document.getElementById("notes");
const saveBtn = document.getElementById("saveNotes");
const clearBtn = document.getElementById("clearNotes");

if (notes) {

    notes.value = localStorage.getItem("studyNotes") || "";

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("studyNotes", notes.value);
        alert("Notes saved!");
    });

    clearBtn.addEventListener("click", () => {
        notes.value = "";
        localStorage.removeItem("studyNotes");
    });

}