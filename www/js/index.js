


$(document).on("pagecreate","#main",function(){


    /*
    * Login function
    */
    $("#formLogin").submit(function( event ) {

      var email = $('#email').val();
      var password = $('#password').val();
      var callback = function(data){
        if(data["role"] === 1){
          $('#formLogin').attr('action', 'indexAdmin.html');
        }else if( data["role"] === 2){
          $('#formLogin').attr('action', 'indexCommittee.html');
        }else{
          $("#errorMessage").text(unescape(decodeURIComponent(data["error"])));
          var content = $("#dialogContent");
          var originalColor = content.css("background-color");
          $("#errorMessage").animate({
          opacity: 0
          }, 1000 )
          $("#errorMessage").animate({
          opacity: 1
          }, 200 )
         
        }
      }
      if(db_service.s_post("login/", {email: email, password: password}, callback)){
        return true;
      }else{
        return false;
      }
      
    });

    /*
    * Insert Committees
    */
    loadCommittees();
    loadPublications();


  $('div[data-role="dialog"]').on('pagebeforeshow', function(e, ui) {
    ui.prevPage.addClass("ui-dialog-background ");
  });
  
  $('div[data-role="dialog"]').on('pagehide', function(e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background ");
  });
});

$(document).on("pagebeforeshow","#committee",function(){
  var callback = function(data){
    data = data[0];
    $("#logoCommittee").attr('src', data["icon"]);
    $("#nameCommittee").text(data["name"]);
    $("#committeeInfo").css('background',data["color"]);
    var miembros = "<p class='text'>";
    for(var i = 0; i < data["members"].length; i++){
        miembros += "<b>"+data["members"][i].name+"</b></br>" +"<i>"+data["members"][i].email+"</i></br></br>"; 
    }
    miembros += "</p>";

    $("#infoCommittee").text(data["general_info"]);
    $("#functionsCommittee").text(data["function"]);
    $("#membersCommittee").append(miembros);
    $("#emailCommittee").text(data["email"]);
    
  }
  if(urlParam("committee") !== undefined){
    db_service.get("committee/committee_id/"+urlParam("committee"), callback);
  }
  // loadCommittees();
  // loadPublications();
});


function loadCommittees(){
    var templateCommittees = '<li class="comite">'+
        '<a style="background-color:$color;" href="#" onclick="showCommittee($id)" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> '+
          '<div class="botonMenu" >'+
            '<div class="punto"><img src="$icon" width="26" height="26" border="0"></div>'+
            '<div class="nombre">$name</div>'+
          '</div>'+
       ' </a>'+
      '</li>'
    // var data = [ 
    //   {name:"Responsabilidad Social", color:"#FF7D1F", page:"#", icon:"iconos/icon_rsu_circle.png"},
    //   {name:"Egresados", color:"#4C6BA2", page:"#", icon:"iconos/icon_egresados_circle.png"},
    //   {name:"Calidad", color:"#E52B33", page:"#", icon:"iconos/icon_calidad_circle.png"},
    //   {name:"Educación Continuada", color:"#20B07F", page:"#", icon:"iconos/icon_continuada_circle.png"},
    //   {name:"Curricular", color:"#F15A4B", page:"#", icon:"iconos/icon_curricular_circle.png"},
    //   {name:"Comunicaciones", color:"#AECC60", page:"#", icon:"iconos/icon_comunicaciones_circle.png"},
    //   {name:"Investigaciones", color:"#C12E86", page:"#", icon:"iconos/icon_investigacion_circle.png"},
    //   {name:"Externo", color:"#619543", page:"#", icon:"iconos/icon_externo_circle.png"},
    //   {name:"Éxito Estudiantil", color:"#662D91", page:"#", icon:"iconos/icon_exito_circle.png"},
    //   {name:"Internacionalización", color:"#42BDED", page:"#", icon:"iconos/icon_internacionalizacion_circle.png"},
    //   {name:"TIC", color:"#F9B924", page:"#", icon:"iconos/icon_tic_circle.png"}
    // ];
    var dataTemplateCommittees = [{field: "id"}, {field: "color"}, {field: "name"},{field: "page"},{field: "icon"}]
    callback = function(data){
      return ux_service.createHTMLComponents(templateCommittees, dataTemplateCommittees, $("#listCommittees"), data);
    }
    db_service.get("committee", callback);
}
function loadPublications(){
   var publicationsTemplate = '<div class="public-destacado">'+
      '<div style="background-color: $color" class="public-encabezado">'+
        '<div class="public-titulo">$title </div>'+
        '<div class="public-fecha">$date</div></div>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">$content</div>'+
        '<div class="public-imagen"></div>'+
        '<div style="color: $color;" class="public-comite">$name</div>'+
      '</div></div>';

  var dataPublicationsTemplate = [{field: "color"}, {field: "name"},{field: "content"},{field: "date"}]
  data = [ 
    {name:"Responsabilidad Social", color:"#FF7D1F", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Egresados", color:"#4C6BA2", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Calidad", color:"#E52B33", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Educación Continuada", color:"#20B07F", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Curricular", color:"#F15A4B", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Comunicaciones", color:"#AECC60", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Investigaciones", color:"#C12E86", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Externo", color:"#619543", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Éxito Estudiantil", color:"#662D91", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"Internacionalización", color:"#42BDED", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    {name:"TIC", color:"#F9B924", date:"25/05/2017", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."}
  ];
  ux_service.createHTMLComponents(publicationsTemplate, dataPublicationsTemplate, $("#divPublications"), data);
}
function showCommittee(id_committee){
    $.mobile.changePage('#committee', {
        dataUrl: "index.html#committee?committee="+id_committee,
        transition : "slideup"
    });
}

var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}


