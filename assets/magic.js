const wx = '123456';
const qrCode = 'test/png';

$('body').find('[data-wx]').each(function(_, item) {
  $item = $(item);
  $item.text(wx);
});

$('body').find('[data-qrcode]').each(function(_, item) {
  $item = $(item);
  $item.attr('src', qrCode);
});
