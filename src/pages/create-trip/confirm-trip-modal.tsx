import { User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripMadalProps {
  closeConfirmTripMadal: () => void;
  craeteTrip: (e: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripMOdal({
  closeConfirmTripMadal,
  craeteTrip,
}: ConfirmTripMadalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-5 py-5 shadow-Shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>

            <button type="button" onClick={closeConfirmTripMadal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-50 font-semibold">Luands , Angola </span>
            nas datas de{" "}
            <span className="text-zinc-50 font-semibold">
              {" "}
              ConfirmTripMadalProps 16 a 17 de Agosto de 2024{" "}
            </span>{" "}
            preencha seus dados abaixo
          </p>
        </div>

        <form onSubmit={craeteTrip} className="space-y-3 ">
          <div className="h-14 px-5 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="nome"
              placeholder="Seu nome completo "
              className="bg-transparent text-[14px] placeholder-zinc-400 flex-1 border-none outline-none mr-4"
            />
          </div>
          <div className="h-14 px-5 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal "
              className="bg-transparent text-[14px] placeholder-zinc-400 flex-1 border-none outline-none mr-4"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 w-full text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 justify-center"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
