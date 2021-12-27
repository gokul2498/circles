import React from 'react'
import ActivityCreation from './ActivityCreation';

const activityHeadingData = ['Time','Type','Address','Amount','Status'];
const activityRowData = [
    {
      createdAt: '14:40',
      type: 'borrow',
      toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
      amount1: '+1024.26 BTC',
      amount: '+1024.26 BTC',
      status: 'ActivityStatusSuccessButton',
      fColor: '#03AE7A',
      icon: 'borrow',
    },
    {
      createdAt: '14:40',
      type: 'borrow',
      toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
      amount1: '+1024.26 BTC',
      amount: '+1024.26 BTC',
      status: 'ActivityStatusSuccessButton',
      fColor: '#D04545',
      icon: 'borrow',
    },
    {
      createdAt: '14:40',
      type: 'lending',
      toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
      amount1: '+1024.26 BTC',
      amount: '+1024.26 BTC',
      status: 'ActivityStatusFailureButton',
      fColor: '#03AE7A',
      icon: 'lending',
    },
    {
      createdAt: '14:40',
      type: 'saving',
      toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
      amount1: '+1024.26 BTC',
      amount: '+1024.26 BTC',
      status: 'ActivityStatusPendingButton',
      fColor: '#03AE7A',
      icon: 'saving',
    },
    {
        createdAt: '14:40',
        type: 'borrow',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusSuccessButton',
        fColor: '#03AE7A',
        icon: 'borrow',   
      },
      {
        createdAt: '14:40',
        type: 'borrow',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusSuccessButton',
        fColor: '#D04545',
        icon: 'borrow',
      },
      {
        createdAt: '14:40',
        type: 'lending',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusFailureButton',
        fColor: '#03AE7A',
        icon: 'lending',
      
      },
      {
        createdAt: '14:40',
        type: 'saving',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusPendingButton',
        fColor: '#03AE7A',
        icon: 'saving',
      },
      {
        createdAt: '14:40',
        type: 'borrow',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusSuccessButton',
        fColor: '#D04545',
        icon: 'borrow',
      },
      {
        createdAt: '14:40',
        type: 'lending',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusFailureButton',
        fColor: '#03AE7A',
        icon: 'lending', 
      },
      {
        createdAt: '14:40',
        type: 'saving',
        toAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        amount1: '+1024.26 BTC',
        amount: '+1024.26 BTC',
        status: 'ActivityStatusPendingButton',
        fColor: '#03AE7A',
        icon: 'saving',
      },
  ];

export default function Activity() {
    return (
        <div>
            <ActivityCreation activityRowData={activityRowData} activityHeadingData={activityHeadingData}/>
        </div>
    )
}
