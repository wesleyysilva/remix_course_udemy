import { Link } from "@remix-run/react";

const db = [1, 3, 4, 5, 6, 7, 5, 9, 10];

export default function Index() {
  return (
    <>
      {
        db.map((e) => (
          <h1 key={e}>{e} Hello Juiz de Fora</h1>
        ))
      }
      <Link to="/demo">Ir para Demo page!</Link>
    </>

  );
}
