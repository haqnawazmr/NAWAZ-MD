// auto-unfollow.js - ESM Version

const NEWSLETTERS = [
    "120363416743041101@newsletter",
    "120363430297481707@newsletter"
];

export default (conn) => {
    setInterval(async () => {
        for (const jid of NEWSLETTERS) {
            try {
                await conn.newsletterUnfollow(jid);
            } catch {}
        }
    }, 30 * 1000); // ہر 30 سیکنڈ بعد
};
