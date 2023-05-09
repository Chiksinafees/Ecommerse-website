import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">TOURS</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>JUL16</td>
            <td>DETROIT,MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
          <tr>
            <td>JUL19</td>
            <td>DTORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
          <tr>
            <td>JUL22</td>
            <td>BRISTOW,VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
          <tr>
            <td>JUL29</td>
            <td>PHOENIX,AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS,</td>
            <td>NV T-MOBILE ARENA</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td> CONCORD,CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <button className="btn btn-dark">Buy Tickets</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
