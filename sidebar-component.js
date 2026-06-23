/**
 * sidebar-component.js
 * Injects the sidebar HTML inline into #sidebar-container.
 * Works with file:// (no server required).
 * Usage: <script src="sidebar-component.js"></script>
 *        <script>renderSidebar('page-key')</script>
 * Page keys: intimation | file-assignment | outstanding-updates |
 *            communications | underwriting | reports |
 *            acknowledgment | claim-status-360 | settings
 */
function renderSidebar(activePage) {
  const items = [
    {
      key: 'intimation', href: 'intimation.html', label: 'Intimation & Registration',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"/>`
    },
    {
      key: 'file-assignment', href: 'file-assignment.html', label: 'File/ Task Assignment',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>`
    },
    {
      key: 'outstanding-updates', href: 'outstanding-updates.html', label: 'Outstanding Updates',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>`
    },
    {
      key: 'communications', href: 'communications.html', label: 'Communications',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>`
    },
    {
      key: 'underwriting', href: 'underwriting.html', label: 'Underwriting',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>`
    },
    {
      key: 'reports', href: 'reports.html', label: 'Reports',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`
    },
    {
      key: 'acknowledgment', href: 'acknowledgment.html', label: 'Acknowledgment',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`
    },
    {
      key: 'claim-status-360', href: 'claim-status-360.html', label: 'Claim Status 360 View',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>`
    },
    {
      key: 'settings', href: 'settings.html', label: 'Settings',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`
    }
  ];

  const linksHTML = items.map(item => {
    const isActive = item.key === activePage;
    const activeClasses = 'bg-teal-600 text-white shadow-sm';
    const inactiveClasses = 'text-gray-600 hover:bg-teal-50 hover:text-teal-700';
    return `
      <a href="${item.href}"
         class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? activeClasses : inactiveClasses}">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          ${item.icon}
        </svg>
        <span>${item.label}</span>
      </a>`;
  }).join('');

  const sidebarHTML = `
    <aside id="main-sidebar" class="w-60 min-h-screen bg-white border-r border-gray-200 flex flex-col pt-2 fixed left-0 top-16 bottom-0 z-40 overflow-y-auto transition-transform duration-300 ease-in-out">
      <div class="px-3 pb-2 flex justify-end">
        <button onclick="toggleSidebar()" class="p-1.5 rounded-lg text-gray-500 hover:bg-teal-50 hover:text-teal-700 transition-colors" title="Toggle Sidebar">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <nav class="flex-1 px-2 py-1 space-y-1">
        ${linksHTML}
      </nav>
    </aside>`;

  const container = document.getElementById('sidebar-container');
  if (container) container.innerHTML = sidebarHTML;

  // Initial check for sidebar state
  if (localStorage.getItem('sidebarHidden') === 'true') {
    applySidebarState(true);
  } else {
    // Add transition classes to main tags if they don't have them
    document.querySelectorAll('main').forEach(m => {
      m.classList.add('transition-all', 'duration-300', 'ease-in-out');
    });
  }
}

// Global function to toggle sidebar
window.toggleSidebar = function () {
  const isHidden = localStorage.getItem('sidebarHidden') === 'true';
  const newState = !isHidden;
  localStorage.setItem('sidebarHidden', newState.toString());
  applySidebarState(newState);
};

function applySidebarState(hide) {
  const sidebar = document.getElementById('main-sidebar');
  const mains = document.querySelectorAll('main');

  if (!sidebar) return;

  if (hide) {
    sidebar.classList.add('-translate-x-full');
    mains.forEach(m => {
      m.classList.remove('ml-56');
      m.classList.add('ml-0');
      m.classList.add('transition-all', 'duration-300', 'ease-in-out');
    });
  } else {
    sidebar.classList.remove('-translate-x-full');
    mains.forEach(m => {
      m.classList.remove('ml-0');
      m.classList.add('ml-56');
      m.classList.add('transition-all', 'duration-300', 'ease-in-out');
    });
  }
}
