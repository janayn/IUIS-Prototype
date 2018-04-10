function validate(){
var username = document.getElementById("#studentid").val();
var password = document.getElementById("#password").val();

if( $("#username").val() == 'admin' & $("#password").val() == 'admin' )
{
    window.location = "file:///C:/Users/Ms/Documents/Janine%20Files/Mobile%20Computing/Project/index.html"; // Redirecting to other page.
} else {
    alert("wasap");
}
}

function redirect()
    {
        window.location = "file:///C:/Users/Ms/Documents/Janine%20Files/Mobile%20Computing/Mobile%20Computing%20-%20Finals%20Project/FINAL/home.html"; // Redirecting to other page.
    }


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
        }
        window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var d = 0; d < dropdowns.length; d++) {
                var openDropdown = dropdowns[d];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                              }
                            }
                          }
                        }
                        