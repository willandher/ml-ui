import React from "react";
import { useGetUserResctrictionsQuery } from "../../store/api";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";
import { Seccion } from "../../components/atoms/Seccion";
import { HeaderCardProfile } from "../../components/molecules/HeaderCardProfile";
import { MainContainerProfile } from "../../components/molecules/MainContainerProfile";
import { InfoProfileCard } from "../../components/organisms/InfoProfileCard";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data: resctrictions = [], isLoading } = useGetUserResctrictionsQuery(
    user.id
  );
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div
          style={{
            margin: "30px 150px",
          }}
        >
          <HeaderCardProfile
            image={user.image}
            level={user.level}
            name={user.name}
          ></HeaderCardProfile>
          <MainContainerProfile />
          <Seccion value={"Datos de cuenta"} />
          <InfoProfileCard
            key={"info-profile-card"}
            byGroup={[
              {
                values: ["Usuario", user.name + " " + user.lastName],
              },
            ]}
          />
          <Seccion value={"Datos personales"} />
          <InfoProfileCard
            key="info-profile"
            byGroup={[
              {
                values: ["Nombre y apellido", user.name + " " + user.lastName],
              },
              {
                values: ["Nombre elegido", user.name],
              },
            ]}
          />

          <Seccion value={"Resctriciones de usuario"} />
          {resctrictions.map((restriction) => (
            <InfoProfileCard
              key="info-profile"
              byGroup={[
                {
                  values: [restriction.type, restriction.menssage],
                },
              ]}
            />
          ))}
        </div>
      )}
    </>
  );
};
