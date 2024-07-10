import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestModalProps {
  closeGuestMadal: () => void;
  emailToInvate: string[];
  addNewEmail: (e: FormEvent<HTMLFormElement>) => void;
  removeEmail: (email: string) => void;
}

export function InviteGuestModal(props: InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-5 py-5 shadow-Shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidado</h2>

            <button type="button" onClick={props.closeGuestMadal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Os convidados irão receber os e-mail para a participação na viagem
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.emailToInvate.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button" onClick={() => props.removeEmail(email)}>
                  <X className="size-5 ml-2 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full h-px bg-zinc-800"> </div>
        <form
          onSubmit={props.addNewEmail}
          className="p-2.5 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center gap-2"
        >
          <div className="px-2 items-center flex-1 gap-2 flex">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="digite o e-mail do convidado "
              className="bg-transparent text-[14px] placeholder-zinc-400 flex-1 border-none outline-none mr-4"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Convidar
            <Plus className="size-5 text-lime-950  " />
          </button>
        </form>
      </div>
    </div>
  );
}
