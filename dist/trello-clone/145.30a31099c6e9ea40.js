"use strict";(self.webpackChunkTrello_Clone=self.webpackChunkTrello_Clone||[]).push([[145],{1145:(j,x,s)=>{s.r(x),s.d(x,{BoardsModule:()=>W});var p=s(6895),m=s(7799),c=s(4006),d=s(1206),v=s(9471),_=s(590),P=s(3900),g=s(4241),n=s(4650),C=s(5004),f=s(9325),b=s(6202),k=s(4451),h=s(9549),O=s(284),M=s(9101),T=s(4883);const B=["columnNameInput"];function I(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"p",19),n.NdJ("click",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.updateColumnName(r))}),n._uU(1),n.qZA()}if(2&o){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.name," ")}}function N(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"div",20),n.NdJ("mousedown",function(r){return r.stopPropagation()}),n.TgZ(1,"input",21,22),n.NdJ("ngModelChange",function(r){n.CHM(t);const i=n.oxw().$implicit;return n.KtG(i.name=r)})("keydown.enter",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.updateColumnName(r))})("keydown.escape",function(){n.CHM(t);const r=n.oxw(2);return n.KtG(r.isEditable=!1)}),n.qZA(),n.TgZ(3,"button",23),n.NdJ("click",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.updateColumnName(r))}),n._uU(4," + "),n.qZA()()}if(2&o){const t=n.oxw().$implicit;n.xp6(1),n.Q6J("ngModel",t.name)}}function Z(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"button",24),n.NdJ("click",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.deleteColumn(r))}),n._uU(1,"X"),n.qZA()}}function y(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"div",25)(1,"a",26),n.NdJ("click",function(){const i=n.CHM(t).index,l=n.oxw().index,u=n.oxw();return n.KtG(u.openTaskWindow(i,l))}),n._uU(2),n.TgZ(3,"button",27),n.NdJ("click",function(r){const l=n.CHM(t).index,u=n.oxw().index;return n.oxw().deleteTask(l,u),n.KtG(r.stopPropagation())}),n._uU(4,"X"),n.qZA()()()}if(2&o){const t=a.$implicit;n.xp6(2),n.hij("",t.name," ")}}function F(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"form",28),n.NdJ("ngSubmit",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.addNewTask(r))}),n._UZ(1,"input",29),n.TgZ(2,"button",30),n._uU(3," + "),n.qZA()()}if(2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("formControl",t.taskName),n.xp6(1),n.Q6J("disabled",t.taskName.invalid)}}function S(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"a",31),n.NdJ("click",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.openTaskForm(r))}),n.TgZ(1,"span"),n._uU(2,"+"),n.qZA(),n._uU(3,"\xa0"),n.TgZ(4,"span"),n._uU(5,"Add new task"),n.qZA()()}}function A(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"a",31,18),n.NdJ("click",function(){n.CHM(t);const r=n.oxw().index,i=n.oxw();return n.KtG(i.openTaskForm(r))}),n._uU(2,"\xa0\xa0"),n.TgZ(3,"span"),n._uU(4,"Cancel adding new task"),n.qZA()()}}function J(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),n.YNc(4,I,2,1,"p",10),n.YNc(5,N,5,1,"div",11),n.YNc(6,Z,2,0,"button",12),n.qZA(),n._UZ(7,"hr"),n.TgZ(8,"div",13),n.NdJ("cdkDropListDropped",function(r){const l=n.CHM(t).index,u=n.oxw();return n.KtG(u.dropTask(r,l))}),n.YNc(9,y,5,1,"div",14),n.qZA(),n.YNc(10,F,4,2,"form",15),n.TgZ(11,"div",16),n.YNc(12,S,6,0,"a",17),n.YNc(13,A,5,0,"ng-template",null,18,n.W1O),n.qZA()()()()}if(2&o){const t=a.$implicit,e=a.index,r=n.MAs(14),i=n.oxw();n.xp6(4),n.Q6J("ngIf",!i.isEditable||e!==i.viewColumnNameFormIndex),n.xp6(1),n.Q6J("ngIf",i.isEditable&&e===i.viewColumnNameFormIndex),n.xp6(1),n.Q6J("ngIf",!i.isEditable),n.xp6(2),n.Q6J("cdkDropListData",t.tasks),n.xp6(1),n.Q6J("ngForOf",null==t?null:t.tasks),n.xp6(1),n.Q6J("ngIf",i.addNewTaskToggle&&e===i.viewTaskFormIndex),n.xp6(2),n.Q6J("ngIf",!i.addNewTaskToggle||e!==i.viewTaskFormIndex)("ngIfElse",r)}}function U(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"div",32)(1,"a",31),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.addingColumnWindowToggle())}),n.TgZ(2,"span"),n._uU(3,"+"),n.qZA(),n._uU(4,"\xa0"),n.TgZ(5,"span"),n._uU(6,"Add new column"),n.qZA()()()}}function D(o,a){1&o&&(n.TgZ(0,"mat-error"),n._uU(1," Name is "),n.TgZ(2,"span"),n._uU(3,"required"),n.qZA()())}function E(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"form",33),n.NdJ("ngSubmit",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.addNewColumn())}),n.TgZ(1,"mat-form-field",34)(2,"mat-label"),n._uU(3,"Column name"),n.qZA(),n._UZ(4,"input",35),n.YNc(5,D,4,0,"mat-error",36),n.qZA(),n.TgZ(6,"div",37)(7,"button",38),n._uU(8," Create "),n.qZA(),n.TgZ(9,"button",39),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.addingColumnWindowToggle())}),n._uU(10," Cancel "),n.qZA()()()}if(2&o){const t=n.oxw();n.xp6(4),n.Q6J("formControl",t.columnName),n.xp6(1),n.Q6J("ngIf",t.columnName.hasError("required")),n.xp6(2),n.Q6J("disabled",t.columnName.invalid)}}let Y=(()=>{class o{constructor(t,e,r,i,l){this.route=t,this.dialog=e,this.boardFirebaseService=r,this.currentUserService=i,this.currentDataService=l,this.addNewTaskToggle=!1,this.addNewColumnToggle=!1,this.isEditable=!1,this.columnName=new c.NI("",[c.kI.required]),this.taskName=new c.NI("",[c.kI.required])}ngOnInit(){this.route.params.pipe((0,_.P)()).subscribe(t=>this.boardId=t.id),this.currentUserService.currentUser$.pipe((0,_.P)(),(0,P.w)(t=>(this.uid=t.uid,this.boardFirebaseService.getPrivateBoard(this.uid,this.boardId).pipe((0,_.P)())))).subscribe(t=>{t?(this.currentBoardFromServer=t,this.currentBoard=this.currentBoardFromServer):console.log("Something goes wrong")})}addingColumnWindowToggle(){this.addNewColumnToggle=!this.addNewColumnToggle,this.columnName.reset()}addNewColumn(){this.currentBoard.columns?.push({columnId:this.currentBoard.columns.length,name:this.columnName.value,tasks:[]}),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns}),this.addingColumnWindowToggle()}dropColumn(t){t.isPointerOverContainer&&this.openTaskForm(),(0,d.bA)(this.currentBoard.columns,t.previousIndex,t.currentIndex),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns})}dropTask(t,e){t.previousContainer===t.container?(0,d.bA)(this.currentBoard.columns?.[e].tasks,t.previousIndex,t.currentIndex):(0,d.EA)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,this.currentBoard)}openTaskForm(t){this.addNewTaskToggle=!this.addNewTaskToggle,this.viewTaskFormIndex=t,this.taskName.reset()}addNewTask(t){this.currentBoard.columns?.[t].tasks?.push({taskId:this.currentBoard.columns?.[t].tasks?.length,name:this.taskName.value,text:""}),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns}),this.addNewTaskToggle=!this.addNewTaskToggle,this.taskName.reset()}openTaskWindow(t,e){this.currentDataService.changeBehaviorSubjectValue(this.currentDataService._currentBoard,this.currentBoard),this.currentDataService.changeBehaviorSubjectValue(this.currentDataService._currentColumn,this.currentBoard.columns?.[e]),this.currentDataService.changeBehaviorSubjectValue(this.currentDataService._currentTask,this.currentBoard.columns?.[e].tasks?.[t]),this.dialog.open(v.H,{width:"95vw",height:"90vh",maxWidth:"95vw",autoFocus:!1})}updateColumnName(t){this.isEditable=!this.isEditable,this.viewColumnNameFormIndex=t,this.isEditable&&setTimeout(()=>this._inputElement.nativeElement.focus(),25),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns})}deleteColumn(t){this.dialog.open(g.z,{data:{text:"Are you sure you want to delete this list?",subtext:"All tasks inside will be deleted to"}}).afterClosed().pipe((0,_.P)()).subscribe(e=>{e&&(this.currentBoard.columns?.splice(t,1),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns}))})}deleteTask(t,e){this.dialog.open(g.z,{data:{text:"Are you sure you want to delete this task?",subtext:"All information inside will be deleted"}}).afterClosed().pipe((0,_.P)()).subscribe(r=>{r&&(this.currentBoard.columns?.[e].tasks?.splice(t,1),this.boardFirebaseService.updatePrivateBoard(this.uid,this.boardId,{columns:this.currentBoard.columns}))})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(m.gz),n.Y36(C.uw),n.Y36(f.U),n.Y36(b.S),n.Y36(k.R))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-board"]],viewQuery:function(t,e){if(1&t&&n.Gf(B,5),2&t){let r;n.iGM(r=n.CRH())&&(e._inputElement=r.first)}},decls:7,vars:3,consts:[["cdkScrollable","","cdkDropList","","cdkDropListOrientation","horizontal",1,"columns",3,"cdkDropListDropped"],["cdkDropListGroup",""],["class","columns__column",4,"ngFor","ngForOf"],[1,"columns__add-new"],["class","columns__add-new__column-btn",4,"ngIf","ngIfElse"],["form",""],[1,"columns__column"],["cdkDrag","",1,"list-wrapper"],[1,"list-wrapper__list"],[1,"list-wrapper__list__header","d-flex","flex-row"],["class","title",3,"click",4,"ngIf"],["class","input-group",3,"mousedown",4,"ngIf"],["mat-raised-button","","color","warn","class","delete-button ms-auto",3,"click",4,"ngIf"],["cdkDropList","",1,"task-placeholder",3,"cdkDropListData","cdkDropListDropped"],["class","list-wrapper__list__task","cdkDrag","",4,"ngFor","ngForOf"],["class","list-wrapper__list__form",3,"ngSubmit",4,"ngIf"],[1,"list-wrapper__task-composer"],[3,"click",4,"ngIf","ngIfElse"],["cancel",""],[1,"title",3,"click"],[1,"input-group",3,"mousedown"],["type","text","maxlength","15",1,"form-control",3,"ngModel","ngModelChange","keydown.enter","keydown.escape"],["columnNameInput",""],["mat-raised-button","","color","primary",1,"add-button","rounded",3,"click"],["mat-raised-button","","color","warn",1,"delete-button","ms-auto",3,"click"],["cdkDrag","",1,"list-wrapper__list__task"],[1,"position-relative",3,"click"],["mat-raised-button","","color","warn",3,"click"],[1,"list-wrapper__list__form",3,"ngSubmit"],["placeholder","name","maxlength","15",3,"formControl"],["mat-button","","color","primary","type","submit",3,"disabled"],[3,"click"],[1,"columns__add-new__column-btn"],[1,"columns__add-new__column-form",3,"ngSubmit"],["appearance","outline"],["matInput","","type","text","maxlength","15",3,"formControl"],[4,"ngIf"],[1,"columns__add-new__column-form__buttons"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-raised-button","","type","button",3,"click"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0),n.NdJ("cdkDropListDropped",function(i){return e.dropColumn(i)}),n.TgZ(1,"div",1),n.YNc(2,J,15,8,"div",2),n.TgZ(3,"div",3),n.YNc(4,U,7,0,"div",4),n.YNc(5,E,11,3,"ng-template",null,5,n.W1O),n.qZA()()()),2&t){const r=n.MAs(6);n.xp6(2),n.Q6J("ngForOf",null==e.currentBoard?null:e.currentBoard.columns),n.xp6(2),n.Q6J("ngIf",!e.addNewColumnToggle)("ngIfElse",r)}},dependencies:[p.sg,p.O5,c._Y,c.Fj,c.JJ,c.JL,c.nD,c.On,c.F,c.oH,h.TO,h.KE,h.hX,O.Nt,M.lW,T.PQ,d.Wj,d.Fd,d.Zt],styles:["@keyframes fadeIn{to{opacity:1}}.columns[_ngcontent-%COMP%]{height:87vh;overflow-x:auto;white-space:nowrap;padding:1em .5em 0}.columns[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{min-width:32px}.columns[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{opacity:0}.columns[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]:hover   .delete-button[_ngcontent-%COMP%]{animation:fadeIn 1s forwards}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]{display:inline-block;margin:0 4px;vertical-align:top;height:100%;border-radius:3px}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%]{background-color:#ebecf0;border-radius:3px}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;cursor:pointer;color:#5e6c84;flex:1 0 auto;padding:6px 16px}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]   .columns__add-new__column-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#5e6c841a;border-radius:3px}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%]   .columns__add-new__column-form[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]   .columns__add-new__column-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:.5rem;border:solid rgba(9,30,66,.0392156863) 2px;border-radius:3px;box-shadow:8px 10px 13px 2px #091e420a}.columns[_ngcontent-%COMP%]   .columns__column[_ngcontent-%COMP%]   .columns__add-new__column-form[_ngcontent-%COMP%]   .columns__add-new__column-form__buttons[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]   .columns__add-new__column-form[_ngcontent-%COMP%]   .columns__add-new__column-form__buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1em}.columns[_ngcontent-%COMP%]   .columns__add-new[_ngcontent-%COMP%]{margin:0 12px 0 4px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]{width:272px;display:flex;flex-direction:column;background-color:#ebecf0;max-height:100%;border-radius:3px;position:relative}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:0 0 5px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .task-placeholder[_ngcontent-%COMP%]{min-height:1em}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]{flex:0 0 auto;min-height:20px;padding:2px 8px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;padding:6px 8px;margin:0}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#000;background-color:#fff;border-radius:3px;box-shadow:0 1px #091e4240;text-decoration:none;cursor:pointer;display:block;padding:4px 8px;margin:0 8px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#5e6c841a;border-radius:3px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:4px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:30px;padding:0}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]){color:#fff;background-color:#3f51b5}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover{background-color:#3f51b5b3}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;line-height:inherit;padding:0;min-width:24px;opacity:0}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__list__task[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{animation:fadeIn 1s forwards}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__task-composer[_ngcontent-%COMP%]{padding:0 8px 10px}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__task-composer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#5e6c84;flex:1 0 auto;cursor:pointer;padding:4px 8px;margin:2px 8px;text-decoration:none}.columns[_ngcontent-%COMP%]   .list-wrapper__list[_ngcontent-%COMP%]   .list-wrapper__task-composer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#5e6c841a;border-radius:3px}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%], .cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#5e6c841a}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:#5e6c841a;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-preview[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 990px){.columns[_ngcontent-%COMP%]{height:72vh}}@media screen and (max-width: 300px){.list-wrapper__list[_ngcontent-%COMP%]{width:230px!important}}"]}),o})();var H=s(3159),w=s(3336);const Q=function(o,a){return[o,a]};function G(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"li")(1,"div",6)(2,"a",7),n._uU(3),n.TgZ(4,"button",8),n.NdJ("click",function(r){const l=n.CHM(t).index;return n.oxw().deleteBoard(l),r.stopPropagation(),n.KtG(r.preventDefault())}),n.TgZ(5,"mat-icon",9),n._uU(6,"close"),n.qZA()()()()()}if(2&o){const t=a.$implicit;n.xp6(2),n.Q6J("routerLink",n.WLB(2,Q,t.name,t.boardId)),n.xp6(1),n.hij("",t.name," ")}}const K=[{path:"",component:(()=>{class o{constructor(t,e,r){this.boardFirebaseService=t,this.currentUserService=e,this.dialog=r}ngOnInit(){this.subscription=this.currentUserService.currentUser$.pipe((0,P.w)(t=>(t&&(this.uid=t.uid),this.boardFirebaseService.getSortedPrivateBoards(this.uid,"boardId")))).subscribe(t=>{this.boards=t})}openBoardModal(){this.dialog.open(H.Z,{width:"300px",data:this.boards}).afterClosed().pipe((0,_.P)()).subscribe(e=>{e&&this.addBoard(e={boardId:this.boards.length>0?+this.boards[this.boards.length-1].boardId+1:1,ownerId:this.uid,isPublic:!1,name:e,columns:[],invitedUsers:[]})})}addBoard(t){this.boardFirebaseService.setPrivateBoard(this.uid,this.boards.length>0?+this.boards[this.boards.length-1].boardId+1:1,t)}deleteBoard(t){this.dialog.open(g.z,{data:{text:"Are you sure you want to delete this board?",subtext:"All columns and tasks inside will be deleted"}}).afterClosed().pipe((0,_.P)()).subscribe(e=>{e?this.boardFirebaseService.deletePrivateBoard(this.uid,this.boards[t].boardId):console.log("deleting cancelled")})}ngOnDestroy(){this.subscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(f.U),n.Y36(b.S),n.Y36(C.uw))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-boards"]],decls:10,vars:1,consts:[[1,"main-container"],[1,"list-container"],[1,"boards-list"],[4,"ngFor","ngForOf"],[1,"board-tile","create-tile"],[3,"click"],[1,"board-tile"],[3,"routerLink"],["mat-button","",1,"close-button",3,"click"],[1,"close-icon"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"h3"),n._uU(2,"Your Workspaces"),n.qZA(),n.TgZ(3,"div",1)(4,"ul",2),n.YNc(5,G,7,5,"li",3),n.TgZ(6,"li")(7,"div",4)(8,"a",5),n.NdJ("click",function(){return e.openBoardModal()}),n._uU(9,"Create new board"),n.qZA()()()()()()),2&t&&(n.xp6(5),n.Q6J("ngForOf",e.boards))},dependencies:[p.sg,m.yS,M.lW,w.Hw],styles:["@keyframes fadeIn{to{opacity:1}}.main-container[_ngcontent-%COMP%]{margin:2vw 2vw 0vw}.main-container[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]{margin:0 auto;max-width:1000px}.main-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#979292;text-align:center}a[_ngcontent-%COMP%]{display:block;height:100%;font-weight:500;text-decoration:none;color:#fff}.boards-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,max-content));grid-gap:15px;padding:initial;justify-content:center;list-style:none;margin:0;padding:0}.board-tile[_ngcontent-%COMP%]{background-image:url(oriental-tiles.e8b6d38a21be6291.png);background-size:cover;list-style-type:none;padding:5px;width:190px;height:80px;color:#fff;text-decoration:none;border-radius:3px;cursor:pointer;transition:transform .5s}.board-tile[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{height:24px;position:absolute;right:7px;padding:0;min-width:auto;opacity:0}.board-tile[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{vertical-align:inherit!important}.board-tile[_ngcontent-%COMP%]:hover{background-color:#00000026;transform:rotate(2deg)}.board-tile[_ngcontent-%COMP%]:hover   .close-button[_ngcontent-%COMP%]{animation:fadeIn 1s forwards}.create-tile[_ngcontent-%COMP%]{background-image:none;color:#172b4d;background-color:#091e420a}.create-tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;line-height:70px}"]}),o})()},{path:":boardName/:id",component:Y}];let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.Bz.forChild(K),m.Bz]}),o})(),W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,L,c.u5,C.Is,c.UX,O.c,M.ot,w.Ps,d._t]}),o})()}}]);