
import React from 'react'
import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const Header = () => {
  return (
    <Box
      className="flex items-center justify-between px-12 py-6"
      sx={{
        backgroundColor: '#fff9f0',
        // borderBottom: '1px solid #ead6c1'
      }}
    >

      {/* Logo */}
      <Box>
        <Typography
          sx={{
            fontSize: '38px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            color: '#79563f',
            lineHeight: 1
          }}
        >
          cafora.
        </Typography>

        <Typography
          sx={{
            color: '#98765d',
            fontSize: '12px',
            letterSpacing: '1px',
            mt: 1
          }}
        >
          YOUR COFFEE DESTINATION
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box className="flex items-center gap-10">

        {[
          { name: 'Home', path: '/' },
          { name: 'Explore', path: '/explore' },
          { name: 'Favorites', path: '/favorites', icon: <FaHeart /> },
          { name: 'Manage', path: '/manage' }
        ].map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            end={item.path !== '/manage'}
            className={({ isActive }) =>
              `relative flex items-center gap-2 py-2 text-base no-underline transition-all duration-300
              ${
                isActive
                  ? 'text-[#79563f] font-bold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#79563f]'
                  : 'text-[#38291f] hover:text-[#b18a6a]'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>

        ))}

      </Box>

    </Box>
  )
}

export default Header
