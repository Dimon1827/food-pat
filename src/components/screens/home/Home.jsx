import Example from './example/Example';
import Service from './service/Service';
import Stages from './stages/Stages';
import Map from './map/Map';


function Home() {
  return (
    <main className="main-container">
      <Service />
      <Stages />
      <Example />
      <Map />
    </main>
  );
}

export default Home;
