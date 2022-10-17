import React from "react";
import { useGetUserQuery } from "../../store/api";
import { Seccion } from "../atoms/Seccion";
import { HeaderCardProfile } from "../molecules/HeaderCardProfile";
import { MainContainerProfile } from "../molecules/MainContainerProfile";
import { InfoProfileCard } from "./InfoProfileCard";

export const Profile = () => {
  const {data: user, isLoading} = useGetUserQuery(1);
  if(isLoading) return;

  console.log(user)

  return (
    <>
      <div
        style={{
          margin: "30px 150px" 
        }}
      >
        <HeaderCardProfile image={user.image} level={user.level}></HeaderCardProfile>
        <MainContainerProfile />
        <Seccion value={'Datos de cuenta'}/>
        <InfoProfileCard key={'info-profile-card'}
          byGroup={[
            {
              values: ["Usuario", user.name +" "+user.lastName],
            }
          ]}
        />
        <Seccion value={"Datos personales"} />
        <InfoProfileCard key='info-profile'
          byGroup={[
            {
              values: ["Nombre y apellido", user.name +" "+user.lastName],
            },
            {
              values: ["Nombre elegido", user.name ]
            }
          ]}
        />

      </div>
    </>
  );
};
