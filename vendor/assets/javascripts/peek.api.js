$( document ).ready(function() {
(function(idPrefix) {
   id = idPrefix+'-js'; if (document.getElementById(id)) return;
   var head = document.getElementsByTagName('head')[0];
   el = document.createElement('script'); window.peekButton='Book Now!'; el.id = id;
   var date = new Date; var stamp = date.getMonth()+"-"+date.getDate();
   el.src = "https://pirassets.s3.amazonaws.com/assets/widget_button.js?id=556750b166096e5b3d000613&ts="+stamp;
   head.appendChild(el); id = idPrefix+'-css'; el = document.createElement('link'); el.id = id;
   el.href = "https://pirassets.s3.amazonaws.com/assets/widget_button.css?id=556750b166096e5b3d000613&ts="+stamp;
   el.rel="stylesheet"; el.type="text/css"; head.appendChild(el);
 }('peek-booking-button'));
});