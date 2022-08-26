/**
 *
 * @param {array} dataPenjualan
 * @return {number}
 */
export const getTotalPenjualan = (dataPenjualan) => {
  const result = dataPenjualan.reduce(
    (acc, curr) => acc + curr.totalTerjual,
    0
  );
  return result;
};

export const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("getTotalPenjualan", () => {
    expect(getTotalPenjualan(dataPenjualanPakAldi)).toBe(307);
  });
}
