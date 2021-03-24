var redStatus=localStorage.getItem('red');
var blueStatus=localStorage.getItem('blue');
var greenStatus=localStorage.getItem('green');
var yellowStatus=localStorage.getItem('yellow');

var nob=[];
var winer=[];

var rollFlag=1;

function toGlobal(color,num){
   if(color=='red'){
       return num;
   }

   if (color=='yellow') {
       if (num<=30) {
           return num+10;
       }else{
           return num-30;
       }
   }

   if (color=='green') {
       if (num<=20) {
           return num+20;
       }else{
           return num-20;
       }
   }

   if (color=='blue') {
       if (num<=10) {
           return num+30
       }else{
           return num-10
       }
   }
}



var marbles=new Vue({
    el:'#table',
    data:{
        song:1,
        ////
        rollNumber:0,
        ////
        position:{
            red:{'1':'0','2':'0','3':'0','4':'0'},
            yellow:{'1':'0','2':'0','3':'0','4':'0'},
            green:{'1':'0','2':'0','3':'0','4':'0'},
            blue:{'1':'0','2':'0','3':'0','4':'0'}
        },

        globalPosition:{
            red:{
                home:{'1':'0','2':'0','3':'0','4':'0'},
                final:{'1':'0','2':'0','3':'0','4':'0'},
                start:1,
                end:40,
            },
            yellow:{
                home:{'1':'0','2':'0','3':'0','4':'0'},
                final:{'1':'0','2':'0','3':'0','4':'0'},
                start:11,
                end:10
            },
            green:{
                home:{'1':'0','2':'0','3':'0','4':'0'},
                final:{'1':'0','2':'0','3':'0','4':'0'},
                start:21,
                end:20
            },
            blue:{
                home:{'1':'0','2':'0','3':'0','4':'0'},
                final:{'1':'0','2':'0','3':'0','4':'0'},
                start:31,
                end:30
            },
            st:{
            '1':'0',
            '2':'0',
            '3':'0',
            '4':'0',
            '5':'0',
            '6':'0',
            '7':'0',
            '8':'0',
            '9':'0',
            '10':'0',
            '11':'0',
            '12':'0',
            '13':'0',
            '14':'0',
            '15':'0',
            '16':'0',
            '17':'0',
            '18':'0',
            '19':'0',
            '20':'0',
            '21':'0',
            '22':'0',
            '23':'0',
            '24':'0',
            '25':'0',
            '26':'0',
            '27':'0',
            '28':'0',
            '29':'0',
            '30':'0',
            '31':'0',
            '32':'0',
            '33':'0',
            '34':'0',
            '35':'0',
            '36':'0',
            '37':'0',
            '38':'0',
            '39':'0',
            '40':'0'
            }
        },

//////////////////////////////////
        s:{
            '1':'<i class="fas fa-arrow-down"></i>',
            '2':'',
            '3':'',
            '4':'',
            '5':'',
            '6':'',
            '7':'',
            '8':'',
            '9':'',
            '10':'<i class="fas fa-flag-checkered"></i>',
            '11':'<i class="fas fa-arrow-left"></i>',
            '12':'',
            '13':'',
            '14':'',
            '15':'',
            '16':'',
            '17':'',
            '18':'',
            '19':'',
            '20':'<i class="fas fa-flag-checkered"></i>',
            '21':'<i class="fas fa-arrow-up"></i>',
            '22':'',
            '23':'',
            '24':'',
            '25':'',
            '26':'',
            '27':'',
            '28':'',
            '29':'',
            '30':'<i class="fas fa-flag-checkered"></i>',
            '31':'<i class="fas fa-arrow-right"></i>',
            '32':'',
            '33':'',
            '34':'',
            '35':'',
            '36':'',
            '37':'',
            '38':'',
            '39':'',
            '40':'<i class="fas fa-flag-checkered"></i>'
        },
        /////////
        hr:{
            '1':'',
            '2':'',
            '3':'',
            '4':''
        },
        fr:{
            '41':'',
            '42':'',
            '43':'',
            '44':''
        },
        /////////
        hy:{
            '1':'',
            '2':'',
            '3':'',
            '4':''
        },
        fy:{
            '41':'',
            '42':'',
            '43':'',
            '44':''
        },
        /////////
        hg:{
            '1':'',
            '2':'',
            '3':'',
            '4':''
        },
        fg:{
            '41':'',
            '42':'',
            '43':'',
            '44':''
        },
        /////////
        hb:{
            '1':'',
            '2':'',
            '3':'',
            '4':''
        },
        fb:{
            '41':'',
            '42':'',
            '43':'',
            '44':''
        },
    },
    methods:{
        //----------------------------------------------------------------
        activeMarbles: function(color){
            if(color=='red'){
                this.hr[1]=`<section class="${color}-m m ${color}-m-1" id="${color}-m-1"> <i class="mum">1</i> </section>`;
                this.hr[2]=`<section class="${color}-m m ${color}-m-2" id="${color}-m-2"> <i class="mum">2</i> </section>`;
                this.hr[3]=`<section class="${color}-m m ${color}-m-3" id="${color}-m-3"> <i class="mum">3</i> </section>`;
                this.hr[4]=`<section class="${color}-m m ${color}-m-4" id="${color}-m-4"> <i class="mum">4</i> </section>`;
                this.globalPosition.red.home[1]=1;
                this.globalPosition.red.home[2]=1;
                this.globalPosition.red.home[3]=1;
                this.globalPosition.red.home[4]=1;
                setTimeout(() => {
                    this.s[1]='';
                    this.s[40]='';
                    this.s[10]='';
                    this.s[11]='';
                    this.s[20]='';
                    this.s[21]='';
                    this.s[30]='';
                    this.s[31]='';
                }, 3000);
            }
            if(color=='yellow'){
                this.hy[1]=`<section class="${color}-m m ${color}-m-1" id="${color}-m-1"> <i class="mum">1</i> </section>`;
                this.hy[2]=`<section class="${color}-m m ${color}-m-2" id="${color}-m-2"> <i class="mum">2</i> </section>`;
                this.hy[3]=`<section class="${color}-m m ${color}-m-3" id="${color}-m-3"> <i class="mum">3</i> </section>`;
                this.hy[4]=`<section class="${color}-m m ${color}-m-4" id="${color}-m-4"> <i class="mum">4</i> </section>`;
                this.globalPosition.yellow.home[1]=1;
                this.globalPosition.yellow.home[2]=1;
                this.globalPosition.yellow.home[3]=1;
                this.globalPosition.yellow.home[4]=1;
                setTimeout(() => {
                    this.s[1]='';
                    this.s[40]='';
                    this.s[10]='';
                    this.s[11]='';
                    this.s[20]='';
                    this.s[21]='';
                    this.s[30]='';
                    this.s[31]='';
                }, 3000);
            }
            if(color=='green'){
                this.hg[1]=`<section class="${color}-m m ${color}-m-1" id="${color}-m-1"> <i class="mum">1</i> </section>`;
                this.hg[2]=`<section class="${color}-m m ${color}-m-2" id="${color}-m-2"> <i class="mum">2</i> </section>`;
                this.hg[3]=`<section class="${color}-m m ${color}-m-3" id="${color}-m-3"> <i class="mum">3</i> </section>`;
                this.hg[4]=`<section class="${color}-m m ${color}-m-4" id="${color}-m-4"> <i class="mum">4</i> </section>`;
                this.globalPosition.green.home[1]=1;
                this.globalPosition.green.home[2]=1;
                this.globalPosition.green.home[3]=1;
                this.globalPosition.green.home[4]=1;
                setTimeout(() => {
                    this.s[1]='';
                    this.s[40]='';
                    this.s[10]='';
                    this.s[11]='';
                    this.s[20]='';
                    this.s[21]='';
                    this.s[30]='';
                    this.s[31]='';
                }, 3000);
            }
            if(color=='blue'){
                this.hb[1]=`<section class="${color}-m m ${color}-m-1" id="${color}-m-1"> <i class="mum">1</i> </section>`;
                this.hb[2]=`<section class="${color}-m m ${color}-m-2" id="${color}-m-2"> <i class="mum">2</i> </section>`;
                this.hb[3]=`<section class="${color}-m m ${color}-m-3" id="${color}-m-3"> <i class="mum">3</i> </section>`;
                this.hb[4]=`<section class="${color}-m m ${color}-m-4" id="${color}-m-4"> <i class="mum">4</i> </section>`;
                this.globalPosition.blue.home[1]=1;
                this.globalPosition.blue.home[2]=1;
                this.globalPosition.blue.home[3]=1;
                this.globalPosition.blue.home[4]=1;
                setTimeout(() => {
                    this.s[1]='';
                    this.s[40]='';
                    this.s[10]='';
                    this.s[11]='';
                    this.s[20]='';
                    this.s[21]='';
                    this.s[30]='';
                    this.s[31]='';
                }, 3000);
            }
        },


        //----------------------------------------------------------------
        checkHome: function(position){
            if (this.globalPosition.st[position]==0) {
                return 0;
            }else{
                return this.globalPosition.st[position];
            }
        },


        //----------------------------------------------------------------
        goToHome: function(positionMarbles,color,number){
            //song
            if (this.song==1) {
                let goToHomeSong=new Audio('song/goToHome.mp3');
                goToHomeSong.play();
            }

            if (color=='red') {
                let positionon=toGlobal('red',positionMarbles);
                this.s[positionon]='';
                this.hr[number]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                this.globalPosition.st[positionon]=0;
                this.globalPosition.red.home[number]=1;
                this.position.red[number]=0;
            }
            if (color=='yellow') {
                let positionon=toGlobal('yellow',positionMarbles);
                this.s[positionon]='';
                this.hy[number]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                this.globalPosition.st[positionon]=0;
                this.globalPosition.yellow.home[number]=1;
                this.position.yellow[number]=0;
            }
            if (color=='green') {
                let positionon=toGlobal('green',positionMarbles);
                this.s[positionon]='';
                this.hg[number]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                this.globalPosition.st[positionon]=0;
                this.globalPosition.green.home[number]=1;
                this.position.green[number]=0;
            }
            if (color=='blue') {
                let positionon=toGlobal('blue',positionMarbles);
                this.s[positionon]='';
                this.hb[number]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                this.globalPosition.st[positionon]=0;
                this.globalPosition.blue.home[number]=1;
                this.position.blue[number]=0;
            }
        },
        


        //----------------------------------------------------------------
        goToStart: function(color,number){
            //song
            if (this.song==1) {
                let gotostart=new Audio('song/GoToStart.mp3');
                gotostart.play();
            }
            if (color=='red') {
                if (this.checkHome(this.globalPosition.red.start)==0) {
                    
                    this.s[1]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                    this.hr[number]='';

                    this.globalPosition.red.home[number]=0;
                    this.position.red[number]=1;
                    this.globalPosition.st[this.globalPosition.red.start]='red-'+number;
                }else{
                    let spt=this.globalPosition.st[this.globalPosition.red.start].split('-');
                    if (spt[0]!='red') {
                        if (spt[0]=='yellow') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.red.start,'yellow',i);
                                    this.s[1]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hr[number]='';

                                    this.globalPosition.red.home[number]=0;
                                    this.position.red[number]=1;
                                    this.globalPosition.st[this.globalPosition.red.start]='red-'+number;
                                }
                            }
                        }
                        if (spt[0]=='green') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.red.start,'green',i);
                                    this.s[1]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hr[number]='';

                                    this.globalPosition.red.home[number]=0;
                                    this.position.red[number]=1;
                                    this.globalPosition.st[this.globalPosition.red.start]='red-'+number;
                                }
                            }
                        }
                        if (spt[0]=='blue') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.red.start,'blue',i);
                                    this.s[1]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hr[number]='';

                                    this.globalPosition.red.home[number]=0;
                                    this.position.red[number]=1
                                    this.globalPosition.st[this.globalPosition.red.start]='red-'+number;
                                }
                            }
                        }
                    }
                }
            }
        ///////////
            if (color=='yellow') {
                if (this.checkHome(this.globalPosition.yellow.start)==0) {
                    
                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                    this.hy[number]='';

                    this.globalPosition.yellow.home[number]=0;
                    this.position.yellow[number]=1;
                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                }else{
                    let spt=this.globalPosition.st[this.globalPosition.yellow.start].split('-');
                    if (spt[0]!='yellow') {
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'red',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                        if (spt[0]=='green') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'green',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                        if (spt[0]=='blue') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'blue',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                    }
                }
            }
            ///////////
            if (color=='yellow') {
                if (this.checkHome(this.globalPosition.yellow.start)==0) {
                    
                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                    this.hy[number]='';

                    this.globalPosition.yellow.home[number]=0;
                    this.position.yellow[number]=1;
                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                }else{
                    let spt=this.globalPosition.st[this.globalPosition.yellow.start].split('-');
                    if (spt[0]!='yellow') {
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'red',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                        if (spt[0]=='green') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'green',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                        if (spt[0]=='blue') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.yellow.start,'blue',i);
                                    this.s[this.globalPosition.yellow.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hy[number]='';

                                    this.globalPosition.yellow.home[number]=0;
                                    this.position.yellow[number]=1;
                                    this.globalPosition.st[this.globalPosition.yellow.start]='yellow-'+number;
                                }
                            }
                        }
                    }
                }
            }
            ///////////
            if (color=='green') {
                if (this.checkHome(this.globalPosition.green.start)==0) {
                    
                    this.s[this.globalPosition.green.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                    this.hg[number]='';

                    this.globalPosition.green.home[number]=0;
                    this.position.green[number]=1;
                    this.globalPosition.st[this.globalPosition.green.start]='green-'+number;
                }else{
                    let spt=this.globalPosition.st[this.globalPosition.green.start].split('-');
                    if (spt[0]!='green') {
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.green.start,'red',i);
                                    this.s[this.globalPosition.green.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hg[number]='';

                                    this.globalPosition.green.home[number]=0;
                                    this.position.green[number]=1;
                                    this.globalPosition.st[this.globalPosition.green.start]='green-'+number;
                                }
                            }
                        }
                        if (spt[0]=='yellow') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.green.start,'yellow',i);
                                    this.s[this.globalPosition.green.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hg[number]='';

                                    this.globalPosition.green.home[number]=0;
                                    this.position.green[number]=1;
                                    this.globalPosition.st[this.globalPosition.green.start]='green-'+number;
                                }
                            }
                        }
                        if (spt[0]=='blue') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.green.start,'blue',i);
                                    this.s[this.globalPosition.green.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hg[number]='';

                                    this.globalPosition.green.home[number]=0;
                                    this.position.green[number]=1;
                                    this.globalPosition.st[this.globalPosition.green.start]='green-'+number;
                                }
                            }
                        }
                    }
                }
            }
            ///////////
            if (color=='blue') {
                if (this.checkHome(this.globalPosition.blue.start)==0) {
                    
                    this.s[this.globalPosition.blue.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                    this.hb[number]='';

                    this.globalPosition.blue.home[number]=0;
                    this.position.blue[number]=1;
                    this.globalPosition.st[this.globalPosition.blue.start]='blue-'+number;
                }else{
                    let spt=this.globalPosition.st[this.globalPosition.blue.start].split('-');
                    if (spt[0]!='blue') {
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.blue.start,'red',i);
                                    this.s[this.globalPosition.blue.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hb[number]='';

                                    this.globalPosition.blue.home[number]=0;
                                    this.position.blue[number]=1;
                                    this.globalPosition.st[this.globalPosition.blue.start]='blue-'+number;
                                }
                            }
                        }
                        if (spt[0]=='yellow') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.blue.start,'yellow',i);
                                    this.s[this.globalPosition.blue.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hb[number]='';

                                    this.globalPosition.blue.home[number]=0;
                                    this.position.blue[number]=1;
                                    this.globalPosition.st[this.globalPosition.blue.start]='blue-'+number;
                                }
                            }
                        }
                        if (spt[0]=='green') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(this.globalPosition.blue.start,'green',i);
                                    this.s[this.globalPosition.blue.start]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`
                                    this.hb[number]='';

                                    this.globalPosition.blue.home[number]=0;
                                    this.position.blue[number]=1;
                                    this.globalPosition.st[this.globalPosition.blue.start]='blue-'+number;
                                }
                            }
                        }
                    }
                }
            }
        },


        //----------------------------------------------------------------
        moveTo: function(from,to,color,number){
            //song
            if (this.song==1) {
                let moveToSong=new Audio('song/moveTo.mp3');
                moveToSong.play();
            }

            if (color=='red') {
                let gFrom=toGlobal('red',from);
                let gTo=toGlobal('red',to);
                
                if (parseInt(this.position.red[number])+parseInt(this.rollNumber)<=40) {
                    let spt;
                    if (this.globalPosition.st[gTo]==0) {
                        this.globalPosition.st[gFrom]=0;
                        this.globalPosition.st[gTo]='red-'+number;
                        this.position.red[number]=to;
                        this.s[gFrom]='';
                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    }else{
                        spt=this.globalPosition.st[gTo].split('-');
                        if (spt[0]!='red') {
                            if (spt[0]=='yellow') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'yellow',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='red-'+number;
                                        this.position.red[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                            if (spt[0]=='green') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'green',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='red-'+number;
                                        this.position.red[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                            if (spt[0]=='blue') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'blue',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='red-'+number;
                                        this.position.red[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                if(this.position.red[number]<=40 && parseInt(marbles.position.red[number])+parseInt(marbles.rollNumber)<=44){
                    if (this.fr[to]=='') {
                        this.globalPosition.st[gFrom]=0;
                        this.fr[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                        this.position.red[number]=to;
                        this.s[gFrom]='';
                    } 
                }
                if (this.position.red[number]>39 && this.position.red[number]<45) {
                    if (this.fr[to]=='') {
                        this.fr[from]='';
                        this.fr[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                        this.position.red[number]=to;
                    }
                }
                
            }
            //////////////////
            if (color=='yellow') {
                let gFrom=toGlobal('yellow',from);
                let gTo=toGlobal('yellow',to);
                
                if (parseInt(this.position.yellow[number])+parseInt(this.rollNumber)<=40) {
                    let spt;
                    if (this.globalPosition.st[gTo]==0) {
                        this.globalPosition.st[gFrom]=0;
                        this.globalPosition.st[gTo]='yellow-'+number;
                        this.position.yellow[number]=to;
                        this.s[gFrom]='';
                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    }else{
                        spt=this.globalPosition.st[gTo].split('-');
                        if (spt[0]!='yellow') {
                            if (spt[0]=='red') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'red',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='yellow-'+number;
                                        this.position.yellow[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                            if (spt[0]=='green') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'green',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='yellow-'+number;
                                        this.position.yellow[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                            if (spt[0]=='blue') {
                                for(let i=1;i<5;i++){
                                    if (spt[1]==i) {
                                        this.goToHome(gTo,'blue',i);
                                        this.globalPosition.st[gFrom]=0;
                                        this.globalPosition.st[gTo]='yellow-'+number;
                                        this.position.yellow[number]=to;
                                        this.s[gFrom]='';
                                        this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                if(this.position.yellow[number]<=40 && parseInt(marbles.position.yellow[number])+parseInt(marbles.rollNumber)<=44){
                    if (this.fy[to]=='') {
                        this.globalPosition.st[gFrom]=0;
                        this.fy[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                        this.position.yellow[number]=to;
                        this.s[gFrom]='';
                    } 
                }
                if (this.position.yellow[number]>39 && this.position.yellow[number]<45) {
                    if (this.fy[to]=='') {
                        this.fy[from]='';
                        this.fy[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                        this.position.yellow[number]=to;
                    }
                }
                
            }

        //////////////////
        if (color=='green') {
            let gFrom=toGlobal('green',from);
            let gTo=toGlobal('green',to);
            
            if (parseInt(this.position.green[number])+parseInt(this.rollNumber)<=40) {
                let spt;
                if (this.globalPosition.st[gTo]==0) {
                    this.globalPosition.st[gFrom]=0;
                    this.globalPosition.st[gTo]='green-'+number;
                    this.position.green[number]=to;
                    this.s[gFrom]='';
                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                }else{
                    spt=this.globalPosition.st[gTo].split('-');
                    if (spt[0]!='green') {
                        if (spt[0]=='yellow') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'yellow',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='green-'+number;
                                    this.position.green[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'red',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='green-'+number;
                                    this.position.green[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                        if (spt[0]=='blue') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'blue',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='green-'+number;
                                    this.position.green[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                    }
                }
                
            }
            if(this.position.green[number]<=40 && parseInt(marbles.position.green[number])+parseInt(marbles.rollNumber)<=44){
                if (this.fg[to]=='') {
                    this.globalPosition.st[gFrom]=0;
                    this.fg[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    this.position.green[number]=to;
                    this.s[gFrom]='';
                } 
            }
            if (this.position.green[number]>39 && this.position.green[number]<45) {
                if (this.fg[to]=='') {
                    this.fg[from]='';
                    this.fg[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    this.position.green[number]=to;
                }
            }
            
        }
        ///////////////
        if (color=='blue') {
            let gFrom=toGlobal('blue',from);
            let gTo=toGlobal('blue',to);
            
            if (parseInt(this.position.blue[number])+parseInt(this.rollNumber)<=40) {
                let spt;
                if (this.globalPosition.st[gTo]==0) {
                    this.globalPosition.st[gFrom]=0;
                    this.globalPosition.st[gTo]='blue-'+number;
                    this.position.blue[number]=to;
                    this.s[gFrom]='';
                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                }else{
                    spt=this.globalPosition.st[gTo].split('-');
                    if (spt[0]!='blue') {
                        if (spt[0]=='yellow') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'yellow',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='blue-'+number;
                                    this.position.blue[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                        if (spt[0]=='green') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'green',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='blue-'+number;
                                    this.position.blue[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                        if (spt[0]=='red') {
                            for(let i=1;i<5;i++){
                                if (spt[1]==i) {
                                    this.goToHome(gTo,'red',i);
                                    this.globalPosition.st[gFrom]=0;
                                    this.globalPosition.st[gTo]='blue-'+number;
                                    this.position.blue[number]=to;
                                    this.s[gFrom]='';
                                    this.s[gTo]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                                }
                            }
                        }
                    }
                }
                
            }
            if(this.position.blue[number]<=40 && parseInt(marbles.position.blue[number])+parseInt(marbles.rollNumber)<=44){
                if (this.fb[to]=='') {
                    this.globalPosition.st[gFrom]=0;
                    this.fb[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    this.position.blue[number]=to;
                    this.s[gFrom]='';
                } 
            }
            if (this.position.blue[number]>39 && this.position.blue[number]<45) {
                if (this.fb[to]=='') {
                    this.fb[from]='';
                    this.fb[to]=`<section class="${color}-m m ${color}-m-${number}" id="${color}-m-${number}"> <i class="mum">${number}</i> </section>`;
                    this.position.blue[number]=to;
                }
            }
            
        }

        },

        //----------------------------------------------------------------
        roll: function(){
            //song
            if (this.song==1) {
                rollSong = new Audio('song/roll.mp3');
                rollSong.play();
            }
            let e = 1 + Math.floor(Math.random() *3);
            let roll;
            if(e==1){
                roll= 1 + Math.floor(Math.random() * 5);
            }
            if(e==2){
                roll= 3 + Math.floor(Math.random() * 4);
            }
            if(e==3){
                roll= 4 + Math.floor(Math.random() * 3);
            }
            this.rollNumber=roll;
            if (this.song==1 && roll==6) {
                rollSong6 = new Audio('song/roll6.mp3');
                rollSong6.play();
            }
            // if (roll==6) {
            //     rollFlag=0;
            // }else{
            //     rollFlag=1;
            // }
            return roll;
        },


        //----------------------------------------------------------------
        cLog: function(){
            console.log('%c{{--------------------------------------------------------------------------------------------------------','background-color:gray;color:red');
            console.log('roll number=',this.rollNumber);
            console.log(
                'st=',this.globalPosition.st[1],this.globalPosition.st[2],this.globalPosition.st[3],this.globalPosition.st[4],this.globalPosition.st[5],this.globalPosition.st[6],this.globalPosition.st[7],this.globalPosition.st[8],this.globalPosition.st[9],this.globalPosition.st[10],
                this.globalPosition.st[11],this.globalPosition.st[12],this.globalPosition.st[13],this.globalPosition.st[14],this.globalPosition.st[15],this.globalPosition.st[16],this.globalPosition.st[17],this.globalPosition.st[18],this.globalPosition.st[19],this.globalPosition.st[20],
                this.globalPosition.st[21],this.globalPosition.st[22],this.globalPosition.st[23],this.globalPosition.st[24],this.globalPosition.st[25],this.globalPosition.st[26],this.globalPosition.st[27],this.globalPosition.st[28],this.globalPosition.st[29],this.globalPosition.st[30],
                this.globalPosition.st[31],this.globalPosition.st[32],this.globalPosition.st[33],this.globalPosition.st[34],this.globalPosition.st[35],this.globalPosition.st[36],this.globalPosition.st[37],this.globalPosition.st[38],this.globalPosition.st[39],this.globalPosition.st[40]
                );
                console.log('red position=',this.position.red[1],this.position.red[2],this.position.red[3],this.position.red[4]);
                console.log('yellow position=',this.position.yellow[1],this.position.yellow[2],this.position.yellow[3],this.position.yellow[4]);
                console.log('green position=',this.position.green[1],this.position.green[2],this.position.green[3],this.position.green[4]);
                console.log('blue position=',this.position.blue[1],this.position.blue[2],this.position.blue[3],this.position.blue[4]);
                console.log('%c--------------------------------------------------------------------------------------------------------}}','background-color:gray;color:red');
        },

        //----------------------------------------------------------------
        ifAllHome: function(color){
            let flag=1;
            if (color=='red') {
                for(let i=1;i<5;i++){
                    if (this.position.red[i]!=0) {
                        flag=0
                    }
                }
            }
            if (color=='yellow') {
                for(let i=1;i<5;i++){
                    if (this.position.yellow[i]!=0) {
                        flag=0
                    }
                }
            }
            if (color=='green') {
                for(let i=1;i<5;i++){
                    if (this.position.green[i]!=0) {
                        flag=0
                    }
                }
            }
            if (color=='blue') {
                for(let i=1;i<5;i++){
                    if (this.position.blue[i]!=0) {
                        flag=0
                    }
                }
            }

            return flag;
        },

        //----------------------------------------------------------------
        cr1: function(event){
            if (this.globalPosition.red.home[1]==1 && this.rollNumber==6) {
                this.goToStart('red',1);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cr').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
                
            }else{
                if (this.globalPosition.red.home[1]==0) {
                    this.moveTo(this.position.red[1],parseInt(marbles.position.red[1])+parseInt(marbles.rollNumber),'red',1);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cr').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cr2: function(event){
            if (this.globalPosition.red.home[2]==1 && this.rollNumber==6) {
                this.goToStart('red',2);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cr').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.red.home[2]==0) {
                    this.moveTo(this.position.red[2],parseInt(marbles.position.red[2])+parseInt(marbles.rollNumber),'red',2);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cr').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cr3: function(event){
            if (this.globalPosition.red.home[3]==1 && this.rollNumber==6) {
                this.goToStart('red',3);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cr').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.red.home[3]==0) {
                    this.moveTo(this.position.red[3],parseInt(marbles.position.red[3])+parseInt(marbles.rollNumber),'red',3);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cr').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cr4: function(event){
            if (this.globalPosition.red.home[4]==1 && this.rollNumber==6) {
                this.goToStart('red',4);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cr').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.red.home[4]==0) {
                    this.moveTo(this.position.red[4],parseInt(marbles.position.red[4])+parseInt(marbles.rollNumber),'red',4);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cr').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },


        cy1: function(event){
            if (this.globalPosition.yellow.home[1]==1 && this.rollNumber==6) {
                this.goToStart('yellow',1);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cy').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.yellow.home[1]==0) {
                    this.moveTo(this.position.yellow[1],parseInt(marbles.position.yellow[1])+parseInt(marbles.rollNumber),'yellow',1);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cy').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cy2: function(event){
            if (this.globalPosition.yellow.home[2]==1 && this.rollNumber==6) {
                this.goToStart('yellow',2);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cy').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.yellow.home[2]==0) {
                    this.moveTo(this.position.yellow[2],parseInt(marbles.position.yellow[2])+parseInt(marbles.rollNumber),'yellow',2);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cy').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cy3: function(event){
            if (this.globalPosition.yellow.home[3]==1 && this.rollNumber==6) {
                this.goToStart('yellow',3);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cy').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.yellow.home[3]==0) {
                    this.moveTo(this.position.yellow[3],parseInt(marbles.position.yellow[3])+parseInt(marbles.rollNumber),'yellow',3);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cy').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cy4: function(event){
            if (this.globalPosition.yellow.home[4]==1 && this.rollNumber==6) {
                this.goToStart('yellow',4);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cy').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.yellow.home[4]==0) {
                    this.moveTo(this.position.yellow[4],parseInt(marbles.position.yellow[4])+parseInt(marbles.rollNumber),'yellow',4);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cy').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },


        cg1: function(event){
            if (this.globalPosition.green.home[1]==1 && this.rollNumber==6) {
                this.goToStart('green',1);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cg').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.green.home[1]==0) {
                    this.moveTo(this.position.green[1],parseInt(marbles.position.green[1])+parseInt(marbles.rollNumber),'green',1);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cg').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cg2: function(event){
            if (this.globalPosition.green.home[2]==1 && this.rollNumber==6) {
                this.goToStart('green',2);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cg').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.green.home[2]==0) {
                    this.moveTo(this.position.green[2],parseInt(marbles.position.green[2])+parseInt(marbles.rollNumber),'green',2);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cg').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cg3: function(event){
            if (this.globalPosition.green.home[3]==1 && this.rollNumber==6) {
                this.goToStart('green',3);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cg').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.green.home[3]==0) {
                    this.moveTo(this.position.green[3],parseInt(marbles.position.green[3])+parseInt(marbles.rollNumber),'green',3);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cg').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        ///
        cg4: function(event){
            if (this.globalPosition.green.home[4]==1 && this.rollNumber==6) {
                this.goToStart('green',4);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cg').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.green.home[4]==0) {
                    this.moveTo(this.position.green[4],parseInt(marbles.position.green[4])+parseInt(marbles.rollNumber),'green',4);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cg').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },


        cb1: function(event){
                if (this.globalPosition.blue.home[1]==1 && this.rollNumber==6) {
                    this.goToStart('blue',1);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cb').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }else{
                    if (this.globalPosition.blue.home[1]==0) {
                        this.moveTo(this.position.blue[1],parseInt(marbles.position.blue[1])+parseInt(marbles.rollNumber),'blue',1);
                        this.cLog();
                        if (this.rollNumber!=6) {
                            $('.cb').hide(20);
                            rollFlag=1;
                            active=1;
                            this.rollNumber=0;
                            howMarbles();
                        }else{
                            rollFlag=0;
                            active=1;
                            this.rollNumber=0;
                        }
                    }
                }
                score();
        },
        cb2: function(event){
            if (this.globalPosition.blue.home[2]==1 && this.rollNumber==6) {
                this.goToStart('blue',2);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cb').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.blue.home[2]==0) {
                    this.moveTo(this.position.blue[2],parseInt(marbles.position.blue[2])+parseInt(marbles.rollNumber),'blue',2);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cb').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        cb3: function(event){
            if (this.globalPosition.blue.home[3]==1 && this.rollNumber==6) {
                this.goToStart('blue',3);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cb').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.blue.home[3]==0) {
                    this.moveTo(this.position.blue[3],parseInt(marbles.position.blue[3])+parseInt(marbles.rollNumber),'blue',3);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cb').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        },
        cb4: function(event){
            if (this.globalPosition.blue.home[4]==1 && this.rollNumber==6) {
                this.goToStart('blue',4);
                this.cLog();
                if (this.rollNumber!=6) {
                    $('.cb').hide(20);
                    rollFlag=1;
                    active=1;
                    this.rollNumber=0;
                    howMarbles();
                }else{
                    rollFlag=0;
                    active=1;
                    this.rollNumber=0;
                }
            }else{
                if (this.globalPosition.blue.home[4]==0) {
                    this.moveTo(this.position.blue[4],parseInt(marbles.position.blue[4])+parseInt(marbles.rollNumber),'blue',4);
                    this.cLog();
                    if (this.rollNumber!=6) {
                        $('.cb').hide(20);
                        rollFlag=1;
                        active=1;
                        this.rollNumber=0;
                        howMarbles();
                    }else{
                        rollFlag=0;
                        active=1;
                        this.rollNumber=0;
                    }
                }
            }
            score();
        }

    }
});




if (redStatus>1) {
    nob.push('red');
    marbles.activeMarbles('red');

}
if(yellowStatus>1){
    nob.push('yellow');
    marbles.activeMarbles('yellow');
}
if (greenStatus>1) {
    nob.push('green');
    marbles.activeMarbles('green');
}
if (blueStatus>1) {
    nob.push('blue');
    marbles.activeMarbles('blue');
}


var nobLenght=nob.length;

var nobFlag=0
function howMarbles(){
    if (nobFlag>nobLenght-1) {
        nobFlag=0;
    }
    if (nob[nobFlag]=='red') {
        $('.cr').show(30);
        $('#s').css({'background-color':'red'});
    }
    if (nob[nobFlag]=='yellow') {
        $('.cy').show(30);
        $('#s').css({'background-color':'yellow'});
    }
    if (nob[nobFlag]=='green') {
        $('.cg').show(30);
        $('#s').css({'background-color':'green'});
    }
    if (nob[nobFlag]=='blue') {
        $('.cb').show(30);
        $('#s').css({'background-color':'blue'});
    }
    
    if (rollFlag==1) {
        nobFlag++;
    }
}
howMarbles();


$('#next').click(function (e) { 
    e.preventDefault();
    active=1;
    $('.btn-sel').hide();
    rollFlag=1;
    howMarbles();
    if (marbles.song==1) {
        let nextSong=new Audio('song/next.mp3');
        nextSong.play();
    }
});


$('.song').click(function (e) { 
    e.preventDefault();
    if (marbles.song==1) {
        $('.song').removeClass('fa-volume-up');
        $('.song').addClass('fa-volume-mute'); 
        marbles.song=0; 
        document.getElementById('bgsong').pause()
    }else{
        $('.song').removeClass('fa-volume-mute');
        $('.song').addClass('fa-volume-up'); 
        marbles.song=1; 
        document.getElementById('bgsong').play();
    }
});

var active=1;
$('#roll').click(function(){
    if (marbles.song==1) {
        document.getElementById('bgsong').play();
        document.getElementById('bgsong').volume=0.2;
    }
    let x;  
    if(active==1){
    x=marbles.roll();
    $('#roll').attr('src',`img/t${x}.png`);
    active=0;
    $('.roll').addClass("animate__animated animate__wobble");
    setTimeout(function(){
        // $('#roll').hide(50);
        $('.roll').removeClass("animate__animated animate__wobble");
    },500);

    if (marbles.ifAllHome(nob[nobFlag-1])==1 && marbles.rollNumber!=6) {
        setTimeout(function(){
            $('#next').trigger('click');
        },1000);
    }
    }
});

var enflr=0;
var enfly=0;
var enflg=0;
var enflb=0;

function score(){
    let red=parseInt(marbles.position.red[1])+parseInt(marbles.position.red[2])+parseInt(marbles.position.red[3])+parseInt(marbles.position.red[4]);
    let yellow=parseInt(marbles.position.yellow[1])+parseInt(marbles.position.yellow[2])+parseInt(marbles.position.yellow[3])+parseInt(marbles.position.yellow[4]);
    let green=parseInt(marbles.position.green[1])+parseInt(marbles.position.green[2])+parseInt(marbles.position.green[3])+parseInt(marbles.position.green[4]);
    let blue=parseInt(marbles.position.blue[1])+parseInt(marbles.position.blue[2])+parseInt(marbles.position.blue[3])+parseInt(marbles.position.blue[4]);

    $('.sc-red').css({'transform':'scaleX('+red*0.76+')'});
    $('.sc-yellow').css({'transform':'scaleX('+yellow*0.76+')'});
    $('.sc-green').css({'transform':'scaleX('+green*0.76+')'});
    $('.sc-blue').css({'transform':'scaleX('+blue*0.76+')'});

    if (red>=170 && enflr==0) {
        enflr=1;
        $('.end-game').show(30);
        $('.end-game .content').html('');
        winer.push('قرمز');
        $('.end-game .content').html('<h2>قرمز برنده شد</h2>');  
        for(let i=0;i<winer.length;i++){
            $('.winer-'+String(i+1)).html(winer[i]); 
        }
        $('.btn-endgame').click(function (e) { 
            e.preventDefault();
            $('.end-game').hide(30);
        });
    }
    if (yellow>=170 && enfly==0) {
        enfly=1;
        $('.end-game').show(30);
        $('.end-game .content').html('');
        winer.push('زرد');
        $('.end-game .content').html('<h2>زرد برنده شد</h2>');
        for(let i=0;i<winer.length;i++){
            $('.winer-'+String(i+1)).html(winer[i]); 
        }
        $('.btn-endgame').click(function (e) { 
            e.preventDefault();
            $('.end-game').hide(30);
        });
    }
    if (green>=170 && enflg==0) {
        enflg=1;
        $('.end-game').show(30);
        $('.end-game .content').html('');
        winer.push('سبز');
        $('.end-game .content').html('<h2>سبز برنده شد</h2>');
        for(let i=0;i<winer.length;i++){
            $('.winer-'+String(i+1)).html(winer[i]); 
        }
        $('.btn-endgame').click(function (e) { 
            e.preventDefault();
            $('.end-game').hide(30);
        });
    }
    if (blue>=170 && enflb==0) {
        enflb=1;
        $('.end-game').show(30);
        $('.end-game .content').html('');
        winer.push('آبی');
        $('.end-game .content').html('<h2>آبی برنده شد</h2>');
        for(let i=0;i<winer.length;i++){
            $('.winer-'+String(i+1)).html(winer[i]); 
        }
        $('.btn-endgame').click(function (e) { 
            e.preventDefault();
            $('.end-game').hide(30);
        });
    }
}