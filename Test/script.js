function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  for (let i = 0; i < cookies.length; i++) {
    const [k, v] = cookies[i].split('=');
    if (decodeURIComponent(k) === name) return decodeURIComponent(v || '');
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}

const banner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');

const COOKIE_NAME = 'portfolio_cookie_consent_6';
const COOKIE_DAYS = 365;

function showBanner() {
  banner.style.display = 'flex';
}

function hideBanner() {
  banner.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const consent = getCookie(COOKIE_NAME);
  if (consent === 'accepted') {
    hideBanner();
  } else {
    showBanner();
  }
});

acceptBtn.addEventListener('click', () => {
  setCookie(COOKIE_NAME, 'accepted', COOKIE_DAYS);
  hideBanner();
  console.log('Cookies accepted — cookie written.');
});

declineBtn.addEventListener('click', () => {
  setCookie(COOKIE_NAME, 'declined', COOKIE_DAYS);
  hideBanner();
  console.log('Cookies declined — preference written.');
});
