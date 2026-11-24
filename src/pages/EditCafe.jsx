
import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem
} from '@mui/material'
import { FaArrowLeft, FaSave } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EditCafe = () => {
  return (
    <Box
      className="min-h-screen px-16 py-12"
      sx={{
        background: 'linear-gradient(120deg, #fffdf9 0%, #fbf6ef 50%, #fffaf4 100%)'
      }}
    >

      <Button
        component={Link}
        to="/manage"
        startIcon={<FaArrowLeft />}
        sx={{
          color: '#79563f',
          textTransform: 'none',
          mb: 4
        }}
      >
        Back to Manage Cafes
      </Button>

      <Box className="text-center mb-10">
        <Typography sx={{
          color: '#a17b5d',
          fontSize: '13px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          UPDATE YOUR COLLECTION
        </Typography>

        <Typography sx={{
          color: '#38291f',
          fontSize: '38px',
          fontWeight: 'bold',
          fontFamily: 'Georgia',
          mt: 1
        }}>
          Edit Cafe Details
        </Typography>

        <Typography sx={{
          color: '#98765d',
          fontSize: '15px',
          mt: 1
        }}>
          Make changes to your existing cafe information.
        </Typography>
      </Box>

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
          Update the cafe details below.
        </Typography>

        <Box className="grid grid-cols-2 gap-6">

          <TextField
            fullWidth
            label="Cafe Name"
            defaultValue="Brew Stories"
            sx={{
              backgroundColor: '#fffdf9',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#79563f'
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#79563f'
              }
            }}
          />

          <TextField
            fullWidth
            label="Location"
            defaultValue="Kozhikode, Kerala"
            sx={{
              backgroundColor: '#fffdf9',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#79563f'
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#79563f'
              }
            }}
          />

          <TextField
            fullWidth
            select
            label="Cafe Category"
            defaultValue="Cozy Cafe"
            sx={{
              backgroundColor: '#fffdf9',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#79563f'
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#79563f'
              }
            }}
          >
            {['Cozy Cafe', 'Aesthetic Cafe', 'Modern Cafe', 'Luxury Cafe', 'Budget Cafe'].map((item) => (
              <MenuItem
                key={item}
                value={item}
                sx={{
                  color: '#79563f',
                  '&:hover': {
                    backgroundColor: '#f2e8dc'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#f7eee4'
                  }
                }}
              >
                {item}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            select
            label="Price Range"
            defaultValue="Moderate"
            sx={{
              backgroundColor: '#fffdf9',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#79563f'
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#79563f'
              }
            }}
          >
            <MenuItem
              value="Budget"
              sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' },
                '&.Mui-selected': { backgroundColor: '#f7eee4' }
              }}
            >
              Budget - ₹100 to ₹300
            </MenuItem>

            <MenuItem
              value="Moderate"
              sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' },
                '&.Mui-selected': { backgroundColor: '#f7eee4' }
              }}
            >
              Moderate - ₹300 to ₹700
            </MenuItem>

            <MenuItem
              value="Premium"
              sx={{
                color: '#79563f',
                '&:hover': { backgroundColor: '#f2e8dc' },
                '&.Mui-selected': { backgroundColor: '#f7eee4' }
              }}
            >
              Premium - ₹700 to ₹1500
            </MenuItem>
          </TextField>

          <Box className="col-span-2">
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Cafe Description"
              defaultValue="A cozy cafe with beautiful interiors and freshly brewed coffee."
              sx={{
                backgroundColor: '#fffdf9',
                borderRadius: '12px',
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: '#79563f'
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#79563f'
                }
              }}
            />
          </Box>

          <Box className="col-span-2">
            <TextField
              fullWidth
              label="Cafe Image URL"
              defaultValue="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
              sx={{
                backgroundColor: '#fffdf9',
                borderRadius: '12px',
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: '#79563f'
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#79563f'
                }
              }}
            />
          </Box>

        </Box>

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
            startIcon={<FaSave />}
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
            Update Cafe
          </Button>

        </Box>

      </Box>
    </Box>
  )
}

export default EditCafe
