import React, { useRef } from "react";
import { getService } from "../../services";
import { UserService } from "../../services/user.service";
import useSubscribe from "../../hooks/useSubscribe";

function User() {
  console.log("RxJS: User rerenders");

  const userService = useRef(getService(UserService));
  const login = useSubscribe(
    userService.current.login$,
    userService.current.currentValue.login
  );

  // const [login, setLogin] = useState(userService.current.currentValue.login);
  // useEffect(() => {
  //   const sub = userService.current.login$.subscribe(setLogin);
  //   return () => sub.unsubscribe();
  // }, []);

  return (
    <div>
      <h4>User</h4>
      <p>{login}</p>
    </div>
  );
}

export default User;
