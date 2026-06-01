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

const ui = {
  modelSearch: document.querySelector("#modelSearch"),
  quickList: document.querySelector("#quickList"),
  batteryInput: document.querySelector("#batteryInput"),
  batteryRange: document.querySelector("#batteryRange"),
  modelCount: document.querySelector("#modelCount"),
  selectedBrand: document.querySelector("#selectedBrand"),
  selectedModel: document.querySelector("#selectedModel"),
  batteryBadge: document.querySelector("#batteryBadge"),
  gramsMain: document.querySelector("#gramsMain"),
  gramsRange: document.querySelector("#gramsRange"),
  modelNote: document.querySelector("#modelNote"),
  cobaltMetric: document.querySelector("#cobaltMetric"),
  cobaltMetricSub: document.querySelector("#cobaltMetricSub"),
  drcMetric: document.querySelector("#drcMetric"),
  labourMetric: document.querySelector("#labourMetric"),
  labourMetricSub: document.querySelector("#labourMetricSub"),
  wageMetric: document.querySelector("#wageMetric"),
  wageMetricSub: document.querySelector("#wageMetricSub"),
  co2Metric: document.querySelector("#co2Metric"),
  co2MetricSub: document.querySelector("#co2MetricSub"),
  peopleMetric: document.querySelector("#peopleMetric"),
  peopleMetricSub: document.querySelector("#peopleMetricSub"),
  riskScore: document.querySelector("#riskScore"),
  riskBar: document.querySelector("#riskBar"),
  riskText: document.querySelector("#riskText"),
  shareResult: document.querySelector("#shareResult"),
  shareStatus: document.querySelector("#shareStatus"),
  phoneCountInput: document.querySelector("#phoneCountInput"),
  phoneCountRange: document.querySelector("#phoneCountRange"),
  classCobalt: document.querySelector("#classCobalt"),
  classDrc: document.querySelector("#classDrc"),
  classCo2: document.querySelector("#classCo2"),
  classLabour: document.querySelector("#classLabour"),
  classWage: document.querySelector("#classWage"),
  classPeople: document.querySelector("#classPeople"),
  phone3d: document.querySelector("#phone3d"),
  sceneWrap: document.querySelector(".scene-wrap")
};

let activePhone = phones.find((phone) => phone.model === "iPhone 15 Pro Max") || phones[0];
let threeState = null;
let currentImpact = null;

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

function renderResult(phone, custom = false) {
  const impact = estimateImpact(phone.capacity);
  const estimate = impact.cobalt;
  currentImpact = impact;
  ui.selectedBrand.textContent = custom ? "Custom battery estimate" : phone.brand;
  ui.selectedModel.textContent = custom ? `${formatNumber(phone.capacity)} mAh phone battery` : phone.model;
  ui.batteryBadge.textContent = `${formatNumber(phone.capacity)} mAh`;
  ui.gramsMain.textContent = `${estimate.mid.toFixed(1)}g`;
  ui.gramsRange.textContent = `estimated range: ${estimate.low.toFixed(1)}-${estimate.high.toFixed(1)}g`;
  ui.cobaltMetric.textContent = `${estimate.mid.toFixed(1)}g`;
  ui.cobaltMetricSub.textContent = `${estimate.low.toFixed(1)}-${estimate.high.toFixed(1)}g estimated range`;
  ui.drcMetric.textContent = `${impact.drc.mid.toFixed(1)}g`;
  ui.labourMetric.textContent = formatDuration(impact.labourMinutes);
  ui.labourMetricSub.textContent = `${(impact.drc.mid * ARTISANAL_SHARE).toFixed(1)}g artisanal-risk cobalt`;
  ui.wageMetric.textContent = formatMoney(impact.wage.mid);
  ui.wageMetricSub.textContent = `${formatMoney(impact.wage.low)}-${formatMoney(impact.wage.high)} at $1-$2/day`;
  ui.co2Metric.textContent = `${impact.co2.mid.toFixed(1)}kg`;
  ui.co2MetricSub.textContent = `${impact.co2.low.toFixed(1)}-${impact.co2.high.toFixed(1)}kg CO2e range`;
  ui.peopleMetric.textContent = formatWorkerDays(impact.workerDays);
  ui.peopleMetricSub.textContent = "proxy, not exact headcount";
  ui.riskScore.textContent = `${impact.risk} / 100`;
  ui.riskBar.style.width = `${impact.risk}%`;
  ui.riskText.textContent = impact.risk > 78
    ? "Large battery, higher cobalt demand, and stronger Congo supply-chain exposure in this estimate."
    : "Smaller battery, lower cobalt demand, but still connected to the same global cobalt risk pathway.";
  ui.modelNote.textContent = custom
    ? "This uses battery size only. It is useful when an exact phone model is missing or the battery has been replaced."
    : "Estimate based on battery capacity and typical cobalt-containing lithium-ion cathode ranges. Exact cobalt content varies by chemistry and supplier.";
  updateThreeBattery(estimate);
  renderClassScale();
}

function renderList(query = "") {
  const normalizedQuery = normalizeText(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const filtered = terms.length
    ? phones.filter((phone) => terms.every((term) => phone.searchKey.includes(term)))
    : [
        "iPhone 15 Pro Max",
        "iPhone 14 Pro Max",
        "Galaxy A15",
        "Galaxy S24 Ultra",
        "Galaxy A55",
        "Tecno Spark 20",
        "Tecno Camon 30",
        "Infinix Hot 40",
        "Oppo A58",
        "Vivo Y28",
        "Redmi Note 13 Pro",
        "Realme C65",
        "itel P55",
        "QMobile Rocket Pro"
      ].map((name) => phones.find((phone) => phone.model === name)).filter(Boolean);

  ui.modelCount.textContent = terms.length
    ? `${filtered.length} matches`
    : `${phones.length}+ models`;

  const visible = filtered.slice(0, terms.length ? 36 : 14);
  ui.quickList.innerHTML = visible.map((phone) => {
    const estimate = estimateCobalt(phone.capacity);
    const active = phone === activePhone ? " active" : "";
    return `
      <button class="model-button${active}" type="button" data-key="${phone.key}">
        <span>
          <strong>${phone.model}</strong>
          <span>${phone.brand} - ${formatNumber(phone.capacity)} mAh battery</span>
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

function updateThreeBattery(estimate) {
  if (!threeState) return;
  const ratio = Math.min(1, Math.max(0.18, estimate.mid / 14));
  threeState.batteryFill.scale.y = ratio;
  threeState.batteryFill.position.y = -0.45 + (ratio * 0.55);
  threeState.batteryGlow.intensity = 0.45 + (ratio * 1.4);
  threeState.particles.material.size = 0.045 + (ratio * 0.018);
}

async function initThreeScene() {
  if (!ui.phone3d || typeof ui.phone3d.getContext !== "function") return;

  try {
    const THREE = await import("https://unpkg.com/three@0.165.0/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({
      canvas: ui.phone3d,
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7.2);

    const phoneGroup = new THREE.Group();
    phoneGroup.rotation.set(-0.3, 0.52, -0.13);
    scene.add(phoneGroup);

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.05, 4.2, 0.22, 4, 8, 1),
      new THREE.MeshStandardMaterial({
        color: 0x111827,
        metalness: 0.55,
        roughness: 0.3
      })
    );
    phoneGroup.add(body);

    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(1.78, 3.72, 0.05),
      new THREE.MeshStandardMaterial({
        color: 0x14214a,
        metalness: 0.15,
        roughness: 0.28,
        emissive: 0x102969,
        emissiveIntensity: 0.4
      })
    );
    screen.position.z = 0.15;
    phoneGroup.add(screen);

    const speaker = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.055, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.55 })
    );
    speaker.position.set(0, 1.72, 0.2);
    phoneGroup.add(speaker);

    const batteryShell = new THREE.Mesh(
      new THREE.BoxGeometry(0.86, 1.34, 0.08),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.32,
        metalness: 0.15,
        roughness: 0.22
      })
    );
    batteryShell.position.set(0, -0.16, 0.23);
    phoneGroup.add(batteryShell);

    const batteryFill = new THREE.Mesh(
      new THREE.BoxGeometry(0.66, 1.06, 0.11),
      new THREE.MeshStandardMaterial({
        color: 0xf2c316,
        emissive: 0xb36b00,
        emissiveIntensity: 0.55,
        metalness: 0.08,
        roughness: 0.26
      })
    );
    batteryFill.position.set(0, 0.05, 0.31);
    phoneGroup.add(batteryFill);

    const cameraLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.17, 0.17, 0.05, 32),
      new THREE.MeshStandardMaterial({
        color: 0x0b1021,
        metalness: 0.4,
        roughness: 0.18
      })
    );
    cameraLens.rotation.x = Math.PI / 2;
    cameraLens.position.set(-0.62, 1.42, 0.22);
    phoneGroup.add(cameraLens);

    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    for (let index = 0; index < 110; index += 1) {
      const angle = index * 0.58;
      const radius = 2.15 + ((index % 9) * 0.045);
      particlePositions.push(
        Math.cos(angle) * radius,
        Math.sin(index * 0.31) * 1.7,
        Math.sin(angle) * 0.75
      );
    }
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xf2c316,
        size: 0.055,
        transparent: true,
        opacity: 0.85
      })
    );
    scene.add(particles);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.58, 0.012, 8, 160),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.42 })
    );
    outerRing.rotation.set(Math.PI / 2.4, 0.45, 0.2);
    scene.add(outerRing);

    const goldRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.72, 0.018, 8, 160),
      new THREE.MeshBasicMaterial({ color: 0xf2c316, transparent: true, opacity: 0.72 })
    );
    goldRing.rotation.set(Math.PI / 2.2, -0.24, -0.36);
    scene.add(goldRing);

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 4, 5);
    scene.add(keyLight);

    const batteryGlow = new THREE.PointLight(0xf2c316, 1.25, 5);
    batteryGlow.position.set(0, 0, 1.25);
    phoneGroup.add(batteryGlow);

    const pointer = { x: 0, y: 0 };
    const setPointer = (event) => {
      const rect = ui.phone3d.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    ui.phone3d.addEventListener("pointermove", setPointer);
    ui.phone3d.addEventListener("pointerdown", () => ui.phone3d.classList.add("is-dragging"));
    ui.phone3d.addEventListener("pointerup", () => ui.phone3d.classList.remove("is-dragging"));
    ui.phone3d.addEventListener("pointerleave", () => {
      ui.phone3d.classList.remove("is-dragging");
      pointer.x = 0;
      pointer.y = 0;
    });

    const resize = () => {
      const width = ui.phone3d.clientWidth || 1;
      const height = ui.phone3d.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    if ("ResizeObserver" in window) {
      new ResizeObserver(resize).observe(ui.phone3d);
    } else {
      window.addEventListener("resize", resize);
    }
    resize();

    threeState = { batteryFill, batteryGlow, particles };
    ui.phone3d.classList.add("is-live");
    ui.sceneWrap?.classList.add("is-three-live");
    updateThreeBattery(estimateCobalt(activePhone.capacity));

    const animate = () => {
      const time = performance.now() * 0.001;
      phoneGroup.rotation.x += ((-0.32 + (pointer.y * 0.2) + Math.sin(time * 1.2) * 0.025) - phoneGroup.rotation.x) * 0.06;
      phoneGroup.rotation.y += ((0.52 + pointer.x * 0.42) - phoneGroup.rotation.y) * 0.06;
      phoneGroup.rotation.z += ((-0.13 + pointer.x * 0.08) - phoneGroup.rotation.z) * 0.06;
      particles.rotation.y = time * 0.2;
      particles.rotation.z = time * 0.09;
      outerRing.rotation.z = time * 0.18;
      goldRing.rotation.z = -time * 0.24;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  } catch (error) {
    ui.phone3d.classList.remove("is-live");
    ui.sceneWrap?.classList.remove("is-three-live");
  }
}

ui.quickList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.custom) {
    renderResult({ capacity: Number(ui.batteryInput.value) }, true);
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
  ui.classCobalt.textContent = formatMass(currentImpact.cobalt.mid * count);
  ui.classDrc.textContent = formatMass(currentImpact.drc.mid * count);
  ui.classCo2.textContent = `${(currentImpact.co2.mid * count).toFixed(currentImpact.co2.mid * count < 100 ? 1 : 0)}kg`;
  ui.classLabour.textContent = formatDuration(currentImpact.labourMinutes * count);
  ui.classWage.textContent = formatMoney(currentImpact.wage.mid * count);
  ui.classPeople.textContent = formatWorkerDays(currentImpact.workerDays * count);
}

function syncPhoneCount(value) {
  const count = Math.min(500, Math.max(1, Number(value) || 30));
  ui.phoneCountInput.value = count;
  ui.phoneCountRange.value = Math.min(150, count);
  renderClassScale();
}

function buildShareText() {
  const model = ui.selectedModel.textContent;
  return `${model}: about ${ui.cobaltMetric.textContent} cobalt, ${ui.drcMetric.textContent} DRC-linked cobalt, ${ui.labourMetric.textContent} labour-risk exposure, ${ui.co2Metric.textContent} battery CO2e. Estimate from the Cobalt Phone Checker.`;
}

async function shareCurrentResult() {
  const text = buildShareText();
  try {
    if (navigator.share) {
      await navigator.share({ title: "My phone cobalt estimate", text });
      ui.shareStatus.textContent = "Shared";
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      ui.shareStatus.textContent = "Copied";
      return;
    }
    ui.shareStatus.textContent = text;
  } catch (error) {
    ui.shareStatus.textContent = "Ready to share";
  }
}

ui.batteryInput.addEventListener("input", () => syncCustomCapacity(ui.batteryInput.value));
ui.batteryRange.addEventListener("input", () => syncCustomCapacity(ui.batteryRange.value));
ui.phoneCountInput?.addEventListener("input", () => syncPhoneCount(ui.phoneCountInput.value));
ui.phoneCountRange?.addEventListener("input", () => syncPhoneCount(ui.phoneCountRange.value));
ui.shareResult?.addEventListener("click", shareCurrentResult);

ui.modelCount.textContent = `${phones.length}+ models`;
renderList();
renderResult(activePhone);
initThreeScene();
