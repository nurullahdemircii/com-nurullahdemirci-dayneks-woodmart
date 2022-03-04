document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('mouseover', function (e) {
            let el_link = this.querySelector('a[data-bs-toggle]');
    
            if(el_link != null){
                let nextEl = el_link.nextElementSibling;
                el_link.classList.add('show');
                nextEl.classList.add('show');
            }
        });
        element.addEventListener('mouseleave', function(e){
            let el_link = this.querySelector('a[data-bs-toggle]');

            if(el_link != null){
                let nextEl = el_link.nextElementSibling;
                el_link.classList.remove('show');
                nextEl.classList.remove('show');
            }
        });
      });
    
        document.querySelectorAll('.has-submenu a').forEach(function(element){
          element.addEventListener('mouseover', function (e) {
              let nextEl = this.nextElementSibling;
              if(nextEl && nextEl.classList.contains('megasubmenu')) {	
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                if(nextEl.style.display == 'block'){
                  nextEl.style.display = 'none';
                } else {
                  nextEl.style.display = 'block';
                }
              }
          });
        }) // end foreach
      }

    // end if innerWidth
    }); 
    // DOMContentLoaded  end