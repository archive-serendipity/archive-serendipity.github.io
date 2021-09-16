(function(d,timeout) {
    window.addEventListener("load", function() {
      resizeHandler();
    }, false);
  
    window.addEventListener("resize", function () {
      if (!timeout) {
        timeout = setTimeout(function() {
          timeout = null;
          // do resize stuff
          resizeHandler();        
        }, 66);
      }
    }, false);
    function resizeHandler() {
          if (window.innerHeight < window.innerWidth) {
            if (!(d.body.classList.contains('landscape'))) {
              d.body.classList.add('landscape');
              d.body.appendChild(d.querySelector('nav'));  
              d.body.appendChild(d.querySelector('navtwo'));    
            }
          } else {
            if (d.body.classList.contains('landscape')) {
              d.body.classList.remove('landscape')
              d.querySelector('section').appendChild(d.querySelector('nav'));      
            }        
          }  
    }
  }(document));
  