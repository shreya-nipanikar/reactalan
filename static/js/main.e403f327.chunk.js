(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(6),n=c.n(s),r=(c(13),c(8)),d=c(5),m=(c(14),c(7)),l=c.n(m),o=(c(15),c(0)),j=function(e){return Object(o.jsx)("div",{className:"col-md-4 col-10 mx-auto my-4",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"card-img-top",src:e.imgsrc,alt:"Card image cap"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.title}),Object(o.jsxs)("p",{className:"card-text",children:["$",e.price," ",e.category]}),Object(o.jsx)("a",{href:"#",className:"btn btn-primary",onClick:e.btn,children:"Add to Cart"})]})]})})},u=(c(17),function(e){return Object(o.jsx)("div",{className:"col-md-3 col-10 mx-auto mb-5 mt-5",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item list-group-item-action active",children:"You selected"}),Object(o.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Item: ",e.menuname]}),Object(o.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Price: ",e.price]}),Object(o.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Type: ",e.category]})]})})}),b=[{image:c.p+"static/media/burger.c1f9a96d.jpg"},{image:c.p+"static/media/pizza.9bb0f762.jpg"},{image:c.p+"static/media/pasta.67380e55.jpg"},{image:c.p+"static/media/maggi.49952444.jpg"},{image:c.p+"static/media/tomato.14a3b39b.jpg"},{image:c.p+"static/media/lasagna.bfd62669.jpg"}];var g=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)([]),n=Object(d.a)(s,2),m=n[0],g=n[1];Object(a.useEffect)((function(){l()({key:"d1563df44f644d402e28f447289aa9092e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){"getMenu"===e.command?g(e.data):"addToCart"===e.command&&p(e.data)}})}),[]);var p=function(e){i((function(t){return[].concat(Object(r.a)(t),[e])}))};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"App mt-4",children:[Object(o.jsx)("h1",{children:"Shopping Cart With Alan"}),Object(o.jsx)("h6",{children:"(Say Show menu to get started)"}),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-10 mx-auto my-4",children:Object(o.jsx)("div",{className:"row gy-3",children:m.map((function(e,t){var c=b[t];return Object(o.jsx)(j,{imgsrc:c.image,title:e.name,price:e.price,category:e.category,btn:function(){return p(e)}},e.name)}))})})})}),Object(o.jsx)("h1",{children:"Your Cart"}),Object(o.jsx)("h6",{children:"(Say add burger to cart)"}),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-10 mx-auto",children:Object(o.jsx)("div",{className:"row gy-4",children:c.map((function(e){return Object(o.jsx)(u,{menuname:e.name,price:e.price,category:e.category})}))})})})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.e403f327.chunk.js.map