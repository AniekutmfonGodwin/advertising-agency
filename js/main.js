

    document.addEventListener('DOMContentLoaded', function() {
        const dropdown = document.getElementsByClassName('dropdown-trigger');

        
        [...dropdown].map((value)=>{
            value.addEventListener('click',()=>{
              let id = value.getAttribute('data-target');
              let content = document.getElementById(id);
              content.classList.contains("d-show")?
             content.classList.remove("d-show"):
             content.classList.add("d-show")
            })
        });
    });