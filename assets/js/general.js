document.addEventListener( 'DOMContentLoaded', () => {

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
    animation: ScrollFect.animationStore.appearanceFade,
    duration: 0.75,
    gap: [ 145, 20 ],
    params: {
      minScale: 0.95
    }
  } );

} );
