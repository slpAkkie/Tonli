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

  ScrollFect.appearance( '.page-block', {
    animation: ScrollFect.animationStore.appearanceSlideRight,
    duration: 0.75,
    gap: [ 145, 20 ],
    params: {
      minScale: 0.95
    }
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
