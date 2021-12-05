(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{32:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var a,i,s,c,o,r,l,d,p,j,x,b,h,m,g,O,u,f,v=t(1),N=t.n(v),w=t(9),y=t.n(w),k=(t(32),t(2)),S=t(6),C=t(3),L=t(7),z=t(5),I=t(13),T=t(61),D=t(60),R=Object(T.a)({initialState:{image:"",name:"",birthday:"",gender:"",position:"Web Developer Internship",address:"",mail:"",phone:"",interest:"",facebook:"https://www.facebook.com/johndoe",github:"https://github.com/"},actions:{insert:function(e){return function(n){var t=n.setState,a=n.getState;t(Object(L.a)(Object(L.a)({},a()),{},Object(I.a)({},e.target.name,e.target.value)))}},setImage:function(e){return function(n){(0,n.setState)({image:e})}}}}),E=Object(D.a)(R),P=t(0),U=C.b.div(a||(a=Object(k.a)(["\n    height: auto !important;\n    input {\n        font-size: 1rem;\n        background: none;\n        border: none;\n    }\n    textarea {\n        font-size: 1rem;\n        background: none;\n        border: none;\n    }\n    input::placeholder,\n    textarea::placeholder {\n        font-size: 1rem;\n        color: black;\n    }\n"]))),F=C.b.div(i||(i=Object(k.a)(["\n    width: 100%;\n    background-color: black;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;\n"]))),M=C.b.div(s||(s=Object(k.a)(["\n    width: 60%;\n    background-color: white;\n    textarea {\n        width: 100%;\n        font-weight: 300;\n        line-height: 1.5;\n    }\n    .liner {\n        height: 25px;\n        width: 100%;\n        background-color: orange;\n    }\n"]))),W=C.b.div(c||(c=Object(k.a)(["\n    width: 40%;\n    padding-top: 25%;\n    color: white;\n"]))),B=C.b.div(o||(o=Object(k.a)(["\n    width: fit-content;\n    margin: 2rem;\n    margin-left: 50%;\n    position: relative;\n"]))),H=C.b.div(r||(r=Object(k.a)(["\n    width: 160px;\n    height: 160px;\n    background-color: orange;\n    border-radius: 50%;\n    border: 6px solid black;\n    /* overflow: hidden; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 2;\n    input {\n        position: absolute;\n        top: -30px;\n        left: 35px;\n    }\n"]))),J=C.b.img(l||(l=Object(k.a)(["\n    width: 148px;\n    height: 148px;\n    z-index: 3;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n"]))),A=C.b.div(d||(d=Object(k.a)(["\n    border-radius: 50%;\n    overflow: hidden;\n"]))),Y=C.b.div(p||(p=Object(k.a)(["\n    width: 100%;\n    min-width: 430px;\n    padding: 1rem 2rem 1rem 3rem;\n    color: white;\n    font-size: 28px;\n    font-weight: bold;\n    text-transform: uppercase;\n    background-color: orange;\n\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-30px, -50%);\n    z-index: 1;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 6px;\n\n    input {\n        width: 100%;\n    }\n\n    .name,\n    .name::placeholder {\n        width: 100%;\n        min-width: 300px;\n        padding: 0.5rem;\n        color: black;\n        font-size: 28px !important;\n        font-weight: bold !important;\n        text-transform: uppercase;\n        background-color: none;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n    }\n\n    .job,\n    .job::placeholder {\n        text-align: center;\n        font-size: 22px !important;\n        font-weight: normal;\n        text-transform: capitalize;\n        color: black;\n    }\n"]))),V=C.b.div(j||(j=Object(k.a)(["\n    padding-right: 2rem;\n"]))),q=C.b.div(x||(x=Object(k.a)(["\n    width: 100%;\n    font-size: 26px;\n    font-weight: bold;\n    text-align: right;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    background-color: orange;\n    padding: 0.5rem 1rem;\n    box-shadow: 9px 9px 16px #00000038, -9px -9px 16px #0000001f;\n"]))),G=C.b.div(b||(b=Object(k.a)(["\n    padding: 10px 1.5rem;\n    .wrap-content {\n        width: 100%;\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        padding: 1rem 5px;\n    }\n    .time,\n    .description {\n        width: 50%;\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        flex-direction: column;\n    }\n    .place {\n        text-transform: capitalize;\n    }\n    .position {\n        text-transform: uppercase;\n        textarea {\n            text-transform: uppercase;\n            font-weight: 600;\n        }\n    }\n    .detail,\n    .detail::placeholder {\n        width: 100%;\n        font-size: 13px;\n        line-height: 1;\n    }\n"]))),Q=C.b.div(h||(h=Object(k.a)(["\n    padding: 0 3rem;\n    .box-highlight {\n        max-width: 100%;\n        border: 4px solid orange;\n        padding: 10px 1rem;\n        text-transform: uppercase;\n        font-size: 28px;\n        text-align: center;\n    }\n    .wrap-inform {\n        display: flex;\n        align-items: flex-start;\n        justify-content: flex-start;\n        gap: 6px;\n        padding: 1.5rem;\n    }\n    .icon {\n        padding: 10px;\n        img {\n            width: 22px;\n        }\n    }\n    .content {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-between;\n        gap: 5px;\n        input,\n        input::placeholder,\n        textarea,\n        textarea::placeholder {\n            color: white;\n        }\n    }\n    .title {\n        text-transform: uppercase;\n        font-weight: bold;\n    }\n"]))),K=C.b.div(m||(m=Object(k.a)(["\n    padding: 2rem 0 1.5rem;\n    .skill {\n        padding: 10px 0;\n    }\n    input {\n        max-width: 100%;\n        color: white;\n        text-transform: uppercase;\n        font-weight: 600;\n        font-size: 26px;\n        text-align: center;\n    }\n    input::placeholder {\n        color: #ffffffaa;\n        font-size: 26px;\n    }\n"]))),X=C.b.div(g||(g=Object(k.a)(["\n    padding: 0;\n    width: 100%;\n    border: 2px solid orange;\n    height: 25px;\n    overflow: hidden;\n\n    .inner-progress {\n        background-color: orange;\n        width: 50%;\n        height: 25px;\n    }\n"]))),Z=C.b.div(O||(O=Object(k.a)(["\n    margin-top: 4rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    img {\n        width: 22px;\n    }\n"]))),$=function(e){e.info;var n=e.education,t=(e.setInfo,Object(v.useState)()),a=Object(S.a)(t,2),i=a[0],s=a[1],c=E(),o=Object(S.a)(c,2),r=o[0],l=o[1];Object(v.useEffect)((function(){return function(){i&&URL.revokeObjectURL(i.preview)}}),[i,r.image]);return Object(P.jsx)(U,{className:"container",children:Object(P.jsxs)(F,{children:[Object(P.jsxs)(M,{children:[Object(P.jsxs)(B,{children:[Object(P.jsxs)(H,{children:[Object(P.jsx)("input",{className:"file",type:"file",onChange:function(e){var n=e.target.files[0];n.preview=URL.createObjectURL(n),s(n),l.setImage(n.preview)}}),Object(P.jsx)(A,{children:i&&Object(P.jsx)(J,{className:"avatar",src:r.image,alt:""})})]}),Object(P.jsxs)(Y,{children:[Object(P.jsx)("input",{name:"name",className:"name",type:"text",placeholder:"John Doe",value:r.name,onChange:l.insert}),Object(P.jsx)("input",{className:"job",type:"text",placeholder:"Web Developer Intern",name:"position",value:r.position,onChange:l.insert})]})]}),Object(P.jsxs)(V,{children:[Object(P.jsx)(q,{children:Object(P.jsx)("span",{children:"Education"})}),Object(P.jsxs)(G,{children:[Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:" langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]}),Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{className:"position",children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:"Ba anot anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]}),Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:"Lorum potro psum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]})]})]}),Object(P.jsxs)(V,{children:[Object(P.jsx)(q,{children:Object(P.jsx)("span",{children:"Experience"})}),Object(P.jsxs)(G,{children:[Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:" langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]}),Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{className:"position",children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:"Ba anot anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]}),Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsxs)("div",{className:"time",children:[Object(P.jsx)("span",{className:"time-range",children:Object(P.jsx)("input",{className:"time",type:"text",placeholder:n.time})}),Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"place",type:"text",placeholder:n.school})})]}),Object(P.jsxs)("div",{className:"description",children:[Object(P.jsx)("span",{children:Object(P.jsx)("input",{className:"position",type:"text",placeholder:"Computer Science"})}),Object(P.jsx)(z.a,{className:"detail",type:"text",placeholder:"Lorum potro psum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"})]})]})]})]}),Object(P.jsx)("div",{className:"liner"})]}),Object(P.jsxs)(W,{children:[Object(P.jsxs)(Q,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Contact Me"}),Object(P.jsxs)("div",{className:"wrap-inform",children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)("img",{src:"../images/icons/map-marker.svg",alt:""})}),Object(P.jsxs)("div",{className:"content",children:[Object(P.jsx)("span",{className:"title",children:"ADDRESS"}),Object(P.jsx)(z.a,{name:"address",className:"address",type:"text",placeholder:"123 Wall Street",value:r.address,onChange:l.insert})]})]}),Object(P.jsxs)("div",{className:"wrap-inform",children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)("img",{src:"../images/icons/globe.svg",alt:""})}),Object(P.jsxs)("div",{className:"content",children:[Object(P.jsx)("span",{className:"title",children:"WEB"}),Object(P.jsx)("input",{className:"address",name:"address",type:"text",placeholder:"johndoe@gmail.com",value:r.mail,onChange:l.insert})]})]}),Object(P.jsxs)("div",{className:"wrap-inform",children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)("img",{src:"../images/icons/phone.svg",alt:""})}),Object(P.jsxs)("div",{className:"content",children:[Object(P.jsx)("span",{className:"title",children:"PHONE"}),Object(P.jsx)("input",{className:"address",type:"text",placeholder:"0123456789",value:r.phone,onChange:l.insert})]})]}),Object(P.jsx)("div",{className:"box-highlight",children:"Skill"}),Object(P.jsxs)(K,{children:[Object(P.jsxs)("div",{className:"skill",children:[" ",Object(P.jsx)("input",{type:"text",placeholder:"Skills"})]}),Object(P.jsx)(X,{children:Object(P.jsx)("div",{className:"inner-progress"})}),Object(P.jsx)("div",{className:"skill",children:Object(P.jsx)("input",{type:"text",placeholder:"Skills"})}),Object(P.jsx)(X,{children:Object(P.jsx)("div",{className:"inner-progress"})}),Object(P.jsx)("div",{className:"skill",children:Object(P.jsx)("input",{type:"text",placeholder:"Skills"})}),Object(P.jsx)(X,{children:Object(P.jsx)("div",{className:"inner-progress"})})]})]}),Object(P.jsxs)(Z,{children:[Object(P.jsx)("img",{src:"../images/icons/instagram-brands.svg",alt:""}),Object(P.jsx)("img",{src:"../images/icons/facebook-brands.svg",alt:""}),Object(P.jsx)("img",{src:"../images/icons/twitter-brands.svg",alt:""})]})]})]})})},_=C.b.img(u||(u=Object(k.a)(["\n    width: 148px;\n    height: 148px;\n    position: absolute;\n    bottom: -65px;\n    right: 60px;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n"]))),ee=C.b.div(f||(f=Object(k.a)(["\n    position: relative;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* overflow: hidden; */\n    input {\n        position: absolute;\n        top: 20px;\n        left: 30px;\n    }\n"])));var ne,te,ae,ie,se,ce,oe=function(){var e=Object(v.useState)(),n=Object(S.a)(e,2),t=n[0],a=n[1],i=E(),s=Object(S.a)(i,2),c=s[0],o=s[1];return Object(v.useEffect)((function(){return function(){t&&URL.revokeObjectURL(t.preview)}}),[t,c.image]),Object(P.jsxs)(ee,{children:[Object(P.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files[0];n.preview=URL.createObjectURL(n),a(n),o.setImage(n.preview)}}),c.image&&Object(P.jsx)(_,{className:"avatar",src:c.image,alt:""})]})},re=C.b.div(ne||(ne=Object(k.a)(["\n    padding: 24px 16px;\n"]))),le=C.b.label(te||(te=Object(k.a)(["\n    width: 100px;\n    text-transform: capitalize;\n    display: block;\n    font-weight: 550;\n    font-size: 14px;\n"]))),de=C.b.div(ae||(ae=Object(k.a)(["\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n\n    & :last-child {\n        flex: 1;\n        padding: 4px 8px;\n    }\n"]))),pe=C.b.h2(ie||(ie=Object(k.a)(["\n    text-transform: uppercase;\n    color: #2dbcad;\n"]))),je=C.b.input(se||(se=Object(k.a)(["\n    font-size: 16px;\n    padding: 2px 16px;\n    border-radius: 4px;\n    border: none;\n"]))),xe=C.b.textarea(ce||(ce=Object(k.a)(["\n    font-size: 16px;\n    padding: 2px 16px;\n    border-radius: 4px;\n    border: none;\n"])));var be,he,me,ge,Oe,ue,fe,ve,Ne,we,ye,ke,Se,Ce,Le,ze,Ie,Te,De,Re,Ee,Pe,Ue,Fe,Me,We,Be,He,Je,Ae,Ye=function(e){var n=e.title,t=e.fields,a=e.types,i=E(),s=Object(S.a)(i,2),c=s[0],o=s[1];return Object(P.jsxs)(re,{children:[Object(P.jsx)(pe,{children:n}),t.map((function(e,n){return Object(P.jsxs)(de,{children:[Object(P.jsx)(le,{htmlFor:e,children:"".concat(e,":")}),"textarea"===a[n]?Object(P.jsx)(xe,{id:e,name:e,value:c[e]?c.field:"",onChange:o.insert}):Object(P.jsx)(je,{id:e,type:a[n],name:e,value:c[e]?c.field:"",onChange:o.insert})]},n)}))]})},Ve=C.b.div(be||(be=Object(k.a)(["\n    height: auto !important;\n"]))),qe=C.b.div(he||(he=Object(k.a)(["\n    width: 100%;\n    background-color: #e2f0ee;\n"]))),Ge=C.b.div(me||(me=Object(k.a)(["\n    height: 136px;\n    background-color: #2dbcad;\n    display: flex;\n"]))),Qe=C.b.div(ge||(ge=Object(k.a)(["\n    padding: 0 16px;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n"]))),Ke=C.b.div(Oe||(Oe=Object(k.a)(["\n    flex: 1;\n    padding: 4px;\n"]))),Xe=C.b.input(ue||(ue=Object(k.a)(["\n    font-size: 28px;\n    font-weight: 550;\n    text-transform: uppercase;\n    color: #fff;\n    padding: 4px 16px;\n    border-radius: 6px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n\n    &:focus {\n        background-color: #fff;\n        color: #333;\n    }\n"]))),Ze=C.b.input(fe||(fe=Object(k.a)(["\n    font-size: 16px;\n    color: #fff;\n    padding: 2px 16px;\n    border-radius: 4px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n\n    &:focus {\n        background-color: #fff;\n        color: #333;\n    }\n"]))),$e=C.b.div(ve||(ve=Object(k.a)(["\n    display: flex;\n"]))),_e=C.b.div(Ne||(Ne=Object(k.a)(["\n    flex: 1;\n"]))),en=C.b.div(we||(we=Object(k.a)(["\n    flex: 1;\n"]))),nn=function(){var e=E(),n=Object(S.a)(e,2),t=n[0],a=n[1];return Object(P.jsx)(Ve,{className:"container",children:Object(P.jsxs)(qe,{children:[Object(P.jsxs)(Ge,{children:[Object(P.jsxs)(Qe,{children:[Object(P.jsx)(Xe,{type:"text",name:"name",placeholder:"Fullname",value:t.name,onChange:a.insert}),Object(P.jsx)(Ze,{type:"text",name:"position",placeholder:"Position",value:t.position,onChange:a.insert})]}),Object(P.jsx)(Ke,{children:Object(P.jsx)(oe,{})})]}),Object(P.jsxs)($e,{children:[Object(P.jsxs)(_e,{children:[Object(P.jsx)(Ye,{title:"Contact Information",fields:["phone","facebook","mail","github"],types:["text","text","text","text"]}),Object(P.jsx)(Ye,{title:"Education",fields:["2018-2022"],types:["textarea"]}),Object(P.jsx)(Ye,{title:"Skills",fields:["Business Process Improvement","Vendor Management","Project Scheduling","Sales Analysis"],types:["textarea","textarea","textarea","textarea"]}),Object(P.jsx)(Ye,{title:"Summary",fields:["Conclusion"],types:["textarea"]})]}),Object(P.jsxs)(en,{children:[Object(P.jsx)(Ye,{title:"Experience",fields:["2018-2022 - present","2004-09 - 2006-12"],types:["textarea","textarea"]}),Object(P.jsx)(Ye,{title:"Certifications",fields:["2015-05","2014-04"],types:["text","text"]})]})]})]})})},tn=C.b.div(ye||(ye=Object(k.a)(["\n    height: auto !important;\n    input {\n        font-size: 1rem;\n        background: none;\n        border: none;\n    }\n    textarea {\n        font-size: 1rem;\n        background: none;\n        border: none;\n    }\n    input::placeholder,\n    textarea::placeholder {\n        font-size: 1rem;\n        color: black;\n    }\n"]))),an=C.b.div(ke||(ke=Object(k.a)(['\n    font-family: "Roboto", sans-serif !important;\n    padding: 20px;\n    width: 100%;\n    height: auto;\n    /* min-height: 100vh; */\n\n    background-color: white;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;\n    input {\n        width: 65%;\n    }\n    .box-highlight {\n        max-width: 100%;\n        padding: 10px 1rem;\n        color: orange;\n        font-size: 1.2rem;\n        text-align: left;\n        font-weight: bold;\n    }\n    hr {\n        display: block;\n        height: 1px;\n        border: 0;\n        border-top: 1px solid orange;\n        margin: auto;\n        width: 80%;\n    }\n']))),sn=C.b.div(Se||(Se=Object(k.a)(["\n    width: 35%;\n    min-height: 100vh;\n    background-color: #fffaf2;\n"]))),cn=C.b.div(Ce||(Ce=Object(k.a)(["\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 20px;\n"]))),on=C.b.div(Le||(Le=Object(k.a)(["\n    ul {\n        padding-left: 18px;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n\n        li {\n            margin: 2px 0;\n            display: flex;\n            gap: 5px;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            align-items: center;\n            justify-content: flex-start;\n            input {\n                width: auto;\n                font-size: 0.8em;\n            }\n            textarea {\n                width: 200px;\n            }\n            i {\n                display: inline-block;\n                color: orange;\n                width: 2rem;\n                height: 1rem;\n            }\n            a {\n                padding: 0px;\n                margin: 0px;\n                text-decoration: none;\n                color: black;\n            }\n        }\n    }\n"]))),rn=C.b.div(ze||(ze=Object(k.a)(["\n    margin: 1rem 1.5rem 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    text-align: center;\n    align-items: flex-start;\n    .skill {\n        text-transform: uppercase;\n        font-weight: 600;\n        font-size: 18px;\n        text-align: center;\n        padding: 10px 0;\n    }\n"]))),ln=C.b.div(Ie||(Ie=Object(k.a)(["\n    padding: 0;\n    width: 80%;\n    border: 2px solid orange;\n    height: 20px;\n    overflow: hidden;\n\n    .inner-progress {\n        border-radius: 0 5px 13px 0;\n        background-color: orange;\n        width: 50%;\n        height: 25px;\n    }\n"]))),dn=C.b.div(Te||(Te=Object(k.a)(["\n    padding: 0 1.5rem;\n    .box-highlight {\n        padding: 0;\n    }\n    textarea {\n        /* margin-left: 1.5rem; */\n        padding: 0;\n        font-size: 16px;\n        width: 100%;\n    }\n"]))),pn=C.b.div(De||(De=Object(k.a)(["\n    .name {\n        width: 100%;\n        min-width: 300px;\n        padding: 1rem;\n        color: orange;\n        font-size: 32px !important;\n        font-weight: bold !important;\n        text-transform: uppercase;\n        background-color: none;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n    }\n\n    .job {\n        text-align: center;\n        font-size: 24px !important;\n        font-weight: normal;\n        text-transform: capitalize;\n        color: orange;\n    }\n    .job::placeholder,\n    .name::placeholder {\n        font-size: 24px !important;\n        color: orange;\n    }\n"]))),jn=C.b.div(Re||(Re=Object(k.a)(["\n    width: 160px;\n    height: 160px;\n    background-color: orange;\n    border-radius: 50%;\n    border: 6px solid black;\n    /* overflow: hidden; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 2;\n    input {\n        position: absolute;\n        bottom: -35px;\n        left: 25px;\n    }\n"]))),xn=C.b.div(Ee||(Ee=Object(k.a)(["\n    border-radius: 50%;\n    overflow: hidden;\n"]))),bn=C.b.img(Pe||(Pe=Object(k.a)(["\n    width: 148px;\n    height: 148px;\n    z-index: 3;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n"]))),hn=C.b.div(Ue||(Ue=Object(k.a)(["\n    width: 64%;\n    min-height: 100vh;\n    background-color: #fffaf2;\n"]))),mn=C.b.div(Fe||(Fe=Object(k.a)(["\n    width: auto;\n    margin: 20px 0px;\n"]))),gn=C.b.div(Me||(Me=Object(k.a)(["\n    padding-left: 1.1rem;\n    margin: 10px 0px;\n    .Objective {\n        width: 90%;\n        font-size: 1em;\n    }\n    strong {\n        width: 30%;\n        .timeYear {\n            font-weight: bold;\n            width: 100%;\n        }\n    }\n\n    .descriptionStyle {\n        width: 78%;\n    }\n    .wrap-content {\n        width: 98%;\n        display: flex;\n        justify-content: space-between;\n        .titles {\n            font-weight: bold;\n            font-size: 16px;\n        }\n\n        .time {\n            margin-top: 10px;\n            font-style: italic;\n            color: #a8a8a8;\n            .time-range,\n            .time-range::placeholder {\n                text-align: right;\n                font-style: italic;\n                color: #a8a8a8;\n                font-size: 1em;\n            }\n        }\n    }\n    .description {\n        padding: 5px;\n        margin: 5px;\n        width: 92%;\n        height: auto;\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        flex-direction: column;\n        .p {\n            padding: 0;\n            margin: 0 !important;\n        }\n    }\n    .awards,\n    .certifications {\n        flex-direction: row;\n    }\n"]))),On=function(e){var n=e.info,t=(e.setInfo,e.education),a=Object(v.useState)(),i=Object(S.a)(a,2),s=i[0],c=i[1],o=E(),r=Object(S.a)(o,2),l=r[0],d=r[1];Object(v.useEffect)((function(){return function(){s&&URL.revokeObjectURL(s.preview)}}),[s,l.image]);return Object(P.jsx)(tn,{className:"container",children:Object(P.jsxs)(an,{children:[Object(P.jsxs)(sn,{children:[Object(P.jsxs)(cn,{children:[Object(P.jsxs)(pn,{children:[Object(P.jsx)("input",{className:"name",name:"name",type:"text",value:l.name,placeholder:"John Doe",onChange:d.insert}),Object(P.jsx)("input",{className:"job",name:"position",type:"text",placeholder:"Web Developer Intern",value:l.position,onChange:d.insert})]}),Object(P.jsxs)(jn,{children:[Object(P.jsx)("input",{className:"file",type:"file",onChange:function(e){var n=e.target.files[0];n.preview=URL.createObjectURL(n),c(n),d.setImage(n.preview)}}),Object(P.jsx)(xn,{children:l.image&&Object(P.jsx)(bn,{className:"avatar",src:l.image,alt:""})})]})]}),Object(P.jsxs)(on,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Contact infomation"}),Object(P.jsx)("div",{className:"wrap-inform",children:Object(P.jsxs)("ul",{children:[Object(P.jsxs)("li",{className:"birthday",children:[Object(P.jsx)("i",{className:"fas fa-calendar-week"})," ",Object(P.jsx)("input",{name:"birthday",className:"birthday",type:"text",placeholder:n.birthday,onChange:d.insert})]}),Object(P.jsxs)("li",{className:"gender",children:[Object(P.jsx)("i",{className:"fas fa-male"}),Object(P.jsx)("input",{className:"gender",name:"gender",type:"text",placeholder:"Male/Female",value:l.gender,onChange:d.insert})]}),Object(P.jsxs)("li",{className:"phone",children:[Object(P.jsx)("i",{className:"fas fa-mobile-alt"})," ",Object(P.jsx)("input",{className:"phone",type:"text",placeholder:"0123456789",value:l.phone,onChange:d.insert})]}),Object(P.jsxs)("li",{className:"mail",children:[Object(P.jsx)("i",{className:"far fa-envelope"}),Object(P.jsx)("input",{className:"mail",type:"text",placeholder:"johndoe@gmail.com",value:l.mail,onChange:d.insert})]}),Object(P.jsxs)("li",{className:"address",children:[Object(P.jsx)("i",{className:"fas fa-map-marked-alt"}),Object(P.jsx)(z.a,{className:"address",name:"address",type:"text",placeholder:"123 Wall Street",value:l.address,onChange:d.insert,rows:"2"})]}),Object(P.jsxs)("li",{className:"facebook",children:[Object(P.jsx)("i",{className:"fab fa-facebook-f"})," ",Object(P.jsx)("input",{className:"facebook",name:"facebook",type:"text",placeholder:"facebook.com/johndoe",value:l.facebook,onChange:d.insert})]}),Object(P.jsxs)("li",{className:"github",children:[Object(P.jsx)("i",{className:"fab fa-github"})," ",Object(P.jsx)("input",{className:"github",name:"github",type:"text",placeholder:"github.com/johndoe",value:l.github,onChange:d.insert})]})]})})]}),Object(P.jsx)("hr",{}),Object(P.jsx)("div",{className:"box-highlight",children:"Skill"}),Object(P.jsxs)(rn,{children:[Object(P.jsx)("div",{className:"skill",children:"HTML/CSS"}),Object(P.jsx)(ln,{children:Object(P.jsx)("div",{className:"inner-progress"})}),Object(P.jsx)("div",{className:"skill",children:"HTML/CSS"}),Object(P.jsx)(ln,{children:Object(P.jsx)("div",{className:"inner-progress"})}),Object(P.jsx)("div",{className:"skill",children:"HTML/CSS"}),Object(P.jsx)(ln,{children:Object(P.jsx)("div",{className:"inner-progress"})})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(dn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Interests"}),Object(P.jsx)(z.a,{className:"Interests",type:"text",name:"interest",placeholder:"I like soccer, music..",value:l.interest,onChange:d.insert})]})]}),Object(P.jsxs)(hn,{children:[Object(P.jsxs)(mn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Objective"}),Object(P.jsx)(gn,{children:Object(P.jsx)(z.a,{className:"Objective",type:"text",placeholder:"Take advantages of sales skills & experience and understanding of market to become a professional Sales Staff and bring a lot value to Customers. From that, I will contribute to development of TOPCV Company."})})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(mn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Education"}),Object(P.jsxs)(gn,{children:[Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsx)("input",{className:"titles",type:"text",placeholder:t.school}),Object(P.jsx)("div",{className:"time",children:Object(P.jsx)("input",{className:"time-range",type:"text",placeholder:t.time})})]}),Object(P.jsx)(z.a,{className:"description",type:"text",placeholder:t.description})]})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(mn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Work experience"}),Object(P.jsxs)(gn,{children:[Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsx)("input",{className:"titles",type:"text",placeholder:"Sales Staff"}),Object(P.jsx)("div",{className:"time",children:Object(P.jsx)("input",{className:"time-range",type:"text",placeholder:" June 2014 - Present"})})]}),Object(P.jsx)(z.a,{className:"description",type:"text",placeholder:t.description})]}),Object(P.jsxs)(gn,{children:[Object(P.jsxs)("div",{className:"wrap-content",children:[Object(P.jsx)("input",{className:"titles",type:"text",placeholder:"Sales Staff"}),Object(P.jsx)("div",{className:"time",children:Object(P.jsx)("input",{className:"time-range",type:"text",placeholder:" June 2014 - Present"})})]}),Object(P.jsx)(z.a,{className:"description",type:"text",placeholder:t.description})]})]}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsxs)(mn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Honors & Awards"}),Object(P.jsx)(gn,{children:Object(P.jsxs)("div",{className:"description awards",children:[Object(P.jsx)("strong",{children:Object(P.jsx)("input",{className:"timeYear",type:"text",placeholder:"2013 -2014"})}),Object(P.jsx)(z.a,{className:"descriptionStyle",type:"text",placeholder:t.description})]})})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(mn,{children:[Object(P.jsx)("div",{className:"box-highlight",children:"Certifications"}),Object(P.jsx)(gn,{children:Object(P.jsxs)("div",{className:"description awards",children:[Object(P.jsx)("strong",{children:Object(P.jsx)("input",{className:"timeYear",type:"text",placeholder:"2013 -2014"})}),Object(P.jsx)(z.a,{className:"descriptionStyle",type:"text",placeholder:"TOEIC Certificate with score 800 issued by TDT"})]})})]})]})]})})},un=t(26),fn=t.n(un),vn=t(27),Nn=(t(52),t(53),C.b.div(We||(We=Object(k.a)(["\n    margin: 0 5%;\n"])))),wn=C.b.div(Be||(Be=Object(k.a)(["\n    button {\n        background-color: #4caf50; /* Green */\n        border: none;\n        color: white;\n        padding: 15px 32px;\n        text-align: center;\n        border-radius: 20px;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        margin-bottom: 50px;\n        cursor: pointer;\n    }\n"]))),yn=C.b.div(He||(He=Object(k.a)(["\n    height: auto !important;\n    .slick-slide {\n        height: auto;\n    }\n"]))),kn=function(e){var n=e.info,t=e.setInfo,a=e.education;return Object(P.jsxs)(Nn,{children:[Object(P.jsx)(wn,{children:Object(P.jsx)("button",{onClick:void new vn.a("p","pt","a4").html(document.querySelector("#ba",{callback:function(e){e.save("my-cv.pdf")}})),children:"Download PDF"})}),Object(P.jsxs)(fn.a,Object(L.a)(Object(L.a)({},{centerMode:!0,centerPadding:"250px",dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(P.jsx)(yn,{children:Object(P.jsx)($,{info:n,education:a,setInfo:t,id:"ba"})}),Object(P.jsx)(yn,{children:Object(P.jsx)(On,{info:n,setInfo:t,education:a})}),Object(P.jsx)(yn,{children:Object(P.jsx)(nn,{})})]}))]})},Sn=C.b.section(Je||(Je=Object(k.a)(["\n    margin-top: 4rem;\n    width: 100%;\n"]))),Cn=function(){var e=Object(v.useState)({name:"",birthday:"2000",gender:"Male",position:"Web Developer Internship",address:"17 Nguyen Huu Tho, Phuong Tan Phong, Quan 7",mail:"abc@abc",phone:"012123987129"}),n=Object(S.a)(e,2),t=n[0],a=n[1],i=Object(v.useState)({school:"Ton Duc Thang University",time:"2018-2022",description:"Lorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"}),s=Object(S.a)(i,1)[0];return console.log("name",t.name),Object(P.jsx)(Sn,{children:Object(P.jsx)(kn,{info:t,setInfo:a,education:s})})},Ln=Object(C.a)(Ae||(Ae=Object(k.a)(["\n    *{\n        font-family: sans-serif;\n        box-sizing: border-box;\n    }\n    body{\n        background-color: #303D46;\n        overflow-x: hidden;\n    }\n    .container{\n        width: 862px;\n        height: 1218px;\n        background-color: #fff;\n        margin-right: auto;\n        margin-left: auto;\n        margin-bottom: 20px;\n    }\n"])));var zn=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(Ln,{}),Object(P.jsx)(Cn,{})]})},In=function(e){e&&e instanceof Function&&t.e(6).then(t.bind(null,214)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),s(e),c(e)}))};y.a.render(Object(P.jsx)(N.a.StrictMode,{children:Object(P.jsx)(zn,{})}),document.getElementById("root")),In()}},[[54,1,3]]]);
//# sourceMappingURL=main.deb9476f.chunk.js.map