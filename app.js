jQuery(document).ready(function($) {

    if (window.history && window.history.pushState) {
  
      $(window).on('popstate', function() {
  
        var split = location.hash.split("#!/");
        var name = split[1];
  
        if (name !== '') {
          var hash = window.location.hash;
          if (hash === '') {
              window.location='www.yourwebsite.com/page1.html';
              return false;
          }
        }
      });
  
      window.history.pushState('forward', null, './#forward');
    }
  
  });