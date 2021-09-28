const cards = document.getElementsByClassName('card');
      for (let i = 0; i < cards.length ; i++){
        const card = cards[i]
        card.addEventListener("click", function() {
            const img = card.getElementsByTagName('img')
            const url = img[0].src
            const modalImg = document.getElementById('modal-image')
            modalImg.setAttribute("src", url)
            const text = card.getElementsByClassName('card-text d-none')
            const content = text[0].textContent
            const textModal = document.getElementById('modal-text')
            textModal.textContent = content
            const h5 = card.getElementsByTagName('h5')
            const modalTitle = document.getElementById('modal-title')
            const title = h5[0].textContent
            modalTitle.textContent = title  
} )
      }