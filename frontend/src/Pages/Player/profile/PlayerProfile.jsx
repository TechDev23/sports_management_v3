
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

export default function PlayerProfile() {
  const user = useAppSelector((state) => state.userState.user) || "";
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
      <h1>Hello</h1>
      {
        user && 
        <>
        <div className="flex justify-center items-center">
          <p>Name: {user?.name}</p>
          <Link to={'/player/docs'}>upload documents</Link>
        </div>
        </>
      }
    </>
  )
}
