import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { getRandomIdentities } from "./api/Api";

function App() {
  const [identities, setIdentities] = useState([]);
  const [index, setIndex] = useState(0);
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("CH");

  useEffect(() => {
    getRandomIdentities(gender, country).then((data) => {
      setIdentities(data);
    });
  }, [gender, country]);

  function incrementIndex() {
    if (index === 99) {
      getRandomIdentities(gender, country).then((data) => {
        setIndex(0);
        setIdentities(data);
      });
      return;
    }
    setIndex(index + 1);
  }

  function decrementIndex() {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  }

  function getUser() {
    let p = identities[index] !== undefined;
    return {
      firstname: p ? identities[index].name.first : "",
      lastname: p ? identities[index].name.last : "",
      age: p ? identities[index].dob.age : "",
      username: p ? identities[index].login.username : "",
      password: p ? identities[index].login.password : "",
      country: p ? identities[index].location.country : "",
      city: p ? identities[index].location.city : "",
      state: p ? identities[index].location.state : "",
      street: p ? identities[index].location.street.name : "",
      streetnumber: p ? identities[index].location.street.number : "",
      postcode: p ? identities[index].location.postcode : "",
      image: p ? identities[index].picture.large : "",
    };
  }

  const countrySelectItems = [
    { label: "Switzerland", value: "CH" },
    { label: "France", value: "FR" },
    { label: "United States", value: "US" },
  ];
  const genderSelectItems = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="App">
      <div className="grid mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="grid p-fluid">
              <div className="col-12 md:col-12">
                <div className="flex justify-content-center flex-wrap">
                  <div className="flex align-items-center justify-content-center ">
                    <Image
                      src={getUser().image}
                      alt="User Image"
                      imageStyle={{ borderRadius: 100 }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 md:col-5">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Firstname</span>
                  <InputText placeholder="john" value={getUser().firstname} />
                </div>
              </div>

              <div className="col-12 md:col-5">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Lastname</span>
                  <InputText placeholder="doe" value={getUser().lastname} />
                </div>
              </div>

              <div className="col-12 md:col-2">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Age</span>
                  <InputNumber placeholder="xx" value={getUser().age} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Username</span>
                  <InputText placeholder="john28" value={getUser().username} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Password</span>
                  <InputText
                    placeholder="passwd$_12\s"
                    value={getUser().password}
                  />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Country</span>
                  <InputText placeholder="xxxxx" value={getUser().country} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">City</span>
                  <InputText placeholder="xxxxx" value={getUser().city} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">State</span>
                  <InputText placeholder="xxxxx" value={getUser().state} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Postcode</span>
                  <InputText placeholder="xxxxx" value={getUser().postcode} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Street</span>
                  <InputText placeholder="xxxxx" value={getUser().street} />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Number</span>
                  <InputNumber
                    placeholder="xxxxx"
                    value={getUser().streetnumber}
                  />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Dropdown
                    value={country}
                    options={countrySelectItems}
                    onChange={(e) => setCountry(e.value)}
                    placeholder="Select a Country"
                  />
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Dropdown
                    value={gender}
                    options={genderSelectItems}
                    onChange={(e) => setGender(e.value)}
                    placeholder="Select a Gender"
                  />
                </div>
              </div>

              <div className="col-12 md:col-12">
                <div className="flex justify-content-between flex-wrap card-container purple-container">
                  <div className="flex align-items-center justify-content-center ">
                    <Button
                      icon="pi pi-arrow-left"
                      onClick={() => {
                        decrementIndex();
                      }}
                      className="p-button-rounded p-button-outlined"
                    />
                  </div>
                  <div className="flex align-items-center justify-content-center">
                    <Button
                      icon="pi pi-arrow-right"
                      onClick={() => {
                        incrementIndex();
                      }}
                      className="p-button-rounded p-button-outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
