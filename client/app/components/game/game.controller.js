import { dashboard } from './dashboardInfo.service'
const { top, left, right, bottom } = dashboard;

class GameController {
    constructor() {
        this.name = 'Game';
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.vertical = dashboard.vertical;
        this.allCells = { ...top, ...left, ...right, ...bottom };
        this.currentMoveOfPlayer ;
        this.cellId0 = 0;
        this.cellId1 = 0;
}
    changePlayerPosition (a) {
        const currentPlayer = `#check${a}`;
        const tip = angular.element( document.querySelector(currentPlayer) )[0];
        
        if(a === 0){ 
            const cellName = `cell_${this.cellId0}`;
             if(this.cellId1 === this.cellId0+1){
                    if(this.allCells[cellName].vertical===true){
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY - 30 + 'px';
                    } else if(this.allCells[cellName].bottom===true){
                        tip.style.marginTop = this.allCells[cellName].positionX - 30 + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                    } else if(this.allCells[cellName].left===true){
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 30 + 'px';
                    } else {
                        tip.style.marginTop = this.allCells[cellName].positionX + 30 + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                    }
                } else {
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                }
            this.cellId0++;
                if (this.cellId0 >= dashboard.length) {   
                     this.cellId0 -= dashboard.length;
                }
        }   else{
            const cellName = `cell_${this.cellId1}`;
                if(this.cellId0 === this.cellId1+1){
                    if(this.allCells[cellName].vertical===true){
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY - 30 + 'px';
                    } else if(this.allCells[cellName].bottom===true){
                        tip.style.marginTop = this.allCells[cellName].positionX - 30 + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                    } else if(this.allCells[cellName].left===true){
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 30 + 'px';
                    } else {
                        tip.style.marginTop = this.allCells[cellName].positionX + 30 + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                    }
                } else {
                        tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                        tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
                }
            this.cellId1++;
            if (this.cellId1 >= dashboard.length) {   
                this.cellId1 -= dashboard.length;
            }
        }
    }
}

export default GameController;
