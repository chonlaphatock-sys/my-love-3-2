nction handleYesClick() {
// 🤖 ระบบตอบอัจฉริยะ

const loveTexts = [
    "เค้าชอบแกมากขึ้นทุกวันเลยนะ 😳",
    "ถึงเค้าจะทำตัวไม่ดีบ้าง แต่เค้าไม่เคยอยากหายไปจากแกเลย",
    "อยู่กับแกแล้วมันสบายใจแปลก ๆ 😊",
    "เค้าอาจไม่ดีพอ แต่เค้าจะพยายามเพื่อแกนะ",
    "ขอบคุณที่ยังอยู่คุยกับเค้านะ 💖"
];
// =========================
function smartReply(text) {
    let res = "";
    let lower = text.trim().toLowerCase();

    // อารมณ์
    if (lower.includes("ดี")) {
        res = "ดีเลยย เค้าดีใจด้วยนะ 💖 แล้วไปทำอะไรมา?";
    } 
    else if (lower.includes("เหนื่อย")) {
        res = "เหนื่อยก็พักบ้างนะ เค้าเป็นห่วง 🥺";
    } 
    else if (lower.includes("เศร้า") || lower.includes("แย่")) {
        res = "โอ๋ ๆ นะ มากอดที 🤍 เค้าอยู่ตรงนี้นะ";
    }

    // กิจกรรม
    else if (lower.includes("กิน") || lower.includes("ข้าว")) {
        res = "กินอะไรมาา 😋 น่ากินมั้ยอะ";
    } 
    else if (lower.includes("เรียน") || lower.includes("งาน")) {
        res = "เก่งมากเลยนะ สู้ ๆ 💪 เค้าคอยเป็นกำลังใจให้";
    } 
    else if (lower.includes("นอน")) {
        res = "ง่วงแล้วหรอ 😴 ฝันถึงเค้าด้วยนะ";
    }

    // ความรู้สึก
    else if (lower.includes("คิดถึง")) {
        res = "เค้าก็คิดถึงแกเหมือนกันนะ 😳💖";
    } 
    else if (lower.includes("รัก")) {
        res = "พูดแบบนี้เขินนะ 😳 เค้าก็รักแกนะ";
    }

    // คำถาม
    else if (lower.includes("ทำอะไร")) {
        res = "กำลังคิดถึงแกอยู่นี่แหละ 😆";
    }

    // fallback
    else {
        const randomReplies = [
            "หืมมม 😳 เล่าอีกหน่อยดิ",
            "เค้าฟังอยู่นะ 😊",
            "แล้วต่ออะ?",
            "จริงดิ 😯",
            "อยากรู้มากกว่านี้อะ 🥺",
            "แกน่ารักจัง 💖"
        ];
        res = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }

    addMessage("เค้า", res);

    // 🔥 follow up
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

    // 💖 มุกพิเศษ
    setTimeout(() => {
        if (Math.random() < 0.3) {
            addMessage("เค้า", "เอาจริงนะ...เค้าชอบแกอะ 😳");
        }
    }, 4000);
}
