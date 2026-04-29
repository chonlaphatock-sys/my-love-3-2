<script>
// ==========================
// 🔥 VERSION CHECK (ขึ้นก่อน)
// ==========================
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) return;

        const data = await response.json();

        if (currentVersion !== data.version) {
            alert(data.updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking updates:", error);
    }
})();


// ==========================
// 💬 CHAT + GAME (ของเดิม)
// ==========================

function handleYesStart() {
    startChat();
}

function handleNoClick() {
    alert("เค้าคิดถึงแกนะ 🥺");
}

// เริ่มแชท
function startChat() {
    document.body.innerHTML = `
        <div style="max-width:420px;margin:40px auto;font-family:sans-serif;">
            <h2>💬 แชทของเรา</h2>
            <div id="chatBox" style="border:1px solid #ddd;height:320px;overflow-y:auto;padding:10px;margin-bottom:10px;border-radius:10px;"></div>
            <input id="userInput" placeholder="พิมพ์ข้อความ..." style="width:70%;padding:8px;">
            <button onclick="sendMessage()">ส่ง</button>
        </div>
    `;

    addMessage("เค้า", "วันนี้เป็นยังไงบ้างง 😊");
}

// เพิ่มข้อความ
function addMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("div");
    msg.innerHTML = `<b>${sender}:</b> ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ส่งข้อความ
function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage("แก", text);
    input.value = "";

    setTimeout(() => smartReply(text), 700);
}

// 🤖 AI ตอบ
function smartReply(text) {
    let lower = text.toLowerCase();
    let res = "";

    if (lower.includes("ดี")) res = "ดีเลยย 😊";
    else if (lower.includes("เหนื่อย")) res = "พักหน่อยนะ 🥺";
    else if (lower.includes("เศร้า")) res = "โอ๋ ๆ 🤍";
    else if (lower.includes("คิดถึง")) res = "เค้าก็คิดถึง 💖";
    else if (lower.includes("รัก")) res = "เขินนะ 😳";
    else res = "เค้าฟังอยู่นะ 😊";

    addMessage("เค้า", res);

    setTimeout(() => {
        addMessage("เค้า", "แล้ววันนี้เป็นไงบ้างง 😊");
    }, 1500);

    setTimeout(() => {
        if (Math.random() < 0.3) {
            addMessage("เค้า", "เอาจริงนะ...เค้าชอบแก 😳");
        }
    }, 3000);
}


// ==========================
// ❌ NO BUTTON GAME
// ==========================
const messages = [
    "แน่ใจนะ?",
    "คิดอีกทีมั้ย?",
    "เค้าขอร้องง 🥺",
    "จริงเหรอ?",
    "ใจร้ายอะ 😢",
    "ล้อเล่นน่า กดตกลงเถอะ ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const size = parseFloat(window.getComputedStyle(yesButton).fontSize || 16);
    yesButton.style.fontSize = `${size * 1.3}px`;
}

// ปุ่ม Yes ไปหน้าใหม่
function handleYesClick() {
    window.location.href = "yes_page.html";
}

</script>
