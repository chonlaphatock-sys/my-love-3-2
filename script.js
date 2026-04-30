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
    let lower = text.toLowerCase();
    let res = "";

    if (lower.includes("งอน") || lower.includes("โกรธ") || lower.includes("ไม่คุย")) {
        res = randomPick([
            "โอ๋ๆนะ ดีกานน้า 🥺",
            "เค้าขอโทษนะ ง้อได้มั้ย 💖",
            "แงง เสียจายเค้าผิดไปแย้ว🤍"
        ]);
    }

    else if (lower.includes("เศร้า") || lower.includes("แย่")) {
        res = "โอ๋ ๆ นะ มากอดที 🤍 เค้าอยู่ตรงนี้นะ";
    }

    else if (lower.includes("เหนื่อย")) {
        res = "เหนื่อยก็พักบ้างนะ เค้าเป็นห่วง 🥺";
    }

    else if (lower.includes("ดี")) {
        res = "ดีเลยย เค้าดีใจด้วยนะ 💖 แล้วไปทำอะไรมา?";
    }

    else if (lower.includes("กิน") || lower.includes("ข้าว")) {
        res = randomPick([
            "กินอะไรมาา 😋",
            "อร่อยมั้ยย เค้าอยากกินด้วย 🤤"
        ]);
    }

    else if (lower.includes("หิว")) {
        res = "หาอะไรหม่ำๆได้แย้ววเจ้าหนูน้อย 🍽️";
    }

    else if (lower.includes("อร่อย")) {
        res = "เค้าขอกินด้วยได้มั้ย 😋";
    }

    else if (lower.includes("เรียน") || lower.includes("งาน")) {
        res = "สู้ ๆ นะ เก่งมาก 💪";
    }

    else if (lower.includes("ง่วง")) {
        res = "อยากนอนมั้ยค้าบบ 😴";
    }

    else if (lower.includes("นอน")) {
        res = "ฝันดีนะ 🌙";
    }

    else if (lower.includes("ตื่น")) {
        res = "ขอให้เป็นวันที่ดีนะ ☀️";
    }

    else if (lower.includes("คิดถึง")) {
        res = "เค้าก็คิดถึงแกเหมือนกันนะ 😳💖";
    }

    else if (lower.includes("รัก")) {
        res = "เขินเลย 😳 เค้าก็รักแกนะ";
    }

    else if (lower.includes("ทำอะไร")) {
        res = "กำลังคิดถึงแกอยู่นี่แหละ 😆";
    }

    else if (lower.includes("ไม่รู้")) {
        res = "แงง รู้หน่อยน้าา 🥺";
    }

    else if (lower.includes("ไม่บอก")) {
        res = "บอกเค้าหน่อยยน้าค้าบบ 🥺";
    }

    else if (lower.includes("ไม่")) {
        res = "ทำไมม เป็นอารายมั้ยหนะ 🥹";
    }

    else {
        res = randomPick([
            "หืมมม 😳 เล่าอีกหน่อยน้าา",
            "เค้าฟังอยู่นะ 😊",
            "จริงดิ 😯",
            "แล้วต่อยังไงง 🫣"
        ]);
    }

    addMessage("เค้า", res);

    setTimeout(() => {
        addMessage("เค้า", randomPick([
            "แกทำอารายอยู่อ่ะ 🫣",
            "คิดถึงเค้ามั้ยย 🤍",
            "น่ารักจางงเยยย 🥺"
        ]));
    }, 15000);
}
