/**
 * navbar-component.js
 * Injects the top navbar HTML inline into #navbar-container.
 * Works with file:// (no server required).
 *
 * Usage:
 *   1. Add <div id="navbar-container"></div> right after <body>
 *   2. Add <script src="navbar-component.js"></script> immediately after
 *
 * The navbar is self-contained: it includes the hamburger toggle,
 * portal logo/name, notification bell, and user avatar.
 */

function renderNavbar() {
  const navbarHTML = `
    <header class="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-5 z-50">
      <div class="flex items-center gap-2">
        <!-- Hamburger / sidebar toggle -->
        <button
          onclick="window.toggleSidebar()"
          class="p-1 mr-2 text-gray-500 hover:text-teal-600 transition-colors"
          title="Toggle Sidebar">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Logo + Portal name -->
        <div class="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm select-none">I</div>
        <span class="font-semibold text-gray-800 text-sm">Insurance Claims Portal</span>
      </div>

      <div class="ml-auto flex items-center gap-4">
        <!-- Notification bell -->
        <button class="relative p-2 text-gray-500 hover:text-teal-600 transition-colors" title="Notifications">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- User avatar + name -->
        <div class="flex items-center gap-2 cursor-pointer" onclick="location.href='settings.html'" title="Settings">
          <img
            src="https://ui-avatars.com/api/?name=Ranga+Karunanayake&background=0d9488&color=fff&size=64"
            class="w-8 h-8 rounded-full object-cover"
            alt="User Avatar"/>
          <div class="text-right">
            <div class="text-xs font-semibold text-gray-800 leading-tight">Ranga</div>
            <div class="text-xs text-gray-500 leading-tight">Karunanayake</div>
          </div>
        </div>
      </div>
    </header>`;

  const container = document.getElementById('navbar-container');
  if (container) container.innerHTML = navbarHTML;
}

// Auto-render when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNavbar);
} else {
  renderNavbar();
}
