const scriptURL = 'https://script.google.com/macros/s/AKfycbwVP9OrM3lx5KLnW076tva3vWgtnuzIV2De9H_-q-dTy9sA9qw4P0SQHtuMMaaDkgK8/exec'
const form = document.forms['student-info-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('submit-btn').innerText = "Submitting..."
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Student Information Added Successfully! 🎉"))
    .then(() => {
        document.getElementById('submit-btn').innerText = "Submit"
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
