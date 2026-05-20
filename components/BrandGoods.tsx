const goods = [
  "Tシャツ",
  "トートバッグ",
  "エプロン",
  "キャップ",
  "マグカップ",
  "水筒",
  "ステッカー",
  "ギフトボックス",
  "ショップカード",
  "のぼり",
  "風呂敷",
  "包装紙",
];

export function BrandGoods() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {goods.map((item, index) => (
        <div
          className="group flex min-h-28 items-center justify-between rounded-[1.1rem] border border-sagittarius-water/40 bg-white px-5 py-4 shadow-line transition duration-300 hover:-translate-y-1 hover:border-sagittarius-gold/60 hover:shadow-soft"
          key={item}
        >
          <span className="serif-heading text-lg font-semibold text-sagittarius-navy">{item}</span>
          <span className="relative grid h-11 w-11 place-items-center rounded-full border border-sagittarius-gold/50 text-xs font-semibold text-sagittarius-gold">
            {String(index + 1).padStart(2, "0")}
            <span className="absolute h-px w-8 rotate-[-28deg] bg-sagittarius-water/70 transition duration-300 group-hover:w-10" />
          </span>
        </div>
      ))}
    </div>
  );
}
