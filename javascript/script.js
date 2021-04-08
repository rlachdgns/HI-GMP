function modalOn() {
  document.getElementById("myModal").style.display = 'block';
}

function modalOff() {
  document.getElementById("myModal").style.display = 'none';
}

function NightandDay (){
  if(document.querySelector('.button_NightandDay').value ==='night'){
  document.querySelector('body').style.backgroundColor='black';

  document.querySelector('body').style.color='#78c4d4';
  document.querySelector('.button_NightandDay').style.color='#78c4d4';
  document.querySelector('.button_NightandDay').style.backgroundColor='black';

  document.querySelector('.button_NightandDay').innerHTML = '라이트모드로 보기';
  document.querySelector('.button_NightandDay').value='day'
}

else {
  document.querySelector('body').style.backgroundColor='white';

  document.querySelector('body').style.color='black';
  document.querySelector('.button_NightandDay').style.color='black';
  document.querySelector('.button_NightandDay').style.backgroundColor='white';
  document.querySelector('.button_NightandDay').innerHTML = '다크모드로 보기';
  document.querySelector('.button_NightandDay').value='night'
}
}

function dropdown() {
  if(document.getElementById("dropbtn").value ==='drop'){
  document.getElementById("dropdown-content-container").style.display = 'inline-block';
  document.getElementById("dropbtn").value ='up'

}
else{
  document.getElementById("dropdown-content-container").style.display = 'none';
  document.getElementById("dropbtn").value ='drop'
}
}
