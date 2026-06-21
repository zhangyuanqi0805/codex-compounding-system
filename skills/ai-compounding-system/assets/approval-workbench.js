const TERMINAL_PRIMARY_ACTIONS = new Set(["待定-看备注", "丢弃"]);

function cardId(card) {
  return card.dataset.acsCardId || card.dataset.id || card.id || "";
}

function collectApprovalResult() {
  const cards = [...document.querySelectorAll("[data-acs-card-id], .card[data-id]")];
  return {
    approvalVersion: document.body.dataset.approvalVersion || "v2-public-fixed-action-schema",
    exportedAt: new Date().toISOString(),
    decisions: cards.map((card) => {
      const id = cardId(card);
      const primary = card.querySelector(`input[name="primary-${CSS.escape(id)}"]:checked`)?.value || card.dataset.defaultPrimaryAction || "";
      const asset = card.querySelector(`input[name="asset-${CSS.escape(id)}"]:checked`)?.value || card.dataset.defaultAssetAction || "";
      const additional = [...card.querySelectorAll(`input[name="additional-${CSS.escape(id)}"]:checked`)].map((item) => item.value);
      const note = card.querySelector("[data-acs-note], textarea[data-id]")?.value || "";
      return {
        id,
        title: card.querySelector("[data-acs-title], h2")?.textContent?.trim() || "",
        primaryAction: primary,
        additionalActions: TERMINAL_PRIMARY_ACTIONS.has(primary) ? [] : additional,
        digitalAssetAction: asset,
        note,
        changed: card.dataset.defaultPrimaryAction !== primary || card.dataset.defaultAssetAction !== asset || note.trim().length > 0
      };
    })
  };
}

function writePayloadToTextarea(payload) {
  const output = document.querySelector("[data-acs-output], #exportText");
  if (output) output.value = payload;
  return output;
}

function setCopyStatus(text) {
  const status = document.querySelector("[data-acs-copy-status], #copyStatus");
  if (status) status.textContent = text;
}

async function copyApprovalResult() {
  const payload = JSON.stringify(collectApprovalResult(), null, 2);
  const output = writePayloadToTextarea(payload);
  try {
    await navigator.clipboard.writeText(payload);
    setCopyStatus("已复制，可以回到 Codex 粘贴。");
  } catch (error) {
    if (output) {
      output.focus();
      output.select();
      try {
        document.execCommand("copy");
        setCopyStatus("已复制，可以回到 Codex 粘贴。");
      } catch (fallbackError) {
        setCopyStatus("复制失败，请手动全选下面的审批结果，再粘贴回 Codex。");
      }
    }
  }
}

function downloadApprovalResult() {
  const payload = JSON.stringify(collectApprovalResult(), null, 2);
  writePayloadToTextarea(payload);
  const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `approval-result-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function markSelectedChoices() {
  document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach((input) => {
    const update = () => {
      document.querySelectorAll(`input[name="${CSS.escape(input.name)}"]`).forEach((item) => {
        item.closest("label")?.classList.toggle("selected", item.checked);
      });
    };
    input.addEventListener("change", update);
    update();
  });
}

function bindApprovalWorkbench() {
  markSelectedChoices();
  document.getElementById("copyJson")?.addEventListener("click", copyApprovalResult);
  document.getElementById("copyJsonTop")?.addEventListener("click", copyApprovalResult);
  document.getElementById("downloadJson")?.addEventListener("click", downloadApprovalResult);
  document.getElementById("resetAll")?.addEventListener("click", () => {
    document.querySelectorAll("textarea").forEach((textarea) => { textarea.value = ""; });
    document.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = false; });
    markSelectedChoices();
    writePayloadToTextarea("");
    setCopyStatus("已恢复页面默认选择。");
  });
}

document.addEventListener("DOMContentLoaded", bindApprovalWorkbench);
