interface ITourItem {
  x:number,
  y:number,
  zoom:number,
  content:IInternationalContent
}

interface IInternationalContent {
  NL: string,
  EN: string
}

class UI {
  private language: string = 'NL';

  constructor() {
  }

  public makeAttractScreen() : HTMLElement{
    const attractWrapper = document.createElement('div');
    attractWrapper.id = 'attract';

    // language buttons
    const languageToggle = document.createElement('language-selector');
    // Dutch button
    const languageNL = document.createElement('button');
    languageNL.innerHTML = "NL";
    languageNL.className = "active";
    languageNL.addEventListener('click', (e) => {
      console.log("attract, clicked NL");
    })
    // English button
    const languageEN = document.createElement('button');
    languageEN.innerHTML = "EN";
    languageEN.addEventListener('click', (e) => {
      console.log("attract, clicked EN");
    })
    languageToggle.append(languageNL, languageEN);

    const attractScreen = document.createElement('div');
    attractScreen.id = 'attract-content';
    attractScreen.append(languageToggle)
    attractScreen.innerHTML += "<p>I need attention</p>"
    attractWrapper.append(attractScreen);

    document.querySelector('body')!.prepend(attractWrapper);

    return attractWrapper
  }

}
