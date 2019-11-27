var btn = document.getElementsByClassName("click-to-open");
var modal = document.getElementsByClassName('modal-window');
var span = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function(){
      var modal = document.getElementById(this.dataset.modal);
      modal.style.display = "block";
  }, false);
}

for (var i = 0; i < modal.length; i++) {
    modal[i].addEventListener("click", function(e) {
      if(e.target.className === 'close') {
        this.style.display = 'none';
      }
    }, false);
}
