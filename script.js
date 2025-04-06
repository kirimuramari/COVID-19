
//位置情報取得
function getIpInfo() {
    const script = document.createElement('script');
    script.src = 'https://ipinfo.io/?callback=handleIpInfo';
    document.body.appendChild(script);
}

function handleIpInfo(data) {
    console.log(data.ip);
    document.getElementById('ipAddress').textContent = data.ip;
    document.getElementById('regionName').textContent = data.region;

}

document.addEventListener('DOMContentLoaded', function () {
    // IP情報を取得開始
    getIpInfo();

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

    // カウントダウンを開始
    updateCountdown();

    //スマホ表示
    const deviceMessageSpan = document.querySelectorAll('.device-message');
    const isMobile = /(Mobile|Android|Tablet)/i.test(navigator.userAgent);
    deviceMessageSpan.forEach(element => {
        if (isMobile) {
            element.textContent = 'デバイス';
        }
    });
});



