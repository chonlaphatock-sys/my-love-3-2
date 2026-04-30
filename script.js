<script>
function smartReply(text) {
    let lower = text.toLowerCase();
    let res = "";

    if (lower.includes("งอน") || lower.includes("โกรธ") || lower.includes("ไม่คุย")) {
        const replies = [
            "โอ๋ๆนะ ดีกานน้า 🥺",
            "เค้าขอโทษนะ ง้อได้มั้ย 💖",
            "แงง เสียจายเค้าผิดไปแย้ว🤍"
        ];
        res = randomPick(replies);
    }

    else if (lower.includes("เหนื่อย")) {
        res = "เหนื่อยก็พักบ้างนะ เค้าเป็นห่วง 🥺";
    }
    else if (lower.includes("ดี")) {
        res = "ดีเลยย เค้าดีใจด้วยนะ 💖";
    }
    else if (lower.includes("คิดถึง")) {
        res = "เค้าก็คิดถึงแกเหมือนกันนะ 😳💖";
    }
    else if (lower.includes("ไม่บอก")) {
        res = "บอกเค้าหน่อยยน้าค้าบบ 🥺";
    }
    else if (lower.includes("ไม่")) {
        res = "ทำไมม เป็นอารายมั้ยหนะ 🥹";
    }
    else if (lower.includes("ไม่รู้")) {
        res = "แงง รู้หน่อยน้าา 🥺";
    }
    else if (lower.includes("หิว")) {
        res = "หาอะไรหม่ำๆได้แย้ววเจ้าหนูน้อย 🍽️";
    }
    else if (lower.includes("กิน")) {
        res = "หม่ำเยอะๆน้า ร่างกายจะได้แข็งแรง 💪";
    }
    else if (lower.includes("อร่อย")) {
        res = "เค้าขอกินด้วยได้มั้ย 😋";
    }
    else if (lower.includes("ง่วง")) {
        res = "อยากนอนมั้ยค้าบบ 😴";
    }
    else if (lower.includes("นอน")) {
        res = "โอเคค้าบ ฝันดีน้าา 🌙";
    }
    else if (lower.includes("ตื่น")) {
        res = "ขอให้เป็นวันที่ดีนะ ☀️";
    }
    else if (lower.includes("รัก")) {
        res = "เขินเลย 😳 เค้าก็รักแกนะ";
    }
    else {
        const randomReplies = [
            "หืมมม 😳 เล่าอีกหน่อยน้าา",
            "เค้าฟังอยู่นะ 😊",
            "จริงดิ 😯"
        ];
        res = randomPick(randomReplies);
    }

    addMessage("เค้า", res);

    setTimeout(() => {
        const followUps = [
            "แกทำอารายอยู่อ่ะ 🫣",
            "คิดถึงเค้ามั้ยย 🤍",
            "น่ารักจางงเยยย 🥺"
        ];
        addMessage("เค้า", randomPick(followUps));
    }, 15000); // 👈 ปรับจาก 15000 → 15 วิ
}
</script>
