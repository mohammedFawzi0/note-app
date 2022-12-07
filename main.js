const addNoteEl = document.querySelector('.addNote');
const formHolder = document.querySelector('.form-holder');
const cancelBtn = document.querySelector('.cancel');
const saveBtn = document.querySelector('.save');

let titleField = document.querySelector('.addTitle');
let contentField = document.querySelector('.note-content');
let container = document.querySelector('.container');
cancelBtn.addEventListener('click', () => {
  formHolder.classList.remove('show');
  titleField.value = '';
  contentField.value = '';
});

addNoteEl.onclick = function() {
  console.log(formHolder.classList);
};
saveBtn.addEventListener('click', saveNote);

//note object
function myObj(title = 'note', text = '') {
  this.title = title;
  this.text = text;
}

let notes = [];
//save note function
function saveNote() {
  let title = titleField.value;
  let text = contentField.value;

  if (title == '' || text == '') {
    alert('can not add empty note');
  } else {
    let newNote = new myObj(title, text);
    notes.push(newNote);
    localStorage.setItem('note', JSON.stringify(notes));
    showNote();
  }

}

(function showNote() {

  let localNotes = localStorage.getItem('note');

  if (localNotes == null) {
    let msg = '<p style="font-size:14px;">no notes to show add some</p>'
    container.innerHTML += msg;
  } else {
    notes = JSON.parse(localNotes);

    for (let i = 0; i < notes.length; i++) {
      container.innerHTML += '<div class="note"><h2 class="title">' + notes[i].title + '</h2><div class="date>12/10/2022</div><div class="content"></div>' + notes[i].text + '</div>';
    }
  }
})();
