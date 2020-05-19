import * as React from 'react';
import { TryInfo } from './types';
import { FunctionComponent } from 'react'


const Try:FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {

  return (
    <>
      여기는 Try tsx 입니다.
    </>
  )
}

export default Try;