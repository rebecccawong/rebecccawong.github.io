$(document).ready(function() {
  const mailto = $('a[href^="mailto"]');
  if (!mailto.length) return;

  mailto.addClass('mailto-link');
  mailto.append('<span class="mailto-message">Click to copy email</span>');

  mailto.on('click', function(e) {
    e.preventDefault();
    const email = $(this).attr('href').replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
      $(this).find('.mailto-message').text('Email copied to clipboard');
      setTimeout(() => $(this).find('.mailto-message').text('Click to copy email'), 2000);
    });
  });
});