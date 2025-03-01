import Example from './example/Example';
import Service from './service/Service';
import Stages from './stages/Stages';

function Home() {
  return (
    <main className="main-container" data-testid="home">
      <Service />
      <Stages />
      <Example />
    </main>
  );
}

export default Home;
