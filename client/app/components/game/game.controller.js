import { dashboard } from './dashboardInfo.service'

class GameController {
    constructor() {
        this.name = 'Game';
        this.top = dashboard.top;
        this.left = dashboard.left;
        this.right = dashboard.right;
        this.bottom = dashboard.bottom;
        this.cellId = 0;
    }
//    qwer () {
//    if(this.c < 13){
//        document.getElementById('check').style.marginLeft = this.i+'px';
//        this.i=this.i+50;
//        this.c++;
//    } else if(this.c === 13){
//        this.i=this.i+100;
//        document.getElementById('check').style.marginLeft = this.i+'px';
//        this.c++;
//    } else if(this.c < 21){
//        document.getElementById('check').style.marginTop = this.j+'px';
//        this.j=this.j+50;
//        this.c++;
//    } else if(this.c === 21){
//        this.j=this.j+100;
//        document.getElementById('check').style.marginTop = this.j+'px';
//        this.c++;
//    } else if(this.c === 22){
//        this.i=this.i-150;
//        document.getElementById('check').style.marginLeft = this.i+'px';
//        this.c++;
//    } else if(this.c < 35){
//        this.i=this.i-50;
//        document.getElementById('check').style.marginLeft = this.i+'px';
//        this.c++;
//    } else if(this.c === 35){
//        this.i=this.i-150;
//        document.getElementById('check').style.marginLeft = this.i+'px';
//        this.c++;
//    } else if(this.c === 36){
//        this.j=this.j-150;
//        document.getElementById('check').style.marginTop = this.j+'px';
//        this.c++;
//    } else if(this.c < 43){
//        this.j=this.j-50;
//        document.getElementById('check').style.marginTop = this.j+'px';
//        this.c++;
//    } else if(this.c === 43){
//        this.j=this.j-150;
//        document.getElementById('check').style.marginTop = this.j+'px';
//        this.c=0;
//        this.i = 10;
//        this.j = 160;
//    }
//    };
    changePlayerPosition () {
      let tip = angular.element( document.querySelector( '#check' ) )[0];
      let cellName = `cell_${this.cellId}`;
      tip.style.marginTop = dashboard.top[cellName].positionX + 'px';
      tip.style.marginLeft = dashboard.top[cellName].positionY + 'px';
      this.cellId++;
    }
}

export default GameController;
