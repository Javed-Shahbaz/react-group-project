/* import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/Rockets/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="rocket-container">
      {status && <div>Loading...</div>}
    </div>
  );
}

export default ; */