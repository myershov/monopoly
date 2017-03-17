class GameController {
  constructor() {
    this.name = 'Game';
    this.i = 10;
    this.j = 160;
    this.c = 0;
    var a={name: 'Початок'},
        b={name: 'Музей'},
        c={name: 'Банк'},
        d={name: 'Школа'},
        e={name: 'Китнотеатр'},
        f={name: 'Чернігівське'},
        g={name: 'Парк'},
        h={name: 'Аеропорт'},
        i={name: 'Податкова'},
        j={name: 'Планетарій'},
        k={name: 'Укрзалізниця'},
        l={name: 'Мтс'},
        m={name: 'Театр'},
        n={name: 'Київстар'},
        p={name: 'Пропуск'},
        o={name: 'Бонус'},
        v={name: '+2 Ходи'};
    this.bloc = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,p];
    this.left = [l,b,c,d,e,f,g];
    this.right = [l,b,c,d,e,f,g];
    this.bottom = [v,b,c,d,e,f,g,h,i,j,k,l,m,n,o];
    }
qwer () {
    if(this.c < 13){
        document.getElementById('check').style.marginLeft = this.i+'px';
        this.i=this.i+50;
        this.c++;
    } else if(this.c === 13){
        this.i=this.i+100;
        document.getElementById('check').style.marginLeft = this.i+'px';
        this.c++;
    } else if(this.c < 21){
        document.getElementById('check').style.marginTop = this.j+'px';
        this.j=this.j+50;
        this.c++;
    } else if(this.c === 21){
        this.j=this.j+100;
        document.getElementById('check').style.marginTop = this.j+'px';
        this.c++;
    } else if(this.c === 22){
        this.i=this.i-150;
        document.getElementById('check').style.marginLeft = this.i+'px';
        this.c++;
    } else if(this.c < 35){
        this.i=this.i-50;
        document.getElementById('check').style.marginLeft = this.i+'px';
        this.c++;
    } else if(this.c === 35){
        this.i=this.i-150;
        document.getElementById('check').style.marginLeft = this.i+'px';
        this.c++;
    } else if(this.c === 36){
        this.j=this.j-150;
        document.getElementById('check').style.marginTop = this.j+'px';
        this.c++;
    } else if(this.c < 43){
        this.j=this.j-50;
        document.getElementById('check').style.marginTop = this.j+'px';
        this.c++;
    } else if(this.c === 43){
        this.j=this.j-150;
        document.getElementById('check').style.marginTop = this.j+'px';
        this.c=0;
        this.i = 10;
        this.j = 160;
    }
    conslolelog(this.c);
    };
}

export default GameController;
