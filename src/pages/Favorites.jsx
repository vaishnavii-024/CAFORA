
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FaHeart, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const Favorites = () => {
  return (
    <Box
      className="min-h-screen px-16 py-14"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      {/* Page Heading */}
      <Box className="text-center mb-12">

        <Typography sx={{
          color: '#a17b5d',
          fontSize: '13px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          YOUR PERSONAL COLLECTION
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '42px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mt: 2
        }}>
          Your Favorites
        </Typography>

        <Typography sx={{
          color: '#98765d',
          fontSize: '16px',
          mt: 2
        }}>
          All your favourite coffee spots in one place.
        </Typography>

      </Box>

      {/* Favorites Count */}
      <Box className="flex items-center justify-between mb-8">

        <Typography sx={{
          color: '#38291f',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Georgia'
        }}>
          Saved Cafes
        </Typography>

        <Typography sx={{
          color: '#79563f',
          fontSize: '14px'
        }}>
          3 Cafes Saved
        </Typography>

      </Box>

      {/* Favorite Cafe Cards */}
      <Box className="grid grid-cols-3 gap-8">

        {[
          {
            name: 'Brew Stories',
            location: 'Kozhikode, Kerala',
            category: 'Cozy Cafe',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'
          },
          {
            name: 'The Daily Grind',
            location: 'Kochi, Kerala',
            category: 'Aesthetic Cafe',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8'
          },
          {
            name: 'The Coffee House',
            location: 'Calicut, Kerala',
            category: 'Modern Cafe',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
          }
        ].map((cafe, index) => (

          <Box
            key={index}
            className="relative h-[390px] overflow-hidden rounded-2xl group cursor-pointer"
          >

            <img
              src={cafe.image}
              alt={cafe.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Image Overlay */}
            <Box
              className="absolute inset-0"
              sx={{
                background: 'linear-gradient(to top, rgba(35,23,15,0.85), transparent 65%)'
              }}
            />

            {/* Favorite Icon */}
            <Box className="absolute top-5 right-5 bg-white rounded-full p-3">
              <FaHeart style={{
                color: '#a65d4e',
                fontSize: '17px'
              }} />
            </Box>

            {/* Cafe Details */}
            <Box className="absolute bottom-0 left-0 w-full p-6">

              <Typography sx={{
                color: '#f2dfc9',
                fontSize: '12px',
                fontWeight: 'bold',
                mb: 1
              }}>
                {cafe.category}
              </Typography>

              <Typography sx={{
                color: 'white',
                fontSize: '25px',
                fontWeight: 'bold',
                fontFamily: 'Georgia'
              }}>
                {cafe.name}
              </Typography>

              <Box className="flex items-center justify-between mt-3">

                <Typography sx={{
                  color: '#f5e9dd',
                  fontSize: '13px'
                }}>
                  <FaMapMarkerAlt style={{
                    display: 'inline',
                    marginRight: '6px'
                  }} />
                  {cafe.location}
                </Typography>

                <Button
                  component={Link}
                  to="/cafe-details"
                  endIcon={<FaArrowRight />}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '13px',
                    '&:hover': {
                      color: '#e8c9a9',
                      background: 'transparent'
                    }
                  }}
                >
                  View
                </Button>

              </Box>

            </Box>

          </Box>

        ))}

      </Box>

    </Box>
  )
}

export default Favorites
