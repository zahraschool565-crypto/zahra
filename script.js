// 1. Pilih tombol berdasarkan ID-nya dari HTML
// Perbaikan: 'getElmentById' diubah menjadi 'getElementById' (ditambah huruf 'e')
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan event listener (pendengar kejadian) untuk aksi 'click' pada tombol
tombolSapa.addEventListener('click', function() {
  // 3. Tampilkan pesan pop-up saat tombol diklik oleh pengunjung
  alert('Halo! Terima kasih sudah berkunjung!');
});
