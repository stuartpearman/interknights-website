var connectButton = document.querySelector('.connect-button')
var modalOuter = document.querySelector('.modal-outer')
var modalBox = document.querySelector('.modal-box')
var exitModal = document.querySelector('.exit-modal')

function openModal () {
  modalOuter.classList.add('active')
  window.setTimeout(openModalBox, 200)
}

function openModalBox () {
  modalBox.classList.add('active')
}

function closeModal () {
  modalOuter.classList.remove('active')
  window.setTimeout(closeModalBox, 200)
}

function closeModalBox () {
  modalBox.classList.remove('active')
}

connectButton.addEventListener('click', openModal)
exitModal.addEventListener('click', closeModal)
window.addEventListener('keydown', function (e) {
  console.log(e.keyCode)
  if (e.keyCode === 27) {
    console.log('hello')
    closeModal()
  }
})

smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 900, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  callback: function (anchor, toggle) {} // Function to run after scrolling
})
