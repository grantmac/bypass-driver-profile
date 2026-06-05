function ArrowLeftIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.78 4.22a.75.75 0 0 1 0 1.06L8.06 9h7.19a.75.75 0 0 1 0 1.5H8.06l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z" />
    </svg>
  );
}

function PenIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.03 3.97a2.25 2.25 0 0 1 3.18 3.18l-8.2 8.2a1.5 1.5 0 0 1-.66.38l-3.1.78a.75.75 0 0 1-.92-.92l.78-3.1a1.5 1.5 0 0 1 .38-.66l8.2-8.2ZM14.5 5.5 14 5l-.5.5 1 1 .5-.5ZM6.2 13.8l6.6-6.6-1-1-6.6 6.6-.22.88.88-.22Z" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10.9 2.2a.75.75 0 0 1 .69.47l3.25 8.25a.75.75 0 0 1-.7 1.03h-4.1l.55 5.5a.75.75 0 0 1-1.33.45l-6.5-9.75a.75.75 0 0 1 .62-1.2h4.27L9.41 2.67a.75.75 0 0 1 1.49-.47Z" />
    </svg>
  );
}

export default function DriverProfile() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white px-10 py-12">
      <div className="flex items-start justify-between gap-6">
        <button
          type="button"
          className="flex items-center gap-2.5 text-base leading-tight text-[#080808] hover:opacity-70"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>All drivers</span>
        </button>

        <button
          type="button"
          className="flex h-[42px] items-center justify-center gap-2 rounded-[14px] border border-[#080808] px-4 text-base font-medium text-[#080808] hover:bg-[#f6f6f6]"
        >
          <span>Edit driver</span>
          <PenIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-8">
        <h1 className="font-numans text-[32px] leading-tight tracking-[-0.32px] text-[#080808]">
          Keith Jenkins
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-1 text-base leading-tight text-[#080808]">
          <span>keith@gilbarco.com</span>
          <span>07142954019</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-[14px] border border-[#f6f6f6] bg-[#f6f6f6] px-4 py-4 text-base leading-tight text-[#494949]">
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-[#494949]" />
        </span>
        <p>
          Invite sent. Awaiting driver to download Bypass app and activate card
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-baseline gap-2">
          <h2 className="font-numans text-[20px] leading-tight tracking-[-0.2px] text-[#080808]">
            Charger transactions
          </h2>
          <span className="font-numans text-[20px] leading-tight tracking-[-0.2px] text-[#080808]">
            <span className="text-base">£</span>0
          </span>
        </div>

        <div className="mt-4 flex min-h-[315px] flex-col items-center justify-center gap-3 rounded-[14px] border border-[#f6f6f6] bg-[#f6f6f6] px-4 py-16 text-[#494949]">
          <BoltIcon className="h-6 w-6" />
          <p className="text-base leading-tight">
            No transactions for this driver yet
          </p>
        </div>
      </div>
    </div>
  );
}
