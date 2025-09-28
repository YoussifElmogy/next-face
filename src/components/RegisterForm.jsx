import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  MenuItem,
  InputAdornment,
  CircularProgress,
} from '@mui/material'
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
} from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import nextFaceLogo from '../assets/next-face-bo.png'

// Validation schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  organizationName: yup
    .string()
    .required('Organization name is required')
    .min(2, 'Organization name must be at least 2 characters')
    .max(100, 'Organization name must not exceed 100 characters'),
  specialty: yup
    .string()
    .required('Specialty is required')
    .min(2, 'Specialty must be at least 2 characters')
    .max(50, 'Specialty must not exceed 50 characters'),
  nationality: yup
    .string()
    .required('Nationality is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^[\+]?[1-9][\d]{0,15}$/,
      'Please enter a valid phone number'
    ),
})

// Common nationalities list
const nationalities = [
  'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Argentine',
  'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini',
  'Bangladeshi', 'Barbadian', 'Belarusian', 'Belgian', 'Belizean', 'Beninese',
  'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bulgarian',
  'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian',
  'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian',
  'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech',
  'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean',
  'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian',
  'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian',
  'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan',
  'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian',
  'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli',
  'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani',
  'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian',
  'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger',
  'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian',
  'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian',
  'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana',
  'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Ni-Vanuatu',
  'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish',
  'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean',
  'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian',
  'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese',
  'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois',
  'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander',
  'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese',
  'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik',
  'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian or Tobagonian',
  'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan',
  'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
]

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      organizationName: '',
      specialty: '',
      nationality: '',
      phoneNumber: '',
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Registration Data:', data)
      setSubmitSuccess(true)
      reset()
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(26, 55, 65, 0.1)',
          }}
        >
          {/* Logo and Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img
              src={nextFaceLogo}
              alt="Next Face Logo"
              style={{ height: 60, marginBottom: 16 }}
            />
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 1,
              }}
            >
              Join Next Face
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
              }}
            >
              Register for the Innovation Summit 2025
            </Typography>
          </Box>

          {/* Success Message */}
          {submitSuccess && (
            <Alert
              severity="success"
              sx={{ mb: 3, borderRadius: 2 }}
            >
              Registration successful! Redirecting to home page...
            </Alert>
          )}

          {/* Registration Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Full Name */}
              <Grid item size={{xs:12}}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Full Name"
                      placeholder="Enter your full name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Email */}
              <Grid item size={{xs:12}}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email Address"
                      placeholder="Enter your email address"
                      type="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              {/* Nationality */}
              <Grid item size={{xs:12, md:6}}>
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      select
                      label="Nationality"
                      displayEmpty
                      error={!!errors.nationality}
                      helperText={errors.nationality?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PublicIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (selected) => {
                          if (!selected) {
                            return <em style={{ color: '#999', fontStyle: 'normal' }}>Nationality</em>
                          }
                          return selected
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Nationality</em>
                      </MenuItem>
                      {nationalities.map((nationality) => (
                        <MenuItem key={nationality} value={nationality}>
                          {nationality}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>

              {/* Phone Number */}
              <Grid item size={{xs:12, md:6}}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      placeholder="Phone number"
                      type="tel"
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Organization Name */}
              <Grid item size={{xs:12}}>
                <Controller
                  name="organizationName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Organization Name"
                      placeholder="Enter your organization name"
                      error={!!errors.organizationName}
                      helperText={errors.organizationName?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Specialty */}
              <Grid item size={{xs:12}}>
                <Controller
                  name="specialty"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Specialty"
                      placeholder="Enter your specialty"
                      error={!!errors.specialty}
                      helperText={errors.specialty?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <WorkIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.9rem',
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />
              </Grid>


              {/* Submit Button */}
              <Grid item size={{xs:12}}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
                    fontWeight: 400,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    '&:disabled': {
                      bgcolor: 'grey.300',
                    },
                  }}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CircularProgress size={20} color="inherit" />
                      Registering...
                    </Box>
                  ) : (
                    'Register Now'
                  )}
                </Button>
              </Grid>

              {/* Back to Home */}
              <Grid item size={{xs:12}}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => navigate('/')}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'primary.main',
                    },
                  }}
                >
                  ← Back to Home
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default RegisterForm 