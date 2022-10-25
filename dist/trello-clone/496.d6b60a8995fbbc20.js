"use strict";(self.webpackChunkTrello_Clone=self.webpackChunkTrello_Clone||[]).push([[496],{5496:(U,v,r)=>{r.r(v),r.d(v,{ProfileModule:()=>j});var p=r(6895),a=r(7799),e=r(4650),C=r(6202),c=r(3546),g=r(9101),d=r(3683);let P=(()=>{class n{constructor(t,o){this.currentUserService=t,this.router=o}ngOnInit(){this.user=this.currentUserService.currentUser$}toEdit(){this.router.navigateByUrl("profile/edit")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.S),e.Y36(a.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-about"]],decls:21,vars:9,consts:[[1,"container"],["color","primary",1,"bg-dark"],[1,"user-info"],["align","end"],["routerLink","edit","mat-button",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-toolbar",1),e._uU(3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",2)(6,"article")(7,"h2"),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.ALo(11,"async"),e.qZA()(),e.TgZ(12,"article")(13,"h2"),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.ALo(17,"async"),e.qZA()()(),e.TgZ(18,"mat-card-actions",3)(19,"button",4),e._uU(20,"Edit"),e.qZA()()()()),2&t){let u,m,s;e.xp6(3),e.hij(" Hello ",null==(u=e.lcZ(4,3,o.user))?null:u.username," "),e.xp6(7),e.Oqu(null==(m=e.lcZ(11,5,o.user))?null:m.username),e.xp6(6),e.Oqu(null==(s=e.lcZ(17,7,o.user))?null:s.email)}},dependencies:[a.rH,c.a8,c.hq,g.lW,d.Ye,p.Ov],styles:[".container[_ngcontent-%COMP%]{margin-top:10%;max-width:700px}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:1.34em}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1em;color:gray;margin-bottom:0}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border:1px solid #808080;padding:.3vw;margin-bottom:5px}.container[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}"]}),n})();var i=r(4006),Z=r(590),M=r(9646),O=r(4004),b=r(8083),A=r(4241),_=r(5861),f=r(7158),I=r(8937),x=r(3164);let F=(()=>{class n{constructor(t){this.userFirebaseService=t}changeProfile(t,o){var u=this;return(0,_.Z)(function*(){const m=o,s=(0,f.v0)().currentUser,q=I.w9.credential(s?.email,o.password);try{yield(0,f.aF)(s,q),o.username!==t.get("username")?.value&&(yield(0,f.ck)(s,{displayName:t.get("username")?.value,photoURL:""}).then(()=>{m.username=t.get("username")?.value})),o.email!==t.get("email")?.value&&(yield(0,f.s)(s,t.get("email")?.value).then(()=>{m.email=t.get("email")?.value}).catch(y=>{})),o.password!==t.get("password")?.value&&(yield(0,f.gQ)(s,t.get("password")?.value).then(()=>{m.password=t.get("password")?.value}).catch(y=>{})),u.userFirebaseService.updateUserById(o.uid,m)}catch(y){alert(y)}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var N=r(7247),S=r(5004),h=r(9549),T=r(284),E=r(3336),w=r(5663);function Y(n,l){1&n&&e._UZ(0,"app-load-spinner")}function J(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1,"Username already exist"),e.qZA())}function L(n,l){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.YNc(2,J,2,0,"span",0),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("",t.getNameErrorMessage("username")," "),e.xp6(1),e.Q6J("ngIf",null==t.profileForm.controls.username.errors?null:t.profileForm.controls.username.errors.usernameExists)}}function Q(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1,"Email already exist"),e.qZA())}function W(n,l){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.YNc(2,Q,2,0,"span",0),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("",t.getNameErrorMessage("email")," "),e.xp6(1),e.Q6J("ngIf",null==t.profileForm.controls.email.errors?null:t.profileForm.controls.email.errors.emailExist)}}function B(n,l){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.getNameErrorMessage("password"))}}const H=[{path:"",component:P},{path:"edit",component:(()=>{class n{constructor(t,o,u,m,s){this.changeProfileService=t,this.currentUserService=o,this.asyncValidatorService=u,this.userFirebaseService=m,this.dialog=s,this.isLoading=!1,this.isPasswordHidden=!0,this.profileForm=new i.cw({username:new i.NI(null,[i.kI.required,i.kI.minLength(3),i.kI.maxLength(12)],[this.userNameValidator()]),email:new i.NI(null,[i.kI.required,i.kI.email],[this.emailValidator()]),password:new i.NI(null,[i.kI.required,b.y])})}ngOnInit(){this.currentUserService.currentUser$.pipe((0,Z.P)()).subscribe(t=>{this.user=t,this.profileForm.patchValue(t)})}getNameErrorMessage(t){return this.profileForm.hasError("required",t)?"Required field":this.profileForm.hasError("email",t)?"Not a valid email":this.profileForm.hasError("minlength",t)?"Minimul length is 3 characters":this.profileForm.hasError("maxlength",t)?"Maximum length is 12 characters":this.profileForm.hasError("pattern",t)?"The password must contain minimum 6 character, max 12 character, at least on letter and one number":""}onSubmit(){this.dialog.open(A.z,{data:{text:"Are you really need to change your data?",subtext:""}}).afterClosed().pipe((0,Z.P)()).subscribe(t=>{t&&(this.isLoading=!0,this.changeProfileService.changeProfile(this.profileForm,this.user).then(()=>this.isLoading=!1))})}emailValidator(){return t=>t.value===this.user.email?(0,M.of)(null):this.userFirebaseService.getUserWhere("username","==",t.value).pipe((0,Z.P)(),(0,O.U)(o=>o.length?{emailExists:!0}:null))}userNameValidator(){return t=>t.value===this.user.username?(0,M.of)(null):this.userFirebaseService.getUserWhere("username","==",t.value).pipe((0,Z.P)(),(0,O.U)(o=>o.length?{usernameExists:!0}:null))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(F),e.Y36(C.S),e.Y36(N.n),e.Y36(x.e),e.Y36(S.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit"]],decls:26,vars:8,consts:[[4,"ngIf"],[1,"container"],["color","primary",1,"bg-dark"],[1,"user-info",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","username","type","username"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,o){if(1&t&&(e.YNc(0,Y,1,0,"app-load-spinner",0),e.TgZ(1,"div",1)(2,"mat-card")(3,"mat-toolbar",2),e._uU(4,"Edit Profile"),e.qZA(),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Username"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,L,3,2,"mat-error",0),e.qZA(),e.TgZ(11,"mat-form-field",4)(12,"mat-label"),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",6),e.YNc(15,W,3,2,"mat-error",0),e.qZA(),e.TgZ(16,"mat-form-field",4)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",7),e.YNc(20,B,2,1,"mat-error",0),e.TgZ(21,"button",8),e.NdJ("click",function(){return o.isPasswordHidden=!o.isPasswordHidden}),e.TgZ(22,"mat-icon"),e._uU(23),e.qZA()()(),e.TgZ(24,"button",9),e._uU(25," Change "),e.qZA()()()()),2&t){let u,m,s;e.Q6J("ngIf",o.isLoading),e.xp6(5),e.Q6J("formGroup",o.profileForm),e.xp6(5),e.Q6J("ngIf",(null==(u=o.profileForm.get("username"))?null:u.invalid)&&(null==(u=o.profileForm.get("username"))?null:u.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.profileForm.get("email"))?null:m.invalid)&&(null==(m=o.profileForm.get("email"))?null:m.touched)),e.xp6(4),e.Q6J("type",o.isPasswordHidden?"password":"text"),e.xp6(1),e.Q6J("ngIf",(null==(s=o.profileForm.get("password"))?null:s.invalid)&&(null==(s=o.profileForm.get("password"))?null:s.touched)),e.xp6(3),e.hij(" ",o.isPasswordHidden?"visibility_off":"visibility"," "),e.xp6(1),e.Q6J("disabled",o.profileForm.invalid||o.profileForm.get("username").value===o.user.username&&o.profileForm.get("email").value===o.user.email&&o.profileForm.get("password").value===o.user.password)}},dependencies:[p.O5,c.a8,g.lW,d.Ye,h.TO,h.KE,h.hX,h.R9,T.Nt,E.Hw,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,w.c],styles:[".container[_ngcontent-%COMP%]{margin-top:10%;max-width:700px}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:1.34em}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1em;color:gray;margin-bottom:0}.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border:1px solid #808080;padding:.3vw;margin-bottom:5px}.container[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{border-top-left-radius:4px;border-top-right-radius:4px}"]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.Bz.forChild(H),a.Bz]}),n})();var z=r(4466);let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,R,c.QW,g.ot,d.g0,h.lN,T.c,E.Ps,i.UX,z.m]}),n})()},4241:(U,v,r)=>{r.d(v,{z:()=>C});var p=r(5004),a=r(4650),e=r(9101);let C=(()=>{class c{constructor(d){this.data=d}ngOnInit(){}}return c.\u0275fac=function(d){return new(d||c)(a.Y36(p.WI))},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-confirmation-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["align","center"],["mat-raised-button","","color","warn",3,"mat-dialog-close"],["mat-raised-button","","mat-dialog-close",""]],template:function(d,P){1&d&&(a.TgZ(0,"mat-dialog-content")(1,"h2",0),a._uU(2),a.qZA(),a.TgZ(3,"p"),a._uU(4),a.qZA()(),a.TgZ(5,"mat-dialog-actions",1)(6,"button",2),a._uU(7,"Yes"),a.qZA(),a.TgZ(8,"button",3),a._uU(9,"No"),a.qZA()()),2&d&&(a.xp6(2),a.Oqu(P.data.text),a.xp6(2),a.Oqu(P.data.subtext),a.xp6(2),a.Q6J("mat-dialog-close",!0))},dependencies:[p.ZT,p.uh,p.xY,p.H8,e.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:red;font-weight:100;text-align:center}mat-dialog-actions[_ngcontent-%COMP%]{gap:1em}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:75px}"]}),c})()}}]);