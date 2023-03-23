window.onload = () => {

  const attractTime = (60 * 1000) * 5; // 5 minutes
  const ui = new UI();
  let attract = false;
  let attractTimeout = setTimeout(buildAttract, attractTime);

  function buildAttract() {
    console.info("Attract be like: I need atention!! Look at me and play with me!!!");

    const attractScreen = ui.makeAttractScreen();

    // Close attract screen
    attractScreen.addEventListener('click', ()=> {
      attractScreen.remove();
      attract = false;

      attractTimeout = setTimeout(buildAttract, attractTime);
    })
  
    attract = true;
  }
}
