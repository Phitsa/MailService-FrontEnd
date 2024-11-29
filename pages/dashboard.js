import React, { useState } from 'react';
import NavBar from '../components/navbar';
import useAuth from '../hooks/useAuth';
import Modal from '../components/Modal';
import Input from '../components/input';
import Button from '../components/Button';

const Dashboard = () => {
  useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    alert(`Email submitted: ${email}`);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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
          <h3 className="text-3xl font-semibold text-[#320b15]">Dashboard</h3>
            <Button onClick={openModal} className='primary p-2'>
              Add Campaign
            </Button>
        </div>
      </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Send E-mails">
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className="flex flex-col">
            <p>Assunto</p>
            <Input placeholder="Sobre oque é o email" />
          </label>
          <label className="flex flex-col">
            <p>Corpo do email</p>
            <textarea className='min-h-10 border border-gray-500 focus:border-cerise rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rosepompaduor' placeholder='Texto do email'>

            </textarea>
          </label>
          <label className="flex flex-col">
            <p>Remetente</p>
            <Input value={email} onChange={handleEmailChange} placeholder="Email da qual sera enviado os emails" />
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </label>
          <Button  type='submit' className='primary p-2 my-2'>
          Save Email
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;