// These events are available as Custom Event triggers in Google Tag Manager.
window.dataLayer = window.dataLayer || [];

document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  const destination = link.getAttribute('href') || '';
  if (destination.startsWith('tel:')) {
    window.dataLayer.push({ event: 'phone_click', contact_method: 'phone' });
  } else if (destination.startsWith('mailto:')) {
    window.dataLayer.push({ event: 'email_click', contact_method: 'email' });
  }
});

const quoteForm = document.querySelector('.contact-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', () => {
    // This records an attempted submission, not confirmed email delivery.
    window.dataLayer.push({ event: 'quote_form_submit', form_name: 'request_a_quote' });
  });
}
