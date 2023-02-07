import { Link } from "react-router-dom";
import "../App.css";

function Form() {
  return (
    <>
      <div className="form-insurance-container">
        <h1>Motor Vehicle Insurance</h1>
        <p>Please give us some info about your vehicle</p>
        <h3>{/* intentional */}</h3>
        <div className="form-list">
          <form autoComplete="on" action="mailto:info@nubeero.com">
            <label htmlFor="License">License Plate Number</label>
            <br />
            <input type="number" placeholder="Enter License Plate Number" required />
            <br />
            <label htmlFor="Chassis Number">Chassis Number</label>
            <br />
            <input type="number" placeholder="Enter License Plate Number" required />
            <br />
            <div className="form-select">
              <div>
                <label htmlFor="Vehicle Brand">Vehicle Brand</label>

                <select name="cars" id="cars">
                  <option value="select">Select Vehicle Brand</option>
                  <option value="volvo">Volvo</option>
                  <option value="tesla">Tesla</option>
                  <option value="bmw">BMW</option>
                  <option value="ford">Ford</option>
                  <option value="honda">Honda</option>
                  <option value="jeep">Jeep</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="mazda">Mazda</option>
                  <option value="nissan">Nissan</option>
                  <option value="lexus">Lexus</option>
                  <option value="kia">Kia</option>
                  <option value="volkswagen">Volkswagen</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="gmc">GMC</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="toyota">Toyota</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label htmlFor="year">Year</label>

                <select name="year">
                  <option value="year">Select Year</option>
                  <option value="year">2023</option>
                  <option value="year">2022</option>
                  <option value="year">2021</option>
                  <option value="year">2020</option>
                  <option value="year">2019</option>
                  <option value="year">2018</option>
                  <option value="year">2017</option>
                  <option value="year">2016</option>
                  <option value="year">2015</option>
                  <option value="year">2014</option>
                  <option value="year">2013</option>
                  <option value="year">2012</option>
                  <option value="year">2011</option>
                  <option value="year">2010</option>
                  <option value="year">2009</option>
                  <option value="year">2008</option>
                  <option value="year">2007</option>
                  <option value="year">2006</option>
                  <option value="year">2005</option>
                  <option value="year">2004</option>
                  <option value="year">2003</option>
                  <option value="year">2002</option>
                  <option value="year">2001</option>
                  <option value="year">2000</option>
                </select>
              </div>
            </div>

            <label htmlFor="Model">Model</label>
            <br />
            <input type="number" placeholder="Enter Model" required />
            <br />
            <label htmlFor="Vehicle Value">Vehicle Value</label>
            <br />
            <input type="text" placeholder="Enter Vehicle Value" required />
            <br />
            <label htmlFor="value">Insurance Type</label>
            <br />
            <input type="text" placeholder="Select Insurance Type" required />
            <br />
          </form>
          <div className="form-link">
            <Link to="/sidebar">NEXT</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
