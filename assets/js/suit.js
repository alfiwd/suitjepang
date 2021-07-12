const batu = document.querySelector(".batu");
const gunting = document.querySelector(".gunting");
const kertas = document.querySelector(".kertas");
const scorePlayer = document.querySelector(".angkaPlayer");
const scoreComputer = document.querySelector(".angkaComputer");
const tombolReset = document.querySelector(".reset");
const tombolSelesai = document.querySelector(".selesai");
const tombolMulai = document.querySelector(".tombol-mulai");
const containerAwal = document.querySelector(".container-awal");
var hasilPlayer = document.querySelector(".hasilPlayer");
var hasilComputer = document.querySelector(".hasilComputer");
var hasil = document.querySelector(".hasil");
var off = document.querySelector(".off");
var on = document.querySelector(".on");
var scoreAngkaPlayer = 0;
var scoreAngkaComputer = 0;
var backsound = document.querySelector(".backsound");

function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) {
    return "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "gunting";
  } else {
    return "kertas";
  }
}
function getHasil(player, comp) {
  if (player == comp) return "UH, HASILNYA SERI.";
  if (player == "batu") return comp == "gunting" ? "Hore, Kamu Menang!!!" : "Yah, Kamu Kalah...";
  if (player == "gunting") return comp == "kertas" ? "Hore, Kamu Menang!!!" : "Yah, Kamu Kalah...";
  if (player == "kertas") return comp == "batu" ? "Hore, Kamu Menang!!!" : "Yah, Kamu Kalah...";
}
function getGambar(gambar) {
  if (gambar == "batu") {
    return "<img src='assets/img/batu-icon.png' />";
  } else if (gambar == "gunting") {
    return "<img src='assets/img/gunting-icon.png'>";
  } else {
    return "<img src='assets/img/kertas-icon.png'>";
  }
}
function putarGambar() {
  const gambarAcak = document.createElement("img");
  hasilComputer.appendChild(gambarAcak);
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime;
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    gambarAcak.setAttribute("src", "assets/img/" + gambar[i++] + "-icon" + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}
function reset() {
  scoreAngkaPlayer = 0;
  scoreAngkaComputer = 0;
  scorePlayer.innerHTML = "0";
  scoreComputer.innerHTML = "0";
  hasilPlayer.innerHTML = "Pilih Salah Satu Gambar Untuk Mulai...";
  hasilComputer.innerHTML = "";
  hasil.innerHTML = "";
}
function klik() {
  const klik = new Audio("assets/sound/click.wav");
  klik.play();
}

tombolMulai.addEventListener("click", function () {
  off.classList.toggle("main");
  containerAwal.classList.toggle("off");
  klik();
  backsound.play();
});
batu.addEventListener("click", function () {
  const pilihanKomputer = getPilihanComputer();
  const pilihanPlayer = batu.className;
  const tampilHasil = getHasil(pilihanPlayer, pilihanKomputer);
  const gambarPlayer = getGambar(pilihanPlayer);
  const gambarComputer = getGambar(pilihanKomputer);

  klik();
  hasilPlayer.innerHTML = "Kamu Memilih " + pilihanPlayer + " " + gambarPlayer;
  hasilComputer.innerHTML = "Komputer Memilih " + " ";
  hasil.innerHTML = "";
  putarGambar();
  setTimeout(function () {
    hasilComputer.innerHTML = "Komputer Memilih " + pilihanKomputer + " " + gambarComputer;
    hasil.innerHTML = tampilHasil;
    if (tampilHasil == "Hore, Kamu Menang!!!") {
      scorePlayer.innerHTML = ++scoreAngkaPlayer;
    } else if (tampilHasil == "Yah, Kamu Kalah...") {
      scoreComputer.innerHTML = ++scoreAngkaComputer;
    }
  }, 1000);
});
gunting.addEventListener("click", function () {
  const pilihanKomputer = getPilihanComputer();
  const pilihanPlayer = gunting.className;
  const tampilHasil = getHasil(pilihanPlayer, pilihanKomputer);
  const gambarPlayer = getGambar(pilihanPlayer);
  const gambarComputer = getGambar(pilihanKomputer);

  klik();
  hasilPlayer.innerHTML = "Kamu Memilih " + pilihanPlayer + " " + gambarPlayer;
  hasilComputer.innerHTML = "Komputer Memilih " + " ";
  hasil.innerHTML = "";
  putarGambar();
  setTimeout(function () {
    hasilComputer.innerHTML = "Komputer Memilih " + pilihanKomputer + " " + gambarComputer;
    hasil.innerHTML = tampilHasil;
    if (tampilHasil == "Hore, Kamu Menang!!!") {
      scorePlayer.innerHTML = ++scoreAngkaPlayer;
    } else if (tampilHasil == "Yah, Kamu Kalah...") {
      scoreComputer.innerHTML = ++scoreAngkaComputer;
    }
  }, 1000);
});
kertas.addEventListener("click", function () {
  const pilihanKomputer = getPilihanComputer();
  const pilihanPlayer = kertas.className;
  const tampilHasil = getHasil(pilihanPlayer, pilihanKomputer);
  const gambarPlayer = getGambar(pilihanPlayer);
  const gambarComputer = getGambar(pilihanKomputer);

  klik();
  hasilPlayer.innerHTML = "Kamu Memilih " + pilihanPlayer + " " + gambarPlayer;
  hasilComputer.innerHTML = "Komputer Memilih " + " ";
  hasil.innerHTML = "";
  putarGambar();
  setTimeout(function () {
    hasilComputer.innerHTML = "Komputer Memilih " + pilihanKomputer + " " + gambarComputer;
    hasil.innerHTML = tampilHasil;
    if (tampilHasil == "Hore, Kamu Menang!!!") {
      scorePlayer.innerHTML = ++scoreAngkaPlayer;
    } else if (tampilHasil == "Yah, Kamu Kalah...") {
      scoreComputer.innerHTML = ++scoreAngkaComputer;
    }
  }, 1000);
});
tombolReset.addEventListener("click", function () {
  klik();
  const konfirmasi = confirm("Apakah ingin reset permainan?");
  if (konfirmasi == true) {
    reset();
  } else {
    return;
  }
});
tombolSelesai.addEventListener("click", function () {
  klik();
  const konfirmasi = confirm("Apakah ingin menyelesaikan permainan?");
  if (konfirmasi == true) {
    if (scoreAngkaPlayer > scoreAngkaComputer) {
      alert("Selamat kamu memenangkan pertandingan!!!\nScore\nKamu : " + scoreAngkaPlayer + "\nComputer : " + scoreAngkaComputer);
      reset();
      containerAwal.classList.toggle("off");
      off.classList.toggle("main");
    } else if (scoreAngkaPlayer < scoreAngkaComputer) {
      alert("Yahhh, kamu kalah dalam pertandingan...\nScore\nKamu : " + scoreAngkaPlayer + "\nComputer : " + scoreAngkaComputer);
      reset();
      containerAwal.classList.toggle("off");
      off.classList.toggle("main");
    } else {
      alert("Huuuhh, hasilnya seri\nScore\nKamu : " + scoreAngkaPlayer + "\nComputer : " + scoreAngkaComputer);
      reset();
      containerAwal.classList.toggle("off");
      off.classList.toggle("main");
    }
  }
});
