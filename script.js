function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const data = { name, email, message}

  axios.post('https://dttc-api.herokuapp.com/email', data)
  .then(function(response) {
    console.log('Email sent')
  })
  .catch(function(error) {
    console.error('Error sending email:', error)
  })
})


