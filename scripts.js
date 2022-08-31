//IMAGENES
var imgitem1 = "<div class='imgresult'><img class='resultitem1' src='images/pslv.png'> ";
var imgitem2 = "<img class='resultitem1' src='images/psla.png'> ";
var imgitem3 = "<img class='resultitem1' src='images/pslr.png'> ";
var imgacero1 = "<img class='resultacero' src='images/acerov.png'> ";
var imgacero2 = "<img class='resultacero' src='images/aceroa.png'> ";
var imgacero3 = "<img class='resultacero' src='images/aceror.png'> ";
var imgitem4 = "<img class='resultitem1' src='images/omv.png'> ";
var imgitem5 = "<img class='resultitem1' src='images/oma.png'> ";
var imgitem6 = "<img class='resultitem1' src='images/omr.png'> ";
//DATOS
var dsarm = 100000;
var cobrearm = 800000;
var horbT = 100;
var robT = 1000;
var obT = 10000;
var hpslT = 100;
var rpslT = 1000;
var pslT = 10000;
var haTo = 300;
var raTo = 3000;
var aTo = 30000;

var uds = document.getElementById('dsi');
var pol = document.getElementById('polvoi');
var polt = document.getElementById('polvoit');
var cbr = document.getElementById('cobrei');
var mpl = document.getElementById('mplata');
//items verdes
var pslt = document.getElementById('pslti');
var psl = document.getElementById('psli');
var ct = document.getElementById('cti');
var c = document.getElementById('ci');
var at = document.getElementById('ati');
var a = document.getElementById('ai');
//items azules
var rpslt = document.getElementById('rpslti');
var rpsl = document.getElementById('rpsli');
var rct = document.getElementById('rcti');
var rc = document.getElementById('rci');
var rat = document.getElementById('rati');
var ra = document.getElementById('rai');
//item rojos
var hpslt = document.getElementById('hpslti');
var hpsl = document.getElementById('hpsli');
var hct = document.getElementById('hcti');
var hc = document.getElementById('hci');
var hat = document.getElementById('hati');
var ha = document.getElementById('hai');
//------------------------------------------
function agregarSeparadorMiles(numero) {
    let partesNumero = numero.toString().split('.');

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return partesNumero.join('.');
}

var arm = document.getElementById('armaswitch');
arm.addEventListener("click", arma);
arm.addEventListener("click", resultado);
arm.addEventListener("click", changearm);



function arma() {
    imgitem1 = "<div class='imgresult'><img class='resultitem1' src='images/pslv.png'> ";
    imgitem2 = "<img class='resultitem1' src='images/psla.png'> ";
    imgitem3 = "<img class='resultitem1' src='images/pslr.png'> ";
    imgitem4 = "<img class='resultitem1' src='images/omv.png'> ";
    imgitem5 = "<img class='resultitem1' src='images/oma.png'> ";
    imgitem6 = "<img class='resultitem1' src='images/omr.png'> ";
    imgacero1 ="<img class='resultacero' src='images/acerov.png'> ";
    imgacero2 = "<img class='resultacero' src='images/aceroa.png'> ";
    imgacero3 = "<img class='resultacero' src='images/aceror.png'> ";
    cobrearm = 800000;
    dsarm = 100000;
}

function changearm() {
  document.getElementById("imgitem1t").className = "pslvt";
  document.getElementById("imgitem1").className = "pslv";
  document.getElementById("imgitem1R").className = "psla";
  document.getElementById("imgitem1Rt").className = "pslat";
  document.getElementById("imgitem1H").className = "pslr";
  document.getElementById("imgitem1Ht").className = "pslrt";
  document.getElementById("imgitem2t").className = "omvt";
  document.getElementById("imgitem2").className = "omv";
  document.getElementById("imgitem2R").className = "oma";
  document.getElementById("imgitem2Rt").className = "omat";
  document.getElementById("imgitem2H").className = "omr";
  document.getElementById("imgitem2Ht").className = "omrt";
  document.getElementById("imgacerovt").className = "acerovt";
  document.getElementById("imgacerov").className = "acerov";
  document.getElementById("imgaceroat").className = "aceroat";
  document.getElementById("imgaceroa").className = "aceroa";
  document.getElementById("imgaceroH").className = "aceror";
  document.getElementById("imgaceroHt").className = "acerort";

}

var rop = document.getElementById('ropaswitch');
rop.addEventListener("click", ropa);
rop.addEventListener("click", changerop);
rop.addEventListener("click", resultado);

function ropa() {
    imgitem1 = "<div class='imgresult'><img class='resultitem1' src='images/quintaesenciav.png'> ";
    imgitem2 = "<img class='resultitem1' src='images/quintaesenciaa.png'> ";
    imgitem3 = "<img class='resultitem1' src='images/quintaesenciar.png'> ";
    imgitem4 = "<img class='resultitem1' src='images/baratijav.png'> ";
    imgitem5 = "<img class='resultitem1' src='images/baratijaa.png'> ";
    imgitem6 = "<img class='resultitem1' src='images/baratijar.png'> ";
    imgacero1 ="<img class='resultacero' src='images/acerov.png'> ";
    imgacero2 = "<img class='resultacero' src='images/aceroa.png'> ";
    imgacero3 = "<img class='resultacero' src='images/aceror.png'> ";
    cobrearm = 400000;
    dsarm = 50000;
}

function changerop() {
  document.getElementById("imgitem1t").className = "quintaesenciavt";
  document.getElementById("imgitem1").className = "quintaesenciav";
  document.getElementById("imgitem1Rt").className = "quintaesenciaat";
  document.getElementById("imgitem1R").className = "quintaesenciaa";
  document.getElementById("imgitem1Ht").className = "quintaesenciart";
  document.getElementById("imgitem1H").className = "quintaesenciar";
  document.getElementById("imgitem2t").className = "baratijavt";
  document.getElementById("imgitem2").className = "baratijav";
  document.getElementById("imgitem2R").className = "baratijaa";
  document.getElementById("imgitem2Rt").className = "baratijaat";
  document.getElementById("imgitem2H").className = "baratijar";
  document.getElementById("imgitem2Ht").className = "baratijart";
  document.getElementById("imgacerovt").className = "acerovt";
  document.getElementById("imgacerov").className = "acerov";
  document.getElementById("imgaceroat").className = "aceroat";
  document.getElementById("imgaceroa").className = "aceroa";
  document.getElementById("imgaceroH").className = "aceror";
  document.getElementById("imgaceroHt").className = "acerort";
}

var acc = document.getElementById('hornswitch');
acc.addEventListener("click", cuer);
acc.addEventListener("click", resultado);
acc.addEventListener("click", changecuer);

function cuer() {
    imgitem1 = "<div class='imgresult'><img class='resultitem1' src='images/fragv.png'> ";
    imgitem2 = "<img class='resultitem1' src='images/fraga.png'> ";
    imgitem3 = "<img class='resultitem1' src='images/fragr.png'> ";
    imgitem4 = "<img class='resultitem1' src='images/piedrav.png'> ";
    imgitem5 = "<img class='resultitem1' src='images/piedraa.png'> ";
    imgitem6 = "<img class='resultitem1' src='images/piedrar.png'> ";
    imgacero1 ="<img class='resultacero' src='images/platinov.png'> ";
    imgacero2 = "<img class='resultacero' src='images/platinoa.png'> ";
    imgacero3 = "<img class='resultacero' src='images/platinor.png'> ";
    cobrearm = 800000;
    dsarm = 100000;
}

function changecuer() {
  document.getElementById("imgitem1t").className = "fragvt";
  document.getElementById("imgitem1").className = "fragv";
  document.getElementById("imgitem1Rt").className = "fragat";
  document.getElementById("imgitem1R").className = "fraga";
  document.getElementById("imgitem1Ht").className = "fragrt";
  document.getElementById("imgitem1H").className = "fragr";
  document.getElementById("imgitem2t").className = "piedravt";
  document.getElementById("imgitem2").className = "piedrav";
  document.getElementById("imgitem2R").className = "piedraa";
  document.getElementById("imgitem2Rt").className = "piedraat";
  document.getElementById("imgitem2H").className = "piedrar";
  document.getElementById("imgitem2Ht").className = "piedrart";
  document.getElementById("imgacerovt").className = "platinovt";
  document.getElementById("imgacerov").className = "platinov";
  document.getElementById("imgaceroat").className = "platinoat";
  document.getElementById("imgaceroa").className = "platinoa";
  document.getElementById("imgaceroH").className = "platinor";
  document.getElementById("imgaceroHt").className = "platinort";
}

var boton = document.getElementById('valor');
boton.addEventListener("click", resultado);

function resultado(){

  //verde
  var iserPslv = parseInt(psl.value); if (isNaN(iserPslv)) iserPslv = 0; var userPslvt = parseInt(pslt.value); if (isNaN(userPslvt)) userPslvt = 0;
  var userPsl = iserPslv + userPslvt;
  var userCv = parseInt(c.value); if (isNaN(userCv)) userCv = 0; var userCvt = parseInt(ct.value); if (isNaN(userCvt)) userCvt = 0;
  var userC = userCv + userCvt;
  var userAv = parseInt(a.value); if (isNaN(userAv)) userAv = 0; var userAvt = parseInt(at.value); if (isNaN(userAvt)) userAvt = 0;
  var userA = userAv + userAvt;
  //azul
  var userPslra = parseInt(rpsl.value); if (isNaN(userPslra)) userPslra = 0; var userPslrat = parseInt(rpslt.value); if (isNaN(userPslrat)) userPslrat = 0;
  var userRpsl = userPslra + userPslrat;
  var userRca = parseInt(rc.value); if (isNaN(userRca)) userRca = 0; var userRcat = parseInt(rct.value); if (isNaN(userRcat)) userRcat = 0;
  var userRc = userRca + userRcat; 
  var userRaa = parseInt(ra.value); if (isNaN(userRaa)) userRaa = 0; var userRaat = parseInt(rat.value); if (isNaN(userRaat)) userRaat = 0;
  var userRa = userRaa + userRaat;
 
  //rojo 
  var userHpslr = parseInt(hpsl.value); if (isNaN(userHpslr)) userHpslr = 0; var userHpslrt = parseInt(hpslt.value); if (isNaN(userHpslrt)) userHpslrt = 0;
  var userHpsl = userHpslr + userHpslrt;
  var userHcr = parseInt(hc.value); if (isNaN(userHcr)) userHcr = 0; var userHcrt = parseInt(hct.value); if (isNaN(userHcrt)) userHcrt = 0;
  var userHc = userHcr + userHcrt;
  var userHar = parseInt(ha.value); if (isNaN(userHar)) userHar = 0;
  var userHart = parseInt(hat.value); if (isNaN(userHart)) userHart = 0;
  var userHa = userHar + userHart;

  var userDs = parseInt(uds.value); if (isNaN(userDs)) userDs = 0;
  var userPolvo = parseInt(pol.value); if (isNaN(userPolvo)) userPolvo = 0; var userPolvot = parseInt(polt.value); if (isNaN(userPolvot)) userPolvot = 0;
  var userPolv = userPolvo + userPolvot;
  var userCobreo = parseInt(cbr.value); if (isNaN(userCobreo)) userCobreo = 0;
  var userMoneda = parseInt(mpl.value)*10000; if (isNaN(userMoneda)) userMoneda = 0;
  var userCbr = userCobreo + userMoneda;

  var aceroHt = haTo - userHa;
  var aceroRt = raTo - userRa -(10*userHa);
  var aceroT = (10*(aceroRt)) - userA;

    if (aceroHt < 0) {
    aceroHt = 0;
    aceroRt = 0;
    aceroT = 0;
    }

    if (aceroRt < 0) {
    aceroRt = 0;
    aceroT = 0;
    }

    if (aceroT < 0) {
    aceroT = 0;
    }

  var itemHpsl = hpslT - userHpsl;
  var itemRpsl = rpslT - userRpsl - (10*userHpsl);
  var itemPsl = (10*(itemRpsl)) - userPsl;


    if (itemHpsl < 0) {
    itemHpsl = 0;
    itemRpsl = 0;
    itemPsl = 0;
    }

    if (itemRpsl < 0) {
    itemRpsl = 0;
    itemPsl = 0;
    }

    if (itemPsl < 0) {
    itemPsl = 0;
    }

  var itemHc = horbT - userHc;
  var itemRc = robT - userRc - (10*userHc);
  var itemC = (10*(itemRc)) - userC;

    if (itemHc < 0) {
    itemHc = 0;
    itemRc = 0;
    itemC = 0;
    }

    if (itemRc < 0) {
    itemRc = 0;
    itemC = 0;
    }

    if (itemC < 0) {
    itemC = 0;
    }

  var aceroPol = aceroHt * 25 + aceroRt * 2;
  var itemPol = itemHpsl * 25 + itemRpsl * 2;
  var itemDpolv = itemHc * 25 + itemRc * 2;
  var polvu = aceroPol + itemPol + itemDpolv - userPolv;
    if (polvu < 0) {
     polvu = 0;
    }

  
  var aceroCobre = aceroHt * 20000 + aceroRt * 2000;
  var itemCobre = itemHpsl * 20000 + itemRpsl * 2000;
  var itemDcobre = itemHc * 20000 + itemRc * 2000;
  var cobreT =  aceroCobre + itemCobre + itemDcobre + cobrearm - userCbr;
     if (cobreT < 0) {
     cobreT = 0;
    }

  var DsA= aceroHt * 5000 + aceroRt * 1000;
  var DsB = itemHpsl * 5000 + itemRpsl * 1000;
  var DsC = itemHc * 5000 + itemRc * 1000;
  var DsT = DsA + DsB + DsC + dsarm - userDs;
    if (DsT < 0) {
     DsT = 0;
    }

var sitemPsl = agregarSeparadorMiles(itemPsl);
var sitemRpsl = agregarSeparadorMiles(itemRpsl);
var sitemHpsl = agregarSeparadorMiles(itemHpsl);

var saceroT = agregarSeparadorMiles(aceroT);
var saceroRt = agregarSeparadorMiles(aceroRt);
var saceroHt = agregarSeparadorMiles(aceroHt);

var sitemC = agregarSeparadorMiles(itemC);
var sitemRc = agregarSeparadorMiles(itemRc);
var sitemHc = agregarSeparadorMiles(itemHc);

var spolvu = agregarSeparadorMiles(polvu);
var scobreT = agregarSeparadorMiles(cobreT);
var sDsT = agregarSeparadorMiles(DsT);

x.innerHTML = imgitem1 + sitemPsl +imgitem2 + sitemRpsl + imgitem3 + sitemHpsl;

y.innerHTML = imgacero1 + saceroT + imgacero2 + saceroRt + imgacero3 + saceroHt;

z.innerHTML = imgitem4 + sitemC + imgitem5 + sitemRc +
imgitem6 + sitemHc ;

xz.innerHTML = "<img class='resultitem1' src='images/polv.png'>"+ spolvu + "<img class='resultitem1' src='images/cobreimg.png'> "+ scobreT +
 "<img class='resultitem1' src='images/imgds.png'> " + sDsT +"</div>";
}



var x = document.getElementById("resultado");
var y = document.getElementById("resultado2");
var z = document.getElementById("resultado3");
var xz = document.getElementById("resultado4");


