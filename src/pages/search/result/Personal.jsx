import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { getPlayers } from '../../../apis';

export default function Personal({ course, name, pw }) {
  const [player, setPlayer] = useState(null);

  const handleApplication = (e) => {
    e.preventDefault(); // Prevent the default form submission
    window.open('https://forms.gle/EbFMy9yv8Ax52E8M6', '_blank'); // Redirect to the URL
  };

  useEffect(() => {
    if (course && name && pw) {
      getPlayers().then((players) => {
        const foundPlayer = players.find((p) => 
        p.course === decodeURIComponent(course) &&
          p.name === decodeURIComponent(name) &&
          p.pw === pw)
          setPlayer(foundPlayer);
      });
    }
  }, [course, name, pw]);

  if (!player) {
    return <div>Loading...</div>; // 데이터 로딩 중 표시
  }

  return (
    <div className="flex p-2 gap-5 bg-blue-100 shadow-md border rounded">
      <img
        alt="userPic"
        className="rounded-2xl h-40 m-4"
        src="https://post-phinf.pstatic.net/MjAyMTA5MDhfMjI5/MDAxNjMxMDg2ODAzNDcz.3016NkIqr1r8lXuugfrHlKmwH4qSH_bLVUOuNcROteUg.HDxFlQuHOqV9uuWXvLAYYidpn2s7-obD544L9Dekt0kg.JPEG/k5qej1u8dy361.jpg?type=w800_q75"
      />
      <div className=" flex flex-col justify-center w-96 mr-5">
        <span className="text-2xl font-semibold mb-5">{player.name}</span>
        <span className="text-2xl font-semibold mb-5">{player.course}</span>
        <form className="" onSubmit={handleApplication}>
        <button className ="bg-yellow-100 w-full border "><p className="font-bold text-lg">외출/조퇴 신청</p></button>
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <h1 className="text-2xl font-bold mb-3">11월 현황</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-300 border-2 border-x-blue-300 border-y-gray-500">
            <tr>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercae tracking-wider"
                scope="col"
              >
                전체
              </th>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-500 uppercae tracking-wider"
                scope="col"
              >
                출석
              </th>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-500 uppercae tracking-wider"
                scope="col"
              >
                결석
              </th>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-500 uppercae tracking-wider"
                scope="col"
              >
                지각
              </th>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-500 uppercae tracking-wider"
                scope="col"
              >
                외출
              </th>
              <th
                className="px-6 py-3 text-left text-md font-semibold text-gray-500 uppercae tracking-wider"
                scope="col"
              >
                조퇴
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-100 divide-y divde-blue-500">
            <tr>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                {player.total}
              </th>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                20
              </th>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                1
              </th>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                2
              </th>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                0
              </th>
              <th className="px-6 py-4 whitespace-nowrap" scope="col">
                1
              </th>
            </tr>
            <tr>
              <th scope="col">100%</th>
              <th scope="col">90.9%</th>
              <th scope="col">4.5%</th>
              <th colSpan="3">4.5%</th>
            </tr>
          </tbody>
        </table>
      </div>
      <PieChart/>
    </div>
  );
}
