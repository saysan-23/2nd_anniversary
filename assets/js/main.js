// ======================
// CLOCK REALTIME
// ======================
function updateClock(){
  const now = new Date();
  const clockEl = document.getElementById("clock");
  if(clockEl){
    clockEl.innerText = now.toLocaleTimeString();
  }
}
setInterval(updateClock,1000);
updateClock();


// ======================
// TIMER JADIAN
// 23 JANUARI 2024
// ======================
function updateAnniversaryTimer(){
  const startDate = new Date("2024-01-23T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const timerEl = document.getElementById("timer");
  if(timerEl){
    timerEl.innerHTML =
      `🤍 KITA UDAH BERSAMA 🤍 <br>
       ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }
}
setInterval(updateAnniversaryTimer,1000);
updateAnniversaryTimer();


// ======================
// LOVE GENERATOR 💙
// ======================
function createLove(){
  for(let i=0;i<3;i++){
    const love = document.createElement("div");
    love.className = "love";
    love.innerHTML = "🤍";
    love.style.left = Math.random()*100 + "vw";
    love.style.fontSize = (15 + Math.random()*25) + "px";
    love.style.animationDuration = (3 + Math.random()*3) + "s";
    document.body.appendChild(love);
    setTimeout(()=>love.remove(),6000);
  }
}
setInterval(createLove,400);


// ======================
// TYPING EFFECT
// ======================
function typingEffect(id,text){
  let i=0;
  const target=document.getElementById(id);
  if(!target) return;

  function type(){
    if(i<text.length){
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type,50);
    }
  }
  type();
}


// ======================
// MUSIC CONTROL
// ======================
const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("startBtn");

// klik pertama → mulai musik
document.addEventListener("click", function playMusicOnce(){
  if(bgm){
    bgm.play().catch(()=>{});
    sessionStorage.setItem("musicStarted","yes");
  }
  document.removeEventListener("click", playMusicOnce);
});

// kalau ada tombol start
if(startBtn && bgm){
  startBtn.addEventListener("click", ()=>{
    bgm.play().catch(()=>{});
    sessionStorage.setItem("musicStarted","yes");
    startBtn.style.display="none";
  });
}

// lanjutkan musik saat pindah halaman
window.addEventListener("load", () => {
  if(!bgm) return;

  const started = sessionStorage.getItem("musicStarted");
  if(started === "yes"){
    const savedTime = sessionStorage.getItem("musicTime");
    if(savedTime) bgm.currentTime = parseFloat(savedTime);
    bgm.play().catch(()=>{});
  }
});

// simpan waktu musik sebelum keluar halaman
window.addEventListener("beforeunload", () => {
  if(!bgm) return;
  sessionStorage.setItem("musicTime", bgm.currentTime);
});
