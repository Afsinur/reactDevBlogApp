import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import Footer from "./Footer";
import styled from "styled-components";
import { Fade, Zoom } from "react-reveal";

const H2Elm = styled.h2`
  color: red;
  background-color: #d9ff00;
  padding: 5px 10px;
  width: fit-content;

  .extra {
    font-size: 10px;
    color: #000;
    font-weight: 600;
  }
`;

const Card = styled.div`
  padding: 10px 30px;
  background-color: #d9ff00;
  width: 500px;
  height: 300px;

  .card-p {
    font-size: 12px;
    font-weight: 600;
    color: #303030;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  background-color: #4524ff;
  border: none;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

function Contactus() {
  function handleClick() {
    console.log("h2");
  }

  return (
    <div>
      <NavLinks />
      <div style={{ overflowX: "hidden" }}>
        <Fade right>
          <H2
            tx="title 2"
            color="#f00"
            onClick={() => {
              handleClick();
            }}
          />
        </Fade>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non
          animi possimus numquam deleniti! Quod labore dolorem alias voluptatum
          sint.
        </p>

        <Button>read more</Button>
      </div>

      <div>
        <H2 tx="title 3" color="#ffffff" bg="#242424" textAlign="center" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
          magni!
        </p>

        <Button>read more</Button>
      </div>

      <div>
        <H2Elm>
          title 3<span className="extra">extra..</span>
        </H2Elm>

        <Zoom bottom>
          <Card>
            <H2Elm>
              title 3<span className="extra">extra..</span>
            </H2Elm>
            <p className="card-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              officia. Perferendis sint recusandae quas, ducimus aut aliquam
              molestias quam commodi vel praesentium velit minus possimus, earum
              explicabo magni labore nulla, alias delectus fugit neque rem
              dolorum debitis omnis. Quis suscipit veniam quod necessitatibus
              mollitia officiis adipisci maiores, iure nisi quasi!
            </p>

            <Button>read more</Button>
          </Card>
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}

function H2({ tx, color, bg, textAlign, onClick }) {
  return (
    <h2
      onClick={onClick}
      style={{
        textAlign: textAlign ? textAlign : `left`,
        color: color ? color : `unset`,
        background: bg ? bg : `unset`,
      }}
    >
      {tx ? tx : `some error!`}
    </h2>
  );
}

export default Contactus;
