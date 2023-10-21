import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

// interface Person {
//     fname: string;
//     lname: string;
// }

const Like = () => {
  let [isLiked, setLiked] = useState(false);
  //const [name, setName] = useState("siva");
  const [isLoading, setLoading] = useState(false);

  //const [fname, setFname] = useState("siva");
  ///const [lname, setLname] = useState("kumar");

  const [person, setPerson] = useState({
    fname: "siva",
    lname: "kumar",
  });
  const name = person.fname + " " + person.lname;

  return (
    <>
      {!isLiked && (
        <AiOutlineHeart
          size="100"
          onClick={() => {
            setLiked(!isLiked);

            setLoading(true);
          }}
        ></AiOutlineHeart>
      )}
      {isLiked && (
        <AiFillHeart
          size="100"
          onClick={() => setLiked(!isLiked)}
        ></AiFillHeart>
      )}
    </>
  );
};

export default Like;
