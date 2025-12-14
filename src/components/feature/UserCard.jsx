export const UserCard = ({
  firstname = "Kyalo Mungai",
  technology = "Full Stack",
}) => {
  return (
    <div>
      <h2>User Name: {firstname}</h2>
      <p>Technology: {technology} </p>
    </div>
  );
};
