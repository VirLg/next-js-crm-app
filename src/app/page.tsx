import React from 'react';
import FormAddCompany from './components/forms/formAddCompany/FormAddCompany';
import LableStatus, { Status } from './components/forms/lable/LableStatus';
import ModalWindow from './components/modalWindow/ModalWindow';

export default function Home() {
  // const [show, setShow] = useState(false);

  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <LableStatus status={Status.Active}>Active</LableStatus>
      <LableStatus status={Status.NotActive}>Not Active</LableStatus>
      <LableStatus status={Status.Pending}>Pending</LableStatus>
      <LableStatus status={Status.Suspended}>Suspended</LableStatus>

      <ModalWindow>
        <FormAddCompany />
      </ModalWindow>
    </main>
  );
}
