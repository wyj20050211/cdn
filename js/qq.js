var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
var a = document.getElementById("qq");
if (isMobile) {
    a.href = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=594808108&card_type=person&source=sharecard";
} else {
    a.href = "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=594808108";
}