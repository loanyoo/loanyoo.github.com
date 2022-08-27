console.log('oos reza');

  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.xln3.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();

<script async src="https://www.googletagmanager.com/gtag/js?id=AW-319717068"></script>

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-319717068');

<!-- Meta Pixel Code -->
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '855929791767785');
fbq('track', 'PageView');
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=855929791767785&ev=PageView&noscript=1"
/></noscript>


    
document.addEventListener("DOMContentLoaded", function() {
    function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
     }
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
    let pixelId = atob(getParameterByName('epixel_id') || '');
    let emailId = atob(getParameterByName('email_id') || '');
     document.querySelector('#verify1').setAttribute('href', `https://application.avang.site/${link}?email=` + pixelId || emailId);
     document.querySelector('#verify2').setAttribute('href', `https://application.avang.site/${link}?email=` + pixelId || emailId);
    setTimeout(function(){document.querySelector('#verify1').click();},100)
  });
    


    
document.addEventListener("DOMContentLoaded", function() {   
    function getParamByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
     }
     document.querySelector('#unsubscribe').setAttribute('href', `https://crm.xln3.com/unsubscribe/?epixel_id=`+getParamByName('epixel_id'));
     setTimeout(function(){document.querySelector('#unsubscribe').click();},100)
  });
    
