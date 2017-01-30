none=false
one=false
two=false

function loadjsfile(filename){
  let r = document.getElementsByTagName('button');
  for (let i = (r.length-1); i >= 0; i--) {
    if(r[i].getAttribute('id') != 'a'){
        r[i].parentNode.removeChild(r[i]);
    }
  }
   var fileref = document.createElement('script');
   fileref.setAttribute('type', 'text/javascript');
   fileref.setAttribute('src', filename);
   if (typeof fileref !== 'undefined') {
      document.getElementsByTagName('head')[0].appendChild(fileref);
   }
}
