import '../sass/main.scss'

import Cookies from 'js-cookie';

import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos.js';

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import 'select2'
import 'select2/dist/css/select2.min.css'

// Share
import './share/share';

$(document).ready(function () {

  // AOS
  AOS.init({
    once: true,
    duration: 1200,
  })

  // Open Menu Mobile
  const $headerMobile = $('.headerMb')
  const $menuMobileCheckbox = $('.headerMbCtnGridMenu input[type="checkbox"]')

  $menuMobileCheckbox.on('click', function () {
    if ($menuMobileCheckbox.is(':checked') == true) {
      $headerMobile.addClass('headerMbFixed')
    } else {
      $headerMobile.removeClass('headerMbFixed')
    }
  })

  // Open Faq
  $('.faqCtnGridList ul li').each(function (index) {
    $(this).on("click", function () {
      if ($(this).hasClass('faqActive')) {
        $(this).removeClass('faqActive')
      } else {
        $(this).parent().parent().children().children().removeClass('faqActive')
        $(this).addClass('faqActive')
      }
    })
  })

  // Banner Home
  const owlBannerHome = $('#owl-bannerHome')
  if (owlBannerHome) {
    owlBannerHome.owlCarousel({
      items: 1,
      loop: true,
      lazyLoad: true,
      autoplay: false,
      autoHeight: true,
      autoplayTimeout: 7500,
      autoplayHoverPause: true,
    })
  }

  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });

  $("#js-example-basic-hide-search").select2({
    minimumResultsForSearch: Infinity
  });


  // Theme Switcher
  const html = document.querySelector('html')
  const checkbox = document.querySelector('.switcherToggle')

  const handleStyles = (element, style) =>
    window
      .getComputedStyle(element)
      .getPropertyValue(style)

  const lightMode = {
    blackWhite: handleStyles(html, '--black-white'),
    whiteBlack: handleStyles(html, '--white-black'),

    whiteDark: handleStyles(html, '--white-dark'),
    darkWhite: handleStyles(html, '--dark-white'),

    lightDark: handleStyles(html, '--light-dark'),
    darkLight: handleStyles(html, '--dark-light'),

    darkYellow: handleStyles(html, '--dark-yellow'),

    blueDark: handleStyles(html, '--blue-dark'),
    blueLight: handleStyles(html, '--blue-light'),
  }

  const darkMode = {
    blackWhite: '#ffffff',
    whiteBlack: '#1e1e23',

    whiteDark: '#3c3c46',
    darkWhite: '#ffffff',

    lightDark: '#3c3c46',
    darkLight: '#dcdcff',

    darkYellow: '#ffdc80',

    blueDark: '#3c3c46',
    blueLight: '#dcdcff',
  }

  const transformKey = key =>
    '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

  const switchColors = (colors) => {
    Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
  }

  checkbox.addEventListener('change', ({ target }) => {
    let targerChecked = target.checked;
    let layoutMode;

    if (targerChecked) {
      layoutMode = 'dark';
      switchColors(darkMode);
    }

    if (!targerChecked) {
      layoutMode = 'light';
      switchColors(lightMode);
    }

    localStorage.setItem('layoutColorTheme', layoutMode);
  });

  const layoutColorThemeLocalStorage = function layoutColorThemeLocalStorage() {
    let currentTheme = localStorage.getItem('layoutColorTheme');

    let themes = {
      'light': lightMode,
      'dark': darkMode,
    }

    if (!currentTheme) {
      localStorage.setItem('layoutColorTheme', 'light');
      currentTheme = 'light';
    }

    switchColors(themes[currentTheme]);
    if (currentTheme == 'dark') checkbox.checked = true;

    setTimeout(() => {
      let $switcher = document.querySelector('.switcher');
      if ($switcher) $switcher.classList.add('active');
    }, 150);
  }

  layoutColorThemeLocalStorage();

})

// Cookie Lgpd
const $inLgpd = $('#lgpd')
const $lgpdAccept = $('.lgpdAccept')
const $lgpdDeny = $('.lgpdDeny')

if (Cookies.get('colic_lgpd')) {
  $inLgpd.addClass('lgpdNone')
}

$lgpdAccept.on('click', function () {
  Cookies.set('colic_lgpd', true, {
    expires: 365
  })
  $inLgpd.addClass('lgpdNone')
})

$lgpdDeny.on('click', function () {
  $inLgpd.addClass('lgpdNone')
})
