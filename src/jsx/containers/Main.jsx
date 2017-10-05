import React from 'react';
import SafkaHistoryList from '../presentation/SafkaHistoryList';
import NewSafkaForm from '../presentation/NewSafkaForm';

const fakeHistory = [
  {
    date: '1.2.3456',
    safkas: [
      {
        name: 'Burgeri',
        weight: 500,
        isGross: true,
      },
      {
        name: 'lasaGne',
        weight: 200,
        isGross: true,
      },
      {
        name: 'Vokki',
        weight: 200,
        isGross: false,
      },
    ],
  },
  {
    date: '2.3.4567',
    safkas: [
      {
        name: 'Burgeri',
        weight: 500,
        isGross: true,
      },
      {
        name: 'lasaGne',
        weight: 200,
        isGross: true,
      },
      {
        name: 'Vokki',
        weight: 200,
        isGross: false,
      },
    ],
  },
];

const Main = () => (
  <div>
    <NewSafkaForm />
    <SafkaHistoryList history={fakeHistory} />
  </div>
);

export default Main;

/*
export default class Main extends React.Component {
  render() {
    return (
      <div>
        <NewSafkaForm />
        <SafkaHistoryList history={fakeHistory} />
      </div>
    );
  }
}
*/
