const logoOutline =
  "https://www.figma.com/api/mcp/asset/f257dad1-4d96-4258-b833-1d8063587f11";
const logoBypass =
  "https://www.figma.com/api/mcp/asset/e4121d6c-e411-4c29-90d1-59f8f730a462";
const chargesIcon =
  "https://www.figma.com/api/mcp/asset/14562120-5c3a-4ad9-b539-459ac55e9e5f";

function CarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 10.5V14h1.25v1.5h1.5V14h8.5v1.5h1.5V14H17v-3.5l-1.25-3.75A1.5 1.5 0 0 0 14.33 3H5.67a1.5 1.5 0 0 0-1.42 1.05L3 7.5v3Zm1.5-3.25.5-1.5h10l.5 1.5H4.5ZM6 12.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm8 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    </svg>
  );
}

function FileLinesIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 3.5A1.5 1.5 0 0 1 6.5 2h4.88a1.5 1.5 0 0 1 1.06.44l2.12 2.12A1.5 1.5 0 0 1 15 5.62V16.5A1.5 1.5 0 0 1 13.5 18h-7A1.5 1.5 0 0 1 5 16.5v-13ZM6.5 3.5v13h7v-10.38H10.5V3.5H6.5ZM7.25 9h5.5v1h-5.5V9Zm0 2.5h5.5v1h-5.5v-1Zm0 2.5h3.5v1h-3.5v-1Z" />
    </svg>
  );
}

function LogoutIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.5 3.5A1.5 1.5 0 0 0 6 5v10a1.5 1.5 0 0 0 1.5 1.5H11v-1.5H7.5V5H11V3.5H7.5ZM12.44 6.44 14.09 8H9.5v1.5h4.59l-1.65 1.56 1.06 1.12L17.21 9 13.5 5.32l-1.06 1.12Z" />
    </svg>
  );
}

const navItems = [
  { id: "drivers", label: "Drivers", icon: CarIcon, active: true },
  { id: "charges", label: "Charges", image: chargesIcon },
  { id: "invoices", label: "Invoices", icon: FileLinesIcon },
];

export default function Sidebar() {
  return (
    <aside className="flex w-[296px] shrink-0 flex-col bg-[#080808] text-white">
      <div className="px-6 pt-12">
        <div className="relative h-10 w-[114px]">
          <img
            alt=""
            className="absolute inset-0 h-full w-full"
            src={logoOutline}
          />
          <img
            alt="BYPASS"
            className="absolute left-[12.73px] top-[12.73px] h-[14.5px] w-[88.5px]"
            src={logoBypass}
          />
        </div>
      </div>

      <nav className="mt-10 flex flex-col gap-3 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={`flex h-14 w-full items-center gap-3 rounded-lg px-4 text-left text-base leading-tight transition-colors ${
                item.active
                  ? "bg-white font-semibold text-[#080808]"
                  : "font-normal text-white hover:bg-white/10"
              }`}
            >
              {item.image ? (
                <img alt="" className="h-5 w-5 shrink-0" src={item.image} />
              ) : (
                <Icon className="h-5 w-5 shrink-0" />
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/20 px-6 pb-8 pt-6">
        <p className="text-base font-semibold leading-tight">
          danielle.warrent@gilbarco.com
        </p>
        <button
          type="button"
          className="mt-4 flex items-center gap-2.5 text-base leading-tight text-white hover:opacity-80"
        >
          <span>Log out</span>
          <LogoutIcon className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
