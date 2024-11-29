import React, { useState } from 'react';
import NavBar from '../components/navbar';
import useAuth from '../hooks/useAuth';
import Modal from '../components/Modal';
import Button from '../components/Button';

const Home = () => {
  useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 flex bg-gray-100 flex-col">
      <section className="p-8">
        <div className="flex justify-between items-center border-b border-[#320b15] pb-8 h-20">
          <h3 className="text-3xl font-semibold text-[#320b15]">Home</h3>
        </div>
      </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Send E-mails">

      </Modal>
    </div>
  );
};

export default Home;