import { useNavigate } from '@tanstack/react-router'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'

const RootRoute = () => {

    return (
        <>
            <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-200 via-orange-300 to-pink-500">
                <div className="p-2 flex gap-2">
                    <Link
                        to="/"
                        className="text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110"
                        >
                        Form Builder
                    </Link>
                    <Link
                        to="/table"
                        className="text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        Data Table
                    </Link>
                </div>
                <hr />
                <Outlet />
                {/* <TanStackRouterDevtools /> */}
            </div>
        </>
    )
}

export const Route = createRootRoute({
  component: RootRoute,
})