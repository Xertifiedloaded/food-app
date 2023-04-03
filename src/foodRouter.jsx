import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './mainLayout/mainLayout'
import Landing from './landing/landing'

const FoodRouter = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Landing />,
                }
            ]
        }
    ]

    )
}

export default FoodRouter