console.log('oos reza');
$(document).ready(function(){

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('epixel_id');

  console.log(email);


  url = window.location.href;
  if(url.search('mainlist') > 0) {
      link = "m_lending";
  }else if(url.search('puerto') > 0) {
      link = "p_lend";
  }else if(url.search('platin') > 0) {
      link = "plat_lending";
  }else if(url.search('labam') > 0) {
      link = "labam_lending";
  }else {
      link = "m_lending";
  }


  $('a.verify').attr("href", "https://crm.xln3.com/unsubscribe/?epixel_id="+email);

  setTimeout(function(){
    window.location.href = $('a.verify').attr("href");
    $('a.verify').trigger('click');  
    console.log("Executed after 1 second");
}, 50);


$('a.verify').click(function(){
  console.log('fs');
})
})

