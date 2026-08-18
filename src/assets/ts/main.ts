/**
 * Progressive enhancement only — every page is fully usable with JS disabled,
 * which is the baseline a public-sector site has to hold.
 */

function initMobileNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-nav-panel]");
  if (!toggle || !panel) return;

  toggle.hidden = false;
  panel.hidden = true;

  const setOpen = (open: boolean): void => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initAlertDismiss(): void {
  const banner = document.querySelector<HTMLElement>("[data-alert-banner]");
  const dismiss = document.querySelector<HTMLButtonElement>("[data-alert-dismiss]");
  if (!banner || !dismiss) return;

  const key = `op-alert-dismissed:${banner.dataset.alertId ?? "default"}`;
  if (sessionStorage.getItem(key) === "1") {
    banner.hidden = true;
    return;
  }

  dismiss.hidden = false;
  dismiss.addEventListener("click", () => {
    banner.hidden = true;
    sessionStorage.setItem(key, "1");
  });
}

function initDirectoryFilter(): void {
  const input = document.querySelector<HTMLInputElement>("[data-directory-filter]");
  const rows = document.querySelectorAll<HTMLElement>("[data-directory-row]");
  const count = document.querySelector<HTMLElement>("[data-directory-count]");
  if (!input || rows.length === 0) return;

  const wrapper = input.closest("[data-directory-filter-wrapper]");
  if (wrapper instanceof HTMLElement) wrapper.hidden = false;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    rows.forEach((row) => {
      const haystack = (row.dataset.search ?? row.textContent ?? "").toLowerCase();
      const match = query === "" || haystack.includes(query);
      row.hidden = !match;
      if (match) visible += 1;
    });

    if (count) {
      count.textContent =
        query === ""
          ? `Showing all ${rows.length} staff members`
          : `Showing ${visible} of ${rows.length} staff members`;
    }
  });
}

type ThemePreference = "system" | "light" | "dark";

const THEME_STORAGE_KEY = "op-theme";
const THEME_ORDER: readonly ThemePreference[] = ["system", "light", "dark"];
const THEME_LABELS: Record<ThemePreference, string> = {
  system: "Theme: matching your device. Activate to switch to light.",
  light: "Theme: light. Activate to switch to dark.",
  dark: "Theme: dark. Activate to switch to matching your device.",
};

function getStoredThemePreference(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return preference;
}

function applyTheme(preference: ThemePreference): void {
  document.documentElement.classList.toggle("dark", resolveTheme(preference) === "dark");
}

/**
 * Only wires up interaction and the visible icon/label. Applying the class
 * itself on first load happens synchronously in the blocking <head> script
 * in base.njk, before this module runs — doing it here too would cause a
 * flash of the wrong theme, since type="module" scripts run after parsing.
 */
function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!button) return;

  const icons = {
    system: button.querySelector<HTMLElement>('[data-theme-icon="system"]'),
    light: button.querySelector<HTMLElement>('[data-theme-icon="light"]'),
    dark: button.querySelector<HTMLElement>('[data-theme-icon="dark"]'),
  };

  const render = (preference: ThemePreference): void => {
    for (const key of THEME_ORDER) {
      const icon = icons[key];
      if (icon) icon.hidden = key !== preference;
    }
    button.setAttribute("aria-label", THEME_LABELS[preference]);
  };

  let preference = getStoredThemePreference();
  render(preference);

  button.addEventListener("click", () => {
    const nextIndex = (THEME_ORDER.indexOf(preference) + 1) % THEME_ORDER.length;
    preference = THEME_ORDER[nextIndex] ?? "system";

    if (preference === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, preference);
    }

    applyTheme(preference);
    render(preference);
  });

  // Keeps "system" live if the OS theme changes while the tab stays open.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (preference === "system") applyTheme(preference);
  });
}

function initDemoForms(): void {
  document
    .querySelectorAll<HTMLFormElement>("[data-demo-form]")
    .forEach((form) => {
      form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();
        const notice = form.querySelector<HTMLElement>("[data-demo-form-notice]");
        if (notice) {
          notice.hidden = false;
          notice.focus();
        }
      });
    });
}

initMobileNav();
initAlertDismiss();
initDirectoryFilter();
initDemoForms();
initThemeToggle();
