/* Cosmetic-only UI. No game imports, startup callbacks, or protection decisions. */
(() => {
  "use strict";
  const copy = {
    en: {
      language: "Language",
      hero: "Cryzen.io",
      help: "Browser compatibility",
      explanation:
        "The browser compatibility check did not pass. Extensions, userscripts, or browser modifications can change game code and prevent it from running correctly.",
      step1: "Disable extensions and userscripts.",
      detail1:
        "Open your browser’s Extensions or Add-ons menu. Extensions add features to websites; userscripts change how websites work. Disable any that run on Cryzen.",
      step2: "Reload the page.",
      detail2: "After disabling them, use the green button to reload and run the check again.",
      step3: "If the issue continues, try another browser.",
      detail3:
        "Update your browser to the latest version. If it still fails, open Cryzen in a different browser.",
      retry: "I disabled extensions — reload",
      support: "Contact support",
      supportHint: "If the issue continues, contact support and include this code.",
      supportCode: "Support code:",
      helpTitle: "Browser compatibility",
      home: "Return to Cryzen",
    },
    ru: {
      language: "Язык",
      hero: "Cryzen.io",
      help: "Совместимость браузера",
      explanation:
        "Проверка совместимости браузера не пройдена. Расширения, пользовательские скрипты или изменения браузера могут менять код игры и мешать её работе.",
      step1: "Отключите расширения и пользовательские скрипты.",
      detail1:
        "Откройте меню «Расширения» или «Дополнения» в браузере. Расширения добавляют функции на сайты, а пользовательские скрипты меняют их работу. Отключите те, которые работают на Cryzen.",
      step2: "Перезагрузите страницу.",
      detail2:
        "После отключения нажмите зелёную кнопку, чтобы перезагрузить страницу и пройти проверку заново.",
      step3: "Если проблема остаётся, попробуйте другой браузер.",
      detail3:
        "Обновите браузер до последней версии. Если это не поможет, откройте Cryzen в другом браузере.",
      retry: "Я отключил расширения — перезагрузить",
      support: "Связаться с поддержкой",
      supportHint: "Если проблема остаётся, обратитесь в поддержку и укажите этот код.",
      supportCode: "Код для поддержки:",
      helpTitle: "Совместимость браузера",
      home: "Вернуться в Cryzen",
    },
  };

  /** Only known locales select fixed text; query/storage values are never inserted as HTML. */
  function supported(value) {
    if (typeof value !== "string") return null;
    const language = value.toLowerCase().split("-")[0];
    return language === "en" || language === "ru" ? language : null;
  }

  /** Translate only the standalone public UI; it never loads the game's i18n runtime. */
  function translate(language) {
    const text = copy[language];
    document.querySelectorAll("[data-startup-text]").forEach((node) => {
      const value = text[node.getAttribute("data-startup-text")];
      if (typeof value === "string") node.textContent = value;
    });
    document.documentElement.lang = language;
    if (document.body.hasAttribute("data-compatibility-page"))
      document.title = "Cryzen — " + text.helpTitle;
  }

  try {
    const query = new URLSearchParams(location.search);
    let saved;
    try {
      saved = localStorage.getItem("cryzen.help-language");
    } catch (_) {}
    const language =
      supported(query.get("lang")) || supported(saved) || supported(navigator.language) || "en";
    translate(language);
    const selector = document.getElementById("help-language");
    if (selector) {
      selector.value = language;
      selector.addEventListener("change", () => {
        const selected = supported(selector.value) || "en";
        translate(selected);
        try {
          localStorage.setItem("cryzen.help-language", selected);
        } catch (_) {}
      });
      document.getElementById("help-language-control").hidden = false;
    }
    // The current URL is preserved on the homepage. A separate error page returns
    // through its normal relative link; neither action resumes a failed game.
    if (!document.body.hasAttribute("data-compatibility-page")) {
      document.getElementById("compatibility-retry").addEventListener("click", (event) => {
        event.preventDefault();
        location.reload();
      });
    } else {
      const incident = query.get("incident");
      const report = query.get("report");
      if (
        incident &&
        /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/.test(incident)
      ) {
        document.getElementById("support-code").textContent =
          query.get("delivery") === "failed"
            ? "PX-REPORT-FAILED"
            : /^\d{1,10}$/.test(report || "")
              ? "PX-R" + report
              : "PX-" + incident.replaceAll("-", "").slice(0, 16).toUpperCase();
      }
    }
  } catch (_) {
    // Browser APIs may be unavailable after failed protection. Static English text
    // and real links still work; presentation errors never start the application.
  }
})();
