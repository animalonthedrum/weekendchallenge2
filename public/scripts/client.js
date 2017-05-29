$(document).ready(function(){
  console.log("JS");
$('#addition').on('click', function(){
  console.log('add clicked');
  var addObject = {
    x: $('#valueOne').val(),
    y: $('#valueTwo').val(),
    type: 'add'
  };// end add object
  console.log(addObject);
  $.ajax({
    type: 'POST',
    url: '/addValue',
    data: addObject,
    success: function(response){
      console.log('back from post:', response);
      $('#sums').append('<p>' + response.result + '</p>');
    }
  });//end post add
});//add event
$('#subtract').on('click', function(){
  console.log('sub clicked');
  var subObject = {
    x: $('#valueOne').val(),
    y: $('#valueTwo').val(),
    type: 'subtract'
  };// end add object
  console.log(subObject);
  $.ajax({
    type: 'POST',
    url: '/subValue',
    data: subObject,
    success: function(response){
      console.log('back from post:', response);
      $('#sums').append('<p>' + response.result + '</p>');
    }
  });//end post add
});//sub event

$('#multiply').on('click', function(){
  console.log('mult clicked');
  var multObject = {
    x: $('#valueOne').val(),
    y: $('#valueTwo').val(),
    type: 'multiply'
  };//end mult object
  console.log(multObject);
  $.ajax({
    type:'POST',
    url: '/multValue',
    data: multObject,
    success: function(response){
      console.log('back from post:', response);
      $('#sums').append('<p>' + response.result + '</p>');
    }
  });// end mult ajax
});//end mult click

$('#divide').on('click', function(){
  console.log('div clicked');
  var divObject = {
    x: $('#valueOne').val(),
    y: $('#valueTwo').val(),
    type: 'divide'
  };//end mult object
  console.log(divObject);
  $.ajax({
    type:'POST',
    url: '/divValue',
    data: divObject,
    success: function(response){
      console.log('back from post:', response);
      $('#sums').append('<p>' + response.result + '</p>');
    }
  });// end div ajax
});//end div click


$('#clear').on('click', function(){
  console.log('click clear');
  $('#valueOne').val('');
  $('#valueTwo').val('');
  $('#sums').empty();
});//end clear function


});//end on ready
