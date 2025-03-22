document
  .getElementById('realization--show')
  .addEventListener('click', function () {
    let miniGallery = document.querySelector('.realizations--mini')
    let fullGallery = document.querySelector('.section--realizations')

    miniGallery.classList.toggle('hidden')
    fullGallery.classList.toggle('hidden')

    if (!fullGallery.classList.contains('hidden')) {
      this.textContent = 'Ukryj galerię'
    } else {
      this.textContent = 'Poka galerię'
    }
  })
