import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import registerImg from "../assets/registraton.jpg";

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
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

const ToastAlert = forwardRef(function ToastAlert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import nextFaceLogo from "../assets/next-face-bo.png";

// Validation schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  organizationName: yup
    .string()
    .required("Organization name is required")
    .min(2, "Organization name must be at least 2 characters")
    .max(100, "Organization name must not exceed 100 characters"),
  speciality: yup
    .string()
    .required("Speciality is required")
    .min(2, "Speciality must be at least 2 characters")
    .max(50, "Speciality must not exceed 50 characters"),
  nationality: yup.string().required("Nationality is required"),
  countryCode: yup.string().required("Country code is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only numbers"),
});

// Country codes list
const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+1", country: "CA", flag: "🇨🇦" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
  { code: "+20", country: "EG", flag: "🇪🇬" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+30", country: "GR", flag: "🇬🇷" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+32", country: "BE", flag: "🇧🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+36", country: "HU", flag: "🇭🇺" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+40", country: "RO", flag: "🇷🇴" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+43", country: "AT", flag: "🇦🇹" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+45", country: "DK", flag: "🇩🇰" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
  { code: "+48", country: "PL", flag: "🇵🇱" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+51", country: "PE", flag: "🇵🇪" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+53", country: "CU", flag: "🇨🇺" },
  { code: "+54", country: "AR", flag: "🇦🇷" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+56", country: "CL", flag: "🇨🇱" },
  { code: "+57", country: "CO", flag: "🇨🇴" },
  { code: "+58", country: "VE", flag: "🇻🇪" },
  { code: "+60", country: "MY", flag: "🇲🇾" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+62", country: "ID", flag: "🇮🇩" },
  { code: "+63", country: "PH", flag: "🇵🇭" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+66", country: "TH", flag: "🇹🇭" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+84", country: "VN", flag: "🇻🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+90", country: "TR", flag: "🇹🇷" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+92", country: "PK", flag: "🇵🇰" },
  { code: "+93", country: "AF", flag: "🇦🇫" },
  { code: "+94", country: "LK", flag: "🇱🇰" },
  { code: "+95", country: "MM", flag: "🇲🇲" },
  { code: "+98", country: "IR", flag: "🇮🇷" },
  { code: "+212", country: "MA", flag: "🇲🇦" },
  { code: "+213", country: "DZ", flag: "🇩🇿" },
  { code: "+216", country: "TN", flag: "🇹🇳" },
  { code: "+218", country: "LY", flag: "🇱🇾" },
  { code: "+220", country: "GM", flag: "🇬🇲" },
  { code: "+221", country: "SN", flag: "🇸🇳" },
  { code: "+222", country: "MR", flag: "🇲🇷" },
  { code: "+223", country: "ML", flag: "🇲🇱" },
  { code: "+224", country: "GN", flag: "🇬🇳" },
  { code: "+225", country: "CI", flag: "🇨🇮" },
  { code: "+226", country: "BF", flag: "🇧🇫" },
  { code: "+227", country: "NE", flag: "🇳🇪" },
  { code: "+228", country: "TG", flag: "🇹🇬" },
  { code: "+229", country: "BJ", flag: "🇧🇯" },
  { code: "+230", country: "MU", flag: "🇲🇺" },
  { code: "+231", country: "LR", flag: "🇱🇷" },
  { code: "+232", country: "SL", flag: "🇸🇱" },
  { code: "+233", country: "GH", flag: "🇬🇭" },
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+235", country: "TD", flag: "🇹🇩" },
  { code: "+236", country: "CF", flag: "🇨🇫" },
  { code: "+237", country: "CM", flag: "🇨🇲" },
  { code: "+238", country: "CV", flag: "🇨🇻" },
  { code: "+239", country: "ST", flag: "🇸🇹" },
  { code: "+240", country: "GQ", flag: "🇬🇶" },
  { code: "+241", country: "GA", flag: "🇬🇦" },
  { code: "+242", country: "CG", flag: "🇨🇬" },
  { code: "+243", country: "CD", flag: "🇨🇩" },
  { code: "+244", country: "AO", flag: "🇦🇴" },
  { code: "+245", country: "GW", flag: "🇬🇼" },
  { code: "+246", country: "IO", flag: "🇮🇴" },
  { code: "+248", country: "SC", flag: "🇸🇨" },
  { code: "+249", country: "SD", flag: "🇸🇩" },
  { code: "+250", country: "RW", flag: "🇷🇼" },
  { code: "+251", country: "ET", flag: "🇪🇹" },
  { code: "+252", country: "SO", flag: "🇸🇴" },
  { code: "+253", country: "DJ", flag: "🇩🇯" },
  { code: "+254", country: "KE", flag: "🇰🇪" },
  { code: "+255", country: "TZ", flag: "🇹🇿" },
  { code: "+256", country: "UG", flag: "🇺🇬" },
  { code: "+257", country: "BI", flag: "🇧🇮" },
  { code: "+258", country: "MZ", flag: "🇲🇿" },
  { code: "+260", country: "ZM", flag: "🇿🇲" },
  { code: "+261", country: "MG", flag: "🇲🇬" },
  { code: "+262", country: "RE", flag: "🇷🇪" },
  { code: "+263", country: "ZW", flag: "🇿🇼" },
  { code: "+264", country: "NA", flag: "🇳🇦" },
  { code: "+265", country: "MW", flag: "🇲🇼" },
  { code: "+266", country: "LS", flag: "🇱🇸" },
  { code: "+267", country: "BW", flag: "🇧🇼" },
  { code: "+268", country: "SZ", flag: "🇸🇿" },
  { code: "+269", country: "KM", flag: "🇰🇲" },
  { code: "+290", country: "SH", flag: "🇸🇭" },
  { code: "+291", country: "ER", flag: "🇪🇷" },
  { code: "+297", country: "AW", flag: "🇦🇼" },
  { code: "+298", country: "FO", flag: "🇫🇴" },
  { code: "+299", country: "GL", flag: "🇬🇱" },
  { code: "+350", country: "GI", flag: "🇬🇮" },
  { code: "+351", country: "PT", flag: "🇵🇹" },
  { code: "+352", country: "LU", flag: "🇱🇺" },
  { code: "+353", country: "IE", flag: "🇮🇪" },
  { code: "+354", country: "IS", flag: "🇮🇸" },
  { code: "+355", country: "AL", flag: "🇦🇱" },
  { code: "+356", country: "MT", flag: "🇲🇹" },
  { code: "+357", country: "CY", flag: "🇨🇾" },
  { code: "+358", country: "FI", flag: "🇫🇮" },
  { code: "+359", country: "BG", flag: "🇧🇬" },
  { code: "+370", country: "LT", flag: "🇱🇹" },
  { code: "+371", country: "LV", flag: "🇱🇻" },
  { code: "+372", country: "EE", flag: "🇪🇪" },
  { code: "+373", country: "MD", flag: "🇲🇩" },
  { code: "+374", country: "AM", flag: "🇦🇲" },
  { code: "+375", country: "BY", flag: "🇧🇾" },
  { code: "+376", country: "AD", flag: "🇦🇩" },
  { code: "+377", country: "MC", flag: "🇲🇨" },
  { code: "+378", country: "SM", flag: "🇸🇲" },
  { code: "+380", country: "UA", flag: "🇺🇦" },
  { code: "+381", country: "RS", flag: "🇷🇸" },
  { code: "+382", country: "ME", flag: "🇲🇪" },
  { code: "+383", country: "XK", flag: "🇽🇰" },
  { code: "+385", country: "HR", flag: "🇭🇷" },
  { code: "+386", country: "SI", flag: "🇸🇮" },
  { code: "+387", country: "BA", flag: "🇧🇦" },
  { code: "+389", country: "MK", flag: "🇲🇰" },
  { code: "+420", country: "CZ", flag: "🇨🇿" },
  { code: "+421", country: "SK", flag: "🇸🇰" },
  { code: "+423", country: "LI", flag: "🇱🇮" },
  { code: "+500", country: "FK", flag: "🇫🇰" },
  { code: "+501", country: "BZ", flag: "🇧🇿" },
  { code: "+502", country: "GT", flag: "🇬🇹" },
  { code: "+503", country: "SV", flag: "🇸🇻" },
  { code: "+504", country: "HN", flag: "🇭🇳" },
  { code: "+505", country: "NI", flag: "🇳🇮" },
  { code: "+506", country: "CR", flag: "🇨🇷" },
  { code: "+507", country: "PA", flag: "🇵🇦" },
  { code: "+508", country: "PM", flag: "🇵🇲" },
  { code: "+509", country: "HT", flag: "🇭🇹" },
  { code: "+590", country: "GP", flag: "🇬🇵" },
  { code: "+591", country: "BO", flag: "🇧🇴" },
  { code: "+592", country: "GY", flag: "🇬🇾" },
  { code: "+593", country: "EC", flag: "🇪🇨" },
  { code: "+594", country: "GF", flag: "🇬🇫" },
  { code: "+595", country: "PY", flag: "🇵🇾" },
  { code: "+596", country: "MQ", flag: "🇲🇶" },
  { code: "+597", country: "SR", flag: "🇸🇷" },
  { code: "+598", country: "UY", flag: "🇺🇾" },
  { code: "+599", country: "CW", flag: "🇨🇼" },
  { code: "+670", country: "TL", flag: "🇹🇱" },
  { code: "+672", country: "NF", flag: "🇳🇫" },
  { code: "+673", country: "BN", flag: "🇧🇳" },
  { code: "+674", country: "NR", flag: "🇳🇷" },
  { code: "+675", country: "PG", flag: "🇵🇬" },
  { code: "+676", country: "TO", flag: "🇹🇴" },
  { code: "+677", country: "SB", flag: "🇸🇧" },
  { code: "+678", country: "VU", flag: "🇻🇺" },
  { code: "+679", country: "FJ", flag: "🇫🇯" },
  { code: "+680", country: "PW", flag: "🇵🇼" },
  { code: "+681", country: "WF", flag: "🇼🇫" },
  { code: "+682", country: "CK", flag: "🇨🇰" },
  { code: "+683", country: "NU", flag: "🇳🇺" },
  { code: "+684", country: "AS", flag: "🇦🇸" },
  { code: "+685", country: "WS", flag: "🇼🇸" },
  { code: "+686", country: "KI", flag: "🇰🇮" },
  { code: "+687", country: "NC", flag: "🇳🇨" },
  { code: "+688", country: "TV", flag: "🇹🇻" },
  { code: "+689", country: "PF", flag: "🇵🇫" },
  { code: "+690", country: "TK", flag: "🇹🇰" },
  { code: "+691", country: "FM", flag: "🇫🇲" },
  { code: "+692", country: "MH", flag: "🇲🇭" },
  { code: "+850", country: "KP", flag: "🇰🇵" },
  { code: "+852", country: "HK", flag: "🇭🇰" },
  { code: "+853", country: "MO", flag: "🇲🇴" },
  { code: "+855", country: "KH", flag: "🇰🇭" },
  { code: "+856", country: "LA", flag: "🇱🇦" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+886", country: "TW", flag: "🇹🇼" },
  { code: "+960", country: "MV", flag: "🇲🇻" },
  { code: "+961", country: "LB", flag: "🇱🇧" },
  { code: "+962", country: "JO", flag: "🇯🇴" },
  { code: "+963", country: "SY", flag: "🇸🇾" },
  { code: "+964", country: "IQ", flag: "🇮🇶" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+967", country: "YE", flag: "🇾🇪" },
  { code: "+968", country: "OM", flag: "🇴🇲" },
  { code: "+970", country: "PS", flag: "🇵🇸" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+972", country: "IL", flag: "🇮🇱" },
  { code: "+973", country: "BH", flag: "🇧🇭" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+975", country: "BT", flag: "🇧🇹" },
  { code: "+976", country: "MN", flag: "🇲🇳" },
  { code: "+977", country: "NP", flag: "🇳🇵" },
  { code: "+996", country: "KG", flag: "🇰🇬" },
  { code: "+998", country: "UZ", flag: "🇺🇿" },
];

// Common nationalities list
const nationalities = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Argentine",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Beninese",
  "Bhutanese",
  "Bolivian",
  "Bosnian",
  "Brazilian",
  "British",
  "Bulgarian",
  "Burkinabe",
  "Burmese",
  "Burundian",
  "Cambodian",
  "Cameroonian",
  "Canadian",
  "Cape Verdean",
  "Central African",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comoran",
  "Congolese",
  "Costa Rican",
  "Croatian",
  "Cuban",
  "Cypriot",
  "Czech",
  "Danish",
  "Djibouti",
  "Dominican",
  "Dutch",
  "East Timorese",
  "Ecuadorean",
  "Egyptian",
  "Emirian",
  "Equatorial Guinean",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Fijian",
  "Filipino",
  "Finnish",
  "French",
  "Gabonese",
  "Gambian",
  "Georgian",
  "German",
  "Ghanaian",
  "Greek",
  "Grenadian",
  "Guatemalan",
  "Guinea-Bissauan",
  "Guinean",
  "Guyanese",
  "Haitian",
  "Herzegovinian",
  "Honduran",
  "Hungarian",
  "Icelander",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivorian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kazakhstani",
  "Kenyan",
  "Kittian and Nevisian",
  "Kuwaiti",
  "Kyrgyz",
  "Laotian",
  "Latvian",
  "Lebanese",
  "Liberian",
  "Libyan",
  "Liechtensteiner",
  "Lithuanian",
  "Luxembourger",
  "Macedonian",
  "Malagasy",
  "Malawian",
  "Malaysian",
  "Maldivan",
  "Malian",
  "Maltese",
  "Marshallese",
  "Mauritanian",
  "Mauritian",
  "Mexican",
  "Micronesian",
  "Moldovan",
  "Monacan",
  "Mongolian",
  "Moroccan",
  "Mosotho",
  "Motswana",
  "Mozambican",
  "Namibian",
  "Nauruan",
  "Nepalese",
  "New Zealander",
  "Ni-Vanuatu",
  "Nicaraguan",
  "Nigerian",
  "Nigerien",
  "North Korean",
  "Northern Irish",
  "Norwegian",
  "Omani",
  "Pakistani",
  "Palauan",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Qatari",
  "Romanian",
  "Russian",
  "Rwandan",
  "Saint Lucian",
  "Salvadoran",
  "Samoan",
  "San Marinese",
  "Sao Tomean",
  "Saudi",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Seychellois",
  "Sierra Leonean",
  "Singaporean",
  "Slovakian",
  "Slovenian",
  "Solomon Islander",
  "Somali",
  "South African",
  "South Korean",
  "Spanish",
  "Sri Lankan",
  "Sudanese",
  "Surinamer",
  "Swazi",
  "Swedish",
  "Swiss",
  "Syrian",
  "Taiwanese",
  "Tajik",
  "Tanzanian",
  "Thai",
  "Togolese",
  "Tongan",
  "Trinidadian or Tobagonian",
  "Tunisian",
  "Turkish",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbekistani",
  "Venezuelan",
  "Vietnamese",
  "Welsh",
  "Yemenite",
  "Zambian",
  "Zimbabwean",
];

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      organizationName: "",
      speciality: "",
      nationality: "",
      countryCode: "+20", // Default to Egypt
      phoneNumber: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(""); // Clear any previous errors
    try {
      const apiUrl = `https://nextface-api.onrender.com/api/portal/users/register`;

      const response = await axios.post(apiUrl, {
        email: data.email,
        name: data.name,
        nationality: data.nationality,
        phoneNumber: `${data.countryCode}${data.phoneNumber}`,
        organizationName: data.organizationName,
        speciality: data.speciality,
      });

      console.log("Registration successful:", response.data);
      setShowSuccessToast(true);
      reset();

      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Registration failed:", error);
      setSubmitError("User already registered");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%", // ✅ full width
        backgroundImage: `url(${registerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // ✅ makes it cover full width/height
        backgroundPosition: "center", // ✅ keeps it centered
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(26, 55, 65, 0.1)",
          }}
        >
          {/* Logo and Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img
              src={nextFaceLogo}
              alt="Next Face Logo"
              style={{ height: 60, marginBottom: 16 }}
            />
         
            <Typography
              variant="body1"
              sx={{
                color: "#1a3741",
                mb: 3,
              }}
            >
              Register now and take part in reshaping the aesthetic experience in the heart of Egypt
            </Typography>
          </Box>

          {/* Error Message */}
          {submitError && (
            <Alert
              severity="error"
              sx={{ mb: 3, borderRadius: 2 }}
              onClose={() => setSubmitError("")}
            >
              {submitError}
            </Alert>
          )}

          {/* Registration Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Full Name */}
              <Grid item size={{ xs: 12 }}>
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
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: "0.9rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.75rem",
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#366771", // for example, purple
                          opacity: 1, // ensure full visibility (default is 0.42)
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Email */}
              <Grid item size={{ xs: 12 }}>
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
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: "0.9rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.75rem",
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#366771", // for example, purple
                          opacity: 1, // ensure full visibility (default is 0.42)
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              {/* Nationality */}
              <Grid item size={{ xs: 12 }}>
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
                            return (
                              <em
                                style={{
                                  color: "#366771",
                                  opacity:"1",
                                  fontStyle: "normal",
                                }}
                              >
                                Nationality
                              </em>
                            );
                          }
                          return selected;
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: "0.9rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.75rem",
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

              {/* Phone Number with Country Code */}
              <Grid item size={{ xs: 12 }}>
                <Box sx={{ position: "relative" }}>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Phone Number"
                        placeholder="Enter phone number"
                        type="tel"
                        onChange={(e) => {
                          // Only allow numbers
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          field.onChange(value);
                        }}
                        inputProps={{
                          pattern: "[0-9]*",
                          inputMode: "numeric",
                        }}
                        error={!!errors.phoneNumber || !!errors.countryCode}
                        helperText={
                          errors.phoneNumber?.message ||
                          errors.countryCode?.message
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon color="primary" sx={{ mr: 1 }} />
                              <Controller
                                name="countryCode"
                                control={control}
                                render={({ field: countryField }) => (
                                  <TextField
                                    {...countryField}
                                    select
                                    variant="standard"
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                    SelectProps={{
                                      renderValue: (selected) => {
                                        const country = countryCodes.find(
                                          (c) => c.code === selected
                                        );
                                        console.log(
                                          "Selected country:",
                                          country
                                        ); // Debug log
                                        if (country) {
                                          return `${country.flag} ${country.code}`;
                                        }
                                        return selected;
                                      },
                                    }}
                                    sx={{
                                      minWidth: 80,
                                      "& .MuiInput-root": {
                                        fontSize: "0.9rem",
                                      },
                                      "& .MuiInput-root:before": {
                                        display: "none",
                                      },
                                      "& .MuiInput-root:after": {
                                        display: "none",
                                      },
                                    }}
                                  >
                                    {countryCodes.map((country, index) => (
                                      <MenuItem
                                        key={`${country.code}-${country.country}-${index}`}
                                        value={country.code}
                                      >
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                          }}
                                        >
                                          <span style={{ fontSize: "1.4rem" }}>
                                            {country.flag}
                                          </span>
                                          <span style={{ fontWeight: 500 }}>
                                            {country.code}
                                          </span>
                                          <span
                                            style={{
                                              fontSize: "0.85rem",
                                              color: "#666",
                                            }}
                                          >
                                            {country.country}
                                          </span>
                                        </Box>
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                )}
                              />
                              <Box
                                sx={{
                                  width: "1px",
                                  height: "24px",
                                  backgroundColor: "#ddd",
                                  mx: 1,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            fontSize: "0.9rem",
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: "0.9rem",
                          },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.75rem",
                          },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#366771", // <-- your custom color
                            opacity: 1, // needed so it doesn’t fade
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>

              {/* Organization Name */}
              <Grid item size={{ xs: 12 }}>
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
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: "0.9rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.75rem",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#366771", // <-- your custom color
                          opacity: 1, // needed so it doesn’t fade
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Speciality */}
              <Grid item size={{ xs: 12 }}>
                <Controller
                  name="speciality"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Speciality"
                      placeholder="Enter your speciality"
                      error={!!errors.speciality}
                      helperText={errors.speciality?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <WorkIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: "0.9rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.75rem",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#366771", // <-- your custom color
                          opacity: 1, // needed so it doesn’t fade
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item size={{ xs: 12 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: "1rem",
                    fontWeight: 400,
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    "&:disabled": {
                      bgcolor: "grey.300",
                    },
                  }}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CircularProgress size={20} color="inherit" />
                      Registering...
                    </Box>
                  ) : (
                    "Register Now"
                  )}
                </Button>
              </Grid>

              {/* Back to Home */}
              <Grid item size={{ xs: 12 }}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => navigate("/")}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "primary.main",
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

      {/* Success Toast */}
      <Snackbar
        open={showSuccessToast}
        autoHideDuration={4000}
        onClose={() => setShowSuccessToast(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <ToastAlert
          onClose={() => setShowSuccessToast(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration successful! Redirecting to home page...
        </ToastAlert>
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
