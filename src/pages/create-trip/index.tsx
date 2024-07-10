import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./invite-guest-modal";
import { ConfirmTripMOdal } from "./confirm-trip-modal";
import { DestinationAndDataSteps } from "./steps/destination-and-data-step";
import { InviteGuestStep } from "./steps/invite-guest-step";

export function CreateTripPage() {
  const navegate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestMadalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripMadalOpen, setisConfirmTripMadalOpe] = useState(false);

  const [emailToInvate, setEmailToInvate] = useState([
    "alfredo.capitia@yahoo.com.ao",
    "delciiocapitia@gmail.com.ao",
  ]);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function confirmTripMadal() {
    setisConfirmTripMadalOpe(true);
  }

  function closeConfirmTripMadal() {
    setisConfirmTripMadalOpe(false);
  }

  function openGuestMadal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestMadal() {
    setIsGuestModalOpen(false);
  }

  function addNewEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }
    if (emailToInvate.includes(email)) {
      return;
    }

    setEmailToInvate([...emailToInvate, email]);
    closeGuestInput();

    e.currentTarget.reset();
  }

  function craeteTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navegate("/trips/123");
  }

  function removeEmail(email: string) {
    setEmailToInvate(emailToInvate.filter((e) => e !== email));
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg ">
          Convide seus amigos e planeje sua próxima viajem
        </p>
        <div className="space-y-4">
          <DestinationAndDataSteps
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
            closeGuestInput={closeGuestInput}
          />
          {/* funcao de alterar  */}

          {isGuestInputOpen && (
            <InviteGuestStep
              openGuestMadal={openGuestMadal}
              emailToInvate={emailToInvate}
              confirmTripMadal={confirmTripMadal}
            />
          )}
        </div>
        {/* funcao de alterar  */}
        {/* criar modal */}
        {isGuestMadalOpen && (
          <InviteGuestModal
            emailToInvate={emailToInvate}
            addNewEmail={addNewEmail}
            closeGuestMadal={closeGuestMadal}
            removeEmail={removeEmail}
          />
        )}
        {/* criar modal 1 já terminou finished */}{" "}
        {/* criar modal 1 já terminou finished */}
        {/* criar modal 1 já terminou finished */}
        {/* criar modal 1 já terminou finished */}
        {/* criar outro modal  start*/}
        {isConfirmTripMadalOpen && (
          <ConfirmTripMOdal
            closeConfirmTripMadal={closeConfirmTripMadal}
            craeteTrip={craeteTrip}
          />
        )}
        {/* criar outro modal */}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viajem pela plaann.er você automaticamente concorda
          <br />
          com os nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            {" "}
            termos de uso{" "}
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            {" "}
            politocas de privacidade{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
