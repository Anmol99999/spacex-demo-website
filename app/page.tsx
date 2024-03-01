"use client";

import Image from "next/image";
import CardGrid from "./components/CardGrid";
import { Ship } from "./components/Spaceship";

const data: {
  data: {
    ships: Ship[];
  };
} = {
  data: {
    ships: [
      {
        id: "e030988d-c47d-4d58-bb00-5d3c3e315414",
        class: "7427463",
        image: "https://i.imgur.com/ngYgFnn.jpg",
        active: false,
        name: "Betty R Gambarella",
        __typename: "Ship",
        Missions: [
          {
            flight: "flight3",
            name: "mission3",
          },
          {
            flight: "flight4",
            name: "mission4",
          },
        ],
      },
      {
        id: "e350a15b-494b-4931-a2d8-179e6337c5a5",
        class: "15252765",
        image: "https://i.imgur.com/MtEgYbY.jpg",
        active: false,
        name: "GO Ms Tree",
        __typename: "Ship",
        Missions: [
          {
            flight: "flight6",
            name: "mission6",
          },
        ],
      },
      {
        id: "d77b610f-3f84-41f7-9fdd-c87d7e190c0e",
        class: "7604342",
        image: "https://i.imgur.com/woCxpkj.jpg",
        active: false,
        name: "American Champion",
        __typename: "Ship",
        Missions: [
          {
            flight: "flight1",
            name: "mission1",
          },
          {
            flight: "flight2",
            name: "mission2",
          },
        ],
      },
      {
        id: "023b0a9b-a24f-4899-99cb-51f958c5d631",
        class: "9195228",
        image: "https://i.imgur.com/Wr1slIc.png",
        active: true,
        name: "Bob",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "0ca3b83d-2e45-431d-8999-6d97613c3374",
        class: "7611785",
        image: "https://i.imgur.com/IpYJWUW.jpg",
        active: false,
        name: "RACHEL",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "1ca28855-d6b0-4650-a6f3-4d0611070449",
        class: null,
        image: null,
        active: false,
        name: "American Spirit",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "234a286d-5244-4293-a2c4-6192812e41a6",
        class: null,
        image: "https://i.imgur.com/jmj8Sh2.jpg",
        active: false,
        name: "American Islander",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "272a07b2-fc9f-45cc-8d00-ea13dfd644d8",
        class: null,
        image: "https://i.imgur.com/1s5DUbJ.jpg",
        active: false,
        name: "Elsbeth III",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "2fb87f3c-20b2-448d-a34c-f79c8968854b",
        class: "7174230",
        image: "https://i.imgur.com/5w1ZWre.jpg",
        active: false,
        name: "GO Pursuit",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "3c160834-3917-4038-93b3-f714c1d584fe",
        class: null,
        image: "https://i.imgur.com/28dCx6G.jpg",
        active: true,
        name: "Of Course I Still Love You",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "43f946f2-d3cd-46b2-ad8c-27c758fce397",
        class: null,
        image: "https://i.imgur.com/ABXtHKa.jpg",
        active: true,
        name: "GO Quest",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "5b8fe11a-f16b-4045-9255-e2eb108b801d",
        class: "3113494",
        image: "https://imgur.com/bRAJ52J.png",
        active: false,
        name: "Lauren Foss",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "6795f5d2-7df1-41c1-8547-4b37acdabe49",
        class: "9195307",
        image: "https://i.imgur.com/XF1FBB8.png",
        active: true,
        name: "Doug",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "89048b1d-3f3d-4415-8433-6330fda8ef38",
        class: "10204360",
        image: "https://i.imgur.com/X4YQJZf.jpg",
        active: true,
        name: "Megan",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "8a3e9ef4-dc19-42d1-b7cf-e791bdd9a24b",
        class: "15249748",
        image: "https://i.imgur.com/0WukQlb.png",
        active: true,
        name: "HOS Briarwood",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "8f914c6f-32c1-435c-b747-c2da369095f1",
        class: "9204358",
        image: "https://i.imgur.com/MjNWzhO.jpg",
        active: true,
        name: "Shannon",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "9baf01ef-70d8-4f42-b459-bacad0059961",
        class: null,
        image: null,
        active: false,
        name: "Kelly C",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "a343ea98-ee56-43f8-9029-393081918a17",
        class: "2115909",
        image: "https://i.imgur.com/GvtuYUN.jpg",
        active: true,
        name: "NRC Quest",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "af545210-9a36-4a84-9be6-77f67114e86f",
        class: "9523438",
        image: "https://i.imgur.com/hGWWupT.jpg",
        active: false,
        name: "HAWK",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "b314833e-7c29-4529-940b-941995b2941a",
        class: null,
        image: "https://i.imgur.com/RJPmP8G.jpg",
        active: false,
        name: "Just Read The Instructions 1",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "ba3c3bfd-7b20-4996-a415-47ebf74807fc",
        class: null,
        image: null,
        active: true,
        name: "A Shortfall of Gravitas",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "c7772518-4ddf-4cc8-99bc-033557a1e832",
        class: "15235966",
        image: "https://imgur.com/LU8aodR.png",
        active: true,
        name: "Shelia Bordelon",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "cd403e62-e96e-4ee7-93b0-bc64c43eb4fd",
        class: "7602544",
        image: "https://i.imgur.com/eJWx70Z.jpg",
        active: true,
        name: "Pacific Freeedom",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "ce0e96d3-b791-425a-b0ca-6da6374dd156",
        class: "7434575",
        image: "https://i.imgur.com/qdNDmYs.jpg",
        active: false,
        name: "Pacific Warrior",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "d5b1f3e9-c180-49ec-889f-092e9046714a",
        class: null,
        image: "https://i.imgur.com/7VMC0Gn.jpg",
        active: true,
        name: "Just Read The Instructions 2",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "dfd08f1e-7def-41ef-84e4-d93894b7218f",
        class: "14245747",
        image: "https://imgur.com/NHsx95l.jpg",
        active: false,
        name: "GO Ms Chief",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "eec3f54b-14ec-450b-bbae-e93b152e3dc4",
        class: null,
        image: "https://imgur.com/FNElWUf.png",
        active: true,
        name: "Mr. Jonah",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "fbb6afba-3afe-4ec0-8876-034226036c04",
        class: null,
        image:
          "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3406596",
        active: true,
        name: "Hollywood",
        __typename: "Ship",
        Missions: [],
      },
      {
        id: "ffb59878-2fda-40d6-9f7b-9f7eb733b082",
        class: "7515789",
        image: "https://imgur.com/WGfvh9I.png",
        active: true,
        name: "Finn Falgout",
        __typename: "Ship",
        Missions: [],
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen p-14">
      <div className="flex gap-8 pb-6">
        <Image width={50} height={50} src="/spaceShip.png" alt="space ship" />
        <p className="text-4xl">Ships</p>
      </div>
      <CardGrid ships={data.data.ships} />
    </main>
  );
}
