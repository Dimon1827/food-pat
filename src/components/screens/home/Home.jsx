import Example from './example/Example';
import Service from './service/Service';
import Stages from './stages/Stages';


function Home() {
  return (
    <main className="main-container">
      <Service />
      <Stages />
      <Example />
    </main>
  );
}

export default Home;
