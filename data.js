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

const bodyMapRegions = [
  {
    id: "neck",
    label: "頸部",
    description: "第七節頸椎附近。適合放入和頸部、肩頸連結相關的皮膚反應區。",
    flowers: []
  },
  {
    id: "upper-chest",
    label: "上胸背部",
    description: "肩線到胸口上方的區域。之後可補入對應花精與定位方式。",
    flowers: []
  },
  {
    id: "middle-chest",
    label: "胸背中段",
    description: "胸口、肋骨中段附近。之後可補入對應花精與定位方式。",
    flowers: []
  },
  {
    id: "upper-abdomen",
    label: "上腹區",
    description: "肋骨下方到肚臍上方。之後可補入對應花精與定位方式。",
    flowers: []
  },
  {
    id: "lower-abdomen",
    label: "下腹區",
    description: "截圖資料提到 Agrimony / 龍芽草位於下腹。此區先作為已知範例。",
    flowers: ["龍芽草"]
  },
  {
    id: "pelvis",
    label: "骨盆區",
    description: "骨盆與鼠蹊周圍。之後可補入對應花精與定位方式。",
    flowers: []
  },
  {
    id: "left-side",
    label: "左側身體",
    description: "以觀看者自身角度判斷左側。之後可補入左側相關花精。",
    flowers: []
  },
  {
    id: "right-side",
    label: "右側身體",
    description: "以觀看者自身角度判斷右側。之後可補入右側相關花精。",
    flowers: []
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

function renderNav(activeFile) {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const navGroups = [
    { label: "總覽", links: [["巴赫花精整理筆記.html", "首頁總覽"]] },
    { label: "分類系統", links: [["categories.html", "分類入口"]] },
    { label: "花精大全", links: [["flowers.html", "總表查詢"], ["comparison.html", "容易混淆"]] },
    { label: "個人", links: [["decision.html", "判斷"], ["records.html", "紀錄"]] }
  ];
  const links = navGroups.flatMap((group) => group.links);
  const activeLabel = links.find(([href]) => href === activeFile)?.[1] || "筆記";

  if (!document.querySelector(".app-topbar")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <header class="app-topbar">
        <button class="icon-button" type="button" id="openMenu" aria-label="開啟分頁選單">☰</button>
        <a class="brand-mark" href="巴赫花精整理筆記.html">
          <span>新巴赫花精</span>
          <small>Bach Flower Notes</small>
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
              <details class="nav-group" ${groupActive ? "open" : ""}>
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
  } else {
    document.querySelectorAll(".nav-direct-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeFile);
    });
    document.querySelectorAll(".nav-group").forEach((group) => {
      const isActiveGroup = Array.from(group.querySelectorAll("a")).some((link) => link.getAttribute("href") === activeFile);
      group.open = isActiveGroup;
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

  const sortMode = document.querySelector("#focusSort")?.value || "manual";
  const items = readList(focusStorageKey).slice();
  if (sortMode === "match") {
    items.sort((a, b) => Number(b.match || 0) - Number(a.match || 0));
  } else if (sortMode === "newest") {
    items.sort((a, b) => Number(b.createdAt || b.id || 0) - Number(a.createdAt || a.id || 0));
  }
  if (items.length === 0) {
    focusList.innerHTML = '<p class="empty-state">尚未收藏花精。</p>';
    return;
  }

  focusList.innerHTML = items.map((item, index) => {
    const flower = findFlower(item.flower);
    if (!flower) return "";

    return `
      <article class="focus-card" draggable="true" data-focus-id="${item.id}">
        <img class="flower-image" src="${escapeHTML(flower.image)}" alt="${escapeHTML(flower.imageAlt)}" loading="lazy">
        <div class="focus-card-header">
          <h3>${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
          <span class="drag-handle" aria-hidden="true">拖曳</span>
        </div>
        <span class="tag">${escapeHTML(flower.category)}</span>
        ${item.reason ? `<p><strong>自身情況：</strong>${escapeHTML(item.reason)}</p>` : ""}
        ${item.match ? `<p><strong>匹配程度：</strong>${escapeHTML(item.match)} / 5</p>` : ""}
        <p><strong>負面特質：</strong>${escapeHTML(flower.negative)}</p>
        <p><strong>正面方向：</strong>${escapeHTML(flower.positive)}</p>
        <p class="record-actions">
          <button class="small-button" type="button" data-move-focus="${item.id}" data-direction="-1" ${index === 0 || sortMode !== "manual" ? "disabled" : ""}>前移</button>
          <button class="small-button" type="button" data-move-focus="${item.id}" data-direction="1" ${index === items.length - 1 || sortMode !== "manual" ? "disabled" : ""}>後移</button>
          <button class="small-button danger" type="button" data-delete-focus="${item.id}">移除</button>
        </p>
      </article>
    `;
  }).join("");
}

function moveFocusItem(id, direction) {
  const items = readList(focusStorageKey);
  const currentIndex = items.findIndex((item) => item.id === id);
  if (currentIndex < 0) return;

  const targetIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
  if (targetIndex === currentIndex) return;

  const [item] = items.splice(currentIndex, 1);
  items.splice(targetIndex, 0, item);
  saveList(focusStorageKey, items);
  renderFocusList();
}

function reorderFocusItem(draggedId, targetId, placement = "before") {
  if (!draggedId || !targetId || draggedId === targetId) return;

  const items = readList(focusStorageKey);
  const draggedIndex = items.findIndex((item) => item.id === draggedId);
  if (draggedIndex < 0) return;

  const [item] = items.splice(draggedIndex, 1);
  const targetIndex = items.findIndex((entry) => entry.id === targetId);
  if (targetIndex < 0) return;

  const insertIndex = placement === "after" ? targetIndex + 1 : targetIndex;
  items.splice(insertIndex, 0, item);
  saveList(focusStorageKey, items);
  renderFocusList();
}

function moveFocusToEnd(draggedId) {
  const items = readList(focusStorageKey);
  const draggedIndex = items.findIndex((item) => item.id === draggedId);
  if (draggedIndex < 0 || draggedIndex === items.length - 1) return;

  const [item] = items.splice(draggedIndex, 1);
  items.push(item);
  saveList(focusStorageKey, items);
  renderFocusList();
}

function getFocusDropPlacement(event, card) {
  const rect = card.getBoundingClientRect();
  const isRightHalf = event.clientX > rect.left + rect.width / 2;
  const isBottomThird = event.clientY > rect.top + rect.height * 0.66;
  return isRightHalf || isBottomThird ? "after" : "before";
}

function clearFocusDropState() {
  document.querySelectorAll(".focus-card.is-dragging, .focus-card.is-drop-target-before, .focus-card.is-drop-target-after").forEach((card) => {
    card.classList.remove("is-dragging", "is-drop-target-before", "is-drop-target-after");
  });
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

function addFocusItem(flowerName, reason = "", match = "") {
  const flower = findFlower(flowerName);
  if (!flower) return;

  const items = readList(focusStorageKey);
  const existing = items.find((item) => item.flower === flowerName);
  if (existing) {
    existing.reason = reason || existing.reason;
    existing.match = match || existing.match;
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
  let draggedFocusId = null;

  if (select) select.insertAdjacentHTML("beforeend", flowerOptions());
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addFocusItem(select.value, reason.value);
      form.reset();
    });
  }
  if (!list) {
    renderFocusList();
    return;
  }
  list.addEventListener("click", (event) => {
    const moveButton = event.target.closest("[data-move-focus]");
    if (moveButton) {
      moveFocusItem(moveButton.dataset.moveFocus, Number(moveButton.dataset.direction));
      return;
    }

    const deleteButton = event.target.closest("[data-delete-focus]");
    if (!deleteButton) return;
    saveList(focusStorageKey, readList(focusStorageKey).filter((item) => item.id !== deleteButton.dataset.deleteFocus));
    renderFocusList();
  });
  list.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-focus-id]");
    if (!card) return;
    if (event.target.closest("button, input, select, textarea, a")) {
      event.preventDefault();
      return;
    }
    draggedFocusId = card.dataset.focusId;
    card.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedFocusId);
  });
  list.addEventListener("dragover", (event) => {
    const card = event.target.closest("[data-focus-id]");
    event.preventDefault();
    document.querySelectorAll(".focus-card.is-drop-target-before, .focus-card.is-drop-target-after").forEach((item) => {
      item.classList.remove("is-drop-target-before", "is-drop-target-after");
    });
    if (!card || card.dataset.focusId === draggedFocusId) return;
    card.classList.add(`is-drop-target-${getFocusDropPlacement(event, card)}`);
  });
  list.addEventListener("dragleave", (event) => {
    const card = event.target.closest("[data-focus-id]");
    if (card) card.classList.remove("is-drop-target-before", "is-drop-target-after");
  });
  list.addEventListener("drop", (event) => {
    const card = event.target.closest("[data-focus-id]");
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain") || draggedFocusId;
    if (card) {
      reorderFocusItem(draggedId, card.dataset.focusId, getFocusDropPlacement(event, card));
    } else {
      moveFocusToEnd(draggedId);
    }
    draggedFocusId = null;
    clearFocusDropState();
  });
  list.addEventListener("dragend", () => {
    draggedFocusId = null;
    clearFocusDropState();
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
        <dl>
          <div><dt>負面特質 / 狀態</dt><dd>${flower.negative}</dd></div>
          <div><dt>正面頻率 / 方向</dt><dd>${flower.positive}</dd></div>
        </dl>
        <p><button class="small-button" type="button" data-add-focus="${flower.name}">${isFocused ? "更新個人紀錄" : "加入個人紀錄"}</button></p>
      </article>
    `;
    }).join("");
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
    const button = event.target.closest("[data-add-focus]");
    if (!button) return;
    openFocusDialog(button.dataset.addFocus);
  });
  focusDialogMatch.addEventListener("input", () => {
    focusDialogMatchValue.textContent = focusDialogMatch.value;
  });
  closeFocusDialog.addEventListener("click", hideFocusDialog);
  focusDialog.addEventListener("click", (event) => {
    if (event.target === focusDialog) hideFocusDialog();
  });
  focusDialogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addFocusItem(focusDialogFlower.value, focusDialogNote.value, focusDialogMatch.value);
    hideFocusDialog();
    render();
  });
  render();
}

function initBodyMapPage() {
  renderNav("body-map.html");
  const regionButtons = document.querySelectorAll("[data-region]");
  const title = document.querySelector("#bodyMapTitle");
  const description = document.querySelector("#bodyMapDescription");
  const remedyList = document.querySelector("#bodyMapRemedies");

  function render(regionId) {
    const region = bodyMapRegions.find((item) => item.id === regionId) || bodyMapRegions[0];
    regionButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.region === region.id);
      button.setAttribute("aria-pressed", button.dataset.region === region.id ? "true" : "false");
    });

    title.textContent = region.label;
    description.textContent = region.description;

    if (region.flowers.length === 0) {
      remedyList.innerHTML = '<p class="empty-state">這個區域的對應花精尚未補入。之後提供更多身體地圖資料時，可以直接加進這裡。</p>';
      return;
    }

    remedyList.innerHTML = region.flowers.map((flowerName) => {
      const flower = findFlower(flowerName);
      if (!flower) return "";
      return `
        <article class="body-remedy-card">
          <img class="flower-image" src="${escapeHTML(flower.image)}" alt="${escapeHTML(flower.imageAlt)}" loading="lazy">
          <div>
            <h3>${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
            <span class="tag">${escapeHTML(flower.category)}</span>
            <p><strong>負面特質：</strong>${escapeHTML(flower.negative)}</p>
            <p><strong>正面方向：</strong>${escapeHTML(flower.positive)}</p>
            <p><button class="small-button" type="button" data-add-focus="${escapeHTML(flower.name)}">加入個人紀錄</button></p>
          </div>
        </article>
      `;
    }).join("");
  }

  document.querySelector("#bodyMapPanel").addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-focus]");
    if (!addButton) return;
    addFocusItem(addButton.dataset.addFocus);
    addButton.textContent = "已加入個人紀錄";
    addButton.disabled = true;
  });

  regionButtons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.region));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      render(button.dataset.region);
    });
  });

  render("lower-abdomen");
}

function initDecisionPage() {
  renderNav("decision.html");
  const buttons = document.querySelectorAll("[data-decision-category]");
  const result = document.querySelector("#decisionResult");

  function render(category) {
    const matched = flowers.filter((flower) => flower.category === category);
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.decisionCategory === category);
    });
    result.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Possible remedies</p>
        <h2>${escapeHTML(category)}</h2>
        <p>以下是這個狀態分類下可以先查看的花精。請再依自己的實際狀態確認，不要只靠分類直接決定。</p>
      </div>
      <div class="decision-card-grid">
        ${matched.map((flower) => `
          <article class="decision-card">
            <h3>${escapeHTML(flower.name)} <span class="english">${escapeHTML(flower.english)}</span></h3>
            <p><strong>負面特質：</strong>${escapeHTML(flower.negative)}</p>
            <p><strong>正面方向：</strong>${escapeHTML(flower.positive)}</p>
            <button class="small-button" type="button" data-add-decision-focus="${escapeHTML(flower.name)}">加入個人紀錄</button>
          </article>
        `).join("")}
      </div>
    `;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.decisionCategory));
  });

  result.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-decision-focus]");
    if (!button) return;
    const flowerName = button.dataset.addDecisionFocus;
    const ok = window.confirm(`要把「${flowerName}」加入個人紀錄嗎？`);
    if (!ok) return;
    addFocusItem(flowerName, "由判斷流程加入，之後可在個人紀錄補充備註。", "3");
    button.textContent = "已加入個人紀錄";
    button.disabled = true;
  });

  render("恐懼");
}

function initRecordsPage() {
  renderNav("records.html");
  const focusSort = document.querySelector("#focusSort");
  const focusList = document.querySelector("#focusList");
  const form = document.querySelector("#recordForm");
  const date = document.querySelector("#recordDate");
  const flower = document.querySelector("#recordFlower");
  const state = document.querySelector("#recordState");
  const reason = document.querySelector("#recordReason");
  const observation = document.querySelector("#recordObservation");
  const list = document.querySelector("#recordList");
  const clear = document.querySelector("#clearRecordForm");
  let draggedFocusId = null;

  function reset() {
    form.reset();
    date.valueAsDate = new Date();
  }

  flower.insertAdjacentHTML("beforeend", flowerOptions());
  focusSort.addEventListener("change", renderFocusList);
  focusList.addEventListener("click", (event) => {
    const moveButton = event.target.closest("[data-move-focus]");
    if (moveButton) {
      moveFocusItem(moveButton.dataset.moveFocus, Number(moveButton.dataset.direction));
      return;
    }

    const deleteButton = event.target.closest("[data-delete-focus]");
    if (!deleteButton) return;
    saveList(focusStorageKey, readList(focusStorageKey).filter((item) => item.id !== deleteButton.dataset.deleteFocus));
    renderFocusList();
  });
  focusList.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-focus-id]");
    if (!card) return;
    if (event.target.closest("button, input, select, textarea, a")) {
      event.preventDefault();
      return;
    }
    draggedFocusId = card.dataset.focusId;
    card.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedFocusId);
  });
  focusList.addEventListener("dragover", (event) => {
    const card = event.target.closest("[data-focus-id]");
    event.preventDefault();
    document.querySelectorAll(".focus-card.is-drop-target-before, .focus-card.is-drop-target-after").forEach((item) => {
      item.classList.remove("is-drop-target-before", "is-drop-target-after");
    });
    if (!card || card.dataset.focusId === draggedFocusId) return;
    card.classList.add(`is-drop-target-${getFocusDropPlacement(event, card)}`);
  });
  focusList.addEventListener("drop", (event) => {
    const card = event.target.closest("[data-focus-id]");
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain") || draggedFocusId;
    if (card) {
      reorderFocusItem(draggedId, card.dataset.focusId, getFocusDropPlacement(event, card));
    } else {
      moveFocusToEnd(draggedId);
    }
    draggedFocusId = null;
    clearFocusDropState();
  });
  focusList.addEventListener("dragend", () => {
    draggedFocusId = null;
    clearFocusDropState();
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
