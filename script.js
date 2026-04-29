(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "แน่ใจนะ?",
    "แน่ใจจริง ๆ ใช่มั้ย??",
    "มั่นใจแล้วเหรอ?",
    "คนดีขอร้องน้า...",
    "ลองคิดดูอีกทีนะ!",
    "ถ้าปฏิเสธ เค้าจะเสียใจมากเลยนะ...",
    "เค้าจะเศร้ามาก ๆ เลยนะ...",
    "เศร้ามากกกกกกเลยนะ...",
    "โอเค ๆ จะไม่ถามแล้วก็ได้...",
    "ล้อเล่นนน กดตกลงเถอะนะ ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function handleYesClick() {
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
            <input id="userInput" placeholder="พิมพ์ข้อความ..." style="width:70%;padding:8px;border-radius:5px;border:1px solid #ccc;">
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
    msg.style.margin = "6px 0";
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

// 🤖 ระบบตอบ
function smartReply(text) {
    let res = "";
    let lower = text.toLowerCase();

    // 💔 ระบบง้อ / หายงอน (ที่เพิ่มให้แล้ว)
    if (lower.includes("งอน") || lower.includes("โกรธ") || lower.includes("ไม่คุย")) {
        const forgiveReplies = [
            "โอ๋ ๆ นะ อย่าพึ่งงอนเค้าเลย 🥺",
            "เค้าขอโทษนะ ง้อได้มั้ย 💖",
            "อย่าโกรธเลย เค้าคิดถึงมากนะ 🤍",
            "งอนเค้าเหรอ มาให้กอดหน่อย 😳",
            "เค้าจะพยายามทำให้ดีขึ้นนะ 🥺"
        ];
        res = forgiveReplies[Math.floor(Math.random() * forgiveReplies.length)];
    }

    else if (lower.includes("ดี")) {
        res = "ดีเลยย เค้าดีใจด้วยนะ 💖 แล้วไปทำอะไรมา?";
    } else if (lower.includes("เหนื่อย")) {
        res = "เหนื่อยก็พักบ้างนะ เค้าเป็นห่วง 🥺";
    } else if (lower.includes("เศร้า") || lower.includes("แย่")) {
        res = "โอ๋ ๆ นะ มากอดที 🤍 เค้าอยู่ตรงนี้นะ";
    }

    else if (lower.includes("กิน") || lower.includes("ข้าว")) {
        res = "กินอะไรมาา 😋";
    } else if (lower.includes("เรียน") || lower.includes("งาน")) {
        res = "สู้ ๆ นะ เก่งมาก 💪";
    } else if (lower.includes("นอน")) {
        res = "ฝันดีนะ 😴";
    }

    else if (lower.includes("คิดถึง")) {
        res = "เค้าก็คิดถึงแกเหมือนกันนะ 😳💖";
    } else if (lower.includes("รัก")) {
        res = "เขินเลย 😳 เค้าก็รักแกนะ";
    }

    else if (lower.includes("ทำอะไร")) {
        res = "กำลังคิดถึงแกอยู่นี่แหละ 😆";
    }

    else {
        const randomReplies = [
            "หืมมม 😳 เล่าอีกหน่อยดิ",
            "เค้าฟังอยู่นะ 😊",
            "จริงดิ 😯",
            "อยากรู้มากกว่านี้ 🥺",
            "แกน่ารักจัง 💖"
        ];
        res = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }

    addMessage("เค้า", res);

    setTimeout(() => {
        const followUps = [
            "แล้ววันนี้มีอะไรทำให้ยิ้มบ้างมั้ย 😊",
            "คิดถึงเค้าบ้างปะ 🤍",
            "อยากเจอกันมั้ย 🥺",
            "วันนี้เหนื่อยมั้ย เค้าเป็นห่วงนะ",
            "เค้าสำคัญกับแกมั้ย 💖",
            "หายงอนเค้ายัง 🥺"
        ];
        addMessage("เค้า", followUps[Math.floor(Math.random() * followUps.length)]);
    }, 2000);

    setTimeout(() => {
        if (Math.random() < 0.3) {
            const sorryReplies = [
                "เค้าขอโทษนะ อย่าหายไปเลย 🥺",
                "ง้อได้มั้ย เค้าคิดถึงมาก 💖",
                "เค้าจะพยายามทำให้ดีขึ้นนะ 🤍",
                "อย่าโกรธเค้าเลยนะ 😢",
                "กลับมาคุยกันนะ 🥺"
            ];
            addMessage("เค้า", sorryReplies[Math.floor(Math.random() * sorryReplies.length)]);
        }
    }, 4000);
}
