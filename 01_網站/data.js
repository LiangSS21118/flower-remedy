const flowers = [
  { no: 1, name: "龍芽草", english: "Agrimony", category: "易受外界影響", negative: "表面開朗、壓抑真實情緒、用幽默遮住內在不安", positive: "認識你自己", image: "https://commons.wikimedia.org/wiki/Special:FilePath/(MHNT)_Agrimonia_eupatoria_inflorescence.jpg", imageAlt: "Agrimony plant flowers" },
  { no: 2, name: "白楊", english: "Aspen", category: "恐懼", negative: "過度敏感、無法命名的恐懼、怕黑或莫名不安", positive: "相信至善", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ospeholt_i_Hurdal.JPG", imageAlt: "Aspen trees" },
  { no: 3, name: "櫸木", english: "Beech", category: "過度牽掛別人的安康", negative: "不寬容、容易批評、看見別人的錯", positive: "珍視差異", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grib_skov.jpg", imageAlt: "Beech forest" },
  { no: 4, name: "矢車菊", english: "Centaury", category: "易受外界影響", negative: "渴求肯定、討好、難以拒絕、界線不清楚", positive: "為自己服務", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Centaurium_erythraea_(flowers).jpg", imageAlt: "Centaury flowers" },
  { no: 5, name: "水蕨", english: "Cerato", category: "不確定", negative: "不信賴自己的意見與知識，常詢問他人而被誤導", positive: "信任你的判斷", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ceratostigma_willmottianum_B.jpg", imageAlt: "Cerato flowers" },
  { no: 6, name: "櫻桃李", english: "Cherry Plum", category: "恐懼", negative: "精神壓力大、快抓狂、害怕失控", positive: "保持清醒理智", image: "https://commons.wikimedia.org/wiki/Special:FilePath/20140317Prunus_cerasifera_Hockenheimer_Rheinbogen5.jpg", imageAlt: "Cherry Plum blossoms" },
  { no: 7, name: "栗樹芽苞", english: "Chestnut Bud", category: "對現況不感興趣", negative: "重蹈覆轍，無法從錯誤中學習", positive: "學習", image: "https://commons.wikimedia.org/wiki/Special:FilePath/ND_678.N.59_Hofers_Kastanien_in_Wettringen.jpg", imageAlt: "Horse chestnut tree buds" },
  { no: 8, name: "菊苣", english: "Chicory", category: "過度牽掛別人的安康", negative: "過度關懷別人、控制、希望對方留在身邊", positive: "愛與放下", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Illustration_Cichorium_intybus0_clean.jpg", imageAlt: "Chicory botanical illustration" },
  { no: 9, name: "鐵線蓮", english: "Clematis", category: "對現況不感興趣", negative: "做白日夢、愛幻想、活在未來，對當下缺乏興趣", positive: "築夢紮根於現實", image: "https://commons.wikimedia.org/wiki/Special:FilePath/20140701Clematis_vitalba.jpg", imageAlt: "Clematis flowers" },
  { no: 10, name: "酸蘋果", english: "Crab Apple", category: "沮喪、絕望", negative: "對潔淨有過度需求、完美主義、覺得自己不乾淨", positive: "愛你自己", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Metsounapuu1103.JPG", imageAlt: "Crab Apple blossoms" },
  { no: 11, name: "榆樹", english: "Elm", category: "沮喪、絕望", negative: "過度負荷、壓力大，覺得任務超過自己能力", positive: "了解你的力量", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ulmus_minor_Variegata.jpg", imageAlt: "Elm leaves" },
  { no: 12, name: "龍膽", english: "Gentian", category: "不確定", negative: "悲觀、容易因小阻礙而懷疑與沮喪", positive: "克服阻礙", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gentiana_amarella_L_ag1.jpg", imageAlt: "Gentian flowers" },
  { no: 13, name: "金雀花", english: "Gorse", category: "不確定", negative: "失去希望，覺得復原或改善的可能很低", positive: "選擇希望", image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ulex_europaeus_Mynydd_Carningli_flowers.jpg", imageAlt: "Gorse flowers" },
  { no: 14, name: "石楠", english: "Heather", category: "孤單", negative: "過分自我中心、糾纏、害怕獨處，總想找人說自己的事", positive: "傾聽", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/CallunaVulgaris.jpg", imageAlt: "Heather flowers" },
  { no: 15, name: "冬青", english: "Holly", category: "易受外界影響", negative: "攻擊性、好鬥、生氣、忌妒、猜疑", positive: "選擇愛", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Ilex-aquifolium_%28Europaeische_Stechpalme-1%29.jpg", imageAlt: "Holly leaves and berries" },
  { no: 16, name: "忍冬", english: "Honeysuckle", category: "對現況不感興趣", negative: "緬懷過去，停留在過往美好或失去的人事物", positive: "從過去回到現在", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Lonicera_caprifolium002.jpg", imageAlt: "Honeysuckle flowers" },
  { no: 17, name: "角樹", english: "Hornbeam", category: "不確定", negative: "腦力疲憊、用腦過度、覺得例行工作很沉重", positive: "強化意志力，選擇開始", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg", imageAlt: "Hornbeam tree" },
  { no: 18, name: "鳳仙花", english: "Impatiens", category: "孤單", negative: "缺乏耐心、匆匆忙忙、覺得別人太慢", positive: "發現沉靜", image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Impatiens_glandulifera_0004.JPG", imageAlt: "Impatiens flowers" },
  { no: 19, name: "落葉松", english: "Larch", category: "沮喪、絕望", negative: "缺乏自信、預期自己會失敗、不敢嘗試", positive: "期望成功", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/L%27A_de_Bran%2C_%281798_m%29_Val_d%27Anniviers._Europese_larix_%28Larix_decidua%29_01.JPG", imageAlt: "Larch tree" },
  { no: 20, name: "溝酸漿", english: "Mimulus", category: "恐懼", negative: "可命名的恐懼，例如怕病、怕痛、怕意外、怕孤單", positive: "平靜的勇氣", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mimulus_guttatus_5639.JPG", imageAlt: "Mimulus flowers" },
  { no: 21, name: "歐白芥", english: "Mustard", category: "對現況不感興趣", negative: "憂鬱，像烏雲籠罩，常說不出明確原因", positive: "找到生命的喜悅", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Brassicaceae_-_Sinapis_arvensis_%283%29.JPG", imageAlt: "Mustard flowers" },
  { no: 22, name: "橡樹", english: "Oak", category: "沮喪、絕望", negative: "工作狂、硬撐、扛太多責任，仍持續奮戰", positive: "估量你的強度", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg", imageAlt: "Oak tree" },
  { no: 23, name: "橄欖", english: "Olive", category: "對現況不感興趣", negative: "身心徹底耗竭、過勞、無力再努力", positive: "增長力量", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Olivesfromjordan.jpg", imageAlt: "Olive fruits" },
  { no: 24, name: "松樹", english: "Pine", category: "沮喪、絕望", negative: "罪惡感、自責，即使成功也覺得不夠好", positive: "珍視你的努力", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Skuleskogen_pine.jpg", imageAlt: "Pine tree" },
  { no: 25, name: "紅栗花", english: "Red Chestnut", category: "恐懼", negative: "過度擔憂他人，尤其是自己所愛的人", positive: "散播勇氣與信任", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Aesculus_%C3%97_carnea_Ozarow_Maz_2.jpg", imageAlt: "Red Chestnut flowers" },
  { no: 26, name: "岩薔薇", english: "Rock Rose", category: "恐懼", negative: "恐慌、極度害怕、驚嚇，像動彈不得", positive: "行動的勇氣", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Sonnenr%C3%B6schen.jpg", imageAlt: "Rock Rose flowers" },
  { no: 27, name: "岩水", english: "Rock Water", category: "過度牽掛別人的安康", negative: "僵化的原則、頑固、律己甚嚴、不易享受生命", positive: "讓靈魂自由", image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Big_Spring_Missouri_1-02Aug08.jpg", imageAlt: "Spring water" },
  { no: 28, name: "線球草", english: "Scleranthus", category: "不確定", negative: "內在分裂、搖擺不定，難以在兩者之間做選擇", positive: "決定怎麼做", image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scleranthus_annuus_eF.jpg", imageAlt: "Scleranthus plant" },
  { no: 29, name: "伯利恆之星", english: "Star of Bethlehem", category: "沮喪、絕望", negative: "心靈受創、驚嚇、悲痛、長期拒絕被安慰", positive: "安慰自己", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Ornithogalum_umbellatum_close-up2.jpg", imageAlt: "Star of Bethlehem flowers" },
  { no: 30, name: "甜栗花", english: "Sweet Chestnut", category: "沮喪、絕望", negative: "徹底絕望、靈魂暗夜，痛苦到像到達臨界點", positive: "找到希望", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Chestnuts.jpg", imageAlt: "Sweet Chestnut fruits" },
  { no: 31, name: "馬鞭草", english: "Vervain", category: "過度牽掛別人的安康", negative: "過度熱忱，想感化他人接受自己的理念", positive: "有另一面", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Verbena_officinalis_sabliere-morriere-plailly_60_30062008_1.jpg", imageAlt: "Vervain flowers" },
  { no: 32, name: "葡萄藤", english: "Vine", category: "過度牽掛別人的安康", negative: "壓迫者、獨裁、霸凌，想讓別人照自己的方式做", positive: "引導他人", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Cabernet_Sauvignon_Gaillac.jpg", imageAlt: "Vine grapes" },
  { no: 33, name: "胡桃", english: "Walnut", category: "易受外界影響", negative: "缺乏堅定力量，轉換階段時容易受外界影響", positive: "開創自己的路", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Noyer_centenaire_en_automne.JPG", imageAlt: "Walnut tree" },
  { no: 34, name: "水堇", english: "Water Violet", category: "孤單", negative: "優越感、冷漠、疏離，喜歡獨來獨往", positive: "伸出援手", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Illustration_Hottonia_palustris0.jpg", imageAlt: "Water Violet botanical illustration" },
  { no: 35, name: "白栗花", english: "White Chestnut", category: "對現況不感興趣", negative: "思緒混亂、反覆跳針，念頭停不下來", positive: "安穩思緒", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Illustration_Aesculus_hippocastanum0_clean.jpg", imageAlt: "White Chestnut botanical illustration" },
  { no: 36, name: "野燕麥", english: "Wild Oat", category: "不確定", negative: "缺乏目標、茫然，不知道要走哪個人生方向", positive: "決定甚麼", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bromus_ramosus_IP0706072.JPG", imageAlt: "Wild Oat grass" },
  { no: 37, name: "野薔薇", english: "Wild Rose", category: "對現況不感興趣", negative: "聽天由命、停滯不前、心灰意冷、內心舉白旗", positive: "感覺活著", image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Divlja_ruza_cvijet_270508.jpg", imageAlt: "Wild Rose flower" },
  { no: 38, name: "楊柳", english: "Willow", category: "沮喪、絕望", negative: "記仇、憤世忌俗、覺得自己被不公平對待", positive: "選擇慷慨", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Salix_alba_leaves.jpg", imageAlt: "Willow leaves" }
];

const focusStorageKey = "bachFlowerFocusList.v1";
const recordStorageKey = "bachFlowerSelfRecords.v1";
const syncDbName = "bachFlowerSyncDb";
const syncStoreName = "fileHandles";
const syncHandleKey = "mainJson";
let syncWriteTimer = null;

const trackRows = [
  { no: 1, communication: "矢車菊", compensation: "冬青", decompensation: "松樹", theme: "自我界線、討好他人" },
  { no: 2, communication: "水蕨", compensation: "葡萄藤", decompensation: "野燕麥", theme: "相信自己、人生方向" },
  { no: 3, communication: "線球草", compensation: "岩水", decompensation: "酸蘋果", theme: "決定與平衡" },
  { no: 4, communication: "龍膽", compensation: "楊柳", decompensation: "野薔薇", theme: "面對挫折與希望" },
  { no: 5, communication: "水堇", compensation: "栗樹芽苞", decompensation: "橡樹", theme: "驕傲、學習生命課題" },
  { no: 6, communication: "馬鞭草", compensation: "角樹", decompensation: "白栗花", theme: "理想、精神能量" },
  { no: 7, communication: "龍芽草", compensation: "馬鞭草", decompensation: "甜栗花", theme: "隱藏痛苦、真實情緒" },
  { no: 8, communication: "岩薔薇", compensation: "龍芽草", decompensation: "櫻桃李", theme: "恐懼與危機控制" },
  { no: 9, communication: "鳳仙花", compensation: "橄欖", decompensation: "橡樹", theme: "壓力、耐力、休息" },
  { no: 10, communication: "菊苣", compensation: "紅栗花", decompensation: "忍冬", theme: "愛與依附、放下過去" },
  { no: 11, communication: "溝酸漿", compensation: "石楠", decompensation: "歐白芥", theme: "社交、人際、自我封閉" },
  { no: 12, communication: "鐵線蓮", compensation: "鳳仙花", decompensation: "歐白芥", theme: "活在當下、與現實連結" }
];

const trackRoleLabels = {
  communication: "溝通花精",
  compensation: "補償花精",
  decompensation: "失調花精"
};

const bodyMapRegions = [
  {
    id: "agrimony-nose-left",
    label: "鼻子左側",
    description: "龍芽草點位之一，位於鼻子左側。點位只作為身體地圖查詢入口，實際使用仍需回到情緒狀態判斷。",
    view: "front",
    points: { front: { x: 51.5, y: 9.8 } },
    flowers: ["龍芽草"]
  },
  {
    id: "agrimony-left-lower-abdomen",
    label: "左下腹",
    description: "龍芽草點位之一，位於左下腹附近。若這裡有明顯反應，可搭配個案當下的壓抑、表面沒事、內在不安等狀態一起判斷。",
    view: "front",
    points: { front: { x: 55.3, y: 48.1 } },
    flowers: ["龍芽草"]
  },
  {
    id: "agrimony-left-calf-back",
    label: "左小腿後方",
    description: "龍芽草點位之一，位於後側左小腿後方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 34.0, y: 80.0 } },
    flowers: ["龍芽草"]
  },
  {
    id: "agrimony-right-thigh-back",
    label: "右大腿後方",
    description: "龍芽草點位之一，位於後側右大腿後方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 60.0, y: 57.0 } },
    flowers: ["龍芽草"]
  },
  {
    id: "aspen-nose-right",
    label: "鼻子右側",
    description: "白楊點位之一，位於鼻子右側。白楊主要對應說不出原因的不安、莫名恐懼或敏感害怕。",
    view: "front",
    points: { front: { x: 48.7, y: 8.7 } },
    flowers: ["白楊"]
  },
  {
    id: "aspen-chin",
    label: "下巴",
    description: "白楊點位之一，位於下巴附近。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 49.7, y: 12.5 } },
    flowers: ["白楊"]
  },
  {
    id: "aspen-right-shoulder",
    label: "右肩",
    description: "白楊點位之一，位於前側右肩。若此處有反應，可搭配白楊的莫名不安、怕黑或無法命名的恐懼一起判斷。",
    view: "front",
    points: { front: { x: 43.5, y: 17.2 } },
    flowers: ["白楊"]
  },
  {
    id: "aspen-right-upper-back",
    label: "右上背",
    description: "白楊點位之一，位於後側右上背。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 58.5, y: 22.3 } },
    flowers: ["白楊"]
  },
  {
    id: "aspen-left-inner-thigh",
    label: "左大腿內側",
    description: "白楊點位之一，位於後側左大腿內側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 45.7, y: 56.5 } },
    flowers: ["白楊"]
  },
  {
    id: "beech-right-cheek",
    label: "右臉頰",
    description: "櫸木點位之一，位於前側右臉頰。櫸木主要對應容易批評、不寬容、看見別人的錯等狀態。",
    view: "front",
    points: { front: { x: 45.8, y: 11.2 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-upper-right-abdomen",
    label: "上右腹部",
    description: "櫸木點位之一，位於前側上右腹部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 43.8, y: 44.2 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-lower-right-abdomen",
    label: "下右腹部",
    description: "櫸木點位之一，位於前側下右腹部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 43.8, y: 49.0 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-left-palm-front",
    label: "左手掌",
    description: "櫸木點位之一，位於前側左手掌。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 80.8, y: 52.6 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-right-inner-foot",
    label: "右腳內側",
    description: "櫸木點位之一，位於前側右腳內側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 37.6, y: 95.0 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-right-back",
    label: "右背部",
    description: "櫸木點位之一，位於後側右背部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 58.0, y: 27.2 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-left-palm-back",
    label: "左手掌",
    description: "櫸木點位之一，位於後側左手掌。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 17.0, y: 52.6 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-left-outer-thigh",
    label: "左大腿外側",
    description: "櫸木點位之一，位於後側左大腿外側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 31.0, y: 56.0 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-left-calf-back",
    label: "左小腿後方",
    description: "櫸木點位之一，位於後側左小腿後方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 36.4, y: 76.2 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-right-inner-calf",
    label: "右小腿內側",
    description: "櫸木點位之一，位於後側右小腿內側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 54.2, y: 76.2 } },
    flowers: ["櫸木"]
  },
  {
    id: "beech-left-inner-back-ankle",
    label: "左腳內後側",
    description: "櫸木點位之一，位於後側左腳內後側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 35.4, y: 96.0 } },
    flowers: ["櫸木"]
  },
  {
    id: "centaury-right-upper-head",
    label: "右上頭顱",
    description: "矢車菊點位之一，位於前側右上頭顱。矢車菊主要對應討好、難以拒絕、界線不清楚等狀態。",
    view: "front",
    points: { front: { x: 45.5, y: 2.8 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-left-cheek",
    label: "左臉頰",
    description: "矢車菊點位之一，位於前側左臉頰。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 53.8, y: 10.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-front-chest",
    label: "前胸",
    description: "矢車菊點位之一，位於前胸。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 47.0, y: 24.8 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-right-palm",
    label: "右手掌",
    description: "矢車菊點位之一，位於前側右手掌。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 18.5, y: 54.2 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-right-hip-joint",
    label: "右髖關節",
    description: "矢車菊點位之一，位於前側右髖關節。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 45.0, y: 53.6 } },
    flowers: ["矢車菊"]
  },
  {
    id: "body-genitals-female",
    label: "生殖器",
    description: "女性生殖器總點位。所有與女性生殖器相關的花精都集中在這一點，點開後查看各花精的細部位置。",
    view: "front",
    points: { front: { x: 50.0, y: 53.0 } },
    genders: ["female"],
    detailsTitle: "女性生殖器細部區域",
    details: [
      "矢車菊：陰蒂。",
      "櫻桃李：陰蒂投影區。",
      "菊苣：右陰唇。",
      "酸蘋果：左側小陰唇內側；肛門和其周圍深紅色皮膚區。"
    ],
    flowers: ["矢車菊", "櫻桃李", "菊苣", "酸蘋果"]
  },
  {
    id: "centaury-left-lower-leg-front",
    label: "左小腿前方",
    description: "矢車菊點位之一，位於前側左小腿前方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 61.5, y: 82.2 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-left-back-head",
    label: "左後頭顱",
    description: "矢車菊點位之一，位於後側左後頭顱。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 44.5, y: 9.8 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-upper-back",
    label: "上背部",
    description: "矢車菊點位之一，位於後側上背部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 50.0, y: 19.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-lower-back",
    label: "下背部",
    description: "矢車菊點位之一，位於後側下背部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 60.0, y: 26.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-right-flank",
    label: "右側身",
    description: "矢車菊點位之一，位於後側右側身。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 67.0, y: 47.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-left-outer-knee",
    label: "左膝外側",
    description: "矢車菊點位之一，位於後側左膝外側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 31.0, y: 70.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-right-outer-calf",
    label: "右小腿外側",
    description: "矢車菊點位之一，位於後側右小腿外側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 63.2, y: 80.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "centaury-left-heel-bottom",
    label: "左腳底部",
    description: "矢車菊點位之一，位於後側左腳底部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 27.0, y: 98.0 } },
    flowers: ["矢車菊"]
  },
  {
    id: "cerato-left-head",
    label: "頭部左側",
    description: "水蕨點位之一，位於前側頭部左側。水蕨主要對應不信任自己的判斷、常想詢問他人意見的狀態。",
    view: "front",
    points: { front: { x: 53.8, y: 5.2 } },
    flowers: ["水蕨"]
  },
  {
    id: "cerato-right-back",
    label: "右背",
    description: "水蕨點位之一，位於後側右背。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 58.6, y: 31.0 } },
    flowers: ["水蕨"]
  },
  {
    id: "cerato-right-arm",
    label: "右手臂",
    description: "水蕨點位之一，位於後側右手臂。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 68.0, y: 28.0 } },
    flowers: ["水蕨"]
  },
  {
    id: "cerato-right-hand-back",
    label: "右手背",
    description: "水蕨點位之一，位於後側右手背。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 81.8, y: 53.5 } },
    flowers: ["水蕨"]
  },
  {
    id: "cerato-right-outer-thigh",
    label: "右大腿外側",
    description: "水蕨點位之一，位於後側右大腿外側。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 68.0, y: 53.8 } },
    flowers: ["水蕨"]
  },
  {
    id: "body-genitals-male",
    label: "生殖器",
    description: "男性生殖器總點位。所有與男性生殖器相關的花精都集中在這一點，點開後查看各花精的細部位置。",
    view: "front",
    points: { front: { x: 50.0, y: 53.0 } },
    genders: ["male"],
    detailsTitle: "男性生殖器細部區域",
    details: [
      "櫻桃李：前列腺投影區。",
      "酸蘋果：位於陰莖前部；起自龜頭上緣，環著陰莖冠狀溝，範圍約 1 指寬。"
    ],
    flowers: ["櫻桃李", "酸蘋果"]
  },
  {
    id: "cherry-plum-left-thigh-hip-left",
    label: "左大腿與髖部左側",
    description: "櫻桃李點位之一，位於前側左大腿與髖部左側。櫻桃李主要對應壓力大、害怕失控、快要抓狂的狀態。",
    view: "front",
    points: { front: { x: 60.4, y: 52.6 } },
    flowers: ["櫻桃李"]
  },
  {
    id: "cherry-plum-left-lower-back",
    label: "左下背",
    description: "櫻桃李點位之一，位於後側左下背。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 39.2, y: 39.8 } },
    flowers: ["櫻桃李"]
  },
  {
    id: "chestnut-bud-right-thigh-front",
    label: "右大腿前方",
    description: "栗樹芽苞點位之一，位於前側右大腿前方。栗樹芽苞主要對應重蹈覆轍、沒有從經驗中學到的狀態。",
    view: "front",
    points: { front: { x: 35.8, y: 58.8 } },
    flowers: ["栗樹芽苞"]
  },
  {
    id: "chestnut-bud-right-calf-back",
    label: "右小腿後方",
    description: "栗樹芽苞點位之一，位於後側右小腿後方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 58.5, y: 79.5 } },
    flowers: ["栗樹芽苞"]
  },
  {
    id: "chicory-right-head-side",
    label: "頭部右側",
    description: "菊苣點位之一，位於前側頭部右側。菊苣主要對應過度關懷、控制、希望對方留在身邊等狀態。",
    view: "front",
    points: { front: { x: 45.3, y: 8.0 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-right-eye",
    label: "右眼",
    description: "菊苣點位之一，位於前側右眼。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 50.8, y: 9.0 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-right-lower-abdomen",
    label: "右下腹",
    description: "菊苣點位之一，位於前側右下腹。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 47.0, y: 55.8 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-left-thigh-front",
    label: "左大腿前方",
    description: "菊苣點位之一，位於前側左大腿前方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 65.5, y: 65.5 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-left-calf-front",
    label: "左小腿前方",
    description: "菊苣點位之一，位於前側左小腿前方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 66.8, y: 89.8 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-right-shoulder-back",
    label: "右肩後方",
    description: "菊苣點位之一，位於後側右肩後方。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 64.5, y: 22.8 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-left-elbow",
    label: "左下臂",
    description: "菊苣點位之一，位於後側左下臂。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 27.2, y: 58.0 } },
    flowers: ["菊苣"]
  },
  {
    id: "chicory-left-hand-thumb-index-inner",
    label: "左手背（拇指、食指內緣）",
    description: "菊苣點位之一，位於後側左手背拇指與食指內緣附近。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 21.8, y: 65.0 } },
    flowers: ["菊苣"]
  },
  {
    id: "clematis-right-cheek",
    label: "右臉頰",
    description: "鐵線蓮點位之一，位於前側右臉頰。鐵線蓮主要對應容易做白日夢、活在想像或對當下缺乏興趣的狀態。",
    view: "front",
    points: { front: { x: 45.8, y: 8.0 } },
    flowers: ["鐵線蓮"]
  },
  {
    id: "clematis-right-neck",
    label: "右頸部",
    description: "鐵線蓮點位之一，位於前側右頸部。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "front",
    points: { front: { x: 43.5, y: 12.6 } },
    flowers: ["鐵線蓮"]
  },
  {
    id: "clematis-left-heel",
    label: "左腳跟",
    description: "鐵線蓮點位之一，位於後側左腳跟。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 28.8, y: 96.4 } },
    flowers: ["鐵線蓮"]
  },
  {
    id: "crab-apple-neck-front",
    label: "頸部",
    description: "酸蘋果點位之一，位於前側頸部。酸蘋果主要對應覺得自己不乾淨、過度在意潔淨或完美的狀態。",
    view: "front",
    points: { front: { x: 50.0, y: 14.0 } },
    flowers: ["酸蘋果"]
  },
  {
    id: "crab-apple-left-lower-back",
    label: "左下背",
    description: "酸蘋果點位之一，位於後側左下背。此點位先依你提供的截圖標記，之後可再微調精準位置。",
    view: "back",
    points: { back: { x: 39.5, y: 35.5 } },
    flowers: ["酸蘋果"]
  }
];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
  queueAutoSync();
}

function findFlower(name) {
  return flowers.find((flower) => flower.name === name);
}

function flowerOptions() {
  return flowers.map((flower) => (
    `<option value="${flower.name}">${flower.no}. ${flower.name} ${flower.english}</option>`
  )).join("");
}

function focusFlowerNames() {
  return new Set(readList(focusStorageKey).map((item) => item.flower));
}

function reactionHasAny(value, words) {
  return words.some((word) => String(value || "").includes(word));
}

function inferredReactionSide(item = {}) {
  if (item.side === "front" || item.side === "back") return item.side;
  const text = `${item.group || ""} ${item.path || ""} ${item.title || ""}`;
  if (reactionHasAny(text, ["背面", "後方", "後側", "後腦", "後背", "手背", "腳掌", "腳跟"])) return "back";
  return "front";
}

function inferredReactionIsGenital(item = {}) {
  if (typeof item.isGenital === "boolean") return item.isGenital;
  return reactionHasAny(`${item.title || ""} ${item.path || ""}`, ["生殖器", "陰蒂", "陰唇", "陰莖", "龜頭", "前列腺"]);
}

function inferredReactionGender(item = {}) {
  if (item.gender === "female" || item.gender === "male" || item.gender === "all") return item.gender;
  const text = `${item.title || ""} ${item.path || ""}`;
  if (reactionHasAny(text, ["女生殖器", "女性", "陰蒂", "陰唇"])) return "female";
  if (reactionHasAny(text, ["男生殖器", "男下生殖器", "男性", "陰莖", "龜頭", "前列腺"])) return "male";
  return "all";
}

function normalizeReactionItem(item = {}) {
  return {
    ...item,
    isGenital: inferredReactionIsGenital(item),
    gender: inferredReactionGender(item),
    side: inferredReactionSide(item)
  };
}

function flowerTrackRoles(flowerName) {
  return trackRows.flatMap((track) => (
    ["communication", "compensation", "decompensation"]
      .filter((role) => track[role] === flowerName)
      .map((role) => `第 ${track.no} 軌｜${trackRoleLabels[role]}｜${track.theme}`)
  ));
}

function flowerReactionItems(flowerName) {
  if (typeof BODY_REACTION_DATA === "undefined") return [];
  const flower = BODY_REACTION_DATA.flowers.find((item) => item.name === flowerName);
  return (flower?.items || []).map(normalizeReactionItem);
}

function compactReactionLabels(items) {
  const labels = Array.from(new Set(items.map((item) => item.title))).filter(Boolean);
  if (labels.length <= 6) return labels.join("、");
  return `${labels.slice(0, 6).join("、")} 等 ${labels.length} 區`;
}

function ensureQuickFocusDialog() {
  let dialog = document.querySelector("#quickFocusDialog");
  if (!dialog) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal-backdrop quick-focus-dialog" id="quickFocusDialog" hidden>
        <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="quickFocusTitle">
          <div class="settings-header">
            <div>
              <p class="eyebrow" id="quickFocusEyebrow">個人重點</p>
              <h2 id="quickFocusTitle">加入重點</h2>
            </div>
            <button class="body-map-modal-close" type="button" id="quickFocusClose" aria-label="關閉">×</button>
          </div>
          <p class="quick-focus-message" id="quickFocusMessage"></p>
          <form id="quickFocusForm" class="record-form compact-form">
            <div class="field span-2">
              <label for="quickFocusNote">備註</label>
              <textarea id="quickFocusNote" placeholder="寫下目前狀態、不舒服的位置、觸發情境或想觀察的方向。"></textarea>
            </div>
            <div class="field span-2">
              <label for="quickFocusMatch">符合程度：<span id="quickFocusMatchValue">3</span> / 5</label>
              <input id="quickFocusMatch" type="range" min="1" max="5" value="3">
            </div>
            <div class="record-actions span-2">
              <button class="button" type="submit" id="quickFocusSubmit">儲存到個人重點</button>
              <button class="small-button" type="button" id="quickFocusCancel">取消</button>
            </div>
          </form>
        </div>
      </div>
    `);
    dialog = document.querySelector("#quickFocusDialog");
  }
  return {
    dialog,
    form: dialog.querySelector("#quickFocusForm"),
    title: dialog.querySelector("#quickFocusTitle"),
    eyebrow: dialog.querySelector("#quickFocusEyebrow"),
    message: dialog.querySelector("#quickFocusMessage"),
    note: dialog.querySelector("#quickFocusNote"),
    match: dialog.querySelector("#quickFocusMatch"),
    matchValue: dialog.querySelector("#quickFocusMatchValue"),
    submit: dialog.querySelector("#quickFocusSubmit"),
    cancel: dialog.querySelector("#quickFocusCancel"),
    close: dialog.querySelector("#quickFocusClose")
  };
}

function promptFocusItem(flowerName, source = "") {
  const flower = findFlower(flowerName);
  if (!flower) return Promise.resolve(false);
  const existing = readList(focusStorageKey).find((item) => item.flower === flowerName);
  const refs = ensureQuickFocusDialog();

  refs.title.textContent = existing ? `更新 ${flowerName}` : `加入 ${flowerName}`;
  refs.eyebrow.textContent = existing ? "已在個人重點" : "加入個人重點";
  refs.message.textContent = existing
    ? `「${flowerName}」已經加入過。需要更新符合程度或備註嗎？`
    : `將「${flower.no}. ${flowerName}」加入個人重點。`;
  refs.note.value = existing?.reason || "";
  refs.match.value = existing?.match || "3";
  refs.matchValue.textContent = refs.match.value;
  refs.submit.textContent = existing ? "更新重點" : "加入重點";
  refs.dialog.hidden = false;
  refs.note.focus();

  return new Promise((resolve) => {
    const cleanup = (result) => {
      refs.dialog.hidden = true;
      refs.form.onsubmit = null;
      refs.cancel.onclick = null;
      refs.close.onclick = null;
      refs.dialog.onclick = null;
      refs.match.oninput = null;
      resolve(result);
    };

    refs.match.oninput = () => {
      refs.matchValue.textContent = refs.match.value;
    };
    refs.form.onsubmit = (event) => {
      event.preventDefault();
      addFocusItem(flowerName, refs.note.value, refs.match.value, source);
      cleanup(true);
    };
    refs.cancel.onclick = () => cleanup(false);
    refs.close.onclick = () => cleanup(false);
    refs.dialog.onclick = (event) => {
      if (event.target === refs.dialog) cleanup(false);
    };
  });
}

async function addFocusFromButton(button, source) {
  const flowerName = button.dataset.addTrackFocus || button.dataset.addInlineFocus;
  if (!flowerName) return;
  if (!await promptFocusItem(flowerName, source)) return;
  button.textContent = "已加入重點";
  button.disabled = true;
}

function renderNav(activeFile) {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const navGroups = [
    { label: "總覽", links: [["巴赫花精整理筆記.html", "首頁總覽"]] },
    { label: "分類法", links: [["core.html", "核心觀念"], ["categories.html", "巴赫七大分類"], ["rescue.html", "急救花精"], ["inner-outer.html", "內在 / 外在 / 基礎花精"], ["tracks.html", "十二軌道與分層"]] },
    { label: "身體反應區", links: [["body-map.html", "身體地圖查詢"], ["skin-guidelines.html", "使用準則與療癒實務"]] },
    { label: "花精大全", links: [["flowers.html", "總表查詢"], ["comparison.html", "容易混淆"], ["dosage.html", "配置與劑量"]] },
    { label: "個人", links: [["decision.html", "判斷"], ["assessment.html", "個人評估"], ["records.html", "紀錄"]] }
  ];
  const links = navGroups.flatMap((group) => group.links);
  const activeLabel = links.find(([href]) => href === activeFile)?.[1] || "筆記";

  if (!document.querySelector(".app-topbar")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <header class="app-topbar">
        <button class="icon-button" type="button" id="openMenu" aria-label="開啟分頁選單">☰</button>
        <a class="brand-mark" href="巴赫花精整理筆記.html">
          <span>新巴赫花精</span>
          <small>花精大全</small>
        </a>
        <button class="icon-button" type="button" id="openSettings">設定</button>
        <div class="desktop-nav">
          ${navGroups.map((group) => {
            const groupActive = group.links.some(([href]) => href === activeFile);
            if (group.links.length === 1) {
              const [href, label] = group.links[0];
              return `<a class="nav-direct-link ${href === activeFile ? "active" : ""}" href="${href}">${group.label}</a>`;
            }
            return `
              <details class="nav-group">
                <summary class="${groupActive ? "active" : ""}">${group.label}</summary>
                <div class="nav-menu">
                  ${group.links.map(([href, label]) => (
                    `<a class="${href === activeFile ? "active" : ""}" href="${href}">${label}</a>`
                  )).join("")}
                </div>
              </details>
            `;
          }).join("")}
        </div>
      </header>
      <div class="drawer-backdrop" id="drawerBackdrop"></div>
      <aside class="settings-panel" id="settingsPanel" aria-label="設定"></aside>
    `);

    document.querySelector("#openMenu").addEventListener("click", () => {
      document.body.classList.add("drawer-open");
      document.body.classList.remove("settings-open");
    });
    document.querySelector("#openSettings").addEventListener("click", () => {
      document.body.classList.add("settings-open");
      document.body.classList.remove("drawer-open");
    });
    document.querySelector("#drawerBackdrop").addEventListener("click", () => {
      document.body.classList.remove("drawer-open", "settings-open");
    });
    document.querySelectorAll(".nav-group").forEach((group) => {
      group.addEventListener("toggle", () => {
        if (!group.open) return;
        document.querySelectorAll(".nav-group").forEach((otherGroup) => {
          if (otherGroup !== group) otherGroup.open = false;
        });
      });
    });
    document.querySelectorAll(".desktop-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".nav-group").forEach((group) => {
          group.open = false;
        });
      });
    });
  } else {
    document.querySelectorAll(".nav-direct-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeFile);
    });
    document.querySelectorAll(".nav-group").forEach((group) => {
      const isActiveGroup = Array.from(group.querySelectorAll("a")).some((link) => link.getAttribute("href") === activeFile);
      group.open = false;
      group.querySelector("summary").classList.toggle("active", isActiveGroup);
      group.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === activeFile);
      });
    });
  }

  nav.innerHTML = `
    <p class="nav-title">筆記分頁</p>
    ${navGroups.map((group) => `
      <div class="drawer-nav-group">
        <p>${group.label}</p>
        <div class="nav-links">
          ${group.links.map(([href, label]) => (
            `<a class="${href === activeFile ? "active" : ""}" href="${href}">${label}</a>`
          )).join("")}
        </div>
      </div>
    `).join("")}
  `;

  renderSyncPanel();
}

function renderFocusList() {
  const focusList = document.querySelector("#focusList");
  if (!focusList) return;

  const sortMode = document.querySelector("#focusSort")?.value || "match-desc";
  const items = readList(focusStorageKey).slice();
  items.sort((a, b) => {
    if (sortMode === "match-asc") {
      return Number(a.match || 0) - Number(b.match || 0)
        || Number(b.createdAt || b.id || 0) - Number(a.createdAt || a.id || 0);
    }
    if (sortMode === "newest") {
      return Number(b.createdAt || b.id || 0) - Number(a.createdAt || a.id || 0);
    }
    return Number(b.match || 0) - Number(a.match || 0)
      || Number(b.createdAt || b.id || 0) - Number(a.createdAt || a.id || 0);
  });
  if (items.length === 0) {
    focusList.innerHTML = '<p class="empty-state">尚未收藏花精。</p>';
    return;
  }

  focusList.innerHTML = items.map((item, index) => {
    const flower = findFlower(item.flower);
    if (!flower) return "";

    return `
      <article class="focus-card" data-focus-id="${item.id}">
        <img class="flower-image" src="${escapeHTML(flower.image)}" alt="${escapeHTML(flower.imageAlt)}" loading="lazy">
        <div class="focus-card-header">
          <h3>${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
        </div>
        <span class="tag">${escapeHTML(flower.category)}</span>
        ${item.source ? `<p><strong>加入來源：</strong>${escapeHTML(item.source)}</p>` : ""}
        ${item.reason ? `<p><strong>自身情況：</strong>${escapeHTML(item.reason)}</p>` : ""}
        ${item.match ? `<p><strong>匹配程度：</strong>${escapeHTML(item.match)} / 5</p>` : ""}
        <p><strong>負面特質：</strong>${escapeHTML(flower.negative)}</p>
        <p><strong>正面方向：</strong>${escapeHTML(flower.positive)}</p>
        <p class="record-actions">
          <button class="small-button danger" type="button" data-delete-focus="${item.id}">移除</button>
        </p>
      </article>
    `;
  }).join("");
}

function buildSyncPayload() {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    focusItems: readList(focusStorageKey),
    records: readList(recordStorageKey)
  };
}

function applySyncPayload(payload) {
  if (Array.isArray(payload.focusItems)) {
    localStorage.setItem(focusStorageKey, JSON.stringify(payload.focusItems));
  }

  if (Array.isArray(payload.records)) {
    localStorage.setItem(recordStorageKey, JSON.stringify(payload.records));
  }
}

function openSyncDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(syncDbName, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(syncStoreName);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getSyncHandle() {
  const db = await openSyncDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(syncStoreName, "readonly");
    const request = tx.objectStore(syncStoreName).get(syncHandleKey);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function setSyncHandle(handle) {
  const db = await openSyncDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(syncStoreName, "readwrite");
    tx.objectStore(syncStoreName).put(handle, syncHandleKey);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function clearSyncHandle() {
  const db = await openSyncDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(syncStoreName, "readwrite");
    tx.objectStore(syncStoreName).delete(syncHandleKey);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function verifyPermission(handle, mode = "readwrite") {
  const options = { mode };
  if ((await handle.queryPermission(options)) === "granted") return true;
  return (await handle.requestPermission(options)) === "granted";
}

function setSyncStatus(message) {
  const status = document.querySelector("#syncStatus");
  if (status) status.textContent = message;
}

async function writeSyncFile() {
  if (!("showSaveFilePicker" in window)) {
    setSyncStatus("這個瀏覽器不支援直接同步到固定 JSON 檔。請改用 Chrome 或 Edge。");
    return;
  }

  const handle = await getSyncHandle();
  if (!handle) {
    setSyncStatus("尚未綁定固定 JSON 檔。");
    return;
  }

  const allowed = await verifyPermission(handle, "readwrite");
  if (!allowed) {
    setSyncStatus("沒有 JSON 檔寫入權限，請重新綁定。");
    return;
  }

  const writable = await handle.createWritable();
  await writable.write(JSON.stringify(buildSyncPayload(), null, 2));
  await writable.close();
  setSyncStatus(`已同步到固定 JSON：${new Date().toLocaleString("zh-TW")}`);
}

function queueAutoSync() {
  if (!("showSaveFilePicker" in window)) return;
  clearTimeout(syncWriteTimer);
  syncWriteTimer = setTimeout(() => {
    writeSyncFile().catch(() => setSyncStatus("自動同步失敗，請確認 JSON 檔權限。"));
  }, 250);
}

async function bindSyncFile() {
  if (!("showSaveFilePicker" in window)) {
    setSyncStatus("這個瀏覽器不支援固定 JSON 同步。請改用 Chrome 或 Edge。");
    return;
  }

  const handle = await window.showSaveFilePicker({
    suggestedName: "bach-flower-sync.json",
    types: [{
      description: "JSON",
      accept: { "application/json": [".json"] }
    }]
  });

  await setSyncHandle(handle);
  await writeSyncFile();
}

async function importSyncFile() {
  if (!("showOpenFilePicker" in window)) {
    setSyncStatus("這個瀏覽器不支援讀取固定 JSON 檔。請改用 Chrome 或 Edge。");
    return;
  }

  const [handle] = await window.showOpenFilePicker({
    types: [{
      description: "JSON",
      accept: { "application/json": [".json"] }
    }],
    multiple: false
  });

  const file = await handle.getFile();
  const payload = JSON.parse(await file.text());
  applySyncPayload(payload);
  await setSyncHandle(handle);
  setSyncStatus("已從 JSON 載入資料，並綁定這個檔案。");

  if (document.querySelector("#focusList")) renderFocusList();
  if (document.querySelector("#recordList")) renderRecordsList();
}

function renderSyncPanel() {
  const panel = document.querySelector("#settingsPanel");
  if (!panel) return;

  panel.innerHTML = `
    <div class="settings-header">
      <h2>設定</h2>
      <button class="small-button" type="button" id="closeSettings">關閉</button>
    </div>
    <p>固定 JSON 同步</p>
    <div class="record-actions">
      <button class="button" type="button" id="bindSyncFile">綁定 / 建立 JSON</button>
      <button class="small-button" type="button" id="importSyncFile">從 JSON 載入</button>
      <button class="small-button" type="button" id="manualSyncFile">立即同步</button>
      <button class="small-button danger" type="button" id="clearSyncFile">解除綁定</button>
    </div>
    <p id="syncStatus" class="sync-status">尚未檢查同步狀態。</p>
  `;

  document.querySelector("#closeSettings").addEventListener("click", () => {
    document.body.classList.remove("settings-open");
  });
  document.querySelector("#bindSyncFile").addEventListener("click", () => {
    bindSyncFile().catch(() => setSyncStatus("綁定 JSON 失敗或已取消。"));
  });
  document.querySelector("#importSyncFile").addEventListener("click", () => {
    importSyncFile().catch(() => setSyncStatus("載入 JSON 失敗或已取消。"));
  });
  document.querySelector("#manualSyncFile").addEventListener("click", () => {
    writeSyncFile().catch(() => setSyncStatus("同步失敗，請確認 JSON 檔權限。"));
  });
  document.querySelector("#clearSyncFile").addEventListener("click", () => {
    clearSyncHandle().then(() => setSyncStatus("已解除 JSON 綁定。"));
  });

  getSyncHandle()
    .then((handle) => setSyncStatus(handle ? "已綁定固定 JSON，資料變更時會自動同步。" : "尚未綁定固定 JSON 檔。"))
    .catch(() => setSyncStatus("無法讀取同步狀態。"));
}

function addFocusItem(flowerName, reason = "", match = "", source = "") {
  const flower = findFlower(flowerName);
  if (!flower) return;

  const items = readList(focusStorageKey);
  const existing = items.find((item) => item.flower === flowerName);
  if (existing) {
    existing.reason = reason || existing.reason;
    existing.match = match || existing.match;
    existing.source = source || existing.source;
    existing.updatedAt = Date.now();
    saveList(focusStorageKey, items);
    renderFocusList();
    return;
  }

  items.unshift({
    id: String(Date.now()),
    flower: flowerName,
    reason: reason.trim(),
    match,
    source,
    createdAt: Date.now()
  });
  saveList(focusStorageKey, items);
  renderFocusList();
}

function initHomePage() {
  renderNav("巴赫花精整理筆記.html");
  const form = document.querySelector("#focusForm");
  const select = document.querySelector("#focusFlower");
  const reason = document.querySelector("#focusReason");
  const list = document.querySelector("#focusList");
  const sort = document.querySelector("#focusSort");

  if (select) select.insertAdjacentHTML("beforeend", flowerOptions());
  if (sort) sort.addEventListener("change", renderFocusList);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addFocusItem(select.value, reason.value, "3", "首頁重點");
      form.reset();
    });
  }
  if (!list) {
    renderFocusList();
    return;
  }
  list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-focus]");
    if (!deleteButton) return;
    saveList(focusStorageKey, readList(focusStorageKey).filter((item) => item.id !== deleteButton.dataset.deleteFocus));
    renderFocusList();
  });
  renderFocusList();
}

function initFlowersPage() {
  renderNav("flowers.html");
  const cards = document.querySelector("#flowerCards");
  const search = document.querySelector("#searchInput");
  const category = document.querySelector("#categoryFilter");
  const count = document.querySelector("#resultCount");
  const focusDialog = document.querySelector("#focusDialog");
  const focusDialogForm = document.querySelector("#focusDialogForm");
  const focusDialogFlower = document.querySelector("#focusDialogFlower");
  const focusDialogNote = document.querySelector("#focusDialogNote");
  const focusDialogMatch = document.querySelector("#focusDialogMatch");
  const focusDialogMatchValue = document.querySelector("#focusDialogMatchValue");
  const closeFocusDialog = document.querySelector("#closeFocusDialog");
  const detailDialog = document.querySelector("#flowerDetailDialog");
  const detailContent = document.querySelector("#flowerDetailContent");
  const closeDetailDialog = document.querySelector("#closeFlowerDetailDialog");

  function render() {
    const query = search.value.trim().toLowerCase();
    const selectedCategory = category.value;
    const focusedFlowers = focusFlowerNames();
    const filtered = flowers.filter((flower) => {
      const haystack = `${flower.no} ${flower.name} ${flower.english} ${flower.category} ${flower.negative} ${flower.positive}`.toLowerCase();
      return (!query || haystack.includes(query)) && (!selectedCategory || flower.category === selectedCategory);
    });

    count.textContent = `顯示 ${filtered.length} / ${flowers.length} 朵花精`;
    cards.innerHTML = filtered.map((flower) => {
      const isFocused = focusedFlowers.has(flower.name);
      return `
      <article class="flower-card ${isFocused ? "is-focused" : ""}">
        <img class="flower-image" src="${escapeHTML(flower.image)}" alt="${escapeHTML(flower.imageAlt)}" loading="lazy">
        <h3><span>${flower.no}. ${flower.name}</span><span class="english">${flower.english}</span></h3>
        <div class="flower-meta">
          <span class="tag">${flower.category}</span>
          ${isFocused ? '<span class="focus-badge">已加入個人紀錄</span>' : ""}
        </div>
        <p class="flower-summary">${escapeHTML(flower.negative)}</p>
        <div class="card-actions">
          <button class="small-button" type="button" data-open-flower-detail="${escapeHTML(flower.name)}">查看詳情</button>
          <button class="small-button" type="button" data-add-focus="${escapeHTML(flower.name)}">${isFocused ? "更新個人紀錄" : "加入個人紀錄"}</button>
        </div>
      </article>
    `;
    }).join("");
  }

  function openFlowerDetail(flowerName) {
    const flower = findFlower(flowerName);
    if (!flower || !detailDialog || !detailContent) return;

    const trackRoles = flowerTrackRoles(flower.name);
    const reactionItems = flowerReactionItems(flower.name);
    const reactionText = reactionItems.length
      ? compactReactionLabels(reactionItems)
      : "尚未整理到身體反應區資料，或此頁未載入反應區資料。";

    detailContent.innerHTML = `
      <div class="flower-detail-header">
        <img class="flower-detail-image" src="${escapeHTML(flower.image)}" alt="${escapeHTML(flower.imageAlt)}" loading="lazy">
        <div>
          <p class="eyebrow">${escapeHTML(flower.category)}</p>
          <h3>${flower.no}. ${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
          <p>${escapeHTML(flower.negative)}</p>
        </div>
      </div>
      <dl class="detail-list">
        <div><dt>所在分類</dt><dd>${escapeHTML(flower.category)}</dd></div>
        <div><dt>十二軌道</dt><dd>${trackRoles.length ? trackRoles.map(escapeHTML).join("<br>") : "不在目前整理的十二軌道表中，可能屬於外在或基礎花精脈絡。"}</dd></div>
        <div><dt>身體反應區</dt><dd>${escapeHTML(reactionText)}</dd></div>
        <div><dt>特質 / 症狀</dt><dd>${escapeHTML(flower.negative)}</dd></div>
        <div><dt>正面方向</dt><dd>${escapeHTML(flower.positive)}</dd></div>
        <div><dt>使用後觀察</dt><dd>觀察情緒強度、觸發情境、身體反應與是否更接近其他花精。</dd></div>
      </dl>
      <div class="record-actions">
        <button class="button" type="button" data-add-focus="${escapeHTML(flower.name)}">加入或更新個人紀錄</button>
        <a class="small-button" href="body-map.html">查看身體地圖</a>
      </div>
    `;
    detailDialog.hidden = false;
    closeDetailDialog?.focus();
  }

  function openFocusDialog(flowerName) {
    const existing = readList(focusStorageKey).find((item) => item.flower === flowerName);
    focusDialogFlower.value = flowerName;
    focusDialogNote.value = existing?.reason || "";
    focusDialogMatch.value = existing?.match || "3";
    focusDialogMatchValue.textContent = focusDialogMatch.value;
    focusDialog.hidden = false;
    focusDialogNote.focus();
  }

  function hideFocusDialog() {
    focusDialog.hidden = true;
    focusDialogForm.reset();
  }

  search.addEventListener("input", render);
  category.addEventListener("change", render);
  cards.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-open-flower-detail]");
    if (detailButton) {
      openFlowerDetail(detailButton.dataset.openFlowerDetail);
      return;
    }
    const button = event.target.closest("[data-add-focus]");
    if (button) openFocusDialog(button.dataset.addFocus);
  });
  focusDialogMatch.addEventListener("input", () => {
    focusDialogMatchValue.textContent = focusDialogMatch.value;
  });
  closeFocusDialog.addEventListener("click", hideFocusDialog);
  closeDetailDialog?.addEventListener("click", () => {
    detailDialog.hidden = true;
  });
  detailDialog?.addEventListener("click", (event) => {
    if (event.target === detailDialog) detailDialog.hidden = true;
    const addButton = event.target.closest("[data-add-focus]");
    if (addButton) {
      detailDialog.hidden = true;
      openFocusDialog(addButton.dataset.addFocus);
    }
  });
  focusDialog.addEventListener("click", (event) => {
    if (event.target === focusDialog) hideFocusDialog();
  });
  focusDialogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addFocusItem(focusDialogFlower.value, focusDialogNote.value, focusDialogMatch.value, "花精大全");
    hideFocusDialog();
    render();
  });
  render();
}

function initTracksPage() {
  renderNav("tracks.html");
  const tableBody = document.querySelector("#trackTableBody");
  const status = document.querySelector("#trackStatus");
  if (!tableBody) return;

  tableBody.innerHTML = trackRows.map((track) => `
    <tr>
      <td>${track.no}</td>
      <td>${trackButton(track.communication, "溝通花精")}</td>
      <td>${trackButton(track.compensation, "補償花精")}</td>
      <td>${trackButton(track.decompensation, "失調花精")}</td>
      <td>${escapeHTML(track.theme)}</td>
    </tr>
  `).join("");

  function trackButton(flowerName, role) {
    return `
      <div class="track-flower-cell">
        <span>${escapeHTML(flowerName)}</span>
        <button class="small-button" type="button" data-add-track-focus="${escapeHTML(flowerName)}" data-track-role="${escapeHTML(role)}">加入重點</button>
      </div>
    `;
  }

  tableBody.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-add-track-focus]");
    if (!button) return;
    const role = button.dataset.trackRole;
    const flowerName = button.dataset.addTrackFocus;
    if (!await promptFocusItem(flowerName, `十二軌道與分層｜${role}`)) return;
    button.textContent = "已加入";
    button.disabled = true;
    if (status) status.textContent = `已將「${flowerName}」加入個人重點。`;
  });
}

function initBodyMapPage() {
  renderNav("body-map.html");
  const data = typeof BODY_REACTION_DATA !== "undefined" ? BODY_REACTION_DATA : { flowers: [], overview: [] };
  const searchInput = document.querySelector("#bodyReactionSearch");
  const stats = document.querySelector("#bodyReactionStats");
  const figure = document.querySelector(".body-figure");
  const figureImage = document.querySelector("#bodyFigureImage");
  const figureCaption = document.querySelector("#bodyFigureCaption");
  const hotspotLayer = document.querySelector("#bodyHotspots");
  const bodyMapPanel = document.querySelector("#bodyMapPanel");
  const panelTitle = document.querySelector("#bodyMapTitle");
  const panelDescription = document.querySelector("#bodyMapDescription");
  const resultList = document.querySelector("#bodyReactionResults");
  const pointEditMode = new URLSearchParams(window.location.search).has("editPoints");
  const modeButtons = document.querySelectorAll("[data-reaction-mode]");
  const genderButtons = document.querySelectorAll("[data-reaction-gender]");
  const viewButtons = document.querySelectorAll("[data-body-view]");
  const bodyGenderButtons = document.querySelectorAll("[data-body-gender]");

  let activeMode = "all";
  let activeGender = "all";
  let activeBodyGender = "female";
  let activeView = "front";
  let selectedPointId = "";
  let activeRegionKey = "";
  let activeDetailKey = "";

  const overviewTitleAliases = {
    "頭部和右側胸肩": "右頸部",
    "頭部和左側胸肩": "左頸部",
    "右半側": "右側臉",
    "左半側": "左側臉"
  };

  const overviewSourceTitleAliases = Object.fromEntries(
    Object.entries(overviewTitleAliases).map(([sourceTitle, displayTitle]) => [displayTitle, sourceTitle])
  );

  function overviewDisplayTitle(title) {
    return overviewTitleAliases[title] || title;
  }

  function overviewSourceTitle(title) {
    return overviewSourceTitleAliases[title] || title;
  }

  const entries = data.flowers.flatMap((flower) => (
    flower.items.map((rawItem, index) => {
      const item = normalizeReactionItem(rawItem);
      return {
        id: `${flower.no}-${index}`,
        flowerNo: flower.no,
        flowerName: flower.name,
        title: item.title,
        path: item.path,
        isGenital: item.isGenital,
        gender: item.gender,
        side: item.side
      };
    })
  ));

  function peoDetailPathForOverview(item) {
    const base = "peo/去數字之身體反應區";
    const front = `${base}/正面`;
    const back = `${base}/背面`;
    const title = item.title;
    if (item.side === "front") {
      const frontMap = {
        "女生殖器": `${front}/生殖器區/女生殖器.png`,
        "生殖器（男）": `${front}/生殖器區/男生殖器右側.png`,
        "男下生殖器": `${front}/生殖器區/男生殖器下側.png`,
        "右手心": `${front}/右手心.png`,
        "左手心": `${front}/左手心.png`,
        "右手臂（前方）": `${front}/右手臂正面.png`,
        "左手臂（前方）": `${front}/左手臂正面.png`,
        "右半側": `${front}/右側臉.png`,
        "左半側": `${front}/左側臉.png`,
        "右腿（內、外側）": `${front}/右腿內側.png`,
        "左腿（內、外側）": `${front}/左腿內側.png`,
        "正臉": `${front}/正臉.png`,
        "頭頂": `${front}/頭頂.png`,
        "前頸": `${front}/前頸.png`,
        "腿部（正面）": `${front}/腿部（正面）.png`,
        "頭部": `${front}/正臉.png`,
        "頭部和右側胸肩": `${front}/右頸部.png`,
        "頭部和左側胸肩": `${front}/左頸部.png`,
        "右頸部": `${front}/右頸部.png`,
        "左頸部": `${front}/左頸部.png`,
        "軀幹（正面）": `${front}/身體正面.png`
      };
      return frontMap[title] || item.path.replace("花精身體反應區/地圖縱覽", `${base}/正面`);
    }
    const backMap = {
      "右手背": `${back}/右手背.png`,
      "左手背": `${back}/左手背.png`,
      "右手臂（後方）": `${back}/右手臂（後方）.png`,
      "左手臂（後方）": `${back}/左手臂（後方）.png`,
      "右腳掌": `${back}/右腳掌.png`,
      "左腳掌": `${back}/左腳掌.png`,
      "男下生殖器": `${front}/生殖器區/男生殖器下側.png`,
      "後腦": `${back}/後腦.png`,
      "腿部（背面）": `${back}/腿部（背面）.png`,
      "頭部和右側胸肩": `${back}/後腦.png`,
      "頭部和左側胸肩": `${back}/後腦.png`,
      "軀幹（右側）": `${front}/軀幹（右側邊）.png`,
      "軀幹（左側）": `${front}/軀幹（左側邊）.png`,
      "軀幹（背面）": `${back}/軀幹（背面）.png`
    };
    return backMap[title] || item.path.replace("花精身體反應區/地圖縱覽", `${base}/背面`);
  }

  const overviewEntries = data.overview.map((item, index) => ({
    id: `overview-${index}`,
    flowerNo: "總覽",
    flowerName: "部位總覽",
    title: overviewDisplayTitle(item.title),
    sourceTitle: item.title,
    path: item.path,
    transparentPath: item.transparentPath || item.path.replace("花精身體反應區/地圖縱覽", "assets/body-parts-transparent"),
    detailPath: item.detailPath || peoDetailPathForOverview(item),
    isGenital: item.isGenital,
    gender: item.gender,
    side: item.side,
    group: item.group,
    isOverview: true
  }));

  function officialDetailViewsForOverview(overview) {
    const key = overviewPointKey(overview);
    const front = "peo/去數字之身體反應區/正面";
    const back = "peo/去數字之身體反應區/背面";
    const splitViews = {
      "正面/右腿（內、外側）": [
        { key: "正面/右腿外側", title: "右腿外側", path: `${front}/右腿外側.png` },
        { key: "正面/右腿內側", title: "右腿內側", path: `${front}/右腿內側.png` }
      ],
      "正面/左腿（內、外側）": [
        { key: "正面/左腿內側", title: "左腿內側", path: `${front}/左腿內側.png` },
        { key: "正面/左腿外側", title: "左腿外側", path: `${front}/左腿外側.png` }
      ],
      "正面/生殖器（男）": [
        { key: "正面/男生殖器右側", title: "男生殖器右側", path: `${front}/生殖器區/男生殖器右側.png` },
        { key: "正面/男生殖器左側", title: "男生殖器左側", path: `${front}/生殖器區/男生殖器左側.png` }
      ],
      "正面/男下生殖器": [
        { key: "正面/男下生殖器", title: "男下生殖器", path: `${front}/生殖器區/男生殖器下側.png` }
      ],
      "正面/頭部和右側胸肩": [
        { key: "正面/右頸部", title: "右頸部", path: `${front}/右頸部.png` }
      ],
      "正面/頭部和左側胸肩": [
        { key: "正面/左頸部", title: "左頸部", path: `${front}/左頸部.png` }
      ],
      "正面/右頸部": [
        { key: "正面/右頸部", title: "右頸部", path: `${front}/右頸部.png` }
      ],
      "正面/左頸部": [
        { key: "正面/左頸部", title: "左頸部", path: `${front}/左頸部.png` }
      ],
      "背面/軀幹（右側）": [
        { key: "背面/軀幹（右側）", title: "軀幹右側", path: `${front}/軀幹（右側邊）.png` }
      ],
      "背面/軀幹（左側）": [
        { key: "背面/軀幹（左側）", title: "軀幹左側", path: `${front}/軀幹（左側邊）.png` }
      ]
    };
    return splitViews[key] || [{ key, title: overview.title, path: overview.detailPath || overview.path }];
  }

  function officialDetailKeyForRegion(overview, label) {
    const views = officialDetailViewsForOverview(overview);
    if (views.length === 1) return views[0].key;
    const matched = views.find((view) => label && label.includes(view.title));
    return (matched || views[0]).key;
  }

  function activeOfficialDetailView(overview) {
    const views = officialDetailViewsForOverview(overview);
    return views.find((view) => view.key === activeDetailKey) || views[0];
  }

  const bodyMapPointAlignment = {
  "正面/女生殖器": {
    "sourceBox": [
      12.3835,
      6.7797,
      89.2144,
      96.9868
    ],
    "targetBox": [
      4.8828,
      12.3047,
      95.6055,
      87.6953
    ]
  },
  "正面/右手心": {
    "sourceBox": [
      7.6531,
      5.5292,
      95.9184,
      98.2622
    ],
    "targetBox": [
      23.4375,
      4.0039,
      78.8086,
      96.582
    ]
  },
  "正面/右手臂（前方）": {
    "sourceBox": [
      10.356,
      10.8491,
      96.9256,
      96.4151
    ],
    "targetBox": [
      22.3633,
      3.3203,
      78.2227,
      98.0469
    ]
  },
  "正面/右半側": {
    "sourceBox": [
      13.245,
      2.974,
      95.8057,
      95.7249
    ],
    "targetBox": [
      19.5,
      1.3333,
      83.8333,
      97.7143
    ]
  },
  "正面/右腿（內、外側）": {
    "sourceBox": [
      4.058,
      1.3233,
      96.5217,
      98.2987
    ],
    "targetBox": [
      26.1667,
      3.2381,
      73.8333,
      96.6667
    ]
  },
  "正面/左手心": {
    "sourceBox": [
      4.7859,
      2.8107,
      93.199,
      98.9645
    ],
    "targetBox": [
      21.875,
      6.4453,
      77.0508,
      97.8516
    ]
  },
  "正面/左手臂（前方）": {
    "sourceBox": [
      5.0162,
      10.0943,
      93.5275,
      97.0755
    ],
    "targetBox": [
      22.3633,
      3.3203,
      78.0273,
      96.7773
    ]
  },
  "正面/左半側": {
    "sourceBox": [
      5.3483,
      2.4345,
      98.2587,
      97.6592
    ],
    "targetBox": [
      19.3333,
      1.3333,
      82.1667,
      98.381
    ]
  },
  "正面/左腿（內、外側）": {
    "sourceBox": [
      6.6667,
      1.2287,
      93.913,
      98.3932
    ],
    "targetBox": [
      27.0,
      2.9524,
      73.1667,
      98.0
    ]
  },
  "正面/正臉": {
    "sourceBox": [
      9.713,
      2.974,
      99.117,
      98.0483
    ],
    "targetBox": [
      15.918,
      7.7148,
      83.7891,
      93.3594
    ]
  },
  "正面/頭頂": {
    "sourceBox": [
      2.3179,
      1.487,
      98.4547,
      99.0706
    ],
    "targetBox": [
      11.4258,
      4.5898,
      87.5977,
      95.8984
    ]
  },
  "正面/生殖器（男）": {
    "sourceBox": [
      8.6436,
      1.6068,
      93.3511,
      98.3932
    ],
    "targetBox": [
      7.1289,
      10.5469,
      93.2617,
      90.0391
    ]
  },
  "正面/男下生殖器": {
    "sourceBox": [
      3.0585,
      2.8791,
      98.5372,
      97.1209
    ],
    "targetBox": [
      5.2734,
      18.75,
      96.2891,
      81.0547
    ]
  },
  "正面/前頸": {
    "sourceBox": [
      3.163,
      2.2472,
      96.1071,
      98.1273
    ],
    "targetBox": [
      18.3594,
      8.1055,
      81.1523,
      92.1875
    ]
  },
  "正面/腿部（正面）": {
    "sourceBox": [
      7.4786,
      1.8904,
      96.1538,
      98.8658
    ],
    "targetBox": [
      21.1667,
      2.2857,
      79.3333,
      98.0
    ]
  },
  "正面/頭部和右側胸肩": {
    "sourceBox": [
      16.91,
      2.0599,
      79.0754,
      97.4719
    ],
    "targetBox": [
      16.4062,
      5.1758,
      82.8125,
      95.0195
    ]
  },
  "正面/頭部和左側胸肩": {
    "sourceBox": [
      4.5918,
      2.1536,
      95.9184,
      98.221
    ],
    "targetBox": [
      16.3086,
      3.9062,
      83.8867,
      95.3125
    ]
  },
  "正面/軀幹（正面）": {
    "sourceBox": [
      4.2453,
      1.1134,
      98.1132,
      98.1781
    ],
    "targetBox": [
      20.0195,
      3.125,
      80.5664,
      96.0938
    ]
  },
  "背面/右手背": {
    "sourceBox": [
      5.598,
      0.6645,
      95.6743,
      98.1728
    ],
    "targetBox": [
      21.6797,
      3.3203,
      79.1016,
      98.3398
    ]
  },
  "背面/右手臂（後方）": {
    "sourceBox": [
      3.8835,
      7.2642,
      96.9256,
      98.2075
    ],
    "targetBox": [
      21.3867,
      1.5625,
      79.0039,
      98.0469
    ]
  },
  "背面/右腳掌": {
    "sourceBox": [
      6.681,
      1.5094,
      95.0431,
      98.4906
    ],
    "targetBox": [
      32.6172,
      5.2734,
      67.0898,
      94.3359
    ]
  },
  "背面/左手背": {
    "sourceBox": [
      8.5213,
      2.1311,
      96.4912,
      98.0328
    ],
    "targetBox": [
      20.8008,
      2.0508,
      78.7109,
      98.3398
    ]
  },
  "背面/左手臂（後方）": {
    "sourceBox": [
      2.1036,
      11.2264,
      91.5858,
      98.3962
    ],
    "targetBox": [
      22.168,
      2.5391,
      79.1016,
      97.8516
    ]
  },
  "背面/左腳掌": {
    "sourceBox": [
      7.5431,
      1.4151,
      92.8879,
      98.2075
    ],
    "targetBox": [
      32.9102,
      5.2734,
      67.3828,
      94.3359
    ]
  },
  "背面/後腦": {
    "sourceBox": [
      0.7299,
      2.2472,
      99.1484,
      98.0337
    ],
    "targetBox": [
      14.1602,
      4.9805,
      85.7422,
      95.4102
    ]
  },
  "背面/腿部（背面）": {
    "sourceBox": [
      8.3333,
      1.8904,
      96.1538,
      98.6767
    ],
    "targetBox": [
      21.0,
      1.7143,
      79.8333,
      98.5714
    ]
  },
  "背面/軀幹（右側）": {
    "sourceBox": [
      10.7296,
      1.4178,
      93.3476,
      97.5425
    ],
    "targetBox": [
      19.8242,
      3.2227,
      80.1758,
      98.0469
    ]
  },
  "背面/軀幹（左側）": {
    "sourceBox": [
      9.2275,
      1.4178,
      90.3433,
      98.2987
    ],
    "targetBox": [
      19.8242,
      3.2227,
      80.1758,
      98.0469
    ]
  },
  "背面/軀幹（背面）": {
    "sourceBox": [
      4.4669,
      1.3233,
      95.9654,
      95.9357
    ],
    "targetBox": [
      19.8242,
      3.2227,
      80.1758,
      98.0469
    ]
  }
};

  const overviewCropBoxes = {
    front: {
      "頭部": [34, 0, 66, 18],
      "正臉": [36, 1, 64, 17],
      "前頸": [38, 8, 62, 22],
      "軀幹（正面）": [24, 13, 76, 58],
      "右半側": [7, 0, 53, 98],
      "左半側": [47, 0, 93, 98],
      "右手臂（前方）": [8, 17, 38, 62],
      "左手臂（前方）": [62, 17, 92, 62],
      "右手心": [0, 42, 30, 66],
      "左手心": [70, 42, 100, 66],
      "右腿（內、外側）": [29, 48, 53, 98],
      "左腿（內、外側）": [47, 48, 71, 98],
      "腿部（正面）": [28, 47, 72, 99],
      "右腳掌": [27, 86, 51, 100],
      "左腳掌": [49, 86, 73, 100],
      "女生殖器": [36, 43, 64, 62],
      "生殖器（男）": [36, 43, 64, 62]
    },
    back: {
      "後腦": [34, 0, 66, 18],
      "頭部和右側胸肩": [42, 0, 78, 31],
      "頭部和左側胸肩": [22, 0, 58, 31],
      "軀幹（背面）": [24, 13, 76, 58],
      "軀幹（右側）": [48, 13, 82, 58],
      "軀幹（左側）": [18, 13, 52, 58],
      "右手臂（後方）": [62, 17, 92, 62],
      "左手臂（後方）": [8, 17, 38, 62],
      "右手背": [70, 42, 100, 66],
      "左手背": [0, 42, 30, 66],
      "腿部（背面）": [28, 47, 72, 99],
      "男下生殖器": [36, 43, 64, 64]
    }
  };

  function genderLabel(gender) {
    if (gender === "female") return "女";
    if (gender === "male") return "男";
    return "男女";
  }

  function sideLabel(side) {
    if (side === "front") return "前側";
    if (side === "back") return "後側";
    return "未標";
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function hasAny(value, words) {
    return words.some((word) => String(value || "").includes(word));
  }

  function effectiveGender() {
    return activeGender;
  }

  function matchesQuery(values, query) {
    if (!query) return true;
    return values.some((value) => normalize(value).includes(query));
  }

  function matchesGender(item) {
    const gender = effectiveGender();
    if (gender === "all") return true;
    return item.gender === "all" || item.gender === gender;
  }

  function splitPartLabels(entry) {
    if (entry.isGenital || hasAny(entry.title, ["生殖器", "陰蒂", "陰唇", "陰莖", "龜頭", "前列腺"])) {
      return ["生殖器"];
    }
    const compact = entry.title.replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "");
    const upperLowerComma = compact.match(/^上、下(.+)$/);
    if (upperLowerComma) return [`上${upperLowerComma[1]}`, `下${upperLowerComma[1]}`];
    const upperLower = compact.match(/^上下(.+)$/);
    if (upperLower) return [`上${upperLower[1]}`, `下${upperLower[1]}`];
    const parts = compact.split(/[，,/]/).map((part) => part.trim()).filter(Boolean);
    if (parts.length > 1) return parts;
    const softParts = compact.split("、").map((part) => part.trim()).filter(Boolean);
    if (softParts.length > 1 && softParts[0].startsWith("頭部")) {
      return softParts.map((part, index) => (index > 0 && /^[左右前後上下內外]+側$/.test(part) ? `頭部${part}` : part));
    }
    if (softParts.length > 1 && softParts.every((part) => part.length >= 2)) return softParts;
    return [compact || entry.title];
  }

  function viewForPart(label, entry) {
    if (entry.isGenital) return "front";
    if (entry.side === "front" || entry.side === "back") return entry.side;
    if (hasAny(label, ["後", "背", "臀", "尾骨", "腳跟", "後腦", "腳背", "手背"])) return "back";
    return "front";
  }

  function sideName(label) {
    if (label.includes("右")) return "右";
    if (label.includes("左")) return "左";
    return "";
  }

  function sideZoneX(label, view, frontRight = 42, frontLeft = 58) {
    const right = view === "back" ? frontLeft : frontRight;
    const left = view === "back" ? frontRight : frontLeft;
    if (label.includes("右")) return right;
    if (label.includes("左")) return left;
    return 50;
  }

  function visualSideX(label, view, rightX = 40, leftX = 60, centerX = 50) {
    if (label.includes("右")) return view === "back" ? leftX : rightX;
    if (label.includes("左")) return view === "back" ? rightX : leftX;
    return centerX;
  }

  function isTopHeadLabel(label) {
    return hasAny(label, ["頭頂", "頭顱", "頭部右側", "頭部左側", "頭部前側", "頭右側", "頭左側"]);
  }

  function overviewByTitle(title) {
    return overviewEntries.find((entry) => entry.title === title || entry.sourceTitle === title) || null;
  }

  function overviewByAny(titles) {
    return titles.map((title) => overviewByTitle(title)).find(Boolean) || null;
  }

  function sideFromRegionLabel(label) {
    if (label.includes("右")) return "右";
    if (label.includes("左")) return "左";
    return "";
  }

  function overviewForRegionKey(regionKey) {
    if (!regionKey) return null;
    if (regionKey.startsWith("overview|")) {
      const overviewId = regionKey.slice("overview|".length);
      return overviewEntries.find((entry) => entry.id === overviewId) || null;
    }
    const [view, ...labelParts] = regionKey.split("|");
    const label = labelParts.join("|");
    const side = sideFromRegionLabel(label);
    const isBack = view === "back";
    if (label.includes("生殖器")) {
      if (effectiveGender() === "male") return overviewByAny(isBack ? ["男下生殖器", "生殖器（男）"] : ["生殖器（男）", "男下生殖器"]);
      return overviewByAny(["女生殖器", "生殖器"]);
    }
    if (label.includes("臉")) return overviewByTitle("正臉");
    if (isTopHeadLabel(label)) return overviewByTitle("頭頂") || overviewByTitle("頭部");
    if (label.includes("頭")) return overviewByTitle(isBack || label.includes("後") ? "後腦" : "頭部");
    if (label.includes("後頸")) return overviewByTitle("後腦");
    if (label.includes("頸") && side) return overviewByTitle(`頭部和${side}側胸肩`) || overviewByTitle("前頸");
    if (label.includes("頸")) return overviewByTitle("前頸");
    if (label.includes("手部")) return overviewByTitle(`${side || "右"}手${isBack ? "背" : "心"}`);
    if (label.includes("上臂") || label.includes("前臂")) return overviewByTitle(`${side || "右"}手臂（${isBack ? "後方" : "前方"}）`);
    if (label.includes("足")) return overviewByTitle(`${side || "右"}腳掌`);
    if (label.includes("大腿") || label.includes("膝") || label.includes("小腿")) {
      return side ? overviewByTitle(`${side}腿（內、外側）`) : overviewByTitle(isBack ? "腿部（背面）" : "腿部（正面）");
    }
    if (label.includes("肩") && side) return overviewByTitle(`頭部和${side}側胸肩`);
    if (label.includes("側身") && side) return overviewByTitle(`軀幹（${side}側）`);
    if (label.includes("背") || label.includes("腰") || label.includes("臀")) return overviewByTitle("軀幹（背面）");
    if (label.includes("胸") || label.includes("腹") || label.includes("鼠蹊")) return overviewByTitle("軀幹（正面）");
    if (side) return overviewByTitle(`${side}半側`);
    return null;
  }

  const overviewReferencePoints = {
    front: {
      "頭頂": { x: 50.11, y: 1.64 },
      "正臉": { x: 50.2, y: 8.04 },
      "頭部和右側胸肩": { x: 42.12, y: 16.07 },
      "頭部和左側胸肩": { x: 58.65, y: 16.0 },
      "右頸部": { x: 42.12, y: 16.07 },
      "左頸部": { x: 58.65, y: 16.0 },
      "前頸": { x: 50.38, y: 16.51 },
      "右手臂（前方）": { x: 29.52, y: 32.73 },
      "左手臂（前方）": { x: 71.99, y: 33.46 },
      "右半側": { x: 43.4, y: 8.37 },
      "左半側": { x: 58.07, y: 8.29 },
      "右側臉": { x: 43.4, y: 8.37 },
      "左側臉": { x: 58.07, y: 8.29 },
      "軀幹（正面）": { x: 50.56, y: 34.12 },
      "右手心": { x: 22.86, y: 50.51 },
      "左手心": { x: 78.63, y: 50.29 },
      "女生殖器": { x: 50.08, y: 50.79 },
      "生殖器（男）": { x: 50.08, y: 50.79 },
      "男下生殖器": { x: 50.08, y: 50.79 },
      "右腿（內、外側）": [
        { label: "右腿外側", x: 33.12, y: 57.22 },
        { label: "右腿內側", x: 47.92, y: 57.32 }
      ],
      "左腿（內、外側）": [
        { label: "左腿內側", x: 52.34, y: 57.45 },
        { label: "左腿外側", x: 66.76, y: 57.63 }
      ],
      "腿部（正面）": [
        { label: "腿部正面", x: 39.84, y: 65.3 },
        { label: "腿部正面", x: 60.47, y: 65.53 }
      ]
    },
    back: {
      "後腦": { x: 50.9, y: 7.36 },
      "軀幹（背面）": { x: 50.59, y: 28.39 },
      "左手臂（後方）": { x: 28.59, y: 37.3 },
      "右手臂（後方）": { x: 73.82, y: 37.47 },
      "左手背": { x: 22.58, y: 51.49 },
      "右手背": { x: 78.11, y: 50.79 },
      "腿部（背面）": [
        { label: "腿部背面", x: 40.13, y: 65.26 },
        { label: "腿部背面", x: 60.89, y: 65.57 }
      ],
      "左腳掌": { x: 33.98, y: 98.4 },
      "右腳掌": { x: 67.04, y: 98.57 }
    }
  };

  function overviewBodyPoint(entry) {
    const title = entry.title;
    const isBack = entry.side === "back";
    const referencePoint = overviewReferencePoints[entry.side]?.[title];
    if (referencePoint) return referencePoint;
    let x = 50;
    let y = 50;
    if (title.includes("正臉")) { x = 50; y = 10; }
    else if (title === "頭頂") { x = 50; y = 3; }
    else if (title === "頭部") { x = 50; y = 5; }
    else if (title.includes("後腦")) { x = 50; y = 8; }
    else if (title.includes("前頸")) { x = 50; y = 15; }
    else if (title.includes("右頸部")) { x = 42; y = 16; }
    else if (title.includes("左頸部")) { x = 59; y = 16; }
    else if (title.includes("頭部和右側胸肩")) { x = 58; y = 20; }
    else if (title.includes("頭部和左側胸肩")) { x = 42; y = 20; }
    else if (title.includes("軀幹（正面）")) { x = 50; y = 39; }
    else if (title.includes("軀幹（背面）")) { x = 50; y = 39; }
    else if (title.includes("軀幹（右側）")) { x = 58; y = 42; }
    else if (title.includes("軀幹（左側）")) { x = 42; y = 42; }
    else if (title.includes("右半側")) { x = 33; y = 43; }
    else if (title.includes("左半側")) { x = 67; y = 43; }
    else if (title.includes("右手臂")) { x = isBack ? 77 : 23; y = 42; }
    else if (title.includes("左手臂")) { x = isBack ? 23 : 77; y = 42; }
    else if (title.includes("右手")) { x = isBack ? 84 : 16; y = 56; }
    else if (title.includes("左手")) { x = isBack ? 16 : 84; y = 56; }
    else if (title.includes("右腿")) { x = isBack ? 59 : 41; y = 72; }
    else if (title.includes("左腿")) { x = isBack ? 41 : 59; y = 72; }
    else if (title.includes("腿部")) { x = 50; y = 76; }
    else if (title.includes("右腳")) { x = isBack ? 60 : 40; y = 96; }
    else if (title.includes("左腳")) { x = isBack ? 40 : 60; y = 96; }
    else if (title.includes("生殖器")) { x = 50; y = title.includes("男下") ? 58 : 52; }
    return { x, y };
  }

  function overviewBodyPoints(entry) {
    const referencePoint = overviewReferencePoints[entry.side]?.[entry.title];
    if (Array.isArray(referencePoint)) return referencePoint;
    return [overviewBodyPoint(entry)];
  }

  function overviewCropBox(overview) {
    const sideBoxes = overviewCropBoxes[overview.side] || {};
    return sideBoxes[overview.title] || [0, 0, 100, 100];
  }

  function pointInOverviewCrop(point, overview) {
    const [left, top, right, bottom] = overviewCropBox(overview);
    const x = ((point.x - left) / (right - left)) * 100;
    const y = ((point.y - top) / (bottom - top)) * 100;
    return {
      x: Math.max(4, Math.min(96, x)),
      y: Math.max(4, Math.min(96, y))
    };
  }

  function overviewPointKey(overview) {
    const group = overview.group || (overview.side === "back" ? "背面" : "正面");
    return `${group}/${overview.title}`;
  }

  function overviewSourcePointKey(overview) {
    const group = overview.group || (overview.side === "back" ? "背面" : "正面");
    return `${group}/${overview.sourceTitle || overviewSourceTitle(overview.title)}`;
  }

  function detectedNumberPointsForOverview(overview, flowerNo) {
    const pointData = typeof BODY_REACTION_POINTS !== "undefined" ? BODY_REACTION_POINTS : {};
    const points = pointData[overviewPointKey(overview)] || pointData[overviewSourcePointKey(overview)] || [];
    const matched = points.filter((point) => String(point.number) === String(flowerNo));
    const reliable = matched.filter((point) => Number(point.conf || 0) >= 35);
    return dedupeDetectedPoints(reliable.length ? reliable : matched);
  }

  function detectedPointsForOverview(overview) {
    const pointData = typeof BODY_REACTION_POINTS !== "undefined" ? BODY_REACTION_POINTS : {};
    return dedupeDetectedPoints(pointData[overviewPointKey(overview)] || pointData[overviewSourcePointKey(overview)] || []);
  }

  function overridePointsForOverview(overview, detailKey = "") {
    const officialOverrideData = typeof BODY_REACTION_POINT_OFFICIAL_OVERRIDES !== "undefined" ? BODY_REACTION_POINT_OFFICIAL_OVERRIDES : {};
    const officialPoints = officialOverrideData[detailKey] || officialOverrideData[overviewPointKey(overview)] || officialOverrideData[overviewSourcePointKey(overview)] || [];
    if (officialPoints.length) return officialPoints.map((point) => ({ ...point, coordinateSpace: "official" }));
    const overrideData = typeof BODY_REACTION_POINT_OVERRIDES !== "undefined" ? BODY_REACTION_POINT_OVERRIDES : {};
    return overrideData[overviewPointKey(overview)] || overrideData[overviewSourcePointKey(overview)] || [];
  }

  function alignDetectedPointToDetailImage(overview, point) {
    const alignment = bodyMapPointAlignment[overviewPointKey(overview)] || bodyMapPointAlignment[overviewSourcePointKey(overview)];
    if (!alignment) return point;
    const [sourceLeft, sourceTop, sourceRight, sourceBottom] = alignment.sourceBox;
    const [targetLeft, targetTop, targetRight, targetBottom] = alignment.targetBox;
    const sourceWidth = sourceRight - sourceLeft;
    const sourceHeight = sourceBottom - sourceTop;
    if (!sourceWidth || !sourceHeight) return point;
    const ratioX = (Number(point.x) - sourceLeft) / sourceWidth;
    const ratioY = (Number(point.y) - sourceTop) / sourceHeight;
    return {
      ...point,
      x: targetLeft + ratioX * (targetRight - targetLeft),
      y: targetTop + ratioY * (targetBottom - targetTop)
    };
  }

  function dedupeDetectedPoints(points) {
    const unique = [];
    points
      .slice()
      .sort((a, b) => Number(b.conf || 0) - Number(a.conf || 0))
      .forEach((point) => {
        const isDuplicate = unique.some((item) => {
          const dx = Number(item.x) - Number(point.x);
          const dy = Number(item.y) - Number(point.y);
          return Math.hypot(dx, dy) < 2.2;
        });
        if (!isDuplicate) unique.push(point);
      });
    return unique.sort((a, b) => (Number(a.y) - Number(b.y)) || (Number(a.x) - Number(b.x)));
  }

  function buildOverviewPoints(filteredEntries = []) {
    return overviewEntries.filter((entry) => {
      if (!entry.isGenital) return true;
      if (activeBodyGender === "female") return entry.gender !== "male";
      if (activeBodyGender === "male") return entry.gender !== "female";
      return true;
    }).flatMap((entry) => {
      const points = overviewBodyPoints(entry);
      const matchedEntries = filteredEntries.filter((item) => !item.isOverview && overviewMatchesEntry(entry, item));
      return points.map((point, pointIndex) => ({
        id: points.length > 1 ? `${entry.id}__${pointIndex + 1}` : entry.id,
        label: point.label || entry.title,
        view: entry.side,
        x: point.x,
        y: point.y,
        mode: "region",
        regionLabel: entry.title,
        regionKey: `overview|${entry.id}`,
        detailKey: officialDetailKeyForRegion(entry, point.label || entry.title),
        overviewTitle: entry.title,
        overviewPath: entry.transparentPath || entry.path,
        tooltip: point.label || entry.title,
        entries: matchedEntries,
        parts: matchedEntries.length ? matchedEntries.map((item) => item.title) : [entry.title]
      }));
    });
  }

  function overviewForEntry(entry) {
    const labels = splitPartLabels(entry);
    const overviews = labels.map((label) => {
      const region = regionForPart(label, entry);
      return overviewForRegionKey(`${region.view}|${region.label}`);
    }).filter(Boolean);
    return overviews;
  }

  function overviewMatchesEntry(overview, entry) {
    if (!overview || !entry) return false;
    if (overview.isGenital) {
      if (!entry.isGenital) return false;
      if (overview.gender === "female" && entry.gender === "male") return false;
      if (overview.gender === "male" && entry.gender === "female") return false;
      if (overview.title === "男下生殖器") return entry.gender !== "female" && entry.side === "back";
      if (overview.title === "生殖器（男）") return entry.gender !== "female" && entry.side !== "back";
      if (overview.title === "女生殖器") return entry.gender !== "male";
      return true;
    }
    if (entry.isGenital) return false;
    return overviewForEntry(entry).some((item) => item.title === overview.title);
  }

  function regionForPart(label, entry) {
    const view = viewForPart(label, entry);
    const side = sideName(label);
    const prefix = side || "";
    if (entry.isGenital || label === "生殖器") {
      const genitalView = entry.side === "back" ? "back" : "front";
      return { label: "生殖器區", view: genitalView, x: 50, y: 52 };
    }
    if (isTopHeadLabel(label)) {
      return {
        label: `${prefix}頭頂區`,
        view: "front",
        x: sideZoneX(label, "front", 43, 57),
        y: 4
      };
    }
    if (hasAny(label, ["頭頂", "頭顱", "頭部", "頭右", "頭左", "額頭", "後腦"])) {
      return {
        label: `${prefix || (view === "back" ? "後" : "")}頭部區`,
        view,
        x: sideZoneX(label, view, 43, 57),
        y: view === "back" ? 7 : 5
      };
    }
    if (hasAny(label, ["眉", "眼", "鼻", "臉", "頰", "嘴", "下巴", "太陽穴"])) {
      return {
        label: `${prefix}臉部區`,
        view,
        x: sideZoneX(label, view, 43, 57),
        y: 10
      };
    }
    if (hasAny(label, ["頸", "脖"])) {
      return { label: `${prefix}${label.includes("後") ? "後" : ""}頸部區`, view, x: sideZoneX(label, view, 47, 53), y: 15 };
    }
    if (hasAny(label, ["手掌", "手背", "掌心", "手"]) && !hasAny(label, ["手臂", "前臂", "上臂", "下臂"])) {
      return {
        label: `${prefix}手部區`,
        view,
        x: sideZoneX(label, view, 16, 84),
        y: 56
      };
    }
    if (hasAny(label, ["前臂", "下臂"])) {
      return {
        label: `${prefix}前臂區`,
        view,
        x: sideZoneX(label, view, 24, 76),
        y: 47
      };
    }
    if (hasAny(label, ["上臂", "手臂"])) {
      return {
        label: `${prefix}上臂區`,
        view,
        x: sideZoneX(label, view, 27, 73),
        y: 34
      };
    }
    if (hasAny(label, ["肩", "鎖骨", "肩胛"])) {
      return {
        label: view === "back" ? `${prefix}肩背區` : `${prefix}肩部區`,
        view,
        x: sideZoneX(label, view, 42, 58),
        y: 21
      };
    }
    if (hasAny(label, ["胸"])) {
      return {
        label: `${prefix}胸部區`,
        view,
        x: sideZoneX(label, view, 43, 57),
        y: 27
      };
    }
    if (hasAny(label, ["上背"])) {
      return {
        label: `${prefix}上背區`,
        view,
        x: sideZoneX(label, view, 43, 57),
        y: 28
      };
    }
    if (hasAny(label, ["下背", "腰", "尾骨", "臀"])) {
      return {
        label: view === "back" ? `${prefix}下背腰臀區` : `${prefix}側腰區`,
        view,
        x: sideZoneX(label, view, 43, 57),
        y: view === "back" ? 45 : 43
      };
    }
    if (hasAny(label, ["背"])) {
      return {
        label: `${prefix}背部區`,
        view: "back",
        x: sideZoneX(label, "back", 43, 57),
        y: 36
      };
    }
    if (hasAny(label, ["側身"])) {
      return {
        label: `${prefix}側身區`,
        view,
        x: sideZoneX(label, view, 33, 67),
        y: 43
      };
    }
    if (hasAny(label, ["下腹", "鼠蹊"])) {
      return { label: `${prefix}下腹鼠蹊區`, view, x: sideZoneX(label, view, 43, 57), y: 52 };
    }
    if (hasAny(label, ["上腹", "肚臍"])) {
      return { label: `${prefix}上腹區`, view, x: sideZoneX(label, view, 43, 57), y: 39 };
    }
    if (hasAny(label, ["腹部", "腹"])) {
      return { label: `${prefix}腹部區`, view, x: sideZoneX(label, view, 43, 57), y: 45 };
    }
    if (hasAny(label, ["腳", "足", "腳跟", "腳底", "腳背"])) {
      return {
        label: `${prefix}足部區`,
        view,
        x: sideZoneX(label, view, 39, 61),
        y: 96
      };
    }
    if (hasAny(label, ["膝"])) {
      return {
        label: `${prefix}膝部區`,
        view,
        x: sideZoneX(label, view, 41, 59),
        y: 73
      };
    }
    if (hasAny(label, ["小腿"])) {
      return {
        label: `${prefix}小腿區`,
        view,
        x: sideZoneX(label, view, 41, 59),
        y: 83
      };
    }
    if (hasAny(label, ["大腿", "腿根"])) {
      return {
        label: `${prefix}大腿區`,
        view,
        x: sideZoneX(label, view, 41, 59),
        y: 63
      };
    }
    return { label: `${prefix}身體區`, view, x: sideZoneX(label, view, 44, 56), y: 50 };
  }

  function yForDetailPart(label, view) {
    if (hasAny(label, ["頭頂", "頭顱", "頭部", "頭右", "頭左", "後腦", "額頭", "眉"])) return 6;
    if (hasAny(label, ["眼", "鼻", "臉", "頰", "嘴", "下巴", "太陽穴"])) return 10;
    if (hasAny(label, ["頸", "脖"])) return 15;
    if (hasAny(label, ["肩", "鎖骨"])) return 20;
    if (hasAny(label, ["胸", "上背"])) return 27;
    if (hasAny(label, ["上腹", "肚臍"])) return 39;
    if (hasAny(label, ["腹部", "腹"])) return 45;
    if (hasAny(label, ["下腹", "鼠蹊", "生殖器", "陰", "龜頭", "前列腺"])) return 52;
    if (hasAny(label, ["腰", "側身", "下背", "尾骨", "臀"])) return view === "back" ? 48 : 43;
    if (hasAny(label, ["上臂", "手臂"])) return 34;
    if (hasAny(label, ["前臂", "下臂"])) return 47;
    if (hasAny(label, ["手掌", "手背", "掌心", "手"])) return 56;
    if (hasAny(label, ["大腿", "腿根"])) return 63;
    if (hasAny(label, ["膝"])) return 73;
    if (hasAny(label, ["小腿"])) return 83;
    if (hasAny(label, ["腳", "足", "腳跟", "腳底"])) return 96;
    return 50;
  }

  function fullBodyDetailPoint(label, entry) {
    const view = viewForPart(label, entry);
    let x = sideZoneX(label, view, 42, 58);
    let y = yForDetailPart(label, view);
    if (entry.isGenital || label === "生殖器") {
      return { label: "生殖器", view: entry.side === "back" ? "back" : "front", x: 50, y: entry.side === "back" ? 58 : 52 };
    }
    if (hasAny(label, ["頭頂", "頭顱", "頭部", "頭右", "頭左", "後腦"])) {
      x = sideZoneX(label, view, 43, 57);
      y = view === "back" || hasAny(label, ["後腦", "後頭"]) ? 8 : 6;
    } else if (hasAny(label, ["眼"])) {
      x = sideZoneX(label, view, 47, 53);
      y = 9;
    } else if (hasAny(label, ["鼻"])) {
      x = sideZoneX(label, view, 48, 52);
      y = 10;
    } else if (hasAny(label, ["臉", "頰"])) {
      x = sideZoneX(label, view, 45, 55);
      y = 10;
    } else if (hasAny(label, ["嘴", "下巴"])) {
      x = sideZoneX(label, view, 48, 52);
      y = 13;
    } else if (hasAny(label, ["手掌", "手背", "掌心", "手"]) && !hasAny(label, ["手臂", "前臂", "上臂", "下臂"])) {
      x = sideZoneX(label, view, 16, 84);
    } else if (hasAny(label, ["前臂", "下臂"])) {
      x = sideZoneX(label, view, 24, 76);
    } else if (hasAny(label, ["上臂", "手臂"])) {
      x = sideZoneX(label, view, 27, 73);
    } else if (hasAny(label, ["腳", "足", "腳跟", "腳底", "腳背"]) && !label.includes("小腿")) {
      x = sideZoneX(label, view, 39, 61);
    }
    if (label.includes("內側")) x += x < 50 ? 5 : -5;
    if (label.includes("外側")) x += x < 50 ? -4 : 4;
    if (label.includes("前方")) y -= 2;
    if (label.includes("後方")) y += 2;
    if (label.includes("上") && hasAny(label, ["頭", "腹", "背", "臂"])) y -= 3;
    if (label.includes("下") && hasAny(label, ["腹", "背", "臂"])) y += 3;
    return { label, view, x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) };
  }

  function detailPointOnOverview(label, entry, region, overview) {
    const title = overview.title;
    const side = sideName(label);
    const detailX = (rightX = 40, leftX = 60, centerX = 50) => visualSideX(label, overview.side, rightX, leftX, centerX);
    let x = detailX(40, 60);
    let y = 50;
    if (title === "頭頂") {
      x = detailX(61, 39);
      if (hasAny(label, ["上", "前"])) y = 28;
      else if (hasAny(label, ["後"])) y = 64;
      else y = 45;
      if (label.includes("上下")) y = 42;
    } else if (title.includes("正臉")) {
      x = detailX(40, 60);
      if (hasAny(label, ["額頭", "眉", "太陽穴"])) y = hasAny(label, ["眉"]) ? 38 : 25;
      else if (hasAny(label, ["眼"])) y = 43;
      else if (hasAny(label, ["鼻"])) y = 54;
      else if (hasAny(label, ["臉", "頰"])) y = 52;
      else if (hasAny(label, ["嘴", "巴"])) y = 68;
      else if (hasAny(label, ["下巴"])) y = 77;
    } else if (title === "頭部") {
      x = detailX(40, 60);
      y = hasAny(label, ["頭頂", "頭顱"]) ? 28 : 44;
    } else if (title.includes("後腦")) {
      x = detailX(60, 40);
      y = hasAny(label, ["頭", "後腦", "後頭"]) ? 38 : 62;
    } else if (title.includes("頸")) {
      x = detailX(43, 57);
      y = hasAny(label, ["後"]) ? 70 : hasAny(label, ["左", "右"]) ? 56 : 48;
    } else if (title.includes("手臂")) {
      x = 50;
      if (hasAny(label, ["上臂", "手臂"])) y = 30;
      else if (hasAny(label, ["前臂", "下臂"])) y = 60;
      else y = 78;
      if (label.includes("內側")) x = title.includes("左") ? 57 : 43;
      if (label.includes("外側")) x = title.includes("左") ? 43 : 57;
    } else if (title.includes("手心") || title.includes("手背")) {
      x = 50;
      y = hasAny(label, ["手背"]) ? 44 : hasAny(label, ["掌", "手掌", "掌心"]) ? 58 : 52;
      if (hasAny(label, ["拇指"])) x = title.includes("左") ? 66 : 34;
      if (hasAny(label, ["食指"])) x = title.includes("左") ? 56 : 44;
    } else if (title.includes("腿")) {
      x = 50;
      if (hasAny(label, ["大腿", "腿根", "鼠蹊"])) y = 28;
      else if (hasAny(label, ["膝"])) y = 52;
      else if (hasAny(label, ["小腿"])) y = 72;
      else y = 88;
      if (label.includes("內側")) x = title.includes("左") ? 58 : 42;
      if (label.includes("外側")) x = title.includes("左") ? 42 : 58;
      if (label.includes("後")) x = 55;
      if (label.includes("前")) x = 45;
    } else if (title.includes("腳掌")) {
      x = label.includes("內側") ? 42 : label.includes("外側") ? 58 : 50;
      y = hasAny(label, ["腳跟", "後跟"]) ? 76 : hasAny(label, ["腳底", "腳掌"]) ? 55 : 38;
    } else if (title.includes("軀幹")) {
      x = detailX(40, 60);
      if (hasAny(label, ["胸", "上背"])) y = 25;
      else if (hasAny(label, ["上腹"])) y = 40;
      else if (hasAny(label, ["腹部", "肚臍", "腹"])) y = 52;
      else if (hasAny(label, ["下腹", "鼠蹊"])) y = 66;
      else if (hasAny(label, ["下背", "腰"])) y = 62;
      else if (hasAny(label, ["臀", "尾骨"])) y = 78;
      else if (hasAny(label, ["側身"])) y = 48;
      if (hasAny(label, ["上下"])) y = 48;
    } else if (title.includes("胸肩")) {
      x = title.includes("右") ? 58 : title.includes("左") ? 42 : detailX(58, 42);
      y = hasAny(label, ["肩", "鎖骨", "肩胛"]) ? 58 : hasAny(label, ["胸"]) ? 70 : 35;
    } else if (title.includes("生殖器")) {
      x = 50;
      if (hasAny(label, ["陰蒂", "龜頭"])) y = 34;
      else if (hasAny(label, ["陰唇", "前列腺"])) y = 49;
      else y = entry.gender === "male" ? 56 : 48;
    }
    return {
      label,
      view: overview.side,
      x: Math.max(4, Math.min(96, x)),
      y: Math.max(4, Math.min(96, y)),
      overviewTitle: overview.title,
      overviewPath: overview.path
    };
  }

  function roundedDetailPoint(value) {
    return Math.round(Number(value) * 2) / 2;
  }

  function detailClusterLabel(parts, fallback) {
    const uniqueParts = Array.from(new Set(parts));
    if (uniqueParts.length === 0) return fallback;
    if (uniqueParts.length === 1) return uniqueParts[0];
    const visibleParts = uniqueParts.slice(0, 3).join("、");
    return uniqueParts.length > 3 ? `${visibleParts}等` : visibleParts;
  }

  function detailClusterTooltip(parts, fallback) {
    const uniqueParts = Array.from(new Set(parts));
    return uniqueParts.length ? uniqueParts.join("、") : fallback;
  }

  function detailPointForPart(label, entry, region) {
    if (activeRegionKey) {
      const overview = overviewForRegionKey(activeRegionKey);
      if (overview) return detailPointOnOverview(label, entry, region, overview);
    }
    return fullBodyDetailPoint(label, entry);
  }

  function edgeArrowAdjustedPoint(point) {
    if (point.manual) return point;
    let x = Number(point.x);
    let y = Number(point.y);
    if (x < 20) x += 5.6;
    else if (x > 80) x -= 5.6;
    if (y < 8) y += 2.4;
    else if (y > 92) y -= 2.4;
    return { ...point, x, y };
  }

  function titleMatchesAny(title, words) {
    return words.some((word) => title.includes(word));
  }

  function closestEntriesForDetailView(overview, flowerEntries) {
    const detailView = activeOfficialDetailView(overview);
    const title = `${detailView?.title || ""} ${overview.title || ""} ${overview.sourceTitle || ""}`;
    const matchers = [];

    if (titleMatchesAny(title, ["頸"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["頸", "喉", "下巴"]));
    }
    if (titleMatchesAny(title, ["正臉", "側臉", "右側臉", "左側臉", "半側"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["臉", "頰", "眼", "鼻", "下巴", "額"]));
    }
    if (titleMatchesAny(title, ["頭頂"]) || (title.includes("頭部") && !title.includes("頸"))) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["頭頂", "後腦", "頭部", "頭", "頸", "額"]));
    }
    if (titleMatchesAny(title, ["手心", "手背", "手掌"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["手心", "手背", "手掌", "手部", "手"]));
    }
    if (titleMatchesAny(title, ["手臂", "上臂", "前臂"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["手臂", "上臂", "前臂"]));
    }
    if (titleMatchesAny(title, ["腿", "大腿", "小腿", "膝"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["腿", "大腿", "小腿", "膝"]));
    }
    if (titleMatchesAny(title, ["軀幹", "身體正面"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["胸", "腹", "背", "腰", "臀", "側身", "鼠蹊"]));
    }
    if (titleMatchesAny(title, ["生殖器"])) {
      matchers.push((entryTitle) => titleMatchesAny(entryTitle, ["生殖器", "陰蒂", "陰唇", "陰莖", "龜頭", "前列腺"]));
    }

    for (const matcher of matchers) {
      const matched = flowerEntries.filter((entry) => matcher(entry.title));
      if (matched.length) return matched;
    }
    return [];
  }

  function headTopCandidatePoints(title) {
    const points = [];
    const hasRight = title.includes("右");
    const hasLeft = title.includes("左");
    const x = hasRight ? 30 : hasLeft ? 70 : 50;
    if (title === "頭頂") points.push({ x: 50, y: 72 });
    if (title.includes("後頸")) points.push({ x: 50, y: 74 });
    else if (title.includes("頸")) points.push({ x: 50, y: 70 });
    if (title.includes("額")) points.push({ x: 50, y: 84 });
    if (title.includes("頭顱") || title.includes("頭部")) {
      if (title.includes("上下")) {
        points.push({ x, y: 18 }, { x, y: 52 });
      } else if (title.includes("下")) {
        points.push({ x, y: 52 });
      } else {
        points.push({ x, y: 22 });
      }
    }
    if (title.includes("後")) points.push({ x, y: 68 });
    if (title.includes("前") || title.includes("上")) points.push({ x, y: 18 });
    return points;
  }

  function entryCandidatePointsOnOverview(overview, entry) {
    const labels = splitPartLabels(entry);
    const region = { view: overview.side, label: overview.title, regionKey: `overview|${overview.id}` };
    const points = labels.map((label) => detailPointOnOverview(label, entry, region, overview));
    if (overview.title === "頭頂") points.push(...headTopCandidatePoints(entry.title));
    return points.filter((point) => Number.isFinite(Number(point.x)) && Number.isFinite(Number(point.y)));
  }

  function scoreEntryForDetailPoint(overview, point, entry) {
    const candidates = entryCandidatePointsOnOverview(overview, entry);
    if (!candidates.length) return Number.POSITIVE_INFINITY;
    const px = Number(point.x);
    const py = Number(point.y);
    let score = Math.min(...candidates.map((candidate) => {
      const dx = px - Number(candidate.x);
      const dy = py - Number(candidate.y);
      return (dx * dx) + (dy * dy * 1.25);
    }));

    if (overview.title === "頭頂") {
      if (entry.title === "頭頂" && py < 48) score += 900;
      if (entry.title !== "頭頂" && py > 62 && !titleMatchesAny(entry.title, ["後", "頸", "額"])) score += 500;
    }
    return score;
  }

  function disambiguateEntriesForPoint(overview, point, pointEntries) {
    if (pointEntries.length <= 1) return pointEntries;
    const flowerNames = new Set(pointEntries.map((entry) => entry.flowerName));
    if (flowerNames.size !== 1) return pointEntries;

    const scored = pointEntries
      .map((entry) => ({ entry, score: scoreEntryForDetailPoint(overview, point, entry) }))
      .sort((a, b) => a.score - b.score);
    if (!Number.isFinite(scored[0]?.score)) return pointEntries.slice(0, 1);
    return [scored[0].entry];
  }

  function preferredHeadTopEntriesForPoint(overview, point, pointEntries) {
    if (overview.title !== "頭頂" || pointEntries.length <= 1) return [];
    const px = Number(point.x);
    const py = Number(point.y);
    if (!Number.isFinite(px) || !Number.isFinite(py)) return [];

    const titles = (words) => pointEntries.filter((entry) => titleMatchesAny(entry.title, words));
    if (py >= 76 && px >= 38 && px <= 62) return titles(["額"]);
    if (py >= 62 && px >= 38 && px <= 62) return titles(["額", "頸"]);
    if (py <= 24 && px >= 38 && px <= 62) return titles(["頭頂", "頭顱上", "頭部上"]);
    return [];
  }

  function detailPointFromNumber(overview, point, index) {
    const alignedPoint = point.coordinateSpace === "official" ? point : alignDetectedPointToDetailImage(overview, point);
    const adjustedPoint = edgeArrowAdjustedPoint(alignedPoint);
    const flowerEntriesForNumber = entries.filter((entry) => String(entry.flowerNo) === String(point.number));
    const overviewMatchedEntries = flowerEntriesForNumber.filter((entry) => overviewMatchesEntry(overview, entry));
    const proximityEntries = closestEntriesForDetailView(overview, flowerEntriesForNumber);
    const closestEntries = overview.title === "頭頂" && proximityEntries.length
      ? Array.from(new Map([...overviewMatchedEntries, ...proximityEntries].map((entry) => [entry.id, entry])).values())
      : (overviewMatchedEntries.length ? overviewMatchedEntries : proximityEntries);
    const candidateEntries = closestEntries.length ? closestEntries : flowerEntriesForNumber.slice(0, 1);
    const headTopPreferredEntries = preferredHeadTopEntriesForPoint(overview, adjustedPoint, candidateEntries);
    const pointEntries = disambiguateEntriesForPoint(
      overview,
      adjustedPoint,
      headTopPreferredEntries.length ? headTopPreferredEntries : candidateEntries
    );
    const flowerNames = Array.from(new Set(pointEntries.map((entry) => entry.flowerName)));
    const label = point.label || flowerNames.join("、") || `編號 ${point.number}`;
    const matchedParts = Array.from(new Set(pointEntries.map((entry) => entry.title))).filter(Boolean);
    return {
      id: `point-${index}`,
      label,
      tooltip: label,
      markerNumber: String(point.number),
      view: overview.side,
      x: Math.max(4, Math.min(96, Number(adjustedPoint.x))),
      y: Math.max(4, Math.min(96, Number(adjustedPoint.y))),
      mode: "detail",
      regionLabel: overview.title,
      regionKey: `overview|${overview.id}`,
      overviewTitle: overview.title,
      overviewPath: overview.path,
      originalOverviewPath: overview.path,
      entries: pointEntries,
      parts: matchedParts.length ? matchedParts : flowerNames
    };
  }

  function detailPointMatchesGender(point) {
    const gender = activeBodyGender || effectiveGender();
    if (gender === "all") return true;
    return !point.gender || point.gender === "all" || point.gender === gender;
  }

  function buildDetailPointsForOverview(overview, filteredEntries) {
    const detailView = activeOfficialDetailView(overview);
    const overridePoints = overridePointsForOverview(overview, detailView.key);
    if (overridePoints.length) {
      return overridePoints
        .filter(detailPointMatchesGender)
        .map((point, index) => detailPointFromNumber(overview, { ...point, manual: true }, index));
    }

    const detectedOverviewPoints = detectedPointsForOverview(overview);
    if (detectedOverviewPoints.length) {
      return detectedOverviewPoints.map((detected, index) => detailPointFromNumber(overview, detected, index));
    }

    const pointMap = new Map();
    const matchedOverviewEntries = filteredEntries.filter((entry) => !entry.isOverview && overviewMatchesEntry(overview, entry));
    matchedOverviewEntries.forEach((entry) => {
      const matchingLabels = splitPartLabels(entry).filter((label) => {
        const region = regionForPart(label, entry);
        const labelOverview = overviewForRegionKey(`${region.view}|${region.label}`);
        return overview.isGenital || (labelOverview && labelOverview.title === overview.title);
      });
      if (!matchingLabels.length) return;

      const detectedPoints = detectedNumberPointsForOverview(overview, entry.flowerNo);
      if (detectedPoints.length) {
        detectedPoints.forEach((detected) => {
          const key = `${overview.id}|number|${detected.number}|${roundedDetailPoint(detected.x)}|${roundedDetailPoint(detected.y)}`;
          if (!pointMap.has(key)) {
            pointMap.set(key, {
              id: `point-${pointMap.size}`,
              label: "",
              tooltip: "",
              markerNumber: String(detected.number),
              view: overview.side,
              x: Math.max(4, Math.min(96, Number(detected.x))),
              y: Math.max(4, Math.min(96, Number(detected.y))),
              mode: "detail",
              regionLabel: overview.title,
              regionKey: `overview|${overview.id}`,
              overviewTitle: overview.title,
              overviewPath: overview.path,
              originalOverviewPath: overview.path,
              entries: [],
              parts: new Set()
            });
          }
          const point = pointMap.get(key);
          if (!point.entries.some((item) => item.id === entry.id)) point.entries.push(entry);
          matchingLabels.forEach((label) => point.parts.add(label));
        });
        return;
      }

      matchingLabels.forEach((label) => {
        const region = regionForPart(label, entry);
        const detail = detailPointOnOverview(label, entry, { ...region, regionKey: `${region.view}|${region.label}` }, overview);
        const key = `${overview.id}|${roundedDetailPoint(detail.x)}|${roundedDetailPoint(detail.y)}`;
        if (!pointMap.has(key)) {
          pointMap.set(key, {
            id: `point-${pointMap.size}`,
            label,
            tooltip: "",
            view: overview.side,
            x: detail.x,
            y: detail.y,
            mode: "detail",
            regionLabel: overview.title,
            regionKey: `overview|${overview.id}`,
            overviewTitle: overview.title,
            overviewPath: detail.overviewPath,
            originalOverviewPath: overview.path,
            entries: [],
            parts: new Set()
          });
        }
        const point = pointMap.get(key);
        if (!point.entries.some((item) => item.id === entry.id)) point.entries.push(entry);
        point.parts.add(label);
      });
    });
    return Array.from(pointMap.values()).map((point) => {
      const parts = Array.from(point.parts);
      const flowerNames = Array.from(new Set(point.entries.filter((entry) => !entry.isOverview).map((entry) => entry.flowerName)));
      const numberLabel = point.markerNumber ? `${point.markerNumber}. ${flowerNames.join("、") || "花精"}` : "";
      return {
        ...point,
        parts,
        label: numberLabel || detailClusterLabel(parts, point.regionLabel),
        tooltip: point.markerNumber
          ? `${numberLabel}｜${detailClusterTooltip(parts, point.regionLabel)}`
          : detailClusterTooltip(parts, point.regionLabel)
      };
    });
  }

  function buildPoints(filteredEntries) {
    if (!activeRegionKey) return buildOverviewPoints(filteredEntries);
    if (activeRegionKey.startsWith("overview|")) {
      const overview = overviewForRegionKey(activeRegionKey);
      return overview ? buildDetailPointsForOverview(overview, filteredEntries) : [];
    }
    const pointMap = new Map();
    filteredEntries.forEach((entry) => {
      splitPartLabels(entry).forEach((label) => {
        const region = regionForPart(label, entry);
        const regionKey = `${region.view}|${region.label}`;
        const isRegionMode = !activeRegionKey;
        if (!isRegionMode && regionKey !== activeRegionKey) return;
        const regionWithKey = { ...region, regionKey };
        const detail = detailPointForPart(label, entry, regionWithKey);
        const pointLabel = isRegionMode ? region.label : detail.label;
        const pointView = isRegionMode ? region.view : detail.view;
        const pointX = isRegionMode ? region.x : detail.x;
        const pointY = isRegionMode ? region.y : detail.y;
        const key = isRegionMode
          ? regionKey
          : `${regionKey}|${detail.overviewTitle}|${roundedDetailPoint(pointX)}|${roundedDetailPoint(pointY)}`;
        if (!pointMap.has(key)) {
          pointMap.set(key, {
            id: `point-${pointMap.size}`,
            label: pointLabel,
            view: pointView,
            x: pointX,
            y: pointY,
            mode: isRegionMode ? "region" : "detail",
            regionLabel: region.label,
            regionKey,
            overviewTitle: detail.overviewTitle || "",
            overviewPath: detail.overviewPath || "",
            entries: [],
            parts: new Set()
          });
        }
        const point = pointMap.get(key);
        if (!point.entries.some((item) => item.id === entry.id)) point.entries.push(entry);
        point.parts.add(label);
      });
    });
    return Array.from(pointMap.values()).map((point) => ({
      ...point,
      parts: Array.from(point.parts),
      label: point.mode === "detail" ? detailClusterLabel(Array.from(point.parts), point.regionLabel) : point.label,
      tooltip: point.mode === "detail" ? detailClusterTooltip(Array.from(point.parts), point.regionLabel) : point.tooltip
    }));
  }

  function currentFlowerEntries() {
    const query = normalize(searchInput.value);
    const flowerEntries = entries.filter((entry) => {
      if (activeMode === "overview") return false;
      if (activeMode === "genitals" && !entry.isGenital) return false;
      return matchesGender(entry) && matchesQuery([entry.flowerName, entry.title, entry.flowerNo], query);
    });
    const shouldIncludeOverview = activeMode !== "flowers";
    const matchedOverview = shouldIncludeOverview
      ? overviewEntries.filter((entry) => {
        if (activeMode === "genitals" && !entry.isGenital) return false;
        return matchesGender(entry) && matchesQuery([entry.flowerName, entry.title], query);
      })
      : [];
    return [...flowerEntries, ...matchedOverview];
  }

  function renderStats(filteredEntries, points) {
    const genitalCount = filteredEntries.filter((entry) => entry.isGenital).length;
    const flowerCount = new Set(filteredEntries.filter((entry) => !entry.isOverview).map((entry) => entry.flowerName)).size;
    const overviewCount = filteredEntries.filter((entry) => entry.isOverview).length;
    stats.innerHTML = `
      <span><strong>${data.flowers.length}</strong> 種花精</span>
      <span><strong>${filteredEntries.length - overviewCount}</strong> 張花精反應圖</span>
      <span><strong>${overviewCount}</strong> 張總覽圖</span>
      <span><strong>${points.length}</strong> 個可點反應點</span>
      <span><strong>${flowerCount}</strong> 種符合篩選</span>
      <span><strong>${genitalCount}</strong> 張生殖器相關圖</span>
    `;
  }

  function hotspotEdgeClass(point) {
    if (Number(point.y) < 12) return "near-top";
    if (Number(point.x) < 16) return "near-left";
    if (Number(point.x) > 84) return "near-right";
    return "";
  }

  function syncHotspotLayerToImage() {
    const width = figureImage.clientWidth;
    const height = figureImage.clientHeight;
    if (!width || !height) return;
    hotspotLayer.style.width = `${width}px`;
    hotspotLayer.style.height = `${height}px`;
  }

  function renderResults() {
    const filteredEntries = currentFlowerEntries();
    const points = buildPoints(filteredEntries);
    const visiblePoints = points.filter((point) => point.view === activeView);
    renderStats(filteredEntries, points);
    renderFigure();
    syncHotspotLayerToImage();

    hotspotLayer.innerHTML = visiblePoints.length
      ? visiblePoints.map((point) => `
        <button
          class="body-hotspot ${hotspotEdgeClass(point)} ${point.id === selectedPointId ? "active" : ""}"
          type="button"
          data-point-id="${escapeHTML(point.id)}"
          data-point-mode="${escapeHTML(point.mode)}"
          data-region-key="${escapeHTML(point.regionKey)}"
          data-detail-key="${escapeHTML(point.detailKey || "")}"
          data-marker-number="${escapeHTML(point.markerNumber || "")}"
          style="left:${point.x}%;top:${point.y}%"
          aria-label="${escapeHTML(point.label)}，${point.tooltip || `${point.entries.length} 張參考圖`}"
        >
          <span>${escapeHTML(point.tooltip || point.label)}</span>
        </button>
      `).join("")
      : '<p class="body-map-empty">目前篩選下這一側沒有反應點。</p>';

    if (!activeRegionKey) {
      renderRegionPanel(visiblePoints);
      return;
    }

    if (activeRegionKey.startsWith("overview|")) {
      const overview = overviewForRegionKey(activeRegionKey);
      const selectedPoint = points.find((point) => point.id === selectedPointId && point.view === activeView);
      if (selectedPoint) renderPointPanel(selectedPoint);
      else if (overview) renderOverviewPanel(overview, filteredEntries, visiblePoints);
      else renderEmptyPanel();
      return;
    }

    const selectedPoint = points.find((point) => point.id === selectedPointId && point.view === activeView) || visiblePoints[0];
    if (selectedPoint) {
      selectedPointId = selectedPoint.id;
      renderPointPanel(selectedPoint);
    } else {
      selectedPointId = "";
      renderEmptyPanel();
    }
  }

  function renderFigure() {
    const overview = overviewForRegionKey(activeRegionKey);
    if (overview) {
      const detailView = activeOfficialDetailView(overview);
      figure.dataset.activeView = activeView;
      figure.dataset.detailMode = "true";
      figureImage.src = detailView.path || overview.detailPath || overview.path;
      figureImage.alt = `${detailView.title || overview.title}放大細節圖`;
      figureCaption.textContent = `${detailView.title || overview.title}｜放大細節`;
      return;
    }
    const isBack = activeView === "back";
    const genderText = activeBodyGender === "female" ? "女" : "男";
    const viewText = isBack ? "後側" : "前側";
    figure.dataset.activeView = activeView;
    figure.dataset.detailMode = "false";
    figureImage.src = isBack ? "peo/2.png" : "peo/1.png";
    figureImage.alt = `${genderText}身體${viewText}參考圖`;
    figureCaption.textContent = `${genderText}｜${viewText}`;
  }

  function openBodyMapPanel() {
    bodyMapPanel.hidden = false;
    window.requestAnimationFrame(() => {
      document.body.classList.add("body-map-modal-open");
    });
  }

  function closeBodyMapPanel() {
    document.body.classList.remove("body-map-modal-open");
    window.setTimeout(() => {
      if (!document.body.classList.contains("body-map-modal-open")) bodyMapPanel.hidden = true;
    }, 190);
  }

  function renderRegionPanel(points) {
    closeBodyMapPanel();
    panelTitle.textContent = "";
    panelDescription.textContent = "";
    resultList.innerHTML = "";
  }

  function renderPointPanel(point) {
    openBodyMapPanel();
    const flowerCount = new Set(point.entries.filter((entry) => !entry.isOverview).map((entry) => entry.flowerName)).size;
    const overviewCount = point.entries.filter((entry) => entry.isOverview).length;
    panelTitle.textContent = `${point.regionLabel} / ${point.label}｜${flowerCount} 種花精${overviewCount ? `＋${overviewCount} 張總覽` : ""}`;
    const partSummary = point.parts.length ? `包含：${point.parts.slice(0, 8).join("、")}${point.parts.length > 8 ? "等" : ""}。` : "";
    panelDescription.innerHTML = `
      <button class="small-button" type="button" data-reset-body-region>返回部位選擇</button>
      <span>${point.markerNumber ? `編號 ${escapeHTML(point.markerNumber)}｜` : ""}${point.entries.length} 張參考圖。${escapeHTML(partSummary)}</span>
    `;
    resultList.innerHTML = point.entries.map((entry) => {
      const flower = findFlower(entry.flowerName);
      return `
        <article class="reaction-row">
          <a class="reaction-thumb" href="${escapeHTML(entry.path)}" target="_blank" rel="noreferrer">
            <img src="${escapeHTML(entry.path)}" alt="${escapeHTML(entry.flowerName)} ${escapeHTML(entry.title)}" loading="lazy">
          </a>
          <div>
            <h3>${entry.isOverview ? "部位總覽" : `${entry.flowerNo}. ${escapeHTML(entry.flowerName)}`}</h3>
            <p>${escapeHTML(entry.title)}</p>
            <div class="reaction-tags">
              <span>${escapeHTML(sideLabel(entry.side))}</span>
              <span>${escapeHTML(genderLabel(entry.gender))}</span>
              ${entry.isGenital ? "<span>生殖器細項</span>" : ""}
              ${entry.isOverview ? "<span>總覽圖</span>" : ""}
            </div>
            ${flower ? `
              <div class="record-actions">
                <button class="small-button" type="button" data-add-map-focus="${escapeHTML(flower.name)}" data-focus-source="${escapeHTML(`身體地圖｜${point.regionLabel}｜${point.label}`)}">加入重點</button>
              </div>
              ${flowerReactionItems(flower.name).filter((item) => item.path !== entry.path).length ? `
                <details class="body-map-more-reactions">
                  <summary>查看${escapeHTML(flower.name)}其他部位反應區</summary>
                  <div class="reaction-result-list compact">
                    ${flowerReactionItems(flower.name).filter((item) => item.path !== entry.path).map((item) => `
                      <article class="reaction-row">
                        <a class="reaction-thumb" href="${escapeHTML(item.path)}" target="_blank" rel="noreferrer">
                          <img src="${escapeHTML(item.path)}" alt="${escapeHTML(flower.name)} ${escapeHTML(item.title)}" loading="lazy">
                        </a>
                        <div>
                          <h3>${escapeHTML(item.title)}</h3>
                          <div class="reaction-tags">
                            <span>${escapeHTML(sideLabel(item.side))}</span>
                            <span>${escapeHTML(genderLabel(item.gender))}</span>
                          </div>
                        </div>
                      </article>
                    `).join("")}
                  </div>
                </details>
              ` : ""}
            ` : ""}
          </div>
        </article>
      `;
    }).join("");
  }

  function renderOverviewPanel(overview, filteredEntries, detailPoints = []) {
    closeBodyMapPanel();
    const matchedEntries = filteredEntries.filter((entry) => overviewMatchesEntry(overview, entry));
    const flowerCount = new Set(matchedEntries.map((entry) => entry.flowerName)).size;
    panelTitle.textContent = `${overview.title}｜${detailPoints.length} 個細節點`;
    panelDescription.innerHTML = `
      <button class="small-button" type="button" data-reset-body-region>返回部位選擇</button>
      <a class="small-button" href="${escapeHTML(overview.path)}" target="_blank" rel="noreferrer">查看原版分區圖</a>
      <span>${matchedEntries.length} 張反應圖，${flowerCount} 種花精。</span>
    `;
    resultList.innerHTML = detailPoints.length
      ? detailPoints.map((point) => `
        <button class="reaction-flower-button" type="button" data-point-id="${escapeHTML(point.id)}">
          <span>${escapeHTML(point.label)}</span>
          <small>${point.entries.length}</small>
        </button>
      `).join("")
      : '<p class="empty-state">目前搜尋條件下，這張圖沒有對應細節點。</p>';
  }

  function renderEmptyPanel() {
    if (activeRegionKey) openBodyMapPanel();
    else closeBodyMapPanel();
    panelTitle.textContent = "請點選身體反應點";
    panelDescription.textContent = activeRegionKey
      ? "這個部位目前沒有符合篩選條件的細節點。"
      : "黑點代表目前篩選條件下的身體部位。點擊部位後會進入細節點。";
    resultList.innerHTML = '<p class="empty-state">請調整搜尋、花精、前後側或男女篩選。</p>';
  }

  function setMode(mode) {
    activeMode = mode;
    selectedPointId = "";
    activeRegionKey = "";
    activeDetailKey = "";
    modeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.reactionMode === mode);
      button.setAttribute("aria-pressed", button.dataset.reactionMode === mode ? "true" : "false");
    });
    renderResults();
  }

  function setGender(gender) {
    activeGender = gender;
    selectedPointId = "";
    activeRegionKey = "";
    activeDetailKey = "";
    genderButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.reactionGender === gender);
      button.setAttribute("aria-pressed", button.dataset.reactionGender === gender ? "true" : "false");
    });
    renderResults();
  }

  function setBodyView(view) {
    activeView = view;
    selectedPointId = "";
    activeRegionKey = "";
    activeDetailKey = "";
    viewButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.bodyView === view);
      button.setAttribute("aria-pressed", button.dataset.bodyView === view ? "true" : "false");
    });
    renderResults();
  }

  function setBodyGender(gender) {
    activeBodyGender = gender;
    selectedPointId = "";
    activeRegionKey = "";
    activeDetailKey = "";
    bodyGenderButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.bodyGender === gender);
      button.setAttribute("aria-pressed", button.dataset.bodyGender === gender ? "true" : "false");
    });
    renderResults();
  }

  searchInput.addEventListener("input", () => {
    selectedPointId = "";
    activeRegionKey = "";
    activeDetailKey = "";
    renderResults();
  });
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.reactionMode));
  });
  genderButtons.forEach((button) => {
    button.addEventListener("click", () => setGender(button.dataset.reactionGender));
  });
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => setBodyView(button.dataset.bodyView));
  });
  bodyGenderButtons.forEach((button) => {
    button.addEventListener("click", () => setBodyGender(button.dataset.bodyGender));
  });
  figureImage.addEventListener("load", syncHotspotLayerToImage);
  window.addEventListener("resize", syncHotspotLayerToImage);
  let suppressPointClick = false;

  function emitPointOverrideSnippet() {
    if (!pointEditMode || !activeRegionKey) return;
    const overview = overviewForRegionKey(activeRegionKey);
    if (!overview) return;
    const buttons = Array.from(hotspotLayer.querySelectorAll('[data-point-mode="detail"]'));
    const points = buttons.map((button) => ({
      number: button.dataset.markerNumber,
      x: Number.parseFloat(button.style.left),
      y: Number.parseFloat(button.style.top)
    })).filter((point) => point.number && Number.isFinite(point.x) && Number.isFinite(point.y));
    const key = overviewPointKey(overview);
    const snippet = `"${key}": ${JSON.stringify(points, null, 2)}`;
    console.info(`[body-map override] ${overview.title}\n${snippet}`);
  }

  hotspotLayer.addEventListener("pointerdown", (event) => {
    if (!pointEditMode) return;
    const pointButton = event.target.closest('[data-point-mode="detail"]');
    if (!pointButton || !activeRegionKey) return;
    event.preventDefault();
    let didMove = false;
    pointButton.setPointerCapture(event.pointerId);
    const movePoint = (moveEvent) => {
      const rect = hotspotLayer.getBoundingClientRect();
      const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((moveEvent.clientY - rect.top) / rect.height) * 100;
      pointButton.style.left = `${Math.max(0, Math.min(100, x)).toFixed(2)}%`;
      pointButton.style.top = `${Math.max(0, Math.min(100, y)).toFixed(2)}%`;
      didMove = true;
    };
    const stopDrag = () => {
      pointButton.removeEventListener("pointermove", movePoint);
      pointButton.removeEventListener("pointerup", stopDrag);
      pointButton.removeEventListener("pointercancel", stopDrag);
      if (didMove) {
        suppressPointClick = true;
        window.setTimeout(() => { suppressPointClick = false; }, 0);
        emitPointOverrideSnippet();
      }
    };
    pointButton.addEventListener("pointermove", movePoint);
    pointButton.addEventListener("pointerup", stopDrag);
    pointButton.addEventListener("pointercancel", stopDrag);
  });

  document.querySelector(".reaction-map-app").addEventListener("click", async (event) => {
    const pointButton = event.target.closest("[data-point-id]");
    if (pointButton) {
      if (suppressPointClick) return;
      if (pointButton.dataset.pointMode === "region") {
        activeRegionKey = pointButton.dataset.regionKey;
        activeDetailKey = pointButton.dataset.detailKey || "";
        selectedPointId = "";
      } else {
        selectedPointId = pointButton.dataset.pointId;
      }
      renderResults();
      return;
    }
    const regionJump = event.target.closest("[data-region-jump]");
    if (regionJump) {
      activeRegionKey = regionJump.dataset.regionJump;
      activeDetailKey = "";
      selectedPointId = "";
      renderResults();
      return;
    }
    const resetRegionButton = event.target.closest("[data-reset-body-region]");
    if (resetRegionButton) {
      activeRegionKey = "";
      activeDetailKey = "";
      selectedPointId = "";
      renderResults();
      return;
    }
    const closePanelButton = event.target.closest("[data-close-body-panel]");
    if (closePanelButton) {
      selectedPointId = "";
      closeBodyMapPanel();
      renderResults();
      return;
    }
    const addButton = event.target.closest("[data-add-map-focus]");
    if (!addButton) return;
    const flowerName = addButton.dataset.addMapFocus;
    const source = addButton.dataset.focusSource || "身體地圖";
    if (!await promptFocusItem(flowerName, source)) return;
    addButton.textContent = "已加入重點";
    addButton.disabled = true;
  });

  renderResults();
}

function initDecisionPage() {
  renderNav("decision.html");
  const progress = document.querySelector("#decisionProgress");
  const question = document.querySelector("#decisionQuestion");
  const options = document.querySelector("#decisionOptions");
  const backButton = document.querySelector("#decisionBack");
  const restartButton = document.querySelector("#decisionRestart");
  const result = document.querySelector("#decisionResult");

  const questions = [
    {
      title: "最近最明顯的困擾比較接近哪一種？",
      detail: "先抓大方向，之後再追問真正原因。",
      options: [
        { label: "害怕、擔心、恐慌", scores: { 白楊: 1, 溝酸漿: 1, 岩薔薇: 1, 櫻桃李: 1, 紅栗花: 1 } },
        { label: "猶豫、不確定、缺乏方向", scores: { 水蕨: 1, 線球草: 1, 野燕麥: 1, 龍膽: 1 } },
        { label: "分心、疲累、提不起興趣", scores: { 鐵線蓮: 1, 白栗花: 1, 橄欖: 1, 栗樹芽苞: 1, 野薔薇: 1 } },
        { label: "人際壓力、無法拒絕、太在意別人", scores: { 矢車菊: 1, 龍芽草: 1, 菊苣: 1, 石楠: 1 } },
        { label: "自責、絕望、壓力過大", scores: { 松樹: 1, 榆樹: 1, 甜栗花: 1, 金雀花: 1, 伯利恆之星: 1 } }
      ]
    },
    {
      title: "如果有害怕或擔心，比較像哪一種？",
      detail: "如果這題不符合，也可以選最後一項略過。",
      options: [
        { label: "說不出原因的不安，像有不祥預感", scores: { 白楊: 3 } },
        { label: "明確知道害怕什麼，例如疼痛、疾病、動物、事件", scores: { 溝酸漿: 3 } },
        { label: "強烈恐慌，感覺被困住、無法自主", scores: { 岩薔薇: 3 } },
        { label: "怕自己失控、崩潰、做出可怕行為", scores: { 櫻桃李: 3 } },
        { label: "主要是擔心親友出事", scores: { 紅栗花: 3 } },
        { label: "這不是我目前主要問題", scores: {} }
      ]
    },
    {
      title: "如果是不確定，最接近哪一種？",
      detail: "重點是分辨不相信自己、兩邊搖擺，還是人生方向不清。",
      options: [
        { label: "常懷疑自己的判斷，小事也想問別人", scores: { 水蕨: 3 } },
        { label: "在兩個選項之間反覆拉扯，很難決定", scores: { 線球草: 3 } },
        { label: "不知道人生方向，選擇很多但都不確定", scores: { 野燕麥: 3 } },
        { label: "遇到阻礙就悲觀、容易失去信心", scores: { 龍膽: 3, 金雀花: 1 } },
        { label: "其實是沒自信，所以不敢開始", scores: { 落葉松: 3 } },
        { label: "這不是我目前主要問題", scores: {} }
      ]
    },
    {
      title: "你的注意力或精力狀態比較像哪一種？",
      detail: "這題用來區分分心、反覆想、疲累與放棄。",
      options: [
        { label: "容易做白日夢、恍神，像沒有真的在現場", scores: { 鐵線蓮: 3 } },
        { label: "腦中反覆想同一件事，停不下來", scores: { 白栗花: 3 } },
        { label: "身心非常耗竭，沒有力氣再努力", scores: { 橄欖: 3 } },
        { label: "一直重複同樣錯誤，沒有從經驗學到", scores: { 栗樹芽苞: 3 } },
        { label: "有點放棄、聽天由命，覺得做什麼都差不多", scores: { 野薔薇: 3 } },
        { label: "這不是我目前主要問題", scores: {} }
      ]
    },
    {
      title: "在人際或壓力情境中，最常出現哪種反應？",
      detail: "這題用來看溝通模式與補償反應。",
      options: [
        { label: "明明不願意，卻很難拒絕或容易討好", scores: { 矢車菊: 3 } },
        { label: "外表開朗沒事，內在其實壓抑很多", scores: { 龍芽草: 3 } },
        { label: "很需要別人聽我說，害怕沒有人陪", scores: { 石楠: 3 } },
        { label: "容易看見別人的錯，想批評或糾正", scores: { 櫸木: 3 } },
        { label: "很想說服別人接受我的想法或正義感", scores: { 馬鞭草: 3 } },
        { label: "這不是我目前主要問題", scores: {} }
      ]
    },
    {
      title: "目前最需要追蹤的強度是哪一種？",
      detail: "這題不決定花精，只幫你判斷後續紀錄優先順序。",
      options: [
        { label: "強烈，已經明顯影響睡眠、學習、工作或關係", intensity: "強烈" },
        { label: "中等，常出現，但還能維持日常", intensity: "中等" },
        { label: "輕微，像是剛開始冒出來的狀態", intensity: "輕微" },
        { label: "不確定，需要再觀察幾天", intensity: "仍需確認" }
      ]
    }
  ];

  let step = 0;
  let answers = [];

  function addScores(scoreMap, scores) {
    Object.entries(scores || {}).forEach(([name, value]) => {
      scoreMap[name] = (scoreMap[name] || 0) + value;
    });
  }

  function rankedResults() {
    const scoreMap = {};
    answers.forEach((answer) => addScores(scoreMap, answer.scores));
    return Object.entries(scoreMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, score]) => ({ flower: findFlower(name), score }))
      .filter((item) => item.flower);
  }

  function renderQuestion() {
    const current = questions[step];
    const total = questions.length;
    progress.textContent = `第 ${step + 1} 題 / 共 ${total} 題`;
    question.innerHTML = `
      <h3>${escapeHTML(current.title)}</h3>
      <p>${escapeHTML(current.detail)}</p>
    `;
    options.innerHTML = current.options.map((option, index) => `
      <button class="decision-option" type="button" data-answer-index="${index}">
        ${escapeHTML(option.label)}
      </button>
    `).join("");
    backButton.disabled = step === 0;
    result.innerHTML = "";
  }

  function renderResult() {
    const ranked = rankedResults();
    const intensity = [...answers].reverse().find((answer) => answer.intensity)?.intensity || "仍需確認";
    progress.textContent = "判斷結果";
    question.innerHTML = `
      <h3>目前較接近的候選花精</h3>
      <p>以下結果依你剛剛選的狀態排序。它是判斷線索，不是固定人格分類。</p>
    `;
    options.innerHTML = "";
    backButton.disabled = false;

    if (ranked.length === 0) {
      result.innerHTML = `
        <div class="section-heading">
          <p class="eyebrow">需要更多線索</p>
          <h2>目前沒有明顯候選花精</h2>
          <p>可以重新判斷，或先在個人紀錄中寫下最近最困擾的事件，再回來選一次。</p>
        </div>
      `;
      return;
    }

    result.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">候選結果</p>
        <h2>建議先觀察前 ${ranked.length} 朵</h2>
        <p>目前強度標記為「${escapeHTML(intensity)}」。請優先看分數最高、且最符合實際事件原因的花精。</p>
      </div>
      <div class="decision-card-grid">
        ${ranked.map(({ flower, score }) => `
          <article class="decision-card">
            <h3>${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
            <p><strong>符合程度：</strong>${score} 分</p>
            <p><strong>負面特質：</strong>${escapeHTML(flower.negative)}</p>
            <p><strong>正面方向：</strong>${escapeHTML(flower.positive)}</p>
            <p><strong>加入前確認：</strong>請回想具體事件與真正原因，確認不是只因為關鍵字相似。</p>
            <button class="small-button" type="button" data-add-decision-focus="${escapeHTML(flower.name)}">加入個人紀錄</button>
          </article>
        `).join("")}
      </div>
    `;
  }

  options.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-answer-index]");
    if (!button) return;
    const current = questions[step];
    answers[step] = current.options[Number(button.dataset.answerIndex)];
    if (step === questions.length - 1) {
      renderResult();
      return;
    }
    step += 1;
    renderQuestion();
  });

  backButton.addEventListener("click", () => {
    if (step === questions.length - 1 && options.innerHTML === "") {
      renderQuestion();
      return;
    }
    if (step === 0) return;
    step -= 1;
    answers = answers.slice(0, step);
    renderQuestion();
  });

  restartButton.addEventListener("click", () => {
    step = 0;
    answers = [];
    renderQuestion();
  });

  result.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-add-decision-focus]");
    if (!button) return;
    const flowerName = button.dataset.addDecisionFocus;
    if (!await promptFocusItem(flowerName, "判斷流程")) return;
    button.textContent = "已加入重點";
    button.disabled = true;
  });

  renderQuestion();
}

function initRecordsPage() {
  renderNav("records.html");
  const focusList = document.querySelector("#focusList");
  const form = document.querySelector("#recordForm");
  const date = document.querySelector("#recordDate");
  const flower = document.querySelector("#recordFlower");
  const state = document.querySelector("#recordState");
  const reason = document.querySelector("#recordReason");
  const observation = document.querySelector("#recordObservation");
  const list = document.querySelector("#recordList");
  const clear = document.querySelector("#clearRecordForm");

  function reset() {
    form.reset();
    date.valueAsDate = new Date();
  }

  flower.insertAdjacentHTML("beforeend", flowerOptions());
  focusList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-focus]");
    if (!deleteButton) return;
    saveList(focusStorageKey, readList(focusStorageKey).filter((item) => item.id !== deleteButton.dataset.deleteFocus));
    renderFocusList();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const records = readList(recordStorageKey);
    records.unshift({
      id: String(Date.now()),
      date: date.value,
      flower: flower.value,
      state: state.value.trim(),
      reason: reason.value.trim(),
      observation: observation.value.trim(),
      completed: false
    });
    saveList(recordStorageKey, records);
    reset();
    renderRecordsList();
  });
  clear.addEventListener("click", reset);
  list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-record]");
    if (deleteButton) {
      saveList(recordStorageKey, readList(recordStorageKey).filter((record) => record.id !== deleteButton.dataset.deleteRecord));
      renderRecordsList();
      return;
    }

    const completeButton = event.target.closest("[data-complete-record]");
    if (completeButton) {
      const records = readList(recordStorageKey).map((record) => (
        record.id === completeButton.dataset.completeRecord
          ? { ...record, completed: !record.completed }
          : record
      ));
      saveList(recordStorageKey, records);
      renderRecordsList();
    }
  });
  reset();
  renderFocusList();
  renderRecordsList();
}

function renderRecordsList() {
  const list = document.querySelector("#recordList");
  if (!list) return;

  const records = readList(recordStorageKey);
  if (records.length === 0) {
    list.innerHTML = '<p class="empty-state">尚未新增紀錄。</p>';
    return;
  }

  list.innerHTML = records.map((record) => `
    <article class="record-item ${record.completed ? "completed" : ""}">
      <h3>${escapeHTML(record.flower)} ${record.completed ? '<span class="tag">已完成</span>' : ""}</h3>
      <p class="record-meta">${escapeHTML(record.date)}</p>
      <p><strong>目前狀態：</strong>${escapeHTML(record.state)}</p>
      ${record.reason ? `<p><strong>想到這朵花的原因：</strong>${escapeHTML(record.reason)}</p>` : ""}
      ${record.observation ? `<p><strong>後續觀察：</strong>${escapeHTML(record.observation)}</p>` : ""}
      <p class="record-actions">
        <button class="small-button" type="button" data-complete-record="${record.id}">${record.completed ? "取消完成" : "標記完成"}</button>
        <button class="small-button danger" type="button" data-delete-record="${record.id}">刪除此筆</button>
      </p>
    </article>
  `).join("");
}
