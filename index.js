// DATA STOK BARANG
let daftarBarang = [
    { nama: "Teh Botol", harga: 5000 },
    { nama: "Indomie", harga: 3000 },
    { nama: "Roti", harga: 7000 },
    { nama: "Air Mineral", harga: 4000 },
    { nama: "Susu", harga: 6000 },
    { nama: "Gula", harga: 8000 },
    { nama: "Kopi", harga: 10000 },
    { nama: "Sikat Gigi", harga: 12000 },
    { nama: "Sabun Mandi", harga: 9000 },
    { nama: "Shampoo", harga: 15000 },
    { nama: "Pasta Gigi", harga: 11000 },
    { nama: "Minyak Goreng", harga: 14000 },
    { nama: "Beras", harga: 20000 },
    { nama: "Telur", harga: 18000 },
    { nama: "Daging Ayam", harga: 25000 },
    { nama: "Ikan", harga: 30000 },
    { nama: "Sayur Mayur", harga: 16000 },
    { nama: "Buah-buahan", harga: 22000 },
    { nama: "Cokelat", harga: 13000 },
    { nama: "Permen", harga: 4000 },
    { nama: "gamepad", harga: 700000 },
    { nama: "headset", harga: 500000 },
    { nama: "keyboard", harga: 300000 },
    { nama: "mouse", harga: 150000 },
    { nama: "monitor", harga: 1200000 },

];

// KERANJANG BELANJA
let barangDibeli = [];

// DOM ELEMENT
const namaInput = document.getElementById("namaBarang");
const hargaInput = document.getElementById("hargaBarang");
const qtyInput = document.getElementById("qtyBarang");

const listBarang = document.getElementById("listBarang");
const barangDibeliList = document.getElementById("barangDibeli");
const grandTotalDisplay = document.getElementById("grandTotal");


// TAMPILKAN DAFTAR BARANG TOKO
function tampilkanDaftarBarang() {
  listBarang.innerHTML = "";

  daftarBarang.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.nama}</td>
      <td>Rp ${item.harga.toLocaleString()}</td>
      <td>-</td>
      <td>-</td>
    `;
    listBarang.appendChild(row);
  });
}


// EVENT BUTTON TAMBAH
document.getElementById("tambahBtn").addEventListener("click", () => {

  let nama = namaInput.value.trim();
  let harga = parseInt(hargaInput.value);
  let qty = parseInt(qtyInput.value);

  // CEK INPUT
  if (!nama || isNaN(harga) || isNaN(qty)) {
    alert("Isi semua data dengan benar!");
    return;
  }

  // CEK BARANG ADA DI STOK
  let barangStock = daftarBarang.find(b => b.nama.toLowerCase() === nama.toLowerCase());

  if (!barangStock) {
    alert("Barang tidak ada dalam daftar!");
    return;
  }

  // BUAT BARANG BARU UNTUK KERANJANG
  let barang = {
    nama: nama,
    harga: harga,
    qty: qty,
    total: harga * qty
  };

  // MASUKKAN KE KERANJANG
  barangDibeli.push(barang);

  // TAMPILKAN DI TABEL KEDUA
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${barang.nama}</td>
    <td>Rp ${barang.harga.toLocaleString()}</td>
    <td>${barang.qty}</td>
    <td>Rp ${barang.total.toLocaleString()}</td>
  `;
  barangDibeliList.appendChild(row);

  // UPDATE TOTAL
  hitungTotal();

  // BERSIHKAN INPUT
  namaInput.value = "";
  hargaInput.value = "";
  qtyInput.value = "";
});


// HITUNG TOTAL
function hitungTotal() {
  let total = barangDibeli.reduce((acc, item) => acc + item.total, 0);
  grandTotalDisplay.textContent = `Total: Rp ${total.toLocaleString()}`;
}


// TAMPILKAN BARANG TOKO SAAT AWAL
tampilkanDaftarBarang();
