// Typekit
(function(d) {
    var config = {
    kitId: 'kci6xzu',
    scriptTimeout: 3000,
    async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// Pangu
(function (u, c) {
    var d = document, t = 'script', o = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    o.src = u;
    if (c) { o.addEventListener('load', function (e) { c(e); }); }
    s.parentNode.insertBefore(o, s);
})("{{ .Site.Params.PanguCDN }}/pangu/{{ .Site.Params.PanguVersion }}/pangu.min.js", function () {
    pangu.spacingPage();
});