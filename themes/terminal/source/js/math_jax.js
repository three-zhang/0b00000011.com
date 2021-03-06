MathJax.Hub.Config({
    "HTML-CSS": {
        preferredFont: "TeX",
        availableFonts: ["STIX", "TeX"],
        linebreaks: {automatic: true},
        EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50)
    },
    tex2jax: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        processEscapes: true,
        ignoreClass: "tex2jax_ignore|dno",
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    },
    TeX: {
        equationNumbers: {autoNumber: "AMS"},
        noUndefined: {attributes: {mathcolor: "red", mathbackground: "#FFEEEE", mathsize: "90%"}},
        Macros: {href: "{}"}
    },
    messageStyle: "none"
});

MathJax.Hub.Queue(function () {
    var all = MathJax.Hub.getAllJax(), i;
    for (i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
});
