class GameController {
  constructor() {
    this.name = 'Game';
    var a={name: ''},
        b={name: ''},
        c={name: ''},
        d={name: ''},
        e={name: ''},
        f={name: ''},
        g={name: ''},
        h={name: ''},
        i={name: ''},
        j={name: ''},
        k={name: ''},
        l={name: ''},
        m={name: ''},
        n={name: ''},
        p={name: ''};
    this.bloc = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,p];
    this.left =[a,b,c,d,e,f,g];
    this.right =[a,b,c,d,e,f,g];
    this.bottom = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,p];
  }
}

export default GameController;
