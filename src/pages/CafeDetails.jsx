
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import {
  FaMapMarkerAlt,
  FaHeart,
  FaStar,
  FaCoffee,
  FaWifi,
  FaParking
} from 'react-icons/fa'

const CafeDetails = () => {
  return (
    <Box
      className="min-h-screen px-16 py-12"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      {/* Cafe Cover Section */}
      <Box className="relative h-[430px] rounded-3xl overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          alt="Cafe"
          className="w-full h-full object-cover"
        />

        <Box
          className="absolute inset-0"
          sx={{
            background: 'linear-gradient(to top, rgba(35,23,15,0.85), transparent 70%)'
          }}
        />

        <Box className="absolute bottom-0 left-0 p-10">

          <Typography sx={{
            color: '#f2dfc9',
            fontSize: '13px',
            letterSpacing: '2px',
            fontWeight: 'bold'
          }}>
            COZY CAFE
          </Typography>

          <Typography sx={{
            color: 'white',
            fontSize: '44px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            mt: 2
          }}>
            Brew Stories
          </Typography>

          <Typography sx={{
            color: '#f5e9dd',
            fontSize: '16px',
            mt: 2
          }}>
            <FaMapMarkerAlt style={{ display: 'inline', marginRight: '8px' }} />
            Kozhikode, Kerala
          </Typography>

        </Box>

        <Box className="absolute top-6 right-6 bg-white rounded-full p-4">
          <FaHeart style={{ color: '#79563f', fontSize: '20px' }} />
        </Box>

      </Box>

      {/* Cafe Information */}
      <Box className="grid grid-cols-3 gap-10 mt-12">

        {/* About Section */}
        <Box className="col-span-2">

          <Typography sx={{
            color: '#a17b5d',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            GET TO KNOW US
          </Typography>

          <Typography sx={{
            color: '#38291f',
            fontSize: '32px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            mt: 2
          }}>
            About This Cafe
          </Typography>

          <Typography sx={{
            color: '#98765d',
            fontSize: '15px',
            lineHeight: 2,
            mt: 3
          }}>
            Brew Stories is a cozy coffee destination where
            great coffee meets a relaxing atmosphere. Enjoy
            delicious beverages, beautiful interiors and
            memorable moments with your loved ones.
          </Typography>

          {/* Highlights */}
          <Typography sx={{
            color: '#38291f',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            mt: 6,
            mb: 3
          }}>
            Cafe Highlights
          </Typography>

          <Box className="grid grid-cols-3 gap-5">

            {[
              { icon: <FaCoffee />, name: 'Great Coffee' },
              { icon: <FaWifi />, name: 'Free Wi-Fi' },
              { icon: <FaParking />, name: 'Parking' }
            ].map((item, index) => (

              <Box
                key={index}
                className="text-center p-6 rounded-2xl"
                sx={{
                  background: 'rgba(255,255,255,0.6)',
                  border: '1px solid #eadfd1'
                }}
              >

                <Box sx={{
                  color: '#79563f',
                  fontSize: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2
                }}>
                  {item.icon}
                </Box>

                <Typography sx={{
                  color: '#79563f',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  {item.name}
                </Typography>

              </Box>

            ))}

          </Box>

        </Box>

        {/* Cafe Summary */}
        <Box
          className="p-7 rounded-2xl h-fit"
          sx={{
            background: 'rgba(255,255,255,0.65)',
            border: '1px solid #eadfd1'
          }}
        >

          <Typography sx={{
            color: '#38291f',
            fontSize: '23px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            mb: 4
          }}>
            Cafe Information
          </Typography>

          <Typography sx={{ color: '#98765d', fontSize: '13px' }}>
            CATEGORY
          </Typography>

          <Typography sx={{ color: '#38291f', fontWeight: 'bold', mt: 1, mb: 3 }}>
            Cozy Cafe
          </Typography>

          <Typography sx={{ color: '#98765d', fontSize: '13px' }}>
            PRICE RANGE
          </Typography>

          <Typography sx={{ color: '#38291f', fontWeight: 'bold', mt: 1, mb: 3 }}>
            ₹₹ – Moderate
          </Typography>

          <Typography sx={{ color: '#98765d', fontSize: '13px' }}>
            LOCATION
          </Typography>

          <Typography sx={{ color: '#38291f', fontWeight: 'bold', mt: 1, mb: 3 }}>
            Kozhikode, Kerala
          </Typography>

          <Box className="flex items-center gap-2">
            <FaStar style={{ color: '#c49a42' }} />
            <Typography sx={{ color: '#38291f', fontWeight: 'bold' }}>
              4.5 / 5
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: '25px',
              background: 'linear-gradient(90deg, #79563f, #b18a6a)',
              textTransform: 'none',
              fontSize: '15px',
              '&:hover': {
                background: '#38291f'
              }
            }}
          >
            Visit Cafe
          </Button>

        </Box>

      </Box>

      {/* Photo Gallery */}
      <Box className="mt-16">

        <Typography sx={{
          color: '#a17b5d',
          fontSize: '13px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          TAKE A LOOK AROUND
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '32px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mt: 2,
          mb: 6
        }}>
          Cafe Gallery
        </Typography>

        <Box className="grid grid-cols-3 gap-6">

          {[
            'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
            'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
            'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
          ].map((image, index) => (

            <Box
              key={index}
              className="h-64 overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt="Cafe interior"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </Box>

          ))}

        </Box>

      </Box>

    </Box>
  )
}

export default CafeDetails
