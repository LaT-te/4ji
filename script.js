const words = [
  "悪戦苦闘", "暗中模索", "意気消沈", "意気阻喪", "意気投合", "異口同音", "以心伝心",
  "一意専心", "一言居士", "一期一会", "一言一句", "一網打尽", "一蓮托生", "一攫千金",
  "一騎当千", "一挙両得", "一心不乱", "一朝一夕", "一刀両断", "意味深長", "因果応報",
  "慇懃無礼", "隠忍自重", "有為転変", "右往左往", "海千山千", "紆余曲折", "雲散霧消",
  "傍目八目", "汚名返上", "温故知新", "臥薪嘗胆", "花鳥風月", "隔靴掻痒", "合従連衡",
  "我田引水", "画竜点睛", "閑話休題", "危機一髪", "奇想天外", "牛飲馬食", "旧態依然",
  "興味津々", "曲学阿世", "玉石混交", "虚心坦懐", "金科玉条", "空空漠漠", "空前絶後",
  "君子豹変", "捲土重来", "口頭試問", "荒唐無稽", "呉越同舟", "虎視眈々", "五臓六腑",
  "小春日和", "孤立無援", "才色兼備", "三寒四温", "自画自賛", "試行錯誤", "自業自得",
  "自縄自縛", "七転八起", "七難八苦", "質実剛健", "首尾一貫", "順風満帆", "初志貫徹",
  "支離滅裂", "人事不省", "神出鬼没", "針小棒大", "森羅万象", "晴耕雨読", "生殺与奪",
  "勢力伯仲", "清廉潔白", "切磋琢磨", "絶体絶命", "千載一遇", "戦々恐々", "前代未聞",
  "率先垂範", "泰然自若", "大胆不敵", "胆大心小", "単刀直入", "魑魅魍魎", "朝三暮四",
  "徹頭徹尾", "天衣無縫", "電光石火", "天真爛漫", "天変地異", "当意即妙", "内憂外患",
  "南船北馬", "二律背反", "破顔一笑", "白砂青松", "馬耳東風", "万物流転", "百花繚乱",
  "粉骨砕身", "暴虎馮河", "本末転倒", "無知蒙昧", "無念無想", "明鏡止水", "名誉挽回",
  "夜郎自大", "優勝劣敗", "融通無碍", "竜頭蛇尾", "理路整然", "和洋折衷", "曖昧模糊",
  "青息吐息", "唯唯諾諾", "不言実行", "不偏不党", "付和雷同", "抱腹絶倒", "無我夢中",
  "無味乾燥", "門外不出", "優柔不断", "有名無実", "勇猛果敢", "油断大敵", "用意周到",
  "利害得失", "離合集散", "臨機応変", "冷酷無情", "論功行賞", "不要不急", "再三再四",
  "三拝九拝", "四苦八苦", "四面楚歌", "自給自足", "自問自答", "縦横無尽", "主客転倒",
  "盛者必衰", "正真正銘", "深謀遠慮", "誠心誠意", "正々堂々", "千客万来", "前後不覚",
  "前人未到", "前途洋々", "千差万別", "千変万化", "大器晩成", "大同小異", "大願成就",
  "大器小用", "大義名分", "大言壮語", "多事多難", "多種多様", "昼夜兼行", "適材適所",
  "天下無双", "同工異曲", "同床異夢", "得意満面", "独立独歩", "独断専行", "二束三文",
  "日進月歩", "八方美人", "波瀾万丈", "半信半疑", "百発百中", "不眠不休", "平身低頭",
  "傍若無人", "難行苦行", "二者択一", "半死半生", "百戦錬磨", "表裏一体", "疲労困憊",
  "品行方正", "風光明媚", "不即不離", "不老不死", "平穏無事", "変幻自在", "暴飲暴食",
  "悠々自適", "羊頭狗肉", "立身出世", "粒々辛苦", "和気藹々", "老若男女", "満場一致",
  "満身創痍", "無為無策", "無病息災", "明々白々", "面目躍如", "唯我独尊"
];

const answer = words[Math.floor(Math.random() * words.length)];
const maxAttempts = 6;
let attempts = 0;

const outputDiv = document.getElementById("output");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const resultP = document.getElementById("result");
const toggleBtn = document.getElementById("toggleMode");

// 送信処理
function handleGuess() {
  const guess = guessInput.value.trim();

  // バリデーション：漢字4文字のみ
  if (!/^[一-龥]{4}$/.test(guess)) {
    alert("漢字4文字の四字熟語を入力してください。");
    return;
  }

  attempts++;
  const result = checkGuess(guess, answer);
  outputDiv.innerHTML += `<div>${result}</div>`;

  if (guess === answer) {
    resultP.textContent = `正解！「${answer}」でした！`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    guessInput.value = "";
  } else if (attempts >= maxAttempts) {
    resultP.textContent = `残念！正解は「${answer}」でした。`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    guessInput.value = "";
  } else {
    guessInput.value = "";
    guessInput.focus();
  }
}

// ボタンで送信
submitBtn.addEventListener("click", handleGuess);

// エンターキーでも送信
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleGuess();
  }
});

// モード切替
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Wordle風判定（緑・黄・灰）
function checkGuess(guess, answer) {
  let result = "";
  const answerArr = answer.split("");
  const guessArr = guess.split("");
  const answerUsed = [false, false, false, false];

  // 1. 緑（位置も文字も一致）を判定
  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === answerArr[i]) {
      result += `<span class="green">${guessArr[i]}</span>`;
      answerUsed[i] = true;
      guessArr[i] = null; // 使った文字はnullに
    } else {
      result += " "; // ダミー
    }
  }

  // 2. 黄・灰を判定
  let resultArr = result.split(" ");
  for (let i = 0; i < 4; i++) {
    if (resultArr[i]) continue; // 緑はスキップ
    const idx = answerArr.findIndex((a, j) => a === guess[i] && !answerUsed[j]);
    if (idx !== -1) {
      resultArr[i] = `<span class="yellow">${guess[i]}</span>`;
      answerUsed[idx] = true;
    } else {
      resultArr[i] = `<span class="gray">${guess[i]}</span>`;
    }
  }
  return resultArr.join("");
}
