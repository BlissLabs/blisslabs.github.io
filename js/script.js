var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

$(document).ready(function() {
  
  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $("#navbar").fadeIn(300);
    } else {
      $("#navbar").fadeOut(300);
    }

  });

  // Fetch footer links from API
  fetchFooterLinks();
});

async function fetchFooterLinks() {
  // Fallback static data
  const fallbackLinks = [
    { name: "Twitter/X", url: "https://x.com/stayblissful" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/stayblissful" },
    { name: "Telegram", url: "https://t.me/Team_Bliss_Community" },
    { name: "Facebook", url: "https://www.facebook.com/BlissLabs.Org" },
    { name: "Mastodon", url: "https://mastodon.social/@BlissLabs" },
    { name: "Instagram", url: "https://www.instagram.com/blisslabsorganization" },
    { name: "Reddit", url: "https://www.reddit.com/user/Team_Bliss" },
    { name: "Discord", url: "https://discord.gg/wwc4Aua4fp" }
  ];

  try {
    const response = await fetch('https://api.blissroms.org/api/public/organizations/blisslabs');
    const data = await response.json();
    
    if (data.success && data.data.links) {
      updateFooterLinks(data.data.links);
    } else {
      updateFooterLinks(fallbackLinks);
    }
  } catch (error) {
    console.error('Error fetching footer links, using fallback data:', error);
    updateFooterLinks(fallbackLinks);
  }
}

function updateFooterLinks(links) {
  const socialIconsContainer = document.querySelector('.soc-icons');
  if (!socialIconsContainer) return;
  
  // Clear existing links
  socialIconsContainer.innerHTML = '';
  
  // Social media icon mapping
  const iconMapping = {
    'Website': 'fa-external-link-alt',
    'Twitter/X': 'fa-twitter',
    'LinkedIn': 'fa-linkedin',
    'Telegram': 'fa-telegram',
    'Facebook': 'fa-facebook',
    'Mastodon': 'fa-mastodon',
    'Instagram': 'fa-instagram',
    'Reddit': 'fa-reddit',
    'Discord': 'fa-discord'
  };
  
  // Add new links from API
  links.filter(link => link.name !== 'Website').forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i');
    
    a.href = link.url;
    a.className = 'text-muted';
    a.target = '_blank';
    
    const iconClass = iconMapping[link.name] || 'fa-link';
    i.className = `fab fa fa-fw ${iconClass}`;
    
    a.appendChild(i);
    li.appendChild(a);
    socialIconsContainer.appendChild(li);
  });
}




(function () {
   'use strict';
	
	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		
		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';

		// TYPING EFFECT
		Typed.new('#typed', {
            stringsElement: document.getElementById('typed-strings'),
			loop: true,
			typeSpeed: 7,
			backSpeed: 2,
			startDelay: 1000,
			backDelay: 1200
        });
	}; // all loaded
	
	  
}());





/*
	PLUGINS
*/

