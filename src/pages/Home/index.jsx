import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { asyncListAll, setState } from 'store/stock.store';
import Table from "components/Table";

const Home = () => {
  const dispatch = useDispatch();

  const allMusic = useSelector(state => state.stock.list);

  const columns = [
    {
      attribute: "id",
      label: "#"
    },
    {
      attribute: "md5_image",
      label: "Album"
    },
    {
      attribute: "title",
      label: "Título"
    },
    {
      attribute: "duration",
      label: "Duração"
    }
  ]

  const actions = {
    player: true,
    favorites: 'add',
    deezer: true
  }

  useEffect(() => {
    dispatch(asyncListAll());
    dispatch(setState(true));

    return function cleanup() {
      dispatch(setState(false));
    }
  }, []);

  return(
    <Table
      payload={allMusic}
      columns={columns}
      actions={actions}
    />
  );
}

export default Home;
