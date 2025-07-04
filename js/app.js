/**
 * @param {string} url - Caminho para o componente HTML.
 * @param {string} elementId - ID do elemento onde será injetado.
 */
async function loadComponent(url, elementId) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Falha ao carregar ${url}: ${res.statusText}`);
    const html = await res.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Destaca o menu do sidebar.
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname; // ex: "/telas/notifications.html"
  document.querySelectorAll("#sidebar-container nav a").forEach((link) => {
    // getAttribute pega exatamente o que você escreveu no HTML ("/telas/notifications.html")
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("text-[#6A8B97]");
      link.classList.remove("text-black", "hover:text-[#6A8B97]");
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("/sidebar.html", "sidebar-container");
  highlightActiveLink();
});
