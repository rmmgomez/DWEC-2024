const lang = /^es\b/.test(navigator.language) ? 'es' : 'en';
const m = await import(`./messages-${lang}.js`);
console.log(m.hello);
