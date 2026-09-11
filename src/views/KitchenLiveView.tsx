import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';
import { KitchenTicket } from '../types';

export const KitchenLiveView: React.FC = () => {
  const {
    kitchenTickets,
    updateTicketStage,
    shiftNotes,
    toggleShiftNote,
    addShiftNote,
    caseInventory,
    toggleInventoryStock,
    showToast,
  } = useBakery();

  const [activeStageFilter, setActiveStageFilter] = useState<string>('all');
  const [newNoteInput, setNewNoteInput] = useState('');

  const stageOptions: { id: KitchenTicket['stage'] | 'all'; label: string }[] = [
    { id: 'all', label: 'All Active Dockets' },
    { id: 'in-oven', label: 'In Deck Oven 🔥' },
    { id: 'decorating', label: 'Frosting & Piping 🎨' },
    { id: 'packed', label: 'Box Packed 🎀' },
    { id: 'dispatched', label: 'Dispatched / Courier 🛵' },
  ];

  const filteredTickets = kitchenTickets.filter((t) =>
    activeStageFilter === 'all' ? true : t.stage === activeStageFilter
  );

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNoteInput.trim()) {
      addShiftNote(newNoteInput);
      setNewNoteInput('');
    }
  };

  const nextStageMap: Record<KitchenTicket['stage'], KitchenTicket['stage']> = {
    'in-oven': 'decorating',
    decorating: 'packed',
    packed: 'dispatched',
    dispatched: 'dispatched',
  };

  const stageLabels: Record<KitchenTicket['stage'], string> = {
    'in-oven': 'In Oven',
    decorating: 'Piping & Frosting',
    packed: 'Packed with Ribbon',
    dispatched: 'With Courier',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#fff1ea] p-6 rounded-3xl border border-[#ffd1b5]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#b12500] animate-ping"></span>
            <span className="font-bold text-[12px] text-[#b12500] uppercase tracking-wider">
              Live Kitchen Hub & Oven Command
            </span>
          </div>
          <h1 className="font-headline text-[28px] sm:text-[34px] font-bold text-[#301401] mt-1">
            Bakehouse Live Queue
          </h1>
          <p className="text-[14px] text-[#524347]">
            Real-time oven dockets, pastry chef tickets, and display counter inventory manager.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-white px-4 py-2 rounded-2xl border border-[#ffd1b5] shadow-xs text-center">
            <span className="text-[10px] text-[#524347] font-bold block uppercase">
              Deck Oven 1
            </span>
            <span className="font-headline text-[18px] font-bold text-[#b12500]">
              195°C Stable
            </span>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl border border-[#ffd1b5] shadow-xs text-center">
            <span className="text-[10px] text-[#524347] font-bold block uppercase">
              Active Orders
            </span>
            <span className="font-headline text-[18px] font-bold text-[#8c4963]">
              {kitchenTickets.length} Dockets
            </span>
          </div>
          <button
            onClick={() => {
              window.print();
              showToast('Printing all kitchen dockets...');
            }}
            className="bg-[#8c4963] hover:bg-[#763750] text-white px-4 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 shadow-xs transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Print All Dockets</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Dockets (left) and Sidebar Tools (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Kitchen Dockets */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stage Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {stageOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveStageFilter(opt.id)}
                className={`text-[13px] font-bold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeStageFilter === opt.id
                    ? 'bg-[#8c4963] text-white shadow-xs'
                    : 'bg-white text-[#524347] hover:bg-[#fff1ea] border border-[#ffd1b5]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Dockets Cards */}
          <div className="space-y-4">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white rounded-3xl p-6 border border-[#ffd1b5] shadow-sm flex flex-col gap-4 relative"
              >
                {/* Docket Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#ffd1b5]">
                  <div className="flex items-center gap-3">
                    <span className="font-headline text-[18px] font-bold text-[#301401]">
                      Docket {ticket.orderNumber}
                    </span>
                    {ticket.dietaryBadge && (
                      <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-[#ffd9e4] text-[#70324b]">
                        {ticket.dietaryBadge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-[13px] text-[#524347]">
                    <span>
                      Target Delivery:{' '}
                      <strong className="text-[#301401]">{ticket.deliveryTime}</strong>
                    </span>
                    <span>•</span>
                    <span className="bg-[#fff1ea] text-[#8c4963] px-2.5 py-0.5 rounded-md font-bold text-[12px]">
                      {stageLabels[ticket.stage]}
                    </span>
                  </div>
                </div>

                {/* Items & Inscriptions */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[16px] text-[#301401]">
                        {ticket.confections}
                      </h3>
                      {ticket.confectionSubtitle && (
                        <p className="text-[13px] text-[#524347]">
                          {ticket.confectionSubtitle}
                        </p>
                      )}
                    </div>
                    <span className="font-headline text-[18px] font-bold text-[#b12500]">
                      ${ticket.price.toFixed(2)}
                    </span>
                  </div>

                  {ticket.pipingInscription && ticket.pipingInscription !== '—' && (
                    <div className="bg-[#fff1ea] p-3 rounded-xl border border-[#ffdbc7] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#8c4963] text-[20px]">
                        draw
                      </span>
                      <span className="text-[13px] font-bold text-[#8c4963]">
                        Piped Plaque: {ticket.pipingInscription}
                      </span>
                    </div>
                  )}

                  <div className="text-[12px] text-[#524347] flex items-center gap-3">
                    <span>
                      Customer: <strong className="text-[#301401]">{ticket.customerName}</strong>
                    </span>
                    <span>•</span>
                    <span>
                      Fulfillment: <strong className="text-[#301401]">{ticket.deliveryType}</strong>
                    </span>
                  </div>
                </div>

                {/* Docket Action Bar */}
                <div className="pt-3 border-t border-[#ffeadf] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[12px] text-[#524347]">
                    <span className="material-symbols-outlined text-[16px]">soup_kitchen</span>
                    <span>Oven Station: Deck 1 (Upper Tier)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        showToast(`Docket ${ticket.orderNumber} dispatched to station printer.`)
                      }
                      className="text-[#524347] hover:text-[#301401] text-[12px] font-bold px-3 py-1.5 rounded-full hover:bg-[#fff1ea] transition-colors"
                    >
                      Print Docket 🖨️
                    </button>

                    {ticket.stage !== 'dispatched' && (
                      <button
                        onClick={() => updateTicketStage(ticket.id, nextStageMap[ticket.stage])}
                        className="bg-[#b12500] hover:bg-[#da370d] text-white px-4 py-1.5 rounded-full font-bold text-[12px] shadow-xs flex items-center gap-1.5 transition-transform active:scale-95"
                      >
                        <span>Advance to {stageLabels[nextStageMap[ticket.stage]]}</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Shift Notes & Display Case Live Stock */}
        <div className="lg:col-span-4 space-y-6">
          {/* Shift Checklist Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#ffd1b5] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-[18px] font-bold text-[#301401]">
                Shift Notes & Checklist 📌
              </h3>
              <span className="text-[11px] font-bold text-[#8c4963] bg-[#ffd9e4] px-2 py-0.5 rounded-full">
                Morning Crew
              </span>
            </div>

            <div className="space-y-2 mb-4 max-h-60 overflow-y-auto pr-1">
              {shiftNotes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => toggleShiftNote(note.id)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                    note.completed
                      ? 'bg-[#f4f2f0] border-[#d6c1c6] line-through text-[#847377]'
                      : 'bg-[#fff8f5] border-[#ffd1b5] text-[#301401]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={note.completed}
                    onChange={() => {}}
                    className="w-4 h-4 mt-0.5 rounded accent-[#8c4963]"
                  />
                  <span className="text-[13px] font-semibold leading-snug">{note.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleCreateNote} className="flex gap-2">
              <input
                type="text"
                value={newNoteInput}
                onChange={(e) => setNewNoteInput(e.target.value)}
                placeholder="Add shift task..."
                className="flex-1 bg-[#fff8f5] px-3.5 py-2 rounded-xl border border-[#ffd1b5] text-[13px] text-[#301401] outline-none focus:ring-1 focus:ring-[#8c4963]"
              />
              <button
                type="submit"
                className="bg-[#8c4963] text-white px-3.5 py-2 rounded-xl font-bold text-[13px] shadow-xs"
              >
                Add
              </button>
            </form>
          </div>

          {/* Front Display Counter Live Stock Status */}
          <div className="bg-white rounded-3xl p-6 border border-[#ffd1b5] shadow-sm">
            <h3 className="font-headline text-[18px] font-bold text-[#301401] mb-1">
              Display Case Stock
            </h3>
            <p className="text-[12px] text-[#524347] mb-4">
              Toggle instant availability for walk-in customers and digital menu.
            </p>

            <div className="space-y-3">
              {[
                { id: 'cherry-cupcake', label: 'Mini Cherry Cupcakes' },
                { id: 'raspberry-pistachio-tart', label: 'Raspberry Pistachio Tart' },
                { id: 'almond-croissant', label: 'Flaky Almond Croissant' },
                { id: 'cinnamon-swirl-danish', label: 'Cinnamon Swirl Danish' },
              ].map((inv) => {
                const itemStock = caseInventory[inv.id] || { inStock: true, remaining: 8 };
                return (
                  <div
                    key={inv.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#fff8f5] border border-[#ffeadf]"
                  >
                    <div>
                      <h4 className="font-bold text-[13px] text-[#301401]">{inv.label}</h4>
                      <span
                        className={`text-[11px] font-bold ${
                          itemStock.inStock ? 'text-emerald-700' : 'text-[#ba1a1a]'
                        }`}
                      >
                        {itemStock.inStock
                          ? `In Stock (${itemStock.remaining} left)`
                          : 'Sold Out for Morning'}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleInventoryStock(inv.id)}
                      className={`text-[11px] font-bold px-3 py-1 rounded-full transition-all ${
                        itemStock.inStock
                          ? 'bg-[#ba1a1a] text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {itemStock.inStock ? 'Mark Out' : 'Restock'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
