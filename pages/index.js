import axios from "axios";
import { take } from "lodash";
import Link from "next/link";

const LandingPage = ({ users }) => {
  const heading = users && <h1>Top 5 GitHub Users</h1>;
  return (
    <>
      {heading}
      <p>Tap the username to see more information</p>
      <ul className="list-inline">
        {users.map((user) => (
          <li className="list-inline-item" key={user.login}>
            <Link href={`/users/${user.login}`}>
              <button type="button" className="btn btn-primary m-3">
                {user.login}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

LandingPage.getInitialProps = async () => {
  const { data } = await axios.get("https://api.github.com/users");
  return { users: take(data, 5) };
};
export default LandingPage;
