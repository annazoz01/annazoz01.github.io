
window.addEventListener('load', async e -> {
  if('serviceWorker' in navigatior){
    try{
      navigator.serviceWorker.register('sw.js');
      console.log('SW register');
    } catch (error){
      console.log('SW reg failed');
    }
  }
});


