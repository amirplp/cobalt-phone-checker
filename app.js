/* ============================================================
   COBALT × CONGO — Phone Checker
   Data + interactivity
   ============================================================ */

const phoneGroups = [
  ["Apple", [
    ["iPhone SE (2020)", 1821], ["iPhone SE (2022)", 2018],
    ["iPhone 8", 1821], ["iPhone X", 2716], ["iPhone XR", 2942],
    ["iPhone XS", 2658], ["iPhone XS Max", 3174],
    ["iPhone 11", 3110], ["iPhone 11 Pro", 3046], ["iPhone 11 Pro Max", 3969],
    ["iPhone 12 mini", 2227], ["iPhone 12", 2815], ["iPhone 12 Pro", 2815], ["iPhone 12 Pro Max", 3687],
    ["iPhone 13 mini", 2438], ["iPhone 13", 3240], ["iPhone 13 Pro", 3095], ["iPhone 13 Pro Max", 4352],
    ["iPhone 14", 3279], ["iPhone 14 Plus", 4325], ["iPhone 14 Pro", 3200], ["iPhone 14 Pro Max", 4323],
    ["iPhone 15", 3349], ["iPhone 15 Plus", 4383], ["iPhone 15 Pro", 3274], ["iPhone 15 Pro Max", 4422],
    ["iPhone 16", 3561], ["iPhone 16 Plus", 4674], ["iPhone 16 Pro", 3582], ["iPhone 16 Pro Max", 4685]
  ]],
  ["Samsung", [
    ["Galaxy S20", 4000], ["Galaxy S20+", 4500], ["Galaxy S20 Ultra", 5000],
    ["Galaxy S21", 4000], ["Galaxy S21+", 4800], ["Galaxy S21 Ultra", 5000],
    ["Galaxy S22", 3700], ["Galaxy S22+", 4500], ["Galaxy S22 Ultra", 5000],
    ["Galaxy S23", 3900], ["Galaxy S23+", 4700], ["Galaxy S23 Ultra", 5000],
    ["Galaxy S24", 4000], ["Galaxy S24+", 4900], ["Galaxy S24 Ultra", 5000],
    ["Galaxy S25", 4000], ["Galaxy S25+", 4900], ["Galaxy S25 Ultra", 5000],
    ["Galaxy Note 20", 4300], ["Galaxy Note 20 Ultra", 4500],
    ["Galaxy Z Flip 3", 3300], ["Galaxy Z Flip 4", 3700], ["Galaxy Z Flip 5", 3700], ["Galaxy Z Flip 6", 4000],
    ["Galaxy Z Fold 3", 4400], ["Galaxy Z Fold 4", 4400], ["Galaxy Z Fold 5", 4400], ["Galaxy Z Fold 6", 4400],
    ["Galaxy A14", 5000], ["Galaxy A15", 5000], ["Galaxy A24", 5000], ["Galaxy A25", 5000],
    ["Galaxy A34", 5000], ["Galaxy A35", 5000], ["Galaxy A54", 5000], ["Galaxy A55", 5000],
    ["Galaxy M14", 6000], ["Galaxy M34", 6000], ["Galaxy F54", 6000]
  ]],
  ["Google", [
    ["Pixel 4a", 3140], ["Pixel 5", 4080], ["Pixel 5a", 4680],
    ["Pixel 6", 4614], ["Pixel 6 Pro", 5003], ["Pixel 6a", 4410],
    ["Pixel 7", 4355], ["Pixel 7 Pro", 5000], ["Pixel 7a", 4385],
    ["Pixel 8", 4575], ["Pixel 8 Pro", 5050], ["Pixel 8a", 4492],
    ["Pixel 9", 4700], ["Pixel 9 Pro", 4700], ["Pixel 9 Pro XL", 5060],
    ["Pixel Fold", 4821], ["Pixel 9 Pro Fold", 4650]
  ]],
  ["OnePlus", [
    ["OnePlus 8", 4300], ["OnePlus 8 Pro", 4510], ["OnePlus 8T", 4500],
    ["OnePlus 9", 4500], ["OnePlus 9 Pro", 4500], ["OnePlus 9R", 4500],
    ["OnePlus 10 Pro", 5000], ["OnePlus 10T", 4800],
    ["OnePlus 11", 5000], ["OnePlus 11R", 5000],
    ["OnePlus 12", 5400], ["OnePlus 12R", 5500],
    ["OnePlus Nord 2", 4500], ["OnePlus Nord 3", 5000], ["OnePlus Nord CE 3", 5000],
    ["OnePlus Open", 4805]
  ]],
  ["Xiaomi", [
    ["Xiaomi 11T", 5000], ["Xiaomi 11T Pro", 5000],
    ["Xiaomi 12", 4500], ["Xiaomi 12 Pro", 4600], ["Xiaomi 12T", 5000], ["Xiaomi 12T Pro", 5000],
    ["Xiaomi 13", 4500], ["Xiaomi 13 Pro", 4820], ["Xiaomi 13T", 5000], ["Xiaomi 13T Pro", 5000],
    ["Xiaomi 14", 4610], ["Xiaomi 14 Ultra", 5000],
    ["Redmi Note 10", 5000], ["Redmi Note 11", 5000], ["Redmi Note 12", 5000],
    ["Redmi Note 13", 5000], ["Redmi Note 13 Pro", 5100], ["Redmi Note 13 Pro+", 5000],
    ["Poco X5 Pro", 5000], ["Poco X6", 5100], ["Poco X6 Pro", 5000], ["Poco F6", 5000]
  ]],
  ["Oppo", [
    ["Oppo Find X3 Pro", 4500], ["Oppo Find X5", 4800], ["Oppo Find X5 Pro", 5000],
    ["Oppo Find X6 Pro", 5000], ["Oppo Find X7 Ultra", 5000],
    ["Oppo Reno 8", 4500], ["Oppo Reno 8 Pro", 4500], ["Oppo Reno 10", 5000],
    ["Oppo Reno 11", 5000], ["Oppo Reno 12", 5000],
    ["Oppo A54", 5000], ["Oppo A78", 5000], ["Oppo A98", 5000]
  ]],
  ["Vivo", [
    ["Vivo X80", 4500], ["Vivo X80 Pro", 4700], ["Vivo X90", 4810], ["Vivo X90 Pro", 4870],
    ["Vivo X100", 5000], ["Vivo X100 Pro", 5400],
    ["Vivo V25", 4500], ["Vivo V27", 4600], ["Vivo V29", 4600], ["Vivo V30", 5000],
    ["Vivo Y21", 5000], ["Vivo Y35", 5000], ["Vivo Y100", 5000]
  ]],
  ["Realme", [
    ["Realme 8", 5000], ["Realme 9", 5000], ["Realme 10", 5000],
    ["Realme 11", 5000], ["Realme 11 Pro", 5000], ["Realme 11 Pro+", 5000],
    ["Realme 12", 5000], ["Realme 12 Pro", 5000], ["Realme 12 Pro+", 5000],
    ["Realme GT Neo 3", 5000], ["Realme GT Neo 5", 5000], ["Realme GT 6", 5500],
    ["Realme C55", 5000], ["Realme C67", 5000]
  ]],
  ["Motorola", [
    ["Moto G Power (2021)", 5000], ["Moto G Power (2022)", 5000], ["Moto G Power 5G", 5000],
    ["Moto G Stylus 5G", 5000], ["Moto G54", 5000], ["Moto G84", 5000],
    ["Motorola Edge 30", 4020], ["Motorola Edge 40", 4400], ["Motorola Edge 50 Pro", 4500],
    ["Razr 40", 4200], ["Razr 40 Ultra", 3800], ["Razr 50 Ultra", 4000]
  ]],
  ["Huawei", [
    ["Huawei P30 Pro", 4200], ["Huawei P40 Pro", 4200], ["Huawei P50 Pro", 4360],
    ["Huawei P60 Pro", 4815], ["Huawei Mate 40 Pro", 4400], ["Huawei Mate 50 Pro", 4700],
    ["Huawei Mate 60 Pro", 5000], ["Huawei Nova 9", 4300], ["Huawei Nova 11", 4500]
  ]],
  ["Nothing", [
    ["Nothing Phone (1)", 4500], ["Nothing Phone (2)", 4700], ["Nothing Phone (2a)", 5000]
  ]],
  ["Sony", [
    ["Xperia 1 III", 4500], ["Xperia 1 IV", 5000], ["Xperia 1 V", 5000], ["Xperia 1 VI", 5000],
    ["Xperia 5 IV", 5000], ["Xperia 5 V", 5000], ["Xperia 10 V", 5000], ["Xperia 10 VI", 5000]
  ]],
  ["Asus", [
    ["Zenfone 8", 4000], ["Zenfone 9", 4300], ["Zenfone 10", 4300], ["Zenfone 11 Ultra", 5500],
    ["ROG Phone 5", 6000], ["ROG Phone 6", 6000], ["ROG Phone 7", 6000], ["ROG Phone 8", 5500]
  ]],
  ["Fairphone", [
    ["Fairphone 3", 3000], ["Fairphone 4", 3905], ["Fairphone 5", 4200], ["Fairphone 6", 4415]
  ]],
  ["Nokia / HMD", [
    ["Nokia G20", 5050], ["Nokia G21", 5050], ["Nokia G42", 5000], ["Nokia X30", 4200],
    ["HMD Pulse Pro", 5000]
  ]]
];

const pakistanMarketPhoneGroups = [
  ["Apple", [
    ["iPhone 5", 1440], ["iPhone 5c", 1510], ["iPhone 5s", 1560],
    ["iPhone 6", 1810], ["iPhone 6 Plus", 2915], ["iPhone 6s", 1715], ["iPhone 6s Plus", 2750],
    ["iPhone SE (2016)", 1624], ["iPhone 7", 1960], ["iPhone 7 Plus", 2900], ["iPhone 8 Plus", 2691]
  ]],
  ["Samsung", [
    ["Galaxy S8", 3000], ["Galaxy S8+", 3500], ["Galaxy S9", 3000], ["Galaxy S9+", 3500],
    ["Galaxy S10e", 3100], ["Galaxy S10", 3400], ["Galaxy S10+", 4100], ["Galaxy S10 Lite", 4500],
    ["Galaxy Note 8", 3300], ["Galaxy Note 9", 4000], ["Galaxy Note 10", 3500], ["Galaxy Note 10+", 4300],
    ["Galaxy J4", 3000], ["Galaxy J4+", 3300], ["Galaxy J5", 2600], ["Galaxy J5 Prime", 2400],
    ["Galaxy J6", 3000], ["Galaxy J6+", 3300], ["Galaxy J7", 3000], ["Galaxy J7 Prime", 3300],
    ["Galaxy A01", 3000], ["Galaxy A01 Core", 3000], ["Galaxy A02", 5000], ["Galaxy A02s", 5000],
    ["Galaxy A03", 5000], ["Galaxy A03 Core", 5000], ["Galaxy A03s", 5000], ["Galaxy A04", 5000],
    ["Galaxy A04e", 5000], ["Galaxy A04s", 5000], ["Galaxy A05", 5000], ["Galaxy A05s", 5000],
    ["Galaxy A06", 5000], ["Galaxy A10", 3400], ["Galaxy A10s", 4000], ["Galaxy A11", 4000],
    ["Galaxy A12", 5000], ["Galaxy A13", 5000], ["Galaxy A20", 4000], ["Galaxy A20s", 4000],
    ["Galaxy A21s", 5000], ["Galaxy A22", 5000], ["Galaxy A23", 5000], ["Galaxy A30", 4000],
    ["Galaxy A30s", 4000], ["Galaxy A31", 5000], ["Galaxy A32", 5000], ["Galaxy A33", 5000],
    ["Galaxy A50", 4000], ["Galaxy A50s", 4000], ["Galaxy A51", 4000], ["Galaxy A52", 4500],
    ["Galaxy A52s", 4500], ["Galaxy A53", 5000], ["Galaxy A70", 4500], ["Galaxy A71", 4500],
    ["Galaxy A72", 5000], ["Galaxy A73", 5000],
    ["Galaxy M01", 4000], ["Galaxy M02", 5000], ["Galaxy M02s", 5000], ["Galaxy M11", 5000],
    ["Galaxy M12", 6000], ["Galaxy M21", 6000], ["Galaxy M30", 5000], ["Galaxy M30s", 6000],
    ["Galaxy M31", 6000], ["Galaxy M31s", 6000], ["Galaxy M32", 6000], ["Galaxy M33", 6000],
    ["Galaxy M51", 7000], ["Galaxy M52", 5000], ["Galaxy M53", 5000], ["Galaxy M54", 6000],
    ["Galaxy F12", 6000], ["Galaxy F13", 6000], ["Galaxy F22", 6000], ["Galaxy F23", 5000],
    ["Galaxy F34", 6000], ["Galaxy F41", 6000], ["Galaxy F62", 7000]
  ]],
  ["Tecno", [
    ["Tecno Pop 2", 2400], ["Tecno Pop 3", 3500], ["Tecno Pop 4", 5000], ["Tecno Pop 5", 5000],
    ["Tecno Pop 5 LTE", 5000], ["Tecno Pop 6", 5000], ["Tecno Pop 7", 5000], ["Tecno Pop 8", 5000],
    ["Tecno Pop 9", 5000], ["Tecno Spark Go 2020", 5000], ["Tecno Spark Go 2021", 5000],
    ["Tecno Spark Go 2022", 5000], ["Tecno Spark Go 2023", 5000], ["Tecno Spark Go 2024", 5000],
    ["Tecno Spark 5", 5000], ["Tecno Spark 5 Pro", 5000], ["Tecno Spark 6", 5000],
    ["Tecno Spark 6 Go", 5000], ["Tecno Spark 7", 6000], ["Tecno Spark 7 Pro", 5000],
    ["Tecno Spark 8", 5000], ["Tecno Spark 8C", 5000], ["Tecno Spark 8 Pro", 5000],
    ["Tecno Spark 9", 5000], ["Tecno Spark 9 Pro", 5000], ["Tecno Spark 10", 5000],
    ["Tecno Spark 10C", 5000], ["Tecno Spark 10 Pro", 5000], ["Tecno Spark 20", 5000],
    ["Tecno Spark 20C", 5000], ["Tecno Spark 20 Pro", 5000], ["Tecno Spark 20 Pro+", 5000],
    ["Tecno Spark 30", 5000], ["Tecno Spark 30C", 5000], ["Tecno Spark 30 Pro", 5000],
    ["Tecno Camon 12", 4000], ["Tecno Camon 12 Air", 4000], ["Tecno Camon 15", 5000],
    ["Tecno Camon 15 Pro", 4000], ["Tecno Camon 16", 5000], ["Tecno Camon 16 Premier", 4500],
    ["Tecno Camon 17", 5000], ["Tecno Camon 17 Pro", 5000], ["Tecno Camon 18", 5000],
    ["Tecno Camon 18 Premier", 4750], ["Tecno Camon 19", 5000], ["Tecno Camon 19 Pro", 5000],
    ["Tecno Camon 20", 5000], ["Tecno Camon 20 Pro", 5000], ["Tecno Camon 20 Premier", 5000],
    ["Tecno Camon 30", 5000], ["Tecno Camon 30 Pro", 5000], ["Tecno Camon 30 Premier", 5000],
    ["Tecno Pova", 6000], ["Tecno Pova 2", 7000], ["Tecno Pova 3", 7000], ["Tecno Pova 4", 6000],
    ["Tecno Pova 4 Pro", 6000], ["Tecno Pova 5", 6000], ["Tecno Pova 5 Pro", 5000],
    ["Tecno Pova 6", 6000], ["Tecno Pova 6 Pro", 6000], ["Tecno Pova Neo", 6000],
    ["Tecno Pova Neo 2", 7000], ["Tecno Phantom X", 4700], ["Tecno Phantom X2", 5160],
    ["Tecno Phantom X2 Pro", 5160], ["Tecno Phantom V Fold", 5000], ["Tecno Phantom V Flip", 4000]
  ]],
  ["Oppo", [
    ["Oppo A1k", 4000], ["Oppo A3s", 4230], ["Oppo A5", 4230], ["Oppo A5s", 4230],
    ["Oppo A5 2020", 5000], ["Oppo A7", 4230], ["Oppo A9 2020", 5000], ["Oppo A12", 4230],
    ["Oppo A15", 4230], ["Oppo A15s", 4230], ["Oppo A16", 5000], ["Oppo A16e", 4230],
    ["Oppo A17", 5000], ["Oppo A17k", 5000], ["Oppo A18", 5000], ["Oppo A31", 4230],
    ["Oppo A32", 5000], ["Oppo A33", 5000], ["Oppo A38", 5000], ["Oppo A52", 5000],
    ["Oppo A53", 5000], ["Oppo A53s", 5000], ["Oppo A55", 5000], ["Oppo A57", 5000],
    ["Oppo A58", 5000], ["Oppo A74", 5000], ["Oppo A76", 5000], ["Oppo A77", 5000],
    ["Oppo A79", 5000], ["Oppo A92", 5000], ["Oppo A95", 5000], ["Oppo A96", 5000],
    ["Oppo F9", 3500], ["Oppo F11", 4020], ["Oppo F11 Pro", 4000], ["Oppo F15", 4000],
    ["Oppo F17", 4015], ["Oppo F17 Pro", 4015], ["Oppo F19", 5000], ["Oppo F19 Pro", 4310],
    ["Oppo F21 Pro", 4500], ["Oppo F21 Pro 5G", 4500], ["Oppo F23", 5000], ["Oppo F25 Pro", 5000],
    ["Oppo Reno 2", 4000], ["Oppo Reno 3", 4025], ["Oppo Reno 3 Pro", 4025],
    ["Oppo Reno 4", 4015], ["Oppo Reno 4 Pro", 4000], ["Oppo Reno 5", 4310],
    ["Oppo Reno 5 Pro", 4350], ["Oppo Reno 6", 4300], ["Oppo Reno 6 Pro", 4500],
    ["Oppo Reno 7", 4500], ["Oppo Reno 7 Pro", 4500], ["Oppo Reno 8T", 5000],
    ["Oppo Reno 10 Pro", 4600], ["Oppo Reno 11 F", 5000], ["Oppo Reno 12 F", 5000]
  ]],
  ["Infinix", [
    ["Infinix Smart 4", 4000], ["Infinix Smart 5", 5000], ["Infinix Smart 6", 5000],
    ["Infinix Smart 7", 5000], ["Infinix Smart 8", 5000], ["Infinix Smart 9", 5000],
    ["Infinix Hot 8", 5000], ["Infinix Hot 9", 5000], ["Infinix Hot 10", 5200],
    ["Infinix Hot 10 Play", 6000], ["Infinix Hot 11", 5200], ["Infinix Hot 11 Play", 6000],
    ["Infinix Hot 12", 5000], ["Infinix Hot 12 Play", 6000], ["Infinix Hot 20", 5000],
    ["Infinix Hot 20i", 5000], ["Infinix Hot 30", 5000], ["Infinix Hot 30 Play", 6000],
    ["Infinix Hot 40", 5000], ["Infinix Hot 40 Pro", 5000], ["Infinix Hot 50", 5000],
    ["Infinix Note 7", 5000], ["Infinix Note 8", 5200], ["Infinix Note 10", 5000],
    ["Infinix Note 11", 5000], ["Infinix Note 12", 5000], ["Infinix Note 12 Pro", 5000],
    ["Infinix Note 30", 5000], ["Infinix Note 30 Pro", 5000], ["Infinix Note 40", 5000],
    ["Infinix Note 40 Pro", 5000], ["Infinix Zero 8", 4500], ["Infinix Zero X Pro", 4500],
    ["Infinix Zero 20", 4500], ["Infinix Zero 30", 5000], ["Infinix GT 10 Pro", 5000],
    ["Infinix GT 20 Pro", 5000]
  ]],
  ["Vivo", [
    ["Vivo Y11", 5000], ["Vivo Y12", 5000], ["Vivo Y15", 5000], ["Vivo Y17", 5000],
    ["Vivo Y19", 5000], ["Vivo Y20", 5000], ["Vivo Y20s", 5000], ["Vivo Y21s", 5000],
    ["Vivo Y22", 5000], ["Vivo Y27", 5000], ["Vivo Y28", 6000], ["Vivo Y30", 5000],
    ["Vivo Y31", 5000], ["Vivo Y33s", 5000], ["Vivo Y36", 5000], ["Vivo Y51", 5000],
    ["Vivo Y53s", 5000], ["Vivo Y55", 5000], ["Vivo Y73", 4000], ["Vivo Y75", 4050],
    ["Vivo Y200", 4800], ["Vivo V17", 4500], ["Vivo V19", 4500], ["Vivo V20", 4000],
    ["Vivo V21", 4000], ["Vivo V23", 4200], ["Vivo V23e", 4050], ["Vivo V25e", 4500],
    ["Vivo V27e", 4600], ["Vivo V29e", 4800], ["Vivo V30e", 5500], ["Vivo V40", 5500],
    ["Vivo X50", 4200], ["Vivo X60", 4300], ["Vivo X70 Pro", 4450], ["Vivo X80 Lite", 4500]
  ]],
  ["Xiaomi / Redmi / Poco", [
    ["Redmi 8", 5000], ["Redmi 8A", 5000], ["Redmi 9", 5020], ["Redmi 9A", 5000],
    ["Redmi 9C", 5000], ["Redmi 10", 5000], ["Redmi 10A", 5000], ["Redmi 10C", 5000],
    ["Redmi 12", 5000], ["Redmi 12C", 5000], ["Redmi 13", 5030], ["Redmi 13C", 5000],
    ["Redmi 14C", 5160], ["Redmi Note 8", 4000], ["Redmi Note 8 Pro", 4500],
    ["Redmi Note 9", 5020], ["Redmi Note 9 Pro", 5020], ["Redmi Note 10 Pro", 5020],
    ["Redmi Note 11 Pro", 5000], ["Redmi Note 11 Pro+", 4500], ["Redmi Note 12 Pro", 5000],
    ["Redmi Note 12 Pro+", 5000], ["Redmi Note 13 4G", 5000], ["Redmi Note 14", 5110],
    ["Redmi Note 14 Pro", 5500], ["Redmi Note 14 Pro+", 5110], ["Poco C40", 6000],
    ["Poco C55", 5000], ["Poco C65", 5000], ["Poco C75", 5160], ["Poco M3", 6000],
    ["Poco M4 Pro", 5000], ["Poco M5", 5000], ["Poco M6", 5030], ["Poco M6 Pro", 5000],
    ["Poco X3 NFC", 5160], ["Poco X3 Pro", 5160], ["Poco X4 Pro", 5000], ["Poco X7", 5110],
    ["Poco F3", 4520], ["Poco F4", 4500], ["Poco F5", 5000], ["Poco F6 Pro", 5000]
  ]],
  ["Realme", [
    ["Realme C11", 5000], ["Realme C12", 6000], ["Realme C15", 6000], ["Realme C21", 5000],
    ["Realme C25", 6000], ["Realme C30", 5000], ["Realme C33", 5000], ["Realme C35", 5000],
    ["Realme C51", 5000], ["Realme C53", 5000], ["Realme C61", 5000], ["Realme C63", 5000],
    ["Realme C65", 5000], ["Realme C75", 6000], ["Realme 5", 5000], ["Realme 5i", 5000],
    ["Realme 6", 4300], ["Realme 6 Pro", 4300], ["Realme 7", 5000], ["Realme 7 Pro", 4500],
    ["Realme 8 Pro", 4500], ["Realme 9 Pro", 5000], ["Realme 9 Pro+", 4500],
    ["Realme 10 Pro", 5000], ["Realme 12+", 5000], ["Realme 13", 5000], ["Realme 13+", 5000],
    ["Realme Narzo 30", 5000], ["Realme Narzo 50", 5000], ["Realme Narzo 50A", 6000],
    ["Realme Narzo 60", 5000], ["Realme Narzo 70", 5000]
  ]],
  ["itel", [
    ["itel A23", 2050], ["itel A25", 3020], ["itel A26", 3020], ["itel A27", 4000],
    ["itel A48", 3000], ["itel A49", 4000], ["itel A60", 5000], ["itel A70", 5000],
    ["itel A80", 5000], ["itel P36", 5000], ["itel P37", 5000], ["itel P40", 6000],
    ["itel P55", 5000], ["itel P65", 5000], ["itel S17", 5000], ["itel S23", 5000],
    ["itel S23+", 5000], ["itel S24", 5000], ["itel S25", 5000]
  ]],
  ["Nokia / HMD", [
    ["Nokia 2.1", 4000], ["Nokia 2.2", 3000], ["Nokia 2.3", 4000], ["Nokia 2.4", 4500],
    ["Nokia 3.1", 2990], ["Nokia 3.2", 4000], ["Nokia 5.1 Plus", 3060], ["Nokia 5.3", 4000],
    ["Nokia 6.1 Plus", 3060], ["Nokia 7.2", 3500], ["Nokia 8.1", 3500], ["Nokia C10", 3000],
    ["Nokia C20", 3000], ["Nokia C21", 3000], ["Nokia C21 Plus", 4000], ["Nokia C22", 5000],
    ["Nokia C30", 6000], ["Nokia C31", 5050], ["Nokia C32", 5050], ["Nokia G10", 5050],
    ["Nokia G11", 5050], ["Nokia G22", 5050], ["Nokia G60", 4500], ["HMD Pulse", 5000],
    ["HMD Skyline", 4600]
  ]],
  ["Huawei / Honor", [
    ["Huawei Y5", 3020], ["Huawei Y5p", 3020], ["Huawei Y6", 3020], ["Huawei Y6p", 5000],
    ["Huawei Y7", 4000], ["Huawei Y7 Prime", 4000], ["Huawei Y7p", 4000], ["Huawei Y8p", 4000],
    ["Huawei Y9", 4000], ["Huawei Y9 Prime", 4000], ["Huawei Nova 3i", 3340], ["Huawei Nova 5T", 3750],
    ["Huawei Nova 7i", 4200], ["Huawei Nova 8i", 4300], ["Huawei P20 Lite", 3000],
    ["Huawei P30 Lite", 3340], ["Honor 8X", 3750], ["Honor 9X", 4000], ["Honor 10 Lite", 3400],
    ["Honor X7", 5000], ["Honor X8", 4000], ["Honor X9", 4800], ["Honor 90 Lite", 4500]
  ]],
  ["QMobile", [
    ["QMobile Noir i6", 3000], ["QMobile Noir i7", 3000], ["QMobile Noir i8", 3000],
    ["QMobile Noir S6", 3000], ["QMobile Noir S8", 3000], ["QMobile Noir E8", 3500],
    ["QMobile Blue 5", 5000], ["QMobile Rocket Pro", 5000], ["QMobile Smart Power", 5000]
  ]]
];

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .replace(/smasnung|samung|samsng/g, "samsung")
    .replace(/iphon\b|iphn/g, "iphone")
    .replace(/opoo|oppoo/g, "oppo")
    .replace(/redmi\s+note/g, "redmi note")
    .replace(/[^\w+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const phoneMap = new Map();
for (const [brand, models] of [...phoneGroups, ...pakistanMarketPhoneGroups]) {
  for (const [model, capacity] of models) {
    const key = normalizeText(`${brand} ${model}`);
    if (!phoneMap.has(key)) {
      phoneMap.set(key, {
        brand,
        model,
        capacity,
        key,
        searchKey: normalizeText(`${brand} ${model} ${model.replace(/^Oppo |^Tecno |^Vivo |^Realme |^Infinix |^Samsung |^Galaxy /i, "")}`)
      });
    }
  }
}

const phones = [...phoneMap.values()].sort((a, b) =>
  a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model, undefined, { numeric: true })
);

// Build brand list for chips
const brandsInOrder = [];
for (const phone of phones) {
  if (!brandsInOrder.includes(phone.brand)) brandsInOrder.push(phone.brand);
}

// ============================================================
// UI references
// ============================================================
const ui = {
  startScreen: document.querySelector("#startScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  goResult: document.querySelector("#goResult"),
  customEstimate: document.querySelector("#customEstimate"),
  pageButtons: document.querySelectorAll("[data-page-target]"),
  modelSearch: document.querySelector("#modelSearch"),
  quickList: document.querySelector("#quickList"),
  brandChips: document.querySelector("#brandChips"),
  batteryInput: document.querySelector("#batteryInput"),
  batteryRange: document.querySelector("#batteryRange"),
  modelCount: document.querySelector("#modelCount"),
  selectedBrand: document.querySelector("#selectedBrand"),
  selectedModel: document.querySelector("#selectedModel"),
  batteryBadge: document.querySelector("#batteryBadge"),
  gramsMain: document.querySelector("#gramsMain"),
  gramsRange: document.querySelector("#gramsRange"),
  gramsEquivalent: document.querySelector("#gramsEquivalent"),
  modelNote: document.querySelector("#modelNote"),
  crystalPile: document.querySelector("#crystalPile"),
  cobaltMetric: document.querySelector("#cobaltMetric"),
  cobaltMetricSub: document.querySelector("#cobaltMetricSub"),
  drcMetric: document.querySelector("#drcMetric"),
  labourMetric: document.querySelector("#labourMetric"),
  labourMetricSub: document.querySelector("#labourMetricSub"),
  wageMetric: document.querySelector("#wageMetric"),
  wageMetricSub: document.querySelector("#wageMetricSub"),
  co2Metric: document.querySelector("#co2Metric"),
  co2MetricSub: document.querySelector("#co2MetricSub"),
  riskScore: document.querySelector("#riskScore"),
  riskBar: document.querySelector("#riskBar"),
  riskText: document.querySelector("#riskText"),
  shareResult: document.querySelector("#shareResult"),
  shareStatus: document.querySelector("#shareStatus"),
  restartBtn: document.querySelector("#restartBtn"),
  lensInsight: document.querySelector("#lensInsight"),
  lensButtons: document.querySelectorAll(".lens-button"),
  phoneCountInput: document.querySelector("#phoneCountInput"),
  phoneCountRange: document.querySelector("#phoneCountRange"),
  pileVisual: document.querySelector("#pileVisual"),
  classCobalt: document.querySelector("#classCobalt"),
  classDrc: document.querySelector("#classDrc"),
  classCo2: document.querySelector("#classCo2"),
  classLabour: document.querySelector("#classLabour"),
  classWage: document.querySelector("#classWage"),
  classPeople: document.querySelector("#classPeople")
};

let activePhone = null;
let currentImpact = null;
let activeLens = "cobalt";
let activeBrand = "all";

const DRC_COBALT_SHARE = 0.76;
const ARTISANAL_SHARE = 0.2;
const WORKER_MINUTES_PER_ASM_GRAM = 4;
const WORKDAY_MINUTES = 12 * 60;
const DAILY_WAGE_USD = { low: 1, mid: 1.5, high: 2 };
const BATTERY_CO2_KG_PER_KWH = { low: 58, mid: 75, high: 92 };

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}
function formatMoney(value) {
  if (value < 0.01) return "<$0.01";
  if (value < 10) return `$${value.toFixed(2)}`;
  return `$${Math.round(value)}`;
}
function formatDuration(minutes) {
  if (minutes < 60) return `${Math.max(1, Math.round(minutes))} min`;
  const hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed(hours < 10 ? 1 : 0)}h`;
  return `${(hours / 24).toFixed(1)} days`;
}
function formatWorkerDays(days) {
  if (days < 0.1) return `${days.toFixed(3)} day`;
  if (days < 10) return `${days.toFixed(2)} days`;
  return `${Math.round(days)} days`;
}
function formatMass(grams) {
  if (grams < 1000) return `${Math.round(grams)}g`;
  return `${(grams / 1000).toFixed(grams < 10000 ? 2 : 1)}kg`;
}

function estimateCobalt(capacity) {
  const wh = (capacity * 3.85) / 1000;
  const low = Math.max(3, wh * 0.45);
  const mid = wh * 0.65;
  const high = wh * 0.85;
  return { wh, low, mid, high };
}

function formatPhoneSearchName(phone) {
  const brandWords = phone.brand.split("/").map((word) => normalizeText(word)).filter(Boolean);
  const modelName = normalizeText(phone.model);
  const modelHasBrand = brandWords.some((word) => modelName.startsWith(`${word} `));
  return modelHasBrand ? phone.model : `${phone.brand} ${phone.model}`;
}

function estimateImpact(capacity) {
  const cobalt = estimateCobalt(capacity);
  const kwh = cobalt.wh / 1000;
  const drc = {
    low: cobalt.low * DRC_COBALT_SHARE,
    mid: cobalt.mid * DRC_COBALT_SHARE,
    high: cobalt.high * DRC_COBALT_SHARE
  };
  const artisanalRiskCobalt = drc.mid * ARTISANAL_SHARE;
  const labourMinutes = artisanalRiskCobalt * WORKER_MINUTES_PER_ASM_GRAM;
  const workerDays = labourMinutes / WORKDAY_MINUTES;
  const wage = {
    low: workerDays * DAILY_WAGE_USD.low,
    mid: workerDays * DAILY_WAGE_USD.mid,
    high: workerDays * DAILY_WAGE_USD.high
  };
  const co2 = {
    low: kwh * BATTERY_CO2_KG_PER_KWH.low,
    mid: kwh * BATTERY_CO2_KG_PER_KWH.mid,
    high: kwh * BATTERY_CO2_KG_PER_KWH.high
  };
  const risk = Math.min(96, Math.max(34, Math.round(34 + cobalt.mid * 4.35)));
  return { cobalt, drc, labourMinutes, workerDays, wage, co2, risk };
}

// ============================================================
// Crystal pile visualization
// ============================================================
function renderCrystalPile(target, grams, maxCrystals = 22) {
  if (!target) return;
  target.innerHTML = "";
  const count = Math.max(3, Math.min(maxCrystals, Math.round(grams * 1.6)));
  const cols = Math.ceil(Math.sqrt(count * 1.3));
  const rect = target.getBoundingClientRect();
  const width = rect.width || 110;
  const colWidth = width / cols;
  for (let i = 0; i < count; i++) {
    const c = document.createElement("span");
    c.className = "crystal";
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = colWidth * col + (Math.random() * 6 - 3);
    const y = row * 9 + (Math.random() * 4 - 2);
    const size = 10 + Math.random() * 6;
    const rotate = (Math.random() * 30 - 15).toFixed(1);
    c.style.left = `${x + (colWidth - size) / 2}px`;
    c.style.bottom = `${y + 8}px`;
    c.style.width = `${size}px`;
    c.style.height = `${size}px`;
    c.style.setProperty("--r", `${rotate}deg`);
    c.style.animationDelay = `${i * 30}ms`;
    target.appendChild(c);
  }
}

function renderClassPile(target, totalGrams) {
  if (!target) return;
  target.innerHTML = "";
  const rect = target.getBoundingClientRect();
  const width = rect.width || 320;
  const height = rect.height || 90;
  const baseCount = Math.min(140, Math.max(8, Math.round(totalGrams / 4)));
  for (let i = 0; i < baseCount; i++) {
    const c = document.createElement("span");
    c.className = "pile-crystal";
    const x = Math.random() * (width - 14);
    const y = Math.random() * (height - 22);
    c.style.left = `${x}px`;
    c.style.bottom = `${y * 0.55 + 4}px`;
    c.style.width = `${10 + Math.random() * 6}px`;
    c.style.height = `${10 + Math.random() * 6}px`;
    c.style.setProperty("--rot", `${(Math.random() * 30 - 15).toFixed(1)}deg`);
    c.style.animationDelay = `${(i * 12) % 480}ms`;
    target.appendChild(c);
  }
}

// ============================================================
// Equivalents — relatable comparisons
// ============================================================
function buildEquivalent(grams) {
  const sugarCubes = (grams / 4).toFixed(1);
  const paperclips = Math.round(grams);
  const phones = grams / 11;
  if (grams < 8)   return `≈ ${sugarCubes} sugar cubes — invisible in your pocket, heavy on a continent.`;
  if (grams < 14)  return `≈ ${sugarCubes} sugar cubes or ${paperclips} paperclips. Multiplied by every phone, it builds a global supply pressure.`;
  return `≈ ${sugarCubes} sugar cubes. Your phone alone is small — billions like it reshape a country.`;
}

// ============================================================
// Count-up animation
// ============================================================
function animateNumber(el, fromValue, toValue, durationMs, formatter) {
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = fromValue + (toValue - fromValue) * eased;
    el.textContent = formatter(value);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateHeroStats() {
  document.querySelectorAll("[data-countup]").forEach((el) => {
    const target = Number(el.dataset.countup);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const finalText = `${prefix}${target}${suffix}`;
    animateNumber(el, 0, target, 1400, (v) => `${prefix}${Math.round(v)}${suffix}`);
    // Safety net: if rAF was throttled (e.g. opened in a background tab),
    // make sure the final value still lands.
    setTimeout(() => { if (el.textContent !== finalText) el.textContent = finalText; }, 1600);
  });
}

// ============================================================
// Render result
// ============================================================
function renderResult(phone, custom = false) {
  const impact = estimateImpact(phone.capacity);
  const estimate = impact.cobalt;
  currentImpact = impact;
  setResultAvailable(true);

  ui.selectedBrand.textContent = custom ? "Custom battery estimate" : phone.brand;
  ui.selectedModel.textContent = custom ? `${formatNumber(phone.capacity)} mAh phone battery` : phone.model;
  ui.batteryBadge.textContent = `${formatNumber(phone.capacity)} mAh`;

  // Animate only the number; the "g" unit is a separate static element so
  // no markup is ever written as text. Resting value is always correct.
  const gramsValue = document.querySelector("#gramsValue");
  if (gramsValue) {
    gramsValue.textContent = estimate.mid.toFixed(1);
    animateNumber(gramsValue, 0, estimate.mid, 1100, (v) => v.toFixed(1));
    setTimeout(() => { gramsValue.textContent = estimate.mid.toFixed(1); }, 1150);
  }

  ui.gramsRange.textContent = `estimated range ${estimate.low.toFixed(1)} – ${estimate.high.toFixed(1)} g`;
  ui.gramsEquivalent.textContent = buildEquivalent(estimate.mid);

  if (ui.cobaltMetric) ui.cobaltMetric.textContent = `${estimate.mid.toFixed(1)}g`;
  if (ui.cobaltMetricSub) ui.cobaltMetricSub.textContent = `range ${estimate.low.toFixed(1)}-${estimate.high.toFixed(1)}g`;
  ui.drcMetric.textContent = `${impact.drc.mid.toFixed(1)}g`;
  ui.labourMetric.textContent = formatDuration(impact.labourMinutes);
  ui.labourMetricSub.textContent = `${(impact.drc.mid * ARTISANAL_SHARE).toFixed(1)}g artisanal-risk cobalt`;
  ui.wageMetric.textContent = formatMoney(impact.wage.mid);
  ui.wageMetricSub.textContent = `${formatMoney(impact.wage.low)} – ${formatMoney(impact.wage.high)} at $1-$2/day`;
  ui.co2Metric.textContent = `${impact.co2.mid.toFixed(1)}kg`;
  ui.co2MetricSub.textContent = `${impact.co2.low.toFixed(1)}-${impact.co2.high.toFixed(1)}kg CO2e`;

  ui.riskScore.textContent = `${impact.risk} / 100`;
  ui.riskBar.style.width = "0%";
  setTimeout(() => { ui.riskBar.style.width = `${impact.risk}%`; }, 220);
  ui.riskText.textContent = impact.risk > 78
    ? "Large battery, higher cobalt demand, and stronger Congo supply-chain exposure in this estimate."
    : "Smaller battery, lower cobalt demand, but still connected to the same global cobalt risk pathway.";

  ui.modelNote.textContent = custom
    ? "Battery-size only estimate. Useful when the exact model isn't listed or the battery was replaced."
    : "Estimated from battery capacity and typical cobalt-containing lithium-ion cathode ranges. Exact cobalt content varies by chemistry and supplier.";

  renderLensInsight();
  renderClassScale();
  // The crystal pile is rendered by showResultScreen once the screen is
  // visible and has real layout dimensions.
}

function renderLensInsight() {
  if (!currentImpact || !ui.lensInsight) return;
  const model = ui.selectedModel.textContent;
  const cobaltValue = ui.cobaltMetric?.textContent || ui.gramsMain.textContent;
  const copy = {
    cobalt: `${model}: about ${cobaltValue} of cobalt sits inside the battery. That tiny mass connects the phone in your hand to a global mining chain.`,
    congo:  `${ui.drcMetric.textContent} of this estimate is linked to the DRC's share of global mined cobalt. The Congo is the centre of the world's battery supply.`,
    labour: `~${ui.labourMetric.textContent} of artisanal-mining labour exposure — a simple proxy for the hidden human pressure behind battery minerals.`,
    climate:`${ui.co2Metric.textContent} of CO₂e for cell production alone. One phone feels small; a whole classroom scales fast.`
  };
  ui.lensInsight.textContent = copy[activeLens] || copy.cobalt;
  ui.lensButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lens === activeLens);
  });
}

// ============================================================
// Search / list
// ============================================================
function renderList(query = "") {
  const normalizedQuery = normalizeText(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  let filtered;
  if (terms.length) {
    filtered = phones.filter((phone) => terms.every((term) => phone.searchKey.includes(term)));
  } else if (activeBrand !== "all") {
    filtered = phones.filter((phone) => phone.brand === activeBrand);
  } else {
    filtered = [];
  }

  ui.modelCount.textContent = terms.length
    ? `${filtered.length} matches`
    : activeBrand !== "all"
      ? `${filtered.length} · ${activeBrand}`
      : `${phones.length}+ models`;

  if (!terms.length && activeBrand === "all") {
    ui.quickList.innerHTML = `
      <div class="search-empty">
        <strong>Start typing — or pick a brand above</strong>
        <span>Try iPhone 15, Galaxy S24, Spark 20, Redmi Note, Reno, Infinix Hot…</span>
      </div>
    `;
    return;
  }

  const visible = filtered.slice(0, 40);
  ui.quickList.innerHTML = visible.map((phone) => {
    const estimate = estimateCobalt(phone.capacity);
    const active = phone === activePhone ? " active" : "";
    return `
      <button class="model-button${active}" type="button" data-key="${phone.key}">
        <span>
          <strong>${phone.model}</strong>
          <span>${phone.brand} · ${formatNumber(phone.capacity)} mAh</span>
        </span>
        <em>${estimate.mid.toFixed(1)}g</em>
      </button>
    `;
  }).join("");

  if (!visible.length) {
    ui.quickList.innerHTML = `
      <button class="model-button" type="button" data-custom="true">
        <span>
          <strong>No exact match</strong>
          <span>Use the battery-capacity estimate below</span>
        </span>
        <em>mAh</em>
      </button>
    `;
  }
}

function renderBrandChips() {
  const chips = [
    `<button class="chip ${activeBrand === "all" ? "active" : ""}" data-brand="all" type="button">All brands</button>`,
    ...brandsInOrder.slice(0, 14).map((b) => `<button class="chip ${activeBrand === b ? "active" : ""}" data-brand="${b}" type="button">${b}</button>`)
  ];
  ui.brandChips.innerHTML = chips.join("");
}

function setResultAvailable(available) {
  ui.goResult.disabled = !available;
  ui.goResult.textContent = available ? "See my impact →" : "Search a model first";
  ui.pageButtons.forEach((button) => {
    if (button.dataset.pageTarget === "result") {
      button.disabled = !available;
    }
  });
}

function showResultScreen() {
  if (!ui.startScreen || !ui.resultScreen || !currentImpact) {
    ui.modelSearch?.focus();
    return;
  }
  ui.startScreen.hidden = true;
  ui.resultScreen.hidden = false;
  ui.pageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pageTarget === "result");
  });
  window.scrollTo({ top: 0, behavior: "auto" });

  // Stagger the CSS entrance (visibility itself is guaranteed by CSS,
  // this only sequences it). Restart the animation on every visit.
  const reveals = ui.resultScreen.querySelectorAll(".reveal");
  reveals.forEach((el, i) => {
    el.style.animation = "none";
    // force reflow so re-adding the animation replays it
    void el.offsetWidth;
    el.style.animation = "";
    el.style.animationDelay = `${Math.min(i * 70, 560)}ms`;
  });

  // Decorative visuals — called directly (not via rAF, which is suspended
  // in background tabs). getBoundingClientRect forces the layout we need.
  // Isolated in try/catch so they can never block the page render.
  try {
    if (currentImpact) {
      renderCrystalPile(ui.crystalPile, currentImpact.cobalt.mid);
      renderClassPile(ui.pileVisual, currentImpact.cobalt.mid * getPhoneCount());
    }
  } catch (err) {
    /* visuals are non-essential */
  }
}

function showSearchScreen() {
  if (!ui.startScreen || !ui.resultScreen) return;
  ui.resultScreen.hidden = true;
  ui.startScreen.hidden = false;
  ui.pageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pageTarget === "search");
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  setTimeout(() => ui.modelSearch?.focus(), 120);
}

// ============================================================
// Event wiring
// ============================================================
ui.brandChips.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-brand]");
  if (!chip) return;
  activeBrand = chip.dataset.brand;
  renderBrandChips();
  renderList(ui.modelSearch.value);
});

ui.quickList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.custom) {
    renderResult({ capacity: Number(ui.batteryInput.value) }, true);
    showResultScreen();
    return;
  }
  const next = phones.find((phone) => phone.key === button.dataset.key);
  if (!next) return;
  activePhone = next;
  ui.modelSearch.value = formatPhoneSearchName(next);
  ui.batteryInput.value = next.capacity;
  ui.batteryRange.value = next.capacity;
  renderList(ui.modelSearch.value);
  renderResult(next);
  showResultScreen();
});

ui.modelSearch.addEventListener("input", () => {
  renderList(ui.modelSearch.value);
});

function syncCustomCapacity(value) {
  const capacity = Math.min(8000, Math.max(1000, Number(value) || 4500));
  ui.batteryInput.value = capacity;
  ui.batteryRange.value = capacity;
  renderResult({ capacity }, true);
}

function getPhoneCount() {
  return Math.min(500, Math.max(1, Number(ui.phoneCountInput?.value) || 30));
}

function renderClassScale() {
  if (!currentImpact || !ui.classCobalt) return;
  const count = getPhoneCount();
  const totalCobalt = currentImpact.cobalt.mid * count;
  ui.classCobalt.textContent = formatMass(totalCobalt);
  ui.classDrc.textContent = formatMass(currentImpact.drc.mid * count);
  ui.classCo2.textContent = `${(currentImpact.co2.mid * count).toFixed(currentImpact.co2.mid * count < 100 ? 1 : 0)}kg`;
  ui.classLabour.textContent = formatDuration(currentImpact.labourMinutes * count);
  ui.classWage.textContent = formatMoney(currentImpact.wage.mid * count);
  ui.classPeople.textContent = formatWorkerDays(currentImpact.workerDays * count);
  renderClassPile(ui.pileVisual, totalCobalt);
}

function syncPhoneCount(value) {
  const count = Math.min(500, Math.max(1, Number(value) || 30));
  ui.phoneCountInput.value = count;
  ui.phoneCountRange.value = Math.min(150, count);
  renderClassScale();
}

function buildShareText() {
  const model = ui.selectedModel.textContent;
  const cobalt = (ui.gramsMain.textContent || "").replace(/\s+/g, "");
  return `${model}: ~${cobalt} cobalt (≈${ui.drcMetric.textContent} DRC-linked), ${ui.labourMetric.textContent} labour-risk, ${ui.co2Metric.textContent} battery CO₂e. Check yours → cobalt-phone-checker.`;
}

async function shareCurrentResult() {
  const text = buildShareText();
  try {
    if (navigator.share) {
      await navigator.share({ title: "My phone's cobalt cost", text });
      ui.shareStatus.textContent = "Shared ✓";
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      ui.shareStatus.textContent = "Copied to clipboard ✓";
      return;
    }
    ui.shareStatus.textContent = text;
  } catch (error) {
    ui.shareStatus.textContent = "Ready to share";
  }
  setTimeout(() => { ui.shareStatus.textContent = ""; }, 3500);
}

ui.batteryInput.addEventListener("input", () => syncCustomCapacity(ui.batteryInput.value));
ui.batteryRange.addEventListener("input", () => syncCustomCapacity(ui.batteryRange.value));
ui.phoneCountInput?.addEventListener("input", () => syncPhoneCount(ui.phoneCountInput.value));
ui.phoneCountRange?.addEventListener("input", () => syncPhoneCount(ui.phoneCountRange.value));
ui.shareResult?.addEventListener("click", shareCurrentResult);
ui.restartBtn?.addEventListener("click", showSearchScreen);
ui.goResult?.addEventListener("click", showResultScreen);
ui.customEstimate?.addEventListener("click", () => {
  syncCustomCapacity(ui.batteryInput.value);
  showResultScreen();
});
ui.pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.pageTarget === "search") {
      showSearchScreen();
    } else if (!currentImpact) {
      ui.modelSearch?.focus();
    } else {
      showResultScreen();
    }
  });
});
ui.lensButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeLens = button.dataset.lens || "cobalt";
    renderLensInsight();
  });
});

// ============================================================
// Reveal-on-scroll
// ============================================================
function armRevealAnimations() {
  const items = document.querySelectorAll(".result-screen .reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = (Number(el.dataset.delay) || 0) + i * 60;
        setTimeout(() => el.classList.add("is-visible"), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => observer.observe(el));
  // immediate reveal for top items
  setTimeout(() => {
    const top = Array.from(items).slice(0, 3);
    top.forEach((el, i) => setTimeout(() => el.classList.add("is-visible"), i * 100));
  }, 60);
}

// ============================================================
// Init
// ============================================================
ui.modelCount.textContent = `${phones.length}+ models`;
setResultAvailable(false);
renderBrandChips();
renderList();
animateHeroStats();
