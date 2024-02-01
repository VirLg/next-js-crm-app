import Button from './components/button/Button';
import LableStatus, { Status } from './components/lable/LableStatus';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <LableStatus status={Status.Active}>Active</LableStatus>
      <LableStatus status={Status.NotActive}>Not Active</LableStatus>
      <LableStatus status={Status.Pending}>Pending</LableStatus>
      <LableStatus status={Status.Suspended}>Suspended</LableStatus>
      <Button />
    </main>
  );
}
