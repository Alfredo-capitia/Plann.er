import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestStepProps {
  openGuestMadal: () => void;
  emailToInvate: string[];
  confirmTripMadal: () => void;
}

export function InviteGuestStep({
  openGuestMadal,
  emailToInvate,
  confirmTripMadal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center shadow-Shape gap-3">
      <button
        onClick={openGuestMadal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailToInvate.length > 0 ? (
          <span className="text-zinc-100">
            {emailToInvate.length} pessoa(s) convidado(s)
          </span>
        ) : (
          <span className="text-zinc-400">Quem estará na viagem ?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"></div>

      <button
        onClick={confirmTripMadal}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950 ml-2 " />
      </button>
    </div>
  );
}
