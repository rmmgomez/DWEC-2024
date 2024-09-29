const lang = /^es\b/.test(navigator.language) ? 'es' : 'en';
// resto del código se bloqueará hasta que se resuelva la instrucción await
const m = await import(`./messages-${lang}.js`);
console.log(m.hello);
