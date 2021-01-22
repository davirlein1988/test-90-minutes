import axios from "axios";
const User = ({ data: { avatar_url, name, location } }) => {
  const styles = {
    card: { width: "100%" },
    thumbnail: { height: "50px" },
    name: {
      fontWeight: 700,
      fontZize: "18px",
    },
    location: {
      fontSize: "14px",
      lineHeight: "16px",
      color: "#B1B1B1",
    },
  };
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-sm-5">
          <div className="align-middle">
            <img
              className="rounded-circle float-left img-thumbnail mx-auto d-block m-3"
              src={avatar_url}
              alt={name}
              style={styles.thumbnail}
            />
          </div>
        </div>

        <div className="col-sm-7">
          <div className="card-body">
            <h5 className="card-title" style={styles.name}>
              {name}
            </h5>
            <p className="card-text" style={styles.location}>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

User.getInitialProps = async ({ query }) => {
  const { data } = await axios.get(`https://api.github.com/users/${query.id}`);
  return { data };
};
export default User;
