function update_field(){
    var result = $('#tanka').val() * $('#kosu').val();
    $('#result').text(result);
}
$(function() {
  $('input[type="number"]').on('keyup change', function() {
    update_field();
  });
});