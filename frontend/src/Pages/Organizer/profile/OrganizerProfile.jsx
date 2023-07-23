
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

export default function OrganizerProfile() {
  const user = useAppSelector((state) => state.userState.user);
  // console.log(user)
  const welcome = user ? `Welcome ${user?.name}!` : 'welcome!'

  const content = (
      <section className="welcome">
          <h1>{welcome}</h1>
          <p className="underline hover:text-blue-400"><Link to="/welcome">Go to the welcome</Link></p>
      </section>
  )

  return (
    <>
      <h1>organizer</h1>
    </>
  )
}
