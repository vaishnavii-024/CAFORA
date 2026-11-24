
import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      className="px-16 pt-12 pb-6"
      sx={{
        background: '#f5eee5',
        borderTop: '1px solid #eadfd1'
      }}
    >

      <Box className="grid grid-cols-3 gap-10 pb-10">

        {/* Brand Section */}
        <Box>
          <Typography
            sx={{
              fontSize: '36px',
              fontWeight: 'bold',
              fontFamily: 'Georgia',
              color: '#79563f'
            }}
          >
            cafora.
          </Typography>

          <Typography
            sx={{
              color: '#98765d',
              fontSize: '14px',
              lineHeight: 1.9,
              mt: 2,
              maxWidth: '280px'
            }}
          >
            Discover cozy corners, beautiful spaces
            and your next favourite coffee destination.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography
            sx={{
              color: '#38291f',
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: 'Georgia',
              mb: 3
            }}
          >
            Quick Links
          </Typography>

          <Box className="flex flex-col gap-3">

            {[
              { name: 'Home', path: '/' },
              { name: 'Explore Cafes', path: '/explore' },
              { name: 'Favorites', path: '/favorites' },
              { name: 'Manage Cafes', path: '/manage' }
            ].map((item, index) => (
              <Typography
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  color: '#98765d',
                  fontSize: '14px',
                  textDecoration: 'none',
                  width: 'fit-content',
                  '&:hover': {
                    color: '#38291f'
                  }
                }}
              >
                {item.name}
              </Typography>
            ))}

          </Box>
        </Box>

        {/* Stay Connected */}
        <Box>
          <Typography
            sx={{
              color: '#38291f',
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: 'Georgia',
              mb: 3
            }}
          >
            Stay Connected
          </Typography>

          <Typography
            sx={{
              color: '#98765d',
              fontSize: '14px',
              lineHeight: 1.9
            }}
          >
            Find your favourite coffee spot
            and make every moment special.
          </Typography>

          <Box className="flex items-center gap-5 mt-4">

            <FaInstagram
              style={{
                color: '#79563f',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            />

            <FaFacebookF
              style={{
                color: '#79563f',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            />

            <FaEnvelope
              style={{
                color: '#79563f',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            />

          </Box>
        </Box>

      </Box>

      {/* Copyright */}
      <Box
        sx={{
          borderTop: '1px solid #e2d2c1',
          pt: 4,
          textAlign: 'center'
        }}
      >
        <Typography
          sx={{
            color: '#98765d',
            fontSize: '13px'
          }}
        >
          © 2026 Cafora. All rights reserved.
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer
