document.addEventListener( 'DOMContentLoaded', () => {

  /**
   * Настройка ScrollFectJS
   */
  ScrollFect.appearance( 'nav.top-nav', {
    animation: ScrollFect.animationStore.appearanceSlideTop,
    duration: 0.75,
    once: true,
    onVisible: false,
    params: {
      topOffset: 25
    }
  } );


  const generalSFOptions = {
    duration: 0.75,
    gap: [ 145, 20 ]
  };

  ScrollFect.appearance( 'section#tonli-idea', {
    animation: ScrollFect.animationStore.appearanceFade,
    ...generalSFOptions,
    params: {
      minScale: 0.95
    }
  } );

  ScrollFect.appearance( '.sf__appearance_slide-left', {
    animation: ScrollFect.animationStore.appearanceSlideLeft,
    ...generalSFOptions
  } );

  ScrollFect.appearance( '.sf__appearance_slide-right', {
    animation: ScrollFect.animationStore.appearanceSlideRight,
    ...generalSFOptions
  } );



  /**
   * Навигационная панель на мобильных устройствах
   */
  document.querySelector( '.top-nav__burger' ).addEventListener( 'click', function () {
    let buttons = document.querySelector( '.top-nav__buttons' );
    buttons.classList.contains( 'shown' )
      ? ( buttons.classList.remove( 'shown' ), document.body.style.overflow = 'auto' )
      : ( buttons.classList.add( 'shown' ), document.body.style.overflow = 'hidden' );
  } );

} );
