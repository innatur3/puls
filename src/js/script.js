  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false, 
    mouseDrag: true,
    responsive: {
        992:{
            nav: false,
        },
        300: {
            nav: true,
        }
      }
    }
    );

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });
