import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDataStepsTrips {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
}
export function DestinationAndDataSteps({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
}: DestinationAndDataStepsTrips) {
  return (
    <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center shadow-Shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5  text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai ?"
          className="bg-transparent text-lg placeholder-zinc-400 flex-1 border-none outline-none mr-4"
        />
      </div>

      <div className="flex items-center gap-2 ">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Quando ?"
          className="bg-transparent text-lg placeholder-zinc-400 w-28  border-none outline-none"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800"></div>

      {/* verificao de isGuestInputOpen */}
      {isGuestInputOpen ? (
        <button
          onClick={closeGuestInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5 ml-2 " />
        </button>
      ) : (
        <button
          type="button"
          onClick={openGuestInput}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5 text-lime-950 ml-2 " />
        </button>
      )}
      {/* verificao de isGuestInputOpen */}
    </div>
  );
}
