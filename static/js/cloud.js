function displayCompanies() {
  var i;
  var tab = ["ADHOC PES FRANCE","AEROLIA","AIR FRANCE","AIRBUS","AIRCELLE","ALSTOM TRANSPORT","APTAR",
  "ARCELOR MITTAL","AREVA","ATOS","AUTOCLAVE","BEC FRERES","BNP","BNP PARIBAS ARBITRAGE","BOODY BOOMERS",
  "BOSCH REXORTH","CAILLAU","CAP GEMINI","CDC INFORMATIQUE","CETIM","CHANEL","CINETIC SERVICE","CREDIT AGRICOLE",
  "DASSAULT SYSTEMES","DEFONTAINE","EADS Sogerma","EDF","ETABLISSEMENT DENIS","EUROCOPTER",
  "EVOSYS","FAURECIA","FEDERAL MOGUL","FEDERAL MOGUL","GLAXO SMITHKLINE","GOODRICH","GRIESSER",
  "HDS Design","HISPANO SUIZA","HOWDEN","HP","IBM","JOHN DEERE","JSPM","JTEKT",
  "KNORR BRESME","LEGRAND","LES STRATIFIES","L'OREAL","MAGUIN","MAJENCIA","MESSIER BUGATTI DOWTY",
  "Multiposting","NESTLE","Nexter","PANHARD","PLACOPLATRE ST GOBAIN","POCLAIN HYDRAULIC","PROCTER & GAMBLE",
  "PSA","RENAULT","SAGEM","SAINT GOBAIN","SANDVIK","SARTORIUS ","F-TECH","SERVAIR",
  "SNCF","SNECMA","SOLIDCAM","SOPROCOS","Technip","THALES","TLH TECHNOLOGIES","TURBOMECA",
  "V&M FRANCE","VALEO TRANSMISSIONS","VALLOUREC","VERALLIA"];
  var content = document.getElementById('liste');
  for (i = 0; i < tab.length ; i++) {
    content.innerHTML += "<li> <a href=#>"+tab[i]+"</a></li>";
  }
  try {
    TagCanvas.textColour = '#2D6ABC';
    TagCanvas.minBrightness = 0;
    TagCanvas.outlineThickness = 3;
    TagCanvas.outlineColour = '#999999';    
    TagCanvas.wheelZoom = false;
    TagCanvas.minBrightness = 0;
    TagCanvas.depth = 1.3;
    TagCanvas.Start('myCanvas');
  } 
  catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
}