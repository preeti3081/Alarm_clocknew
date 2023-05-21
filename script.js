
//1.displaying current time in 12 hour clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("current").innerText = time; 
    let t = setTimeout(function(){ 
      currentTime() }, 1000);
  }
currentTime();

//3. to add this alarm on alarm list and DOM to display
let alarm =[]
const alarmList = document.getElementById('save-alarms');
function addTaskToDOM(total_time){
  const li = document.createElement('li');
  li.innerHTML = `
          <span>${total_time}</span>
          <button class="delete-button">Delete</button><br><br>
  `;
  
  alarmList.appendChild(li);

  //4. Now, task left is to delete our alarm

  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    alarmList.removeChild(li);
    const index = alarm.indexOf(li);
    if (index !== -1) {
      alarm.splice(index, 1);//removed particular element
    }
  });
  alarm.push(li);
  reset();//to set input boxes to '00' again
}

  
//2. fetch time from input boxes and dispalyed through set alarm
var printButton = document.getElementById('set-alarm');
printButton.addEventListener('click', function() {
  var inputs = document.getElementsByClassName('time-input');
  var hour = inputs[0].value.padStart(2, '0');
  var minute = inputs[1].value.padStart(2, '0');
  var second = inputs[2].value.padStart(2, '0');
  var ampm = inputs[3].value;
  var total_time = hour + ':' + minute + ':' + second + ' ' + ampm;
  console.log(total_time);
  addTaskToDOM(total_time);
});

//to reset input boxes to '00' again
function reset(){
  var inputs = document.getElementsByClassName('time-input');
  for(let i=0;i<3;i++){
    inputs[i].value = null;
  }
}














