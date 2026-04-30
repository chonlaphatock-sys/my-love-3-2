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

    if (lower.includes("ดี")) {
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
            "คิดถึงเค้าบ้างปะ 😏",
            "อยากเจอกันมั้ย 🥺",
            "วันนี้เหนื่อยมั้ย เค้าเป็นห่วงนะ",
            "เค้าสำคัญกับแกมั้ย 💖"
        ];
        addMessage("เค้า", followUps[Math.floor(Math.random() * followUps.length)]);
    }, 2000);

    setTimeout(() => {
        if (Math.random() < 0.3) {
            addMessage("เค้า", "เอาจริงนะ...เค้าชอบแกอะ 😳");
        }
    }, 4000);
}
