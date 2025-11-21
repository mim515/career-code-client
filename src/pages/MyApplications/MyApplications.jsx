import React, { Suspense } from 'react'
import ApplicationsStats from './ApplicationsStats'
import ApplicationList from './ApplicationList'
import useAuth from '../../hooks/useAuth'
import { MyApplicationPromise } from '../../api/applicationsApi'



export default function MyApplications() {
  const {user} = useAuth()
  return (
    <div>
      <ApplicationsStats></ApplicationsStats>
      <Suspense fallback={'loading applications'}>
        <ApplicationList 
          MyApplicationPromise={MyApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  )
}
