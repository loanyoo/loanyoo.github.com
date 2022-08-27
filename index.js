console.log('oos reza');
$(document).ready(function(){

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('epixel_id');

  console.log(email);

  $('a.verify').attr("href", "https://application.avang.site/m_lending?email="+email);
  setTimeout(function(){
    window.location.href = $('a.verify').attr("href");
    $('a.verify').trigger('click');  
    console.log("Executed after 1 second");
}, 100);
$('a.verify').click(function(){
  console.log('fs');
})
})

