const arrows=document.querySelectorAll('.arrow')
const movieLists = document.querySelectorAll('.movie-list')
  arrows.forEach(function(arrow,i){
      const itemNumber = movieLists[i].querySelectorAll('img').length;
      let count = 0
      arrow.addEventListener('click',function(){
          count++;
          if(itemNumber-(4 + count)>=0){
              movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value
                  - 300}px)`;
           }else{
               movieLists[i].style.transform='translateX(0)';
               count=0;
           }
          
          
      });
  })

    