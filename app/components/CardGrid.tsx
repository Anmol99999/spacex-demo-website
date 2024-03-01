import { useState } from "react";
import Modal from "./Model";
import Spaceship, { Ship } from "./Spaceship";

export type Missions = {
  flight: string;
  name: string;
}[];

function CardGrid({ ships }: { ships: Ship[] }) {
  const [modalData, setModalData] = useState<Missions | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleCardClick = (data: Missions) => {
    setModalOpen(true);
    setModalData(data);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalData(null);
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {ships.map((ship) => (
          <Spaceship
            key={ship.name}
            ship={ship}
            handleClick={() => handleCardClick(ship.Missions)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={handleModalClose}
        missions={modalData}
      />
    </div>
  );
}

export default CardGrid;
