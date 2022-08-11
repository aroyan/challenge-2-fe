/**
 *
 * @param {object} dataPenjualan
 * @return {object}
 */
const getInfoPenjualan = (dataPenjualan) => {
  const totalModal = dataPenjualan
    .map((x) => x.hargaBeli * (x.totalTerjual + x.sisaStok))
    .reduce((acc, prev) => acc + prev);

  const totalPenjualan = dataPenjualan
    .map((x) => x.hargaJual * (x.totalTerjual + x.sisaStok))
    .reduce((acc, prev) => acc + prev);

  const totalKeuntungan =
    dataPenjualan
      .map((x) => x.hargaJual * (x.totalTerjual + x.sisaStok))
      .reduce((acc, prev) => acc + prev) - totalModal;

  const persentaseKeuntungan = Math.round(
    (totalKeuntungan / totalPenjualan) * 100
  );

  const produkBukuTerlaris = dataPenjualan.sort(
    (x, y) => y.totalTerjual - x.totalTerjual
  )[0].namaProduk;

  const penulisTerlaris = dataPenjualan.reduce((allSeler, seller) => {
    allSeler[seller.penulis] ??= 0;
    allSeler[seller.penulis] += seller.totalTerjual;
    return allSeler;
  }, {});

  let keys = Object.keys(penulisTerlaris);
  let min = keys[0];
  let max = keys[0];

  for (let i = 1; i < keys.length; i++) {
    let val = keys[i];
    if (penulisTerlaris[val] < penulisTerlaris[min]) min = val;
    if (penulisTerlaris[val] > penulisTerlaris[max]) max = val;
  }

  const result = {
    totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString()}`,
    totalModal: `Rp. ${totalModal.toLocaleString()}`,
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
    produkBukuTerlaris,
    penulisTerlaris: max,
  };
  return result;
};

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
