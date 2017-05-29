$(document).on("pagebeforeshow","#main",function(){
    var htmlTemplate="<li>"+
    			"<div class='ui-block-a itemGrid' style='background-color: $color'>"+
                      "<a href=''><img  src='$icon' alt=''></a>"+
                      "<h6>$name</h6>"+
                    "</div>";
              "</li>";

    var lista = $("#lista");
    var dataTemplate = [{field: "color"}, {field: "icon"},{field: "name"}]
    lista.empty();
    var callback = function(data){
      return ux_service.createHTMLComponents(htmlTemplate, dataTemplate, lista, data);
    }

    // db_service.get("/committee", callback);
    var comitesTemplate = '<li class="comite">'+
        '<a style="background-color:$color;" href="#comunicaciones" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> '+
          '<div class="botonMenu" >'+
            '<div class="punto"><img src="$logo" width="26" height="26" border="0"></div>'+
            '<div class="nombre">$name</div>'+
          '</div>'+
       ' </a>'+
      '</li>'
    var data = [ 
      {name:"Responsabilidad Social", color:"#FF7D1F", page:"#", logo:"iconos/icon_rsu_circle.png"},
      {name:"Egresados", color:"#4C6BA2", page:"#", logo:"iconos/icon_egresados_circle.png"},
      {name:"Calidad", color:"#E52B33", page:"#", logo:"iconos/icon_calidad_circle.png"},
      {name:"Educación Continuada", color:"#20B07F", page:"#", logo:"iconos/icon_continuada_circle.png"},
      {name:"Curricular", color:"#F15A4B", page:"#", logo:"iconos/icon_curricular_circle.png"},
      {name:"Comunicaciones", color:"#AECC60", page:"#", logo:"iconos/icon_comunicaciones_circle.png"},
      {name:"Investigaciones", color:"#C12E86", page:"#", logo:"iconos/icon_investigacion_circle.png"},
      {name:"Externo", color:"#619543", page:"#", logo:"iconos/icon_externo_circle.png"},
      {name:"Éxito Estudiantil", color:"#662D91", page:"#", logo:"iconos/icon_exito_circle.png"},
      {name:"Internacionalización", color:"#42BDED", page:"#", logo:"iconos/icon_internacionalizacion_circle.png"},
      {name:"TIC", color:"#F9B924", page:"#", logo:"iconos/icon_tic_circle.png"}
    ];
    var dataComitesTemplate = [{field: "color"}, {field: "name"},{field: "page"},{field: "logo"}]
    ux_service.createHTMLComponents(comitesTemplate, dataComitesTemplate, $("#listaCommites"), data);

    var publicacionesTemplate = '<div class="public-destacado">'+
      '<div style="background-color: $color" class="public-encabezado">'+
        '<div class="public-titulo">$title </div>'+
        '<div class="public-fecha">$date</div></div>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">$content</div>'+
        '<div class="public-imagen"></div>'+
        '<div style="color: $color;" class="public-comite">$name</div>'+
      '</div></div>';

    var dataPublicacionesTemplate = [{field: "color"}, {field: "name"},{field: "content"},{field: "date"}]
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
    ux_service.createHTMLComponents(publicacionesTemplate, dataPublicacionesTemplate, $("#divPublicaciones"), data);

});