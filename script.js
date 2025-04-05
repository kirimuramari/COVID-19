fetch('https://ip-api.com/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipAddress').textContent = data.query;
        document.getElementById('regionName').textContent = data.regionName;
    })
    .catch(error => {
        console.error('位置情報の取得に失敗しました:', error);
        document.getElementById('ipAddress').textContent = '取得できませんでした';
        document.getElementById('regionName').textContent = '取得できませんでした';

    })
// カウントダウン
let timeLeft = 120;
const countdownDisplay = document.getElementById('countdown');
function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000); // 1秒ごとに更新
    } else {
        countdownDisplay.textContent = '00:00';
        alert('カウントダウン終了！');
    }
}
//スマホ表示
const deviceMessageSpan = document.getElementsByClassName('device-message');
function updateDeviceMessage() {
    const isMobile = /iPhone|iPad|iPod|Android/.test(navigator.userAgent);
    if (isMobile) {
        deviceMessageSpan.textContent = 'デバイス';
    } else {
        deviceMessageSpan.textContent = 'コンピュータ';
    }
}
// カウントダウンを開始
updateCountdown();
// ページ読み込み時にメッセージを更新
updateDeviceMessage();
