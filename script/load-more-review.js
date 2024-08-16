let loadMoreBtn = document.getElementById('load-more-btn-review');

let currentItem = 3;

loadMoreBtn.addEventListener('click', (e) => {
  // alert('load more');
  const elementList = [...document.querySelectorAll(' .product-details-of-review')];
  e.target.classList.add('showLoading');
  
  
  for (let i = currentItem; i < currentItem+ 3; i++) {
    
    
        if (elementList[i]) {
          console.log(elementList[i]);
            elementList[i].style.display = 'block';
        }
        
    
  }
  currentItem += 3;

  if (currentItem >= elementList.length) {
    event.target.style.display = 'none';
  } 
})