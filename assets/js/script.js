// Quản lý Nhạc nền (bg-music)
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

if (musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicIcon.innerText = "🔊";
            musicBtn.classList.add('music-playing');
        } else {
            music.pause();
            musicIcon.innerText = "🔇";
            musicBtn.classList.remove('music-playing');
        }
    });
}

// Xử lý nộp chiến tích (Dùng chung cho Dashboard)
async function sendReport(SCRIPT_URL) {
    const name = document.getElementById('name').value;
    const account = document.getElementById('account').value;
    const quantity = document.getElementById('quantity').value;
    const btn = document.getElementById('btn-send');

    if (!name || !account || !quantity) {
        alert("Cừu ơi, nhập đủ thông tin đã nhé!");
        return;
    }

    btn.innerText = "ĐANG GỬI...";
    btn.disabled = true;

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, account, quantity })
        });

        document.getElementById('report-box').classList.add('hidden');
        document.getElementById('success-msg').classList.remove('hidden');

        setTimeout(() => {
            document.getElementById('report-box').classList.remove('hidden');
            document.getElementById('success-msg').classList.add('hidden');
            document.getElementById('name').value = "";
            document.getElementById('account').value = "";
            document.getElementById('quantity').value = "";
            btn.innerText = "GỬI CHIẾN TÍCH";
            btn.disabled = false;
        }, 3000);
    } catch (e) {
        alert("Gửi thất bại, thử lại sau nhé!");
        btn.disabled = false;
    }
}

// Hiệu ứng hạt sao (Mở rộng nếu muốn web xịn hơn)
console.log("Captain Boy BOT System - Ready!");
