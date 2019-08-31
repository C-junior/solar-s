 
$('input[type=radio][name=building]').on('change', function() {
    switch ($(this).val()) {
      case '1':
        $(".house").css("color", "#F07C02");
        $(".buisness").css("color", "gray");
        break;
      case '2':
        $(".buisness").css("color", "#F07C02");
        $(".house").css("color", "gray");
        break;
    }
  });

  $('input[type=checkbox]').on('change', function() {
    switch ($(this).val()) {
      case 'checked':
        $(".rs").css("color", "#F07C02");
        $(".buisness").css("color", "blue");
        break;
      case '2':
        $(".buisness").css("color", "#F07C02");
        $(".house").css("color", "gray");
        break;
    }
  });

  $(document).ready(function(){
    $('select').formSelect();    
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
  });

  $(".country-select").on('change', function(){
    var i= $('.country-select').val();
    if  ( i  == '2') {
      $("#state-select").hide();
      $("#city-select").hide();
    }
    else {
      $("#state-select").show();
      $("#city-select").show();
    }
  });

  $(".desc").hide();
  $(".find-us").on('change', function(){
    var k= $('.find-us').val();
    if  ( k  == '3') {
      $(".desc").show();
         }
    else {
      $(".desc").hide();
          }
  });

  
  $(document).ready(function(){
    $(".search-btn").click(function(){
      $(".search-menu").slideToggle("slow");
      $(".menu-main").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#simul-hide").hide();
    $(".modal-simul").click(function(){
      $("#simul-hide").show();
    });
  });


  function reset() {
    document.getElementById("myForm").reset();
    document.getElementById("house").checked = false;
    document.getElementById("empresa").checked = false;
    document.getElementById("empresa").style.color = "gray";
    document.getElementById("house").style.color = "gray";    
  }