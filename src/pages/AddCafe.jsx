
import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddCafe = () => {
  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: '#fffdf9',
      '& fieldset': {
        borderColor: '#e5d5c5'
      },
      '&:hover fieldset': {
        borderColor: '#b18a6a'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#79563f'
      }
    },
    '& .MuiInputLabel-root': {
      color: '#98765d'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#79563f'
    }
  }

  return (
    <Box
      className="min-h-screen px-16 py-12"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      {/* Back Button */}
      <Button
        component={Link}
        to="/manage"
        startIcon={<FaArrowLeft />}
        sx={{
          color: '#79563f',
          textTransform: 'none',
          mb: 4,
          '&:hover': {
            background: 'transparent',
            color: '#b18a6a'
          }
        }}
      >
        Back to Manage Cafes
      </Button>

      {/* Heading */}
      <Box className="text-center mb-10">
        <Typography sx={{
          color: '#a17b5d',
          fontSize: '13px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          GROW YOUR COLLECTION
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '38px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mt: 1
        }}>
          Add a New Cafe
        </Typography>

        <Typography sx={{
          color: '#98765d',
          fontSize: '15px',
          mt: 1
        }}>
          Add a beautiful new spot to your Cafora collection.
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        className="max-w-4xl mx-auto p-10 rounded-3xl"
        sx={{
          background: 'rgba(255,255,255,0.75)',
          border: '1px solid #eadfd1',
          boxShadow: '0 12px 35px rgba(121,86,63,0.08)'
        }}
      >

        <Typography sx={{
          color: '#38291f',
          fontSize: '22px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mb: 1
        }}>
          Cafe Information
        </Typography>

        <Typography sx={{
          color: '#98765d',
          fontSize: '14px',
          mb: 4
        }}>
          Enter the details of the cafe below.
        </Typography>

        <Box className="grid grid-cols-2 gap-6">

          <TextField
            fullWidth
            label="Cafe Name"
            placeholder="Enter cafe name"
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Location"
            placeholder="Enter cafe location"
            sx={inputStyle}
          />

          <TextField
            fullWidth
            select
            label="Cafe Category"
            defaultValue=""
            SelectProps={{ native: true }}
            sx={inputStyle}
          >
            <option value="" disabled>Select category</option>
            <option value="Cozy Cafe">Cozy Cafe</option>
            <option value="Aesthetic Cafe">Aesthetic Cafe</option>
            <option value="Modern Cafe">Modern Cafe</option>
            <option value="Luxury Cafe">Luxury Cafe</option>
            <option value="Budget Cafe">Budget Cafe</option>
          </TextField>

          <TextField
            fullWidth
            select
            label="Price Range"
            defaultValue=""
            SelectProps={{ native: true }}
            sx={inputStyle}
          >
            <option value="" disabled>Select price range</option>
            <option value="₹">Budget (₹)</option>
            <option value="₹₹">Moderate (₹₹)</option>
            <option value="₹₹₹">Premium (₹₹₹)</option>
          </TextField>

          <Box className="col-span-2">
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Cafe Description"
              placeholder="Write something about this cafe..."
              sx={inputStyle}
            />
          </Box>

          <Box className="col-span-2">
            <TextField
              fullWidth
              label="Cafe Image URL"
              placeholder="Paste cafe image URL"
              sx={inputStyle}
            />
          </Box>

        </Box>

        {/* Buttons */}
        <Box className="flex justify-end gap-4 mt-8">

          <Button
            component={Link}
            to="/manage"
            sx={{
              color: '#79563f',
              border: '1px solid #d8c4b1',
              px: 4,
              py: 1.4,
              borderRadius: '25px',
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>

          <Button
            startIcon={<FaPlus />}
            sx={{
              background: 'linear-gradient(90deg, #79563f, #b18a6a)',
              color: 'white',
              px: 4,
              py: 1.4,
              borderRadius: '25px',
              textTransform: 'none',
              '&:hover': {
                background: '#38291f'
              }
            }}
          >
            Save Cafe
          </Button>

        </Box>

      </Box>
    </Box>
  )
}

export default AddCafe
