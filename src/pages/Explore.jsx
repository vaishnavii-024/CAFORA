
import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl
} from '@mui/material'
import { FaSearch, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Explore = () => {
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
          FIND YOUR NEXT FAVOURITE
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '42px',
          fontFamily: 'Georgia',
          fontWeight: 'bold',
          mt: 2
        }}>
          Explore Cafes
        </Typography>

        <Typography sx={{
          color: '#98765d',
          fontSize: '16px',
          mt: 2
        }}>
          Discover beautiful cafes and coffee spots around you.
        </Typography>
      </Box>

      {/* Search and Filters */}
      <Box className="flex items-end gap-6 mb-12">

        {/* Search */}
        <Box className="flex-1">
          <Typography sx={{
            color: '#79563f',
            fontWeight: 'bold',
            fontSize: '14px',
            mb: 1,
          }}>
            Search Cafe
          </Typography>

          <TextField variant='outlined' 
            placeholder="Search by cafe name..."
            fullWidth
            InputProps={{
              startAdornment: (
                <FaSearch style={{
                  color: '#98765d',
                  marginRight: '12px'
                }} />
              )
            }}
            sx={{
  backgroundColor: 'white',
  borderRadius: '12px',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#eadfd1'
  },

  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f'
  },

  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f',
    borderWidth: '2px'
  }
}}
          />
        </Box>  

        {/* Category Filter */}
        <Box className="w-1/4">
          <Typography sx={{
            color: '#79563f',
            fontWeight: 'bold',
            fontSize: '14px',
            mb: 1
          }}>
            Cafe Category
          </Typography>

          <FormControl fullWidth>
            <Select variant='outlined'
              defaultValue="all"
              sx={{
  backgroundColor: '#fffdf9',
  borderRadius: '12px',
  color: '#79563f',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#eadfd1'
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f'
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f',
    borderWidth: '2px'
  },

  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent'
  }
}}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#fffaf4',
                    borderRadius: '12px'
                  }
                }
              }}
            >
              <MenuItem value="all" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' },
                '&.Mui-selected': { backgroundColor: '#f7eee4' }
              }}>
                All Categories
              </MenuItem>

              <MenuItem value="cozy" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Cozy Cafe
              </MenuItem>

              <MenuItem value="aesthetic" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Aesthetic Cafe
              </MenuItem>

              <MenuItem value="modern" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Modern Cafe
              </MenuItem>

              <MenuItem value="luxury" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Luxury Cafe
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Price Filter */}
        <Box className="w-1/5">
          <Typography sx={{
            color: '#79563f',
            fontWeight: 'bold',
            fontSize: '14px',
            mb: 1
          }}>
            Price Range
          </Typography>

          <FormControl fullWidth>
            <Select variant='outlined'
              defaultValue="all"
             sx={{
  backgroundColor: '#fffdf9',
  borderRadius: '12px',
  color: '#79563f',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#eadfd1'
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f'
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#79563f',
    borderWidth: '2px'
  },

  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent'
  }
}}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#fffaf4',
                    borderRadius: '12px'
                  }
                }
              }}
            >
              <MenuItem value="all" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' },
                '&.Mui-selected': { backgroundColor: '#f7eee4' }
              }}>
                All Prices
              </MenuItem>

              <MenuItem value="low" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Budget (₹100 - ₹300)
              </MenuItem>

              <MenuItem value="medium" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Moderate (₹300 - ₹700)
              </MenuItem>

              <MenuItem value="high" sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' }
              }}>
                Premium (₹700 - ₹1500)
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

      </Box>

      {/* Cafe Cards */}
      <Box className="grid grid-cols-3 gap-8">
        {[
          {
            name: 'Brew Stories',
            location: 'Kozhikode, Kerala',
            category: 'Cozy Cafe',
            price: '₹₹',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'
          },
          {
            name: 'The Daily Grind',
            location: 'Kochi, Kerala',
            category: 'Aesthetic Cafe',
            price: '₹₹₹',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8'
          },
          {
            name: 'The Coffee House',
            location: 'Calicut, Kerala',
            category: 'Modern Cafe',
            price: '₹₹',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
          }
        ].map((cafe, index) => (
          <Box
            component={Link}
            to="/cafedetails"
            key={index}
            className="relative h-[390px] overflow-hidden rounded-2xl cursor-pointer group"
            sx={{ textDecoration: 'none' }}
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
              <FaHeart style={{
                color: '#79563f',
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
                  <FaMapMarkerAlt style={{
                    display: 'inline',
                    marginRight: '6px'
                  }} />
                  {cafe.location}
                </Typography>

                <Typography sx={{
                  color: '#f5e9dd',
                  fontWeight: 'bold'
                }}>
                  {cafe.price}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  )
}

export default Explore
