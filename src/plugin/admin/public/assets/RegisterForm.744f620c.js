var k=(x,r,i)=>new Promise((t,c)=>{var p=s=>{try{u(i.next(s))}catch(m){c(m)}},d=s=>{try{u(i.throw(s))}catch(m){c(m)}},u=s=>s.done?t(s.value):Promise.resolve(s.value).then(p,d);u((i=i.apply(x,r)).next())});import S from"./LoginFormTitle.55aee464.js";import{a as z,I as g,c as P,r as w,m as R,f as _,k as e,o as B,h as U,j as a,p as n,q as y,t as v,B as b,F as L,aK as E}from"./index.82c0877f.js";import{F as C}from"./index.75341559.js";import"./index.b826f11b.js";import{S as N,a as V}from"./index.8abbad91.js";import{C as T}from"./index.d9c8ab71.js";import{u as D,a as j,L as q,b as G}from"./useLogin.dd808e9c.js";import"./_baseIteratee.5798a650.js";const X=z({setup(x){const r=C.Item,i=g.Password,{t}=P(),{handleBackLogin:c,getLoginState:p}=D(),d=w(),u=w(!1),s=R({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:m}=j(s),{validForm:h}=G(d),F=_(()=>e(p)===q.REGISTER);function I(){return k(this,null,function*(){const f=yield h();!f||console.log(f)})}return(f,o)=>e(F)?(B(),U(L,{key:0},[a(S,{class:"enter-x"}),a(e(C),{class:"p-4 enter-x",model:e(s),rules:e(m),ref_key:"formRef",ref:d},{default:n(()=>[a(e(r),{name:"account",class:"enter-x"},{default:n(()=>[a(e(g),{class:"fix-auto-fill",size:"large",value:e(s).account,"onUpdate:value":o[0]||(o[0]=l=>e(s).account=l),placeholder:e(t)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),a(e(r),{name:"mobile",class:"enter-x"},{default:n(()=>[a(e(g),{size:"large",value:e(s).mobile,"onUpdate:value":o[1]||(o[1]=l=>e(s).mobile=l),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(r),{name:"sms",class:"enter-x"},{default:n(()=>[a(e(T),{size:"large",class:"fix-auto-fill",value:e(s).sms,"onUpdate:value":o[2]||(o[2]=l=>e(s).sms=l),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),a(e(r),{name:"password",class:"enter-x"},{default:n(()=>[a(e(N),{size:"large",value:e(s).password,"onUpdate:value":o[3]||(o[3]=l=>e(s).password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(r),{name:"confirmPassword",class:"enter-x"},{default:n(()=>[a(e(i),{size:"large",visibilityToggle:"",value:e(s).confirmPassword,"onUpdate:value":o[4]||(o[4]=l=>e(s).confirmPassword=l),placeholder:e(t)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),a(e(r),{class:"enter-x",name:"policy"},{default:n(()=>[a(e(V),{checked:e(s).policy,"onUpdate:checked":o[5]||(o[5]=l=>e(s).policy=l),size:"small"},{default:n(()=>[y(v(e(t)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),a(e(b),{type:"primary",class:"enter-x",size:"large",block:"",onClick:I,loading:u.value},{default:n(()=>[y(v(e(t)("sys.login.registerButton")),1)]),_:1},8,["loading"]),a(e(b),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(c)},{default:n(()=>[y(v(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):E("",!0)}});export{X as default};
