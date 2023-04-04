function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }

    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    if (d1 > 31){
        return document.getElementById('age').innerHTML = 'Your have inputed an incorrect date'; 
    }

   else if (m1 > 12) {return document.getElementById('age').innerHTML = 'Your have inputed an incorrect date';}

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    if (d <= 31 && m <= 12 && y < 27 ){
        return  document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days, you are eligible for the job';
    }
    else if (d <= 31 && m <= 12 && y > 27){
        return document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days, So sorry you are older than required age, introduce the offer to your younger siblings or children';
    }

    else{
        return document.getElementById('age').innerHTML = "You have entered an incorrect date, kindly correct and try again later"
    }
}
