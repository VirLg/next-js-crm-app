import ActivLable from './components/ActivLable';
import NotActivLable from './components/NotActivLable';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <ActivLable>Active</ActivLable>
      <NotActivLable>Not Active</NotActivLable>
    </main>
  );
}
