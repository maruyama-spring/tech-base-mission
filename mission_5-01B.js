document.getElementById("btn").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.text())   // ← JSONを文字列として取得
    .then(text => {
      console.log(text); // コンソールで確認

      // 表示用 <pre> に整形して出力
      const result = document.getElementById("result");
      result.textContent = text;         // JSON文字列をそのまま表示
    })
    .catch(error => {
      console.error("エラー:", error);
    });
});