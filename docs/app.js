/* ==========================================================================
   ¿TODOS PUEDEN GANAR? — FÓRMULA 1 EN NÚMEROS
   JavaScript Vanilla Autocontenido (0 dependencias externas)
   ========================================================================== */

(function () {
  'use strict';

  function globalRestoreScrollAndHideIntro() {
    var docEl = document.documentElement;
    var body = document.body;
    if (docEl) {
      docEl.classList.add('intro-done');
      docEl.style.setProperty('overflow-x', 'hidden');
      docEl.style.setProperty('overflow-y', 'auto', 'important');
      docEl.style.setProperty('height', 'auto', 'important');
    }
    if (body) {
      body.classList.add('intro-done');
      body.style.setProperty('overflow-x', 'hidden');
      body.style.setProperty('overflow-y', 'auto', 'important');
      body.style.setProperty('height', 'auto', 'important');
    }
    var overlay = document.getElementById('intro-overlay');
    if (overlay) {
      overlay.classList.add('is-hidden');
      overlay.style.setProperty('display', 'none', 'important');
      overlay.style.setProperty('pointer-events', 'none', 'important');
    }
  }

  // Salvaguarda incondicional de 3.8s independiente del ciclo de carga del DOM
  setTimeout(globalRestoreScrollAndHideIntro, 3800);

  // Restaura scroll e intro si el navegador móvil restaura desde bfcache tras recargar/volver
  window.addEventListener('pageshow', function (event) {
    if (event && event.persisted) {
      globalRestoreScrollAndHideIntro();
    }
  });

  function initWebstory() {

  /* ------------------------------------------------------------------------
     1. SVG HELPERS (Monoplaza F1 y Logos Oficiales)
     ------------------------------------------------------------------------ */
  function createCarSvg(color, accent, rotateRight) {
    var styleAttr = rotateRight ? ' style="transform:rotate(90deg)"' : '';
    return (
      '<svg viewBox="0 0 160 360" aria-hidden="true"' + styleAttr + '>' +
      '<path d="M16 58 L80 34 L144 58 L148 76 L80 62 L12 76 Z" fill="' + color + '" stroke="' + accent + '" stroke-width="1.8"/>' +
      '<path d="M22 64 L70 46 M90 46 L138 64" stroke="' + accent + '" stroke-width="2.2" opacity="0.9"/>' +
      '<path d="M20 71 L74 55 M86 55 L140 71" stroke="#111111" stroke-width="2.4" opacity="0.85"/>' +
      '<rect x="11" y="54" width="6" height="30" rx="1.5" fill="#151515" stroke="' + accent + '" stroke-width="1.2"/>' +
      '<rect x="143" y="54" width="6" height="30" rx="1.5" fill="#151515" stroke="' + accent + '" stroke-width="1.2"/>' +
      '<path d="M68 38 L92 38 L96 130 L64 130 Z" fill="' + color + '" stroke="' + accent + '" stroke-width="1.6"/>' +
      '<path d="M74 52 L86 52 L87 112 L73 112 Z" fill="' + accent + '" opacity="0.22"/>' +
      '<rect x="75" y="42" width="10" height="4" fill="#111111"/>' +
      '<path d="M36 96 L65 104 M36 118 L66 113 M124 96 L95 104 M124 118 L94 113" stroke="#D9D9D9" stroke-width="3.2" stroke-linecap="round"/>' +
      '<rect x="13" y="82" width="24" height="54" rx="6" fill="#101010" stroke="#323232" stroke-width="1.8"/>' +
      '<rect x="123" y="82" width="24" height="54" rx="6" fill="#101010" stroke="#323232" stroke-width="1.8"/>' +
      '<rect x="15" y="88" width="20" height="42" rx="4" fill="none" stroke="#E21E20" stroke-width="2.2"/>' +
      '<rect x="125" y="88" width="20" height="42" rx="4" fill="none" stroke="#E21E20" stroke-width="2.2"/>' +
      '<path d="M38 136 L122 136 L128 274 L32 274 Z" fill="#131313" stroke="#2D2D2D" stroke-width="1.8"/>' +
      '<path d="M38 148 L48 148 L45 256 L35 256 Z" fill="' + accent + '" opacity="0.18"/>' +
      '<path d="M122 148 L112 148 L115 256 L125 256 Z" fill="' + accent + '" opacity="0.18"/>' +
      '<path d="M62 126 L98 126 L120 158 L114 252 L92 294 L68 294 L46 252 L40 158 Z" fill="' + color + '" stroke="' + accent + '" stroke-width="1.8"/>' +
      '<path d="M44 162 L60 156 L58 182 L46 182 Z" fill="#080808"/>' +
      '<path d="M116 162 L100 156 L102 182 L114 182 Z" fill="#080808"/>' +
      '<path d="M52 192 L58 242 M108 192 L102 242" stroke="' + accent + '" stroke-width="3" opacity="0.88" stroke-linecap="round"/>' +
      '<ellipse cx="80" cy="192" rx="12" ry="20" fill="#080808" stroke="' + accent + '" stroke-width="1.4"/>' +
      '<circle cx="80" cy="196" r="8.5" fill="' + accent + '"/>' +
      '<path d="M73 192 Q80 186 87 192" stroke="#111111" stroke-width="3" fill="none"/>' +
      '<path d="M68 198 Q68 170 80 164 Q92 170 92 198" fill="none" stroke="#D9D9D9" stroke-width="3.4" stroke-linecap="round"/>' +
      '<line x1="80" y1="164" x2="80" y2="177" stroke="#D9D9D9" stroke-width="3.4"/>' +
      '<path d="M73 212 L87 212 L84 226 L76 226 Z" fill="#090909" stroke="' + accent + '" stroke-width="1.2"/>' +
      '<path d="M78 226 L82 226 L81 292 L79 292 Z" fill="' + accent + '" opacity="0.9"/>' +
      '<path d="M38 264 L66 270 M38 288 L68 281 M122 264 L94 270 M122 288 L92 281" stroke="#D9D9D9" stroke-width="3.2" stroke-linecap="round"/>' +
      '<rect x="10" y="250" width="28" height="62" rx="7" fill="#101010" stroke="#323232" stroke-width="1.8"/>' +
      '<rect x="122" y="250" width="28" height="62" rx="7" fill="#101010" stroke="#323232" stroke-width="1.8"/>' +
      '<rect x="13" y="257" width="22" height="48" rx="5" fill="none" stroke="#E21E20" stroke-width="2.6"/>' +
      '<rect x="125" y="257" width="22" height="48" rx="5" fill="none" stroke="#E21E20" stroke-width="2.6"/>' +
      '<rect x="30" y="314" width="100" height="24" rx="2.5" fill="' + color + '" stroke="' + accent + '" stroke-width="1.8"/>' +
      '<line x1="36" y1="324" x2="124" y2="324" stroke="#111111" stroke-width="3"/>' +
      '<line x1="36" y1="330" x2="124" y2="330" stroke="' + accent + '" stroke-width="2"/>' +
      '<rect x="76" y="338" width="8" height="5" rx="1.5" fill="#FF3B30"/>' +
      '</svg>'
    );
  }

  var TEAM_BASE64_ICONS = {
    mercedes: 'data:image/png;base64,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',
    ferrari: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABBCAYAAACNQMdtAAAFdUlEQVR4nM2bS4gdRRSGv76ZuRnjIwomaAzRgCKKyqBGF0GjroKK4EJEUJS40YCuRHETNQEX4sKMCzeKMQsXoriIIgoKA1EQlBhU8BWM7+gEF/Exzsx9uKhT6bo11dVV3V3T94em61adOn3+Oqerq073zYbT1xGBDOgAE3LOpJwBXTmvkraunFeJDFIeWDqH0m/JqOsY+jX6wLzI9aQ8kP4DOfryWx/LMOGq9JBFFPcMctrgofxeFL09YFLktWzfINmRc0/ktYEdoz0z2vqi+z/pMzD02USdZGMJa2KatElSl3ti6BLKw4tGv8yQs728IP0w2ibIB8z0Xt84bLLgIauVxkAr04brQ5MxvWO2FRmhQ9yWGaIGa1Js1FHTlbYFh04vUY1OuYgT9ohqD/TIR38B5ekFMXhJzrpdR4T2oP6tdQyAC6R+HhXKx4B9wHrgV2CDYUMQYj1sw/a4xgC3ERl5KA4YHfDMaB+gvP+ZtM0C26R8BPhNyuZEF4SqHrZhett3mN4cWIdd1wPuF72aLMCjcr4G+IMI70JzhG34jNDE7AHooTzWAd6X+pc8ep4AVscaVjek62Ar8DTwHjAHPAucFtH/FtR9beJU4F9fp7YIHwKmpRy18inBYeAin0CqkPbhCnKyTWEWOIUSstAO4cMJdG5DPbo2lQm2QTglfgAu9QmsNOGU19st5y/bMsCFAXDUqvuiId27gNtRy89CtBHSm4E15Cury41yXbyJerwVoq17eL6gXu+rH6yg80Y5P4xaljrR5sKjCEPghQr9jhIQJeM2S59HhQ2B4PsQoXEiPA38XFPHZJnAuBD+CLXcrIq9cl4sExyHezhqe1eAz4E3gJ/KBNsm3ARZgBfJ00petBXS+2iO7CPADaH6ssi8tAvbgXcI2IsKmiJqInjRUiekM0bTrf+UXHgOOLvG9RpB1ZDusjy3DMXeG5KG7EPA6TEdqhC+DJV6DcE9pAlhjeeBv2M6xIb0WahHgA86+f4B+fo2Bc4A/ortFOvhPwPlhqQhe6tR9m70LRxC2TQZQzhlaIbiLeK3kQdQy9bbgKVQwm2Tfdf6nQEfB/TbRR4VB4CrQgj7kuErhRmjHDor3ww8JeUOcBfwSRnhtcCOONtqIwM2WnV7UVtHUJNVGa4E3pbyZlQW5FVgpmyl1UYo63t0K3DQqj+X/EWaD0V2Zz4PH/S0pcIxo/whyyeoOmQnoPixNIUaYRceA64NuHAVzDjqYhJ8azxtPWBT0cKjKMkG8Ezgxatgfc3+T5a0/xi78NhvlJtIq9q4r2Z/36Mqg/iV1r0uJQ3izJr9Py2oP2mni3DRTb/FoywDrg63Kxl6jroRp9j38AbcmKJ8h+S62Epjp/V7WQTaHv7FoWQ/YdvBfrlIEL6t0fdxo+y83UzCzxUo2RN4sZBnZAgubEiPEyZhMy+82yj7HlEmQreOIaiyfo9O4ukO3zE6yjEzcZNL0XXA8UDZKUYdczHwjUtQe9g01CQbslA3YW/j6mAuQtaOQidZUIRd262NqBk8NoWyPVK+DCERY6ecvBHZAU5YdeejZuumZt26mPW03YRKKmqU3n72c7hL9deVGuZ30U3g+oJ62/tBc00HuJP8Y+y6ZMGdr24S9gfgq4mYWDvAazS/0W96je360v0cuU7pK1ITKV+mrU2g8yvytfvvVRSkJHwC9Xysi7tRc8se4JK6ylK/H15Xsd9xR99XatoCpH8/XPpG3sLrqHB1DdSR+uakJRwzEb6MInpHIltOou2PWnaiiK5Y7ruNvwCAes2ZUe0DtFpIMWmVDWKK5F8wUnj464L6LbRMFtJ42JWxaJ2oRupJawdjRBbSLjzGiqhGCg8/wJiSBfgfDuhCqCVCEbUAAAAASUVORK5CYII=',
    redbull: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA9CAYAAACunUfbAAAGqElEQVR4nO2ce4hVRRzHP3fdXVdL23R3MyOhWDSKFIzKDcVYqLAyMsjILMICs+i/ikr8R+lhEhFSiSQJWWEZRQUVUdGD0qKHG723F1SYWlzCTV3Xvf3xO2fPnHPPY865c15yv7CcuWdmfvM78535zW9eW1m0usYxjgpQ84TVJ0p8IdGatwIZoOYT9j4LjZa8FWgiGk2SSoAmSSVAk6QSoElSCdAkqQRoklQCNEkqAZoklQBNkkqAJkklwLFC0rXIOlzY38rctGsQZSWpGzcBz2rk2eTJMzE17QyjbCQtQCp4rwFZQ5ascQZkpYqykHQyUqHv+8RdCrQje0Nhf6cCVZ/8IxR8y6IMJNWAPz3vluNU/uvAEQ05vwMnWnlagAM+5axoSNOUUHSSvC18GVLJzxiQO8mStV95v8WnzNxR5J1Zb2VVfFM1jm7EXB72lJ1WebFRxJ6knkkAuJ30K2zYp4zC9Kgi9qRRJXw1sCPDsr0NpBA9qmg9Sa2geWRLkI0K8L3y+4EcdHChSCTdoYTvBXblpQhwhhK+G5iclyJQLJI2KOHcWy9uM/dgblpQHJLmAIescJHGSZuoVcBLeSmRN0njkXHoS6DDend9btrUQx0jr7R+n5e1EnmSVMPpPSqesuK6s1XHhbUEu+C7QuJSQV6mRecj9wLbyLZnTQH+1kybmXuedU+ytwl0sdxKPz0ddVyooU+QmqcGdJlXx0FWJE2kMRPxR4P5wzDTgOx9wIABXbxYDNRUc6deDzEJk5Vr2sRcArxhSNbZiH4tJP/mLoRwF/x6krp7uTZhYQC9pNP6Tcm8DHMEqRhFdGxLkLeOIIg2d2uA02IWZK9//RgzXxyYIOo1AzLCMAw8bkBOm0pSkBmJsyTyNe4F0jTRyHialQu9KmFZD+Fsao54P9SOuFN5t1tTcA04M4FCSXE0w7IahT18dESkm2Q970JphEGt0V5HizpRM4v4bnXeeDvHsg8SXlcHcEzkWCMMchxAesXBEIE14LsYCqaBCQny9BvXIj5qwAkBcbcBO63wCqgnySboFuDbkALy6Dn3+bxbFFNGu8+75xPoYgJVguuxz3puAah4/kVA1FypCGbtQ2C+8jvOvKkI+vvB7xvGuFB7km06qgGCivKB86OT+CLJvCUreOv2A+v5E7jN3Yj17PRk6PQRUiScr5nuv1S1aBzqIoLdEHvBvQp+xJOhLNiJnskr0maiDsbcda/jkMRbSgvVGGlfiYjfHkPWNNzzmRkx8ibFKdQfix47B+gl6ZCSaLwSzgotSpkbY+RbTLCebcDSGLL2IBVk65HF+YahsMgwEzBsWBEdjOJU9poG8qpo5Dt2A7MbyK+L0JsduutfI9FJtLCZ6AXbqcRfl9tjPZd73g/GlGNjifUMIuhFnJ7WikxMZwI3AOuBl5E6O4TeEFINi9StjKDZsQr1lsI65OxaB247uxL4FXg0RM4gsFCjvHOU8DTEy9vmSdOLex2yC/hGQzaEO0/vKOGjwL/Iqv/TyDm9JYiZneApPwihTo13MhsGnYS641eUrMsJ3kroB95VfrcijcF7lUUHM4DffN5PRX8rfTVwf0h8DTkRO0tDlm/9RZEU1xU3tVLhPZPdQ8CGmCGMwzHpHdbv0MHcg7DGaX9Hlfo5qJasMHN3nIZAFaYG2A3IzT7VTKZJEIjJUl3fj4FPNfNG9RC7jjuVd1uB65DrpVcBTypxc4IE+CGO+XgP+Cokfq6GjH6kkn5BbvZ9FqN8k9iONLhzLX3aCT5kUgF+iJBn38tVL6vdiFyEexU4CbgH58SRvaU/tozltwreg/tWQRTagQsj0nyBfJCf/bedC3uc2WQ95+JuYVngYZw5lb0jfQRp3RXcR7euiSF3FDnsqVqHFsT5WQq8hfTmHYgTdBayNHQFuMekT5DWE4V29O6oBmEB4h1NJni/qgf4S/mdxYR6Hw4JfTh7OllgHbK2uBOpm0Hklsl04AWbpKiBfYTsV5G9p0lnE25Sk0J1GgBOR0xu1rB9gI3ARcCbwCNYB1GiHITN5LPM/w/u+cMA5s+If46boOPJhyAQb3II2Y1diOjVB3S2EuwgtGFupSEpbK9rADl8CM4/2rgA8cLiYgoy/qne6DLguYQ6poGfkd1xQAav/Uhv2aokqpA/QSpmU7+88hHO/kvUNnovYj7s8942QeuRby0SQXWIs+JQFIwHHgNuakDGE8CtZtRJH3lfIkuCw8DNOK7sPKInnlXgYiVPaQiC8u1W+mEX9bfvWhHTVqYDlIH4HwyoUUGDrEC9AAAAAElFTkSuQmCC',
    mclaren: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAmCAYAAABagbwLAAACaklEQVR4nO3aT6gNURzA8c885Kn3Fl6IePVKPRusUP5kYUtWbOxYyUJZWChhoV7ZWCjFwk5kK2EpWYidkkhSb/EUKZEo71rMne513TH3z5yZefN8a2pmzrnn9+t7f+dM98yNGjMWGyuwGYdxCkv7/PxpXMavbo1RjYXuwkOMBY6zFh+Si5HAwYpiCjfRaDueCC8T5prx0H+5V4lL4ulXFRqIFpLQbXhWdhIZnK/6lD+mNYWrLhMuVK1CI9zBobITGZSqCD2Au2UnkQdlCt2LRyXGD0IZQr9jtIS4RTBb1ENpj9bDpa4yYTK00AdiiY8Dx6kMIab8FN4FGLfqROT70/OeuBoXo8xryUkeFdrI7lJ7jicng1boMq2HzGInar8YpEJDSbyFl83jGzZiNw4qZtdoELZ33uhV6AQ+DRF4BjfwVn9fyNV/tK3Ea6waIq9huIjnnTezhI7jS48BJjHbZ1LD8Bmr265HpOyiB+AkrnRrSFtDz4krKU3mR2wRrx/JUaTMbsw389gaOM5ZKTL5u0I34VWXfnNYl2NSIXkhFhtirT8iXutTSSp0ZzOBROZ9rNGqvoUis50lOY+3T4ZM4gqdxvXmeVFrUBHMi39s7M9hrGm86aVjnd96Jgw79cfxtdfOVdlgripRdpc/qfo7pTLpWyb/hXZj1oAy+T/lOxnFj2EGqLvQfmbgwFU5aMCFyPse+pyRk0zqX6EbMtrHxDtbuVFnoRMZ7blVZTt1nvJp241HBZJJfSt0fcr9YCIT6lqhnVuJJxQgk3pWaOdb10JEJtStQneI/xcAyxUsk/oJfYrbYpE/y0jgN5KcWxBhZEpmAAAAAElFTkSuQmCC',
    renault: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA7CAYAAADvlQMcAAAD1UlEQVR4nM2av48NURTHP+9ZP9b6XYlER4Io2E78SDRahURBpaHQKCj8AyqRaIQeiZCotBqFio0ssSoFokT8yAbzRvHu2Xf2vjsz59w3s/FNJvfO3HPu/cx9Z+6Pmdcr3x8iUi8cAFMhvwroR+lUsFkdbNZEdfxV9RQh7Yd8GcqlbBDSv6pcrg+CXRmOpYZjlaHBIqRlAB2EVCoUuD7wR91QEfJSttRgSAfqKFQ9A5bDlpEvVdACXEbXBKCIwFCw4tdXvn1GvSW9mIIfRNfGYOugpUKdlxuR3pVzgZK65JeIwbX0z617tkwcSVVBp+AFWOd17Ercyi8iYSE+Ol+oenTPxm1mQcfwVTchvS9gEj5S1ov8UiESh+TE0LHim5A0htc3pctgPAxMwJAPXSUNEAPHdm5YUdvQWvIw9qJjENm4VfWEty0BXcVwMpJh8L+DlllNZrnfwK9w/GYUIoeD/XprxV1BzxvtFoDnwAzw01p5F9A7gP1G233AOuBHOP9icWr7QewBnxy2AK/UtS0Wx7Z7etBsAgx7GGArsCsqu9vk3EssTXNlHQkWgekGn3hcX6a2etozdDUBA1yrq6AN6AsO27UhPdVgd7WucFLozcBto+0JhuMzwCOD/cmqgklj2hMWOk7/YBu5krE9SU/nAgNsM/odTF3MhbbOeJDure9G35epiznQx7HPeLMZ9ccaY8yBfmq0+wHM1ZRbb7yIL3ihPXG8saH8jaOuaX3igW4T2Ktf+sQKfdPRwCyjVVuTjjnqXZJlnJ4FXnjqdDK4h05LT3cJnKUm6EkmEKv2OGxLqIf2AF9y2MZ653WoimnvLnnSsPC0dznV00ecDa5IHCtdT0E/c1TQBrD73UcM7angtLexhHJe1vQ0tKeCr8DDjAa13mb4LBunrUtF0daMBrXm8Q11oEKxH5w35Dhnag77Ci/ZZh/7Hg/ghrOxWFeBA06fsU6ScdoazwvAXmejou3AZ6dPK3tEbxyKNtESMIygr2TCWPXNaV/73Ohp3Boiaxi+ArCq9SVBzh7xqMO2kzWMhra+9r1ntOts0aWhx3a9FdpusOl0ldjFl4DOl7UxdO6QJvIuB7Jm1xjauouYTlw7zwotB3LDI576dwN3HP4TrV9S2634q6ql4ZXYAC8p1dMWgLMhnTHai1rZmlWFx+sanwfA/ZC3vkmCFveSdW+Ymr48WXv4I7DTA9Uk74PoBV6gZWCoh34cnXuBL5K/9q5VHfQZlfcC3wpHJ6pbJC2G1Au8DeOH+Vw1rez0E38QOAd8YLimLhj+3eFbSAvgCaN/Nnamfw+kA+M4EIw9AAAAAElFTkSuQmCC',
    brawngp: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAdCAYAAADmbEE9AAAB50lEQVR4nNWXPUvDUBiFTxuLIqiDOLi5iIuuIl2kbvoTBMFdEcTRTcTJQVA3wUH8CSIu0sXJVUFcdJIufoCCWIs63F6padPe9yP3xgcCSXjPe8JJ7kdyZ89TyADfxPp+AK8efAAAeY5ImTWGxltAQDZC2ibWb6XyFMkUQofEebvrnnwstdAhUVlmaHICvxwQdrhx3u4+Q/PF0ABAzZ6ECqnA0AwyNNMMjeX3GUOFVGVonhiaMkPTxH+ZkzjzSknLL0RIkpWGwjlT9xa/4TukRYZmlqGZYWgsffEbvkM6ZGhOYb4+ylGEGTKcowmfIVGG2ZDQa1Oo/4OvkLod6yZh3uajwEsyYbeky6FmA8AAzLJdBRDBbLRe6tef9boPmC8ggvlLt/fvARw4+JQAXNbPuRtAQGnZb6RTSFor0TiAa8faYYHPqkCbSLvhNqbo4xoQADwIfHYE2kTahXSj5EHZCBY9+ZBICulEqf8Vsf5CyVeVpJDmlPpPEGr3BD69Am1HWoWkNVmvEOuXBF7vAm1H4iGNKPbeJdQuCHwigdaJeEh3Sn2pG7oj8H8jJHsqJxpDGlXsW1bsFZzGkG6Veko2g5nEhnSs2LOi2CsT2JDmlfqlPomGIA/d5TP1STQEeQA9Sr1S+y0IzQ9Liko9TTdo2gAAAABJRU5ErkJggg=='
  };

  function getTeamLogoSvg(teamId) {
    if (TEAM_BASE64_ICONS[teamId]) {
      return '<img src="' + TEAM_BASE64_ICONS[teamId] + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block;" />';
    }
    var icons = {
      williams: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 11h5.5l4.2 14 4.3-14h4l4.3 14 4.2-14H36L28.5 30h-4.4l-4.1-11.5L15.9 30h-4.4L4 11z" fill="#00A0DE"/></svg>',
      lotus: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" fill="#004225" stroke="#FFDF39" stroke-width="2.5"/><text x="20" y="24" text-anchor="middle" fill="#FFDF39" font-size="10" font-weight="900">LOTUS</text></svg>',
      astonmartin: '<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M3 14 L22 18 L32 13 L42 18 L61 14 L52 24 L32 21 L12 24 Z" fill="#006F62" stroke="#D9D9D9" stroke-width="1.5"/><rect x="19" y="16" width="26" height="9" rx="1.5" fill="#00352F" stroke="#CEDC00" stroke-width="1.2"/><text x="32" y="23" text-anchor="middle" fill="#FDFDFD" font-size="6.5" font-weight="900" letter-spacing="0.8">ASTON</text></svg>',
      alpine: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 31 L22 7 L34 31 H27 L21.5 19 L14 31 Z" fill="#0090FF"/><path d="M12 23 H31" stroke="#FF66B2" stroke-width="3" stroke-linecap="round"/></svg>',
      haas: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="#141414" stroke="#E21E20" stroke-width="2.6"/><path d="M13 11v18M27 11v18M13 20h14" stroke="#FDFDFD" stroke-width="3.6" stroke-linecap="square"/></svg>',
      sauber: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="4" y="6" width="32" height="28" rx="4" fill="#090909" stroke="#52E252" stroke-width="2.4"/><text x="20" y="25" text-anchor="middle" fill="#52E252" font-size="15" font-weight="900">K</text></svg>',
      racingbulls: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="4" y="8" width="32" height="24" rx="4" fill="#16347A" stroke="#FDFDFD" stroke-width="1.8"/><text x="20" y="25" text-anchor="middle" fill="#FDFDFD" font-size="13" font-weight="900">RB</text></svg>',
      otras: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14" fill="#333" stroke="#D9D9D9" stroke-width="2"/><path d="M13 20h14M20 13v14" stroke="#D9D9D9" stroke-width="2.5"/></svg>'
    };
    return icons[teamId] || icons.otras;
  }

  /* ------------------------------------------------------------------------
     2. BASES DE DATOS EXACTAS (CSV & VIS_00)
     ------------------------------------------------------------------------ */
  var teamsChampions = [
    { name: 'Mercedes', color: '#00D2BE', icon: TEAM_BASE64_ICONS.mercedes, years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
    { name: 'Ferrari', color: '#FF303D', icon: TEAM_BASE64_ICONS.ferrari, years: [2000, 2001, 2002, 2003, 2004, 2007, 2008] },
    { name: 'Red Bull', color: '#497BFF', icon: TEAM_BASE64_ICONS.redbull, years: [2010, 2011, 2012, 2013, 2022, 2023] },
    { name: 'McLaren', color: '#FF8700', icon: TEAM_BASE64_ICONS.mclaren, years: [2024, 2025] },
    { name: 'Renault', color: '#FFDF39', icon: TEAM_BASE64_ICONS.renault, years: [2005, 2006] },
    { name: 'Brawn GP', color: '#B9EF38', icon: TEAM_BASE64_ICONS.brawngp, years: [2009] }
  ];

  var CHAMPION_WIN_DATA = [
    { season: 2000, totalRaces: 17, champion: 'Michael Schumacher', team: 'Ferrari', wins: 9, winPct: 52.94 },
    { season: 2001, totalRaces: 17, champion: 'Michael Schumacher', team: 'Ferrari', wins: 9, winPct: 52.94 },
    { season: 2002, totalRaces: 17, champion: 'Michael Schumacher', team: 'Ferrari', wins: 11, winPct: 64.71 },
    { season: 2003, totalRaces: 16, champion: 'Michael Schumacher', team: 'Ferrari', wins: 6, winPct: 37.50 },
    { season: 2004, totalRaces: 18, champion: 'Michael Schumacher', team: 'Ferrari', wins: 13, winPct: 72.22 },
    { season: 2005, totalRaces: 19, champion: 'Fernando Alonso', team: 'Renault', wins: 7, winPct: 36.84 },
    { season: 2006, totalRaces: 18, champion: 'Fernando Alonso', team: 'Renault', wins: 7, winPct: 38.89 },
    { season: 2007, totalRaces: 17, champion: 'Kimi Räikkönen', team: 'Ferrari', wins: 6, winPct: 35.29 },
    { season: 2008, totalRaces: 18, champion: 'Lewis Hamilton', team: 'McLaren Mercedes', wins: 5, winPct: 27.78 },
    { season: 2009, totalRaces: 17, champion: 'Jenson Button', team: 'Brawn Mercedes', wins: 6, winPct: 35.29 },
    { season: 2010, totalRaces: 19, champion: 'Sebastian Vettel', team: 'Red Bull Racing Renault', wins: 5, winPct: 26.32 },
    { season: 2011, totalRaces: 19, champion: 'Sebastian Vettel', team: 'Red Bull Racing Renault', wins: 11, winPct: 57.89 },
    { season: 2012, totalRaces: 20, champion: 'Sebastian Vettel', team: 'Red Bull Racing Renault', wins: 5, winPct: 25.00 },
    { season: 2013, totalRaces: 19, champion: 'Sebastian Vettel', team: 'Red Bull Racing Renault', wins: 13, winPct: 68.42 },
    { season: 2014, totalRaces: 19, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 11, winPct: 57.89 },
    { season: 2015, totalRaces: 19, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 10, winPct: 52.63 },
    { season: 2016, totalRaces: 21, champion: 'Nico Rosberg', team: 'Mercedes', wins: 9, winPct: 42.86 },
    { season: 2017, totalRaces: 20, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 9, winPct: 45.00 },
    { season: 2018, totalRaces: 21, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 11, winPct: 52.38 },
    { season: 2019, totalRaces: 21, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 11, winPct: 52.38 },
    { season: 2020, totalRaces: 17, champion: 'Lewis Hamilton', team: 'Mercedes', wins: 11, winPct: 64.71 },
    { season: 2021, totalRaces: 22, champion: 'Max Verstappen', team: 'Red Bull Racing Honda', wins: 10, winPct: 45.45 },
    { season: 2022, totalRaces: 22, champion: 'Max Verstappen', team: 'Red Bull Racing RBPT', wins: 15, winPct: 68.18 },
    { season: 2023, totalRaces: 22, champion: 'Max Verstappen', team: 'Red Bull Racing Honda RBPT', wins: 19, winPct: 86.36 },
    { season: 2024, totalRaces: 24, champion: 'Max Verstappen', team: 'Red Bull Racing Honda RBPT', wins: 9, winPct: 37.50 },
    { season: 2025, totalRaces: 24, champion: 'Lando Norris', team: 'McLaren', wins: 7, winPct: 29.17 }
  ];

  var FIRST_VS_SECOND_DATA = [
    { year: 2000, champion: 'Michael Schumacher', firstTeam: 'Ferrari', firstPoints: 108, secondTeam: 'Mercedes', secondPoints: 89, gap: 19 },
    { year: 2001, champion: 'Michael Schumacher', firstTeam: 'Ferrari', firstPoints: 123, secondTeam: 'Mercedes', secondPoints: 65, gap: 58 },
    { year: 2002, champion: 'Michael Schumacher', firstTeam: 'Ferrari', firstPoints: 144, secondTeam: 'Ferrari', secondPoints: 77, gap: 67 },
    { year: 2003, champion: 'Michael Schumacher', firstTeam: 'Ferrari', firstPoints: 93, secondTeam: 'Mercedes', secondPoints: 91, gap: 2 },
    { year: 2004, champion: 'Michael Schumacher', firstTeam: 'Ferrari', firstPoints: 148, secondTeam: 'Ferrari', secondPoints: 114, gap: 34 },
    { year: 2005, champion: 'Fernando Alonso', firstTeam: 'Renault', firstPoints: 133, secondTeam: 'Mercedes', secondPoints: 112, gap: 21 },
    { year: 2006, champion: 'Fernando Alonso', firstTeam: 'Renault', firstPoints: 134, secondTeam: 'Ferrari', secondPoints: 121, gap: 13 },
    { year: 2007, champion: 'Kimi Räikkönen', firstTeam: 'Ferrari', firstPoints: 110, secondTeam: 'Mercedes', secondPoints: 109, gap: 1 },
    { year: 2008, champion: 'Lewis Hamilton', firstTeam: 'McLaren', firstPoints: 98, secondTeam: 'Ferrari', secondPoints: 97, gap: 1 },
    { year: 2009, champion: 'Jenson Button', firstTeam: 'Brawn', firstPoints: 95, secondTeam: 'RBR Renault', secondPoints: 84, gap: 11 },
    { year: 2010, champion: 'Sebastian Vettel', firstTeam: 'Red Bull', firstPoints: 256, secondTeam: 'Ferrari', secondPoints: 252, gap: 4 },
    { year: 2011, champion: 'Sebastian Vettel', firstTeam: 'Red Bull', firstPoints: 392, secondTeam: 'McLaren Mercedes', secondPoints: 270, gap: 122 },
    { year: 2012, champion: 'Sebastian Vettel', firstTeam: 'Red Bull', firstPoints: 281, secondTeam: 'Ferrari', secondPoints: 278, gap: 3 },
    { year: 2013, champion: 'Sebastian Vettel', firstTeam: 'Red Bull', firstPoints: 397, secondTeam: 'Ferrari', secondPoints: 242, gap: 155 },
    { year: 2014, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 384, secondTeam: 'Mercedes', secondPoints: 317, gap: 67 },
    { year: 2015, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 381, secondTeam: 'Mercedes', secondPoints: 322, gap: 59 },
    { year: 2016, champion: 'Nico Rosberg', firstTeam: 'Mercedes', firstPoints: 385, secondTeam: 'Mercedes', secondPoints: 380, gap: 5 },
    { year: 2017, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 363, secondTeam: 'Ferrari', secondPoints: 317, gap: 46 },
    { year: 2018, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 408, secondTeam: 'Ferrari', secondPoints: 320, gap: 88 },
    { year: 2019, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 413, secondTeam: 'Mercedes', secondPoints: 326, gap: 87 },
    { year: 2020, champion: 'Lewis Hamilton', firstTeam: 'Mercedes', firstPoints: 347, secondTeam: 'Mercedes', secondPoints: 223, gap: 124 },
    { year: 2021, champion: 'Max Verstappen', firstTeam: 'Red Bull', firstPoints: 395.5, secondTeam: 'Mercedes', secondPoints: 387.5, gap: 8 },
    { year: 2022, champion: 'Max Verstappen', firstTeam: 'Red Bull', firstPoints: 454, secondTeam: 'Ferrari', secondPoints: 308, gap: 146 },
    { year: 2023, champion: 'Max Verstappen', firstTeam: 'Red Bull', firstPoints: 575, secondTeam: 'Red Bull Racing Honda RBPT', secondPoints: 285, gap: 290 },
    { year: 2024, champion: 'Max Verstappen', firstTeam: 'Red Bull', firstPoints: 437, secondTeam: 'McLaren Mercedes', secondPoints: 374, gap: 63 },
    { year: 2025, champion: 'Lando Norris', firstTeam: 'McLaren', firstPoints: 423, secondTeam: 'Red Bull Racing', secondPoints: 421, gap: 2 }
  ];

  var BUDGET_DATA = [
    { teamId: 'mercedes', team: 'Mercedes', year: 2015, budgetM: 527.6, category: 'Top 3', points: 703, costPerPointM: 0.75 },
    { teamId: 'ferrari', team: 'Ferrari', year: 2015, budgetM: 474.7, category: 'Top 3', points: 428, costPerPointM: 1.11 },
    { teamId: 'williams', team: 'Williams', year: 2015, budgetM: 217.7, category: 'Zona Media', points: 257, costPerPointM: 0.85 },
    { teamId: 'redbull', team: 'Red Bull', year: 2015, budgetM: 532.5, category: 'Top 3', points: 187, costPerPointM: 2.85 },
    { teamId: 'astonmartin', team: 'Aston Martin (Force India)', year: 2015, budgetM: 147.3, category: 'Zona Media', points: 136, costPerPointM: 1.08 },
    { teamId: 'alpine', team: 'Alpine (Lotus/Renault)', year: 2015, budgetM: 149.8, category: 'Zona Baja', points: 78, costPerPointM: 1.92 },
    { teamId: 'racingbulls', team: 'AlphaTauri (Toro Rosso)', year: 2015, budgetM: 156.1, category: 'Zona Baja', points: 67, costPerPointM: 2.33 },
    { teamId: 'sauber', team: 'Alfa Romeo (Sauber)', year: 2015, budgetM: 117.2, category: 'Zona Baja', points: 36, costPerPointM: 3.26 },
    { teamId: 'mclaren', team: 'McLaren', year: 2015, budgetM: 528.3, category: 'Zona Baja', points: 27, costPerPointM: 19.57 },
    { teamId: 'mercedes', team: 'Mercedes', year: 2016, budgetM: 352.0, category: 'Top 3', points: 765, costPerPointM: 0.46 },
    { teamId: 'redbull', team: 'Red Bull', year: 2016, budgetM: 286.2, category: 'Top 3', points: 468, costPerPointM: 0.61 },
    { teamId: 'ferrari', team: 'Ferrari', year: 2016, budgetM: 483.3, category: 'Top 3', points: 398, costPerPointM: 1.21 },
    { teamId: 'astonmartin', team: 'Aston Martin (Force India)', year: 2016, budgetM: 119.2, category: 'Zona Media', points: 173, costPerPointM: 0.69 },
    { teamId: 'williams', team: 'Williams', year: 2016, budgetM: 139.6, category: 'Zona Media', points: 138, costPerPointM: 1.01 },
    { teamId: 'mclaren', team: 'McLaren', year: 2016, budgetM: 246.4, category: 'Zona Media', points: 76, costPerPointM: 3.24 },
    { teamId: 'racingbulls', team: 'AlphaTauri (Toro Rosso)', year: 2016, budgetM: 132.8, category: 'Zona Baja', points: 63, costPerPointM: 2.11 },
    { teamId: 'haas', team: 'Haas', year: 2016, budgetM: 117.0, category: 'Zona Baja', points: 29, costPerPointM: 4.03 },
    { teamId: 'alpine', team: 'Alpine (Renault)', year: 2016, budgetM: 199.8, category: 'Zona Baja', points: 8, costPerPointM: 24.98 },
    { teamId: 'sauber', team: 'Alfa Romeo (Sauber)', year: 2016, budgetM: 126.0, category: 'Zona Baja', points: 2, costPerPointM: 63.0 },
    { teamId: 'mercedes', team: 'Mercedes', year: 2017, budgetM: 352.1, category: 'Top 3', points: 668, costPerPointM: 0.53 },
    { teamId: 'ferrari', team: 'Ferrari', year: 2017, budgetM: 295.3, category: 'Top 3', points: 522, costPerPointM: 0.57 },
    { teamId: 'redbull', team: 'Red Bull', year: 2017, budgetM: 284.0, category: 'Top 3', points: 368, costPerPointM: 0.77 },
    { teamId: 'astonmartin', team: 'Aston Martin (Force India)', year: 2017, budgetM: 117.0, category: 'Zona Media', points: 187, costPerPointM: 0.63 },
    { teamId: 'williams', team: 'Williams', year: 2017, budgetM: 136.3, category: 'Zona Media', points: 83, costPerPointM: 1.64 },
    { teamId: 'alpine', team: 'Alpine (Renault)', year: 2017, budgetM: 195.4, category: 'Zona Media', points: 57, costPerPointM: 3.43 },
    { teamId: 'racingbulls', team: 'AlphaTauri (Toro Rosso)', year: 2017, budgetM: 130.6, category: 'Zona Baja', points: 53, costPerPointM: 2.46 },
    { teamId: 'haas', team: 'Haas', year: 2017, budgetM: 130.6, category: 'Zona Baja', points: 47, costPerPointM: 2.78 },
    { teamId: 'mclaren', team: 'McLaren', year: 2017, budgetM: 240.8, category: 'Zona Baja', points: 30, costPerPointM: 8.03 },
    { teamId: 'sauber', team: 'Alfa Romeo (Sauber)', year: 2017, budgetM: 123.8, category: 'Zona Baja', points: 5, costPerPointM: 24.76 },
    { teamId: 'mercedes', team: 'Mercedes', year: 2018, budgetM: 400.0, category: 'Top 3', points: 655, costPerPointM: 0.61 },
    { teamId: 'ferrari', team: 'Ferrari', year: 2018, budgetM: 410.0, category: 'Top 3', points: 571, costPerPointM: 0.72 },
    { teamId: 'redbull', team: 'Red Bull', year: 2018, budgetM: 310.0, category: 'Top 3', points: 419, costPerPointM: 0.74 },
    { teamId: 'alpine', team: 'Alpine (Renault)', year: 2018, budgetM: 190.0, category: 'Zona Media', points: 122, costPerPointM: 1.56 },
    { teamId: 'haas', team: 'Haas', year: 2018, budgetM: 130.0, category: 'Zona Media', points: 93, costPerPointM: 1.40 },
    { teamId: 'mclaren', team: 'McLaren', year: 2018, budgetM: 220.0, category: 'Zona Media', points: 62, costPerPointM: 3.55 },
    { teamId: 'astonmartin', team: 'Aston Martin (Racing Point)', year: 2018, budgetM: 120.0, category: 'Zona Baja', points: 52, costPerPointM: 2.31 },
    { teamId: 'sauber', team: 'Alfa Romeo (Sauber)', year: 2018, budgetM: 135.0, category: 'Zona Baja', points: 48, costPerPointM: 2.81 },
    { teamId: 'racingbulls', team: 'AlphaTauri (Toro Rosso)', year: 2018, budgetM: 150.0, category: 'Zona Baja', points: 33, costPerPointM: 4.55 },
    { teamId: 'williams', team: 'Williams', year: 2018, budgetM: 150.0, category: 'Zona Baja', points: 7, costPerPointM: 21.43 },
    { teamId: 'mercedes', team: 'Mercedes', year: 2019, budgetM: 484.0, category: 'Top 3', points: 739, costPerPointM: 0.65 },
    { teamId: 'ferrari', team: 'Ferrari', year: 2019, budgetM: 463.0, category: 'Top 3', points: 504, costPerPointM: 0.92 },
    { teamId: 'redbull', team: 'Red Bull', year: 2019, budgetM: 445.0, category: 'Top 3', points: 417, costPerPointM: 1.07 },
    { teamId: 'mclaren', team: 'McLaren', year: 2019, budgetM: 269.0, category: 'Zona Media', points: 145, costPerPointM: 1.86 },
    { teamId: 'alpine', team: 'Alpine (Renault)', year: 2019, budgetM: 272.0, category: 'Zona Media', points: 91, costPerPointM: 2.99 },
    { teamId: 'racingbulls', team: 'AlphaTauri (Toro Rosso)', year: 2019, budgetM: 138.0, category: 'Zona Media', points: 85, costPerPointM: 1.62 },
    { teamId: 'astonmartin', team: 'Aston Martin (Racing Point)', year: 2019, budgetM: 188.0, category: 'Zona Baja', points: 73, costPerPointM: 2.58 },
    { teamId: 'sauber', team: 'Alfa Romeo (Sauber)', year: 2019, budgetM: 132.0, category: 'Zona Baja', points: 43, costPerPointM: 3.07 },
    { teamId: 'haas', team: 'Haas', year: 2019, budgetM: 173.0, category: 'Zona Baja', points: 28, costPerPointM: 6.18 },
    { teamId: 'williams', team: 'Williams', year: 2019, budgetM: 141.0, category: 'Zona Baja', points: 1, costPerPointM: 141.00 }
  ];

  var GRID_TEAMS = [
    { id: 'ferrari', name: 'Ferrari', officialName: 'Scuderia Ferrari', color: '#E21E20', base: 'Maranello, Italia', titles: 16, fact: 'Única escudería presente en todas las temporadas desde 1950 y máxima campeona histórica de Constructores (16 coronas).' },
    { id: 'mercedes', name: 'Mercedes', officialName: 'Mercedes-AMG Petronas', color: '#00D2BE', base: 'Brackley, Reino Unido', titles: 8, fact: 'Protagonizó la racha más dominante de Constructores en la historia: 8 títulos consecutivos entre 2014 y 2021.' },
    { id: 'redbull', name: 'Red Bull Racing', officialName: 'Oracle Red Bull Racing', color: '#1E41FF', base: 'Milton Keynes, Reino Unido', titles: 6, fact: 'Logró 6 títulos de Constructores en el siglo XXI y firmó en 2023 el mayor porcentaje de victorias de un piloto (86,4%).' },
    { id: 'mclaren', name: 'McLaren', officialName: 'McLaren Formula 1 Team', color: '#FF8000', base: 'Woking, Reino Unido', titles: 10, fact: 'Segunda escudería con más títulos históricos tras reconquistar el Mundial de Constructores en 2024 y 2025.' },
    { id: 'astonmartin', name: 'Aston Martin', officialName: 'Aston Martin Aramco', color: '#006F62', base: 'Silverstone, Reino Unido', titles: 0, fact: 'Como Force India en 2016–2017 brilló por su eficiencia presupuestaria: solo $0,63M USD por punto en 2017.' },
    { id: 'alpine', name: 'Alpine', officialName: 'BWT Alpine F1 Team', color: '#0090FF', base: 'Enstone, Reino Unido', titles: 2, fact: 'Heredera de la estructura de Renault, que rompió la hegemonía de Ferrari en 2005 y 2006 con Fernando Alonso.' },
    { id: 'williams', name: 'Williams', officialName: 'Williams Racing', color: '#005AFF', base: 'Grove, Reino Unido', titles: 9, fact: 'Tercera fuerza histórica con 9 títulos de Constructores, aunque sin coronas desde 1997 frente al auge de los mega-presupuestos.' },
    { id: 'haas', name: 'Haas', officialName: 'MoneyGram Haas F1 Team', color: '#B6BABD', base: 'Kannapolis, EE. UU.', titles: 0, fact: 'Debutó en 2016 como el equipo con menor presupuesto de la grilla ($117M USD), demostrando el reto financiero de la zona media.' },
    { id: 'sauber', name: 'Kick Sauber / Audi', officialName: 'Stake F1 Team Kick Sauber / Audi', color: '#52E252', base: 'Hinwil, Suiza', titles: 0, fact: 'Histórica escudería independiente suiza que en 2026 inicia su transformación oficial en equipo de fábrica Audi.' },
    { id: 'racingbulls', name: 'Racing Bulls', officialName: 'Visa Cash App Racing Bulls', color: '#3671C6', base: 'Faenza, Italia', titles: 0, fact: 'Cantera italiana (antes Toro Rosso y AlphaTauri) donde debutaron campeones como Sebastian Vettel y Max Verstappen.' }
  ];

  /* ------------------------------------------------------------------------
     3. APERTURA + SCROLL PROGRESS + TELEMETRÍA LATERAL
     ------------------------------------------------------------------------ */
  function forceUnlockScroll() {
    document.documentElement.style.setProperty('overflow-x', 'hidden');
    document.documentElement.style.setProperty('overflow-y', 'auto', 'important');
    document.documentElement.style.setProperty('height', 'auto', 'important');
    if (document.body) {
      document.body.style.setProperty('overflow-x', 'hidden');
      document.body.style.setProperty('overflow-y', 'auto', 'important');
      document.body.style.setProperty('height', 'auto', 'important');
    }
  }

  forceUnlockScroll();

  var introOverlay = document.getElementById('intro-overlay');
  var introCarSlot = document.getElementById('intro-car-slot');
  if (introCarSlot) introCarSlot.innerHTML = createCarSvg('#E21E20', '#FDFDFD', false);

  function closeIntro() {
    globalRestoreScrollAndHideIntro();
    var overlay = introOverlay || document.getElementById('intro-overlay');
    if (!overlay) return;
    overlay.classList.add('is-hidden');
    overlay.style.setProperty('pointer-events', 'none', 'important');
    overlay.style.setProperty('display', 'none', 'important');
    setTimeout(function () {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      globalRestoreScrollAndHideIntro();
    }, 350);
  }

  // Temporizador de seguridad de 3.8s para forzar display: none, pointer-events: none y restaurar el scroll
  var safetyIntroTimer = setTimeout(closeIntro, 3800);

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    clearTimeout(safetyIntroTimer);
    closeIntro();
  } else {
    var introTimer = setTimeout(closeIntro, 3450);
    var skipBtn = document.getElementById('intro-skip');
    if (skipBtn) {
      skipBtn.addEventListener('click', function () {
        clearTimeout(introTimer);
        clearTimeout(safetyIntroTimer);
        closeIntro();
      });
    }
  }

  var progressBar = document.getElementById('scroll-progress-bar');
  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(function () {
      var scrollTop = window.scrollY || window.pageYOffset || 0;
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? Math.min(100, Math.max(0, (scrollTop / docH) * 100)) : 0;
      if (progressBar) progressBar.style.width = pct + '%';
      scrollTicking = false;
    });
  }, { passive: true });

  var NAV_BLOCKS = [
    { id: 'portada', label: 'Portada' },
    { id: 'quiz-fan', label: 'Quiz Fan' },
    { id: 'guia-f1', label: 'Introducción' },
    { id: 'constructores', label: 'Líderes' },
    { id: 'sabias-que-1', label: '¿Sabías qué? 1' },
    { id: 'porcentaje-victorias', label: '% Victorias' },
    { id: 'sabias-que-2', label: '¿Sabías qué? 2' },
    { id: 'primero-vs-segundo', label: '1° vs 2° Lugar' },
    { id: 'sabias-que-3', label: '¿Sabías qué? 3' },
    { id: 'presupuestos', label: 'Presupuestos' },
    { id: 'conclusion', label: 'Conclusión' },
    { id: 'tu-escuderia', label: 'Tu Escudería' }
  ];

  var telemetryNav = document.getElementById('telemetry-nav');
  if (telemetryNav) {
    NAV_BLOCKS.forEach(function (blk, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'telemetry-btn' + (index === 0 ? ' is-active' : '');
      btn.setAttribute('data-target', blk.id);
      btn.setAttribute('aria-label', 'Ir a ' + blk.label);
      btn.innerHTML = '<span class="telemetry-label">' + blk.label + '</span><span class="telemetry-dot"></span>';
      btn.addEventListener('click', function () {
        var el = document.getElementById(blk.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      telemetryNav.appendChild(btn);
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries.filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible.length > 0) {
          var activeId = visible[0].target.id;
          telemetryNav.querySelectorAll('.telemetry-btn').forEach(function (b) {
            b.classList.toggle('is-active', b.getAttribute('data-target') === activeId);
          });
        }
      }, { rootMargin: '-25% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] });

      NAV_BLOCKS.forEach(function (blk) {
        var el = document.getElementById(blk.id);
        if (el) observer.observe(el);
      });
    }
  }

  var startBtn = document.getElementById('btn-start');
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      var el = document.getElementById('quiz-fan');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  var topBtn = document.getElementById('btn-top');
  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     4. DINÁMICA INTERACTIVA "¿QUÉ TAN FAN ERES?" (FLIP-CARD 3D)
     ------------------------------------------------------------------------ */
  var QUIZ_QUESTIONS = [
    {
      question: '¿Quién ganó el campeonato mundial de Fórmula 1 en 2023?',
      options: [
        { letter: 'a', label: 'Max Verstappen' },
        { letter: 'b', label: 'Lewis Hamilton' },
        { letter: 'c', label: 'Charles Leclerc' }
      ],
      correctIndex: 0,
      fact: 'Max Verstappen (Red Bull) arrasó en 2023 con 19 victorias en 22 Grandes Premios.'
    },
    {
      question: '¿En qué año se disputó el primer Gran Premio de Fórmula 1?',
      options: [
        { letter: 'a', label: '1946' },
        { letter: 'b', label: '1950' },
        { letter: 'c', label: '1938' }
      ],
      correctIndex: 1,
      fact: 'El Campeonato Mundial de F1 comenzó oficialmente en Silverstone en mayo de 1950.'
    },
    {
      question: '¿Cuál es el circuito más largo del calendario actual de Fórmula 1?',
      options: [
        { letter: 'a', label: 'Monza' },
        { letter: 'b', label: 'Spa-Francorchamps' },
        { letter: 'c', label: 'Silverstone' }
      ],
      correctIndex: 1,
      fact: 'Spa-Francorchamps (Bélgica) mide 7,004 km por vuelta, el trazado más extenso del mundial.'
    },
    {
      question: '¿Qué equipo tiene más campeonatos de constructores en Fórmula 1?',
      options: [
        { letter: 'a', label: 'Ferrari' },
        { letter: 'b', label: 'Mercedes' },
        { letter: 'c', label: 'McLaren' }
      ],
      correctIndex: 0,
      fact: 'Ferrari lidera el palmarés histórico con 16 Campeonatos de Constructores.'
    },
    {
      question: '¿Quién tiene el récord de más pole positions en la historia?',
      options: [
        { letter: 'a', label: 'Michael Schumacher' },
        { letter: 'b', label: 'Lewis Hamilton' },
        { letter: 'c', label: 'Ayrton Senna' }
      ],
      correctIndex: 1,
      fact: 'Lewis Hamilton superó la marca de 100 pole positions a lo largo de su carrera.'
    },
    {
      question: '¿Cuál es el sobrenombre del piloto Sebastian Vettel?',
      options: [
        { letter: 'a', label: 'The Iceman' },
        { letter: 'b', label: 'The Honey Badger' },
        { letter: 'c', label: 'Baby Schumi' }
      ],
      correctIndex: 2,
      fact: 'Al joven Sebastian Vettel lo apodaron "Baby Schumi" tras irrumpir en Alemania siguiendo la estela de Schumacher.'
    }
  ];

  var quizIdx = 0;
  var quizScore = 0;
  var quizLocked = false;
  var quizTimer = null;
  var quizStage = document.getElementById('quiz-stage');
  var quizDots = document.getElementById('quiz-dots');
  var quizStatus = document.getElementById('quiz-status');
  var quizStepNum = document.getElementById('quiz-step-num');
  var quizScoreNum = document.getElementById('quiz-score-num');

  function openBeginnerGuide() {
    var guideTrigger = document.getElementById('guide-trigger');
    var guidePanel = document.getElementById('guide-panel');
    if (guideTrigger && guidePanel) {
      guideTrigger.setAttribute('aria-expanded', 'true');
      guidePanel.classList.add('is-open');
    }
  }

  function getQuizResult(score) {
    if (score <= 2) {
      return {
        id: 'rookie',
        title: 'Piloto Novato en Boxes',
        level: 'Principiante',
        desc: 'Aún estás en la zona de aprendizaje, pero con ganas de acelerar y conocer más de la Fórmula 1. Es un buen comienzo para descubrir los secretos de este deporte.',
        beginner: true
      };
    }
    if (score <= 4) {
      return {
        id: 'racer',
        title: 'Corredor en Pista',
        level: 'Aficionado',
        desc: 'Ya tienes buen ritmo y conoces lo importante; sigues mejorando para llegar al podio. Sabes lo esencial de la Fórmula 1. ¡Sigue de cerca las carreras!',
        beginner: false
      };
    }
    if (score === 5) {
      return {
        id: 'pole',
        title: 'As de la Pole Position',
        level: 'Fan experimentado',
        desc: 'Tienes gran dominio sobre este deporte y sabes cómo manejar cada curva y reglamento. Conoces a fondo la historia y los detalles actuales de la Fórmula 1.',
        beginner: false
      };
    }
    return {
      id: 'champion',
      title: 'Campeón del Gran Premio',
      level: 'Experto',
      desc: 'Eres un auténtico experto, con un conocimiento digno de un campeón mundial. ¡Nada se te escapa sobre la Fórmula 1!',
      beginner: false
    };
  }

  function getQuizTierSvg(tierId) {
    if (tierId === 'rookie') {
      return (
        '<svg viewBox="0 0 240 160" role="img" aria-label="Ilustración técnica de monoplaza en boxes en fase de aprendizaje">' +
        '<rect x="2" y="2" width="236" height="156" fill="#050914" stroke="#004AAD" stroke-width="2"/>' +
        '<path d="M0 32 H240 M0 128 H240 M40 0 V160 M120 0 V160 M200 0 V160" stroke="#004AAD" stroke-opacity="0.28" stroke-width="1"/>' +
        '<rect x="14" y="12" width="84" height="16" fill="#004AAD"/>' +
        '<text x="56" y="23" text-anchor="middle" fill="#FDFDFD" font-size="8.5" font-weight="900" letter-spacing="1.2">PIT LANE · BOX 01</text>' +
        '<path d="M36 122 L52 96 H196 L212 122" fill="none" stroke="#D9D9D9" stroke-width="2.5" stroke-dasharray="6 4"/>' +
        '<polygon points="24,132 34,104 44,132" fill="#004AAD" stroke="#FDFDFD" stroke-width="1.5"/>' +
        '<rect x="28" y="117" width="12" height="4" fill="#FDFDFD"/>' +
        '<rect x="20" y="132" width="28" height="4" fill="#D9D9D9"/>' +
        '<line x1="210" y1="42" x2="210" y2="128" stroke="#D9D9D9" stroke-width="2.5"/>' +
        '<path d="M210 44 L232 52 L210 62 Z" fill="#004AAD" stroke="#FDFDFD" stroke-width="1.2"/>' +
        '<circle cx="64" cy="70" r="6" fill="#004AAD" stroke="#FDFDFD" stroke-width="1.5"/>' +
        '<path d="M56 78 H72 L75 96 H54 Z" fill="#D9D9D9"/>' +
        '<path d="M72 82 L88 94" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M84 96 L98 112" stroke="#004AAD" stroke-width="2.5"/>' +
        '<circle cx="170" cy="64" r="6" fill="#004AAD" stroke="#FDFDFD" stroke-width="1.5"/>' +
        '<path d="M162 72 H178 L181 94 H160 Z" fill="#D9D9D9"/>' +
        '<rect x="148" y="84" width="14" height="6" rx="1" fill="#004AAD" stroke="#FDFDFD" stroke-width="1"/>' +
        '<path d="M180 22 L192 34 M177 20 A4 4 0 1 1 183 26" stroke="#D9D9D9" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
        '<path d="M62 114 L82 108 L112 104 L132 95 L156 96 L184 102 L192 92 L200 92 L198 114 Z" fill="#D9D9D9" stroke="#004AAD" stroke-width="1.6"/>' +
        '<path d="M128 96 Q135 88 144 96" fill="none" stroke="#004AAD" stroke-width="2.5"/>' +
        '<circle cx="136" cy="96" r="4.5" fill="#004AAD"/>' +
        '<circle cx="88" cy="116" r="12" fill="#111111" stroke="#D9D9D9" stroke-width="2.5"/>' +
        '<circle cx="88" cy="116" r="5" fill="#004AAD"/>' +
        '<circle cx="174" cy="116" r="13" fill="#111111" stroke="#D9D9D9" stroke-width="2.5"/>' +
        '<circle cx="174" cy="116" r="5.5" fill="#004AAD"/>' +
        '<rect x="14" y="140" width="212" height="8" fill="#0D1933"/>' +
        '<rect x="14" y="140" width="68" height="8" fill="#004AAD"/>' +
        '</svg>'
      );
    }
    if (tierId === 'racer') {
      return (
        '<svg viewBox="0 0 240 160" role="img" aria-label="Ilustración técnica de monoplaza acelerando en pista">' +
        '<rect x="2" y="2" width="236" height="156" fill="#080808" stroke="#D9D9D9" stroke-opacity="0.45" stroke-width="2"/>' +
        '<line x1="16" y1="48" x2="112" y2="48" stroke="#004AAD" stroke-width="2.5"/>' +
        '<line x1="28" y1="64" x2="96" y2="64" stroke="#E21E20" stroke-width="2"/>' +
        '<line x1="14" y1="80" x2="82" y2="80" stroke="#D9D9D9" stroke-opacity="0.5" stroke-width="1.5"/>' +
        '<rect x="14" y="12" width="96" height="16" fill="#004AAD"/>' +
        '<text x="62" y="23" text-anchor="middle" fill="#FDFDFD" font-size="8.5" font-weight="900" letter-spacing="1">SECTOR 2 · EN RITMO</text>' +
        '<path d="M12 132 Q120 110 228 124" fill="none" stroke="#FDFDFD" stroke-width="10"/>' +
        '<path d="M12 132 Q120 110 228 124" fill="none" stroke="#E21E20" stroke-width="10" stroke-dasharray="16 16"/>' +
        '<g transform="translate(18,-4)">' +
        '<path d="M62 110 L96 104 L126 98 L146 86 L174 88 L194 94 L202 80 L210 80 L206 110 Z" fill="#E21E20" stroke="#FDFDFD" stroke-width="1.6"/>' +
        '<path d="M138 88 Q147 78 156 88" fill="none" stroke="#FDFDFD" stroke-width="2.6"/>' +
        '<circle cx="147" cy="88" r="5" fill="#FDFDFD"/>' +
        '<path d="M16 102 H72" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M26 112 H66" stroke="#004AAD" stroke-width="2.5" stroke-linecap="round"/>' +
        '<circle cx="96" cy="112" r="12.5" fill="#111111" stroke="#FDFDFD" stroke-width="2.4"/>' +
        '<circle cx="96" cy="112" r="6" fill="none" stroke="#E21E20" stroke-width="2"/>' +
        '<circle cx="182" cy="112" r="13.5" fill="#111111" stroke="#FDFDFD" stroke-width="2.4"/>' +
        '<circle cx="182" cy="112" r="6.5" fill="none" stroke="#E21E20" stroke-width="2"/>' +
        '</g>' +
        '<rect x="14" y="142" width="212" height="6" fill="#1C1C1C"/>' +
        '<rect x="14" y="142" width="136" height="6" fill="#004AAD"/>' +
        '</svg>'
      );
    }
    if (tierId === 'pole') {
      return (
        '<svg viewBox="0 0 240 160" role="img" aria-label="Ilustración de monoplaza en la primera posición de salida P1">' +
        '<rect x="2" y="2" width="236" height="156" fill="#080808" stroke="#E21E20" stroke-width="2"/>' +
        '<rect x="14" y="12" width="96" height="16" fill="#E21E20"/>' +
        '<text x="62" y="23" text-anchor="middle" fill="#FDFDFD" font-size="8.5" font-weight="900" letter-spacing="1.2">Q3 · POLE POSITION</text>' +
        '<path d="M46 122 V92 H198 V122" fill="none" stroke="#FDFDFD" stroke-width="3.5"/>' +
        '<rect x="176" y="42" width="46" height="40" fill="#141414" stroke="#FDFDFD" stroke-width="1.8"/>' +
        '<text x="199" y="69" text-anchor="middle" fill="#E21E20" font-size="22" font-weight="900">P1</text>' +
        '<g transform="translate(120,88) rotate(-90) scale(0.42)">' +
        '<path d="M-34 -120 L0 -145 L34 -120 L36 -104 L0 -114 L-36 -104 Z" fill="#E21E20" stroke="#FDFDFD" stroke-width="3"/>' +
        '<path d="M-12 -136 L12 -136 L15 -40 L-15 -40 Z" fill="#E21E20" stroke="#FDFDFD" stroke-width="2.5"/>' +
        '<rect x="-56" y="-84" width="22" height="44" rx="5" fill="#111" stroke="#E21E20" stroke-width="3"/>' +
        '<rect x="34" y="-84" width="22" height="44" rx="5" fill="#111" stroke="#E21E20" stroke-width="3"/>' +
        '<path d="M-16 -44 L16 -44 L30 0 L24 72 L10 108 L-10 108 L-24 72 L-30 0 Z" fill="#E21E20" stroke="#FDFDFD" stroke-width="3"/>' +
        '<circle cx="0" cy="14" r="9" fill="#FDFDFD"/>' +
        '<rect x="-58" y="62" width="24" height="50" rx="6" fill="#111" stroke="#E21E20" stroke-width="3"/>' +
        '<rect x="34" y="62" width="24" height="50" rx="6" fill="#111" stroke="#E21E20" stroke-width="3"/>' +
        '<rect x="-42" y="114" width="84" height="18" fill="#E21E20" stroke="#FDFDFD" stroke-width="2.5"/>' +
        '</g>' +
        '<rect x="14" y="140" width="212" height="7" fill="#1C1C1C"/>' +
        '<rect x="14" y="140" width="182" height="7" fill="#E21E20"/>' +
        '</svg>'
      );
    }
    return (
      '<svg viewBox="0 0 240 160" role="img" aria-label="Ilustración de podio campeón con trofeo y banderas a cuadros">' +
      '<rect x="2" y="2" width="236" height="156" fill="#0B0805" stroke="#FDFDFD" stroke-width="2"/>' +
      '<rect x="14" y="12" width="108" height="16" fill="#E21E20"/>' +
      '<text x="68" y="23" text-anchor="middle" fill="#FDFDFD" font-size="8.5" font-weight="900" letter-spacing="1.2">CAMPEÓN · GP 1°</text>' +
      '<line x1="48" y1="108" x2="72" y2="38" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="26" y="42" width="38" height="24" transform="rotate(-14 45 54)" fill="#FDFDFD" stroke="#000" stroke-width="1.5"/>' +
      '<rect x="28" y="44" width="9" height="8" transform="rotate(-14 45 54)" fill="#000"/>' +
      '<rect x="46" y="44" width="9" height="8" transform="rotate(-14 45 54)" fill="#000"/>' +
      '<rect x="37" y="52" width="9" height="8" transform="rotate(-14 45 54)" fill="#000"/>' +
      '<line x1="192" y1="108" x2="168" y2="38" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="176" y="42" width="38" height="24" transform="rotate(14 195 54)" fill="#FDFDFD" stroke="#000" stroke-width="1.5"/>' +
      '<rect x="178" y="44" width="9" height="8" transform="rotate(14 195 54)" fill="#000"/>' +
      '<rect x="196" y="44" width="9" height="8" transform="rotate(14 195 54)" fill="#000"/>' +
      '<rect x="187" y="52" width="9" height="8" transform="rotate(14 195 54)" fill="#000"/>' +
      '<path d="M98 42 H86 V55 C86 68 92 73 105 73 M142 42 H154 V55 C154 68 148 73 135 73" fill="none" stroke="#EAB308" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M96 34 H144 V54 C144 68 134 76 125 79 V92 H135 V98 H105 V92 H115 V79 C106 76 96 68 96 54 Z" fill="#EAB308" stroke="#FDFDFD" stroke-width="1.8"/>' +
      '<rect x="36" y="116" width="48" height="26" fill="#004AAD" stroke="#D9D9D9" stroke-width="1.5"/>' +
      '<text x="60" y="134" text-anchor="middle" fill="#FDFDFD" font-size="13" font-weight="900">2</text>' +
      '<rect x="84" y="100" width="72" height="42" fill="#E21E20" stroke="#FDFDFD" stroke-width="2"/>' +
      '<text x="120" y="128" text-anchor="middle" fill="#FDFDFD" font-size="20" font-weight="900">1</text>' +
      '<rect x="156" y="122" width="48" height="20" fill="#222222" stroke="#D9D9D9" stroke-width="1.5"/>' +
      '<text x="180" y="137" text-anchor="middle" fill="#D9D9D9" font-size="12" font-weight="900">3</text>' +
      '</svg>'
    );
  }

  function renderQuizDots() {
    if (!quizDots) return;
    quizDots.innerHTML = QUIZ_QUESTIONS.map(function (_, i) {
      var cls = i < quizIdx ? 'quiz-dot is-done' : i === quizIdx ? 'quiz-dot is-current' : 'quiz-dot';
      return '<div class="' + cls + '"></div>';
    }).join('');
  }

  function renderQuizResult() {
    if (quizStatus) quizStatus.style.display = 'none';
    if (quizDots) quizDots.style.display = 'none';
    var tier = getQuizResult(quizScore);
    if (tier.beginner) openBeginnerGuide();

    quizStage.innerHTML =
      '<div class="quiz-result-box">' +
      '<div class="quiz-result-visual">' + getQuizTierSvg(tier.id) + '</div>' +
      '<div style="flex:1;min-width:240px;">' +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;">' +
      '<span style="background:#E21E20;color:#FDFDFD;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.14em;padding:4px 12px;">Resultado · ' + tier.level + '</span>' +
      '<span class="tabular-nums" style="font-size:14px;font-weight:900;color:#D9D9D9;">' + quizScore + ' de ' + QUIZ_QUESTIONS.length + ' correctas</span>' +
      '</div>' +
      '<h3 style="margin:12px 0 0;font-size:clamp(22px,3vw,30px);font-weight:900;text-transform:uppercase;">' + tier.title + '</h3>' +
      '<p style="margin:12px 0 0;font-size:15.5px;line-height:1.65;color:#D9D9D9;max-width:650px;">' + tier.desc + '</p>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:10px;">' +
      '<button type="button" id="quiz-retry" class="btn-white">↻ Volver a intentar</button>' +
      '<button type="button" id="quiz-go-guide" class="btn-blue">' + (tier.beginner ? 'Ver Guía rápida en 60s ↓' : 'Ir a los datos ↓') + '</button>' +
      '</div>' +
      '</div>';

    document.getElementById('quiz-retry').addEventListener('click', function () {
      if (quizTimer) clearTimeout(quizTimer);
      quizIdx = 0;
      quizScore = 0;
      quizLocked = false;
      if (quizStatus) quizStatus.style.display = 'flex';
      if (quizDots) quizDots.style.display = 'grid';
      renderQuizCard();
    });

    document.getElementById('quiz-go-guide').addEventListener('click', function () {
      var el = document.getElementById('guia-f1');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function advanceQuiz() {
    var inner = document.getElementById('flip-card-inner');
    if (inner) inner.classList.remove('is-flipped');
    setTimeout(function () {
      quizIdx += 1;
      quizLocked = false;
      if (quizIdx < QUIZ_QUESTIONS.length) {
        renderQuizCard();
      } else {
        renderQuizResult();
      }
    }, 260);
  }

  function renderQuizCard() {
    if (!quizStage) return;
    var q = QUIZ_QUESTIONS[quizIdx];
    if (quizStepNum) quizStepNum.textContent = String(quizIdx + 1);
    if (quizScoreNum) quizScoreNum.textContent = String(quizScore);
    renderQuizDots();

    var optsHtml = q.options.map(function (opt, i) {
      return (
        '<button type="button" class="quiz-opt-btn" data-opt-idx="' + i + '">' +
        '<span class="quiz-opt-letter">' + opt.letter + '</span>' +
        '<span class="quiz-opt-label">' + opt.label + '</span>' +
        '</button>'
      );
    }).join('');

    quizStage.innerHTML =
      '<div class="flip-perspective">' +
      '<div id="flip-card-inner" class="flip-card-inner">' +
      '<div class="flip-face">' +
      '<div>' +
      '<span class="quiz-q-tag">Pregunta 0' + (quizIdx + 1) + '</span>' +
      '<h3 class="quiz-q-title">' + q.question + '</h3>' +
      '</div>' +
      '<div class="quiz-options">' + optsHtml + '</div>' +
      '</div>' +
      '<div id="flip-back" class="flip-face flip-face-back">' +
      '<div>' +
      '<p id="flip-status" style="margin:0;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.14em;color:#D9D9D9;"></p>' +
      '<h3 style="margin:8px 0 0;font-size:24px;font-weight:900;text-transform:uppercase;color:#FDFDFD;">' +
      q.options[q.correctIndex].letter + ') ' + q.options[q.correctIndex].label +
      '</h3>' +
      '</div>' +
      '<p style="margin:16px 0;font-size:15.5px;line-height:1.6;color:#D9D9D9;max-width:640px;">' + q.fact + '</p>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(217,217,217,0.8);">' +
      '<span>Avanzando a la siguiente tarjeta...</span>' +
      '<button type="button" id="quiz-next-now" style="background:none;border:0;color:#FDFDFD;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;">Siguiente →</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    quizStage.querySelectorAll('.quiz-opt-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (quizLocked) return;
        quizLocked = true;
        var chosen = Number(btn.getAttribute('data-opt-idx'));
        var isRight = chosen === q.correctIndex;
        if (isRight) {
          quizScore += 1;
          if (quizScoreNum) quizScoreNum.textContent = String(quizScore);
        }
        var back = document.getElementById('flip-back');
        var statusEl = document.getElementById('flip-status');
        if (back) back.classList.add(isRight ? 'is-correct' : 'is-wrong');
        if (statusEl) statusEl.textContent = isRight ? '✓ ¡Respuesta correcta!' : '✕ Respuesta incorrecta';

        var inner = document.getElementById('flip-card-inner');
        if (inner) inner.classList.add('is-flipped');

        quizTimer = setTimeout(advanceQuiz, 1700);
      });
    });

    var nextNow = document.getElementById('quiz-next-now');
    if (nextNow) {
      nextNow.addEventListener('click', function () {
        if (quizTimer) clearTimeout(quizTimer);
        advanceQuiz();
      });
    }
  }

  renderQuizCard();

  /* ------------------------------------------------------------------------
     5. GUÍA RÁPIDA DESPLEGABLE (PARTE 2)
     ------------------------------------------------------------------------ */
  var guideTrigger = document.getElementById('guide-trigger');
  var guidePanel = document.getElementById('guide-panel');
  if (guideTrigger && guidePanel) {
    guideTrigger.addEventListener('click', function () {
      var open = guideTrigger.getAttribute('aria-expanded') === 'true';
      guideTrigger.setAttribute('aria-expanded', String(!open));
      guidePanel.classList.toggle('is-open', !open);
    });
  }

  /* ------------------------------------------------------------------------
     6. GRÁFICO 1: TROFEOS EXPANDIBLES POR ESCUDERÍA (2000–2025)
     ------------------------------------------------------------------------ */
  var trophyRoot = document.getElementById('teams-trophies');
  var toggleAllCupsBtn = document.getElementById('btn-toggle-all-cups');
  var cupSvgMarkup =
    '<svg viewBox="0 0 64 70" aria-hidden="true">' +
    '<path d="M15 10H5V21C5 34 11 39 22 39M49 10H59V21C59 34 53 39 42 39" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>' +
    '<path d="M13 4H51V22C51 36 43 43 36 46V58H45V64H19V58H28V46C21 43 13 36 13 22Z" fill="currentColor"/>' +
    '<rect x="13" y="63" width="38" height="6" rx="1" fill="currentColor"/>' +
    '<path d="M19 10V22Q19 30 25 35" fill="none" stroke="white" opacity=".45" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';

  if (trophyRoot && toggleAllCupsBtn) {
    var trophyRows = [];

    function updateAllCupsBtn() {
      var everyOpen = trophyRows.every(function (row) { return row.classList.contains('active'); });
      toggleAllCupsBtn.textContent = everyOpen ? 'Ocultar todas las copas' : 'Revelar todas las copas';
    }

    teamsChampions.forEach(function (t) {
      var row = document.createElement('div');
      row.className = 'trophy-team';
      row.style.setProperty('--c', t.color);
      row.innerHTML =
        '<button type="button" aria-expanded="false">' +
        '<img class="trophy-symbol" src="' + t.icon + '" alt="" loading="lazy"/>' +
        '<div class="trophy-meta">' +
        '<div class="trophy-name">' + t.name + '</div>' +
        '<div class="trophy-details">Ver campeonatos</div>' +
        '</div>' +
        '<span class="trophy-arrow" aria-hidden="true">›</span>' +
        '</button>' +
        '<div class="trophy-cups">' +
        t.years.map(function (yr, idx) {
          return '<div class="trophy-cup" style="--i:' + idx + '">' + cupSvgMarkup + '<span class="tabular-nums">' + yr + '</span></div>';
        }).join('') +
        '</div>';

      var btn = row.querySelector('button');
      var details = row.querySelector('.trophy-details');
      var arrow = row.querySelector('.trophy-arrow');

      row._setOpen = function (on) {
        row.classList.toggle('active', on);
        btn.setAttribute('aria-expanded', String(on));
        details.textContent = on
          ? t.years.length + (t.years.length === 1 ? ' campeonato' : ' campeonatos')
          : 'Ver campeonatos';
        arrow.textContent = on ? '−' : '›';
      };

      btn.addEventListener('click', function () {
        row._setOpen(!row.classList.contains('active'));
        updateAllCupsBtn();
      });

      trophyRows.push(row);
      trophyRoot.appendChild(row);
    });

    toggleAllCupsBtn.addEventListener('click', function () {
      var shouldOpen = !trophyRows.every(function (row) { return row.classList.contains('active'); });
      trophyRows.forEach(function (row) { row._setOpen(shouldOpen); });
      updateAllCupsBtn();
    });
  }

  /* ------------------------------------------------------------------------
     7. GRÁFICO 2: % CARRERAS GANADAS POR EL CAMPEÓN (SVG INTERACTIVO)
     ------------------------------------------------------------------------ */
  var c2Range = 'decade';
  var c2Wrap = document.getElementById('c2-svg-wrap');
  var c2Readout = document.getElementById('c2-readout');

  function updateC2Readout(d) {
    if (!c2Readout || !d) return;
    c2Readout.innerHTML =
      '<div class="readout-main">' +
      '<div class="readout-kicker">Temporada ' + d.season + ' · ' + d.team + '</div>' +
      '<div class="readout-title">' + d.champion + '</div>' +
      '<div class="readout-sub tabular-nums"><strong>' + d.wins + '</strong> victorias de <strong>' + d.totalRaces + '</strong> carreras disputadas · ' + (d.totalRaces - d.wins) + ' ganadas por otros pilotos</div>' +
      '</div>' +
      '<div class="readout-stat tabular-nums">' + d.winPct.toFixed(1).replace('.', ',') + '%</div>';
  }

  function renderChart2() {
    if (!c2Wrap) return;
    var dataset = c2Range === 'decade'
      ? CHAMPION_WIN_DATA.filter(function (d) { return d.season >= 2016; })
      : CHAMPION_WIN_DATA;

    var peak = dataset.reduce(function (a, b) { return b.winPct > a.winPct ? b : a; }, dataset[0]);
    updateC2Readout(peak);

    var W = 680, H = 290, padL = 44, padR = 24, padT = 32, padB = 34;
    var plotW = W - padL - padR;
    var plotH = H - padT - padB;
    var xStep = plotW / Math.max(1, dataset.length - 1);

    var pts = dataset.map(function (d, i) {
      var x = padL + i * xStep;
      var y = padT + plotH - (d.winPct / 100) * plotH;
      return { x: x, y: y, d: d };
    });

    var linePath = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    var areaPath = linePath + ' L' + pts[pts.length - 1].x.toFixed(1) + ',' + (padT + plotH) + ' L' + pts[0].x.toFixed(1) + ',' + (padT + plotH) + ' Z';
    var y50 = padT + plotH * 0.5;

    var gridSvg = [0, 20, 40, 60, 80, 100].map(function (v) {
      var y = padT + plotH - (v / 100) * plotH;
      return (
        '<line x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '" stroke="#D9D9D9" stroke-opacity="0.2" />' +
        '<text x="' + (padL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" fill="#D9D9D9" font-size="10" font-weight="600">' + v + '%</text>'
      );
    }).join('');

    var peakPt = pts.filter(function (p) { return p.d.season === peak.season; })[0];
    var peakCallout = peakPt ? (
      '<g>' +
      '<line x1="' + peakPt.x.toFixed(1) + '" y1="' + (padT + plotH) + '" x2="' + peakPt.x.toFixed(1) + '" y2="' + peakPt.y.toFixed(1) + '" stroke="#E21E20" stroke-dasharray="3 3" stroke-width="1.2"/>' +
      '<rect x="' + Math.min(W - 122, Math.max(padL, peakPt.x - 56)).toFixed(1) + '" y="' + Math.max(4, peakPt.y - 32).toFixed(1) + '" width="112" height="22" fill="#E21E20"/>' +
      '<text x="' + Math.min(W - 66, Math.max(padL + 56, peakPt.x)).toFixed(1) + '" y="' + Math.max(19, peakPt.y - 17).toFixed(1) + '" text-anchor="middle" fill="#FDFDFD" font-size="10" font-weight="900">MÁX. ' + peak.winPct.toFixed(1).replace('.', ',') + '% (' + peak.season + ')</text>' +
      '</g>'
    ) : '';

    var dotsSvg = pts.map(function (p, idx) {
      var showLabel = dataset.length <= 12 || idx % 3 === 0 || p.d.season === 2025;
      var isPeak = p.d.season === peak.season;
      return (
        '<g class="c2-point" data-idx="' + idx + '" style="cursor:pointer;">' +
        (showLabel ? '<text x="' + p.x.toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle" fill="#D9D9D9" font-size="10" font-weight="600">' + p.d.season + '</text>' : '') +
        '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="14" fill="transparent"/>' +
        '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + (isPeak ? 6 : 4.2) + '" fill="' + (isPeak ? '#FDFDFD' : '#E21E20') + '" stroke="#FDFDFD" stroke-width="1.6"/>' +
        '</g>'
      );
    }).join('');

    c2Wrap.innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfico de porcentaje de carreras ganadas por el campeón">' +
      '<defs><linearGradient id="c2Grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E21E20" stop-opacity="0.58"/><stop offset="100%" stop-color="#E21E20" stop-opacity="0.03"/></linearGradient></defs>' +
      gridSvg +
      '<line x1="' + padL + '" y1="' + y50.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y50.toFixed(1) + '" stroke="#004AAD" stroke-dasharray="6 4" stroke-width="1.5"/>' +
      '<path d="' + areaPath + '" fill="url(#c2Grad)"/>' +
      '<path d="' + linePath + '" fill="none" stroke="#E21E20" stroke-width="3" stroke-linejoin="round"/>' +
      peakCallout +
      dotsSvg +
      '</svg>';

    c2Wrap.querySelectorAll('.c2-point').forEach(function (g) {
      var idx = Number(g.getAttribute('data-idx'));
      g.addEventListener('mouseenter', function () { updateC2Readout(dataset[idx]); });
      g.addEventListener('click', function () { updateC2Readout(dataset[idx]); });
    });
  }

  document.querySelectorAll('[data-c2-range]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      c2Range = btn.getAttribute('data-c2-range');
      document.querySelectorAll('[data-c2-range]').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      renderChart2();
    });
  });
  renderChart2();

  /* ------------------------------------------------------------------------
     8. GRÁFICO 3: 1° VS 2° LUGAR (SVG BARRAS AGRUPADAS INTERACTIVO)
     ------------------------------------------------------------------------ */
  var c3Filter = 'all';
  var c3Wrap = document.getElementById('c3-svg-wrap');
  var c3Readout = document.getElementById('c3-readout');

  function updateC3Readout(d) {
    if (!c3Readout || !d) return;
    c3Readout.innerHTML =
      '<div class="readout-main">' +
      '<div class="readout-kicker">Temporada ' + d.year + '</div>' +
      '<div class="readout-title">1° ' + d.champion + ' (' + d.firstTeam + ' · ' + d.firstPoints + ' pts)</div>' +
      '<div class="readout-sub tabular-nums">2° Subcampeón: <strong>' + d.secondTeam + '</strong> · <strong>' + d.secondPoints + ' pts</strong></div>' +
      '</div>' +
      '<div class="readout-stat tabular-nums">+' + d.gap + ' pts</div>';
  }

  function renderChart3() {
    if (!c3Wrap) return;
    var dataset = FIRST_VS_SECOND_DATA.filter(function (d) {
      if (c3Filter === 'close') return d.gap <= 15;
      if (c3Filter === 'blowout') return d.gap >= 65;
      return true;
    });

    updateC3Readout(dataset[dataset.length - 1] || FIRST_VS_SECOND_DATA[23]);

    var W = 680, H = 290, padL = 42, padR = 16, padT = 20, padB = 38;
    var plotW = W - padL - padR;
    var plotH = H - padT - padB;
    var maxPts = 600;
    var groupW = plotW / dataset.length;
    var barW = Math.max(4, Math.min(18, groupW * 0.36));

    var gridSvg = [0, 150, 300, 450, 600].map(function (v) {
      var y = padT + plotH - (v / maxPts) * plotH;
      return (
        '<line x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '" stroke="#D9D9D9" stroke-opacity="0.2" />' +
        '<text x="' + (padL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" fill="#D9D9D9" font-size="10" font-weight="600">' + v + '</text>'
      );
    }).join('');

    var barsSvg = dataset.map(function (d, idx) {
      var cx = padL + idx * groupW + groupW / 2;
      var h1 = (d.firstPoints / maxPts) * plotH;
      var h2 = (d.secondPoints / maxPts) * plotH;
      var y1 = padT + plotH - h1;
      var y2 = padT + plotH - h2;
      var showYear = dataset.length <= 14 || idx % 2 === 0 || d.year === 2025;

      return (
        '<g class="c3-group" data-idx="' + idx + '" style="cursor:pointer;">' +
        '<rect x="' + (cx - groupW / 2).toFixed(1) + '" y="' + padT + '" width="' + groupW.toFixed(1) + '" height="' + plotH + '" fill="transparent"/>' +
        '<rect x="' + (cx - barW - 1).toFixed(1) + '" y="' + y1.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h1.toFixed(1) + '" fill="#E21E20"/>' +
        '<rect x="' + (cx + 1).toFixed(1) + '" y="' + y2.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h2.toFixed(1) + '" fill="#D9D9D9"/>' +
        (showYear ? '<text x="' + cx.toFixed(1) + '" y="' + (H - 12) + '" text-anchor="middle" fill="#D9D9D9" font-size="9.5" font-weight="600">' + String(d.year).slice(-2) + '</text>' : '') +
        '</g>'
      );
    }).join('');

    c3Wrap.innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Comparación de puntos entre primer y segundo lugar">' +
      gridSvg +
      barsSvg +
      '</svg>';

    c3Wrap.querySelectorAll('.c3-group').forEach(function (g) {
      var idx = Number(g.getAttribute('data-idx'));
      g.addEventListener('mouseenter', function () { updateC3Readout(dataset[idx]); });
      g.addEventListener('click', function () { updateC3Readout(dataset[idx]); });
    });
  }

  document.querySelectorAll('[data-c3-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      c3Filter = btn.getAttribute('data-c3-filter');
      document.querySelectorAll('[data-c3-filter]').forEach(function (b) {
        b.classList.remove('is-active', 'is-active-blue');
      });
      btn.classList.add(c3Filter === 'close' ? 'is-active-blue' : 'is-active');
      renderChart3();
    });
  });
  renderChart3();

  /* ------------------------------------------------------------------------
     9. GRÁFICO 4: PRESUPUESTOS 2015–2019 (PARTE 9)
     ------------------------------------------------------------------------ */
  var c4Year = 2019;
  var c4Metric = 'budget';
  var c4YearsEl = document.getElementById('c4-years');
  var c4BarsEl = document.getElementById('c4-bars');
  var c4TitleEl = document.getElementById('c4-title');
  var c4SubEl = document.getElementById('c4-subtitle');
  var c4Readout = document.getElementById('c4-readout');

  function updateC4Readout(rec) {
    if (!c4Readout || !rec) return;
    c4Readout.innerHTML =
      '<div class="readout-main">' +
      '<div class="readout-kicker">' + rec.team + ' · ' + rec.year + ' (' + rec.category + ')</div>' +
      '<div class="readout-sub tabular-nums">Presupuesto: <strong>$' + rec.budgetM.toFixed(1) + 'M USD</strong> · Puntos FIA: <strong>' + rec.points + ' pts</strong></div>' +
      '</div>' +
      '<div class="readout-stat tabular-nums">$' + rec.costPerPointM.toFixed(2) + 'M <span style="display:block;font-size:11px;color:#D9D9D9;font-weight:600;">por punto</span></div>';
  }

  function renderChart4() {
    if (!c4BarsEl || !c4YearsEl) return;

    c4TitleEl.textContent = c4Metric === 'budget'
      ? 'Presupuesto Anual Estimado (' + c4Year + ')'
      : 'Eficiencia: Costo por Punto (' + c4Year + ')';
    c4SubEl.textContent = c4Metric === 'budget'
      ? 'Millones de dólares estadounidenses (USD M)'
      : 'Millones de USD invertidos por cada punto FIA obtenido';

    c4YearsEl.innerHTML = '<span style="font-size:12px;font-weight:700;text-transform:uppercase;color:#D9D9D9;margin-right:6px;">Temporada:</span>';
    [2015, 2016, 2017, 2018, 2019].forEach(function (yr) {
      var yBtn = document.createElement('button');
      yBtn.type = 'button';
      yBtn.className = 'year-btn tabular-nums' + (yr === c4Year ? ' is-active' : '');
      yBtn.textContent = String(yr);
      yBtn.addEventListener('click', function () {
        c4Year = yr;
        renderChart4();
      });
      c4YearsEl.appendChild(yBtn);
    });

    var rows = BUDGET_DATA.filter(function (r) { return r.year === c4Year; }).sort(function (a, b) {
      return c4Metric === 'budget' ? b.budgetM - a.budgetM : b.costPerPointM - a.costPerPointM;
    });

    var maxVal = c4Metric === 'budget' ? 550 : Math.max.apply(null, rows.map(function (r) { return r.costPerPointM; }).concat([25]));

    c4BarsEl.innerHTML = '';
    rows.forEach(function (rec, idx) {
      var val = c4Metric === 'budget' ? rec.budgetM : rec.costPerPointM;
      var widthPct = Math.max(2, (val / maxVal) * 100);
      var fillClass = rec.category === 'Top 3' ? 'hbar-fill' : rec.category === 'Zona Media' ? 'hbar-fill is-blue' : 'hbar-fill is-gray';

      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'hbar-row' + (idx === 0 ? ' is-selected' : '');
      row.innerHTML =
        '<span class="hbar-label"><span class="hbar-logo">' + getTeamLogoSvg(rec.teamId) + '</span><span class="hbar-name">' + rec.team + '</span></span>' +
        '<span class="hbar-track"><span class="' + fillClass + '" style="width:' + widthPct + '%"></span></span>' +
        '<span class="hbar-value tabular-nums">' + (c4Metric === 'budget' ? '$' + rec.budgetM.toFixed(0) + 'M' : '$' + rec.costPerPointM.toFixed(2) + 'M') + '</span>';

      function pick() {
        c4BarsEl.querySelectorAll('.hbar-row').forEach(function (r) { r.classList.remove('is-selected'); });
        row.classList.add('is-selected');
        updateC4Readout(rec);
      }
      row.addEventListener('mouseenter', pick);
      row.addEventListener('focus', pick);
      row.addEventListener('click', pick);
      c4BarsEl.appendChild(row);
    });

    if (rows.length > 0) updateC4Readout(rows[0]);
  }

  document.querySelectorAll('[data-c4-metric]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      c4Metric = btn.getAttribute('data-c4-metric');
      document.querySelectorAll('[data-c4-metric]').forEach(function (b) {
        b.classList.remove('is-active', 'is-active-blue');
      });
      btn.classList.add(c4Metric === 'costPerPoint' ? 'is-active-blue' : 'is-active');
      renderChart4();
    });
  });
  renderChart4();

  /* ------------------------------------------------------------------------
     10. PARTE 11: SELECTOR DE ESCUDERÍA + AUTO GRANDE + CORTINA DE COLOR
     ------------------------------------------------------------------------ */
  var fanGrid = document.getElementById('fan-grid');
  var fanConfirmed = document.getElementById('fan-confirmed');

  function showFanConfirmation(team) {
    if (!fanGrid || !fanConfirmed) return;
    fanGrid.style.display = 'none';
    fanConfirmed.style.display = 'block';
    fanConfirmed.innerHTML =
      '<div class="fan-confirmed" style="border-color:' + team.color + '">' +
      '<div class="fan-confirmed-logo">' + getTeamLogoSvg(team.id) + '</div>' +
      '<div>' +
      '<p class="eyebrow" style="margin:0;">' + team.base + ' · ' + team.titles + (team.titles === 1 ? ' título de Constructores' : ' títulos de Constructores') + '</p>' +
      '<h3 class="fan-confirmed-title">¡TE HAS SUMADO A APOYAR A LA ESCUDERÍA <span style="color:' + team.color + '">' + team.name.toUpperCase() + '</span>!</h3>' +
      '<p class="section-copy" style="margin-top:10px;font-size:15px;">' + team.fact + '</p>' +
      '<div class="fan-actions">' +
      '<button type="button" id="btn-change-team" class="btn-white">↻ Cambiar escudería</button>' +
      '<button type="button" id="btn-share-story" class="btn-blue">Compartir webstory</button>' +
      '</div>' +
      '</div>' +
      '</div>';

    document.getElementById('btn-change-team').addEventListener('click', function () {
      fanConfirmed.style.display = 'none';
      fanGrid.style.display = 'grid';
    });

    document.getElementById('btn-share-story').addEventListener('click', function () {
      var btn = this;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(function () {});
      }
      btn.textContent = '✓ Enlace copiado';
      setTimeout(function () { btn.textContent = 'Compartir webstory'; }, 2400);
    });
  }

  function triggerCarPass(team) {
    if (prefersReduced) {
      showFanConfirmation(team);
      return;
    }
    var overlay = document.createElement('div');
    overlay.className = 'car-pass-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="car-pass-curtain" style="background:' + team.color + ';"></div>' +
      '<div class="car-pass-runner">' +
      '<div class="car-pass-wake" style="background:linear-gradient(90deg,rgba(0,0,0,0),#FDFDFD 60%,' + team.color + ');"></div>' +
      '<div class="car-pass-car-wrap">' + createCarSvg(team.color, '#FDFDFD', true) + '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    setTimeout(function () { showFanConfirmation(team); }, 620);
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 1200);
  }

  if (fanGrid) {
    GRID_TEAMS.forEach(function (team) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'team-card';
      card.innerHTML =
        '<span class="team-card-stripe" style="background:' + team.color + '"></span>' +
        '<span class="team-card-logo">' + getTeamLogoSvg(team.id) + '</span>' +
        '<span>' +
        '<span class="team-card-name" style="display:block;">' + team.name + '</span>' +
        '<span class="team-card-titles tabular-nums" style="display:block;">' + team.titles + (team.titles === 1 ? ' título constructores' : ' títulos constructores') + '</span>' +
        '</span>';
      card.addEventListener('click', function () { triggerCarPass(team); });
      fanGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------------
     11. CIERRE INTERACTIVO: SIMULADOR REAL DE REFLEJOS EN LARGADA F1
     ------------------------------------------------------------------------ */
  var gantryEl = document.getElementById('gantry-lights');
  var clockEl = document.getElementById('reaction-clock');
  var substatusEl = document.getElementById('reaction-substatus');
  var actionBtn = document.getElementById('btn-reaction-action');
  var feedbackEl = document.getElementById('reaction-feedback');

  var reactionPhase = 'idle';
  var lightsTimers = [];
  var reactionRaf = null;
  var reactionStartTime = 0;

  if (gantryEl) {
    var podsHtml = '';
    for (var p = 0; p < 5; p++) {
      podsHtml += '<div class="gantry-pod" data-pod="' + p + '"><span class="gantry-bulb"></span><span class="gantry-bulb"></span></div>';
    }
    gantryEl.innerHTML = podsHtml;
  }

  function clearReactionHandles() {
    while (lightsTimers.length) {
      clearTimeout(lightsTimers.pop());
    }
    if (reactionRaf !== null) {
      cancelAnimationFrame(reactionRaf);
      reactionRaf = null;
    }
  }

  function paintGantry(mode, litRedCount) {
    if (!gantryEl) return;
    var pods = gantryEl.querySelectorAll('.gantry-pod');
    pods.forEach(function (pod, idx) {
      var bulbs = pod.querySelectorAll('.gantry-bulb');
      bulbs.forEach(function (b) {
        b.classList.remove('is-red', 'is-green');
        if (mode === 'green') {
          b.classList.add('is-green');
        } else if (mode === 'red' && idx < litRedCount) {
          b.classList.add('is-red');
        }
      });
    });
  }

  function formatSeconds(ms) {
    return (ms / 1000).toFixed(3) + ' s';
  }

  function getDiagnostic(ms) {
    if (ms < 220) {
      return {
        tier: 'NIVEL POLE / CAMPEÓN',
        color: '#00E676',
        text: '¡REFLEJOS DE CAMPEÓN! Reaccionaste en ' + ms + ' ms. Tienes exactamente la misma velocidad de reacción que Max Verstappen o Lewis Hamilton en una largada real de Fórmula 1.'
      };
    }
    if (ms <= 350) {
      return {
        tier: 'PILOTO DE PARRILLA',
        color: '#00E676',
        text: '¡BUENA LARGADA! Marcaste ' + ms + ' ms. Tienes reflejos de piloto de parrilla (más rápido que el parpadeo de un ojo o un gato atento). Un poco más de práctica y peleas la pole.'
      };
    }
    if (ms <= 600) {
      return {
        tier: 'ZONA MEDIA',
        color: '#004AAD',
        text: 'RITMO DE ZONA MEDIA (' + ms + ' ms). Tienes los reflejos de un conductor atento en carretera, pero en la F1 ya te habrían adelantado tres autos antes de llegar a la primera curva.'
      };
    }
    return {
      tier: 'PRÁCTICA EN PISTA',
      color: '#E21E20',
      text: 'HAY QUE AFINAR LOS REFLEJOS (' + ms + ' ms). Debes estar mucho más atento a las luces del semáforo, ¡pero no te preocupes, puedes seguir intentándolo hasta lograr tiempo de corredor!'
    };
  }

  function startReactionSequence() {
    clearReactionHandles();
    reactionPhase = 'countdown';
    paintGantry('off', 0);

    if (clockEl) {
      clockEl.textContent = '0.000 s';
      clockEl.className = 'reaction-clock tabular-nums';
    }
    if (substatusEl) substatusEl.textContent = 'Preparando secuencia de luces...';
    if (feedbackEl) {
      feedbackEl.style.display = 'none';
      feedbackEl.className = 'reaction-feedback';
      feedbackEl.innerHTML = '';
    }
    if (actionBtn) {
      actionBtn.className = 'btn-reaction-action is-countdown';
      actionBtn.textContent = 'ESPERA LA LUZ VERDE... (¡NO TE ADELANTES!)';
    }

    for (var step = 1; step <= 5; step++) {
      (function (n) {
        lightsTimers.push(setTimeout(function () {
          paintGantry('red', n);
          if (substatusEl) substatusEl.textContent = 'Luces rojas encendidas: ' + n + ' / 5';
        }, n * 700));
      })(step);
    }

    var randomHold = 1000 + Math.random() * 1800;
    var greenDelay = 5 * 700 + randomHold;

    lightsTimers.push(setTimeout(function () {
      reactionPhase = 'green';
      paintGantry('green', 5);
      reactionStartTime = performance.now();

      if (clockEl) clockEl.className = 'reaction-clock tabular-nums is-green';
      if (substatusEl) substatusEl.textContent = '¡LUZ VERDE! DETÉN EL RELOJ';
      if (actionBtn) {
        actionBtn.className = 'btn-reaction-action is-green';
        actionBtn.textContent = '¡FRENAR / DETENER CRONÓMETRO AHORA!';
      }

      function tick() {
        if (reactionPhase !== 'green') return;
        var nowMs = performance.now() - reactionStartTime;
        if (clockEl) clockEl.textContent = formatSeconds(nowMs);
        reactionRaf = requestAnimationFrame(tick);
      }
      reactionRaf = requestAnimationFrame(tick);
    }, greenDelay));
  }

  if (actionBtn) {
    actionBtn.addEventListener('click', function () {
      if (reactionPhase === 'idle' || reactionPhase === 'finished' || reactionPhase === 'jump_start') {
        startReactionSequence();
        return;
      }

      if (reactionPhase === 'countdown') {
        clearReactionHandles();
        reactionPhase = 'jump_start';
        if (clockEl) {
          clockEl.textContent = '0.000 s';
          clockEl.className = 'reaction-clock tabular-nums is-fault';
        }
        if (substatusEl) substatusEl.textContent = 'Penalización FIA · Salida anticipada';
        if (actionBtn) {
          actionBtn.className = 'btn-reaction-action';
          actionBtn.textContent = 'VOLVER A INTENTAR';
        }
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.className = 'reaction-feedback is-fault';
          feedbackEl.innerHTML =
            '<p style="margin:0;font-size:15px;font-weight:900;text-transform:uppercase;letter-spacing:0.04em;color:#E21E20;">' +
            '¡SALIDA EN FALSO (JUMP START)! Te adelantaste antes de la luz verde.' +
            '</p>';
        }
        return;
      }

      if (reactionPhase === 'green') {
        var finalMs = Math.max(1, performance.now() - reactionStartTime);
        var roundedMs = Math.round(finalMs);
        clearReactionHandles();
        reactionPhase = 'finished';

        if (clockEl) {
          clockEl.textContent = formatSeconds(finalMs);
          clockEl.className = 'reaction-clock tabular-nums is-green';
        }
        if (substatusEl) substatusEl.textContent = 'Tiempo registrado: ' + roundedMs + ' ms';
        if (actionBtn) {
          actionBtn.className = 'btn-reaction-action';
          actionBtn.textContent = 'VOLVER A INTENTAR';
        }

        var diag = getDiagnostic(roundedMs);
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.className = 'reaction-feedback';
          feedbackEl.style.borderColor = diag.color;
          feedbackEl.innerHTML =
            '<div class="reaction-feedback-head">' +
            '<span class="reaction-feedback-tier" style="color:' + diag.color + ';">' + diag.tier + '</span>' +
            '<span class="reaction-feedback-ms">' + formatSeconds(finalMs) + ' (' + roundedMs + ' ms)</span>' +
            '</div>' +
            '<p class="reaction-feedback-copy">' + diag.text + '</p>';
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     12. REVELADO ÚNICO AL HACER SCROLL (IntersectionObserver once, 60fps)
     ------------------------------------------------------------------------ */
  var revealTargets = document.querySelectorAll('.reveal-on-scroll');
  if (revealTargets.length && 'IntersectionObserver' in window && !prefersReduced) {
    revealTargets.forEach(function (el) { el.classList.add('is-pending'); });
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebstory);
  } else {
    initWebstory();
  }
})();
