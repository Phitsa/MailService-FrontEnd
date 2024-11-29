import React, { useState } from 'react';
import NavBar from '../components/navbar';
import useAuth from '../hooks/useAuth';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Input from '../components/input';

const Contacts = () => {
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
          <h3 className="text-3xl font-semibold text-[#320b15]">Contacts</h3>
            <Button onClick={openModal} className='primary p-2'>
              Add Contact
            </Button>
        </div>
      </section>
      <section className='p-8'>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Email</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Name</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
          {/* Example row, you should map through your contacts data here */}
            <tr className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">example@example.com</td>
              <td className="py-3 px-4 border-b border-gray-200">John Doe</td>
              <td className="py-3 px-4 border-b border-gray-200">
              <Button className="primary p-2 mr-2 w-20" onClick={() => alert('Edit contact')}>Edit</Button>
              <Button className="secondary p-2 w-20" onClick={() => alert('Delete contact')}>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Contact">
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className="flex flex-col">
          <p>Destinatario</p>
          <Input id="destino" placeholder="Destinatario" />
        </label>
        <label className="flex flex-col">
          <p>Conteudo</p>
          <Input id="conteudo" placeholder="Conteudo" />
        </label>
        <label className="flex flex-col">
          <p>Email</p>
          <Input value={email} onChange={handleEmailChange} placeholder="Email" />
          {error && <p className="text-red-500 mt-1">{error}</p>}
        </label>
        <Button type='submit' className='primary p-2 my-2'>
          Save Email
        </Button>
      </form>
    </Modal>
  </div>
);
};

export default Contacts;