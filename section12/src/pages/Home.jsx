import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';

const getMonthlyData = (pivotDate, data) => {
  const begin = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const end = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => item.createdDate >= begin && item.createdDate <= end
  );
};

function Home() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);

  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}

export default Home;
