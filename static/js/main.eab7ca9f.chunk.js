(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(12),i=n.n(o),a=(n(23),n(13)),l=n(3),s=n(2),d=n(0),u=function(e){var t=e.activeSection,n=Object(r.useContext)(s.a);return Object(d.jsxs)("div",{className:"absolute top-0 h-full",children:[Object(d.jsx)("div",{className:"absolute top-0 h-full w-screen ".concat(n.backgroundWrap[0]," ").concat(0===t?"animate-fadeIn-500":"animate-fadeOut")}),Object(d.jsx)("div",{className:"absolute top-0 h-full w-screen ".concat(n.backgroundWrap[1]," ").concat(1===t?"animate-fadeIn":"animate-fadeOut")}),Object(d.jsx)("div",{className:"absolute top-0 h-full w-screen ".concat(n.backgroundWrap[2]," ").concat(2===t?"animate-fadeIn-500":"animate-fadeOut")}),Object(d.jsx)("div",{className:"absolute top-0 h-full w-screen ".concat(n.backgroundWrap[3]," ").concat(3===t?"animate-fadeIn-500":"animate-fadeOut")})]})},b=[{title:"welcome",link:"#welcome"},{title:"techstack",link:"#techstack"},{title:"portfolio",link:"#portfolio"},{title:"contact",link:"#contact"}],h=s.c.div((function(e){return e.theme.header.wrap.logoWrap})),f=s.c.div((function(e){return e.theme.header.wrap.toggleWrap})),m=n(4),j=n.n(m),p=function(e){e.className;var t=e.children,n=e.activeSection,c=Object(r.useContext)(s.a),o=Object(d.jsx)("ul",{className:"flex m-auto",children:t.map((function(e,t){return Object(d.jsx)(j.a,{href:e.link,children:Object(d.jsx)("li",{className:"p-4 transform-all duration-500 ".concat(n===t?"".concat(c.header.nav.bgrColorActive," ").concat(c.header.fontColor.primary):"".concat(c.header.nav.bgrColor," ").concat(c.header.fontColor.secondary)),children:e.title},t)})}))});return Object(d.jsx)(d.Fragment,{children:o})},g=function(e){var t=e.darkMode,n=e.setDarkMode;return Object(d.jsx)("button",{className:"ml-auto",onClick:function(){n(!t)},children:t?"lightmode":"darkmode"})},v=function(e){var t=e.showMenu,n=e.setShowMenu,c=e.children,o=e.activeSection,i=e.darkMode,a=e.setDarkMode,l=Object(r.useContext)(s.a),u=function(){n((function(){return!1}))},b=Object(d.jsxs)("div",{className:"".concat(t?"animate-fadeIn-500":"animate-fadeOut-500"," transition-opacity duration-500ms ease-in absolute w-screen h-screen flex flex-col ").concat(l.header.mobileNav.bgrCol),children:[Object(d.jsx)("button",{onClick:u,children:"close"}),Object(d.jsx)("ul",{className:"w-screen h-screen flex m-auto sm:flex flex-col",children:c.map((function(e,t){return Object(d.jsx)("li",{className:"".concat(o===t?l.header.nav.bgrColorActive[o]:l.header.nav.bgrColor),children:Object(d.jsx)(j.a,{offset:"56",href:e.link,onClick:u,children:e.title})},t)}))}),Object(d.jsx)(f,{className:"flex w-2/5 p-4 ml-auto",activeSection:o,children:Object(d.jsx)(g,{darkMode:i,setDarkMode:a})})]});return Object(d.jsx)(d.Fragment,{children:b})},x=function(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){var n;return e&&!o&&i(!0),!e&&o&&(n=setTimeout((function(){return i(!1)}),t)),function(){return clearTimeout(n)}}),[e,t,o]),o};var O,w,y=function(e){var t=e.fill;return Object(d.jsxs)("svg",{viewBox:"0 0 80 60",width:"26",height:"26",children:[Object(d.jsx)("rect",{fill:t,width:"80",height:"6"}),Object(d.jsx)("rect",{fill:t,y:"25",width:"80",height:"6"}),Object(d.jsx)("rect",{fill:t,y:"50",width:"80",height:"6"})]})},k=s.c.header((function(e){e.className,e.activeSection;var t=e.theme;return"color: ".concat(t.header.fontColor.primary,"\n    ")})),S=function(e){var t=e.activeSection,n=e.darkMode,c=e.setDarkMode,o=e.mobileOn,i=Object(r.useState)(window.scrollY||window.pageYOffset),a=Object(l.a)(i,2),u=a[0],m=a[1],j=Object(r.useState)(!0),O=Object(l.a)(j,2),w=O[0],S=O[1],N=Object(r.useState)(!1),C=Object(l.a)(N,2),I=C[0],M=C[1],E=x(I,600),z=Object(r.useContext)(s.a);Object(r.useEffect)((function(){var e=document.querySelector("html");e.style.overflow=I?"hidden":"scroll"})),Object(r.useEffect)((function(){var e=setInterval((function(){var e=window.scrollY||window.pageYOffset;0!==e||w||S((function(){return!0})),e<u&&!w&&u-e>100&&S((function(){return!0})),e>u&&w&&e-u>30&&S((function(){return!1})),m((function(){return e}))}),250);return function(){return window.clearInterval(e)}}));var R=Object(d.jsxs)(k,{className:"top-0 transition transform ".concat(w?"animate-fadeIn-500":"animate-fadeOut-500 -translate-y-full"," flex sticky z-20 backdrop-filter backdrop-blur"),activeSection:t,children:[Object(d.jsx)(h,{className:"flex w-2/5 p-4 mr-auto",children:"jiripohanka"}),Object(d.jsx)(p,{activeSection:t,children:b}),Object(d.jsx)(f,{className:"flex w-2/5 p-4 ml-auto",children:Object(d.jsx)(g,{darkMode:n,setDarkMode:c})})]}),P=Object(d.jsxs)(k,{className:"top-0 transition transform ".concat(w?" animate-fadeIn-500":"animate-fadeOut-500 -translate-y-full"," flex sticky z-20 backdrop-filter backdrop-blur"),activeSection:t,children:[Object(d.jsx)(h,{className:"flex w-3/5 p-4 mr-auto",children:"jiripohanka"}),Object(d.jsx)(f,{className:"flex w-2/5 p-4 ml-auto",children:Object(d.jsx)("button",{className:"ml-auto",onClick:function(e){M((function(){return!0}))},children:Object(d.jsx)(y,{fill:z.header.fontColor.primary})})}),E&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(v,{activeSection:t,children:b,showMenu:I,setShowMenu:M,darkMode:n,setDarkMode:c})})]});return o?P:R},N=s.c.section((function(e){e.activeSection;var t=e.theme;return"position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n    background-color: ".concat(t.section.bgrColor,";\n    color: ").concat(t.section.fontColPrimary,";\n")})),C={ids:{welcomeSec:"welcome",techStackSec:"techstack",portfolioSec:"portfolio",contactSec:"contact"}},I=s.c.h1((function(e){var t=e.display;e.activeSection,e.theme;return"\ntext-align: center;\nfont-size: 10vw;\npadding-bottom: 2rem;\nline-height: 1.2;\nfont-family: 'Lato', sans-serif;\nfont-weight: 100;\n".concat(t?"display: "+t:"","\n")})),M=n(17),E=n(18),z=function(){function e(t,n,r){Object(M.a)(this,e),this.toRotate=n,this.el=t,this.loopNum=0,this.period=parseInt(r,10)||2e3,this.txt="",this.tick=this.tick.bind(this),this.tick(),this.isDeleting=!1}return Object(E.a)(e,[{key:"tick",value:function(){var e=this.loopNum,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.textContent=this.txt;var n=this,r=200-100*Math.random();this.isDeleting&&(r/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum<this.toRotate.length-1?this.loopNum++:this.loopNum=0,r=500):(r=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),r)}}]),e}(),R=s.c.span((function(e){var t=e.direction;return"font-size: 4rem;\n    font-family: 'Lato', sans-serif;\n    font-weight: 100;\n    display: block;\n    line-height: 0;\n    padding: 1rem;\n    position: relative;\n    text-align: center;\n    cursor: pointer;\n    opacity: 0.5;\n    transition: opacity 500ms;\n    ".concat("down"===t?"transform: rotate(-90deg);":"","\n    ").concat("up"===t?"transform: rotate(90deg);":"","\n    &:hover {\n        opacity: 1;\n    }\n    ")})),P=function(e){var t=e.direction,n=e.link;return Object(d.jsx)("div",{className:"flex flex-col animate-bounce",children:Object(d.jsx)(j.a,{href:"#"+n,children:Object(d.jsx)(R,{direction:t,children:"<"})})})},D=function(e){var t=e.activeSection,n=e.observer,c=C.ids,o=Object(r.useRef)(),i=Object(r.useRef)(),a=Object(r.useRef)();Object(r.useEffect)((function(){n.observe(o.current)}),[t,n]);var l=["...","Hello World","Jiri here","This Is My Portfolio Website","I Like JS","I Enjoy React","I like turtles"].map((function(e){return e.toUpperCase()}));return Object(r.useEffect)((function(){new z(a.current,l,2e3)}),[]),Object(d.jsxs)(N,{activeSection:t,ref:o,id:"".concat(c.welcomeSec),className:"h-screen py-14 -mt-14",children:[Object(d.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:Object(d.jsx)(I,{className:"justify-center items-center",display:"flex",ref:i,children:Object(d.jsx)("span",{className:"wrap absolute max-w-55",ref:a})})}),Object(d.jsx)("div",{className:"absolute bottom-10",children:Object(d.jsx)(P,{direction:"down",link:c.techStackSec})})]})},W=s.c.h2((function(e){e.activeSection,e.theme;return"\nfont-size: 2rem;\ntext-align: center;\nmax-width: 60vw;\npadding-top: 3rem;\nmargin-bottom: 1rem;\n"})),J=s.c.div((function(e){e.theme;return"white-space: pre-wrap;\n    text-align: center;\n    max-width: 80%;\n"})),H=function(e){var t=C.ids,n=e.activeSection,c=e.observer,o=Object(r.useRef)();return Object(r.useEffect)((function(){c.observe(o.current)}),[n]),Object(d.jsx)(N,{activeSection:n,ref:o,id:"".concat(t.techStackSec),className:"min-h-screen",children:Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(d.jsxs)(W,{children:["Front-End Developer ",Object(d.jsx)("span",{className:"whitespace-pre",children:"in the making"})]}),Object(d.jsx)(J,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"I enjoy Javascript and React. I believe component-driven development is the way to go. For quick styling, I use tailwind. For more control, I like to combine it with styled-components."}),Object(d.jsx)("span",{children:" I don't do much testing, but when I do it's in Jest for unit tests and for E2E testing, I'd like to learn about Cypress."}),Object(d.jsx)("span",{children:" In 2022, I intend to start working in a team, learn from my colleagues, focus more on both React and Javascript. Get more comfortable with GIT, add storybook, nextJS and typescript into my toolbox."})]})})]})})},F=function(e){var t=e.gridItems;return Object(d.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-4",children:t})},L=[{title:"Personal Portfolio",description:"The very website you currently find yourself on.",thumb:n.p+"static/media/personal-portfolio-thumbnail.95ef0177.png",techStack:"ReactJS, styled-components, tailwindCSS",link:"https://jiripohanka.github.io/portfolio-website/",repo:"https://github.com/JiriPohanka/portfolio-website"},{title:"To Do list",description:"Every beginner needs to build their own to-do list app, right? I built mine following the design provided by FrontEnd Mentor.",thumb:n.p+"static/media/todolist-thumbnail.ab1bc4b6.png",techStack:"ReactJS, react-beautiful-dnd, CSS3",link:"https://jiripohanka.github.io/react-todolist/",repo:"https://github.com/JiriPohanka/react-todolist"},{title:"Bookmarx",description:"Ever wondered what to do about those pesky browser tabs you cannot read right now but aren't ready to close just yet either?",thumb:n.p+"static/media/bookmarx-thumbnail.dadfe93f.png",techStack:"ReactJS, tailwindCSS",link:"https://jiripohanka.github.io/bookmarx/",repo:"https://github.com/JiriPohanka/bookmarx"}],B=n(10),T=s.c.div((function(e){var t=e.theme;return"display: flex;\n    flex-direction: column;\n    position: absolute;\n    background-color: ".concat(t.projectCard.bgrCol,";\n    opacity: 0;\n    &:hover {\n        opacity: 1;\n    }\n    ")})),V=s.c.h3((function(e){e.theme;return"font-weight: 400;\n    font-size: 1.5rem;\n    "})),_=s.c.p(O||(O=Object(B.a)(["\n    font-size: 0.9rem;\n    font-weight: 300;\n    "]))),A=s.c.p(w||(w=Object(B.a)(["\n    font-size: 0.9rem;\n    "]))),Y=function(e){e.mobileOn;var t=e.projectItem;return Object(d.jsxs)("div",{className:"transform transform-duration-500 flex rounded relative overflow-hidden hover:scale-110",children:[Object(d.jsx)("img",{className:"object-cover",src:t.thumb}),Object(d.jsxs)(T,{className:"items-start justify-center h-full w-full transition-all duration-500 p-4 cursor-pointer",children:[Object(d.jsx)(V,{children:t.title}),Object(d.jsx)(_,{children:t.description}),Object(d.jsx)(A,{children:t.techStack})]})]})},G=n(5),q=(n(29),s.c.h3((function(e){var t=e.theme;return"color: ".concat(t.section.fontColPrimary,";\n    line-height: 2;\n    font-weight: 500;\n    padding-top: 1rem;\n    text-align: center;\n")}))),X=s.c.p((function(e){var t=e.theme;return"color: ".concat(t.section.fontColPrimary,";\n    line-height: 2;\n    font-size: 90%;\n    max-width: 80%;\n    text-align: center;\n")})),U=function(e){var t=e.items;return Object(d.jsxs)(G.c,{naturalSlideWidth:100,naturalSlideHeight:120,totalSlides:t.length,className:"relative",children:[Object(d.jsx)(G.e,{className:"rounded z-10",children:t.map((function(e,t){return Object(d.jsx)(G.d,{index:t,children:Object(d.jsxs)("div",{className:"flex flex-col items-center",children:[Object(d.jsx)("img",{className:"object-cover",src:e.thumb}),Object(d.jsx)(q,{children:e.title}),Object(d.jsx)(X,{children:e.description}),Object(d.jsxs)("div",{className:"flex my-4",children:[Object(d.jsx)("a",{className:"transform transition-all duration-300 px-4 py-2 inline-block rounded-lg border mr-2 bg-gray-200 hover:bg-cyan-300 hover:border-cyan-800",href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Live preview"}),Object(d.jsx)("a",{className:"transform transition-all duration-300 px-4 py-2 inline-block rounded-lg border mr-2 bg-gray-200 hover:bg-cyan-300 hover:border-cyan-800",href:e.repo,target:"_blank",rel:"noopener noreferrer",children:"Github repo"})]})]})},t)}))}),Object(d.jsx)("div",{className:"animate-fadeIn absolute w-full h-full top-0 z-0",children:Object(d.jsxs)("div",{className:"absolute flex top-32 w-full",children:[Object(d.jsx)(G.a,{className:"mr-auto -ml-8 rounded-full bg-transparent hover:bg-gray-200 h-16 w-16 flex justify-center items-center",children:Object(d.jsx)("div",{className:"-ml-6",children:"<"})}),Object(d.jsx)(G.b,{className:"ml-auto -mr-8 rounded-full bg-transparent hover:bg-gray-200 h-16 w-16 flex justify-center items-center",children:Object(d.jsx)("div",{className:"-mr-6",children:">"})})]})})]})},K=function(e){var t=C.ids,n=e.activeSection,c=e.observer,o=e.mobileOn,i=Object(r.useRef)();Object(r.useEffect)((function(){c.observe(i.current)}),[n,c]);var a=Object(d.jsx)(d.Fragment,{children:L.map((function(e,t){return Object(d.jsx)(Y,{mobileOn:o,projectItem:e},t)}))});console.log(a);var l=Object(d.jsx)(F,{gridItems:a}),s=Object(d.jsx)(U,{items:L});return Object(d.jsxs)(N,{activeSection:n,id:"".concat(t.portfolioSec),className:"min-h-screen",ref:i,children:[Object(d.jsx)(W,{children:"Porfolio"}),Object(d.jsx)("div",{className:"flex justify-center text-center max-w-80 leading-relaxed mb-4",children:Object(d.jsx)("p",{children:"I've only included projects that I consider at least somewhat presentable. During my learning journey so far, I've worked on many more apps and projects but usually didn't feel the need to finish them as it would simply be a waste of time."})}),Object(d.jsx)("div",{className:"max-w-80 w-full",children:o?s:l})]})},Q=["title","titleId"];function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ee(e,t){var n=e.title,c=e.titleId,o=$(e,Q);return r.createElement("svg",Z({height:"67px",id:"Layer_1",style:{enableBackground:"new 0 0 67 67"},viewBox:"0 0 67 67",width:"67px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,r.createElement("path",{d:"M20.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.123,3.342,0.769,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C19.906,31.83,20.102,33.292,20.543,34.568z M3,4h60v60H3V4z",fill:"current",style:{fillRule:"evenodd",clipRule:"evenodd"}}))}var te=r.forwardRef(ee),ne=(n.p,["title","titleId"]);function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function oe(e,t){var n=e.title,c=e.titleId,o=ce(e,ne);return r.createElement("svg",re({height:"67px",id:"Layer_1",style:{enableBackground:"new 0 0 67 67"},viewBox:"0 0 67 67",width:"67px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,r.createElement("path",{d:"M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M25.354,48.137V27.71  h-6.789v20.427H25.354z M3,4h60v60H3V4z",fill:"current",style:{fillRule:"evenodd",clipRule:"evenodd"}}))}var ie=r.forwardRef(oe),ae=(n.p,function(e){var t=C.ids,n=e.activeSection,c=e.observer,o=Object(r.useRef)(),i=Object(r.useContext)(s.a);return Object(r.useEffect)((function(){c.observe(o.current)}),[n,c]),Object(d.jsxs)(N,{activeSection:n,ref:o,id:"".concat(t.contactSec),className:"h-screen",children:[Object(d.jsx)(W,{children:"Contact me"}),Object(d.jsx)("div",{className:"flex justify-center text-center max-w-55 leading-relaxed mb-4",children:Object(d.jsx)("p",{children:"Looking for an aspiring front-end developer? Check out what I'm up to on my github and hit me up on linkedin."})}),Object(d.jsxs)("div",{className:"flex mt-2",children:[Object(d.jsx)("a",{className:"transform transition-all duration-5OO hover:-translate-y-2",href:"https://github.com/jiripohanka",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(te,{fill:i.section.fontColPrimary})}),Object(d.jsx)("a",{className:"transform transition-all duration-5OO hover:-translate-y-2",href:"https://www.linkedin.com/in/jiripohanka/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(ie,{fill:i.section.fontColPrimary})})]}),Object(d.jsx)("div",{className:"absolute bottom-5",children:Object(d.jsx)(P,{direction:"up",link:t.welcomeSec})})]})}),le={backgroundWrap:{0:"bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200",1:"bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200",2:"bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-200",3:"bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"},projectCard:{bgrCol:"white"},header:{fontColor:{primary:"#121212",secondary:"#33333"},wrap:{logoWrap:{backgroundColor:"rgba(0, 0, 0, 0)"},toggleWrap:{backgroundColor:"rgba(0, 0, 0, 0)"}},nav:{bgrColorActive:"bg-transparent font-bold hover:bg-transparent",bgrColor:"bg-transparent hover:bg-gray-300"},mobileNav:{bgrCol:"bg-gray-200"}},section:{bgrColor:"transparent",fontColPrimary:"#131313"},h1:{fontSize:"2.25rem",lineHeight:"2.5rem"}},se={backgroundWrap:{0:"bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900",1:"bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900",2:"bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900",3:"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"},projectCard:{bgrCol:"#353535"},header:{fontColor:{primary:"#dddddd",secondary:"#d8d8d8"},wrap:{logoWrap:{backgroundColor:"rgba(0, 0, 0, 0)"},toggleWrap:{backgroundColor:"rgba(0, 0, 0, 0)"}},nav:{bgrColorActive:"bg-transparent font-bold hover:bg-transparent",bgrColor:"bg-transparent hover:bg-gray-300"},mobileNav:{bgrCol:"bg-gray-800"}},section:{bgrColor:"transparent",fontColPrimary:"#ddd"},h1:{fontSize:"2.25rem",lineHeight:"2.5rem"}},de=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(window.innerWidth<768),i=Object(l.a)(o,2),b=i[0],h=i[1];Object(r.useEffect)((function(){window.addEventListener("resize",(function(){return h((function(){return window.innerWidth<768}))}))}),[]);var f=Object(r.useState)(!1),m=Object(l.a)(f,2),j=m[0],p=m[1],g=j?se:le,v=new IntersectionObserver((function(e){var t={},n=C.ids;t[n.welcomeSec]=0,t[n.techStackSec]=1,t[n.portfolioSec]=2,t[n.contactSec]=3;var r,o=Object(a.a)(e);try{var i=function(){var e=r.value;e.isIntersecting&&c((function(){return t[e.target.id]}))};for(o.s();!(r=o.n()).done;)i()}catch(l){o.e(l)}finally{o.f()}}),{threshold:[.6]});return Object(d.jsxs)(s.b,{theme:g,children:[Object(d.jsx)(u,{activeSection:n}),Object(d.jsx)(S,{mobileOn:b,activeSection:n,setActiveSection:c,darkMode:j,setDarkMode:p}),Object(d.jsx)(D,{mobileOn:b,observer:v,activeSection:n}),Object(d.jsx)(H,{mobileOn:b,observer:v,activeSection:n}),Object(d.jsx)(K,{mobileOn:b,observer:v,activeSection:n}),Object(d.jsx)(ae,{mobileOn:b,observer:v,activeSection:n})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(de,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.eab7ca9f.chunk.js.map