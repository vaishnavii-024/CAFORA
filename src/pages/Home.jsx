
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCompass,
  FaHeart,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Home = () => {
  return (
    <Box
      className="min-h-screen"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      {/* Hero Section */}
      <Box className="flex items-center justify-between px-25 py-16 gap-12">

        {/* Left Content */}
        <Box className="w-1/2">

          <Typography sx={{
            display: 'inline-block',
            background: '#f2e5d3',
            color: '#79563f',
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            A LITTLE PLACE FOR COFFEE LOVERS
          </Typography>

          <Typography sx={{
            fontSize: '58px',
            fontWeight: 'bold',
            color: '#38291f',
            fontFamily: 'Georgia',
            lineHeight: 1.2,
            mt: 3
          }}>
            Your next favourite cafe is waiting.
          </Typography>

          <Typography sx={{
            color: '#79563f',
            fontSize: '17px',
            mt: 3,
            lineHeight: 1.9,
            maxWidth: '500px'
          }}>
            Discover cozy corners, beautiful spaces
            and your next coffee destination. Find the
            perfect cafe for every mood and moment.
          </Typography>

          <Button
            component={Link}
            to="/explore"
            variant="contained"
            endIcon={<FaArrowRight />}
            sx={{
              background: 'linear-gradient(90deg, #79563f, #b18a6a)',
              color: 'white',
              px: 4,
              py: 1.8,
              borderRadius: '30px',
              mt: 4,
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': {
                background: '#38291f'
              }
            }}
          >
            Explore Cafes
          </Button>

        </Box>

        {/* Right Image */}
        <Box className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
            alt="Beautiful cafe interior"
            className="w-full h-[480px] object-cover rounded-[25px] shadow-xl"
          />
        </Box>

      </Box>


      {/* Categories Section */}
      <Box className="grid grid-cols-5 gap-5 px-20">

        {[
          {
            name: 'Cozy Corners',
            image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0'
          },
          {
            name: 'Aesthetic Cafes',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'
          },
          {
            name: 'Modern Cafes',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8'
          },
          {
            name: 'Luxury Cafes',
            image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353'
          },
          {
            name: 'Budget Cafes',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
          }
        ].map((category, index) => (
          <Box key={index} className="text-center cursor-pointer">

            <Box
              className="h-32 overflow-hidden rounded-xl"
              sx={{
                '&:hover img': {
                  transform: 'scale(1.08)'
                }
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition duration-500"
              />
            </Box>

            <Typography sx={{
              color: '#79563f',
              fontFamily: 'Georgia',
              fontWeight: 'bold',
              fontSize: '15px',
              mt: 2
            }}>
              {category.name}
            </Typography>

          </Box>
        ))}

      </Box>


      {/* Featured Cafes Section */}
      <Box className="px-16 py-16">

        <Box className="text-center mb-10">
          <Typography sx={{
            color: '#a17b5d',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            HANDPICKED FOR YOU
          </Typography>

          <Typography sx={{
            fontSize: '36px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            color: '#38291f',
            mt: 1
          }}>
            Featured Cafes
          </Typography>

          <Typography sx={{ color: '#98765d', fontSize: '15px', mt: 1 }}>
            Beautiful places worth discovering.
          </Typography>
        </Box>

        <Box className="grid grid-cols-3 gap-7">

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
              className="relative h-[390px] overflow-hidden rounded-2xl cursor-pointer group"
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
              <Box className="absolute top-5 right-5 bg-white/90 rounded-full p-3">
                <FaHeart sx={{ color: '#79563f', fontSize: '17px' }} />
              </Box>

              {/* Cafe Details */}
              <Box className="absolute bottom-0 left-0 w-full p-6">

                <Typography sx={{
                  color: '#f2dfc9',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {cafe.category}
                </Typography>

                <Typography sx={{
                  color: '#ffffff',
                  fontSize: '25px',
                  fontFamily: 'Georgia',
                  fontWeight: 'bold'
                }}>
                  {cafe.name}
                </Typography>

                <Box className="flex items-center justify-between mt-3">

                  <Typography sx={{
                    color: '#f5e9dd',
                    fontSize: '13px'
                  }}>
                    <FaMapMarkerAlt style={{ display: 'inline', marginRight: '6px' }} />
                    {cafe.location}
                  </Typography>

                  <Button
                    component={Link}
                    to="/explore"
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '13px',
                      borderBottom: '1px solid #ffffff',
                      borderRadius: 0,
                      minWidth: 'auto',
                      '&:hover': {
                        color: '#e8c9a9',
                        background: 'transparent'
                      }
                    }}
                  >
                    Explore →
                  </Button>

                </Box>
              </Box>

            </Box>
          ))}

        </Box>

      </Box>


      {/* Why Choose Cafora Section */}
      <Box className="px-16 py-16">

        <Box className="text-center mb-12">
          <Typography sx={{
            color: '#a17b5d',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            THE CAFORA EXPERIENCE
          </Typography>

          <Typography sx={{
            fontSize: '36px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            color: '#38291f',
            mt: 1
          }}>
            Why Choose Cafora?
          </Typography>

          <Typography sx={{ color: '#98765d', mt: 2 }}>
            Everything you need to find your perfect coffee spot.
          </Typography>
        </Box>

        <Box className="grid grid-cols-3 gap-8">

          {[
            {
              icon: <FaCompass />,
              title: 'Discover New Places',
              description: 'Explore beautiful cafes and discover hidden coffee spots around you.'
            },
            {
              icon: <FaHeart />,
              title: 'Save Your Favorites',
              description: 'Keep your favourite cafes in one place and visit them anytime.'
            },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Find Your Perfect Spot',
              description: 'Choose cafes that match your mood, taste and budget.'
            }
          ].map((item, index) => (

            <Box
              key={index}
              className="text-center px-7 py-9 rounded-2xl transition duration-300 hover:-translate-y-2"
              sx={{
                background: 'rgba(255,255,255,0.55)',
                border: '1px solid #eadfd1',
                '&:hover': {
                  boxShadow: '0 12px 30px rgba(121,86,63,0.12)'
                }
              }}
            >

              {/* Center Icon */}
              <Box
                className="flex justify-center items-center"
                sx={{
                  color: '#79563f',
                  fontSize: '32px',
                  mb: 2
                }}
              >
                {item.icon}
              </Box>

              <Typography sx={{
                color: '#38291f',
                fontSize: '21px',
                fontFamily: 'Georgia',
                fontWeight: 'bold'
              }}>
                {item.title}
              </Typography>

              <Typography sx={{
                color: '#98765d',
                fontSize: '14px',
                lineHeight: 1.8,
                mt: 2
              }}>
                {item.description}
              </Typography>

            </Box>
          ))}

        </Box>

      </Box>


      {/* Call To Action Section */}
      <Box className="px-16 py-16">

        <Box
          className="relative overflow-hidden rounded-3xl text-center px-10 py-16"
          sx={{
            background: 'linear-gradient(120deg, #79563f 0%, #a77d5d 55%, #c09a78 100%)'
          }}
        >

          <Typography sx={{
            color: '#f2dfc9',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            YOUR COFFEE JOURNEY STARTS HERE
          </Typography>

          <Typography sx={{
            color: '#ffffff',
            fontSize: '38px',
            fontFamily: 'Georgia',
            fontWeight: 'bold',
            mt: 2
          }}>
            Your Next Coffee Moment Starts Here.
          </Typography>

          <Typography sx={{
            color: '#f5e9dd',
            fontSize: '16px',
            mt: 2,
            lineHeight: 1.8
          }}>
            Discover lovely cafes, find your favourite corner
            <br />
            and make every coffee moment special.
          </Typography>

          <Button
            component={Link}
            to="/explore"
            endIcon={<FaArrowRight />}
            sx={{
              mt: 4,
              background: '#fff9f0',
              color: '#79563f',
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '15px',
              '&:hover': {
                background: '#ead6c1',
                transform: 'translateY(-3px)'
              }
            }}
          >
            Explore Cafes
          </Button>

        </Box>

      </Box>

    </Box>
  )
}

export default Home
