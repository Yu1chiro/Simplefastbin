// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCNM6jFlIQJWn49pawqIulqW67FD8OSK6U",
  authDomain: "bot-project-8d259.firebaseapp.com",
  databaseURL: "https://bot-project-8d259-default-rtdb.firebaseio.com",
  projectId: "bot-project-8d259",
  storageBucket: "bot-project-8d259.firebasestorage.app",
  messagingSenderId: "289445545944",
  appId: "1:289445545944:web:3356b5213b45780ef394ad",
  measurementId: "G-L1PQXGH3K3",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const Swal = window.Swal;
//   pin tidak bisa ter fetch dan ter authentikasi
const _0x137f01 = _0x27e1;
function _0x28ea() {
  const _0x214ce1 = [
    "addEventListener",
    "length",
    "catch",
    "article_",
    "true",
    "Artikel\x20yang\x20diminta\x20tidak\x20ada\x20di\x20database",
    "Error\x20loading\x20article:",
    "Saweria\x20Support\x20Barcode",
    "ref",
    "Article\x20copied!",
    "trim",
    "copy-content-btn",
    "addRange",
    "Artikel\x20Tidak\x20Ditemukan",
    "now",
    "Articles/",
    "#f0fdf4",
    "getSelection",
    "Scan\x20and\x20support\x20me\x20on\x20Saweria",
    "div",
    "log",
    "writeText",
    "Link\x20berhasil\x20disalin!",
    "copy-link-btn",
    "message",
    "statusText",
    "json",
    "title",
    "1238752hPFZAd",
    "article-content",
    "top-end",
    "Untitled",
    "_verified",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-white\x20p-6\x20rounded-lg\x20shadow-xl\x20max-w-md\x20w-full\x22>\x0a<div\x20class=\x22flex\x20justify-center\x20mb-2\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20fill=\x22#000000\x22\x20height=\x2248\x22\x20width=\x2248\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20viewBox=\x220\x200\x20370.32\x20370.32\x22\x20xml:space=\x22preserve\x22>\x0a<g>\x0a<path\x20d=\x22M154.66,134.16H86.993c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h67.667c8.284,0,15-6.716,15-15\x20\x20\x20C169.66,140.876,162.944,134.16,154.66,134.16z\x22/>\x0a<path\x20d=\x22M154.66,224.16H86.993c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h67.667c8.284,0,15-6.716,15-15\x20\x20\x20C169.66,230.876,162.944,224.16,154.66,224.16z\x22/>\x0a<path\x20d=\x22M271.993,152.878c-13.035,0-23.636,10.602-23.636,23.637v15.635h47.272v-15.635\x20\x20\x20C295.629,163.48,285.028,152.878,271.993,152.878z\x22/>\x0a<path\x20d=\x22M343.358,177.646v-1.131c0-31.924-21.069-59.017-50.031-68.109V73.703c0-3.934-1.56-7.706-4.344-10.484l-58.876-58.88\x20\x20\x20C227.323,1.561,223.557,0,219.623,0H42.439C26.386,0,13.327,13.06,13.327,29.112v312.095c0,16.054,13.059,29.113,29.111,29.113\x20\x20\x20h221.777c16.052,0,29.111-13.06,29.111-29.113v-11.508h22.758c22.557,0,40.908-18.352,40.908-40.91v-80.727\x20\x20\x20C356.993,196.148,351.755,185.208,343.358,177.646z\x20M261.714,337.906H44.94V32.414h154.088v43.577\x20\x20\x20c0,10.554,8.554,19.106,19.105,19.106h43.58v10.8c-34.496,5-61.086,34.757-61.086,70.619v1.131\x20\x20\x20c-8.395,7.563-13.635,18.502-13.635,30.416v80.727c0,22.558,18.352,40.91,40.908,40.91h33.813V337.906z\x20M331.993,219.73h-27.044\x20\x20\x20c-6.404,0-11.592,5.191-11.592,11.59c0,6.4,5.188,11.59,11.592,11.59h27.044v16.561h-27.044c-6.404,0-11.592,5.189-11.592,11.594\x20\x20\x20c0,6.402,5.188,11.592,11.592,11.592h27.044v6.133c0,8.789-7.121,15.91-15.908,15.91h-88.184c-8.787,0-15.908-7.121-15.908-15.91\x20\x20\x20v-80.727c0-8.016,5.925-14.643,13.635-15.748v-15.799c0-25.57,20.801-46.369,46.365-46.369c25.564,0,46.365,20.799,46.365,46.369\x20\x20\x20v15.799c7.71,1.105,13.635,7.732,13.635,15.748V219.73z\x22/>\x0a</g>\x0a</svg>\x0a</div>\x0a<h3\x20class=\x22text-xl\x20font-bold\x20mb-4\x20text-center\x22>Permission\x20Required</h3>\x0a<p\x20class=\x22mb-4\x20text-gray-600\x20text-center\x22>This\x20article\x20has\x20been\x20protected\x20with\x20password</p>\x0a<input\x20type=\x22password\x22\x20id=\x22password-input\x22\x20class=\x22w-full\x20p-2\x20mb-4\x20border-b\x20border-gray-600\x20focus:outline-none\x20focus:border-b-2\x20focus:border-blue-500\x20rounded\x20transition\x22\x20placeholder=\x22Enter\x20password\x22\x20autofocus>\x0a<div\x20class=\x22flex\x20justify-end\x20space-x-2\x22>\x0a\x20\x20\x20<button\x20id=\x22cancel-password-btn\x22\x20class=\x22px-4\x20py-2\x20bg-red-600\x20text-white\x20rounded\x20hover:bg-red-700\x20transition\x22>Cancel</button>\x0a\x20\x20\x20<button\x20id=\x22submit-password-btn\x22\x20class=\x22px-4\x20py-2\x20bg-green-600\x20text-white\x20rounded\x20hover:bg-green-700\x20transition\x22>Submit</button>\x0a</div>\x0a</div>\x0a\x20\x20\x20",
    "222ZPdiaJ",
    "fire",
    "\x20dihapus\x20otomatis",
    "POST",
    "content",
    "removeAllRanges",
    "copy",
    "Konten\x20ini\x20hanya\x20tersedia\x20selama\x2024\x20jam",
    "Support",
    "#16a34a",
    "clipboard",
    "DELETE",
    "classList",
    "remove",
    "value",
    "pathname",
    "Failed\x20to\x20copy\x20link:\x20",
    "Error",
    "removeItem",
    "delete-btn",
    "location",
    "exists",
    "Gagal\x20memuat\x20artikel",
    "#dc2626",
    "1158188LkQGZq",
    "once",
    "val",
    "click",
    "error",
    "setItem",
    "password-overlay",
    "then",
    "54515vLaQzv",
    "1260756OujNyV",
    "1094409ezbILZ",
    "getElementById",
    "DOMContentLoaded",
    "password-input",
    "innerHTML",
    "createRange",
    "fixed\x20inset-0\x20bg-black\x20bg-opacity-90\x20flex\x20items-center\x20justify-center\x20z-50",
    "Close",
    "off",
    "/verify",
    "#fef2f2",
    "key",
    "Kembali\x20ke\x20Beranda",
    "isLoading",
    "#ffffff",
    "createdAt",
    "password",
    "hidden",
    "submit-password-btn",
    "href",
    "/api/article/",
    "isProtected",
    "Deleted!",
    "Your\x20article\x20has\x20been\x20deleted.",
    "372664bjKugi",
    "Enter\x20PIN\x20to\x20Delete",
    "8DsUBSv",
    "appendChild",
    "keypress",
    "5088181mdXZFD",
    "success",
  ];
  _0x28ea = function () {
    return _0x214ce1;
  };
  return _0x28ea();
}
function _0x27e1(_0x3f681a, _0x472746) {
  const _0x28eae8 = _0x28ea();
  return (
    (_0x27e1 = function (_0x27e1f6, _0x252169) {
      _0x27e1f6 = _0x27e1f6 - 0x81;
      let _0x5bf169 = _0x28eae8[_0x27e1f6];
      return _0x5bf169;
    }),
    _0x27e1(_0x3f681a, _0x472746)
  );
}
(function (_0xbf7716, _0x538db3) {
  const _0x1f92b2 = _0x27e1,
    _0x407bc3 = _0xbf7716();
  while (!![]) {
    try {
      const _0x2235f5 =
        -parseInt(_0x1f92b2(0x97)) / 0x1 +
        -parseInt(_0x1f92b2(0xba)) / 0x2 +
        parseInt(_0x1f92b2(0xe1)) / 0x3 +
        -parseInt(_0x1f92b2(0xd8)) / 0x4 +
        (-parseInt(_0x1f92b2(0xe0)) / 0x5) * (-parseInt(_0x1f92b2(0xc0)) / 0x6) +
        (parseInt(_0x1f92b2(0x9c)) / 0x7) * (parseInt(_0x1f92b2(0x99)) / 0x8) +
        parseInt(_0x1f92b2(0xe2)) / 0x9;
      if (_0x2235f5 === _0x538db3) break;
      else _0x407bc3["push"](_0x407bc3["shift"]());
    } catch (_0x33b230) {
      _0x407bc3["push"](_0x407bc3["shift"]());
    }
  }
})(_0x28ea, 0x5f5a0),
  document["addEventListener"](_0x137f01(0x81), () => {
    const _0x46ef54 = _0x137f01,
      _0x738557 = document[_0x46ef54(0xe3)](_0x46ef54(0xbb)),
      _0x321e04 = document["getElementById"]("article-title"),
      _0x4deffe = document[_0x46ef54(0xe3)](_0x46ef54(0xa9)),
      _0xad81dd = document["getElementById"](_0x46ef54(0xb5)),
      _0x446c70 = document[_0x46ef54(0xe3)](_0x46ef54(0xd3)),
      _0x3b9174 = window[_0x46ef54(0xd4)][_0x46ef54(0xcf)]["split"]("/"),
      _0x5cae9c = _0x3b9174[_0x3b9174[_0x46ef54(0x9f)] - 0x1],
      _0x54e3b6 = window[_0x46ef54(0xd4)][_0x46ef54(0x92)];
    let _0x1007de = ![],
      _0x2b6b71 = ![];
    const _0x14b2e2 = _0x46ef54(0xa1) + _0x5cae9c + _0x46ef54(0xbe),
      _0x21a867 = localStorage["getItem"](_0x14b2e2) === _0x46ef54(0xa2);
    function _0x257cf6() {
      const _0x4cb706 = _0x46ef54;
      if (_0x21a867) {
        _0x253bda();
        return;
      }
      const _0x43d107 = document["createElement"](_0x4cb706(0xb1));
      (_0x43d107["id"] = "password-overlay"),
        (_0x43d107["className"] = _0x4cb706(0x85)),
        (_0x43d107[_0x4cb706(0x83)] = _0x4cb706(0xbf)),
        document["body"][_0x4cb706(0x9a)](_0x43d107),
        document[_0x4cb706(0xe3)]("cancel-password-btn")[_0x4cb706(0x9e)](_0x4cb706(0xdb), () => {
          const _0x4c12a3 = _0x4cb706;
          window[_0x4c12a3(0xd4)][_0x4c12a3(0x92)] = "/";
        }),
        document["getElementById"](_0x4cb706(0x91))["addEventListener"](_0x4cb706(0xdb), _0xca5936),
        document[_0x4cb706(0xe3)](_0x4cb706(0x82))["addEventListener"](_0x4cb706(0x9b), (_0xb8c02d) => {
          const _0x1c1058 = _0x4cb706;
          _0xb8c02d[_0x1c1058(0x8a)] === "Enter" && _0xca5936();
        });
    }
    function _0x253bda() {
      const _0x31a9c7 = _0x46ef54;
      database[_0x31a9c7(0xa6)](_0x31a9c7(0xad) + _0x5cae9c)
        [_0x31a9c7(0xd9)](_0x31a9c7(0xce))
        [_0x31a9c7(0xdf)]((_0x3ae2e0) => {
          const _0x821b93 = _0x31a9c7;
          if (_0x3ae2e0[_0x821b93(0xd5)]()) {
            const _0x6090b3 = _0x3ae2e0["val"]();
            (_0x321e04["textContent"] = _0x6090b3[_0x821b93(0xb9)] || _0x821b93(0xbd)),
              (_0x738557[_0x821b93(0x83)] = _0x6090b3[_0x821b93(0xc4)]),
              _0x6090b3["pin"] && ((_0x1007de = !![]), _0x446c70[_0x821b93(0xcc)][_0x821b93(0xcd)](_0x821b93(0x90)));
          }
        })
        ["catch"]((_0x4700ea) => {
          const _0xb7f44 = _0x31a9c7;
          console[_0xb7f44(0xdc)](_0xb7f44(0xa4), _0x4700ea),
            Swal[_0xb7f44(0xc1)]({
              toast: !![],
              position: _0xb7f44(0xbc),
              icon: _0xb7f44(0xdc),
              title: "Error",
              text: "Failed\x20to\x20load\x20article\x20content",
              showConfirmButton: ![],
              timer: 0xbb8,
              timerProgressBar: !![],
              background: _0xb7f44(0x89),
              iconColor: _0xb7f44(0xd7),
            });
        });
    }
    function _0xca5936() {
      const _0x478a3d = _0x46ef54,
        _0x1796ce = document[_0x478a3d(0xe3)](_0x478a3d(0x82))[_0x478a3d(0xce)][_0x478a3d(0xa8)]();
      if (!_0x1796ce) {
        Swal[_0x478a3d(0xc1)]({ icon: "error", title: _0x478a3d(0xd1), text: "Please\x20enter\x20a\x20password" });
        return;
      }
      fetch(_0x478a3d(0x93) + _0x5cae9c + _0x478a3d(0x88), { method: _0x478a3d(0xc3), headers: { "Content-Type": "application/json" }, body: JSON["stringify"]({ password: _0x1796ce }) })
        [_0x478a3d(0xdf)]((_0x4a3c5e) => _0x4a3c5e[_0x478a3d(0xb8)]())
        [_0x478a3d(0xdf)]((_0x192fa0) => {
          const _0x4a2add = _0x478a3d;
          if (_0x192fa0[_0x4a2add(0x9d)]) {
            localStorage[_0x4a2add(0xdd)](_0x14b2e2, _0x4a2add(0xa2));
            const _0x461aee = document[_0x4a2add(0xe3)](_0x4a2add(0xde));
            if (_0x461aee) _0x461aee[_0x4a2add(0xcd)]();
            _0x253bda();
          } else throw new Error(_0x192fa0["error"] || "Invalid\x20password");
        })
        [_0x478a3d(0xa0)]((_0x210180) => {
          const _0x5569e5 = _0x478a3d;
          Swal[_0x5569e5(0xc1)]({ icon: _0x5569e5(0xdc), title: _0x5569e5(0xd1), text: _0x210180[_0x5569e5(0xb6)] }),
            (document[_0x5569e5(0xe3)]("password-input")[_0x5569e5(0xce)] = ""),
            document[_0x5569e5(0xe3)](_0x5569e5(0x82))["focus"]();
        });
    }
    database[_0x46ef54(0xa6)](_0x46ef54(0xad) + _0x5cae9c)
      [_0x46ef54(0xd9)](_0x46ef54(0xce))
      [_0x46ef54(0xdf)]((_0x3a0955) => {
        const _0xf4e115 = _0x46ef54;
        if (_0x3a0955["exists"]()) {
          const _0xd199f0 = _0x3a0955[_0xf4e115(0xda)](),
            _0x2ab1b7 = Date[_0xf4e115(0xac)]();
          if (_0xd199f0[_0xf4e115(0x8e)] && _0x2ab1b7 - _0xd199f0["createdAt"] > 0x18 * 0x3c * 0x3c * 0x3e8) {
            database[_0xf4e115(0xa6)](_0xf4e115(0xad) + _0x5cae9c)
              [_0xf4e115(0xcd)]()
              [_0xf4e115(0xdf)](() => {
                const _0x344ced = _0xf4e115;
                localStorage["removeItem"](_0x14b2e2),
                  Swal[_0x344ced(0xc1)]({ icon: _0x344ced(0xdc), title: "Artikel\x20Kadaluarsa", text: _0x344ced(0xc7), confirmButtonText: _0x344ced(0x8b) })[_0x344ced(0xdf)](() => {
                    window["location"]["href"] = "/";
                  });
              });
            return;
          }
          if (_0xd199f0[_0xf4e115(0x94)] && _0xd199f0["protectPassword"]) {
            (_0x2b6b71 = !![]), _0x257cf6();
            _0x21a867 && _0x253bda();
            return;
          }
          _0x253bda();
          const _0x5e054a = 0x18 * 0x3c * 0x3c * 0x3e8 - (_0x2ab1b7 - _0xd199f0[_0xf4e115(0x8e)]);
          _0x5e054a > 0x0 &&
            setTimeout(() => {
              const _0x390757 = _0xf4e115;
              database["ref"](_0x390757(0xad) + _0x5cae9c)
                ["remove"]()
                ["then"](() => {
                  const _0x337d0a = _0x390757;
                  console[_0x337d0a(0xb2)]("Artikel\x20" + _0x5cae9c + _0x337d0a(0xc2)), localStorage["removeItem"](_0x14b2e2);
                });
            }, _0x5e054a);
        } else
          localStorage[_0xf4e115(0xd2)](_0x14b2e2),
            Swal[_0xf4e115(0xc1)]({
              toast: !![],
              position: _0xf4e115(0xbc),
              icon: _0xf4e115(0xdc),
              title: _0xf4e115(0xab),
              text: _0xf4e115(0xa3),
              showConfirmButton: ![],
              timer: 0xbb8,
              timerProgressBar: !![],
              background: _0xf4e115(0x89),
              iconColor: "#dc2626",
            })[_0xf4e115(0xdf)](() => {
              const _0x968ae6 = _0xf4e115;
              window[_0x968ae6(0xd4)]["href"] = "/";
            });
      })
      [_0x46ef54(0xa0)]((_0x2ff892) => {
        const _0x2b4e2a = _0x46ef54;
        console[_0x2b4e2a(0xdc)](_0x2b4e2a(0xa4), _0x2ff892),
          Swal[_0x2b4e2a(0xc1)]({
            toast: !![],
            position: _0x2b4e2a(0xbc),
            icon: "error",
            title: "Error",
            text: _0x2b4e2a(0xd6),
            showConfirmButton: ![],
            timer: 0xbb8,
            timerProgressBar: !![],
            background: _0x2b4e2a(0x89),
            iconColor: _0x2b4e2a(0xd7),
          });
      }),
      _0x446c70[_0x46ef54(0x9e)]("click", () => {
        const _0x352647 = _0x46ef54;
        _0x1007de
          ? Swal["fire"]({
              title: _0x352647(0x98),
              input: _0x352647(0x8f),
              inputAttributes: { autocapitalize: _0x352647(0x87), autocorrect: _0x352647(0x87) },
              showCancelButton: !![],
              confirmButtonText: "Delete",
              showLoaderOnConfirm: !![],
              preConfirm: (_0x19afff) => {
                const _0x2f0725 = _0x352647;
                return fetch(_0x2f0725(0x93) + _0x5cae9c, { method: _0x2f0725(0xcb), headers: { "Content-Type": "application/json" }, body: JSON["stringify"]({ pin: _0x19afff }) })
                  [_0x2f0725(0xdf)]((_0x260ebb) => {
                    const _0x32bff8 = _0x2f0725;
                    if (!_0x260ebb["ok"]) throw new Error(_0x260ebb[_0x32bff8(0xb7)]);
                    return _0x260ebb[_0x32bff8(0xb8)]();
                  })
                  [_0x2f0725(0xa0)]((_0x582c20) => {
                    Swal["showValidationMessage"]("Response\x20Failed\x20:\x20" + _0x582c20);
                  });
              },
              allowOutsideClick: () => !Swal[_0x352647(0x8c)](),
            })[_0x352647(0xdf)]((_0x223278) => {
              const _0x325813 = _0x352647;
              _0x223278["isConfirmed"] &&
                Swal[_0x325813(0xc1)]({ title: _0x325813(0x95), text: _0x325813(0x96), icon: _0x325813(0x9d) })["then"](() => {
                  const _0x17cfa5 = _0x325813;
                  window["location"][_0x17cfa5(0x92)] = "/";
                });
            })
          : fetch("/api/article/" + _0x5cae9c, { method: "DELETE" })[_0x352647(0xdf)]((_0x335846) => {
              const _0x2575e0 = _0x352647;
              _0x335846["ok"] &&
                Swal[_0x2575e0(0xc1)]({ title: _0x2575e0(0x95), text: "Your\x20article\x20has\x20been\x20deleted.", icon: _0x2575e0(0x9d) })[_0x2575e0(0xdf)](() => {
                  const _0xc6a724 = _0x2575e0;
                  window["location"][_0xc6a724(0x92)] = "/";
                });
            });
      }),
      _0x4deffe["addEventListener"]("click", () => {
        const _0x5973ba = _0x46ef54,
          _0x205cd8 = document[_0x5973ba(0x84)]();
        _0x205cd8["selectNode"](_0x738557),
          window["getSelection"]()[_0x5973ba(0xc5)](),
          window[_0x5973ba(0xaf)]()[_0x5973ba(0xaa)](_0x205cd8),
          document["execCommand"](_0x5973ba(0xc6)),
          window[_0x5973ba(0xaf)]()[_0x5973ba(0xc5)](),
          Swal[_0x5973ba(0xc1)]({
            toast: !![],
            position: _0x5973ba(0xbc),
            icon: _0x5973ba(0x9d),
            title: _0x5973ba(0xa7),
            showConfirmButton: ![],
            timer: 0x5dc,
            timerProgressBar: !![],
            background: _0x5973ba(0xae),
            iconColor: _0x5973ba(0xc9),
          });
      }),
      _0xad81dd[_0x46ef54(0x9e)](_0x46ef54(0xdb), () => {
        const _0x4eac6f = _0x46ef54;
        navigator[_0x4eac6f(0xca)]
          [_0x4eac6f(0xb3)](_0x54e3b6)
          ["then"](() => {
            const _0x343e73 = _0x4eac6f;
            Swal[_0x343e73(0xc1)]({
              toast: !![],
              position: _0x343e73(0xbc),
              icon: _0x343e73(0x9d),
              title: _0x343e73(0xb4),
              showConfirmButton: ![],
              timer: 0x3e8,
              timerProgressBar: !![],
              background: _0x343e73(0xae),
              iconColor: _0x343e73(0xc9),
            })[_0x343e73(0xdf)](() => {
              const _0x3ba351 = _0x343e73;
              Swal[_0x3ba351(0xc1)]({
                title: _0x3ba351(0xb0),
                imageUrl: "/support/saweria_me.png",
                imageAlt: _0x3ba351(0xa5),
                showConfirmButton: !![],
                showDenyButton: !![],
                confirmButtonText: _0x3ba351(0xc8),
                denyButtonText: _0x3ba351(0x86),
                background: _0x3ba351(0x8d),
                reverseButtons: !![],
              })[_0x3ba351(0xdf)]((_0x13c27a) => {
                const _0x5d8e60 = _0x3ba351;
                _0x13c27a["isConfirmed"] && (window[_0x5d8e60(0xd4)]["href"] = "https://saweria.co/yuichirohera");
              });
            });
          })
          ["catch"]((_0x546654) => {
            const _0x2e845e = _0x4eac6f;
            console[_0x2e845e(0xdc)](_0x2e845e(0xd0), _0x546654),
              Swal["fire"]({ toast: !![], position: "top-end", icon: "error", title: "Failed\x20to\x20copy\x20link", showConfirmButton: ![], timer: 0x3e8, timerProgressBar: !![], background: "#fef2f2", iconColor: _0x2e845e(0xd7) });
          });
      });
  });
