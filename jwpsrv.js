!function() {
    var n = {
        UNKNOWN: 999,
        IAB: 0
    }
      , o = {
        noBid: 0,
        bid: 1,
        timeout: 2,
        invalid: 3,
        abort: 4,
        error: 5
    }
      , B = {
        numCompanions: -1,
        podCount: 0,
        podIndex: 0,
        linear: -1,
        vastVersion: -1,
        adSystem: null,
        adCreativeType: null,
        adposition: -1,
        tagdomain: null,
        position: void 0,
        previousQuartile: 0,
        duration: void 0,
        witem: 1,
        wcount: 1,
        preload: void 0,
        adMediaFileURL: void 0,
        description: null,
        creativeAdId: null,
        creativeId: null,
        adTitle: null,
        adVastId: null,
        jwpseg: void 0,
        placement: void 0,
        timeForVPBCache: null,
        advertiser: null,
        advertiserId: null
    }
      , d = {
        consecutiveVisibleSeconds: 0,
        maxConsecutiveVisibleSeconds: 0,
        totalVisibleSeconds: 0
    }
      , r = /^IAB(\d+(?:-\d+)?)$/
      , l = {
        adRequest: "ar",
        adImpression: "i",
        adSkipped: "s",
        adError: "ae",
        adBidResponse: "abr",
        adClick: "c",
        adLoaded: "al",
        adViewableImpression: "vi",
        adBidRequest: "abq"
    }
      , c = ["adStarted", "adMeta"]
      , u = ["adTime", "adClick"]
      , a = ["adBreakStart", "adMeta", "adImpression", "adViewableImpression", "adPlay", "adPause", "adTime", "adCompanions", "adClick", "adSkipped", "adComplete", "adError"]
      , t = {
        dfp: 0,
        jwp: 1,
        jwpdfp: 2,
        jwpspotx: 3
    }
      , s = ["id", "type", "pubid", "pubId", "member", "invCode", "nid", "placementId", "networkId", "siteId", "pageId", "formatId", "result", "code", "winner", "priceInCents", "grossPriceInCents", "timeForBidResponse", "requestId", "cacheKey", "dealId", "tagid", "delDomain", "publisherId", "zoneId"]
      , i = /[?&]iu=([^&]+)/
      , p = "error"
      , f = "s"
      , m = "ana"
      , y = "t"
      , v = "prp"
      , g = "vsh"
      , b = "paf"
      , h = "bs"
      , k = "fs"
      , D = "fc"
      , w = "aa"
      , I = "gab"
      , S = "xapi"
      , T = "cpt"
      , P = "ia"
      , V = "ph"
      , E = "n"
      , C = "e"
      , A = "i"
      , x = "as"
      , j = "ar"
      , R = "avp"
      , M = "avg"
      , G = "ers"
      , L = "err"
      , O = {
        events: {
            "aa-jwplayer6": {
                code: "aa",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fsid", "fsr", "ft", "mu", "os", "ovta", "psd"],
                filters: ["missingFeedID"],
                pingDestination: "main"
            },
            "abr-clienta": {
                code: "abr",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal", "headerBidding"],
                pingSpecificParameters: ["apr", "tfvc"],
                pingDestination: "main"
            },
            "abq-clienta": {
                code: "abq",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal", "headerBidding"],
                pingSpecificParameters: ["apr", "bpv", "ipv", "rtp", "tpi", "vsrid"],
                pingDestination: "main"
            },
            "ae-clienta": {
                code: "ae",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal", "headerBidding"],
                pingSpecificParameters: ["ad", "add", "adid", "adt", "adv", "advi", "aec", "aem", "amu", "apr", "apt", "ato", "atu", "caid", "cid", "ct", "did", "du", "ec", "fed", "iu", "mfc", "tal", "tpi", "uav"],
                pingDestination: "main"
            },
            "al-clienta": {
                code: "al",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["apr", "tal"],
                filters: ["missingAdScheduleID"],
                pingDestination: "main"
            },
            "ana-jwplayer6": {
                code: "ana",
                bucket: "jwplayer6",
                parameterGroups: ["sessionParamsOnly"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "ar-clienta": {
                code: "ar",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["apr", "apt", "fed", "ipv", "rtp", "tpi", "vsrid"],
                pingDestination: "main"
            },
            "avg-clienta": {
                code: "avg",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingDestination: "main"
            },
            "avp-clienta": {
                code: "avp",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingDestination: "main"
            },
            "bi-clienta": {
                code: "bi",
                bucket: "clienta",
                parameterGroups: [],
                pingSpecificParameters: ["aid"],
                pingDestination: "main"
            },
            "bs-jwplayer6": {
                code: "bs",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["fed", "fid", "ft", "mu", "os"],
                filters: ["missingFeedID"],
                pingDestination: "main"
            },
            "c-clienta": {
                code: "c",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["ad", "adc", "al", "ct", "du", "qt", "srf", "tw", "vv", "uav"],
                pingDestination: "main"
            },
            "cpe-jwplayer6": {
                code: "cpe",
                bucket: "jwplayer6",
                parameterGroups: [],
                pingSpecificParameters: ["aid", "id", "fed", "mu", "pss"],
                pingDestination: "external"
            },
            "cpt-jwplayer6": {
                code: "cpt",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingDestination: "main"
            },
            "e-jwplayer6": {
                code: "e",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["ab", "bpv", "cae", "cb", "cdid", "cme", "dd", "dnt", "dpl", "fed", "flc", "fv", "ga", "ipv", "lng", "mk", "mu", "opu", "pad", "pbc", "pd", "pdr", "plng", "plt", "pni", "po", "pogt", "ptid", "pvt", "rf", "sn", "sp", "srf", "st", "vrt"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "err-error": {
                code: "err",
                bucket: "error",
                parameterGroups: ["global"],
                pingSpecificParameters: ["cme", "erc", "mu", "pogt", "strt"],
                pingDestination: "main"
            },
            "ers-error": {
                code: "ers",
                bucket: "error",
                parameterGroups: ["global"],
                pingSpecificParameters: ["cme", "erc", "flc", "pogt"],
                pingDestination: "main"
            },
            "fc-jwplayer6": {
                code: "fc",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fpg", "fsid", "fsr", "ft", "mu", "oc", "os", "ovta", "psd", "srf", "stid"],
                filters: ["missingFeedID"],
                pingDestination: "main"
            },
            "fs-jwplayer6": {
                code: "fs",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["fed", "fid", "fin", "fis", "fns", "fpc", "fpg", "fsid", "fsr", "ft", "mu", "os", "ovt", "rat", "srf", "tis", "vfi"],
                filters: ["missingFeedID"],
                pingDestination: "main"
            },
            "gab-jwplayer6": {
                code: "gab",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abid", "abpr", "apid", "ati", "cst", "erc", "fls", "lae", "ovta", "pbs", "pcp", "pdt", "prs", "prsd", "pvta", "srf", "strt", "ti", "tps", "ubc", "vti"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "i-clienta": {
                code: "i",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal", "headerBidding"],
                pingSpecificParameters: ["ad", "adc", "add", "adid", "adv", "advi", "apr", "apt", "adt", "al", "amu", "atu", "caid", "cid", "ct", "did", "du", "fed", "fid", "fsm", "iu", "mfc", "psd", "strt", "tal", "vv", "uav"],
                pingDestination: "main"
            },
            "ia-jwplayer6": {
                code: "ia",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["fid", "iacid", "iae", "iaeid", "iaelid", "iaeln", "iapid", "iapn", "iapv", "iat"],
                pingDestination: "main"
            },
            "pa-jwplayer6": {
                code: "pa",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["ab", "abid", "abm", "apid", "bwe", "cme", "dnt", "dpl", "fed", "fid", "flc", "lng", "mu", "opu", "pd", "pdr", "plng", "pni", "pogt", "pr", "psd", "pvta", "sbr", "tb", "vd", "vh", "vw"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "paf-error": {
                code: "paf",
                bucket: "error",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abm", "bwe", "erc", "fed", "fid", "mu", "pd", "pr", "psd", "sbr", "tb", "vd", "vh", "vw"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "pe-placement": {
                code: "pe",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingSpecificParameters: ["i", "idp", "pei"],
                pingDestination: "placement"
            },
            "pea-placement": {
                code: "pea",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingSpecificParameters: ["i", "idp", "pei"],
                pingDestination: "placement"
            },
            "pef-placement": {
                code: "pef",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingSpecificParameters: ["eid", "idp", "pei"],
                pingDestination: "placement"
            },
            "pes-placement": {
                code: "pes",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingSpecificParameters: ["eid", "idp", "pei", "so"],
                pingDestination: "placement"
            },
            "pll-placement": {
                code: "pll",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingDestination: "placement"
            },
            "pt-placement": {
                code: "pt",
                bucket: "placement",
                parameterGroups: ["placement"],
                pingSpecificParameters: ["eid", "idp", "pei", "tid"],
                pingDestination: "placement"
            },
            "prp-jwplayer6": {
                code: "prp",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["tc"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "pru-jwplayer6": {
                code: "pru",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["ppr"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "ret-jwplayer6": {
                code: "ret",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abm", "ati", "avc", "bwe", "cst", "etw", "fed", "fid", "fls", "fsm", "mu", "pbs", "pdt", "pr", "q", "sbr", "srf", "ubc", "vh", "vr", "vti", "vw"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "s-jwplayer6": {
                code: "s",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abid", "abm", "apid", "bpv", "bwe", "cae", "cct", "ch", "cst", "cdid", "dnt", "dpl", "drm", "fed", "ff", "fid", "fsm", "l", "lng", "mk", "mu", "opu", "pcp", "pd", "pdr", "pdt", "plng", "pni", "pr", "psd", "q", "qcr", "sbr", "sp", "srf", "strt", "tb", "tt", "vd", "vh", "vs", "vrt", "vr", "vw"],
                pingDestination: "main"
            },
            "s-clienta": {
                code: "s",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["ad", "adc", "al", "atps", "ct", "du", "qt", "tw", "vv", "uav"],
                pingDestination: "main"
            },
            "t-jwplayer6": {
                code: "t",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abm", "ati", "avc", "bwe", "cst", "dle", "fed", "fid", "fls", "fsm", "ltc", "mu", "pbs", "pcp", "pdt", "pw", "q", "sbr", "ti", "ubi", "vh", "vr", "vti", "vw"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "v-clienta": {
                code: "v",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["ad", "adc", "adti", "adati", "advti", "al", "ct", "du", "fsm", "qt", "vv", "uav"],
                pingDestination: "main"
            },
            "vcae-clienta": {
                code: "vcae",
                bucket: "clienta",
                parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                pingDestination: "main"
            },
            "vci-clienta": {
                code: "vci",
                bucket: "clienta",
                parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                pingDestination: "main"
            },
            "vi-clienta": {
                code: "vi",
                bucket: "clienta",
                parameterGroups: ["global", "adGlobal"],
                pingSpecificParameters: ["fed"],
                pingDestination: "main"
            },
            "vqc-jwplayer6": {
                code: "vqc",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["abm", "avc", "bwe", "qcr", "sbr", "tb", "vw", "vh"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "vs-jwplayer6": {
                code: "vs",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["cvl", "sdt", "tvl", "vso"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "vsh-jwplayer6": {
                code: "vsh",
                bucket: "jwplayer6",
                parameterGroups: ["global"],
                pingSpecificParameters: ["pcp", "srf", "stg"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "main"
            },
            "xapi-jwplayer6": {
                code: "xapi",
                bucket: "jwplayer6",
                parameterGroups: ["sessionParamsOnly"],
                pingSpecificParameters: ["ed", "prs", "pid", "ph", "sdk", "sv", "xam", "xfmp"],
                filters: ["missingMediaOrExternalID"],
                pingDestination: "meta"
            }
        },
        paramGroups: {
            global: {
                members: ["abc", "abt", "aid", "amp", "ask", "at", "bun", "c", "ccp", "cp", "d", "eb", "ed", "eid", "emi", "i", "id", "idp", "jwac", "lid", "lsa", "mt", "om", "pbd", "pbr", "pei", "pgi", "ph", "pid", "pii", "pl", "plc", "pli", "pp", "ppm", "prc", "ps", "pss", "pt", "pu", "pv", "pyc", "s", "sdk", "so", "ss", "stc", "stpe", "sv", "t", "tul", "tv", "vb", "vi", "vl", "wd", "xav", "xid"],
                groupName: "global"
            },
            adGlobal: {
                members: ["ab", "abid", "abo", "adi", "apid", "awi", "awc", "p", "pc", "pi", "pr", "sko", "tmid", "vu"],
                groupName: "adGlobal"
            },
            adSessionParamsOnly: {
                members: ["abid", "apid"],
                groupName: "adSessionParamsOnly"
            },
            sessionParamsOnly: {
                members: ["aid", "emi", "id", "pli", "pv", "tv", "xav", "xid"],
                groupName: "sessionParamsOnly"
            },
            headerBidding: {
                members: ["afbb", "afbi", "afbp", "afbt", "afbw", "aml", "asxb", "asxi", "asxp", "asxt", "asxw", "flpc", "flpy", "frid", "hbec", "vpb", "vto"],
                groupName: "headerBidding"
            },
            placement: {
                members: ["aid", "lid", "om", "pgi", "plv", "pt", "pu", "tv"],
                groupName: "placement"
            }
        },
        parameters: {
            ad: {
                priority: 1
            },
            add: {
                priority: 2
            },
            adid: {
                priority: 1
            },
            adt: {
                priority: 1
            },
            adv: {
                priority: 1
            },
            advi: {
                priority: 1
            },
            aem: {
                priority: 1
            },
            amu: {
                priority: 2
            },
            atu: {
                priority: 1
            },
            caid: {
                priority: 1
            },
            cdid: {
                priority: 1
            },
            cid: {
                priority: 1
            },
            mu: {
                priority: 1
            },
            opu: {
                priority: 1
            },
            pt: {
                priority: 1
            },
            pu: {
                priority: 1
            },
            rf: {
                priority: 1
            },
            srf: {
                priority: 1
            },
            t: {
                priority: 1
            },
            tpi: {
                priority: 1
            },
            tul: {
                priority: 1
            },
            uav: {
                priority: 1
            },
            vu: {
                priority: 2
            }
        }
    };
    var N = Object.assign || function(e) {
        for (var a = arguments.length, t = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++)
            t[n - 1] = arguments[n];
        return t.reduce(function(e, a) {
            return t = e,
            (n = a) && Object.keys(n).forEach(function(e) {
                t[e] = n[e]
            }),
            t;
            var t, n
        }, e)
    }
    ;
    function q(e) {
        if (e) {
            if (/vast/.test(e))
                return 0;
            if (/googima/.test(e))
                return 1;
            if (/freewheel/.test(e))
                return 2;
            if (/dai/.test(e))
                return 3
        }
        return -1
    }
    function F(e) {
        return /^[a-zA-Z0-9]{8}$/.test(e)
    }
    function U(e) {
        var a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        if ("number" != typeof e)
            return null;
        var t = e / 1e3;
        return a ? Math.round(t) : t
    }
    function _(e, a) {
        return e + "-" + a
    }
    function Q(e, a) {
        return a.split(".").reduce(function(e, a) {
            return e ? e[a] : void 0
        }, e)
    }
    function z(e) {
        var a = {};
        for (var t in e)
            if ("object" == typeof e[t]) {
                var n = z(e[t]);
                for (var r in n)
                    n.hasOwnProperty(r) && (a[t + "." + r] = n[r])
            } else
                a[t] = e[t];
        return a
    }
    function K(e) {
        if (e)
            return e.version
    }
    function W(e) {
        for (var a = e.length, t = 0; t < e.length; t++) {
            var n = e.charCodeAt(t)
              , r = n;
            55296 <= n && n <= 56319 && t < e.length - 1 && (r = 1024 * (n - 55296) + e.charCodeAt(t + 1) - 56320 + 65536,
            t++),
            128 <= r && r <= 2047 ? a += 1 : 2048 <= r && r <= 65535 ? a += 2 : 65536 <= r && r <= 1114111 && (a += 2)
        }
        return a
    }
    var H = {
        sgB1CN8sEeW9HgpVuA4vVw: !1,
        "QHh6WglVEeWjwQp+lcGdIw": !0,
        "4lTGrhE9EeWepAp+lcGdIw": !0,
        "98DmWsGzEeSdAQ4AfQhyIQ": !0,
        "xNaEVFs+Eea6EAY3v_uBow": !0,
        KvvTdq_lEeSqTw4AfQhyIQ: !1
    }
      , $ = 1;
    function J(e, a) {
        var t, n, r, i, o, d, l, c;
        for (t = 3 & e.length,
        n = e.length - t,
        r = a,
        o = 3432918353,
        d = 461845907,
        c = 0; c < n; )
            l = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24,
            ++c,
            r = 27492 + (65535 & (i = 5 * (65535 & (r = (r ^= l = (65535 & (l = (l = (65535 & l) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
        switch (l = 0,
        t) {
        case 3:
            l ^= (255 & e.charCodeAt(c + 2)) << 16;
        case 2:
            l ^= (255 & e.charCodeAt(c + 1)) << 8;
        case 1:
            r ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(c))) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295
        }
        return r ^= e.length,
        r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295,
        r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295,
        (r ^= r >>> 16) >>> 0
    }
    function X(e) {
        return ee(e, "feedid")
    }
    function Y(e) {
        return ee(e, "feed_instance_id")
    }
    function Z(e) {
        return e ? e.pin_set_id : null
    }
    function ee(e, a) {
        return e ? (e.feedData || {})[a] || e[a] : null
    }
    function ae(e) {
        if (!e)
            return null;
        var a, t, n = e.mediaid;
        return F(n) ? n : (a = e.file,
        F(n = (t = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/.exec(a)) && 2 === t.length ? t[1] : null) ? n : null)
    }
    function te(e) {
        return e ? e.title : null
    }
    function ne(e) {
        return e ? !(!e.images || !e.images.length) && !!e.images.filter(function(e) {
            return e.type && e.type.match(/video/)
        }).length : null
    }
    function re(e, a) {
        var t = void 0;
        H[e.accountData.analyticsID] && (t = function(e, a) {
            var t = te(a);
            if (t)
                return function(e, a) {
                    e.meta.xidAlgorithmVersion = 1;
                    var t = J(a, $)
                      , n = J(a + a, $);
                    return "01_" + t + n
                }(e, t)
        }(e, a));
        var n = t || a.externalId;
        (e.playlistItemData.externalId = n) && !e.meta.xidAlgorithmVersion && (e.meta.xidAlgorithmVersion = 0)
    }
    var ie = "hidden"in document ? function() {
        return !document.hidden
    }
    : "webkitHidden"in document ? function() {
        return !document.webkitHidden
    }
    : function() {
        return !0
    }
    ;
    function oe(e, a) {
        var t = " " + a + " ";
        return 1 === e.nodeType && 0 <= (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t)
    }
    var de = 1
      , le = 2
      , ce = 3
      , ue = 4
      , se = 5
      , pe = 0;
    var fe = 4
      , me = {
        pro: 1,
        premium: 2,
        ads: 3,
        invalid: fe,
        enterprise: 6,
        trial: 7,
        platinum: 8,
        starter: 9,
        business: 10,
        developer: 11
    }
      , ve = {
        viewable: 2
    }
      , e = "DATA_EVENT_PLAY"
      , ge = "DATA_EVENT_META"
      , ye = "DATA_EVENT_LEVELS"
      , be = "DATA_EVENT_FIRST_FRAME"
      , he = 128
      , ke = ["auto", "initial choice"]
      , De = ["playlistItem", "playAttempt", "time", "adBreakEnd"]
      , we = 0
      , Ie = 20
      , Se = ge;
    function Te(e) {
        var a = e.getContainer().querySelector("video");
        return a && a.currentTime ? a.currentTime : e.getPosition()
    }
    function Pe(a) {
        try {
            return a.getPlaylistItem()
        } catch (e) {
            var t = a.getPlaylistIndex();
            return a.getConfig().playlist[t] || null
        }
    }
    function Ee(e) {
        if ("function" != typeof e.getProvider)
            return "";
        var a = e.getProvider();
        return a ? a.name : ""
    }
    var Ce = void 0;
    function Ae(e) {
        var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , t = e.getVisualQuality()
          , n = void 0;
        if (t && t.level) {
            var r = "string" == typeof t.mode ? "auto" === t.mode : null;
            n = {
                width: t.level.width,
                height: t.level.height,
                bitrate: U(t.level.bitrate),
                reason: t.reason,
                adaptiveBitrateMode: r
            }
        } else
            n = {
                width: null,
                height: null,
                bitrate: null,
                reason: null,
                adaptiveBitrateMode: null
            };
        return Ce && !a || (Ce = n),
        n
    }
    function xe(e) {
        var a = e.external.playerAPI
          , t = e.meta.playbackEvents
          , n = a.getDuration();
        if (n <= 0) {
            var r = t[Se];
            r && (n = r.duration)
        }
        return 0 | n
    }
    function je(e, a) {
        var t = e.playerData.startup;
        null === t.startupTime && null !== t.initialTime && (t.startupTime = 10 * Math.round((Date.now() - t.initialTime) / 10),
        t.dispatchEvent = a)
    }
    function Re(e) {
        var a = e.getConfig().setupConfig;
        if (a) {
            var i, o, d, l, t = window.jwplayer.defaults, n = N({}, t, a);
            return delete n.advertising,
            JSON.stringify(n, (i = n,
            o = [],
            d = [],
            l = 0,
            function(e, a) {
                if ("object" != typeof a)
                    return "function" == typeof a ? "__FUNCTION__" : a;
                if (null === a || a instanceof Date || a instanceof RegExp)
                    return a;
                if (Uint8Array && a instanceof Uint8Array) {
                    var t = "" + a;
                    return t = 40 < t.length ? t.substr(0, 40) : t,
                    "Uint8Array(" + a.length + ") [" + t + "]"
                }
                if (Array.isArray(a) && 100 < a.length)
                    return "Array(" + a.length + ")";
                if (a === i && 0 < l)
                    return "<parent object>";
                var n = o.indexOf(a);
                if (-1 !== n) {
                    var r = d[n];
                    if (r)
                        return r;
                    try {
                        JSON.stringify(a)
                    } catch (e) {
                        return d[n] = "__CIRCULAR__"
                    }
                    d[n] = a
                }
                return 1e4 < l++ ? "<complexity exceeded>" : (o.push(a),
                a)
            }
            ))
        }
    }
    var Be = [h, I];
    function Ve(e, a, t) {
        var n = e.external && e.external.playerAPI;
        if (n) {
            var r = n.getConfig();
            e.playerData.playerConfig = {
                visibility: r.visibility,
                bandwidthEstimate: r.bandwidthEstimate,
                floatingState: !!r.isFloating
            };
            var i, o, d, l = Pe(n) || {};
            e.playlistItemData.item = l,
            e.playlistItemData.mediaId = ae(l),
            e.playerData.playerSize = function(e) {
                var a = e.getConfig()
                  , t = a.containerWidth || e.getWidth()
                  , n = a.containerHeight || e.getHeight();
                if (/\d+%/.test(t)) {
                    var r = e.utils.bounds(e.getContainer());
                    t = r.width,
                    n = r.height
                }
                return t = 0 | Math.round(t),
                n = 0 | Math.round(n),
                /\d+%/.test(a.width || t) && a.aspectratio ? {
                    bucket: ue,
                    width: t,
                    height: n
                } : oe(e.getContainer(), "jw-flag-audio-player") ? {
                    bucket: se,
                    width: t,
                    height: n
                } : 0 === t ? {
                    bucket: pe,
                    width: t,
                    height: n
                } : t <= 320 ? {
                    bucket: de,
                    width: t,
                    height: n
                } : t <= 640 ? {
                    bucket: le,
                    width: t,
                    height: n
                } : {
                    bucket: ce,
                    width: t,
                    height: n
                }
            }(n),
            e.playlistItemData.duration = xe(e),
            e.meta.lastEvent = a,
            e.meta.lastBucket = t,
            e.playerData.visualQuality = Ae(n, "s" === a && "jwplayer6" === t),
            e.playerData.defaultPlaybackRate = r.defaultPlaybackRate,
            e.playerData.playbackMode = r.streamType,
            re(e, l),
            i = e,
            o = a,
            d = t,
            -1 === Be.indexOf(o) && (i.meta.eventPreAbandonment = _(o, d))
        }
    }
    var Me = {
        prs: function(e) {
            return e.meta.playerState
        },
        lae: function(e) {
            return e.meta.eventPreAbandonment
        },
        abpr: function(e) {
            return e.meta.playerRemoved
        },
        prsd: function(e) {
            var a = Date.now() - e.meta.playerStateDuration;
            return a <= 216e5 ? a : -1
        }
    }
      , Ge = {
        ab: function(e) {
            return e.configData.advertisingBlockType
        },
        abo: function(e) {
            return e.ads.adEventData.offset
        },
        adi: function(e) {
            return e.ads.adEventData.adId
        },
        apid: function(e) {
            return e.ads.adEventData.adPlayId
        },
        abid: function(e) {
            return e.ads.adEventData.adBreakId
        },
        awi: function(e) {
            return e.ads.adEventData.witem
        },
        awc: function(e) {
            return e.ads.adEventData.wcount
        },
        p: function(e) {
            return e.ads.adEventData.adposition
        },
        sko: function(e) {
            return e.ads.adEventData.skipoffset
        },
        vu: function(e) {
            return e.ads.adEventData.tagdomain
        },
        tmid: function(e) {
            return e.ads.adEventData.targetMediaId
        }
    }
      , Le = {
        cae: function(e) {
            return !!e.ads.advertisingConfig.companiondiv
        },
        ad: function(e) {
            return e.ads.adEventData.adSystem
        },
        adc: function(e) {
            var a = e.ads.adEventData
              , t = null;
            return Array.isArray(a.categories) && (t = a.categories.map(function(e) {
                var a = e.match(r);
                return a ? [n.IAB, a[1]].join("-") : n.UNKNOWN
            }).filter(function(e, a, t) {
                return t.indexOf(e) === a
            }).slice(0, 10).join(",") || null),
            t
        },
        al: function(e) {
            return e.ads.adEventData.linear
        },
        ct: function(e) {
            return e.ads.adEventData.adCreativeType
        },
        mfc: function(e) {
            return e.ads.adEventData.mediaFileCompliance
        },
        pc: function(e) {
            return e.ads.adEventData.podCount
        },
        pi: function(e) {
            return e.ads.adEventData.podIndex
        },
        tal: function(e) {
            return e.ads.adEventData.timeAdLoading
        },
        vv: function(e) {
            return e.ads.adEventData.vastVersion
        },
        uav: function(e) {
            return e.ads.adEventData.universalAdId
        },
        advti: function(e) {
            return e.ads.adPlaybackTracking.viewablePlayedSeconds
        },
        adati: function(e) {
            return e.ads.adPlaybackTracking.audiblePlayedSeconds
        },
        adti: function(e) {
            return e.ads.adPlaybackTracking.playedSeconds
        },
        atps: function(e) {
            return e.ads.watchedPastSkipPoint
        },
        du: function(e) {
            return e.ads.adEventData.duration
        },
        qt: function(e) {
            var a = e.meta.lastEvent;
            return "s" === a || "c" === a ? e.ads.adEventData.previousQuartile : e.ads.currentQuartile
        },
        tw: function(e) {
            return e.ads.adEventData.position
        },
        aec: function(e) {
            return e.ads.jwAdErrorCode
        },
        aem: function(e) {
            return e.ads.errorMessage
        },
        ato: function(e) {
            return e.ads.timeout
        },
        ec: function(e) {
            return e.playerData.lastErrorCode[e.meta.lastEvent]
        },
        atu: function(e) {
            var a = e.ads.adEventData.tagURL;
            return "string" == typeof a ? a.substr(0, 100) : void 0
        },
        tpi: function(e) {
            var a = e.ads.adEventData.jwpseg;
            return Array.isArray(a) ? a.join(",") : void 0
        },
        cid: function(e) {
            return e.ads.adEventData.creativeId
        },
        adt: function(e) {
            return e.ads.adEventData.adTitle
        },
        apr: function(e) {
            return e.ads.adEventData.preload
        },
        amu: function(e) {
            return e.ads.adEventData.adMediaFileURL
        },
        add: function(e) {
            return e.ads.adEventData.description
        },
        adid: function(e) {
            return e.ads.adEventData.adVastId
        },
        caid: function(e) {
            return e.ads.adEventData.creativeAdId
        },
        apt: function(e) {
            return e.ads.adEventData.placement
        },
        tfvc: function(e) {
            return e.ads.adEventData.timeForVPBCache
        },
        adv: function(e) {
            return e.ads.adEventData.advertiser
        },
        advi: function(e) {
            return e.ads.adEventData.advertiserId
        },
        afbb: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.result")
        },
        afbi: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.id")
        },
        afbp: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.priceInCents")
        },
        afbt: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.timeForBidResponse")
        },
        afbw: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.winner")
        },
        frid: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "fan.requestId")
        },
        asxb: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "spotx.result")
        },
        asxi: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "spotx.id")
        },
        asxp: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "spotx.priceInCents")
        },
        asxt: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "spotx.timeForBidResponse")
        },
        asxw: function(e) {
            return Q(e.ads.headerBiddingData.bidders, "spotx.winner")
        },
        aml: function(e) {
            return e.ads.headerBiddingData.mediationLayer
        },
        flpc: function(e) {
            return e.ads.headerBiddingData.floorPriceCents
        },
        flpy: function(e) {
            return e.ads.headerBiddingData.floorPriceCurrency
        },
        hbec: function(e) {
            return e.ads.headerBiddingData.errorCode
        },
        vto: function(e) {
            return e.ads.headerBiddingData.bidTimeout
        },
        vpb: function(e) {
            if ("object" == typeof e.ads.headerBiddingData.bidders)
                return z(e.ads.headerBiddingData.bidders)
        },
        vcb: function(e) {
            return e.ads.headerBiddingCacheData.bidder
        },
        vck: function(e) {
            return e.ads.headerBiddingCacheData.cacheKey
        },
        rtp: function(n) {
            if ("object" == typeof n.inference.result) {
                var e = z(["predictions", "segments"].reduce(function(e, a) {
                    var t = Q(n.inference.result, a);
                    return void 0 !== t && (e[a] = t),
                    e
                }, {}))
                  , a = Q(n.inference.result, "decisionThresholds");
                return "object" == typeof a && (Object.keys(a).forEach(function(e) {
                    var t = a[e] || {};
                    Object.keys(t).forEach(function(a) {
                        var e = t[a] || {};
                        Object.keys(e).forEach(function(e) {
                            t[a][e] = Number(t[a][e].toFixed(2))
                        })
                    }),
                    a[e] = t
                }),
                e.decisionThresholds = a),
                e
            }
        },
        did: function(e) {
            return e.ads.adEventData.dealId
        },
        iu: function(e) {
            var a = e.ads.adEventData.tagURL;
            if (a) {
                var t = a.match(i);
                if (t)
                    return t[1]
            }
        }
    };
    Le.vsrid = function(e) {
        return (ee(e.playlistItemData.item, "jwpseg") || {}).request_id || null
    }
    ;
    var Oe = {
        dnt: function(e) {
            return e.browser.storage.doNotTrackProperty
        },
        fv: function(e) {
            return e.browser.pageData.flashVersion
        },
        lng: function(e) {
            return e.browser.langAttr
        },
        pdr: function(e) {
            return e.browser.docReferrer
        }
    };
    Oe.plt = function(e) {
        return function() {
            var e = ((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window).performance || {}).timing;
            if (e) {
                var a = (e.loadEventEnd || (new Date).getTime()) - e.navigationStart;
                if (0 < a)
                    return 50 * Math.round(a / 50) | 0
            }
            return null
        }()
    }
    ,
    Oe.sp = function(e) {
        return e.browser.isPageStandalone
    }
    ;
    var Ne = {
        cb: function(e) {
            return e.configData.castingBlockPresent
        },
        dd: function(e) {
            return e.configData.displayDescription
        },
        ga: function(e) {
            return e.configData.gaBlockPresent
        },
        pad: function(e) {
            return e.configData.abTestConfig
        },
        pbc: function(e) {
            return e.configData.playbackRateControlsSet
        },
        po: function(e) {
            return e.configData.posterImagePresent
        },
        rf: function(e) {
            return e.configData.relatedPluginFeedFile
        },
        sn: function(e) {
            return e.configData.skinName
        }
    }
      , qe = [w, h, D, k]
      , Fe = {
        fed: function(e) {
            return -1 !== qe.indexOf(e.meta.lastEvent) ? e.related.feedId : X(e.playlistItemData.item)
        },
        fid: function(e) {
            return -1 !== qe.indexOf(e.meta.lastEvent) ? e.related.feedInstanceId : Y(e.playlistItemData.item)
        },
        ft: function(e) {
            return e.related.feedType
        },
        os: function(e) {
            return e.related.onClickSetting
        },
        fin: function(e) {
            return e.related.feedInterface
        },
        fis: function(e) {
            return e.related.idsShown.join(",")
        },
        fns: function(e) {
            return e.related.idsShown.length
        },
        fpc: function(e) {
            return e.related.pinnedCount
        },
        fpg: function(e) {
            return e.related.page
        },
        fsr: function(e) {
            return e.related.shownReason
        },
        rat: function(e) {
            return e.related.autotimerLength
        },
        fct: function(e) {
            return e.related.advanceTarget
        },
        oc: function(e) {
            return e.related.ordinalClicked
        },
        stid: function(e) {
            return e.related.targetThumbID
        },
        tis: function(e) {
            return e.related.thumbnailIdsShown.join(",") || void 0
        },
        fsid: function(e) {
            return e.related.feedShownId
        },
        vfi: function(e) {
            return e.related.feedWasViewable
        },
        ovt: function(e) {
            return e.related.overlayVideoThumbs
        },
        cme: function(e) {
            return e.playerData.contextualEmbed
        },
        pogt: function(e) {
            return e.browser.pageData.pageOGTitle
        }
    }
      , Ue = {
        abc: function(e) {
            var a = e.ads.adBreakTracking;
            if (a)
                return a.adBreakCount
        },
        abt: function(e) {
            var a = e.external.playerAPI.getConfig()
              , t = a.ab;
            if (t && t.tests)
                return Object.keys(t.tests).map(function(e) {
                    return t.getSelected(e, a).join(",")
                }).filter(function(e) {
                    return e
                }).join(",")
        },
        aid: function(e) {
            return e.accountData.analyticsID
        },
        ask: function(e) {
            return e.ads.adScheduleId
        },
        at: function(e) {
            return ie()
        },
        c: function(e) {
            return e.ads.adClient
        },
        ccp: function(e) {
            return e.casting
        },
        cp: function(e) {
            return !e.external.playerAPI.getControls()
        },
        d: function(e) {
            return e.configData.autostartConfig
        },
        eb: function(e) {
            return (a = e.external.playerAPI).getAdBlock ? a.getAdBlock() : -1;
            var a
        },
        ed: function(e) {
            return e.accountData.edition
        },
        emi: function(e) {
            return e.staticPlayerData.embedID
        },
        i: function(e) {
            return e.browser.pageData.inIframe
        },
        id: function(e) {
            return e.playlistItemData.mediaId
        },
        lid: function(e) {
            return e.meta.doNotPingBackIDs ? void 0 : e.browser.storage.localID
        },
        lsa: function(e) {
            return e.browser.storage.storageAvailable
        },
        mt: function(e) {
            return e.external.playerAPI.getMute()
        },
        mu: function(e) {
            return function(e, a) {
                var t = void 0;
                if (!e)
                    return null;
                var n = e.sources;
                if (n) {
                    for (var r = [], i = n.length; i--; )
                        n[i].file && r.push(n[i].file);
                    r.sort(),
                    t = r[0]
                } else
                    t = e.file;
                return a.getAbsolutePath(t)
            }(e.playlistItemData.item, e.external.utils)
        },
        pbd: function(e) {
            return e.playerData.defaultPlaybackRate
        }
    };
    Ue.pbr = function(e) {
        return (a = e.external.playerAPI).getPlaybackRate ? Math.round(100 * a.getPlaybackRate()) / 100 : 1;
        var a
    }
    ,
    Ue.pgi = function(e) {
        return e.browser.pageData.pageViewId
    }
    ,
    Ue[V] = function(e) {
        return e.configData.playerHosting
    }
    ,
    Ue.pid = function(e) {
        return e.configData.playerConfigKey
    }
    ,
    Ue.pii = function(e) {
        return e.playlistItemData.index
    }
    ,
    Ue.pl = function(e) {
        return e.playerData.playerSize.height
    }
    ,
    Ue.plc = function(e) {
        return e.external.playerAPI.getPlaylist().length
    }
    ,
    Ue.pli = function(e) {
        return e.playlistItemData.itemId
    }
    ,
    Ue.pp = function(e) {
        return Ee(e.external.playerAPI)
    }
    ,
    Ue.prc = function(e) {
        return function() {
            var e = window.jwplayer
              , a = 0;
            if ("function" == typeof e)
                for (a = 0; a < 1e3; a++)
                    if (!e(a).uniqueId)
                        return a;
            return a
        }()
    }
    ,
    Ue.ps = function(e) {
        return e.playerData.playerSize.bucket
    }
    ,
    Ue.pss = function(e) {
        return e.meta.playbackTracking.playSessionSequence
    }
    ,
    Ue.pt = function(e) {
        return e.browser.pageData.pageTitle
    }
    ,
    Ue.pu = function(e) {
        return e.browser.pageData.pageURL
    }
    ,
    Ue.pv = function(e) {
        return e.staticPlayerData.playerVersion
    }
    ,
    Ue.pyc = function(e) {
        return e.meta.playbackTracking.playItemCount
    }
    ,
    Ue.s = function(e) {
        return e.configData.sharingEnabled
    }
    ,
    Ue.sdk = function(e) {
        return e.staticPlayerData.sdkPlatform
    }
    ,
    Ue.stc = function(e) {
        return e.meta.setupCount
    }
    ,
    Ue.sv = function(e) {
        return e.staticPlayerData.sdkVersion
    }
    ,
    Ue.bun = function(e) {
        return e.staticPlayerData.bundleId
    }
    ,
    Ue.ifa = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.staticPlayerData.advertisingId
    }
    ,
    Ue.om = function(e) {
        return e.staticPlayerData ? e.staticPlayerData.deviceModel : void 0
    }
    ,
    Ue.t = function(e) {
        return te(e.playlistItemData.item)
    }
    ,
    Ue.tul = function(e) {
        return e.playlistItemData.item.thumbnailUrl
    }
    ,
    Ue.tv = function(e) {
        return "4.0.5"
    }
    ,
    Ue.vb = function(e) {
        return e.playerData.viewable
    }
    ,
    Ue.vi = function(e) {
        var a = e.playerData.playerConfig.visibility;
        return void 0 === a ? a : Math.round(100 * a) / 100
    }
    ,
    Ue.vl = function(e) {
        return e.external.playerAPI.getVolume()
    }
    ,
    Ue.wd = function(e) {
        return e.playerData.playerSize.width
    }
    ,
    Ue.xid = function(e) {
        return e.playlistItemData.externalId
    }
    ,
    Ue.xav = function(e) {
        return e.meta.xidAlgorithmVersion
    }
    ,
    Ue.stpe = function(e) {
        return !!e.meta.playbackTracking.sendSetTimeEvents
    }
    ,
    Ue.ppm = function(e) {
        return e.playerData.playbackMode
    }
    ,
    Ue.strt = function(e) {
        var a = e.playerData.startup;
        return e.meta.lastEvent === a.dispatchEvent ? a.startupTime : void 0
    }
    ,
    Ue.tstc = function(e) {
        return e.browser.pageData.testCaseId
    }
    ,
    Ue.fsm = function(e) {
        return e.external.playerAPI.getFullscreen()
    }
    ,
    Ue.dpl = function(e) {}
    ,
    Ue.ss = function(e) {
        return e.meta.sessionSampled || void 0
    }
    ,
    Ue.amp = function(e) {
        return e.browser.pageData.amp
    }
    ,
    Ue.jwac = function(e) {
        return e.browser.pageData.jwAmpComponent || void 0
    }
    ,
    Ue.opu = function(e) {
        return e.browser.pageData.origPageURL
    }
    ;
    var _e = {};
    _e.pei = function(e) {
        return e.placementData.embedId
    }
    ,
    _e.eid = function(e) {
        return e.placementData.evaluationId
    }
    ,
    _e.idp = function(e) {
        return e.placementData.placementId
    }
    ,
    _e.so = function(e) {
        return e.placementData.outcomeId
    }
    ,
    _e.tid = function(e) {
        return e.placementData.triggerId
    }
    ,
    _e.plv = function(e) {
        return e.placementData.version
    }
    ;
    var Qe = {
        aes: 1,
        widevine: 2,
        playready: 3,
        fairplay: 4
    };
    var ze = {
        interaction: 1,
        autostart: 2,
        repeat: 3,
        external: 4,
        "related-interaction": 1,
        "related-auto": 5,
        playlist: 6,
        viewable: 7
    };
    var Ke = {
        none: 1,
        metadata: 2,
        auto: 3
    };
    function We(e) {
        return e === 1 / 0 ? 1 / 0 : (e |= 0) <= 0 ? 0 : e < 30 ? 1 : e < 60 ? 4 : e < 180 ? 8 : e < 300 ? 16 : 32
    }
    function He(e) {
        try {
            return e.external.playerAPI.qoe().item.sums.stalled || 0
        } catch (e) {
            return 0
        }
    }
    var $e = Math.round
      , Je = {};
    Je.st = function(e) {
        return e.playerData.setupTime
    }
    ,
    Je.bwe = function(e) {
        return U(e.playerData.playerConfig.bandwidthEstimate)
    }
    ,
    Je.cct = function(e) {
        return a = e.playlistItemData.item,
        t = e.external.playerAPI,
        Array.prototype.some.call(a.tracks || 0, function(e) {
            var a = e.kind;
            return "captions" === a || "subtitles" === a
        }) ? 1 : 1 < t.getCaptionsList().length ? 2 : 0;
        var a, t
    }
    ,
    Je.ch = function(e) {
        return function(e) {
            if (e.chapters)
                return 2;
            var a = e.tracks;
            return a && a.length && Array.prototype.some.call(a, function(e) {
                return "chapters" === e.kind
            }) ? 1 : 0
        }(e.playlistItemData.item)
    }
    ,
    Je.drm = function(e) {
        return ((a = e.playlistItemData.drm) ? Qe[a] || 999 : 0) || e.meta.playbackTracking.segmentsEncrypted;
        var a
    }
    ,
    Je.ff = function(e) {
        return "function" == typeof (a = e.external.playerAPI).qoe ? 10 * Math.round(a.qoe().firstFrame / 10) | 0 : -1;
        var a
    }
    ,
    Je.l = function(e) {
        return a = e.playlistItemData.duration,
        (a |= 0) <= 0 || a === 1 / 0 ? 0 : a < 15 ? 1 : a <= 300 ? 2 : a <= 1200 ? 3 : 4;
        var a
    }
    ,
    Je.vr = function(e) {
        return function(e) {
            if (e.getPlugin) {
                var a = e.getPlugin("vr");
                if (a)
                    switch (a.getMode()) {
                    case "magic-window":
                        return 0;
                    case "cardboard":
                        return 1;
                    case "gear-vr":
                        return 2;
                    default:
                        return null
                    }
            }
            return null
        }(e.external.playerAPI)
    }
    ,
    Je.etw = function(e) {
        return e.meta.playbackTracking.retTimeWatched
    }
    ,
    Je.ubc = function(e) {
        return $e(He(e))
    }
    ,
    Je.ltc = function(e) {
        return $e(function(e) {
            try {
                return e.external.playerAPI.qoe().item.sums.loading || 0
            } catch (e) {
                return 0
            }
        }(e))
    }
    ,
    Je.ubi = function(e) {
        return $e(function(e, a) {
            void 0 === a && (a = e.meta.lastEvent);
            var t = He(e)
              , n = e.meta.previousBufferTimes[a];
            void 0 === e.meta.previousBufferTimes[a] && (n = e.meta.previousBufferTimes[a] = t);
            var r = Math.round(t - n);
            return e.meta.previousBufferTimes[a] = t,
            r
        }(e))
    }
    ,
    Je.pw = function(e) {
        return 0 | e.meta.playbackTracking.normalizedTime
    }
    ,
    Je.ti = function(e) {
        return e.meta.playbackTracking.elapsedSeconds
    }
    ,
    Je.vti = function(e) {
        return e.meta.playbackTracking.viewableElapsedSeconds
    }
    ,
    Je.ati = function(e) {
        return e.meta.playbackTracking.audibleElapsedSeconds
    }
    ,
    Je.cvl = function(e) {
        return Math.floor(e.meta.seekTracking.videoStartDragTime)
    }
    ,
    Je.tvl = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime)
    }
    ,
    Je.sdt = function(e) {
        return 1 === e.meta.seekTracking.numTrackedSeeks ? 0 : Date.now() - e.meta.seekTracking.dragStartTime
    }
    ,
    Je.vso = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime) - Math.floor(e.meta.seekTracking.videoStartDragTime)
    }
    ,
    Je.qcr = function(e) {
        return e.playerData.visualQuality.reason
    }
    ,
    Je.abm = function(e) {
        return e.playerData.visualQuality.adaptiveBitrateMode
    }
    ,
    Je.avc = function(e) {
        return e.playerData.numAutoVisualQualityChange
    }
    ,
    Je.ppr = function(e) {
        return e.meta.playbackTracking.prevPlaybackRate
    }
    ,
    Je.erc = function(e) {
        return e.playerData.lastErrorCode[e.meta.lastEvent]
    }
    ,
    Je.pcp = function(e) {
        return $e(e.meta.playbackTracking.currentPosition)
    }
    ,
    Je.stg = function(e) {
        return e.sharing.shareMethod
    }
    ,
    Je.tps = function(e) {
        return $e(e.meta.playbackTracking.playedSecondsTotal)
    }
    ,
    Je.srf = function(e) {
        return e.sharing.shareReferrer
    }
    ,
    Je.plng = function(e) {
        return e.playerData.localization.language
    }
    ,
    Je.pni = function(e) {
        return e.playerData.localization.numIntlKeys
    }
    ,
    Je.pnl = function(e) {
        return e.playerData.localization.numLocalKeys
    }
    ,
    Je.pbs = function(e) {
        try {
            return e.external.playerAPI.qoe().item.counts.stalled || 0
        } catch (e) {
            return null
        }
    }
    ,
    Je.tc = function(e) {
        return e.meta.playbackTracking.thresholdCrossed
    }
    ,
    Je.flc = function(e) {
        return e.playerData.floatingConfigured
    }
    ,
    Je.fls = function(e) {
        return e.playerData.playerConfig.floatingState
    }
    ,
    Je.xam = function(e) {
        return e.playerData.apiTracking.methodCalled
    }
    ,
    Je.xfmp = function(e) {
        return e.playerData.apiTracking.firstMeaningfulParam
    }
    ,
    Je.dle = function(e) {
        return e.meta.playbackTracking.latency
    }
    ,
    Je.cdid = function(e) {
        return e.external.playerAPI.id
    }
    ,
    Je.pcfg = function(e) {
        return e.playerData.stringifiedSetupConfig
    }
    ,
    Je.pvta = function(e) {
        return e.meta.playbackTracking.posterVideoThumbAnimated
    }
    ,
    Je.ovta = function(e) {
        return e.meta.playbackTracking.overlayVideoThumbAnimated
    }
    ,
    Je.pvt = function(e) {
        return e.meta.playbackTracking.posterVideoThumbnail || void 0
    }
    ,
    Je.ipv = function(e) {
        return e.playerData.inferencePluginVersion
    }
    ,
    Je.bpv = function(e) {
        return e.playerData.biddingPluginVersion
    }
    ,
    Je.pdt = function(e) {
        var a = e.meta.playbackTracking.programDateTime;
        return e.meta.playbackTracking.programDateTime = void 0,
        a
    }
    ,
    Je.cst = function(e) {
        var a = e.meta.playbackTracking.cueStartTime;
        return e.meta.playbackTracking.cueStartTime = void 0,
        a
    }
    ,
    Je.iacid = function(e) {
        return e.interactive.cueId
    }
    ,
    Je.iaelid = function(e) {
        return e.interactive.elementId
    }
    ,
    Je.iaeln = function(e) {
        return e.interactive.elementName
    }
    ,
    Je.iaeid = function(e) {
        return e.interactive.eventId
    }
    ,
    Je.iae = function(e) {
        return e.interactive.eventName
    }
    ,
    Je.iapid = function(e) {
        return e.interactive.projectId
    }
    ,
    Je.iapn = function(e) {
        return e.interactive.projectName
    }
    ,
    Je.iat = function(e) {
        return e.interactive.interactionType
    }
    ,
    Je.iapv = function(e) {
        return e.interactive.projectVersion
    }
    ;
    var Xe = ye
      , Ye = ge
      , Ze = {
        mk: function(e) {
            return function(e, a) {
                if (!e)
                    return null;
                var t = e.sources[0]
                  , n = t.type;
                if (!n) {
                    var r = t.file;
                    n = a.extension(r)
                }
                return n
            }(e.playlistItemData.item, e.external.utils)
        }
    };
    Ze.pd = function(e) {
        return a = e.playlistItemData.item,
        t = a.preload,
        Ke[t] || 0;
        var a, t
    }
    ,
    Ze.vrt = function(e) {
        return function(e) {
            if (!e || !e.stereomode)
                return null;
            switch (e.stereomode) {
            case "monoscopic":
                return 0;
            case "stereoscopicTopBottom":
                return 1;
            case "stereoscopicLeftRight":
                return 2;
            default:
                return null
            }
        }(e.playlistItemData.item)
    }
    ,
    Ze.pr = function(e) {
        return a = e.playlistItemData.playReason,
        ze[a] || 0;
        var a
    }
    ,
    Ze.psd = function(e) {
        return -1 !== qe.indexOf(e.meta.lastEvent) ? e.related.pinSetId : Z(e.playlistItemData.item)
    }
    ,
    Ze.vh = function(e) {
        return e.playerData.visualQuality.height
    }
    ,
    Ze.vw = function(e) {
        return e.playerData.visualQuality.width
    }
    ,
    Ze.sbr = function(e) {
        return e.playerData.visualQuality.bitrate
    }
    ,
    Ze.tb = function(e) {
        return function(e) {
            var a = e.getContainer().querySelector("video")
              , t = 0;
            if (a && (t = a.duration,
            a.buffered && a.buffered.length)) {
                var n = a.buffered.end(a.buffered.length - 1) || 0;
                return Math.round(10 * n) / 10
            }
            return t || (t = Math.abs(e.getDuration())),
            Math.round(t * e.getBuffer() / 10) / 10
        }(e.external.playerAPI)
    }
    ,
    Ze.vd = function(e) {
        return e.playlistItemData.duration
    }
    ,
    Ze.q = function(e) {
        return We(e.playlistItemData.duration)
    }
    ,
    Ze.tt = function(e) {
        return a = e.playlistItemData.item,
        t = a.tracks,
        Array.prototype.some.call(t || 0, function(e) {
            return "thumbnails" === e.kind
        });
        var a, t
    }
    ,
    Ze.vs = function(e) {
        var a = e.meta.playbackEvents;
        return function(e, a, t) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            if (!a)
                return null;
            if (t && t.levels && t.levels.length) {
                var r = t.levels[0];
                if (r && "auto" === ("" + r.label).toLowerCase())
                    return 5
            }
            if (oe(e.getContainer(), "jw-flag-audio-player"))
                return 6;
            var i = 0 | n.width
              , o = 0 | n.height;
            return 0 !== i || 0 !== o ? i <= 320 ? 1 : i <= 640 ? 2 : i <= 1280 ? 3 : 4 : "rtmp" === a.sources[0].type ? 6 : 0
        }(e.external.playerAPI, e.playlistItemData.item, a[Xe], a[Ye])
    }
    ,
    Ze.ptid = function(e) {
        return Q(e.playlistItemData.item, "variations.selected.images.id")
    }
    ;
    var ea = N({}, Ue, Ne, Oe, Ze, Je, Fe, Ge, Le, Me, _e);
    function aa(e, i) {
        var a = O.events[e]
          , t = a.parameterGroups.reduce(function(e, a) {
            return e.concat(O.paramGroups[a].members)
        }, []).concat(a.pingSpecificParameters ? a.pingSpecificParameters : []).reduce(function(e, a) {
            var t, n, r;
            return e[a] = (n = i,
            r = ea[t = a] ? ea[t] : function() {
                n.meta.debug && console.log("No parameter generation function for param " + t)
            }
            ,
            {
                code: t,
                value: r(n)
            }),
            e
        }, {});
        return {
            event: a.code,
            bucket: a.bucket,
            parameters: t,
            pingDestination: a.pingDestination
        }
    }
    var ta = {
        missingMediaOrExternalID: function(e) {
            return !e.meta.sessionSampled && (!e.playlistItemData.mediaId && !e.playlistItemData.externalId)
        },
        missingAdScheduleID: function(e) {
            return !e.meta.sessionSampled && !e.ads.adScheduleId
        },
        missingFeedID: function(e) {
            return !e.related.feedId
        }
    };
    var na = function(e, a) {
        if (!(e instanceof a))
            throw new TypeError("Cannot call a class as a function")
    }
      , ra = function() {
        function n(e, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(e, a, t) {
            return a && n(e.prototype, a),
            t && n(e, t),
            e
        }
    }()
      , ia = {
        main: "prd.jwpltx.com/v1",
        main_fallback: "ping-origin-prd.jwpltx.com/v1",
        meta: "ping-meta-prd.jwpltx.com/v1",
        placement: "placement-prd.jwpltx.com/v1"
    }
      , oa = function() {
        function r(e, a, t, n) {
            na(this, r),
            this.event = e,
            this.bucket = a,
            this.host = n,
            this.paramData = N({}, t),
            C in this.paramData || (this.paramData[C] = {
                code: C,
                value: e
            }),
            E in this.paramData || (this.paramData[E] = {
                code: E,
                value: Math.random().toFixed(16).substr(2, 16)
            })
        }
        return ra(r, [{
            key: "path",
            get: function() {
                return this.host + "/" + this.bucket + "/ping.gif"
            }
        }, {
            key: "url",
            get: function() {
                return this.protocol + "//" + this.path + "?" + this.queryString
            }
        }, {
            key: "encodedParameters",
            get: function() {
                var r = this;
                return Object.keys(this.paramData).reduce(function(e, a) {
                    var t = r.paramData[a]
                      , n = da(t);
                    return null !== n && (e[t.code] = n),
                    e
                }, {})
            }
        }, {
            key: "trackingArgs",
            get: function() {
                var a = this.encodedParameters
                  , t = Object.keys(a);
                return [E, C].forEach(function(e) {
                    var a = t.indexOf(e);
                    -1 !== a && (t.splice(a, 1),
                    t.unshift(e))
                }),
                t.map(function(e) {
                    return a[e]
                })
            }
        }, {
            key: "protocol",
            get: function() {
                return "file:" === window.location.protocol ? "https:" : ""
            }
        }, {
            key: "queryString",
            get: function() {
                var e = this.trackingArgs.join("&")
                  , a = "h=" + function(e) {
                    var a = 0;
                    if (!(e = decodeURIComponent(e)).length)
                        return a;
                    for (var t = 0; t < e.length; t++)
                        a = (a << 5) - a + e.charCodeAt(t),
                        a &= a;
                    return a
                }(e) + "&" + e
                  , t = void 0;
                try {
                    t = Date.now()
                } catch (e) {}
                return a + "&sa=" + t
            }
        }]),
        r
    }()
      , da = function(e) {
        var a = e.value;
        return !0 !== a && !1 !== a || (a = a ? "1" : "0"),
        a && "object" == typeof a && (a = JSON.stringify(a)),
        null != a ? e.code + "=" + encodeURIComponent(a) : null
    }
      , la = ["rtp"]
      , ca = function(e) {
        return e.paramData.tp = {
            code: "tp",
            value: 1
        },
        W(e.url)
    }
      , ua = function(e, a, t, n) {
        var r = W("&tp=1")
          , i = new oa(e,a,t,ia[n])
          , o = W(i.url);
        if (o <= 8192)
            return i.url;
        var d = O.parameters
          , l = Object.keys(d).filter(function(e) {
            var a = d[e].priority;
            return 0 < a || a < 0
        }).filter(function(e) {
            return e in i.paramData
        }).filter(function(e) {
            return "string" == typeof i.paramData[e].value
        }).sort(function(e, a) {
            return d[a].priority - d[e].priority
        })
          , c = la
          , u = Array.isArray(c)
          , s = 0;
        for (c = u ? c : c[Symbol.iterator](); ; ) {
            var p;
            if (u) {
                if (s >= c.length)
                    break;
                p = c[s++]
            } else {
                if ((s = c.next()).done)
                    break;
                p = s.value
            }
            if ("rtp" === p && p in i.paramData && (delete i.paramData.rtp.value.decisionThresholds,
            (o = ca(i)) <= 8192))
                return i.url
        }
        var f = l
          , m = Array.isArray(f)
          , v = 0;
        for (f = m ? f : f[Symbol.iterator](); ; ) {
            var g;
            if (m) {
                if (v >= f.length)
                    break;
                g = f[v++]
            } else {
                if ((v = f.next()).done)
                    break;
                g = v.value
            }
            var y = g;
            if (i.paramData[y]) {
                var b = o - 8192 + ("tp"in i.paramData ? 0 : r)
                  , h = i.paramData[y]
                  , k = da(h)
                  , D = k ? W(k) : 0;
                if (delete i.paramData[y],
                D <= b)
                    o = ca(i);
                else {
                    for (var w = {
                        code: y,
                        value: h.value
                    }, I = D - b, S = Math.max(20, Math.floor(w.value.length / 10)), T = Math.ceil(w.value.length / S), P = 1; P <= T; P++) {
                        var E = -S * P;
                        w.value = w.value.slice(0, E);
                        var C = W(da(w));
                        if (0 < w.value.length && C < I) {
                            i.paramData[y] = w;
                            break
                        }
                    }
                    if ((o = ca(i)) <= 8192)
                        return i.url
                }
            }
        }
        return "main" === n && (i.host = ia.main_fallback),
        i.url
    }
      , sa = function(e) {
        e.trackingState.pageLoaded = !0;
        for (var a = e.trackingState.queue.length; a--; )
            ma(e, e.trackingState.queue.shift());
        window.removeEventListener("load", e.trackingState.boundFlushQueue)
    };
    function pa(e) {
        var a, t, n = e.external && e.external.playerAPI, r = "complete" === ((t = (a = n) && a.getContainer && a.getContainer()) && t.ownerDocument || window.document).readyState;
        (e.trackingState.pageLoaded = r) || (e.trackingState.boundFlushQueue = sa.bind(null, e),
        window.addEventListener && window.addEventListener("load", e.trackingState.boundFlushQueue),
        setTimeout(e.trackingState.boundFlushQueue, 5e3))
    }
    function fa(e, a) {
        var t = a.event
          , n = a.bucket
          , r = a.parameters
          , i = a.pingDestination
          , o = ua(t, n, r, i)
          , d = !e.trackingState.pageLoaded;
        if (d && (t === A || t === j || t === x))
            sa(e);
        else if (d)
            return void e.trackingState.queue.push(o);
        ma(e, o)
    }
    function ma(e, a) {
        var t = new Image;
        t.src = a;
        for (var n = e.trackingState.images, r = n.length; r-- && (n[r].width || n[r].complete); )
            n.length = r;
        if (n.push(t),
        e.meta.debug && e.trackingState.onping)
            try {
                e.trackingState.onping.call(null, a)
            } catch (e) {}
    }
    var va = {
        delaySend: !1,
        returnURL: !1
    };
    function ga(t, e) {
        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "jwplayer6"
          , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        n = N({}, va, n),
        Ve(t, e, a);
        var r = _(e, a)
          , i = O.events[r];
        if (i && !(i.filters || []).map(function(e) {
            return a = t,
            ta[e](a);
            var a
        }).some(function(e) {
            return !!e
        })) {
            var o = aa(r, t);
            return n.delaySend ? fa.bind(null, t, o) : n.returnURL ? ua(o.event, o.bucket, o.parameters, o.pingDestination) : void fa(t, o)
        }
    }
    function ya(e) {
        if (!e.bidders)
            return {};
        var r = {}
          , i = void 0;
        e.bidders.forEach(function(e) {
            var t, n, a = e.name;
            r[a.toLowerCase()] = (t = e,
            n = {},
            s.forEach(function(e) {
                var a;
                "result" === e ? n.result = o[t[e]] : N(n, void 0 !== t[e] ? ((a = {})[e] = t[e],
                a) : void 0),
                t.code && -1 !== ["error", "invalid"].indexOf(t.result) && (n.errorCode = t.code)
            }),
            n),
            e.errorCode && !i && (i = e.errorCode)
        });
        var a = e.floorPriceCurrency;
        return N({
            mediationLayer: t[e.mediationLayerAdServer],
            floorPriceCents: e.floorPriceCents,
            bidders: r,
            bidTimeout: e.bidTimeout
        }, void 0 !== i ? {
            errorCode: i
        } : void 0, a ? {
            floorPriceCurrency: a
        } : void 0)
    }
    function ba(t, e) {
        var n = t.ads.adEventData;
        -1 === t.ads.adClient && e && (t.ads.adClient = q(e.client)),
        e.sequence !== n.podIndex && (delete n.timeAdLoading,
        delete n.adCreativeType),
        ha(n, e, "offset"),
        ha(n, e, "witem"),
        ha(n, e, "wcount"),
        ha(n, e, "skipoffset"),
        ha(n, e, "linear", function(e, a) {
            return a === e
        }),
        ha(n, e, "adposition", function(e, a) {
            return {
                pre: 0,
                mid: 1,
                post: 2,
                api: 3
            }[a]
        }),
        ha(n, e, "creativetype", function(e, a) {
            var t = "";
            switch (a) {
            case "static":
                t = "image/unknown";
                break;
            case "video":
                t = "video/unknown";
                break;
            case "vpaid":
            case "vpaid-swf":
                t = "application/x-shockwave-flash";
                break;
            case "vpaid-js":
                t = "application/javascript";
                break;
            default:
                t = a || t
            }
            return n.adCreativeType = t
        }),
        ha(n, e, "tag", function(e, a) {
            return n.tagdomain = function(e) {
                if (e) {
                    var a = e.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));
                    if (a && 1 < a.length)
                        return a[1]
                }
                return ""
            }(t.external.playerAPI.utils.getAbsolutePath(a)),
            a
        }),
        ha(n, e, "description"),
        ha(n, e, "creativeAdId"),
        ha(n, e, "placement"),
        ha(n, e, "advertiser"),
        ha(n, e, "advertiserId"),
        e.timeLoading && (n.timeAdLoading = 10 * Math.round(e.timeLoading / 10)),
        e.universalAdId ? n.universalAdId = e.universalAdId.map(function(e) {
            if ("unknown" !== e.universalAdIdRegistry)
                return e.universalAdIdRegistry + "." + e.universalAdIdValue
        }).filter(function(e) {
            return !!e
        }).join(",") : delete n.universalAdId,
        n.mediaFileCompliance = e.mediaFileCompliance,
        n.categories = e.categories,
        n.adSystem = e.adsystem || n.adSystem,
        n.vastVersion = e.vastversion || n.vastVersion,
        n.podIndex = e.sequence || n.podIndex,
        n.podCount = e.podcount || n.podCount,
        n.tagURL = e.tag || n.tagURL || e.vmap,
        n.preload = "boolean" == typeof e.preloadAds ? e.preloadAds : n.preload,
        n.adPlayId = e.adPlayId || n.adPlayId,
        n.adBreakId = e.adBreakId || n.adBreakId,
        n.adVastId = e.adId || n.adVastId,
        n.duration = e.duration || n.duration,
        n.adTitle = e.adtitle || n.adTitle,
        n.jwpseg = e.jwpseg,
        n.timeForVPBCache = e.timeForVPBCache || n.timeForVPBCache,
        n.dealId = e.dealId || n.dealId;
        var a = void 0;
        if (a = "googima" === e.client ? (n.creativeId = Q(e, "ima.ad.g.creativeId"),
        Q(e, "ima.ad.g.mediaUrl")) : (n.creativeId = Q(e, "creativeId"),
        Q(e, "mediafile.file")),
        n.adMediaFileURL = "string" == typeof a ? a.substring(0, 2500) : a,
        e.item) {
            var r = ae(e.item);
            n.targetMediaId = r !== t.playlistItemData.mediaId ? r : null
        }
        t.ads.headerBiddingData = ya(e)
    }
    function ha(e, a, t) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ka;
        if (a.hasOwnProperty(t)) {
            var r = n;
            e[t] = r(t, a[t])
        }
    }
    function ka(e, a) {
        return a
    }
    function Da(e, a) {
        e.meta.playerState !== a && (e.meta.playerStateDuration = Date.now()),
        e.meta.playerState = a
    }
    function wa(e, a) {
        null === e.previousTime && (e.previousTime = a);
        var t = a - e.previousTime;
        return e.previousTime = a,
        t = Math.min(Math.max(0, t), 4),
        e.playedSeconds = e.playedSeconds + t,
        t
    }
    function Ia(e, a) {
        var t = e.ads.adEventData
          , n = e.ads.currentQuartile;
        n > t.previousQuartile && (ba(e, a),
        ga(e, "v", "clienta"),
        t.previousQuartile = n)
    }
    var Sa = {
        adComplete: function(e, a) {
            e.ads.currentQuartile = 4,
            Ia(e, a)
        },
        adError: function(e, a) {
            "object" == typeof a && a && (e.playerData.lastErrorCode.ae = a.code || 1,
            e.ads.jwAdErrorCode = a.adErrorCode,
            51901 === a.adErrorCode ? e.ads.errorMessage = "string" == typeof a.message ? a.message.substring(0, 100) : void 0 : e.ads.errorMessage = void 0,
            e.ads.timeout = a.timeout),
            ga(e, "ae", "clienta")
        },
        adTime: function(e, a) {
            var t = e.ads.adEventData
              , n = t.position = a.position;
            t.duration = t.duration || a.duration;
            var r = e.ads.adPlaybackTracking
              , i = e.ads.pingLimiters;
            !n || t.position > t.duration || (!function(e, a, t) {
                var n = wa(a, t)
                  , r = e.ads.pingLimiters.visibleEvent.canSendPing(M) || e.ads.pingLimiters.visibleEvent.canSendPing(R);
                e.playerData.viewable && (r && (1 === e.external.playerAPI.getConfig().visibility ? (a.consecutiveVisibleSeconds += n,
                a.totalVisibleSeconds += n,
                a.maxConsecutiveVisibleSeconds = Math.max(a.maxConsecutiveVisibleSeconds, a.consecutiveVisibleSeconds)) : (a.maxConsecutiveVisibleSeconds = Math.max(a.maxConsecutiveVisibleSeconds, a.consecutiveVisibleSeconds),
                a.consecutiveVisibleSeconds = 0)),
                a.viewablePlayedSeconds = a.viewablePlayedSeconds + n);
                !e.playerData.muted && 0 < e.playerData.volume && (a.audiblePlayedSeconds = a.audiblePlayedSeconds + n)
            }(e, r, n),
            i.visibleEvent.canSendPing(M) && r.totalVisibleSeconds >= Math.floor(t.duration / 2) && (ga(e, M, "clienta"),
            i.visibleEvent.setPingSent(M)),
            i.visibleEvent.canSendPing(R) && 2 <= r.maxConsecutiveVisibleSeconds && (ga(e, R, "clienta"),
            i.visibleEvent.setPingSent(R)),
            e.ads.currentQuartile = Math.min(3, Math.floor((4 * t.position + .05) / t.duration)),
            Ia(e, a))
        },
        adSkipped: function(e, a) {
            e.ads.watchedPastSkipPoint = a.watchedPastSkipPoint,
            ga(e, "s", "clienta")
        },
        adImpression: function(e, a) {
            je(e, A);
            var t = e.ads.adPlaybackTracking;
            t.audiblePlayedSeconds = 0,
            t.viewablePlayedSeconds = 0,
            t.playedSeconds = 0,
            t.previousTime = null,
            ga(e, A, "clienta")
        },
        adBreakEnd: function(e, a) {
            e.ads.adEventData = N({}, B)
        }
    };
    function Ta(i) {
        var e = i.external.playerAPI;
        e.on(a.join(" "), function() {
            Da(i, "ad-break"),
            i.ads.adBreakTracking && i.ads.adBreakTracking.shouldTrack && (i.ads.adBreakTracking.shouldTrack = !1,
            i.ads.adBreakTracking.adBreakCount++)
        }),
        e.on("adClick adRequest adMeta adImpression adComplete adSkipped adError adTime adBidRequest adBidResponse adStarted adLoaded adViewableImpression adBreakEnd", function(e) {
            var a, t, n, r = i.ads.adEventData;
            a = r,
            "adClick" === (t = e).type || a && a.adId === t.id && -1 !== t.id || (i.ads.adEventData = N({
                adId: e.id
            }, B),
            i.ads.pingLimiters.visibleEvent.resetAll(),
            i.ads.adPlaybackTracking = N({}, d)),
            n = e,
            -1 === u.indexOf(n.type) && ba(i, e),
            e.type in Sa ? Sa[e.type](i, e) : -1 === c.indexOf(e.type) && ga(i, l[e.type], "clienta")
        })
    }
    function Pa(e) {
        var a;
        "function" == typeof navigator.sendBeacon && (a = e).external.playerAPI.on("remove", function() {
            je(a, I),
            a.meta.playerRemoved = !0,
            ga(a, I, "jwplayer6")
        })
    }
    function Ea() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues)
                return e.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (e) {}
        return Math.random().toString(36).slice(2, 9)
    }
    function Ca(e) {
        for (var a = ""; a.length < e; )
            a += Ea();
        return a.slice(0, e)
    }
    var Aa = "clickCard"
      , xa = "createCard"
      , ja = "hideCard"
      , Ra = "removeCard"
      , Ba = "showCard"
      , Va = "time"
      , Ma = {
        showCard: "sh",
        hideCard: "hd",
        clickCard: "cl"
    }
      , Ga = {
        time: "t",
        nonTime: "nt"
    };
    function La(f, m) {
        return function(e) {
            var a, t, n, r, i, o, d, l, c, u, s, p = (a = f,
            t = e.cardVisible,
            a === xa && t ? Ba : a === Ra && t ? ja : a === xa || a === Ra ? null : a);
            p && (n = p,
            i = m,
            o = (r = e).cueId,
            d = r.cardId,
            l = r.name,
            c = r.projectId,
            u = r.projectName,
            s = r.projectVersion,
            i.interactive.eventId = Ca(12),
            i.interactive.eventName = Ma[n],
            i.interactive.interactionType = Ga[Va],
            i.interactive.cueId = o,
            i.interactive.elementId = d,
            i.interactive.elementName = l,
            i.interactive.projectId = c,
            i.interactive.projectName = u,
            i.interactive.projectVersion = s,
            ga(i, P))
        }
    }
    function Oa(t) {
        t.external.playerAPI.on("ready", function() {
            var e, a;
            (a = (e = t).external.playerAPI.getPlugin("interactive")) && a.on && (a.on(Ba, La(Ba, e)),
            a.on(ja, La(ja, e)),
            a.on(Aa, La(Aa, e)),
            a.on(xa, La(xa, e)),
            a.on(Ra, La(Ra, e)))
        })
    }
    var Na = ["predictions", "segments", "decisionThresholds"];
    var qa = 1e3;
    function Fa(e) {
        return 0 < e.numTrackedSeeks
    }
    var Ua = ge
      , _a = e
      , Qa = be;
    function za(e) {
        e.meta.playbackTracking.playItemCount++,
        ga(e, "s")
    }
    function Ka(u, s) {
        return function(e) {
            var a = u.meta.playbackEvents
              , t = u.playlistItemData
              , n = u.meta.playbackTracking
              , r = u.external.playerAPI
              , i = a[s];
            if (s === Ua) {
                var o = e.segment;
                o && (n.segmentReceived = !0,
                n.segmentsEncrypted = o.encryption),
                t.drm = e.drm || t.drm || "";
                var d = Q(e, "metadata.programDateTime");
                d && (u.meta.playbackTracking.programDateTime = d);
                var l = Q(e, "metadata.start");
                l && (u.meta.playbackTracking.cueStartTime = l)
            }
            if (a[s] = e,
            s === _a) {
                i || (n.playedSeconds = 0,
                n.viewablePlayedSeconds = 0,
                n.audiblePlayedSeconds = 0,
                n.playedSecondsTotal = 0);
                var c = Te(r);
                n.previousTime = c,
                n.currentPosition = c
            }
            s === Qa && (je(u, f),
            "flash_adaptive" === Ee(r) ? !u.meta.playbackSent && n.segmentReceived && (u.meta.playbackSent = !0,
            n.segmentReceived = !1,
            za(u)) : u.meta.playbackSent || (u.meta.playbackSent = !0,
            za(u)))
        }
    }
    function Wa(e) {
        var a = e.meta.playbackTracking
          , t = a.playedSeconds
          , n = a.viewablePlayedSeconds
          , r = a.audiblePlayedSeconds;
        a.playedSeconds = 0,
        a.viewablePlayedSeconds = 0;
        var i = t + .5 | (a.audiblePlayedSeconds = 0);
        a.elapsedSeconds = i;
        var o = n + .5 | 0;
        a.viewableElapsedSeconds = o;
        var d = r + .5 | 0;
        a.audibleElapsedSeconds = d,
        0 < i && ga(e, y)
    }
    function Ha(e, a, t, n) {
        a < n && n <= a + t && (e.meta.playbackTracking.retTimeWatched = n,
        ga(e, "ret"))
    }
    function $a(e, a, t) {
        var n, r, i, o = v + "-" + t;
        n = a,
        r = t,
        i = o,
        e.meta.pingLimiters.playlistItem.canSendPing(i) && Math.floor(n) === r && (e.meta.playbackTracking.thresholdCrossed = t,
        ga(e, v),
        e.meta.pingLimiters.playlistItem.setPingSent(o))
    }
    function Ja(e, a) {
        var t, n, r, i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], o = arguments[3];
        i ? function(e) {
            var a = e.meta.seekTracking;
            if (Fa(a)) {
                clearTimeout(a.seekDebounceTimeout);
                var t = ga(e, "vs", "jwplayer6", {
                    delaySend: !0
                });
                a.seekDebounceTimeout = setTimeout(function() {
                    var e;
                    t && t(),
                    (e = a).videoStartDragTime = 0,
                    e.dragStartTime = 0,
                    e.seekDebounceTimeout = null,
                    e.lastTargetTime = 0,
                    e.numTrackedSeeks = 0
                }, qa)
            }
        }(e) : (t = e.meta.seekTracking,
        n = a,
        r = o,
        Fa(t) || (t.videoStartDragTime = r,
        t.dragStartTime = Date.now()),
        t.numTrackedSeeks++,
        t.lastTargetTime = n.offset)
    }
    function Xa(e, a, t) {
        var n, r;
        e.playerData.lastErrorCode[a] = t.code,
        je(e, L),
        e.meta.eventPreAbandonment = _(a, "error"),
        e.errors.numberEventsSent < e.errors.NUM_ERRORS_PER_SESSION && (r = a,
        "number" == typeof (n = e).playerData.lastErrorCode[r] || Math.random() < n.errors.SAMPLE_RATE) && (e.errors.numberEventsSent += 1,
        ga(e, a, p))
    }
    var Ya = be
      , Za = ye
      , et = ge
      , at = e;
    function tt(e) {
        var a = e.meta;
        a.playbackEvents = {},
        a.playbackSent = !1,
        a.playbackTracking.trackingSegment = 0,
        a.pingLimiters.playlistItem.resetAll(),
        a.playbackTracking.posterVideoThumbAnimated = void 0,
        a.playbackTracking.overlayVideoThumbAnimated = void 0,
        e.playerData.numAutoVisualQualityChange = 0;
        var t = e.playerData.startup;
        t.initialTime = null,
        t.startupTime = null,
        t.dispatchEvent = null
    }
    function nt(v) {
        var e, a, g = v.external.playerAPI, i = function(e, a) {
            e.playlistItemData.playReason = a.playReason || "",
            e.playerData.startup.initialTime = Date.now(),
            ga(e, "pa")
        }
        .bind(null, v), t = function(e, a) {
            var t = e.playlistItemData.mediaId;
            t && t === ae(a.item) && (e.playerData.lastErrorCode[b] = a.code,
            ga(e, "paf", "error"))
        }
        .bind(null, v);
        g.on("idle buffer play pause complete error", function(e) {
            Da(v, e.type)
        }),
        g.on("idle", tt.bind(null, v)),
        g.on("ready", function(e) {
            var a = v.playlistItemData
              , t = v.playerData;
            a.ready = N({}, e),
            t.viewable = g.getViewable(),
            t.muted = g.getMute(),
            t.volume = g.getVolume(),
            t.inferencePluginVersion = K(g.getPlugin("inference")),
            t.biddingPluginVersion = K(g.getPlugin("bidding"))
        }),
        g.on("playlistItem", function(e) {
            var a = v.playlistItemData;
            a.drm = "",
            0 !== v.meta.playbackTracking.playSessionSequence && (a.itemId = Ca(12)),
            v.meta.playbackTracking.playSessionSequence++,
            a.index = e.index;
            var t, n, r = e.item || Pe(g);
            r && (a.mediaId = ae(r),
            re(v, r)),
            a.ready && (v.meta.playbackTracking.posterVideoThumbnail = ne(e.item),
            t = v,
            n = a.ready,
            t.playerData.setupTime = -1,
            n && n.setupTime && (t.playerData.setupTime = 10 * Math.round(n.setupTime / 10) | 0),
            ga(t, "e"),
            a.item = null,
            a.ready = null),
            g.off("beforePlay", i),
            g.once("beforePlay", i),
            tt(v),
            v.meta.playbackTracking.segmentReceived = v.meta.playbackTracking.segmentsEncrypted = !1
        }),
        g.on("playAttemptFailed", t),
        g.on("meta", Ka(v, et)),
        g.on("levels", Ka(v, Za)),
        g.on("play", Ka(v, at)),
        g.on("firstFrame", Ka(v, Ya)),
        g.on("time", function(e) {
            var a = v.meta.playbackEvents
              , t = v.meta.playbackTracking
              , n = "number" == typeof e.currentTime ? e.currentTime : Te(g);
            t.currentPosition = n;
            var r = e.duration;
            if (n)
                if (v.meta.seekTracking.dragStartTime)
                    t.previousTime = n;
                else {
                    1 < n && (a[Za] || Ka(v, Za)({}));
                    var i, o, d, l = We(r), c = (i = n,
                    d = l,
                    (o = r) === 1 / 0 ? null : i / (o / d) + 1 | 0);
                    0 === t.trackingSegment && (t.trackingSegment = c);
                    var u, s, p, f = (u = v,
                    p = wa(s = t, n),
                    u.playerData.viewable && (s.viewablePlayedSeconds = s.viewablePlayedSeconds + p),
                    !u.playerData.muted && 0 < u.playerData.volume && (s.audiblePlayedSeconds = s.audiblePlayedSeconds + p),
                    p);
                    if (Ha(v, t.playedSecondsTotal, f, 10),
                    Ha(v, t.playedSecondsTotal, f, 30),
                    Ha(v, t.playedSecondsTotal, f, 60),
                    t.playedSecondsTotal = t.playedSecondsTotal + f,
                    !0 === t.sendSetTimeEvents && ($a(v, n, 3),
                    $a(v, n, 10),
                    $a(v, n, 30)),
                    r <= 0 || r === 1 / 0)
                        t.playedSeconds >= Ie && (t.latency = e.latency,
                        Wa(v));
                    else if (c === t.trackingSegment + 1) {
                        var m = he * t.trackingSegment / l;
                        if (l < c)
                            return;
                        t.normalizedTime = m,
                        Wa(v),
                        t.trackingSegment = 0
                    }
                }
        }),
        g.on("seek", function(e) {
            v.meta.playbackTracking.previousTime = Te(g),
            v.meta.playbackTracking.trackingSegment = 0;
            var a = v.meta.playbackTracking.currentPosition;
            Ja(v, e, !1, a)
        }),
        g.on("seeked", function(e) {
            Ja(v, e, !0)
        }),
        g.on("complete", function() {
            var e = v.meta.playbackTracking
              , a = xe(v);
            if (!(a <= 0 || a === 1 / 0)) {
                We(a);
                e.normalizedTime = he,
                Wa(v),
                e.playedSecondsTotal = 0
            }
        }),
        g.on("cast", function(e) {
            v.casting = !!e.active
        }),
        g.on("playbackRateChanged", function(e) {
            ga(v, "pru"),
            v.meta.playbackTracking.prevPlaybackRate = e.playbackRate
        }),
        g.on("visualQuality", function(e) {
            "auto" === e.reason && (v.playerData.numAutoVisualQualityChange += 1);
            var a, t, n = Ae(g);
            a = n,
            t = !1,
            Ce.width === a.width && Ce.height === a.height || (t = !0),
            Ce = a,
            t && -1 === ke.indexOf(n.reason) && ga(v, "vqc")
        }),
        g.on(De.join(" "), function() {
            v.ads.adBreakTracking && (v.ads.adBreakTracking.shouldTrack = !0)
        }),
        g.on("error", Xa.bind(null, v, L)),
        g.on("setupError", Xa.bind(null, v, G)),
        g.on("autostartNotAllowed", function() {
            ga(v, m)
        }),
        g.on("viewable", function(e) {
            v.playerData.viewable = e.viewable
        }),
        g.on("mute", function(e) {
            v.playerData.muted = e.mute
        }),
        g.on("volume", function(e) {
            v.playerData.volume = e.volume
        }),
        g.on("captionsChanged", function(e) {
            0 !== e.track && 0 === v.playerData.captionsIndex && ga(v, T),
            v.playerData.captionsIndex = e.track
        }),
        g.on("videoThumbFirstFrame", function(e) {
            v.meta.playbackTracking.posterVideoThumbAnimated = !0
        }),
        g.on("inference", function(e) {
            var t;
            t = e,
            v.inference.result = Na.reduce(function(e, a) {
                return t[a] && (e[a] = t[a]),
                e
            }, {})
        }),
        tt(v),
        a = y,
        (e = v).meta.previousBufferTimes[a] = He(e)
    }
    function rt(e, a) {
        e.related.feedId = X(a),
        e.related.feedInstanceId = Y(a),
        e.related.feedType = ee(a, "kind"),
        e.related.feedShownId = a.feedShownId,
        e.related.onClickSetting = "onclick"in a ? "play" === a.onclick ? 1 : 0 : void 0,
        e.related.feedInterface = a.ui;
        var t = a.itemsShown || []
          , n = 0
          , r = []
          , i = []
          , o = []
          , d = !0
          , l = !1;
        t.forEach(function(e) {
            Z(e) && n++,
            r.push(ae(e));
            var a = ne(e) ? "1" : "0";
            l || "1" !== a || (l = !0),
            o.push(a);
            var t = Q(e, "variations.selected.images.id");
            t && (d = !1),
            i.push(t || "null")
        }),
        e.related.thumbnailIdsShown = d ? [] : i,
        e.related.idsShown = r,
        e.related.pinnedCount = n,
        e.related.page = a.page,
        e.related.autotimerLength = a.autoTimer,
        e.related.pinSetId = Z(a.target),
        e.related.advanceTarget = ae(a.target),
        e.related.targetThumbID = Q(a.target, "variations.selected.images.id"),
        e.related.overlayVideoThumbs = l ? o.join(",") : void 0,
        e.related.ordinalClicked = "position"in a ? a.position + 1 : a.index
    }
    function it(e, a, t) {
        rt(e, a),
        ga(e, t)
    }
    function ot(a) {
        var e = a.external.playerAPI.getPlugin("related");
        e && (e.on("playlist", function(e) {
            null !== e.playlist && it(a, e, h)
        }),
        e.on("feedShown", function(e) {
            Da(a, "recs-overlay"),
            a.related.shownReason = e.reason,
            a.related.feedWasViewable = e.viewable,
            it(a, e, k)
        }),
        e.on("feedClick", function(e) {
            it(a, e, D)
        }),
        e.on("feedAutoAdvance", function(e) {
            it(a, e, w)
        }),
        e.on("videoThumbFirstFrame", function(e) {
            a.meta.playbackTracking.overlayVideoThumbAnimated = !0
        }),
        a.related.relatedSetUp = !0)
    }
    function dt(t) {
        t.external.playerAPI.getPlugin && (t.external.playerAPI.on("ready", function() {
            var a, e;
            ot(t),
            (e = (a = t).external.playerAPI).on("playlistItem", function() {
                a.related.sendHoverPing = !0,
                a.related.nextShownReason = null,
                a.related.shownReason = null
            }),
            e.on("nextShown", function(e) {
                a.related.nextShownReason = e.reason,
                a.related.shownReason = e.reason,
                Da(a, "recs-overlay"),
                ("hover" !== e.reason || a.related.sendHoverPing) && (a.related.sendHoverPing = !1,
                it(a, e, k))
            }),
            e.on("nextClick", function(e) {
                a.related.nextShownReason && it(a, e, D)
            }),
            e.on("nextAutoAdvance", function(e) {
                it(a, e, w)
            })
        }),
        t.external.playerAPI.on("relatedReady", function() {
            t.related.relatedSetUp || ot(t)
        }))
    }
    var lt = {
        facebook: "fb",
        twitter: "twi",
        email: "em",
        link: "cl",
        embed: "ceb",
        pinterest: "pin",
        tumblr: "tbr",
        googleplus: "gps",
        reddit: "rdt",
        linkedin: "lkn",
        custom: "cus"
    };
    function ct(e) {
        e.external.playerAPI.on("ready", function() {
            !function(a) {
                var e = a.external.playerAPI;
                if (e.getPlugin) {
                    var t = e.getPlugin("sharing");
                    t && t.on("click", function(e) {
                        a.sharing.shareMethod = lt[e.method] || lt.custom,
                        ga(a, g)
                    })
                }
            }(e)
        })
    }
    var ut = .01;
    function st(e) {
        return function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window).navigator.plugins;
            if (e && "object" == typeof e["Shockwave Flash"]) {
                var a = e["Shockwave Flash"].description;
                if (a)
                    return a
            }
            if (void 0 !== window.ActiveXObject)
                try {
                    var t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (t) {
                        var n = t.GetVariable("$version");
                        if (n)
                            return n
                    }
                } catch (e) {}
            return ""
        }(e).replace(/\D+(\d+\.?\d*).*/, "$1")
    }
    st(window);
    var pt = Ca(12);
    function ft(e, a) {
        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : window;
        if (e)
            return {
                pageViewId: pt
            };
        var n, r, i = t.document, o = t.top, d = t.location, l = i.referrer, c = (n = t).top !== n.self, u = function(e, a, t) {
            var n = ""
              , r = ""
              , i = ""
              , o = !1;
            if (e) {
                if (n = function(e) {
                    var a = e.match(/^(https?:\/\/).*\.(?:ampproject\.org|bing-amp\.com)\/(?:.\/)?(?:.\/)?(.*)$/);
                    if (a && 1 < a.length)
                        return "" + a[1] + a[2];
                    var t = e.match(/^(https?:\/\/.*)\.(?:cdn\.ampproject\.org|bing-amp\.com)$/);
                    if (t && 1 < t.length)
                        return ("" + t[1]).replace(/([^-])(\-)([^-])/g, "$1.$3").replace(/\-\-/g, "-");
                    return e
                }(r = a),
                o = n !== a,
                !t)
                    return {
                        pageURL: n,
                        origPageURL: r,
                        amp: o,
                        pageTitle: i
                    };
                try {
                    i = t.document.title;
                    var d = t.location.href;
                    r = r || d,
                    n = n || d
                } catch (e) {}
            }
            return {
                pageURL: n,
                origPageURL: r,
                amp: o,
                pageTitle: i
            }
        }(c, l, o), s = i.querySelector('meta[property="og:title"]'), p = void 0;
        return s && (p = s.getAttribute("content")),
        {
            pageURL: u.pageURL || d.href,
            origPageURL: u.amp ? u.origPageURL : void 0,
            pageTitle: u.pageTitle || i.title,
            inIframe: c,
            flashVersion: st(t),
            pageViewId: pt,
            pageOGTitle: p,
            testCaseId: a ? function(e) {
                var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window;
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(a.location.search);
                return null === t ? void 0 : decodeURIComponent(t[1].replace(/\+/g, " "))
            }("test_case_id", t) : void 0,
            amp: u.amp,
            jwAmpComponent: (r = i.location.search,
            /isAMP/.test(r))
        }
    }
    var mt = void 0;
    try {
        mt = window.localStorage
    } catch (e) {}
    var vt = function() {
        function e() {
            na(this, e),
            this.pingTracker = {}
        }
        return e.prototype.canSendPing = function(e) {
            return !this.pingTracker[e]
        }
        ,
        e.prototype.setPingSent = function(e) {
            this.pingTracker[e] = !0
        }
        ,
        e.prototype.resetAll = function() {
            this.pingTracker = {}
        }
        ,
        e.prototype.resetKey = function(e) {
            delete this.pingTracker[e]
        }
        ,
        e
    }();
    var gt = ["1", "yes", "true"];
    function yt(e, a) {
        return !0 === e || !!(t = a) && 0 <= gt.indexOf(t.toString());
        var t
    }
    var bt = 0;
    function ht(e, a, t) {
        var n, r, i = a.sdkplatform ? parseInt(a.sdkplatform, 10) : we, o = e.getConfig(), d = (o || {}).advertising || {}, l = bt += 1, c = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window
              , a = e.navigator;
            return "doNotTrack"in a || "doNotTrack"in e || "msDoNotTrack"in a ? a.doNotTrack || e.doNotTrack || a.msDoNotTrack : "unsupported"
        }(), u = yt(c, o.doNotSaveCookies), s = void 0, p = void 0;
        if (u)
            mt && mt.removeItem("jwplayerLocalId");
        else {
            var f = function() {
                if (!mt)
                    return {
                        localID: null,
                        storageAvailable: "fail"
                    };
                var e = mt.jwplayerLocalId;
                if (e)
                    return {
                        localID: e,
                        storageAvailable: "read"
                    };
                try {
                    return mt.jwplayerLocalId = Ca(12),
                    {
                        localID: mt.jwplayerLocalId,
                        storageAvailable: "set"
                    }
                } catch (e) {
                    return {
                        localID: null,
                        storageAvailable: "fail"
                    }
                }
            }();
            s = f.localID,
            p = f.storageAvailable
        }
        var m = function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document).querySelector("html");
            return e ? e.getAttribute("lang") : null
        }()
          , v = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window;
            return e.matchMedia && e.matchMedia("(display-mode: standalone)").matches || !0 === e.navigator.standalone
        }()
          , g = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window;
            try {
                if (e.top !== e.self)
                    return e.top.document.referrer
            } catch (e) {
                return null
            }
            return e.document.referrer
        }()
          , y = o.defaultPlaybackRate || 1
          , b = q(d.client);
        e.getPlugin && e.getPlugin("related");
        var h, k, D, w, I, S, T, P, E, C, A, x, j, R = Math.random() <= ut;
        return {
            external: {
                playerAPI: e,
                div: t,
                utils: e.utils
            },
            playerData: {
                setupTime: -1,
                startup: {
                    initialTime: null,
                    startupTime: null,
                    dispatchEvent: null
                },
                visualQuality: Ae(e),
                numAutoVisualQualityChange: 0,
                lastErrorCode: {},
                defaultPlaybackRate: y,
                playerConfig: {
                    visibility: -1,
                    bandwidthEstimate: -1,
                    floatingState: !1
                },
                floatingConfigured: !(null === (n = o.setupConfig) || void 0 === n || !n.floating || (null === (r = o.setupConfig) || void 0 === r ? void 0 : r.floating.disabled)),
                playerSize: {
                    width: 0,
                    height: 0,
                    bucket: 0
                },
                localization: {
                    language: o.language,
                    numIntlKeys: "object" == typeof o.intl ? Object.keys(o.intl).length : null,
                    numLocalKeys: "object" == typeof o.localization ? Object.keys(o.localization).length : null
                },
                contextualEmbed: !!o.contextual,
                playbackMode: null,
                stringifiedSetupConfig: Re(e),
                captionsIndex: 0
            },
            staticPlayerData: (E = e,
            C = a,
            A = i,
            j = {
                playerVersion: (x = E.version,
                x.split("+")[0]),
                sdkPlatform: C.sdkplatform || we,
                embedID: Ca(12)
            },
            A && (j.sdkVersion = C.iossdkversion,
            j.bundleId = C.bundleId,
            j.advertisingId = C.advertisingId,
            j.deviceModel = C.deviceModel),
            j),
            casting: !1,
            accountData: function(e, a) {
                var t = 0
                  , n = void 0;
                if (e) {
                    var r = new a(e)
                      , i = r.edition();
                    (t = me[i] || 0) !== fe && (n = r.token())
                }
                return n || (n = "_"),
                {
                    analyticsID: n,
                    edition: t
                }
            }(o.key, e.utils.key),
            configData: (w = o,
            S = window.jwplayer && window.jwplayer.defaults || {},
            T = w.related,
            P = {
                playerHosting: w[V] || S[V] || 0,
                playerConfigKey: w.pid,
                abTestConfig: w.pad,
                skinName: w.skin,
                advertisingBlockType: (I = w,
                I.advertising ? I.advertising.outstream ? 2 : 1 : 0),
                sharingEnabled: !!w.sharing,
                castingBlockPresent: !!w.cast,
                gaBlockPresent: !!w.ga,
                autostartConfig: !!w.autostart,
                displayDescription: !1 !== w.displaydescription,
                posterImagePresent: !!w.image,
                playbackRateControlsSet: !!w.playbackRateControls
            },
            w.autostart in ve && (P.autostartConfig = ve[w.autostart]),
            T && (P.relatedPluginFeedFile = T.recommendations || T.file),
            P),
            placementData: (k = a.placement,
            D = {},
            ["analyticsId", "embedId", "placementId", "evaluationId", "triggerId", "outcomeId", "version"].forEach(function(e) {
                k && k.hasOwnProperty(e) && (D[e] = k[e])
            }),
            D),
            browser: {
                langAttr: m,
                isPageStandalone: v,
                docReferrer: g,
                storage: {
                    localID: s,
                    storageAvailable: p,
                    doNotTrackProperty: c
                },
                pageData: ft(i, !1),
                doNotTrackUser: u
            },
            meta: {
                debug: !0 === a.debug,
                doNotPingBackIDs: (h = o,
                !0 === h.doNotTrackCookies),
                setupCount: bt,
                nthPlayer: l,
                playbackEvents: {},
                playbackSent: void 0,
                playbackTracking: {
                    trackingSegment: void 0,
                    playedSeconds: 0,
                    viewablePlayedSeconds: 0,
                    audiblePlayedSeconds: 0,
                    playedSecondsTotal: 0,
                    previousTime: null,
                    segmentReceived: !1,
                    segmentsEncrypted: !1,
                    playItemCount: 0,
                    playSessionSequence: 0,
                    prevPlaybackRate: y,
                    retTimeWatched: 0,
                    normalizedTime: -1,
                    elapsedSeconds: 0,
                    viewableElapsedSeconds: 0,
                    audibleElapsedSeconds: 0,
                    currentPosition: 0,
                    thresholdCrossed: 0,
                    sendSetTimeEvents: o.setTimeEvents || !1,
                    cueStartTime: void 0,
                    programDateTime: void 0
                },
                bufferedPings: [],
                seekTracking: {
                    numTrackedSeeks: 0,
                    videoStartDragTime: 0,
                    dragStartTime: 0,
                    seekDebounceTimeout: null,
                    lastTargetTime: 0
                },
                previousBufferTimes: {},
                lastEvent: "",
                lastBucket: "",
                eventPreAbandonment: void 0,
                playerState: "idle",
                playerStateDuration: 0,
                playerRemoved: !1,
                pingLimiters: {
                    playlistItem: new vt
                },
                sessionSampled: R
            },
            playlistItemData: {
                ready: void 0,
                item: {},
                drm: "",
                index: 0,
                itemId: Ca(12),
                mediaId: "",
                playReason: "",
                duration: 0
            },
            interactive: {
                eventId: null,
                eventName: null,
                interactionType: null,
                cueId: null,
                elementId: null,
                elementName: null,
                projectId: null,
                projectName: null,
                projectVersion: null
            },
            related: {
                shownReason: null,
                nextShownReason: null,
                sendHoverPing: null,
                feedId: null,
                feedInstanceId: null,
                feedType: null,
                onClickSetting: -1,
                feedInterface: null,
                idsShown: [],
                thumbnailIdsShown: [],
                pinnedCount: -1,
                page: -1,
                autotimerLength: -1,
                pinSetId: -1,
                advanceTarget: null,
                ordinalClicked: -1,
                relatedSetUp: !1
            },
            sharing: {
                shareMethod: null,
                shareReferrer: function(e) {
                    if (!e)
                        return null;
                    var a = e.match(/[?&]jwsource=([^&]+)/);
                    return a ? decodeURIComponent(a[1]) : null
                }(window.location.search)
            },
            ads: {
                adEventData: N({}, B),
                advertisingConfig: d,
                adClient: b,
                adScheduleId: d.adscheduleid,
                adBreakTracking: -1 !== b ? {
                    shouldTrack: !1,
                    adBreakCount: 0
                } : null,
                adPlaybackTracking: {
                    consecutiveVisibleSeconds: 0,
                    maxConsecutiveVisibleSeconds: 0,
                    totalVisibleSeconds: 0
                },
                headerBiddingData: {},
                headerBiddingCacheData: {
                    bidder: null,
                    cacheKey: null
                },
                watchedPastSkipPoint: null,
                jwAdErrorCode: null,
                currentQuartile: null,
                pingLimiters: {
                    visibleEvent: new vt
                }
            },
            errors: {
                SAMPLE_RATE: .02,
                NUM_ERRORS_PER_SESSION: 1,
                numberEventsSent: 0
            },
            trackingState: {
                pageLoaded: null,
                queue: [],
                onping: "function" == typeof a.onping ? a.onping : null,
                images: [],
                boundFlushQueue: null
            },
            inference: {
                result: null
            }
        }
    }
    var kt = 0;
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("jwpsrv", "7.0", function(e, a, t) {
        var n, r, i = ht(e, a, t);
        Pa(n = i),
        nt(n),
        Ta(n),
        dt(n),
        ct(n),
        Oa(n),
        pa(i),
        this.getTrackingPixelURLs = (r = i,
        function(e, a) {
            r.ads.headerBiddingCacheData.bidder = e,
            r.ads.headerBiddingCacheData.cacheKey = a;
            var t = ga(r, "vci", "clienta", {
                returnURL: !0
            })
              , n = ga(r, "vcae", "clienta", {
                returnURL: !0
            });
            return r.ads.headerBiddingCacheData.bidder = void 0,
            r.ads.headerBiddingCacheData.cacheKey = void 0,
            {
                impression: t,
                error: n
            }
        }
        ),
        this.doNotTrackUser = function(e) {
            return e.meta.doNotPingBackIDs
        }
        .bind(null, i),
        this.trackExternalAPIUsage = function(e, a) {
            var t, n, r;
            if (!(25 <= kt || .005 < Math.random()))
                return kt++,
                n = e,
                r = a,
                (t = i).playerData.apiTracking = {
                    methodCalled: n,
                    firstMeaningfulParam: r
                },
                ga(t, S, "jwplayer6"),
                void delete t.playerData.apiTracking
        }
    })
}();
