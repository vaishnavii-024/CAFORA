
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Manage = () => {
  return (
    <Box
      className="min-h-screen px-16 py-14"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      {/* Page Heading */}
      <Box className="flex items-center justify-between mb-10">

        <Box>
          <Typography sx={{
            color: '#a17b5d',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            CAFE ADMINISTRATION
          </Typography>

          <Typography sx={{
            color: '#38291f',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            mt: 1
          }}>
            Manage Cafes
          </Typography>

          <Typography sx={{
            color: '#98765d',
            fontSize: '15px',
            mt: 1
          }}>
            Manage and organize your cafe collection.
          </Typography>
        </Box>

        <Button  component={Link}
  to="/add-cafe"
          startIcon={<FaPlus />}
          sx={{
            background: 'linear-gradient(90deg, #79563f, #b18a6a)',
            color: 'white',
            px: 3,
            py: 1.5,
            borderRadius: '25px',
            textTransform: 'none',
            fontSize: '15px',
            '&:hover': {
              background: '#38291f'
            }
          }}
        >
          Add New Cafe
        </Button>

      </Box>

      {/* Summary Card */}
      <Box
        className="p-6 rounded-2xl mb-10"
        sx={{
          background: 'rgba(255,255,255,0.65)',
          border: '1px solid #eadfd1',
          maxWidth: '280px'
        }}
      >
        <Typography sx={{
          color: '#98765d',
          fontSize: '14px'
        }}>
          Total Cafes
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '34px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mt: 1
        }}>
          03
        </Typography>
      </Box>

      {/* Cafe Management Table */}
      <Box
        className="rounded-2xl overflow-hidden"
        sx={{
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid #eadfd1'
        }}
      >

        {/* Table Heading */}
        <Box
          className="grid grid-cols-5 gap-4 px-6 py-5"
          sx={{
            background: '#f0e5d8',
            color: '#79563f'
          }}
        >
          <Typography fontWeight="bold">Cafe</Typography>
          <Typography fontWeight="bold">Location</Typography>
          <Typography fontWeight="bold">Category</Typography>
          <Typography fontWeight="bold">Price</Typography>
          <Typography fontWeight="bold">Actions</Typography>
        </Box>

        {/* Cafe Rows */}
        {[
          {
            name: 'Brew Stories',
            location: 'Kozhikode',
            category: 'Cozy Cafe',
            price: '₹₹',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'
          },
          {
            name: 'The Daily Grind',
            location: 'Kochi',
            category: 'Aesthetic Cafe',
            price: '₹₹₹',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8'
          },
          {
            name: 'The Coffee House',
            location: 'Calicut',
            category: 'Modern Cafe',
            price: '₹₹',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
          }
        ].map((cafe, index) => (

          <Box
            key={index}
            className="grid grid-cols-5 gap-4 items-center px-6 py-5"
            sx={{
              borderTop: '1px solid #eadfd1'
            }}
          >

            {/* Cafe Name and Image */}
            <Box className="flex items-center gap-3">
              <img
                src={cafe.image}
                alt={cafe.name}
                className="w-14 h-14 object-cover rounded-xl"
              />

              <Typography sx={{
                color: '#38291f',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {cafe.name}
              </Typography>
            </Box>

            {/* Location */}
            <Typography sx={{
              color: '#98765d',
              fontSize: '14px'
            }}>
              <FaMapMarkerAlt style={{
                display: 'inline',
                marginRight: '6px'
              }} />
              {cafe.location}
            </Typography>

            {/* Category */}
            <Typography sx={{
              color: '#79563f',
              fontSize: '13px'
            }}>
              {cafe.category}
            </Typography>

            {/* Price */}
            <Typography sx={{
              color: '#79563f',
              fontWeight: 'bold'
            }}>
              {cafe.price}
            </Typography>

            {/* Actions */}
            <Box className="flex items-center gap-3">

              <Button  component={Link}
            to="/edit-cafe"
                sx={{
                  minWidth: '38px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  color: '#79563f',
                  background: '#f2e8dc'
                }}
              >
                <FaEdit />
              </Button>

              <Button
                sx={{
                  minWidth: '38px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  color: '#a65d4e',
                  background: '#f8e8e4'
                }}
              >
                <FaTrash />
              </Button>

            </Box>

          </Box>

        ))}

      </Box>

    </Box>
  )
}

export default Manage
