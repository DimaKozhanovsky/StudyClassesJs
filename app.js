class MainContainer { //В JavaScript класс – это разновидность функции.
  container 
  
  constructor(pp , aa ,cc){ // прилитает из 42
     this.container = document.createElement("div")
    this.container.className = "container" // добавили класс к диву
    this.container.append(pp.popup)              // В ссс добавляетсё внутрь контейнера передаем из constructor(pp) строка 4  и обращаемся к свойсту класса попап
    this.container.append(aa.choosePopUp) //подлучаем  все что лежит в choosePopUp .
    this.container.append(cc.changePop)
    this.build()


  }
  build () {
    document.body.append(this.container)
  }
}
class PopUp{
    popup 
    constructor(){

        this.popup = document.createElement("div")
        this.popup.className = "littlecontainer"
        const btnk = document.createElement("button")
        btnk.textContent = "Okay"
        this.popup.appendChild(btnk) // передали в попап 
        btnk.className = "buttonOk"
        const quitBt = document.createElement("button")
        quitBt.textContent = "CLose"
        this.popup.appendChild(quitBt)
        quitBt.className = "buttonClose"
        
    }
    

}


class ChoosePopUp{
 choosePopUp
 constructor(){
  this.choosePopUp = document.createElement("button")
  this.choosePopUp.className = "openbutton"
  this.choosePopUp.textContent = "Pressme to open PopUp"
 }

}

class ChangePop {
  changePop
  constructor(){
    this.changePop = document.createElement("div")
    this.changePop.className = "changepo"
  }
}

new MainContainer(new PopUp(), new ChoosePopUp() , new ChangePop() ) // мы создаем новый экземляр  , передали агрумент new PopUp()
