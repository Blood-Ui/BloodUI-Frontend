import { Box1, Box2,Box3, Input1, Input3, RedButton, RedButtondiv, Select1 } from "./DonateStyles.jsx";
import React from "react";
import { useState } from "react";
import image1 from "../../assets/image1.png";

function Donate() {
  const [bgroup, setBgroup] = useState("");
  return (
    <>
      <Box1>
        <h4 style={{margin:'1.5rem 0',fontSize:'1.2rem'}}>Details</h4>
        <Box2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="name">Name*</label>
                <br />
                <Input1
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Blood group*</label>
                <br />
                <Select1
                  name="bgroup"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>A +ve</option>
                  <option>B +ve</option>
                  <option>O +ve</option>
                  <option>AB +ve</option>
                </Select1>
              </div>
              <div>
                <label htmlFor="name">Date of birth*</label>
                <br />
                <Input3
                  type="date"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </Box3>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="name">Name*</label>
                <br />
                <Input1
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Blood group*</label>
                <br />
                <Select1
                  name="bgroup"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>A +ve</option>
                  <option>B +ve</option>
                  <option>O +ve</option>
                  <option>AB +ve</option>
                </Select1>
              </div>
              <div>
                <label htmlFor="name">Date of birth*</label>
                <br />
                <Input3
                  type="date"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </Box3>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="name">Name*</label>
                <br />
                <Input1
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Blood group*</label>
                <br />
                <Select1
                style={{hover:{cursor:'pointer'}}}
                  name="bgroup"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>A +ve</option>
                  <option>B +ve</option>
                  <option>O +ve</option>
                  <option>AB +ve</option>
                  <option>A -ve</option>
                  <option>B -ve</option>
                  <option>O -ve</option>
                  <option>AB -ve</option>
                </Select1><br/>
                <div style={{display:"flex",marginTop:"3rem"}}><input type="checkbox" id="T&C" name="T&C"/><p>I Accept the Terms and Conditions</p></div>
                <RedButtondiv><RedButton type="submit"value="Register"/></RedButtondiv> 
              </div>
            </Box3>
          </div>
          <div>
            <img
              src={image1}
              alt="image1"
              style={{ width: "24rem", marginRight: "0" }}
            />
            <p>Join Us and be the reason for someone's existence.</p>
          </div>
        </Box2>
        
      </Box1>
    </>
  );
}

export default Donate;
