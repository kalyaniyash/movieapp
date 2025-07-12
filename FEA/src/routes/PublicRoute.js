import React from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {

    const { appState } = useAppStateContext()

    // Allow access to login/register even if authenticated (for testing)
    return <Outlet />;
}

export default PublicRoute
