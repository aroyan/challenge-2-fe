/**
 *
 * @param {array} dataPenjualan
 * @return {object}
 */
export const getInfoPenjualan = (dataPenjualan) => {
  const totalModal = dataPenjualan.reduce(
    (acc, curr) => acc + curr.hargaBeli * (curr.totalTerjual + curr.sisaStok),
    0
  );

  const totalPenjualan = dataPenjualan.reduce(
    (acc, curr) => acc + curr.hargaJual * (curr.totalTerjual + curr.sisaStok),
    0
  );

  const totalKeuntungan =
    dataPenjualan.reduce(
      (acc, curr) => acc + curr.hargaJual * (curr.totalTerjual + curr.sisaStok),
      0
    ) - totalModal;

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

export const dataPenjualanNovel = [
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

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("getInfoPenjualan", () => {
    expect(getInfoPenjualan(dataPenjualanNovel)).toStrictEqual({
      totalKeuntungan: "Rp. 17,654,000",
      totalModal: "Rp. 43,131,000",
      persentaseKeuntungan: "29%",
      produkBukuTerlaris: "Garis Waktu",
      penulisTerlaris: "Tere Liye",
    });
  });
}
