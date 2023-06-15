window.addEventListener('DOMContentLoaded',function(){

    function slideUp(el, duration = 300){
       
        el.style.height = el.offsetHeight + "px";
        el.offsetHeight;
        el.style.transitionProperty = "height, margin, padding";
        el.style.transitionDuration = duration + "ms";
        el.style.transitionTimingFunction = "ease";
        el.style.overflow = "hidden";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
        }, duration);
    };
    // slideDown
    function slideDown(el, duration = 300){
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
        display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight - 30;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
        // el.style.removeProperty("height");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
    }, duration);
    };
    // slideToggle
    function slideToggle(el, duration = 300) {
        
    if (window.getComputedStyle(el).display === "none") {
        return slideDown(el, duration);
    } else {
        return slideUp(el, duration);
    }
    };

    // 同じ階層の要素全て取得
    function getSiblings(e) {
       
        // for collecting siblings
        let siblings = []; 
        // if no parent, return no sibling
        if(!e.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = e.parentNode.firstChild;
        
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };
    // 親要素の同じ階層の要素全て取得(element以外)
    function getParents(element){
        
        var parent = element.parentNode;
        return getSiblings(parent);
    }

    var accordionTitles = document.querySelectorAll('.accordion__title');
    accordionTitles.forEach((accordionTitle) =>{
        accordionTitle.addEventListener('click',function(){
            accordionTitle.classList.toggle('is-active');
            slideToggle(accordionTitle.nextElementSibling);

            // 常に開いているアコーディオンは一つの状態
            var accordionItems = getParents(accordionTitle);
            console.log(accordionItems);
            accordionItems.forEach(accordionItem =>{
                var targetTitle = accordionItem.querySelector('.accordion__title');
                var targetContent = accordionItem.querySelector('.accordion__content');
                slideUp(targetContent);
                targetTitle.classList.remove('is-active');
            })
        })
    })
    });

